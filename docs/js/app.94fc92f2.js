(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var o=a[s];0!==r[o]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},s={app:0},r={app:0},i=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"88f3aa4c"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"0d86ad31"}[t]+".css",r=c.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===r))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===n||u===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var n=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete s[t],m.parentNode.removeChild(m),a(i)},m.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){s[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",d.name="ChunkLoadError",d.type=n,d.request=s,a[1](d)}r[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/my-portfolio/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"043c":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return s}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe ",attrs:{href:"https://www.iubenda.com/privacy-policy/91506390",title:"Privacy Policy "}},[t._v("Privacy Policy")])},s=[]},"0b0f":function(t,e,a){t.exports=a.p+"img/nebbia.38629281.jpg"},"0d9e":function(t,e,a){t.exports=a.p+"img/jumbo.d53913dd.jpg"},"1bac":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"hero"}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-img",{attrs:{height:"calc(100vh - "+t.$vuetify.application.top+"px)",src:a("0d9e")}},[n("v-theme-provider",{attrs:{dark:""}},[n("v-container",{attrs:{"fill-height":""}},[n("v-row",{staticClass:"white--text mx-auto",attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"white--text text-center",attrs:{cols:"12",tag:"h1"}},[n("span",{staticClass:"font-weight-light",class:[t.$vuetify.breakpoint.smAndDown?"display-1":"display-2"]},[t._v(" ANDREA MAZZA ")]),n("br"),n("span",{staticClass:"font-weight-black",class:[t.$vuetify.breakpoint.smAndDown?"display-3":"display-4"]},[t._v(" Web Devoloper ")])]),n("v-btn",{staticClass:"align-self-end",attrs:{fab:"",outlined:""},on:{click:function(e){return t.$vuetify.goTo("#about-me")}}},[n("v-icon",[t._v("mdi-chevron-double-down")])],1)],1)],1)],1)],1)],1)],1)},s=[],r=a("2877"),i=a("6544"),o=a.n(i),c=a("8336"),l=a("62ad"),u=a("a523"),d=a("132d"),m=a("adda"),f=a("0fd9"),v=a("480e"),p={},g=Object(r["a"])(p,n,s,!1,null,null,null);e["a"]=g.exports;o()(g,{VBtn:c["a"],VCol:l["a"],VContainer:u["a"],VIcon:d["a"],VImg:m["a"],VRow:f["a"],VThemeProvider:v["a"]})},"2e95":function(t,e,a){},"4ffd":function(t,e){t.exports="data:image/png;base64,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"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("router-view"),a("BaseFooter")],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{staticClass:"justify-center",attrs:{id:"footer","min-height":"100",padless:""}},[a("v-container",[a("div",{staticClass:"title font-weight-light text-center",attrs:{id:"contacts"}},[a("ul",{staticClass:"contacts-list"},[a("li",[a("div",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.contact.email,expression:"contact.email"}],staticClass:"contact-button"},[a("v-btn",{attrs:{dark:"",loading:t.loading,disabled:t.loading},on:{click:function(e){t.loader="loading"}},scopedSlots:t._u([{key:"loader",fn:function(){return[a("span",[t._v("Copiato!")])]},proxy:!0}])},[a("i",{staticClass:"far fa-envelope"}),t._v(" | andrea.mazza84@gmail.com ")])],1)]),a("li",[a("div",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.contact.phone,expression:"contact.phone"}],staticClass:"contact-button"},[a("v-btn",{attrs:{dark:"",loading:t.loading2,disabled:t.loading2},on:{click:function(e){t.loader="loading2"}},scopedSlots:t._u([{key:"loader",fn:function(){return[a("span",[t._v("Copiato!")])]},proxy:!0}])},[a("i",{staticClass:"fas fa-phone"}),t._v(" | +39 329 86 29 509 ")])],1)]),a("li",[a("div",{staticClass:"social"},[a("v-btn",{attrs:{fab:"",dark:"",href:"https://www.linkedin.com/in/anmazza/",target:"_blank"}},[a("i",{staticClass:"fab fa-linkedin"})]),a("v-btn",{attrs:{fab:"",dark:"",href:"https://github.com/andreamazza84/",target:"_blank"}},[a("i",{staticClass:"fab fa-github"})])],1)]),a("li",[a("v-btn",{staticClass:"arrow-up",attrs:{fab:"",dark:""},on:{click:function(e){return t.$vuetify.goTo("#hero")}}},[a("i",{staticClass:"fas fa-chevron-up"})])],1)])])]),a("div",{staticClass:"copy"},[t._v("© Copyright "+t._s((new Date).getFullYear())+" - Andrea Mazza")])],1)},o=[],c={data:function(){return{loader:null,loading:!1,loading2:!1,contact:{email:"andrea.mazza84@gmail.com",phone:"+393298629509"}}},watch:{loader:function(){var t=this,e=this.loader;this[e]=!this[e],setTimeout((function(){return t[e]=!1}),3e3),this.loader=null}}},l=c,u=a("2877"),d=a("6544"),m=a.n(d),f=a("8336"),v=a("a523"),p=a("553a"),g=Object(u["a"])(l,i,o,!1,null,null,null),b=g.exports;m()(g,{VBtn:f["a"],VContainer:v["a"],VFooter:p["a"]});var h={name:"App",components:{BaseFooter:b}},C=h,A=(a("5c0b"),a("7496")),x=Object(u["a"])(C,s,r,!1,null,null,null),y=x.exports;m()(x,{VApp:A["a"]});a("d3b7"),a("3ca3"),a("ddb0");var E=a("8c4f"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-main",[a("SectionNavbar"),a("SectionHero"),a("SectionAbout"),a("SectionPortfolio"),a("SectionStats"),a("SectionContacts")],1)},k=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Header"}},[n("v-app-bar",{attrs:{id:"navbar",app:"",height:"80","elevate-on-scroll":""}},[n("v-avatar",{staticClass:"mr-3",attrs:{color:"grey lighten-5",size:"70"}},[n("v-img",{staticClass:"logo",attrs:{contain:"","max-height":"100%",src:a("4ffd"),alt:"logo"},on:{click:function(e){return t.$vuetify.goTo("#hero")}}})],1),n("v-spacer"),n("v-app-bar-nav-icon",{attrs:{"x-large":""},on:{click:function(e){return t.$vuetify.goTo("#hero")}}},[n("v-icon",[t._v("mdi-chevron-double-up")])],1),n("v-btn",{staticClass:"d-none d-sm-inline-flex",attrs:{"x-large":"",plain:""},on:{click:function(e){return t.$vuetify.goTo("#about-me")}}},[t._v("about")]),n("v-btn",{staticClass:"d-none d-sm-inline-flex",attrs:{"x-large":"",plain:""},on:{click:function(e){return t.$vuetify.goTo("#portfolio")}}},[t._v("portfolio")]),n("v-btn",{staticClass:"d-none d-sm-inline-flex",attrs:{"x-large":"",plain:""},on:{click:function(e){return t.$vuetify.goTo("#contact")}}},[t._v("contatti")]),n("v-app-bar-nav-icon",{staticClass:"d-flex d-sm-none",attrs:{"x-large":""},on:{click:function(e){return t.menuToggle()}}})],1),n("baseHamburger")],1)},I=[],B=a("5e05"),$={components:{BaseHamburger:B["a"]},methods:{menuToggle:function(){this.$store.dispatch("menuToggle")}},data:function(){return{drawer:!1,group:null}}},z=$,O=(a("b6a8"),a("40dc")),j=a("5bc1"),S=a("8212"),V=a("132d"),P=a("adda"),T=a("2fa4"),N=Object(u["a"])(z,_,I,!1,null,"5928bd61",null),Q=N.exports;m()(N,{VAppBar:O["a"],VAppBarNavIcon:j["a"],VAvatar:S["a"],VBtn:f["a"],VIcon:V["a"],VImg:P["a"],VSpacer:T["a"]});var D=a("1bac"),H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"about-me"}},[a("div",{staticClass:"py-12"}),a("v-container",{staticClass:"text-center"},[a("h2",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("SU DI ME")]),a("v-responsive",{staticClass:"mx-auto mb-8",attrs:{width:"56"}},[a("v-divider",{staticClass:"mb-1"}),a("v-divider")],1),a("v-responsive",{staticClass:"mx-auto title font-weight-light mb-8",attrs:{"max-width":"1140"}},[a("div",{staticClass:"biografy"},[a("p",{staticClass:"brackets-extrems"},[t._v("Sviluppatore Web con competenze in "),a("br"),t._v(" HTML, SASS, JavaScript, jQuery, Vue, Vuetify, PHP, MySQL e Laravel.")]),a("div",{staticClass:"brackets-wrap"},[a("p",{staticClass:"brackets"},[t._v("{")]),a("p",{staticClass:"brackets-long-text"},[t._v("Il mio percorso professionale è iniziato all'interno di ARPA EMR, con il proseguimento del lavoro di tesi specialistica per lo sviluppo di un programma per la valutazione dell'impatto ambientale dei sistemi di produzione dell'energia elettrica e cogenerativi alimentati a combustibili rinnovabili. Dopo quest'esperienza ho spostato il mio interesse dalla meccanica all'energetica. In questa veste ho lavorato per 6 anni presso l'INFN-CNAF occupandomi principalmente del cooling del centro di calcolo TIER 1 come tecnologo, ruolo trasversale che abbraccia sia la ricerca e sviluppo sia l'implementazione sul campo.")]),a("p",{staticClass:"brackets-long-text"},[t._v("Ho investito in formazione concludendo un Master in Gestione dell'Energia per Edifici e Infrastrutture, seguendo corsi di programmazione di BMS presso Schneider Electric e abilitandomi come PES-PAV/PEI. Ho lavorato ancora nel settore, prima per TESI Engineering a Trento e più recentemente per AWS a Milano. Quest'ultima esperienza mi ha consentito di avvicinarmi maggiormente al mondo digitale e di cogliere l'opportunità per un cambio di rotta verso lo sviluppo web.")]),a("p",{staticClass:"brackets"},[t._v("}")])]),a("p",{staticClass:"brackets-extrems"},[t._v("Boolean Careers sullo sviluppo Front-end e Back-end di siti web.")])])]),t._l(t.icons,(function(t,e){return a("v-avatar",{key:e,staticClass:"code-icon elevation-12 mb-12 mx-5",attrs:{size:"90"}},[a("i",{class:t})])})),a("div"),a("v-row",[a("v-col",{staticClass:"mt-100"},[a("v-btn",{staticClass:"align-self-end",attrs:{fab:"",outlined:""},on:{click:function(e){return t.$vuetify.goTo("#portfolio")}}},[a("v-icon",[t._v("mdi-chevron-double-down")])],1)],1)],1)],2),a("div",{staticClass:"py-12"})],1)},R=[],L={data:function(){return{icons:["fab fa-html5","fab fa-css3-alt","fab fa-vuejs","fab fa-js-square","fab fa-sass","fab fa-wordpress","fab fa-laravel","fab fa-php"]}}},W=L,q=a("62ad"),F=a("ce7e"),M=a("6b53"),X=a("0fd9"),Z=Object(u["a"])(W,H,R,!1,null,null,null),G=Z.exports;m()(Z,{VAvatar:S["a"],VBtn:f["a"],VCol:q["a"],VContainer:v["a"],VDivider:F["a"],VIcon:V["a"],VResponsive:M["a"],VRow:X["a"]});var U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"portfolio"}},[a("div",{staticClass:"py-12"}),a("v-container",{staticClass:"text-center"},[a("h2",{staticClass:"display-2 font-weight-bold mb-3 text-uppercase text-center"},[t._v("Portfolio")]),a("v-responsive",{staticClass:"mx-auto mb-12",attrs:{width:"56"}},[a("v-divider",{staticClass:"mb-1"}),a("v-divider")],1),a("v-responsive",{staticClass:"mx-auto title font-weight-light mb-8 align-center",attrs:{"max-width":"1140"}},[a("p",{staticClass:"subtitle"},[t._v("Alcuni dei lavori sviluppati durante il Corso "),a("a",{attrs:{href:"https://www.credential.net/embed/f4a7bd32-021a-4d45-a2f7-5bbc22e787b3",target:"_blank"}},[t._v("Boolean Careers")]),t._v(" 2020/21")])]),a("v-row",t._l(t.articles,(function(e,n){var s=e.src,r=(e.src_h,e.text,e.title),i=e.ex_url;return a("v-col",{key:n,attrs:{cols:"12",md:"4"}},[a("BaseCarousel",{attrs:{items:s}}),a("h3",{staticClass:"font-weight-black mt-6 text-uppercase",domProps:{textContent:t._s(r)}}),a("v-btn",{staticClass:"mb-4 font-weight-black",attrs:{fab:"",color:t.colors.$f_clear,text:"",href:i,target:"_blank"}},[a("i",{staticClass:"fas fa-external-link-alt"})])],1)})),1),a("v-row",[a("v-col",{staticClass:"mt-100"},[a("v-btn",{staticClass:"align-self-end justify-center",attrs:{fab:"",outlined:"",color:t.colors.$f_clear},on:{click:function(e){return t.$vuetify.goTo("#contact")}}},[a("v-icon",[t._v("mdi-chevron-double-down")])],1)],1)],1)],1),a("div",{staticClass:"py-12"})],1)},Y=[],J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slider"},[a("v-carousel",{attrs:{height:"auto","show-arrows":!1,progress:!1,touch:{left:function(){return t.model++},right:function(){return t.model--}}},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.items,(function(t,e){return a("v-carousel-item",{key:e,staticClass:"borderRadious",attrs:{src:t}})})),1)],1)},K=[],tt={props:{items:{type:Array,required:!0}},data:function(){return{model:0}}},et=tt,at=(a("6958"),a("5e66")),nt=a("3e35"),st=Object(u["a"])(et,J,K,!1,null,"abb78b5e",null),rt=st.exports;m()(st,{VCarousel:at["a"],VCarouselItem:nt["a"]});var it={components:{BaseCarousel:rt},data:function(){return{articles:[{src:["./img-boolean/Boolflix.png","./img-boolean/Boolflix-h.png"],title:"Boolflix",ex_url:"https://andreamazza84.github.io/boolflix/"},{src:["./img-boolean/boolzapp.png","./img-boolean/boolzapp-h.png"],title:"Boolzapp",ex_url:"https://andreamazza84.github.io/vue-boolzapp/"},{src:["./img-boolean/hubspot.png","./img-boolean/hubspot-h.png"],title:"HubSpot",ex_url:"https://andreamazza84.github.io/htmlcss-hubspot/"},{src:["./img-boolean/spotify.png","./img-boolean/spotify-h.png"],title:"Spotify",ex_url:"https://andreamazza84.github.io/html-css-spotifyweb/"},{src:["./img-boolean/helbiz.png","./img-boolean/helbiz-h.png"],title:"Helbiz",ex_url:"https://andreamazza84.github.io/html-css-helbiz/"},{src:["./img-boolean/digitalOcean.png","./img-boolean/digitalOcean-h.png"],title:"DigitalOcean",ex_url:"https://andreamazza84.github.io/html-css-digitalocean/"}],icons:["fab fa-html5","fab fa-css3-alt","fab fa-vuejs","fab fa-js-square","fab fa-sass","fab fa-wordpress","fab fa-laravel","fab fa-php"],colors:{$b_primary:"#c4d2ddee",$b_complementary:"#ddcfc4ee",$b_triadic_1:"#d2ddc4ee",$b_triadic_2:"#ddc4d2ee",$b_mild:"#2B3C4A",$b_dark:"#1e1e1e",$b_footer:"#000",$f_clear:"#fdfdfd",$f_dark:"#1e1e1e",$f_mild:"#2B3C4A",$f_semidark:"#333"}}}},ot=it,ct=Object(u["a"])(ot,U,Y,!1,null,null,null),lt=ct.exports;m()(ct,{VBtn:f["a"],VCol:q["a"],VContainer:v["a"],VDivider:F["a"],VIcon:V["a"],VResponsive:M["a"],VRow:X["a"]});var ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"stats"}},[n("v-parallax",{attrs:{height:t.$vuetify.breakpoint.smAndDown?700:600,src:a("0b0f")}})],1)},dt=[],mt=a("8b9c"),ft={},vt=Object(u["a"])(ft,ut,dt,!1,null,null,null),pt=vt.exports;m()(vt,{VParallax:mt["a"]});var gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-sheet",{attrs:{id:"contact",dark:"",tag:"section",tile:""}},[a("div",{staticClass:"py-12"}),a("v-container",{staticClass:"form"},[a("h2",{staticClass:"display-2 font-weight-bold mb-3 text-uppercase text-center"},[t._v("Contatti")]),a("v-responsive",{staticClass:"mx-auto mb-12",attrs:{width:"56"}},[a("v-divider",{staticClass:"mb-1"}),a("v-divider")],1),a("v-theme-provider",{attrs:{dark:""}},[a("BaseContact")],1)],1),a("div",{staticClass:"py-12"})],1)},bt=[],ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{id:"contact-form"},on:{submit:function(e){return e.preventDefault(),t.submit()}}},[a("v-row",[a("v-col",[a("v-text-field",{staticClass:"form-input",attrs:{flat:"",label:"Nome*",solo:"","error-messages":t.nameErrors},on:{input:function(e){return t.$v.message.name.$touch()},blur:function(e){return t.$v.message.name.$touch()}},model:{value:t.message.name,callback:function(e){t.$set(t.message,"name",e)},expression:"message.name"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{staticClass:"form-input",attrs:{flat:"",label:"Email*",solo:"","error-messages":t.emailErrors},on:{input:function(e){return t.$v.message.email.$touch()},blur:function(e){return t.$v.message.email.$touch()}},model:{value:t.message.email,callback:function(e){t.$set(t.message,"email",e)},expression:"message.email"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{staticClass:"form-input",attrs:{flat:"",label:"Oggetto*",solo:"","error-messages":t.objectErrors},on:{input:function(e){return t.$v.message.object.$touch()},blur:function(e){return t.$v.message.object.$touch()}},model:{value:t.message.object,callback:function(e){t.$set(t.message,"object",e)},expression:"message.object"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{staticClass:"form-input",attrs:{flat:"",label:"Scrivi qua*",solo:"","error-messages":t.textErrors},on:{input:function(e){return t.$v.message.text.$touch()},blur:function(e){return t.$v.message.text.$touch()}},model:{value:t.message.text,callback:function(e){t.$set(t.message,"text",e)},expression:"message.text"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-checkbox",{attrs:{"error-messages":t.checkboxErrors,required:""},on:{change:function(e){return t.$v.message.checkbox.$touch()},blur:function(e){return t.$v.message.checkbox.$touch()}},scopedSlots:t._u([{key:"label",fn:function(){return[a("div",[t._v(" Accetto l'informativa sull'utilizzo dei dati | "),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("a",t._g({attrs:{target:"_blank",href:"https://www.iubenda.com/privacy-policy/91506390"},on:{click:function(t){t.stopPropagation()}}},n),[t._v(" Privacy Policy ")])]}}])},[t._v(" Si apre in una nuova finestra. ")])],1)]},proxy:!0}]),model:{value:t.message.checkbox,callback:function(e){t.$set(t.message,"checkbox",e)},expression:"message.checkbox"}})],1),a("v-col",{staticClass:"mx-auto",attrs:{cols:"auto"}},[a("v-btn",{staticClass:"btn-clear",attrs:{"x-large":""},on:{click:function(e){return t.clear()}}},[t._v(" Reset ")])],1),a("v-col",{staticClass:"mx-auto",attrs:{cols:"auto"}},[a("v-btn",{staticClass:"btn-submit",attrs:{type:"submit","x-large":""}},[t._v(" Invia ")])],1),a("BaseSnackbar",{attrs:{name:t.message.name}})],1),a("input",{staticClass:"hidden-input",staticStyle:{display:"none"},attrs:{type:"text",name:"_honey"}}),a("input",{staticClass:"hidden-input",attrs:{type:"hidden",name:"_captcha",value:"false"}})],1)},Ct=[],At=(a("b0c0"),a("1dce")),xt=a.n(At),yt=a("b5ae"),Et=a("bc3a"),wt=a.n(Et),kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-snackbar",{attrs:{elevation:"10"},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[a("v-btn",t._b({attrs:{light:"","x-large":"",color:"green",text:""},on:{click:function(e){return t.snackToggle()}}},"v-btn",n,!1),[t._v(" Chiudi ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s("Ciao "+t.username+"! Grazie per il tuo messaggio")+" ")])},_t=[],It={props:{name:{type:String,required:!0}},computed:{snackbar:{get:function(){return this.$store.state.snackbar},set:function(){return this.$store.state.snackbar}},username:{get:function(){return name},set:function(){return name}}},methods:{snackToggle:function(){this.$store.dispatch("snackToggle")}}},Bt=It,$t=a("2db4"),zt=Object(u["a"])(Bt,kt,_t,!1,null,null,null),Ot=zt.exports;m()(zt,{VBtn:f["a"],VSnackbar:$t["a"]});var jt=a("c1ae"),St={components:{BaseSnackbar:Ot,BasePolicy:jt["default"]},mixins:[At["validationMixin"]],validations:{message:{name:{required:yt["required"],maxLength:Object(yt["maxLength"])(30),minLength:Object(yt["minLength"])(3)},email:{required:yt["required"],email:yt["email"]},object:{required:yt["required"],maxLength:Object(yt["maxLength"])(30),minLength:Object(yt["minLength"])(3)},text:{required:yt["required"],minLength:Object(yt["minLength"])(20)},checkbox:{checked:function(t){return t}}}},data:function(){return{success:!1,submitStatus:"",message:{name:"",email:"",select:null,text:"",object:"",checkbox:!1}}},computed:{nameErrors:function(){var t=[];return this.$v.message.name.$dirty?(!this.$v.message.name.maxLength&&t.push("Lunghezza massima 30 caratteri"),!this.$v.message.name.minLength&&t.push("Lunghezza minima 3 caratteri"),!this.$v.message.name.required&&t.push("Richiesto"),t):t},emailErrors:function(){var t=[];return this.$v.message.email.$dirty?(this.$v.message.email.maxLength&&t.push("Lunghezza massima 30 caratteri"),!this.$v.message.email.email&&t.push("Inserisci un indirizzo email valido"),!this.$v.message.email.required&&t.push("Richiesto"),t):t},objectErrors:function(){var t=[];return this.$v.message.object.$dirty?(!this.$v.message.object.maxLength&&t.push("Lunghezza massima 30 caratteri"),!this.$v.message.object.minLength&&t.push("Lunghezza minima 3 caratteri"),!this.$v.message.object.required&&t.push("Richiesto"),t):t},textErrors:function(){var t=[];return this.$v.message.text.$dirty?(!this.$v.message.text.minLength&&t.push("Lunghezza minima 20 caratteri"),!this.$v.message.text.required&&t.push("Richiesto"),t):t},checkboxErrors:function(){var t=[];return this.$v.message.checkbox.$dirty?(!this.$v.message.checkbox.checked&&t.push("Devi spuntare questa casella per continuare"),t):t}},methods:{checkName:function(){this.$v.message.name.$touch()},submit:function(){var t=this;if(this.$v.$touch(),this.$v.$invalid)this.submitStatus="Submit Status Error - Vuelidate",console.log(this.submitStatus);else{var e=new FormData;for(var a in this.message)e.append(a,this.message[a]);wt()({method:"post",url:"https://formspree.io/f/mjvjoejl",data:e,headers:{"Content-Type":"multipart/form-data"}}).then((function(e){e.data.ok&&(t.$store.dispatch("snackToggle"),console.log("Message sent ",e.data.ok))})).catch((function(t){console.log(t)}))}},clear:function(){this.$v.$reset(),this.message.name="",this.message.email="",this.message.object="",this.message.select=null,this.message.checkbox=!1}}},Vt=St,Pt=(a("c32e"),a("ac7c")),Tt=a("8654"),Nt=a("a844"),Qt=a("3a2f"),Dt=Object(u["a"])(Vt,ht,Ct,!1,null,"59432a86",null),Ht=Dt.exports;m()(Dt,{VBtn:f["a"],VCheckbox:Pt["a"],VCol:q["a"],VRow:X["a"],VTextField:Tt["a"],VTextarea:Nt["a"],VTooltip:Qt["a"]});var Rt={components:{BaseContact:Ht}},Lt=Rt,Wt=a("8dd9"),qt=a("480e"),Ft=Object(u["a"])(Lt,gt,bt,!1,null,null,null),Mt=Ft.exports;m()(Ft,{VContainer:v["a"],VDivider:F["a"],VResponsive:M["a"],VSheet:Wt["a"],VThemeProvider:qt["a"]});var Xt={components:{SectionNavbar:Q,SectionHero:D["a"],SectionAbout:G,SectionPortfolio:lt,SectionStats:pt,SectionContacts:Mt},data:function(){return{colors:{$b_primary:"#c4d2ddee",$b_complementary:"#ddcfc4ee",$b_triadic_1:"#d2ddc4ee",$b_triadic_2:"#ddc4d2ee",$b_mild:"#2B3C4A",$b_dark:"#1e1e1e",$b_footer:"#000",$f_clear:"#fdfdfd",$f_dark:"#1e1e1e",$f_mild:"#2B3C4A",$f_semidark:"#333"}}}},Zt=Xt,Gt=a("f6c4"),Ut=Object(u["a"])(Zt,w,k,!1,null,null,null),Yt=Ut.exports;m()(Ut,{VMain:Gt["a"]}),n["a"].use(E["a"]);var Jt=[{path:"/",name:"Home",component:Yt},{path:"/message-sent",name:"PageThanks",component:function(){return a.e("about").then(a.bind(null,"a358"))}},{path:"*",name:"PageNotFound",component:function(){return a.e("about").then(a.bind(null,"a5b5"))}}],Kt=new E["a"]({mode:"history",base:"/my-portfolio/",routes:Jt}),te=Kt,ee=a("2f62");n["a"].use(ee["a"]);var ae=new ee["a"].Store({state:{drawer:!1,snackbar:!1,baseURL:"http://localhost:8080/personale/"},mutations:{SET_DRAWER:function(t){t.drawer=!t.drawer},SET_SNACKBAR:function(t){t.snackbar=!t.snackbar}},actions:{menuToggle:function(t){var e=t.commit;return e("SET_DRAWER")},snackToggle:function(t){var e=t.commit;return e("SET_SNACKBAR")}},modules:{}}),ne=a("ade3"),se=(a("1f54"),a("5363"),a("f309")),re=a("f107");n["a"].use(se["a"]);var ie=new se["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#007BFF",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},lang:{locales:{it:re["a"]},current:"it"},icons:Object(ne["a"])({iconfont:"fa4"},"iconfont","mdi")}),oe=a("af88"),ce=a("2106"),le=a.n(ce);a("d5e8"),a("12765"),a("7f10");n["a"].use(le.a,wt.a),n["a"].use(oe["a"]),n["a"].use(xt.a),n["a"].config.productionTip=!1,new n["a"]({router:te,store:ae,vuetify:ie,render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"5e05":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"drawer text-center"},[a("v-dialog",{attrs:{attach:"#app","close-on-content-click":!0,fullscreen:"","hide-overlay":"",dark:"",transition:"fade-transition",color:"transparent"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-card",{attrs:{width:"100%",height:"100%",rounded:"0",color:"transparent"}},[a("v-list",{staticClass:"justify-center pt-15",attrs:{width:"100%",height:"100%",color:"#000000cc"}},[a("v-btn",{staticClass:"fa-times-btn",attrs:{absolute:"",top:"",right:"",fab:""},on:{click:function(e){return t.menuToggle()}}},[a("i",{staticClass:"fas fa-times"})]),t._l(t.items,(function(e){return a("v-list-item",{key:e.title,staticClass:"list-item",attrs:{link:""},on:{click:function(a){t.$vuetify.goTo(e.slug),t.menuToggle()}}},[a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)}))],2)],1)],1)],1)},s=[],r={computed:{drawer:{get:function(){return this.$store.state.drawer},set:function(){return this.$store.state.drawer}}},methods:{menuToggle:function(){this.$store.dispatch("menuToggle")}},data:function(){return{items:[{title:"Home",icon:"mdi-view-dashboard",slug:"#hero"},{title:"About",icon:"mdi-forum",slug:"#about-me"},{title:"Portfolio",icon:"mdi-forum",slug:"#portfolio"},{title:"Contatti",icon:"mdi-forum",slug:"#contact"}]}}},i=r,o=(a("a13a"),a("2877")),c=a("6544"),l=a.n(c),u=a("8336"),d=a("b0af"),m=a("169a"),f=a("8860"),v=a("da13"),p=a("5d23"),g=Object(o["a"])(i,n,s,!1,null,null,null);e["a"]=g.exports;l()(g,{VBtn:u["a"],VCard:d["a"],VDialog:m["a"],VList:f["a"],VListItem:v["a"],VListItemContent:p["a"],VListItemTitle:p["b"]})},6958:function(t,e,a){"use strict";a("dd79")},"75ce":function(t,e,a){},"9b85":function(t,e,a){"use strict";var n=a("9f7f"),s=a.n(n);e["default"]=s.a},"9c0c":function(t,e,a){},"9f7f":function(t,e){(function(t,e){var a=function(){var t=e.createElement("script"),a=e.getElementsByTagName("script")[0];t.src="https://cdn.iubenda.com/iubenda.js",a.parentNode.insertBefore(t,a)};t.addEventListener?t.addEventListener("load",a,!1):t.attachEvent?t.attachEvent("onload",a):t.onload=a})(window,document)},a13a:function(t,e,a){"use strict";a("75ce")},b6a8:function(t,e,a){"use strict";a("2e95")},c1ae:function(t,e,a){"use strict";var n=a("043c"),s=a("9b85"),r=a("2877"),i=Object(r["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},c32e:function(t,e,a){"use strict";a("ebb4")},dd79:function(t,e,a){},ebb4:function(t,e,a){}});
//# sourceMappingURL=app.94fc92f2.js.map