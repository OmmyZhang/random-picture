let S=0,T=`string`,O=1,V=`Object`,Q=`utf-8`,N=null,P=`undefined`,W=4,U=`function`,L=128,K=Array,R=Error,Y=Object,X=Reflect,M=undefined;var t=((b,c)=>{a.wasm_bindgen__convert__closures__invoke0_mut__hcc3d0edbae944cf0(b,c)});var l=(a=>{const b=typeof a;if(b==`number`||b==`boolean`||a==N){return `${a}`};if(b==T){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==N){return `Symbol`}else{return `Symbol(${b})`}};if(b==U){const b=a.name;if(typeof b==T&&b.length>S){return `Function(${b})`}else{return `Function`}};if(K.isArray(a)){const b=a.length;let c=`[`;if(b>S){c+=l(a[S])};for(let d=O;d<b;d++){c+=`, `+ l(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>O){d=c[O]}else{return toString.call(a)};if(d==V){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return V}};if(a instanceof R){return `${a.name}: ${a.message}\n${a.stack}`};return d});var y=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h502a691ce059cac5(b,c,g(d))});var G=((a,b)=>{});var C=((a,b)=>{a=a>>>S;const c=B();const d=c.subarray(a/W,a/W+ b);const e=[];for(let a=S;a<d.length;a++){e.push(f(d[a]))};return e});var x=((c,d,e)=>{try{a.wasm_bindgen__convert__closures__invoke1_ref__h6da99c9cc49dbcb4(c,d,w(e))}finally{b[v++]=M}});var g=(a=>{if(d===b.length)b.push(b.length+ O);const c=d;d=b[c];b[c]=a;return c});var f=(a=>{const b=c(a);e(a);return b});function D(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(g(b))}}var J=(async(b)=>{if(a!==M)return a;if(typeof b===P){b=new URL(`random-picture-74762a81fad581a9_bg.wasm`,import.meta.url)};const c=F();if(typeof b===T||typeof Request===U&&b instanceof Request||typeof URL===U&&b instanceof URL){b=fetch(b)};G(c);const {instance:d,module:e}=await E(await b,c);return H(d,e)});var I=(b=>{if(a!==M)return a;const c=F();G(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return H(d,b)});var r=(()=>{if(q===N||q.byteLength===S){q=new Int32Array(a.memory.buffer)};return q});var z=(a=>a===M||a===N);var c=(a=>b[a]);var H=((b,c)=>{a=b.exports;J.__wbindgen_wasm_module=c;q=N;A=N;i=N;a.__wbindgen_start();return a});var F=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==O){b.a=S;return !0};const c=!1;return c});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return g(b)});b.wbg.__wbindgen_string_new=((a,b)=>{const c=k(a,b);return g(c)});b.wbg.__wbg_cachekey_b81c1aacc6a0645c=((a,b)=>{const d=c(b).__yew_subtree_cache_key;r()[a/W+ O]=z(d)?S:d;r()[a/W+ S]=!z(d)});b.wbg.__wbg_subtreeid_e80a1798fee782f9=((a,b)=>{const d=c(b).__yew_subtree_id;r()[a/W+ O]=z(d)?S:d;r()[a/W+ S]=!z(d)});b.wbg.__wbg_setsubtreeid_e1fab6b578c800cf=((a,b)=>{c(a).__yew_subtree_id=b>>>S});b.wbg.__wbg_setcachekey_75bcd45312087529=((a,b)=>{c(a).__yew_subtree_cache_key=b>>>S});b.wbg.__wbg_listenerid_6dcf1c62b7b7de58=((a,b)=>{const d=c(b).__yew_listener_id;r()[a/W+ O]=z(d)?S:d;r()[a/W+ S]=!z(d)});b.wbg.__wbg_setlistenerid_f2e783343fa0cec1=((a,b)=>{c(a).__yew_listener_id=b>>>S});b.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new R();return g(a)});b.wbg.__wbg_stack_658279fe44541cf6=((b,d)=>{const e=c(d).stack;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/W+ O]=g;r()[b/W+ S]=f});b.wbg.__wbg_error_f851667af71bcfc6=((b,c)=>{let d;let e;try{d=b;e=c;console.error(k(b,c))}finally{a.__wbindgen_free(d,e,O)}});b.wbg.__wbg_queueMicrotask_118eeb525d584d9a=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_queueMicrotask_26a89c14c53809c0=(a=>{const b=c(a).queueMicrotask;return g(b)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===U;return b});b.wbg.__wbg_error_a526fb08a0205972=((b,c)=>{var d=C(b,c).slice();a.__wbindgen_free(b,c*W,W);console.error(...d)});b.wbg.__wbg_body_3eb73da919b867a1=(a=>{const b=c(a).body;return z(b)?S:g(b)});b.wbg.__wbg_createElement_1a136faad4101f43=function(){return D(((a,b,d)=>{const e=c(a).createElement(k(b,d));return g(e)}),arguments)};b.wbg.__wbg_createElementNS_d47e0c50fa2904e0=function(){return D(((a,b,d,e,f)=>{const h=c(a).createElementNS(b===S?M:k(b,d),k(e,f));return g(h)}),arguments)};b.wbg.__wbg_createTextNode_dbdd908f92bae1b1=((a,b,d)=>{const e=c(a).createTextNode(k(b,d));return g(e)});b.wbg.__wbg_instanceof_Window_99dc9805eaa2614b=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_document_5257b70811e953c0=(a=>{const b=c(a).document;return z(b)?S:g(b)});b.wbg.__wbg_instanceof_Element_f614cf57d4316979=(a=>{let b;try{b=c(a) instanceof Element}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_namespaceURI_0819c2800784a176=((b,d)=>{const e=c(d).namespaceURI;var f=z(e)?S:p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=m;r()[b/W+ O]=g;r()[b/W+ S]=f});b.wbg.__wbg_setinnerHTML_99deeacfff0ae4cc=((a,b,d)=>{c(a).innerHTML=k(b,d)});b.wbg.__wbg_outerHTML_69934f9195df65af=((b,d)=>{const e=c(d).outerHTML;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/W+ O]=g;r()[b/W+ S]=f});b.wbg.__wbg_removeAttribute_5c264e727b67dbdb=function(){return D(((a,b,d)=>{c(a).removeAttribute(k(b,d))}),arguments)};b.wbg.__wbg_setAttribute_0918ea45d5a1c663=function(){return D(((a,b,d,e,f)=>{c(a).setAttribute(k(b,d),k(e,f))}),arguments)};b.wbg.__wbg_createObjectURL_0a02ce8c75afc373=function(){return D(((b,d)=>{const e=URL.createObjectURL(c(d));const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/W+ O]=g;r()[b/W+ S]=f}),arguments)};b.wbg.__wbg_target_791826e938c3e308=(a=>{const b=c(a).target;return z(b)?S:g(b)});b.wbg.__wbg_bubbles_f0783dc095f8e220=(a=>{const b=c(a).bubbles;return b});b.wbg.__wbg_cancelBubble_191799b8e0ab3254=(a=>{const b=c(a).cancelBubble;return b});b.wbg.__wbg_composedPath_d94a39b8c8f6eed1=(a=>{const b=c(a).composedPath();return g(b)});b.wbg.__wbg_value_ab23a75318ea828f=((b,d)=>{const e=c(d).value;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/W+ O]=g;r()[b/W+ S]=f});b.wbg.__wbg_setvalue_918a8ae77531a942=((a,b,d)=>{c(a).value=k(b,d)});b.wbg.__wbg_parentNode_f3957fdd408a62f7=(a=>{const b=c(a).parentNode;return z(b)?S:g(b)});b.wbg.__wbg_parentElement_86a7612dde875ba9=(a=>{const b=c(a).parentElement;return z(b)?S:g(b)});b.wbg.__wbg_childNodes_75d3da5f3a7bb985=(a=>{const b=c(a).childNodes;return g(b)});b.wbg.__wbg_lastChild_8f7b6f3825115eff=(a=>{const b=c(a).lastChild;return z(b)?S:g(b)});b.wbg.__wbg_nextSibling_13e9454ef5323f1a=(a=>{const b=c(a).nextSibling;return z(b)?S:g(b)});b.wbg.__wbg_setnodeValue_8656e865e9b11bbb=((a,b,d)=>{c(a).nodeValue=b===S?M:k(b,d)});b.wbg.__wbg_textContent_efe8338af53ddf62=((b,d)=>{const e=c(d).textContent;var f=z(e)?S:p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=m;r()[b/W+ O]=g;r()[b/W+ S]=f});b.wbg.__wbg_cloneNode_80501c66ab115588=function(){return D((a=>{const b=c(a).cloneNode();return g(b)}),arguments)};b.wbg.__wbg_insertBefore_882082ef4c5d7766=function(){return D(((a,b,d)=>{const e=c(a).insertBefore(c(b),c(d));return g(e)}),arguments)};b.wbg.__wbg_removeChild_14b08321b677677a=function(){return D(((a,b)=>{const d=c(a).removeChild(c(b));return g(d)}),arguments)};b.wbg.__wbg_instanceof_ShadowRoot_cb6366cb0956ce29=(a=>{let b;try{b=c(a) instanceof ShadowRoot}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_host_99e27ed8897850f2=(a=>{const b=c(a).host;return g(b)});b.wbg.__wbg_addEventListener_1b158e9e95e0ab00=function(){return D(((a,b,d,e,f)=>{c(a).addEventListener(k(b,d),c(e),c(f))}),arguments)};b.wbg.__wbg_setchecked_3b12f3d602a63e47=((a,b)=>{c(a).checked=b!==S});b.wbg.__wbg_files_0fe2affb0f600765=(a=>{const b=c(a).files;return z(b)?S:g(b)});b.wbg.__wbg_value_c93cb4b4d352228e=((b,d)=>{const e=c(d).value;const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/W+ O]=g;r()[b/W+ S]=f});b.wbg.__wbg_setvalue_9bd3f93b3864ddbf=((a,b,d)=>{c(a).value=k(b,d)});b.wbg.__wbg_valueAsNumber_986774b5f3a5de8f=(a=>{const b=c(a).valueAsNumber;return b});b.wbg.__wbg_item_e09547f67fe7cfab=((a,b)=>{const d=c(a).item(b>>>S);return z(d)?S:g(d)});b.wbg.__wbg_clearTimeout_541ac0980ffcef74=(a=>{const b=clearTimeout(f(a));return g(b)});b.wbg.__wbg_setTimeout_7d81d052875b0f4f=function(){return D(((a,b)=>{const d=setTimeout(c(a),b);return g(d)}),arguments)};b.wbg.__wbg_get_c43534c00f382c8a=((a,b)=>{const d=c(a)[b>>>S];return g(d)});b.wbg.__wbg_length_d99b680fd68bf71b=(a=>{const b=c(a).length;return b});b.wbg.__wbg_newnoargs_5859b6d41c6fe9f7=((a,b)=>{const c=new Function(k(a,b));return g(c)});b.wbg.__wbindgen_is_object=(a=>{const b=c(a);const d=typeof b===`object`&&b!==N;return d});b.wbg.__wbg_next_1938cf110c9491d4=(a=>{const b=c(a).next;return g(b)});b.wbg.__wbg_next_267398d0e0761bf9=function(){return D((a=>{const b=c(a).next();return g(b)}),arguments)};b.wbg.__wbg_done_506b44765ba84b9c=(a=>{const b=c(a).done;return b});b.wbg.__wbg_value_31485d8770eb06ab=(a=>{const b=c(a).value;return g(b)});b.wbg.__wbg_iterator_364187e1ee96b750=(()=>{const a=Symbol.iterator;return g(a)});b.wbg.__wbg_get_5027b32da70f39b1=function(){return D(((a,b)=>{const d=X.get(c(a),c(b));return g(d)}),arguments)};b.wbg.__wbg_call_a79f1973a4f07d5e=function(){return D(((a,b)=>{const d=c(a).call(c(b));return g(d)}),arguments)};b.wbg.__wbg_new_87d841e70661f6e9=(()=>{const a=new Y();return g(a)});b.wbg.__wbg_self_086b5302bcafb962=function(){return D((()=>{const a=self.self;return g(a)}),arguments)};b.wbg.__wbg_window_132fa5d7546f1de5=function(){return D((()=>{const a=window.window;return g(a)}),arguments)};b.wbg.__wbg_globalThis_e5f801a37ad7d07b=function(){return D((()=>{const a=globalThis.globalThis;return g(a)}),arguments)};b.wbg.__wbg_global_f9a61fce4af6b7c1=function(){return D((()=>{const a=global.global;return g(a)}),arguments)};b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===M;return b});b.wbg.__wbg_from_a663e01d8dab8e44=(a=>{const b=K.from(c(a));return g(b)});b.wbg.__wbg_is_a5728dbfb61c82cd=((a,b)=>{const d=Y.is(c(a),c(b));return d});b.wbg.__wbg_resolve_97ecd55ee839391b=(a=>{const b=Promise.resolve(c(a));return g(b)});b.wbg.__wbg_then_7aeb7c5f1536640f=((a,b)=>{const d=c(a).then(c(b));return g(d)});b.wbg.__wbg_set_37a50e901587b477=function(){return D(((a,b,d)=>{const e=X.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbindgen_debug_string=((b,d)=>{const e=l(c(d));const f=p(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=m;r()[b/W+ O]=g;r()[b/W+ S]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new R(k(a,b))});b.wbg.__wbindgen_closure_wrapper217=((a,b,c)=>{const d=s(a,b,95,t);return g(d)});b.wbg.__wbindgen_closure_wrapper441=((a,b,c)=>{const d=u(a,b,161,x);return g(d)});b.wbg.__wbindgen_closure_wrapper576=((a,b,c)=>{const d=s(a,b,211,y);return g(d)});return b});var E=(async(a,b)=>{if(typeof Response===U&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===U){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var B=(()=>{if(A===N||A.byteLength===S){A=new Uint32Array(a.memory.buffer)};return A});var u=((b,c,d,e)=>{const f={a:b,b:c,cnt:O,dtor:d};const g=(...b)=>{f.cnt++;try{return e(f.a,f.b,...b)}finally{if(--f.cnt===S){a.__wbindgen_export_2.get(f.dtor)(f.a,f.b);f.a=S}}};g.original=f;return g});var e=(a=>{if(a<132)return;b[a]=d;d=a});var s=((b,c,d,e)=>{const f={a:b,b:c,cnt:O,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=S;try{return e(c,f.b,...b)}finally{if(--f.cnt===S){a.__wbindgen_export_2.get(f.dtor)(c,f.b)}else{f.a=c}}};g.original=f;return g});var p=((a,b,c)=>{if(c===M){const c=n.encode(a);const d=b(c.length,O)>>>S;j().subarray(d,d+ c.length).set(c);m=c.length;return d};let d=a.length;let e=b(d,O)>>>S;const f=j();let g=S;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==S){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,O)>>>S;const b=j().subarray(e+ g,e+ d);const f=o(a,b);g+=f.written};m=g;return e});var j=(()=>{if(i===N||i.byteLength===S){i=new Uint8Array(a.memory.buffer)};return i});var k=((a,b)=>{a=a>>>S;return h.decode(j().subarray(a,a+ b))});var w=(a=>{if(v==O)throw new R(`out of js stack`);b[--v]=a;return v});let a;const b=new K(L).fill(M);b.push(M,N,!0,!1);let d=b.length;const h=typeof TextDecoder!==P?new TextDecoder(Q,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw R(`TextDecoder not available`)}};if(typeof TextDecoder!==P){h.decode()};let i=N;let m=S;const n=typeof TextEncoder!==P?new TextEncoder(Q):{encode:()=>{throw R(`TextEncoder not available`)}};const o=typeof n.encodeInto===U?((a,b)=>n.encodeInto(a,b)):((a,b)=>{const c=n.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=N;let v=L;let A=N;export default J;export{I as initSync}