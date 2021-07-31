(this["webpackJsonpshop-react"]=this["webpackJsonpshop-react"]||[]).push([[5],{161:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r="SET_CONTENT_ID",o=function(e){return function(t){t({type:r,payload:e})}}},22:function(e,t,n){"use strict";t.a={ACTION:{STORE:"store/",DEFAULT:"DEFAULT/",CATEGORY:"category/",CONTENT:"content/",PAGES:"pages/",PRODUCT_GROUP:"products/group/",PRODUCT:"product/",PRODUCTS:"products/",CART:"cart/",CARTS:"cart",PRICE:"price/",CUSTOMER:"customer/",LOGIN:"login/",CUSTOMERS:"customers/",MANUFACTURERS:"manufacturers/",VARIANTS:"variants/",CONFIG:"config/",COUNTRY:"country/",ZONES:"zones/",AUTH:"auth/",PROFILE:"profile",SHIPPING:"shipping",SHIPPING_COUNTRY:"shipping/country",TOTAL:"total/",NEWSLETTER:"newsletter/",REGISTER:"register",CHECKOUT:"checkout",PASSWORD:"password/",CONTACT:"contact/",ORDERS:"orders/",ADDRESS:"address",RESET:"reset/",REQUEST:"request/",SEARCH:"search/",AUTOCOMPLETE:"autocomplete/",BOXES:"boxes/",BANNER_TEXT:"bannerText/",IMAGES:"images/",HEADER_MESSAGE:"headerMessage/",AGREEMENT:"agreement/",PROMO:"promo/"}}},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(5),o=n.n(r),a=n(18),i=n(163),s=n(231),c=n(52),u=n.n(c),d=n(44),l=window._env_.APP_BASE_URL+window._env_.APP_API_VERSION;u.a.defaults.baseURL=l;var p=function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,null,[{key:"post",value:function(){var e=Object(a.a)(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post(t,n);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"put",value:function(){var e=Object(a.a)(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.put(t,n);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"get",value:function(){var e=Object(a.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(a.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.delete(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"patch",value:function(){var e=Object(a.a)(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.patch(t,n);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}();u.a.interceptors.request.use(function(){var e=Object(a.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.baseURL=l,e.next=3,Object(d.a)("token");case 3:return n=e.sent,t.headers.common.Authorization=n?"Bearer "+n:"",e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)})),u.a.interceptors.response.use((function(e){return e}),(function(e){var t=e.response;return 401===t.status||t.status,Promise.reject(e)}))},44:function(e,t,n){"use strict";function r(e,t){try{localStorage.setItem(e,t)}catch(n){}}function o(e){try{localStorage.removeItem(e)}catch(t){}}function a(e){try{return localStorage.getItem(e)}catch(t){}}function i(e,t){return"undefined"===typeof t||null===t||""===t?"":e+t}function s(e){return Object.keys(e).length>0}n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s}))},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r="SET_LOADER",o=function(e){return function(t){t({type:r,payload:e})}}},49:function(e,t,n){"use strict";n.d(t,"e",(function(){return l})),n.d(t,"d",(function(){return p})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return b})),n.d(t,"f",(function(){return g})),n.d(t,"i",(function(){return h})),n.d(t,"j",(function(){return O})),n.d(t,"h",(function(){return v})),n.d(t,"g",(function(){return y}));var r=n(5),o=n.n(r),a=n(18),i=n(38),s=n(22),c=n(48),u=n(44),d=n(63),l="GET_SHOPIZER_CART_ID",p="GET_CART",m="DECREASE_QUANTITY",f="DELETE_FROM_CART",b="DELETE_ALL_FROM_CART",g=function(e,t,n,r,u,d,l){return function(){var u=Object(a.a)(o.a.mark((function a(u){var p,m,f,b;return o.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(u(Object(c.b)(!0)),o.prev=1,console.log("Item "+n+" quantity "+r),m=void 0!==l?{attributes:l,product:e.id,quantity:r}:{product:e.id,quantity:r},console.log("Cart parameters "+JSON.stringify(m)),!n){o.next=13;break}return b="Updated Cart",p=s.a.ACTION.CART+n+"?store="+window._env_.APP_MERCHANT,o.next=10,i.a.put(p,m);case 10:f=o.sent,o.next=18;break;case 13:return b="Added Cart",p=s.a.ACTION.CART+"?store="+window._env_.APP_MERCHANT,o.next=17,i.a.post(p,m);case 17:f=o.sent;case 18:f&&(u(O(f.code)),u(Object(c.b)(!1)),d?setTimeout((function(){u(h(f.code,d))}),2e3):u(h(f.code,d)),t&&t(b,{appearance:"success",autoDismiss:!0})),o.next=24;break;case 21:o.prev=21,o.t0=o.catch(1),u(Object(c.b)(!1));case 24:case"end":return o.stop()}}),a,null,[[1,21]])})));return function(e){return u.apply(this,arguments)}}()},h=function(e,t){return function(){var n=Object(a.a)(o.a.mark((function n(r){var a,c;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t?a=e?s.a.ACTION.AUTH+s.a.ACTION.CUSTOMER+s.a.ACTION.CARTS+"?cart="+e+"&lang="+JSON.parse(Object(u.a)("redux_localstorage_simple")).multilanguage.currentLanguageCode:s.a.ACTION.AUTH+s.a.ACTION.CUSTOMER+s.a.ACTION.CARTS+"?&lang="+JSON.parse(Object(u.a)("redux_localstorage_simple")).multilanguage.currentLanguageCode:e&&(a=s.a.ACTION.CART+e+"?lang="+JSON.parse(Object(u.a)("redux_localstorage_simple")).multilanguage.currentLanguageCode),n.next=4,i.a.get(a);case 4:c=n.sent,r(O(c.code)),r({type:p,payload:c}),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),console.log("Cart action response "+n.t0),r(y());case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},O=function(e){var t=window._env_.APP_MERCHANT+"_shopizer_cart";return(new d.a).set(t,e,{path:"/",maxAge:2e7}),Object(u.e)(l,e),function(t){t({type:l,payload:e})}},v=function(e,t,n,r){return function(){var n=Object(a.a)(o.a.mark((function n(a){var u;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(Object(c.b)(!0)),n.prev=1,u=s.a.ACTION.CART+e+"/"+s.a.ACTION.PRODUCT+t.id+"?store="+window._env_.APP_MERCHANT,n.next=5,i.a.delete(u);case 5:a({type:f,payload:t}),a(Object(c.b)(!1)),r&&r("Removed From Cart",{appearance:"error",autoDismiss:!0}),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(1),console.log("Error removing from cart "+e),a(Object(c.b)(!1));case 14:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}()},y=function(e){return function(t){t({type:b,payload:e})}}},495:function(e){e.exports=JSON.parse('{"Home":"Home","Terms and Policy":"Terms and Policy","Cookie Consent":"This website uses cookies only to enhance the user experience.","Accept":"Accept","Contact":"Contact","en":"English","fr":"French","Call Us":"Call Us","Free delivery on order over":"Free delivery on order over","Featured Products":"Featured Products","View Cart":"View Cart","Checkout":"Checkout","Total":"Total","No items added to cart":"No items added to cart","Login":"Login","Register":"Register","My Account":"My Account","Recent Orders":"Recent Orders","Logout":"Logout","Subscribe to our newsletter":"Subscribe to our newsletter!","Subscribe to our newsletter to receive news on update":"Subscribe to our newsletter to receive news on update","Get E-mail updates about our latest shop and special offers.":"Get E-mail updates about our latest shop and special offers.","Your Email Address":"Your Email Address","Subscribe":"Subscribe","Address":"Address","Tel":"Tel","E-mail":"E-mail","USEFUL LINKS":"USEFUL LINKS","Shop Now":"Shop Now","Remember me":"Remember me","Forgot Password?":"Forgot Password?","Password":"Password","Email address":"Email address","First Name":"First Name","Last Name":"Last Name","Company Name":"Company Name","Adresse":"Adresse","Town/City":"Town/City","Country":"Country","State":"State","Postcode":"Postcode / Zip","Phone":"Phone","Repeat Password":"Repeat Password","Username":"Email address","Personal Information":"Personal Information","Login Information":"Login Information","Your cart items":"Your cart items","Image":"Image","Product Name":"Product Name","Unit Price":"Unit Price","Qty":"Qty","Subtotal":"Subtotal","Action":"action","Continue Shopping":"Continue Shopping","Clear Shopping Cart":"Clear Shopping Cart","Apply Coupon":"Apply Coupon","Proceed to Checkout":"Proceed to Checkout","Get A Quote":"Get A Quote","Cart Total":"Cart Total","Total products":"Total products","Grand Total":"Grand Total","Use Coupon Code":"Use Coupon Code","Enter your coupon code if you have one.":"Enter your coupon code if you have one.","Estimate Shipping And Tax":"Estimate Shipping And Tax","Enter your destination to get a shipping estimate.":"Enter your destination to get a shipping estimate.","Select a state":"Select a state","Select a country":"Select a country","Showing":"Showing","result":"result","Add to cart":"Add to cart","Out of Stock":"Out of Stock","Search":"Search","Search here...":"Search here...","Forgot Password":"Forgot Password","Forgot Password Note":"Lost your password? Please enter your email address. You will receive a link to create a new password via email.","Reset Password":"Reset Password","Go to login":"Go to login","Update Password":"Update Password","Reset Password Note":"Your new password must be diffrent from previous used passwords.","Link Invalid":"Your reset password link is invalid.","To Your Reset Password":"To reset your password, return to the login page and select \'Forgot Password\' to send a new email","Back to login page":"Back to login page","Returning customer ? Click here to login":"Returning customer ? Click here to login","Billing Details":"Billing Details","Street Address":"Street Address","House number and street name":"House number and street name","Create an account":"Create an account","SHIP TO A DIFFERENT ADDRESS?":"SHIP TO A DIFFERENT ADDRESS?","Shipping Details":"Shipping Details","Additional information":"Additional information","Order notes":"Order notes","Notes about your order, e.g. special notes for delivery.":"Notes about your order, e.g. special notes for delivery.","Your order":"Your order","I agree with the terms and conditions":"I agree with the terms and conditions","Product":"Product","Package size":"Package size","Get In Touch":"Get In Touch","Name":"Name","Subject":"Subject","Your Message":"Your Message","Send":"Send","Continue":"Continue","Delivery Information":"Delivery Information","Delivery Address":"Delivery Address","Billing Information":"Billing Information","Billing Address":"Billing Address","User Name":"User Name","Current Password":"Current Password","Change your password":"Change your password","Your orders items":"Your orders items","View Details":"View Details","Order Id":"Order Id","Ordered on":"Ordered on","Order Total":"Order Total","Your orders details":"Your orders details","Payment & Shipping details":"Payment & Shipping details","Order No":"Order No.","Order Date":"Order Date","Payment Methods":"Payment Methods","Order Status":"Order Status","No items found":"No items found","No items found in recent order":"No items found in recent order","Categories":"Categories","Manufactures":"Manufactures","Color":"Color","Size":"Size","Cart":"Cart","Place your order":"Place your order","Order Confirm":"Order Confirm","Order Completed":"Order Completed","Thank you for ordering from importa":"Thank you for ordering from importa","Your order id is":"Your order id is","An email with you order details has been sent to":"An email with you order details has been sent to","Feedback":"If you have any comments or suggestions for us. please send us an email with your order id. We value your feedback","Order Details":"Order Details","No items found in category":"No items found in category","No items found in cart":"No items found in cart","No items found in checkout":"No items found in checkout","Page Not Found":"Page Not Found","404 Page Note":"Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarity unavailable.","Your account":"Your account","Delete your account":"Delete your account","Account Management":"Account Management","Sending":"Sending ...","Styles":"Styles","Pitch1":"#New Collection 2021","Pitch2":"PerfectoGaz","Shop now":"Shop Now","Subscribe confirmation":"Thank you for subscribing!. We will send you text message promotions & updates.","SKU":"SKU","Description":"Description","Reviews":"Reviews","Weight":"Weight","Add a Review":"Add a Review","Your rating":"Your rating","Message":"Message","Submit":"Submit","No items found in reviews":"No items found in reviews"}')},496:function(e){e.exports=JSON.parse('{"Home":"Accueil","Terms and Policy":"Termes et politique","Cookie Consent":"Ce site Web utilise des cookies uniquement pour am\xe9liorer l\'exp\xe9rience utilisateur.","Accept":"Accepter","Contact":"Contact","en":"Anglais","fr":"Francais","Call Us":"Appelez-nous","Free delivery on order over":"Livraison gratuite \xe0 partir de","Featured Products":"Produits populaires","View Cart":"Voir le panier","Checkout":"Passer \xe0 la caisse","Total":"Total","No items added to cart":"Aucun article ajout\xe9 au panier","Login":"S\'identifier","Register":"S\'enregistrer","My Account":"Mon compte","Recent Orders":"Derni\xe8res commandes","Logout":"Connectez - Out","Join With Us!":"Rejoignez-nous!","Subscribe to our newsletter to receive news on update":"Abonnez-vous \xe0 notre newsletter pour recevoir toutes les actualit\xe9s","Get E-mail updates about our latest shop and special offers.":"Recevez des mises \xe0 jour par e-mail sur notre derni\xe8re boutique et nos offres sp\xe9ciales.","Your Email Address":"Votre adresse email","Subscribe":"S\'inscrire","Address":"Adresse","Tel":"T\xe9l","E-mail":"Email","USEFUL LINKS":"Liens utiles","Shop Now":"Achetez maintenant","Remember me":"Souviens-toi de moi","Forgot Password?":"Mot de passe oubli\xe9?","Password":"Mot de passe","Email address":"Adresse \xe9lectronique","First Name":"Pr\xe9nom","Last Name":"Nom de famille","Company Name":"Nom de la compagnie","Adresse":"Adresse","Town/City":"Ville","Country":"Pays","State":"Etat","Postcode":"Code postal / Zip","Phone":"T\xe9l\xe9phone","Repeat Password":"R\xe9p\xe9ter le mot de passe","Username":"Adresse e-mail","Personal Information":"Renseignements personnels","Login Information":"Informations de connexion","Your cart items":"Articles de votre panier","Image":"Image","Product Name":"Nom du produit","Unit Price":"Prix \u200b\u200bunitaire","Qty":"Qt\xe9e","Subtotal":"Total","Action":"action","Continue Shopping":"Continuer vos achats","Clear Shopping Cart":"Effacer le panier","Apply Coupon":"Appliquer un coupon","Proceed to Checkout":"Passer \xe0 la caisse","Get A Quote":"Obtenir une estimation","Cart Total":"Total du panier","Total products":"Total produits","Grand Total":"somme finale","Use Coupon Code":"Utilisez un code de coupon","Enter your coupon code if you have one.":"Entrez votre code de coupon si vous en avez un.","Estimate Shipping And Tax":"Estimation des frais de transports","Enter your destination to get a shipping estimate.":"Entrez votre destination pour obtenir une estimation de livraison.","Select a state":"S\xe9lectionner un \xe9tat","Select a country":"Choisissez un pays","Showing":"Montrant","result":"r\xe9sultat","Add to cart":"Ajouter au panier","Out of Stock":"En rupture de stock","Search":"Chercher","Search here...":"Cherche ici...","Forgot Password":"Mot de passe oubli\xe9","Forgot Password Note":"Mot de passe perdu? Veuillez saisir votre adresse e-mail. Vous recevrez un lien pour cr\xe9er un nouveau mot de passe par e-mail.","Reset Password":"r\xe9initialiser le mot de passe","Go to login":"Aller \xe0 la connexion","Update Password":"Mettre \xe0 jour le mot de passe","Reset Password Note":"Votre nouveau mot de passe doit \xeatre diff\xe9rent des mots de passe utilis\xe9s pr\xe9c\xe9demment.","Link Invalid":"Votre lien de r\xe9initialisation du mot de passe n\'est pas valide.","To Your Reset Password":"Pour r\xe9initialiser votre mot de passe, retournez \xe0 la page de connexion et s\xe9lectionnez `` Mot de passe oubli\xe9 \'\' pour envoyer un nouvel e-mail","Back to login page":"Retour \xe0 la page de connexion","Returning customer ? Click here to login":"D\xe9j\xe0 client ? Cliquez ici pour vous identifier","Billing Details":"D\xe9tails de la facturation","Street Address":"Adresse de rue","House number and street name":"Num\xe9ro de maison et nom de rue","Create an account":"Cr\xe9er un compte","SHIP TO A DIFFERENT ADDRESS?":"LIVRER \xc0 UNE ADRESSE DIFF\xc9RENTE?","Shipping Details":"Les d\xe9tails d\'exp\xe9dition","Additional information":"Additional information","Order notes":"Notes d\'ordre","Notes about your order, e.g. special notes for delivery.":"Remarques sur votre commande, par exemple notes sp\xe9ciales pour la livraison.","Your order":"Votre commande","I agree with the terms and conditions":"J\'accepte les termes et conditions","Product":"Produit","Package size":"Dimensions du produit emball\xe9","Get In Touch":"Entrer en contact","Name":"Nom","Subject":"Mati\xe8re","Your Message":"Votre message","Send":"Envoyer","Continue":"Continuer","Delivery Information":"Informations de livraison","Delivery Address":"Adresse de livraison","Billing Information":"d\xe9tails de facturation","Billing Address":"Adresse de facturation","User Name":"Nom d\'utilisateur","Current Password":"Mot de passe actuel","Change your password":"changez votre mot de passe","Your orders items":"Vos articles de commande","View Details":"Voir les d\xe9tails","Order Id":"Num\xe9ro de commande","Ordered on":"Command\xe9 le","Order Total":"Total de la commande","Your orders details":"D\xe9tails de vos commandes","Payment & Shipping details":"D\xe9tails de paiement et d\'exp\xe9dition","Order No":"N \xb0 de commande.","Order Date":"Date de commande","Payment Methods":"m\xe9thodes de payement","Order Status":"Statut de la commande","No items found":"Aucun \xe9l\xe9ment trouv\xe9","No items found in recent order":"Aucun article trouv\xe9 dans la commande r\xe9cente","Categories":"Cat\xe9gories","Manufactures":"Les manufactures","Color":"Couleur","Size":"Taille","Cart":"Panier","Place your order":"Passer votre commande","Order Confirm":"Confirmer la commande","Order Completed":"Commande termin\xe9e","Thank you for ordering from importa":"Merci d\'avoir command\xe9 chez importa","Your order id is":"Votre identifiant de commande est","An email with you order details has been sent to":"Un e-mail contenant les d\xe9tails de votre commande a \xe9t\xe9 envoy\xe9 \xe0","Feedback":"Si vous avez des commentaires ou des suggestions pour nous. veuillez nous envoyer un e-mail avec votre identifiant de commande Nous appr\xe9cions vos commentaires","Order Details":"d\xe9tails de la commande","No items found in category":"Aucun article trouv\xe9 dans la cat\xe9gorie","No items found in cart":"Aucun article trouv\xe9 dans le panier","No items found in checkout":"Aucun article trouv\xe9 lors du paiement","Page Not Found":"Page non trouv\xe9e","404 Page Note":"D\xe9sol\xe9 mais la page que vous recherchez n\'existe pas, a \xe9t\xe9 supprim\xe9e, son nom a \xe9t\xe9 modifi\xe9 ou est temporairement indisponible.","Your account":"Votre compte","Delete your account":"Supprimer votre compte","Styles":"Styles","Pitch1":"#Nouvelle Collection 2022","Pitch2":"PerfectoGaz","Shop now":"Magasiner","Account Management":"Gestion de compte","SKU":"UGS","Description":"La description","Reviews":"Commentaires","Weight":"Poids","Add a Review":"Ajouter un commentaire","Your rating":"Votre note","Message":"Un message","Submit":"Soumettre","No items found in reviews":"Aucun article trouv\xe9 dans les avis"}')},497:function(e,t,n){},498:function(e,t,n){"use strict";n.r(t);n(252),n(264);var r=n(0),o=n(43),a=n.n(o),i=n(76),s=n(245),c=n(156),u=n(47),d=n(4),l=n(94),p={products:[],productid:"",categoryid:""},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;return t.type===l.a?Object(d.a)(Object(d.a)({},e),{},{products:t.payload}):t.type===l.c?Object(d.a)(Object(d.a)({},e),{},{productid:t.payload}):t.type===l.b?Object(d.a)(Object(d.a)({},e),{},{categoryid:t.payload}):e},f=n(63),b=n(44),g=n(49),h={cartItems:{},cartID:"",cartCount:0,orderID:""},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,n=e,r=t.payload;if(t.type===g.e)return Object(d.a)(Object(d.a)({},e),{},{cartID:t.payload});if(t.type===g.d)return Object(d.a)(Object(d.a)({},e),{},{cartItems:Object.assign({},t.payload),cartCount:t.payload.quantity});if(t.type===g.a&&console.log("Decrease cart qty"),t.type===g.c){var o=n.cartItems.products.findIndex((function(e){return e.id===r.id}));if(n.cartItems.products.splice(o,1),0===n.cartItems.products.length){var a=window._env_.APP_MERCHANT+"_shopizer_cart",i=new f.a;return i.remove(a),Object(b.d)(g.e),Object(d.a)(Object(d.a)({},e),{},{cartItems:{},cartCount:n.cartItems.products.length,cartID:""})}return Object(d.a)(Object(d.a)({},e),{},{cartCount:n.cartItems.products.length,cartItems:n.cartItems})}if(t.type===g.b){var s=window._env_.APP_MERCHANT+"_shopizer_cart",c=new f.a;return c.remove(s),Object(b.d)(s),Object(d.a)(Object(d.a)({},e),{},{cartItems:{},cartCount:0,cartID:"",orderID:t.payload})}return e},v=n(96),y={merchant:"",defaultStore:""},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;return t.type===v.a?Object(d.a)(Object(d.a)({},e),{},{merchant:t.payload}):t.type===v.b?Object(d.a)(Object(d.a)({},e),{},{defaultStore:t.payload}):e},j=n(48),S={isLoading:!1},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;return t.type===j.a?Object(d.a)(Object(d.a)({},e),{},{isLoading:t.payload}):e},w=n(65),P={userData:"",country:[],shipCountry:[],state:[],shipState:[],currentAddress:[]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;return t.type===w.f?Object(d.a)(Object(d.a)({},e),{},{userData:t.payload}):t.type===w.b?Object(d.a)(Object(d.a)({},e),{},{country:t.payload}):t.type===w.c?Object(d.a)(Object(d.a)({},e),{},{shipCountry:t.payload}):t.type===w.e?Object(d.a)(Object(d.a)({},e),{},{state:t.payload}):t.type===w.a?Object(d.a)(Object(d.a)({},e),{},{currentAddress:t.payload}):t.type===w.d?Object(d.a)(Object(d.a)({},e),{},{shipState:t.payload}):e},E=n(161),N={contentId:""},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;return t.type===E.a?Object(d.a)(Object(d.a)({},e),{},{contentId:t.payload}):e},I=n(64),x=Object(i.combineReducers)({multilanguage:Object(I.createMultilanguageReducer)({currentLanguageCode:"en"}),productData:m,merchantData:C,cartData:O,loading:A,userData:T,content:R}),_=n(21),D=Object(_.h)((function(e){return Object(r.useEffect)((function(){window.scrollTo(0,0)})),e.children})),k=n(117),U=n(160),L=n(159),M=n(246),z=n.n(M),F=n(6),Y=Object(u.connect)((function(e){return{isLoading:e.loading.isLoading}}),(function(e){return{}}))((function(e){var t=e.isLoading;return Object(F.jsx)("div",{children:Object(F.jsx)(z.a,{size:100,color:window._env_.APP_THEME_COLOR,loading:t})})})),G=n(247),H=n.n(G),V=Object(u.connect)((function(e){return{currentLanguageCode:e.multilanguage.currentLanguageCode}}),(function(e){return{}}))(Object(I.multilanguage)((function(e){var t=e.strings;return Object(F.jsx)(H.a,{location:"bottom",style:{background:"#2B373B"},buttonText:t.Accept,buttonStyle:{background:"#4e503b",color:"#fff",fontSize:"14px",padding:"10px 30px"},children:t["Cookie Consent"]})}))),B=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(4),n.e(13)]).then(n.bind(null,654))})),q=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(3),n.e(4),n.e(11),n.e(12)]).then(n.bind(null,639))})),W=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(3),n.e(9),n.e(14)]).then(n.bind(null,655))})),J=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(21)]).then(n.bind(null,640))})),K=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(8),n.e(1),n.e(24)]).then(n.bind(null,641))})),Q=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(23)]).then(n.bind(null,642))})),Z=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(22)]).then(n.bind(null,643))})),X=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(27)]).then(n.bind(null,644))})),$=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(19)]).then(n.bind(null,645))})),ee=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(17)]).then(n.bind(null,646))})),te=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(16)]).then(n.bind(null,647))})),ne=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(15),n.e(1),n.e(20)]).then(n.bind(null,648))})),re=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(25)]).then(n.bind(null,649))})),oe=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(26)]).then(n.bind(null,650))})),ae=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(18)]).then(n.bind(null,651))})),ie=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(3),n.e(4),n.e(1),n.e(10)]).then(n.bind(null,652))})),se=Object(u.connect)()(Object(I.multilanguage)((function(e){return Object(r.useEffect)((function(){var t=window._env_.APP_MERCHANT+"_shopizer_cart",r=(new f.a).get(t);r&&(console.log("cookie !!! "+r),e.dispatch(Object(g.j)(r))),document.documentElement.style.setProperty("--theme-color",window._env_.APP_THEME_COLOR),e.dispatch(Object(I.loadLanguages)({languages:{en:n(495),fr:n(496)}}))})),Object(F.jsx)(U.ToastProvider,{placement:"bottom-left",children:Object(F.jsx)(L.BreadcrumbsProvider,{children:Object(F.jsxs)(k.a,{children:[Object(F.jsx)(Y,{}),Object(F.jsx)(V,{}),Object(F.jsx)(D,{children:Object(F.jsx)(r.Suspense,{fallback:Object(F.jsx)("div",{className:"flone-preloader-wrapper",children:Object(F.jsxs)("div",{className:"flone-preloader",children:[Object(F.jsx)("span",{}),Object(F.jsx)("span",{})]})}),children:Object(F.jsxs)(_.c,{children:[Object(F.jsx)(_.a,{exact:!0,path:"/",component:B}),Object(F.jsx)(_.a,{path:"/category/:id",component:q}),Object(F.jsx)(_.a,{path:"/product/:id",component:W}),Object(F.jsx)(_.a,{path:"/content/:id",component:ae}),Object(F.jsx)(_.a,{path:"/search/:id",component:ie}),Object(F.jsx)(_.a,{path:"/contact",component:J}),Object(F.jsx)(_.a,{path:"/my-account",component:K}),Object(F.jsx)(_.a,{path:"/register",component:Q}),Object(F.jsx)(_.a,{path:"/login",component:Q}),Object(F.jsx)(_.a,{path:"/forgot-password",component:Z}),Object(F.jsx)(_.a,{path:"/customer/:code/reset/:id",component:X}),Object(F.jsx)(_.a,{path:"/cart",component:$}),Object(F.jsx)(_.a,{path:"/recent-order",component:ee}),Object(F.jsx)(_.a,{path:"/order-details/:id",component:te}),Object(F.jsx)(_.a,{path:"/checkout",component:ne}),Object(F.jsx)(_.a,{path:"/order-confirm",component:oe}),Object(F.jsx)(_.a,{path:"/not-found",component:re}),Object(F.jsx)(_.a,{exact:!0,component:re})]})})})]})})})})));n(497),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=n(248),ue=Object(i.createStore)(x,Object(c.load)(),Object(ce.composeWithDevTools)(Object(i.applyMiddleware)(s.a,Object(c.save)())));a.a.render(Object(F.jsx)(u.Provider,{store:ue,children:Object(F.jsx)(se,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},65:function(e,t,n){"use strict";n.d(t,"f",(function(){return d})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return m})),n.d(t,"d",(function(){return f})),n.d(t,"a",(function(){return b})),n.d(t,"k",(function(){return g})),n.d(t,"h",(function(){return h})),n.d(t,"j",(function(){return O})),n.d(t,"i",(function(){return v})),n.d(t,"g",(function(){return y}));var r=n(5),o=n.n(r),a=n(18),i=n(38),s=n(22),c=n(116),u=n.n(c),d="SET_USER",l="SET_COUNTRY",p="SET_SHIPPING_COUNTRY",m="SET_STATE",f="SET_SHIP_STATE",b="GET_CURRENT_ADDRESS";u.a.setApiKey(window._env_.APP_MAP_API_KEY),u.a.setLanguage("en");var g=function(e){return function(){var t=Object(a.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:d,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(a.a)(o.a.mark((function t(n){var r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=s.a.ACTION.SHIPPING_COUNTRY+"?store="+window._env_.APP_MERCHANT+"&lang="+e,t.next=4,i.a.get(r);case 4:a=t.sent,n({type:p,payload:a}),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(a.a)(o.a.mark((function t(n){var r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=s.a.ACTION.ZONES+"?code="+e,t.next=4,i.a.get(r);case 4:a=t.sent,n({type:m,payload:a}),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(a.a)(o.a.mark((function t(n){var r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=s.a.ACTION.ZONES+"?code="+e,t.next=4,i.a.get(r);case 4:a=t.sent,n({type:f,payload:a}),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},y=function(){return function(){var e=Object(a.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=window.navigator&&window.navigator.geolocation)&&n.getCurrentPosition((function(e){t(C(e.coords.latitude,e.coords.longitude))}),(function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(e,t){return function(){var n=Object(a.a)(o.a.mark((function n(r){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:u.a.fromLatLng(e,t).then((function(e){r({type:b,payload:e.results})}),(function(e){console.error(e)}));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return s}));var r="FETCH_PRODUCTS_SUCCESS",o="SET_PRODUCT_ID",a="SET_CATEGORY_ID",i=function(e){return function(t){t({type:o,payload:e})}},s=function(e){return function(t){t({type:a,payload:e})}}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return d}));var r=n(5),o=n.n(r),a=n(18),i=n(38),s=n(22),c="SET_MERCHANT",u="SET_STORE",d=function(){return function(){var e=Object(a.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.a.ACTION.STORE+window._env_.APP_MERCHANT,e.prev=1,e.next=4,i.a.get(n);case 4:r=e.sent,t({type:c,payload:r}),t(l(r.code)),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},l=function(e){return function(){var t=Object(a.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:u,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}},[[498,6,7]]]);
//# sourceMappingURL=main.f259da66.chunk.js.map