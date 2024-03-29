use gloo_timers::callback::Timeout;
use web_sys::{Blob, Event, HtmlInputElement, Url};
use yew::virtual_dom::AttrValue;
use yew::{
    function_component, html, use_effect_with, use_mut_ref, use_state, Callback, Html, TargetCast,
};

#[function_component(App)]
fn app() -> Html {
    let is_running = use_state(|| false);
    let images = use_state(Vec::new);
    let pos = use_state(|| 0);
    let interv = use_state(|| 500);
    let timeout = use_mut_ref(|| None);

    let background = use_state(|| None);

    let run_cb = {
        let is_running = is_running.clone();
        let pos = pos.clone();
        let timeout = timeout.clone();
        Callback::from(move |_| {
            if *is_running {
                *timeout.borrow_mut() = None;
            } else {
                pos.set(*pos + 1);
            }
            is_running.set(!*is_running);
        })
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

    let upload_bg_cb = {
        let background = background.clone();
        Callback::from(move |e: Event| {
            let input: HtmlInputElement = e.target_unchecked_into();
            if let Some(f) = input
                .files()
                .and_then(|fs| fs.item(0))
                .map(|f| AttrValue::from(Url::create_object_url_with_blob(&f).unwrap()))
            {
                background.set(Some(f))
            }
        })
    };
    let speed_cb = {
        let interv = interv.clone();
        let pos = pos.clone();
        Callback::from(move |e: Event| {
            let input: HtmlInputElement = e.target_unchecked_into();
            let value = input.value_as_number();
            interv.set(value as u32);
            pos.set(*pos + 1);
        })
    };

    {
        let pos = pos.clone();
        let is_running = is_running.clone();
        let images = images.clone();
        let interv = interv.clone();
        let timeout = timeout.clone();
        use_effect_with(*pos, move |_| {
            if *is_running && !images.is_empty() {
                *timeout.borrow_mut() = Some(Timeout::new(*interv, move || {
                    pos.set((*pos + 1) % images.len());
                }));
            }
        });
    }

    html! {
        <div
            class="container"
            style={
                background.as_ref().map(|bg| {
                    format!("background: center / cover no-repeat url('{}')", bg)
                }).unwrap_or_default()
            }
        >
            <div class="header">
                <div class="uploads">
                    <label class="files-select" for="files-upload">
                        { "选择照片" }
                    </label>
                    <input
                        id="files-upload"
                        type="file"
                        accept="image/*"
                        multiple={true}
                        onchange={upload_cb}
                    />
                    <label class="background-select" for="background-upload">
                        { "选择背景" }
                    </label>
                    <input
                        id="background-upload"
                        type="file"
                        accept="image/*"
                        onchange={upload_bg_cb}
                    />
                </div>
                <button class="run-btn" onclick={run_cb}>
                    {
                        if *is_running { "停" } else { "转" }
                    }
                </button>
            </div>
            <div class="footer">
                <div class="speed-input">
                    <span>{ "快" }</span>
                    <input
                        type="range"
                        min={100}
                        max={2000}
                        value={interv.to_string()}
                        onchange={speed_cb}
                    />
                    <span>{ "慢" }</span>
                </div>
            </div>
            if images.len() > 4 {
                <div class="images">
                {
                    (0..4).into_iter().map(|idx| {
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
            } else {
                <div class="empty-hint">{ "请选择至少四张照片" }</div>
            }
        </div>
    }
}

fn main() {
    yew::Renderer::<App>::new().render();
}
