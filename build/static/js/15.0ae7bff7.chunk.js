(this["webpackJsonpshop-react"]=this["webpackJsonpshop-react"]||[]).push([[15],{544:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(0),u=(n=i)&&n.__esModule?n:{default:n},c=r(23);var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.scriptLoaderId="id"+r.constructor.idCount++,r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.onError,r=e.onLoad,n=e.url;this.constructor.loadedScripts[n]?r():this.constructor.erroredScripts[n]?t():this.constructor.scriptObservers[n]?this.constructor.scriptObservers[n][this.scriptLoaderId]=this.props:(this.constructor.scriptObservers[n]=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({},this.scriptLoaderId,this.props),this.createScript())}},{key:"componentWillUnmount",value:function(){var e=this.props.url,t=this.constructor.scriptObservers[e];t&&delete t[this.scriptLoaderId]}},{key:"createScript",value:function(){var e=this,t=this.props,r=t.onCreate,n=t.url,o=t.attributes,i=document.createElement("script");r(),o&&Object.keys(o).forEach((function(e){return i.setAttribute(e,o[e])})),i.src=n,i.hasAttribute("async")||(i.async=1);var u=function(t){var r=e.constructor.scriptObservers[n];Object.keys(r).forEach((function(o){t(r[o])&&delete e.constructor.scriptObservers[n][e.scriptLoaderId]}))};i.onload=function(){e.constructor.loadedScripts[n]=!0,u((function(e){return e.onLoad(),!0}))},i.onerror=function(){e.constructor.erroredScripts[n]=!0,u((function(e){return e.onError(),!0}))},document.body.appendChild(i)}},{key:"render",value:function(){return null}}]),t}(u.default.Component);s.propTypes={attributes:c.PropTypes.object,onCreate:c.PropTypes.func,onError:c.PropTypes.func.isRequired,onLoad:c.PropTypes.func.isRequired,url:c.PropTypes.string.isRequired},s.defaultProps={attributes:{},onCreate:function(){},onError:function(){},onLoad:function(){}},s.scriptObservers={},s.loadedScripts={},s.erroredScripts={},s.idCount=0,t.default=s,e.exports=t.default},633:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n="https://js.stripe.com/v3",o=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,i="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",u=null,c=function(e){return null!==u?u:u=new Promise((function(t,r){if("undefined"!==typeof window)if(window.Stripe&&e&&console.warn(i),window.Stripe)t(window.Stripe);else try{var u=function(){for(var e=document.querySelectorAll('script[src^="'.concat(n,'"]')),t=0;t<e.length;t++){var r=e[t];if(o.test(r.src))return r}return null}();u&&e?console.warn(i):u||(u=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(n).concat(t);var o=document.head||document.body;if(!o)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return o.appendChild(r),r}(e)),u.addEventListener("load",(function(){window.Stripe?t(window.Stripe):r(new Error("Stripe.js not available"))})),u.addEventListener("error",(function(){r(new Error("Failed to load Stripe.js"))}))}catch(c){return void r(c)}else t(null)}))},s=function(e,t,r){if(null===e)return null;var n=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.16.0",startTime:t})}(n,r),n},a=Promise.resolve().then((function(){return c(null)})),p=!1;a.catch((function(e){p||console.warn(e)}));var l=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];p=!0;var n=Date.now();return a.then((function(e){return s(e,t,n)}))}},634:function(e,t,r){!function(e,t){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function o(e,t){if(null==e)return{};var r,o,i=n(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)r=u[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function i(e,t){return u(e)||c(e,t)||s(e,t)||p()}function u(e){if(Array.isArray(e))return e}function c(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var u,c=e[Symbol.iterator]();!(n=(u=c.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(s){o=!0,i=s}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}function s(e,t){if(e){if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){return e(t={exports:{}},t.exports),t.exports}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var f="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function d(){}function y(){}y.resetWarningCache=d;var m=function(){function e(e,t,r,n,o,i){if(i!==f){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:y,resetWarningCache:d};return r.PropTypes=r,r},v=l((function(e){e.exports=m()})),h=function(e){return null!==e&&"object"===r(e)},b=function(e){return h(e)&&"function"===typeof e.then},E=function(e){return h(e)&&"function"===typeof e.elements&&"function"===typeof e.createToken&&"function"===typeof e.createPaymentMethod&&"function"===typeof e.confirmCardPayment},g="[object Object]",w=function e(t,r){if(!h(t)||!h(r))return t===r;var n=Array.isArray(t);if(n!==Array.isArray(r))return!1;var o=Object.prototype.toString.call(t)===g;if(o!==(Object.prototype.toString.call(r)===g))return!1;if(!o&&!n)return!1;var i=Object.keys(t),u=Object.keys(r);if(i.length!==u.length)return!1;for(var c={},s=0;s<i.length;s+=1)c[i[s]]=!0;for(var a=0;a<u.length;a+=1)c[u[a]]=!0;var p=Object.keys(c);if(p.length!==i.length)return!1;var l=t,f=r,d=function(t){return e(l[t],f[t])};return p.every(d)},O=function(e){var r=t.useRef(e);return t.useEffect((function(){r.current=e}),[e]),r.current},j="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",S=function(e){if(null===e||E(e))return e;throw new Error(j)},C=function(e){if(b(e))return{tag:"async",stripePromise:Promise.resolve(e).then(S)};var t=S(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},P=t.createContext(null);P.displayName="ElementsContext";var k=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},_=function(e){var r=e.stripe,n=e.options,o=e.children,u=t.useRef(!1),c=t.useRef(!0),s=t.useMemo((function(){return C(r)}),[r]),a=i(t.useState((function(){return{stripe:null,elements:null}})),2),p=a[0],l=a[1],f=O(r),d=O(n);return null!==f&&(f!==r&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."),w(n,d)||console.warn("Unsupported prop change on Elements: You cannot change the `options` prop after setting the `stripe` prop.")),u.current||("sync"===s.tag&&(u.current=!0,l({stripe:s.stripe,elements:s.stripe.elements(n)})),"async"===s.tag&&(u.current=!0,s.stripePromise.then((function(e){e&&c.current&&l({stripe:e,elements:e.elements(n)})})))),t.useEffect((function(){return function(){c.current=!1}}),[]),t.useEffect((function(){var e=p.stripe;e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"1.4.1"}),e.registerAppInfo({name:"react-stripe-js",version:"1.4.1",url:"https://stripe.com/docs/stripe-js/react"}))}),[p.stripe]),t.createElement(P.Provider,{value:p},o)};_.propTypes={stripe:v.any,options:v.object};var R=function(e){var r=t.useContext(P);return k(r,e)},T=function(){return R("calls useElements()").elements},x=function(){return R("calls useStripe()").stripe},A=function(e){return(0,e.children)(R("mounts <ElementsConsumer>"))};A.propTypes={children:v.func.isRequired};var I=function(e){var r=t.useRef(e);return t.useEffect((function(){r.current=e}),[e]),function(){r.current&&r.current.apply(r,arguments)}},L=function(e){return h(e)?(e.paymentRequest,o(e,["paymentRequest"])):{}},B=function(){},q=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},N=function(e,r){var n="".concat(q(e),"Element"),o=r?function(e){R("mounts <".concat(n,">"));var r=e.id,o=e.className;return t.createElement("div",{id:r,className:o})}:function(r){var o=r.id,i=r.className,u=r.options,c=void 0===u?{}:u,s=r.onBlur,a=void 0===s?B:s,p=r.onFocus,l=void 0===p?B:p,f=r.onReady,d=void 0===f?B:f,y=r.onChange,m=void 0===y?B:y,v=r.onEscape,h=void 0===v?B:v,b=r.onClick,E=void 0===b?B:b,g=R("mounts <".concat(n,">")).elements,O=t.useRef(null),j=t.useRef(null),S=I(d),C=I(a),P=I(l),k=I(E),_=I(m),T=I(h);t.useLayoutEffect((function(){if(null==O.current&&g&&null!=j.current){var t=g.create(e,c);O.current=t,t.mount(j.current),t.on("ready",(function(){return S(t)})),t.on("change",_),t.on("blur",C),t.on("focus",P),t.on("escape",T),t.on("click",k)}}));var x=t.useRef(c);return t.useEffect((function(){x.current&&x.current.paymentRequest!==c.paymentRequest&&console.warn("Unsupported prop change: options.paymentRequest is not a customizable property.");var e=L(c);0===Object.keys(e).length||w(e,L(x.current))||O.current&&(O.current.update(e),x.current=c)}),[c]),t.useLayoutEffect((function(){return function(){O.current&&O.current.destroy()}}),[]),t.createElement("div",{id:o,className:i,ref:j})};return o.propTypes={id:v.string,className:v.string,onChange:v.func,onBlur:v.func,onFocus:v.func,onReady:v.func,onClick:v.func,options:v.object},o.displayName=n,o.__elementType=e,o},M="undefined"===typeof window,W=N("auBankAccount",M),U=N("card",M),F=N("cardNumber",M),D=N("cardExpiry",M),Y=N("cardCvc",M),J=N("fpxBank",M),$=N("iban",M),z=N("idealBank",M),H=N("p24Bank",M),V=N("epsBank",M),G=N("payment",M),K=N("paymentRequestButton",M),Q=N("afterpayClearpayMessage",M);e.AfterpayClearpayMessageElement=Q,e.AuBankAccountElement=W,e.CardCvcElement=Y,e.CardElement=U,e.CardExpiryElement=D,e.CardNumberElement=F,e.Elements=_,e.ElementsConsumer=A,e.EpsBankElement=V,e.FpxBankElement=J,e.IbanElement=$,e.IdealBankElement=z,e.P24BankElement=H,e.PaymentElement=G,e.PaymentRequestButtonElement=K,e.useElements=T,e.useStripe=x,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(0))}}]);
//# sourceMappingURL=15.0ae7bff7.chunk.js.map