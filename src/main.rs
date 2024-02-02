use web_sys::{Blob, Event, HtmlInputElement, Url};
use yew::virtual_dom::AttrValue;
use yew::{function_component, html, use_state, Callback, Html, TargetCast, use_effect_with, use_mut_ref};
use gloo_timers::callback::Timeout;

#[function_component(App)]
fn app() -> Html {
    let is_running = use_state(|| false);
    let images = use_state(Vec::new);
    let pos = use_state(|| 0);
    let interv = use_state(|| 1200);
    let timeout = use_mut_ref(|| None);

    let run_cb = {
        let is_running = is_running.clone();
        Callback::from(move |_| is_running.set(!*is_running))
    };

    let upload_cb = {
        let images = images.clone();
        Callback::from(move |e: Event| {
            let input: HtmlInputElement = e.target_unchecked_into();
            if let Some(fs) = input
                .files()
                .and_then(|fs| js_sys::try_iter(&fs).unwrap())
                .map(|fs| {
                    fs.map(|v| {
                        let blob = Blob::from(v.unwrap());
                        AttrValue::from(Url::create_object_url_with_blob(&blob).unwrap())
                    })
                    .collect()
                })
            {
                images.set(fs)
            }
        })
    };

    {
        let pos = pos.clone();
        let is_running = is_running.clone();
        let images = images.clone();
        let interv = interv.clone();
        let timeout = timeout.clone();
        use_effect_with((*pos, *is_running), move|(_, is_running)| {
            if *is_running && !images.is_empty() {
                *timeout.borrow_mut() = Some(Timeout::new(*interv, move ||{
                    pos.set((*pos + 1) % images.len());
                }));
            } else {
                *timeout.borrow_mut() = None;
            }
        });
    }

    html! {
        <div class="container">
            <div class="header">
                <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    multiple={true}
                    onchange={upload_cb}
                />
                <button class="run-btn" onclick={run_cb}>
                    {
                        if *is_running { "停" } else { "转" }
                    }
                </button>
            </div>
            if !images.is_empty() {
                <div class="images">
                {
                    (0..5).into_iter().map(|idx| {
                        let url = images[(idx + *pos + images.len()) % images.len()].clone();
                        html! {
                            <div
                                class="image-wapper"
                                style={
                                    format!(
                                        "animation: img_{} {}s forwards linear",
                                        idx, *interv as f32 / 1000.0
                                    )
                                }
                                key={url.as_str()}
                            >
                                <img src={url} />
                            </div>
                        }
                    }) .collect::<Html>()
                }
                </div>
            }
        </div>
    }
}

fn main() {
    yew::Renderer::<App>::new().render();
}
