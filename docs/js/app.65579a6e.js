(function(t){function e(e){for(var i,n,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&p.push(o[n][0]),o[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,n=1;n<a.length;n++){var c=a[n];0!==o[c]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},o={app:0},r=[];function n(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e25eb9dc"}[t]+".js"}function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,i){a=o[t]=[e,i]}));e.push(a[2]=i);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=n(t);var l=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=o[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",l.name="ChunkLoadError",l.type=i,l.request=r,a[1](l)}o[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/docs/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0b0f":function(t,e,a){t.exports=a.p+"img/nebbia.38629281.jpg"},"0d9e":function(t,e,a){t.exports=a.p+"img/jumbo.d53913dd.jpg"},1261:function(t,e,a){},"147a":function(t,e,a){"use strict";a("1261")},"4cf8":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return o}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},o=[]},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("BaseNavbar"),i("v-main",[i("section",{attrs:{id:"hero"}},[i("v-row",{attrs:{"no-gutters":""}},[i("v-img",{attrs:{height:"calc(100vh - "+t.$vuetify.application.top+"px)",src:a("0d9e")}},[i("v-theme-provider",{attrs:{dark:""}},[i("v-container",{attrs:{"fill-height":""}},[i("v-row",{staticClass:"white--text mx-auto",attrs:{align:"center",justify:"center"}},[i("v-col",{staticClass:"white--text text-center",attrs:{cols:"12",tag:"h1"}},[i("span",{staticClass:"font-weight-light",class:[t.$vuetify.breakpoint.smAndDown?"display-1":"display-2"]},[t._v(" ANDREA MAZZA ")]),i("br"),i("span",{staticClass:"font-weight-black",class:[t.$vuetify.breakpoint.smAndDown?"display-3":"display-4"]},[t._v(" Web Devoloper ")])]),i("v-btn",{staticClass:"align-self-end",attrs:{fab:"",outlined:""},on:{click:function(e){return t.$vuetify.goTo("#about-me")}}},[i("v-icon",[t._v("mdi-chevron-double-down")])],1)],1)],1)],1)],1)],1)],1),i("section",{attrs:{id:"about-me"}},[i("div",{staticClass:"py-12"}),i("v-container",{staticClass:"text-center"},[i("h2",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("SU DI ME")]),i("v-responsive",{staticClass:"mx-auto mb-8",attrs:{width:"56"}},[i("v-divider",{staticClass:"mb-1"}),i("v-divider")],1),i("v-responsive",{staticClass:"mx-auto title font-weight-light mb-8",attrs:{"max-width":"1140"}},[i("div",{staticClass:"biografy"},[i("p",{staticClass:"brackets-extrems"},[t._v("Sviluppatore Web con competenze in "),i("br"),t._v(" HTML, SASS, JavaScript, jQuery, Vue, Vuetify, PHP, MySQL e Laravel.")]),i("div",{staticClass:"brackets-wrap"},[i("p",{staticClass:"brackets"},[t._v("{")]),i("p",{staticClass:"brackets-long-text"},[t._v("Il mio percorso professionale è iniziato all'interno di ARPA EMR, con il proseguimento del lavoro di tesi specialistica per lo sviluppo di un programma per la valutazione dell'impatto ambientale dei sistemi di produzione dell'energia elettrica e cogenerativi alimentati a combustibili rinnovabili. Dopo quest'esperienza ho spostato il mio interesse dalla meccanica all'energetica. In questa veste ho lavorato per 6 anni presso l'INFN-CNAF occupandomi principalmente del cooling del centro di calcolo TIER 1 come tecnologo, ruolo trasversale che abbraccia sia la ricerca e sviluppo sia l'implementazione sul campo.")]),i("p",{staticClass:"brackets-long-text"},[t._v("Ho investito in formazione concludendo un Master in Gestione dell'Energia per Edifici e Infrastrutture, seguendo corsi di programmazione di BMS presso Schneider Electric e abilitandomi come PES-PAV/PEI. Ho lavorato ancora nel settore, prima per TESI Engineering a Trento e più recentemente per AWS a Milano. Quest'ultima esperienza mi ha consentito di avvicinarmi maggiormente al mondo digitale e di cogliere l'opportunità per un cambio di rotta verso lo sviluppo web.")]),i("p",{staticClass:"brackets"},[t._v("}")])]),i("p",{staticClass:"brackets-extrems"},[t._v("Boolean Careers sullo sviluppo Front-end e Back-end di siti web.")])])]),t._l(t.icons,(function(t,e){return i("v-avatar",{key:e,staticClass:"code-icon elevation-12 mb-12 mx-5",attrs:{size:"90"}},[i("i",{class:t})])})),i("div"),i("v-row",[i("v-col",{staticClass:"mt-100"},[i("v-btn",{staticClass:"align-self-end",attrs:{fab:"",outlined:""},on:{click:function(e){return t.$vuetify.goTo("#portfolio")}}},[i("v-icon",[t._v("mdi-chevron-double-down")])],1)],1)],1)],2),i("div",{staticClass:"py-12"})],1),i("section",{attrs:{id:"portfolio"}},[i("div",{staticClass:"py-12"}),i("v-container",{staticClass:"text-center"},[i("h2",{staticClass:"display-2 font-weight-bold mb-3 text-uppercase text-center"},[t._v("Portfolio")]),i("v-responsive",{staticClass:"mx-auto mb-12",attrs:{width:"56"}},[i("v-divider",{staticClass:"mb-1"}),i("v-divider")],1),i("v-responsive",{staticClass:"mx-auto title font-weight-light mb-8 align-center",attrs:{"max-width":"1140"}},[i("p",{staticClass:"subtitle"},[t._v("Alcuni dei lavori sviluppati durante il Corso Boolean Careers 2020/21")])]),i("v-row",t._l(t.articles,(function(e,a){var o=e.src,r=(e.src_h,e.text,e.title),n=e.ex_url;return i("v-col",{key:a,attrs:{cols:"12",md:"4"}},[i("BaseCarousel",{attrs:{items:o}}),i("h3",{staticClass:"font-weight-black mt-6 text-uppercase",domProps:{textContent:t._s(r)}}),i("v-btn",{staticClass:"mb-4 font-weight-black",attrs:{fab:"",color:t.colors.$f_clear,text:"",href:n,target:"_blank"}},[i("i",{staticClass:"fas fa-external-link-alt"})])],1)})),1),i("v-row",[i("v-col",{staticClass:"mt-100"},[i("v-btn",{staticClass:"align-self-end justify-center",attrs:{fab:"",outlined:"",color:t.colors.$f_clear},on:{click:function(e){return t.$vuetify.goTo("#contact")}}},[i("v-icon",[t._v("mdi-chevron-double-down")])],1)],1)],1)],1),i("div",{staticClass:"py-12"})],1),i("section",{attrs:{id:"stats"}},[i("v-parallax",{attrs:{height:t.$vuetify.breakpoint.smAndDown?700:600,src:a("0b0f")}})],1),i("v-sheet",{attrs:{id:"contact",dark:"",tag:"section",tile:""}},[i("div",{staticClass:"py-12"}),i("v-container",{staticClass:"form"},[i("h2",{staticClass:"display-2 font-weight-bold mb-3 text-uppercase text-center"},[t._v("Contatti")]),i("v-responsive",{staticClass:"mx-auto mb-12",attrs:{width:"56"}},[i("v-divider",{staticClass:"mb-1"}),i("v-divider")],1),i("v-theme-provider",{attrs:{light:""}},[i("BaseContact")],1)],1),i("div",{staticClass:"py-12"})],1)],1),i("v-footer",{staticClass:"justify-center",attrs:{id:"footer","min-height":"100",padless:""}},[i("v-container",[i("div",{staticClass:"title font-weight-light text-center",attrs:{id:"contacts"}},[i("ul",{staticClass:"contacts-list"},[i("li",[i("div",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.contact.email,expression:"contact.email"}],staticClass:"contact-button"},[i("v-btn",{attrs:{dark:"",loading:t.loading,disabled:t.loading},on:{click:function(e){t.loader="loading"}},scopedSlots:t._u([{key:"loader",fn:function(){return[i("span",[t._v("Copiato!")])]},proxy:!0}])},[i("i",{staticClass:"far fa-envelope"}),t._v(" | andrea.mazza84@gmail.com ")])],1)]),i("li",[i("div",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.contact.phone,expression:"contact.phone"}],staticClass:"contact-button"},[i("v-btn",{attrs:{dark:"",loading:t.loading2,disabled:t.loading2},on:{click:function(e){t.loader="loading2"}},scopedSlots:t._u([{key:"loader",fn:function(){return[i("span",[t._v("Copiato!")])]},proxy:!0}])},[i("i",{staticClass:"fas fa-phone"}),t._v(" | +39 329 86 29 509 ")])],1)]),i("li",[i("div",{staticClass:"social"},[i("v-btn",{attrs:{fab:"",dark:"",href:"https://www.linkedin.com/in/anmazza/",target:"_blank"}},[i("i",{staticClass:"fab fa-linkedin"})]),i("v-btn",{attrs:{fab:"",dark:"",href:"https://github.com/andreamazza84/",target:"_blank"}},[i("i",{staticClass:"fab fa-github"})])],1)]),i("li",[i("v-btn",{staticClass:"arrow-up",attrs:{fab:"",dark:""},on:{click:function(e){return t.$vuetify.goTo("#hero")}}},[i("i",{staticClass:"fas fa-chevron-up"})])],1)])])]),i("div",{staticClass:"copy"},[t._v("© Copyright "+t._s((new Date).getFullYear())+" - Andrea Mazza")])],1)],1)},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{id:"navbar",app:"",height:"100","elevate-on-scroll":""}},[a("v-avatar",{staticClass:"mr-3",attrs:{color:"grey lighten-5",size:"70"}},[a("v-img",{attrs:{contain:"","max-height":"100%",src:"/img/logo.png"}})],1),a("v-toolbar-title",{staticClass:"font-weight-black headline"},[t._v(" PORTFOLIO ")]),a("v-spacer"),a("v-btn",{attrs:{plain:""},on:{click:function(e){return t.$vuetify.goTo("#about-me")}}},[t._v("about")]),a("v-btn",{attrs:{plain:""},on:{click:function(e){return t.$vuetify.goTo("#portfolio")}}},[t._v("portfolio")]),a("v-btn",{attrs:{plain:""},on:{click:function(e){return t.$vuetify.goTo("#contact")}}},[t._v("contatti")]),a("v-btn",{attrs:{fab:"",plain:""},on:{click:function(e){return t.$vuetify.goTo("#hero")}}},[a("v-icon",[t._v("mdi-chevron-double-up")])],1)],1)},s=[],c=a("2877"),l=a("6544"),u=a.n(l),d=a("40dc"),p=a("8212"),m=a("8336"),v=a("132d"),f=a("adda"),b=a("2fa4"),h=a("2a7f"),g={},x=Object(c["a"])(g,n,s,!1,null,null,null),C=x.exports;u()(x,{VAppBar:d["a"],VAvatar:p["a"],VBtn:m["a"],VIcon:v["a"],VImg:f["a"],VSpacer:b["a"],VToolbarTitle:h["a"]});var y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",[a("v-col",[a("v-text-field",{staticClass:"form-input",attrs:{flat:"",label:"Nome*",solo:"","error-messages":t.nameErrors},on:{input:function(e){return t.$v.name.$touch()},blur:function(e){return t.$v.name.$touch()}}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{staticClass:"form-input",attrs:{flat:"",label:"Email*",solo:"","error-messages":t.emailErrors},on:{input:function(e){return t.$v.email.$touch()},blur:function(e){return t.$v.email.$touch()}}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{staticClass:"form-input",attrs:{flat:"",label:"Oggetto*",solo:"","error-messages":t.objectErrors},on:{input:function(e){return t.$v.object.$touch()},blur:function(e){return t.$v.object.$touch()}}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{staticClass:"form-input",attrs:{flat:"",label:"Scrivi qua*",solo:"","error-messages":t.textErrors},on:{input:function(e){return t.$v.text.$touch()},blur:function(e){return t.$v.text.$touch()}}})],1),a("v-col",{staticClass:"mx-auto",attrs:{cols:"auto"}},[a("v-btn",{staticClass:"btn-submit",attrs:{"x-large":""}},[t._v(" Submit ")])],1)],1)},_=[],$=(a("b0c0"),a("1dce")),w=a.n($),k=a("b5ae"),z={mixins:[$["validationMixin"]],validations:{name:{required:k["required"],maxLength:Object(k["maxLength"])(30)},email:{required:k["required"],email:k["email"]},object:{required:k["required"]},text:{required:k["required"]},checkbox:{checked:function(t){return t}}},data:function(){return{name:"",email:"",select:null,items:["Item 1","Item 2","Item 3","Item 4"],checkbox:!1}},computed:{checkboxErrors:function(){var t=[];return this.$v.checkbox.$dirty?(!this.$v.checkbox.checked&&t.push("Devi accettare le condizioni per continuare"),t):t},nameErrors:function(){var t=[];return this.$v.name.$dirty?(!this.$v.name.maxLength&&t.push("Richiesto"),!this.$v.name.required&&t.push("Richiesto"),t):t},objectErrors:function(){var t=[];return this.$v.object.$dirty?(!this.$v.object.maxLength&&t.push("Richiesto"),!this.$v.object.required&&t.push("Richiesto"),t):t},textErrors:function(){var t=[];return this.$v.text.$dirty?(!this.$v.text.maxLength&&t.push("Richiesto"),!this.$v.text.required&&t.push("Richiesto"),t):t},emailErrors:function(){var t=[];return this.$v.email.$dirty?(!this.$v.email.email&&t.push("Inserisci un indirizzo email valido"),!this.$v.email.required&&t.push("Richiesto"),t):t}},methods:{submit:function(){this.$v.$touch()},clear:function(){this.$v.$reset(),this.name="",this.email="",this.select=null,this.checkbox=!1}}},j=z,V=a("62ad"),E=a("0fd9"),S=a("8654"),q=a("a844"),A=Object(c["a"])(j,y,_,!1,null,null,null),O=A.exports;u()(A,{VBtn:m["a"],VCol:V["a"],VRow:E["a"],VTextField:S["a"],VTextarea:q["a"]});var T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slider"},[a("v-carousel",{attrs:{height:"auto","show-arrows":!1,progress:!1,touch:{left:function(){return t.model++},right:function(){return t.model--}}},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.items,(function(t,e){return a("v-carousel-item",{key:e,staticClass:"borderRadious",attrs:{src:t}})})),1)],1)},B=[],I={props:{items:{type:Array,required:!0}},data:function(){return{model:0}}},P=I,F=(a("147a"),a("5e66")),R=a("3e35"),L=Object(c["a"])(P,T,B,!1,null,"85095230",null),M=L.exports;u()(L,{VCarousel:F["a"],VCarouselItem:R["a"]});var D={name:"App",components:{BaseNavbar:C,BaseContact:O,BaseCarousel:M},data:function(){return{counter:-1,src_img:"",loader:null,loading:!1,loading2:!1,contact:{email:"andrea.mazza84@gmail.com",phone:"+393298629509"},articles:[{src:["/img-boolean/Boolflix.png","/img-boolean/Boolflix-h.png"],title:"Boolflix",ex_url:"https://andreamazza84.github.io/boolflix/"},{src:["/img-boolean/boolzapp.png","/img-boolean/boolzapp-h.png"],title:"Boolzapp",ex_url:"https://andreamazza84.github.io/vue-boolzapp/"},{src:["/img-boolean/hubspot.png","/img-boolean/hubspot-h.png"],title:"HubSpot",ex_url:"https://andreamazza84.github.io/htmlcss-hubspot/"},{src:["/img-boolean/spotify.png","/img-boolean/spotify-h.png"],title:"Spotify",ex_url:"https://andreamazza84.github.io/html-css-spotifyweb/"},{src:["/img-boolean/helbiz.png","/img-boolean/helbiz-h.png"],title:"Helbiz",ex_url:"https://andreamazza84.github.io/html-css-helbiz/"},{src:["/img-boolean/digitalOcean.png","/img-boolean/digitalOcean-h.png"],title:"DigitalOcean",ex_url:"https://andreamazza84.github.io/html-css-digitalocean/"}],features:[{icon:"mdi-account-group-outline",title:"Vibrant Community",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"},{icon:"mdi-update",title:"Frequent Updates",text:"Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit."},{icon:"mdi-shield-outline",title:"Long-term Support",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"}],stats:[["24k","Github Stars"],["330+","Releases"],["1m","Downloads/mo"],["5m","Total Downloads"]],icons:["fab fa-html5","fab fa-css3-alt","fab fa-vuejs","fab fa-js-square","fab fa-sass","fab fa-wordpress","fab fa-laravel","fab fa-php"],colors:{$b_primary:"#c4d2ddee",$b_complementary:"#ddcfc4ee",$b_triadic_1:"#d2ddc4ee",$b_triadic_2:"#ddc4d2ee",$b_mild:"#2B3C4A",$b_dark:"#171718",$b_footer:"#000",$f_clear:"#fdfdfd",$f_dark:"#171718",$f_mild:"#2B3C4A",$f_semidark:"#333"}}},watch:{loader:function(){var t=this,e=this.loader;this[e]=!this[e],setTimeout((function(){return t[e]=!1}),3e3),this.loader=null}},methods:{hover:function(t){this.counter=t,console.log(t)},blur:function(){this.counter=-1}}},N=D,H=(a("5c0b"),a("7496")),J=a("a523"),Q=a("ce7e"),W=a("553a"),G=a("f6c4"),U=a("8b9c"),Z=a("6b53"),Y=a("8dd9"),K=a("480e"),X=Object(c["a"])(N,o,r,!1,null,null,null),tt=X.exports;u()(X,{VApp:H["a"],VAvatar:p["a"],VBtn:m["a"],VCol:V["a"],VContainer:J["a"],VDivider:Q["a"],VFooter:W["a"],VIcon:v["a"],VImg:f["a"],VMain:G["a"],VParallax:U["a"],VResponsive:Z["a"],VRow:E["a"],VSheet:Y["a"],VThemeProvider:K["a"]});a("d3b7"),a("3ca3"),a("ddb0");var et=a("8c4f"),at=a("bb51");i["a"].use(et["a"]);var it=[{path:"/",name:"Home",component:at["default"]},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],ot=new et["a"]({mode:"history",base:"/docs/",routes:it}),rt=ot,nt=a("2f62");i["a"].use(nt["a"]);var st=new nt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ct=a("ade3"),lt=(a("1f54"),a("5363"),a("f309")),ut=a("f107");i["a"].use(lt["a"]);var dt=new lt["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#007BFF",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},lang:{locales:{it:ut["a"]},current:"it"},icons:Object(ct["a"])({iconfont:"fa4"},"iconfont","mdi")}),pt=(a("d5e8"),a("7f10"),a("af88"));i["a"].use(pt["a"]),i["a"].use(w.a),i["a"].config.productionTip=!1,new i["a"]({router:rt,store:st,vuetify:dt,render:function(t){return t(tt)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"7ad4":function(t,e,a){"use strict";var i=a("9cae"),o=a.n(i);e["default"]=o.a},"9c0c":function(t,e,a){},"9cae":function(t,e){},bb51:function(t,e,a){"use strict";var i=a("4cf8"),o=a("7ad4"),r=a("2877"),n=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=n.exports}});
//# sourceMappingURL=app.65579a6e.js.map