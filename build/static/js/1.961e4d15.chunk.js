(this["webpackJsonpshop-react"]=this["webpackJsonpshop-react"]||[]).push([[1],{501:function(e,t,c){"use strict";var n=c(0),s=c(5),a=c.n(s),r=c(18),i=c(499),l=c(21),o=c(64),d=c(47),j=c(117),u=c(6),b=function(e){var t=e.imageUrl,c=e.logoClass;return Object(u.jsx)("div",{className:"".concat(c||""),children:Object(u.jsx)(j.b,{to:"/",children:Object(u.jsx)("img",{alt:"",src:""+t})})})},m=c(94),h=c(161),O=Object(d.connect)(null,(function(e){return{setCategoryID:function(t){e(Object(m.d)(t))},setContent:function(t){e(Object(h.b)(t))}}}))(Object(o.multilanguage)((function(e){e.props;var t=e.strings,c=e.menuWhiteClass,n=e.sidebarMenu,s=e.categories,a=e.contents,r=e.setCategoryID,i=e.setContent,l=function(e){r(e.id)};return Object(u.jsx)("div",{className:" ".concat(n?"sidebar-menu":"main-menu ".concat(c||"")," "),children:Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/",children:t.Home})}),s.map((function(e,t){return e.visible&&Object(u.jsxs)("li",{children:[Object(u.jsxs)(j.b,{to:"/category/"+e.description.friendlyUrl,onClick:function(){return l(e)},children:[e.description.name,e.children&&e.children.length>0?n?Object(u.jsx)("span",{children:Object(u.jsx)("i",{className:"fa fa-angle-right"})}):Object(u.jsx)("i",{className:"fa fa-angle-down"}):""]}),e.children&&e.children.length>0&&Object(u.jsx)("ul",{className:"submenu",children:e.children.map((function(e,t){return Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/category/"+e.description.friendlyUrl,onClick:function(){return l(e)},children:e.description.name})},t)}))})]},t)})),a.map((function(e,t){return e.visible&&e.description&&Object(u.jsxs)("li",{children:[" ",Object(u.jsxs)(j.b,{to:"/content/"+e.description.friendlyUrl,onClick:function(){return t=e.code,void i(t);var t},children:[" ",e.description.name]})]},t)}))]})})})}))),f=c(160),x=c(44);function g(e){return e.images&&e.images.length>0?e.images[0].imageUrl:null!=e.image?e.imageUrl:null}var p=Object(d.connect)((function(e){return{defaultStore:e.merchantData.defaultStore}}),null)(Object(o.multilanguage)((function(e){var t=e.cartData,c=e.deleteFromCart,s=e.defaultStore,a=e.strings,r=Object(f.useToasts)().addToast;return Object(u.jsx)("div",{className:"shopping-cart-content",children:Object(x.c)(t)&&t.products.length>0?Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)("ul",{children:t.products.map((function(e,n){var a=e.finalPrice;return Object(u.jsxs)("li",{className:"single-shopping-cart",children:[Object(u.jsx)("div",{className:"shopping-cart-img",children:Object(u.jsx)(j.b,{to:"/product/"+e.id,children:Object(u.jsx)("img",{alt:"",src:g(e),className:"img-fluid"})})}),Object(u.jsxs)("div",{className:"shopping-cart-title",children:[Object(u.jsx)("h4",{children:Object(u.jsx)(j.b,{to:"",children:e.description.name})}),Object(u.jsxs)("h6",{children:["Qty: ",e.quantity]}),Object(u.jsx)("span",{children:a})]}),Object(u.jsx)("div",{className:"shopping-cart-delete",children:Object(u.jsx)("button",{onClick:function(){return c(t.code,e,s,r)},children:Object(u.jsx)("i",{className:"fa fa-times-circle"})})})]},n)}))}),Object(u.jsx)("div",{className:"shopping-cart-total",children:Object(u.jsxs)("h4",{children:[a.Total," :",Object(u.jsx)("span",{className:"shop-total",children:t.displayTotal})]})}),Object(u.jsxs)("div",{className:"shopping-cart-btn btn-hover text-center",children:[Object(u.jsx)(j.b,{className:"default-btn",to:"/cart",children:a["View Cart"]}),Object(u.jsx)(j.b,{className:"default-btn",to:"/checkout",children:a.Checkout})]})]}):Object(u.jsx)("p",{className:"text-center",children:a["No items added to cart"]})})}))),v=c(49),N=c(65),C=c(526),y=c(22),w=c(38),k=Object(d.connect)((function(e){return{cartData:e.cartData.cartItems,cartCount:e.cartData.cartCount,userData:e.userData.userData}}),(function(e){return{deleteFromCart:function(t,c,n,s){e(Object(v.h)(t,c,n,s))},setUser:function(t){e(Object(N.k)(t))},deleteAllFromCart:function(){e(Object(v.g)())},getCart:function(t,c){e(Object(v.i)(t,c))}}}))(Object(o.multilanguage)((function(e){var t=e.cartData,c=e.cartCount,s=e.deleteFromCart,o=e.iconWhiteClass,d=e.userData,b=e.setUser,m=e.deleteAllFromCart,h=e.strings,O=(e.getCart,Object(l.g)()),f=Object(l.f)(),g=Object(n.useState)({}),v=Object(i.a)(g,2),N=v[0],k=v[1];Object(n.useEffect)((function(){Object(x.a)("thekey")===window._env_.APP_BASE_URL||T(),Object(x.e)("thekey",window._env_.APP_BASE_URL),d&&S()}),[]);var S=function(){var e=Object(r.a)(a.a.mark((function e(){var t,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=y.a.ACTION.AUTH+y.a.ACTION.CUSTOMER+y.a.ACTION.PROFILE,e.prev=1,e.next=4,w.a.get(t);case 4:(c=e.sent)&&k(c),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),b(""),Object(x.e)("token",""),f.push("/");case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),L=function(e){e.currentTarget.nextSibling.classList.toggle("active")},T=function(){b(""),Object(x.e)("token",""),m()};return Object(u.jsxs)("div",{className:"header-right-wrap ".concat(o||""),children:[Object(u.jsx)(C.a,{element:document,onActive:function(e){Object(x.e)("session",new Date)},onIdle:function(e){},onAction:function(e){Object(x.e)("session",new Date)},debounce:250,timeout:18e5}),Object(u.jsxs)("div",{className:"same-style account-setting d-none d-lg-block",children:["/checkout"!==O.url&&Object(u.jsx)("button",{className:"account-setting-active",onClick:function(e){return L(e)},children:Object(u.jsx)("i",{className:"pe-7s-user-female"})}),Object(u.jsx)("div",{className:"account-dropdown",children:Object(u.jsxs)("ul",{children:[!d&&Object(u.jsxs)("div",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/login",children:h.Login})}),Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/register",children:h.Register})})]}),d&&Object(u.jsxs)("div",{className:"user-profile",children:[Object(u.jsxs)("div",{className:"user-name",children:["Welcome ",N.firstName," ",N.lastName]}),Object(u.jsx)("span",{className:"user-email",children:N.emailAddress})]}),d&&Object(u.jsx)("li",{className:"border-line"}),d&&Object(u.jsxs)("div",{style:{marginTop:12},children:[Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/my-account",children:h["My Account"]})}),Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/recent-order",children:h["Recent Orders"]})}),Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/login",onClick:T,children:h.Logout})})]})]})})]}),"/checkout"!==O.url&&Object(u.jsxs)("div",{className:"same-style cart-wrap d-none d-lg-block",children:[Object(u.jsxs)("button",{className:"icon-cart",onClick:function(e){return L(e)},children:[Object(u.jsx)("i",{className:"pe-7s-shopbag"}),Object(u.jsx)("span",{className:"count-style",children:c})]}),Object(u.jsx)(p,{cartData:t,deleteFromCart:s})]}),Object(u.jsx)("div",{className:"same-style cart-wrap d-block d-lg-none",children:Object(u.jsxs)(j.b,{className:"icon-cart",to:"/cart",children:[Object(u.jsx)("i",{className:"pe-7s-shopbag"}),Object(u.jsx)("span",{className:"count-style",children:c})]})}),Object(u.jsx)("div",{className:"same-style mobile-off-canvas d-block d-lg-none",children:Object(u.jsx)("button",{className:"mobile-aside-button",onClick:function(){document.querySelector("#offcanvas-mobile-menu").classList.add("active")},children:Object(u.jsx)("i",{className:"pe-7s-menu"})})})]})}))),S=Object(d.connect)(null,(function(e){return{setCategoryID:function(t){e(Object(m.d)(t))},setContent:function(t){e(Object(h.b)(t))}}}))(Object(o.multilanguage)((function(e){var t=e.strings,c=e.categories,n=e.contents,s=e.setCategoryID,a=e.setContent,r=function(e){s(e.id)};return Object(u.jsx)("nav",{className:"offcanvas-navigation",id:"offcanvas-navigation",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{className:"menu-item",children:Object(u.jsx)(j.b,{to:"/",children:"Home"})}),c.map((function(e,c){return e.visible&&Object(u.jsxs)("li",{className:"menu-item-has-children",children:[Object(u.jsx)(j.b,{to:"/category/"+e.description.friendlyUrl,onClick:function(){return r(e)},children:e.description.name}),e.children&&e.children.length>0&&Object(u.jsx)("ul",{className:"sub-menu",children:e.children.map((function(e,c){return Object(u.jsx)("li",{className:"menu-item-has-children",children:Object(u.jsx)(j.b,{to:"/category/"+e.description.friendlyUrl,onClick:function(){return r(e)},children:t[e.description.name]?t[e.description.name]:e.description.name})},c)}))})]},c)})),n.map((function(e,t){return e.visible&&e.description&&Object(u.jsxs)("li",{children:[" ",Object(u.jsx)(j.b,{to:"/content/"+e.description.friendlyUrl,onClick:function(){return t=e.code,void a(t);var t},children:e.description.name})]},t)}))]})})}))),L=Object(d.connect)((function(e){return{merchant:e.merchantData.merchant}}),(function(e){return{}}))(Object(o.multilanguage)((function(e){var t=e.strings,c=e.currentLanguageCode,n=e.dispatch,s=e.merchant;return Object(u.jsx)("div",{className:"mobile-menu-middle",children:Object(u.jsxs)("div",{className:"lang-curr-style",children:[Object(u.jsx)("span",{className:"title mb-2",children:"Choose Language "}),Object(u.jsx)("select",{value:c,onChange:function(e){!function(e){var t=e.target.value;n(Object(o.changeLanguage)(t))}(e),document.querySelector("#offcanvas-mobile-menu").classList.remove("active")},children:s&&s.supportedLanguages.map((function(e,c){return Object(u.jsx)("option",{value:e.code,children:t[e.code]},c)}))})]})})}))),T=Object(d.connect)((function(e){return{merchant:e.merchantData.merchant}}),null)((function(e){var t=e.merchant;return Object(u.jsx)("div",{className:"offcanvas-widget-area",children:Object(u.jsx)("div",{className:"off-canvas-contact-widget",children:Object(u.jsx)("div",{className:"header-contact-info",children:Object(u.jsxs)("ul",{className:"header-contact-info__list",children:[Object(u.jsxs)("li",{children:[Object(u.jsx)("i",{className:"fa fa-phone"})," ",Object(u.jsx)("a",{href:"tel://12452456012",children:t.phone})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("i",{className:"fa fa-envelope"})," ",Object(u.jsx)("a",{href:"mailto:info@yourdomain.com",children:t.email})]})]})})})})})),E=function(e){var t=e.categories,c=e.contents;Object(n.useEffect)((function(){for(var e=document.querySelector("#offcanvas-navigation"),t=e.querySelectorAll(".sub-menu"),c=e.querySelectorAll("a"),n=0;n<t.length;n++)t[n].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var r=e.querySelectorAll(".menu-expand"),i=r.length,l=0;l<i;l++)r[l].addEventListener("click",(function(e){s(e)}));for(var o=0;o<c.length;o++)c[o].addEventListener("click",(function(){a()}))}));var s=function(e){e.currentTarget.parentElement.classList.toggle("active")},a=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")};return Object(u.jsxs)("div",{className:"offcanvas-mobile-menu",id:"offcanvas-mobile-menu",children:[Object(u.jsx)("button",{className:"offcanvas-menu-close",id:"mobile-menu-close-trigger",onClick:function(){return a()},children:Object(u.jsx)("i",{className:"pe-7s-close"})}),Object(u.jsx)("div",{className:"offcanvas-wrapper",children:Object(u.jsxs)("div",{className:"offcanvas-inner-content",children:[Object(u.jsx)(S,{categories:t,contents:c}),Object(u.jsx)(L,{}),Object(u.jsx)(T,{})]})})]})},A=Object(d.connect)((function(e){return{merchant:e.merchantData.merchant}}),(function(e){return{}}))(Object(o.multilanguage)((function(e){var t=e.strings,c=e.merchant,n=e.currentLanguageCode,s=e.dispatch;return Object(u.jsxs)("div",{className:"language-currency-wrap",children:[Object(u.jsxs)("div",{className:"same-language-currency language-style",children:[Object(u.jsxs)("span",{children:["en"===n?t.en:"fr"===n?t.fr:""," ",Object(u.jsx)("i",{className:"fa fa-angle-down"})]}),Object(u.jsx)("div",{className:"lang-car-dropdown",children:Object(u.jsx)("ul",{children:c&&c.supportedLanguages.map((function(e,c){return Object(u.jsx)("li",{children:Object(u.jsx)("button",{value:e.code,onClick:function(e){return function(e){var t=e.target.value;window.location.reload(!1),s(Object(o.changeLanguage)(t))}(e)},children:t[e.code]})},c)}))})})]}),Object(u.jsx)("div",{className:"same-language-currency",children:Object(u.jsxs)("p",{children:[t["Call Us"]," : ",c.phone]})})]})}))),D=Object(d.connect)()(Object(o.multilanguage)((function(e){e.strings;var t=e.currentLanguageCode,c=e.dispatch,s=e.borderStyle,l=Object(n.useState)(""),o=Object(i.a)(l,2),d=o[0],j=o[1];Object(n.useEffect)((function(){b()}),[]);var b=function(){var e=Object(r.a)(a.a.mark((function e(){var c,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=y.a.ACTION.CONTENT+y.a.ACTION.BOXES+y.a.ACTION.HEADER_MESSAGE+"?lang="+t,e.prev=1,e.next=4,w.a.get(c);case 4:(n=e.sent)&&j(n.description.description),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"header-top-wap ".concat("fluid-border"===s?"border-bottom":""),children:[Object(u.jsx)(A,{currentLanguageCode:t,dispatch:c}),Object(u.jsx)("div",{className:"header-offer",children:Object(u.jsx)("p",{dangerouslySetInnerHTML:{__html:d.replace("]]>","")}})})]})}))),I=c(96),U=Object(d.connect)((function(e){return{merchant:e.merchantData.merchant,currentLanguageCode:e.multilanguage.currentLanguageCode,defaultStore:e.merchantData.defaultStore}}),(function(e){return{setMerchant:function(){e(Object(I.c)())},getCurrentLocation:function(){e(Object(N.g)())}}}))(Object(o.multilanguage)((function(e){var t=e.setMerchant,c=e.merchant,s=e.layout,o=e.top,d=e.borderStyle,j=e.headerPaddingClass,m=e.headerPositionClass,h=e.headerBgClass,f=e.defaultStore,x=e.getCurrentLocation,g=e.currentLanguageCode,p=Object(l.f)(),v=Object(n.useState)(0),N=Object(i.a)(v,2),C=N[0],S=N[1],L=Object(n.useState)(0),T=Object(i.a)(L,2),A=T[0],I=T[1],U=Object(n.useState)([]),P=Object(i.a)(U,2),_=P[0],B=P[1],M=Object(n.useState)([]),R=Object(i.a)(M,2),F=R[0],q=R[1];Object(n.useEffect)((function(){H();var e=document.querySelector(".sticky-bar");return I(e.offsetTop),window.addEventListener("scroll",z),function(){window.removeEventListener("scroll",z)}}),[]);var H=function(){var e=Object(r.a)(a.a.mark((function e(){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get(window._env_.APP_BASE_URL+"/actuator/health/ping");case 3:(c=e.sent)&&("UP"===c.status?(t(),x(),W(),Y()):p.push("/not-found")),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),p.push("/not-found");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(r.a)(a.a.mark((function e(){var t,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=y.a.ACTION.CATEGORY+"?count=20&page=0&store="+f+"&lang="+g,e.prev=1,e.next=4,w.a.get(t);case 4:(c=e.sent)&&B(c.categories),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(r.a)(a.a.mark((function e(){var t,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=y.a.ACTION.CONTENT+y.a.ACTION.PAGES+"?page=0&count=20&store="+f+"&lang="+g,e.prev=1,e.next=4,w.a.get(t);case 4:(c=e.sent)&&q(c.items),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),z=function(){S(window.scrollY)};return Object(u.jsxs)("header",{className:"header-area clearfix ".concat(h||""," ").concat(m||""),children:[Object(u.jsx)("div",{className:"".concat(j||""," ").concat("visible"===o?"d-none d-lg-block":"d-none"," header-top-area ").concat("fluid-border"===d?"border-none":""),children:Object(u.jsx)("div",{className:"container-fluid"===s?s:"container",children:Object(u.jsx)(D,{borderStyle:d})})}),Object(u.jsxs)("div",{className:"".concat(j||""," sticky-bar header-res-padding clearfix ").concat(C>A?"stick":""),children:[Object(u.jsx)("div",{className:"container-fluid"===s?s:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4",children:null!=c.logo&&Object(u.jsx)(b,{imageUrl:c.logo.path,logoClass:"logo"})}),Object(u.jsx)("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block",children:Object(u.jsx)(O,{categories:_,contents:F})}),Object(u.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:Object(u.jsx)(k,{})})]})}),Object(u.jsx)(E,{categories:_,contents:F})]})]})}))),P=c(527),_=Object(d.connect)((function(e){return{merchant:e.merchantData.merchant}}),(function(e){return{}}))(Object(o.multilanguage)((function(e){e.footerLogo;var t=e.spaceBottomClass,c=e.colorClass,n=e.merchant;return Object(u.jsxs)("div",{className:"copyright ".concat(t||""," ").concat(c||""),children:[Object(u.jsx)("div",{className:"footer-logo",children:null!=n.logo&&Object(u.jsx)(j.b,{to:"/",children:Object(u.jsx)("img",{alt:"",src:n.logo.path})})}),Object(u.jsxs)("p",{children:["Copyright \xa9 ",new Date(n.inBusinessSince).getFullYear()," ",Object(u.jsx)(j.b,{to:"",rel:"noopener noreferrer",children:n.name}),".",Object(u.jsx)("br",{})," All Rights Reserved"]})]})}))),B=c(506),M={name:"email",validate:{required:{value:!0,message:"Email is required"},pattern:{value:/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,message:"Please entered the valid email id"}}},R=function(e){e.spaceTopClass,e.subscribeBtnClass,e.buttonLabel,e.emailPlaceHolder,e.sendingPlaceHolder,e.confirmationPlaceHolder;var t=e.strings;console.log(t,"-******************");var c=Object(n.useState)(""),s=Object(i.a)(c,2),l=s[0],o=s[1],d=Object(B.b)({mode:"onChange",defaultValues:{email:""},criteriaMode:"all"}),j=d.register,b=d.handleSubmit,m=d.errors,h=d.reset,O=function(){var e=Object(r.a)(a.a.mark((function e(t){var c,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o("sending"),e.prev=1,c=y.a.ACTION.NEWSLETTER,n={email:t.email},e.next=6,w.a.post(c,n);case 6:h({email:""}),o("success"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),o("error");case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"subscribe-form",children:[Object(u.jsx)("form",{onSubmit:b(O),children:Object(u.jsxs)("div",{className:"mc-form",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{className:"email",name:M.name,ref:j(M.validate),type:"email",placeholder:t["Your Email Address"]}),m[M.name]&&Object(u.jsx)("p",{className:"error-msg",children:m[M.name].message})]}),Object(u.jsx)("div",{className:"clear",children:Object(u.jsx)("button",{className:"button",children:t.Subscribe})})]})}),"sending"===l&&Object(u.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===l&&Object(u.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:"Error"}}),"success"===l&&Object(u.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:"Thank you for subscribing!. We will send you text message promotions & updates."}})]})},F=function(e){var t=e.spaceTopClass,c=e.subscribeBtnClass,n=e.strings;return Object(u.jsx)("div",{children:Object(u.jsx)(R,{spaceTopClass:t,subscribeBtnClass:c,strings:n})})},q=function(e){var t=e.spaceBottomClass,c=e.spaceLeftClass,n=e.sideMenu,s=e.colorClass,a=e.widgetColorClass,r=e.strings;return Object(u.jsxs)("div",{className:"footer-widget ".concat(t||""," ").concat(n?"ml-ntv5":c||""," ").concat(a||""),children:[Object(u.jsx)("div",{className:"footer-title",children:Object(u.jsx)("h3",{children:r.Subscribe})}),Object(u.jsxs)("div",{className:"subscribe-style ".concat(s||""),children:[Object(u.jsx)("p",{children:r["Get E-mail updates about our latest shop and special offers."]}),Object(u.jsx)(F,{mailchimpUrl:"//xyz.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef",strings:r})]})]})},H=Object(d.connect)((function(e){return{merchant:e.merchantData.merchant}}),(function(e){return{}}))(Object(o.multilanguage)((function(e){var t=e.backgroundColorClass,c=e.spaceTopClass,s=e.spaceBottomClass,a=e.spaceLeftClass,r=e.spaceRightClass,l=e.containerClass,o=e.extraFooterClass,d=e.sideMenu,b=e.merchant,m=e.strings,h=Object(n.useState)(0),O=Object(i.a)(h,2),f=O[0],x=O[1],g=Object(n.useState)(0),p=Object(i.a)(g,2),v=p[0],N=p[1];Object(n.useEffect)((function(){return N(100),window.addEventListener("scroll",C),function(){window.removeEventListener("scroll",C)}}),[]);var C=function(){x(window.scrollY)};return Object(u.jsxs)("footer",{className:"footer-area ".concat(t||""," ").concat(c||""," ").concat(s||""," ").concat(o||""," ").concat(a||""," ").concat(r||""),children:[Object(u.jsx)("div",{className:"".concat(l||"container"),children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:d?"col-xl-3 col-sm-3":"col-lg-2 col-sm-3",children:Object(u.jsx)(_,{footerLogo:"/assets/img/logo/logo.png",spaceBottomClass:"mb-30"})}),Object(u.jsx)("div",{className:d?"col-xl-3 col-sm-3":"col-lg-3 col-sm-3",children:Object(u.jsxs)("div",{className:"footer-widget mb-30",children:[Object(u.jsx)("div",{className:"footer-title",children:Object(u.jsx)("h3",{children:m.Address})}),Object(u.jsx)("div",{className:"footer-list",children:b&&Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsxs)(j.b,{to:"",children:[b.address.address,"  ",b.address.city,", ",b.address.stateProvince,",",b.address.country," ",Object(u.jsx)("br",{})," ",b.address.postalCode]})}),Object(u.jsx)("li",{children:Object(u.jsxs)(j.b,{to:"",children:[m.Tel,": ",b.phone]})}),Object(u.jsx)("li",{children:Object(u.jsxs)(j.b,{to:"",children:[m["E-mail"]," : ",b.email]})})]})})]})}),Object(u.jsx)("div",{className:d?"col-xl-3 col-sm-3":"col-lg-3 col-sm-3",children:Object(u.jsxs)("div",{className:"footer-widget mb-30",children:[Object(u.jsx)("div",{className:"footer-title",children:Object(u.jsx)("h3",{children:m["USEFUL LINKS"]})}),Object(u.jsx)("div",{className:"footer-list",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/contact",children:m.Contact})}),Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/login",children:m.Login})}),Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/register",children:m.Register})})]})})]})}),Object(u.jsx)("div",{className:d?"col-xl-3 col-sm-8":"col-lg-4 col-sm-3",children:Object(u.jsx)(q,{strings:m,spaceBottomClass:"mb-30",sideMenu:d})})]})}),Object(u.jsx)("button",{className:"scroll-top ".concat(f>v?"show":""),onClick:function(){P.animateScroll.scrollToTop()},children:Object(u.jsx)("i",{className:"fa fa-angle-double-up"})})]})})));t.a=function(e){var t=e.children,c=e.headerContainerClass,s=e.headerTop,a=e.headerPaddingClass,r=e.headerPositionClass;return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)(U,{layout:c,top:s,headerPaddingClass:a,headerPositionClass:r}),t,Object(u.jsx)(H,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"})]})}},502:function(e,t,c){"use strict";c(0);var n=c(117),s=c(159),a=c(6);t.a=function(){return Object(a.jsx)("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"breadcrumb-content text-center",children:Object(a.jsx)(s.Breadcrumbs,{separator:Object(a.jsx)("span",{children:"/"}),item:n.c,finalItem:"span"})})})})}}}]);
//# sourceMappingURL=1.961e4d15.chunk.js.map