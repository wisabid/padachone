(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,a){e.exports=a.p+"static/media/logo-sec.8be94c12.png"},125:function(e,t,a){e.exports=a.p+"static/media/bgmusic.9cee89c2.mp3"},127:function(e,t,a){e.exports=a.p+"static/media/goofy.599f38ab.svg"},128:function(e,t,a){e.exports=a.p+"static/media/boo.0b13e3dc.svg"},129:function(e,t,a){e.exports=a.p+"static/media/cool.c1619cce.svg"},130:function(e,t,a){e.exports=a.p+"static/media/bg-new.d6d84b19.png"},131:function(e){e.exports=[{title:"Select campaign settings",description:"For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more."},{title:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{title:"Create an ad",description:"Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If you run into any problems with your ads, find out how to tell if they're running and how to resolve approval issues."}]},142:function(e,t,a){e.exports=a.p+"static/media/eid.9f6c86dd.gif"},161:function(e,t,a){e.exports=a(236)},166:function(e,t,a){},167:function(e,t,a){},177:function(e,t,a){},230:function(e,t,a){},232:function(e,t,a){},233:function(e,t,a){},236:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),l=(a(166),a(15)),i=a(8),s=(a(167),a(318)),u=a(237),m=a(326),d=a(80),p=a.n(d),g=a(311),f=a(30),b=a(301),h=a(303),y=a(55),E=a(238),v=a(71),O=a.n(v),j=a(54),S=a(118),x=a.n(S),k=a(116),w=a.n(k),C=(a(177),r.a.createContext({tz:"",setTz:"",page:"",setPage:""})),N=Object(u.a)(function(e){var t;return{progress:{margin:e.spacing(2)},secondary:{color:"#4caf50"},grow:{flexGrow:1},root:(t={padding:e.spacing(3,2),borderRadius:0},Object(f.a)(t,"padding",0),Object(f.a)(t,"background","#efefef"),Object(f.a)(t,"transition","display 0.5s ease-in-out"),t)}}),I=function(e){var t=e.startup,a=e.place,o=e.pdate,c=Object(n.useContext)(C).tz,l=N(),s=r.a.useState({checkedA:!0}),u=Object(i.a)(s,2),m=(u[0],u[1]);return r.a.createElement("div",{className:{flexGrow:1}},r.a.createElement(b.a,{position:"fixed",color:"primary"},r.a.createElement(h.a,{style:{minHeight:"45px"}},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:w.a,width:"150",height:"30",alt:"logo",className:"App-logo"})),r.a.createElement("div",{className:l.grow}),r.a.createElement(x.a,{fontSize:"default",className:"settings",onClick:function(){m(function(){Object.keys(localStorage).map(function(e){"padachone:place"!==e&&"padachone:country"!==e&&"padachone:region"!==e&&localStorage.removeItem(e)}),t({country:localStorage.getItem("padachone:country"),region:localStorage.getItem("padachone:region"),place:localStorage.getItem("padachone:place"),finished:!1})})},style:{color:"#fff"}})),r.a.createElement(j.a,{className:l.root},r.a.createElement(E.a,{direction:"up",in:!0,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(y.a,{variant:"caption",color:"textSecondary",style:{padding:"1px 5px",fontStyle:"normal",display:"flex",justifyContent:"space-between",color:"#555555"}},r.a.createElement("span",null,c),r.a.createElement("span",{style:{fontWeight:"normal"}},o))),r.a.createElement(E.a,{direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0,style:{fontStyle:"italic"}},r.a.createElement(y.a,{variant:"caption",color:"textSecondary",style:{padding:"1px 5px",display:"flex",justifyContent:"space-between",fontStyle:"normal",color:"#555555",fontSize:"1rem"}},r.a.createElement("span",null,a?"".concat(a):""),r.a.createElement("span",{style:{padding:"0 0 0 3px",fontWeight:"normal"}},r.a.createElement(O.a,{format:"HH:mm:ss",ticking:!0,timezone:c})))))))},z=a(312),A=a(120),M=a.n(A),P=a(307),T=a(310),B=a(309),F=a(241),D=a(308),J=a(304),L=a(332),R=function(e){var t=e.label,a=void 0===t?"Email Address":t,n=e.email,o=e.handleEmail,c=e.sent,l=(e.loading,e.subscribed),i=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,null,l?"You are already subscribed !":c?"Successfully Subscribed ! Please check your email.":"To subscribe to this website, please enter your email address here. We will send updates\n                                occasionally."),!c&&!l&&r.a.createElement(L.a,{error:i,autoFocus:!0,margin:"dense",id:"name",label:a,type:"email",fullWidth:!0,value:n,onChange:o,autoComplete:"Off"}))},W=a(119),Y=function(e){var t=new Date,a=("0"+t.getDate()).slice(-2),n=("0"+(t.getMonth()+1)).slice(-2),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],o=t.getFullYear();return"mdy"===e?"".concat(n,"/").concat(a,"/").concat(o):"iso"===e?t.toISOString():"".concat(a," ").concat(r," ").concat(o)};function H(e){var t=e.name,a=e.value,n=void 0===a?"":a;if(!n)return localStorage.getItem(t);localStorage.setItem(t,n)}var _="padachone_email";var q=function(e){var t=e.modal,a=e.setModal,o=r.a.useState(!1),c=Object(i.a)(o,2),s=c[0],u=c[1],m=r.a.useState({value:"",sent:!1,button:"Cancel",loading:!1,subscribed:!1,error:!1,errorlabel:"Email Address"}),d=Object(i.a)(m,2),p=d[0],f=d[1];function b(){u(!1),a(!1)}return Object(n.useEffect)(function(){u(t)},[t]),r.a.createElement("div",null,r.a.createElement(P.a,{open:s,onClose:b,"aria-labelledby":"form-dialog-title"},p.loading&&r.a.createElement(F.a,null),r.a.createElement(D.a,{id:"form-dialog-title"},p.sent||p.subscribed?"":"Subscribe"),r.a.createElement(B.a,null,r.a.createElement(R,{label:p.errorlabel,email:p.value,handleEmail:function(e){f(Object(l.a)({},p,{value:e.target.value,sent:!1,error:!1,errorlabel:"Email Address"}))},sent:p.sent,loading:p.loading,subscribed:p.subscribed,error:p.error})),r.a.createElement(T.a,null,!p.loading&&r.a.createElement(g.a,{onClick:b,color:"primary"},p.button),!p.sent&&!p.loading&&!p.subscribed&&r.a.createElement(g.a,{onClick:function(){if(!p.value||!function(e){return/\S+@\S+\.\S+/.test(e)}(p.value))return f(Object(l.a)({},p,{value:"",error:!0}));f(Object(l.a)({},p,{loading:!0})),H({name:_})?f(Object(l.a)({},p,{value:"",button:"OK",subscribed:!0,loading:!1})):function(e){var t={reply_to:"admirer@padachone.com",from_name:"Admirer",to_name:e,message_html:"Thank you for Subscribing to Padachone.com. You are Awesome!"};return W.send("default_service","template_Li3TxnLs",t,"user_L109OnczphkyI5bvHhcSe")}(p.value).then(function(e){console.log(e),f(Object(l.a)({},p,{value:"",sent:!0,button:"OK",loading:!1})),H({name:_,value:p.value})}).catch(function(e){f(Object(l.a)({},p,{value:"",error:!0,errorlabel:"Please try later"}))})},color:"primary"},"Subscribe"))))},G=Object(u.a)(function(e){return{text:{padding:e.spacing(2,2,0)},paper:{paddingBottom:50},list:{marginBottom:e.spacing(2)},subheader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0,background:"#efefef",transition:"display 0.5s ease-in-out"},grow:{flexGrow:1},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"}}}),K=function(e){e.startup;var t=G(),a=Object(n.useState)(!1),o=Object(i.a)(a,2),c=o[0],l=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,{modal:c,setModal:l}),r.a.createElement(b.a,{position:"fixed",color:"primary",className:"".concat(t.appBar," padachone-ftr")},r.a.createElement(z.a,{color:"secondary","aria-label":"Add",className:t.fabButton,title:"Subscribe"},r.a.createElement(M.a,{fontSize:"large",onClick:function(){l(!0)}})),r.a.createElement("div",{className:t.grow}),r.a.createElement(y.a,{variant:"caption",display:"block",gutterBottom:!0,color:"secondary",style:{paddingTop:"10px",fontSize:"10px",color:"#555555"},align:"center"},".")))},U=a(97),V=a.n(U),X=a(240),Z=a(320),$=a(321),Q=a(121),ee=a(51),te=a.n(ee),ae=a(323),ne=a(70),re=a.n(ne),oe=a(313),ce=a(322),le=a(100),ie=a.n(le),se=a(101),ue=a.n(se),me=a(122),de=a.n(me),pe=a(123),ge=a(40),fe=a.n(ge),be=a(63),he=function(e){var t=e.country,a=void 0===t?"Netherlands":t,r=e.place,o=e.region,c=void 0===o?"Noord-Holland":o,l=e.date,s="https://api.aladhan.com/v1/timingsByCity?city=".concat(r||c,"&country=").concat(a,"&method=8&school=0"),u=Object(n.useState)({}),m=Object(i.a)(u,2),d=m[0],p=m[1];function g(){return(g=Object(be.a)(fe.a.mark(function e(){var t,n;return fe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(s,{headers:{Accept:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,Object.keys(localStorage).map(function(e){return e.startsWith("padachone:")&&localStorage.removeItem(e),e}),n&&n.data&&n.data.meta&&(c&&localStorage.setItem("padachone:region",c),a&&localStorage.setItem("padachone:country",a),r&&localStorage.setItem("padachone:place",r),localStorage.setItem("padachone:".concat(l),JSON.stringify(n))),p(n),e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(0),p({error:e.t0.message}),e.abrupt("return",!1);case 16:case"end":return e.stop()}},e,null,[[0,12]])}))).apply(this,arguments)}return Object(n.useEffect)(function(){localStorage.getItem("padachone:".concat(l))?p(JSON.parse(localStorage.getItem("padachone:".concat(l)))):function(){g.apply(this,arguments)}()},[]),[d,p]},ye=function(e){var t=e.lat,a=e.lon,r=Y(),o=new Date,c=o.getMonth()+1,l=o.getFullYear(),s="https://api.aladhan.com/v1/calendar?latitude=".concat(t,"&longitude=").concat(a,"&method=8&month=").concat(c,"&year=").concat(l,"&school=0"),u=Object(n.useState)({}),m=Object(i.a)(u,2),d=m[0],p=m[1];function g(){return(g=Object(be.a)(fe.a.mark(function e(){var t,a,n;return fe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(s,{headers:{Accept:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,n=a.data.filter(function(e){return e.date.readable===r}),p(n),e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),p({error:e.t0.message}),e.abrupt("return",!1);case 15:case"end":return e.stop()}},e,null,[[0,11]])}))).apply(this,arguments)}return Object(n.useEffect)(function(){!function(){g.apply(this,arguments)}()},[]),[d,p]},Ee=function(e){var t=e.lat,a=e.lon,r=Object(n.useState)({}),o=Object(i.a)(r,2),c=o[0],l=o[1],s="https://dev.virtualearth.net/REST/v1/Locations/".concat(t,",").concat(a,"?o=json&key=").concat("ArNqsYDx-rtxpMbR4ddz8SyY4-dv8-JK35KErFW3GIU7_UwgaCVz8Bj4iKy4X-JP");function u(){return(u=Object(be.a)(fe.a.mark(function e(){var t,a,n;return fe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(s,{headers:{Accept:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,n=a.resourceSets[0].resources[0].address.addressLine+", "+a.resourceSets[0].resources[0].address.adminDistrict+", "+a.resourceSets[0].resources[0].address.countryRegion,l({data:n}),e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),l({error:e.t0.message}),e.abrupt("return",!1);case 15:case"end":return e.stop()}},e,null,[[0,11]])}))).apply(this,arguments)}return Object(n.useEffect)(function(){!function(){u.apply(this,arguments)}()},[]),[c,l]},ve=a(314),Oe=a(319),je=a(334),Se=a(98),xe=a.n(Se),ke=a(306),we=a(315),Ce=a(316),Ne=a(317),Ie=a(99),ze=a.n(Ie),Ae=Object(u.a)(function(e){return{root:{display:"flex"},drawer:Object(f.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),menuButton:Object(f.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)}}});function Me(e){var t=e.container,a=e.mobileOpen,n=e.setMobileOpen,o=Ae(),c=Object(oe.a)();var l=function(e){console.log(e),n(!a)},i=r.a.createElement("div",null,r.a.createElement("div",{className:o.toolbar}),r.a.createElement(ve.a,null),r.a.createElement(ke.a,null,["Home","Fine Tune","Travel Times","Nearest Mosque","Map"].map(function(e,t){return r.a.createElement(we.a,{button:!0,key:e,onClick:function(){return l("home")}},r.a.createElement(Ce.a,null,t%2===0?r.a.createElement(xe.a,null):r.a.createElement(ze.a,null)),r.a.createElement(Ne.a,{primary:e}))})),r.a.createElement(ve.a,null),r.a.createElement(ke.a,null,["Settings","Subscribe","Messy Lab"].map(function(e,t){return r.a.createElement(we.a,{button:!0,key:e,onClick:function(){return l("home")}},r.a.createElement(Ce.a,null,t%2===0?r.a.createElement(xe.a,null):r.a.createElement(ze.a,null)),r.a.createElement(Ne.a,{primary:e}))})));return r.a.createElement("div",{className:o.root},r.a.createElement(s.a,null),r.a.createElement("nav",{className:o.drawer,"aria-label":"Mailbox folders"},r.a.createElement(je.a,{smUp:!0,implementation:"css"},r.a.createElement(Oe.a,{container:t,variant:"temporary",anchor:"rtl"===c.direction?"right":"left",open:a,onClose:function(){n(!a)},classes:{paper:o.drawerPaper},ModalProps:{keepMounted:!0}},i)),r.a.createElement(je.a,{xsDown:!0,implementation:"css"},r.a.createElement(Oe.a,{classes:{paper:o.drawerPaper},variant:"permanent",open:!0},i))))}var Pe=Object(pe.autoPlay)(de.a),Te=[{label:"San Francisco \u2013 Oakland Bay Bridge, United States",imgPath:"https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"}],Be=Object(u.a)(function(e){return{root:{flexGrow:1},header:{display:"flex",alignItems:"center",height:50,paddingLeft:e.spacing(4),backgroundColor:e.palette.background.default},img:{height:255,display:"block",maxWidth:400,overflow:"hidden",width:"100%"},card:{minWidth:"100%"},title:{fontSize:14}}}),Fe=function(e){var t=e.lat,a=e.lon,n=ye({lat:t,lon:a}),o=Object(i.a)(n,2),c=o[0],l=(o[1],Be()),s=Object(oe.a)(),u=r.a.useState(0),m=Object(i.a)(u,2),d=m[0],p=m[1],f=Te.length;return c.length&&c[0].timings?r.a.createElement("div",{className:l.root},r.a.createElement(Pe,{axis:"rtl"===s.direction?"x-reverse":"x",index:d,onChangeIndex:function(e){p(e)},enableMouseEvents:!0},Te.map(function(e,t){return r.a.createElement("div",{key:e.label},Math.abs(d-t)<=2?Object.keys(c[0].timings).map(function(e,t){var a=c[0].timings[e].split(" "),n=a[0],o=a[1];return r.a.createElement(Z.a,{className:l.card,key:t},r.a.createElement($.a,null,r.a.createElement(y.a,{className:l.title,color:"textSecondary",gutterBottom:!0},e),r.a.createElement(y.a,{variant:"h3",component:"h2"},r.a.createElement("strong",{style:{color:"#039be5"}},n)),r.a.createElement(y.a,{variant:"body2",component:"p",color:"textSecondary"},o,r.a.createElement("br",null),c[0].date.hijri.month.ar)))}):null)})),r.a.createElement(ce.a,{steps:f,position:"static",variant:"text",activeStep:d,nextButton:r.a.createElement(g.a,{size:"small",onClick:function(){p(function(e){return e+1})},disabled:d===f-1},"Next","rtl"===s.direction?r.a.createElement(ie.a,null):r.a.createElement(ue.a,null)),backButton:r.a.createElement(g.a,{size:"small",onClick:function(){p(function(e){return e-1})},disabled:0===d},"rtl"===s.direction?r.a.createElement(ue.a,null):r.a.createElement(ie.a,null),"Back")})):r.a.createElement("h5",null,"Loading...")},De=a(124),Je=function(e){var t=e.lat,a=e.lon,o=function(){},c=Object(n.useState)([{location:[t,a],option:{color:"blue"},addHandler:{type:"click",callback:o}}]),l=Object(i.a)(c,2),s=l[0],u=(l[1],Object(n.useState)({search:"Ijburg",polygonStyle:{fillColor:"rgba(161,224,255,0.4)",strokeColor:"#a495b2",strokeThickness:2},option:{entityType:"PopulatedPlace"}})),m=Object(i.a)(u,2);m[0],m[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(De.ReactBingmaps,{bingmapKey:"ArNqsYDx-rtxpMbR4ddz8SyY4-dv8-JK35KErFW3GIU7_UwgaCVz8Bj4iKy4X-JP",center:[t,a],zoom:10,pushPins:s}))},Le=function(e){var t=e.lat,a=e.lon,o=Ee({lat:t,lon:a}),c=Object(i.a)(o,2),l=c[0];c[1];console.log(l.data);var s=function(e,t){var a=Object(n.useState)([]),r=Object(i.a)(a,2),o=r[0],c=r[1],l=Ee({lat:e,lon:t}),s=Object(i.a)(l,2),u=s[0],m=(s[1],function(){var e=Object(be.a)(fe.a.mark(function e(){var t,a,n;return fe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.data,e.next=3,fetch("https://www.googleapis.com/customsearch/v1?key=AIzaSyCKmqa7yvpOyK2-XBFLM0ELOjsDmw9jjMM&cx=012395365576153944359:yyj6yr0jgku&q=Muslim mosques near ".concat(t),{headers:{Accept:"application/json"}});case 3:return a=e.sent,e.next=6,a.json();case 6:(n=e.sent).items&&c(n.items);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}());return Object(n.useEffect)(function(){u.hasOwnProperty("data")&&m()},[u]),[o,c]}(t,a),u=Object(i.a)(s,2),m=u[0];u[1];return m.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,"YOU ARE @ - ",l.data," ",l.error?l.error:""),r.a.createElement("ul",null,m.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{target:"_blank",href:e.link},e.title))}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,"YOU ARE @ - ",l.data," ",l.error?l.error:""),r.a.createElement("h4",null,"Loading..."))},Re=a(102),We=a.n(Re),Ye=r.a.memo(function(e){var t=e.bgm;return r.a.createElement(We.a,{autoLoad:!0,loop:!0,url:t,playStatus:We.a.status.PLAYING,playFromPosition:100,volume:10})}),He=a(125),_e=a.n(He),qe=Object(u.a)(function(e){var t;return{progress:{margin:e.spacing(2)},secondary:{color:"#4caf50"},menuButton:Object(f.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},root:(t={padding:e.spacing(3,2),borderRadius:0},Object(f.a)(t,"padding",0),Object(f.a)(t,"background","#efefef"),Object(f.a)(t,"transition","display 0.5s ease-in-out"),t)}}),Ge=Object(Q.geolocated)({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3})(function(e){var t=qe(),a=Ee({lat:"52.31406610552598",lon:"4.946411339519716"}),o=Object(i.a)(a,2),c=o[0];o[1];console.log(c.data);var l=e.timings,s=Object(n.useState)({}),u=Object(i.a)(s,2),m=(u[0],u[1]),d=r.a.useState(!1),p=Object(i.a)(d,2),g=p[0],f=p[1];return Object(n.useEffect)(function(){if(l.hasOwnProperty("Fajr")){var e=Object.keys(l).reduce(function(e,t){return-1!==["Fajr","Dhuhr","Asr","Maghrib","Isha"].indexOf(t)&&(e[t]=l[t]),e},{});m(e)}},[l]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Ye,{bgm:_e.a}),r.a.createElement("h4",{style:{marginTop:"40px"}},"Lab (Alpha Releases)"),r.a.createElement("h5",null,"Drawer"),r.a.createElement(Me,{mobileOpen:g,setMobileOpen:f}),r.a.createElement(ae.a,{color:"inherit","aria-label":"Open drawer",edge:"start",onClick:function(){f(!g)},className:t.menuButton},r.a.createElement(re.a,null)),r.a.createElement("h5",null,"Your TZ : ",te.a.tz.guess()),e.isGeolocationAvailable?e.isGeolocationEnabled?e.coords?r.a.createElement("div",null,r.a.createElement("h5",null,"Travel Times"),r.a.createElement(Fe,{lat:e.coords.latitude,lon:e.coords.longitude}),r.a.createElement("h5",null,"Custom Search"),r.a.createElement(Le,{lat:e.coords.latitude,lon:e.coords.longitude}),r.a.createElement("h5",null,"Mosque Map"),r.a.createElement("div",{style:{width:"100%",height:"90vh"}},r.a.createElement(Je,{lat:e.coords.latitude,lon:e.coords.longitude}))):r.a.createElement("div",null,"Getting the location data\u2026 "):r.a.createElement("div",{style:{marginTop:"30px"}},r.a.createElement("h5",null,'Message from Lab : "Geolocation is not enabled. Please enable location. Please refresh to go back"')):r.a.createElement("div",null,"Your browser does not support Geolocation"))}),Ke=Object(u.a)({card:{minWidth:"100%"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},buttonaction:{justifyContent:"center"}}),Ue=r.a.memo(function(e){var t=e.pdata,a=t.timings,n=t.date;t.meta;console.table(Object.entries(a));var o=Ke(),c=r.a.useState(!1),l=Object(i.a)(c,2),s=l[0],u=l[1],m=function(){u(!0)};return a?s?r.a.createElement(Ge,{timings:a}):r.a.createElement(r.a.Fragment,null,Object.keys(a).map(function(e,t){return r.a.createElement(Z.a,{className:o.card,key:t},r.a.createElement($.a,null,r.a.createElement(y.a,{className:o.title,color:"textSecondary",gutterBottom:!0,style:{fontSize:"17px"}},e,r.a.createElement("span",{onClick:m,className:"arab-month",style:{color:"#fff"}},".")),r.a.createElement(y.a,{variant:"h3",component:"h2"},r.a.createElement("strong",{style:{color:"#039be5"}},a[e])),r.a.createElement(y.a,{variant:"body2",component:"p",color:"textSecondary"},n.hijri.month.ar)))})):null}),Ve=(a(230),a(126)),Xe=a.n(Ve),Ze=a(325),$e=a(324),Qe=(a(232),a(79)),et=a.n(Qe),tt=function(e){var t=e.dt,a=Object(n.useContext)(C).tz;return r.a.createElement(O.a,{date:t,timezone:a,format:"MM/D/YYYY HH:mm",style:{display:"none"},ticking:!0,interval:1e3})},at=a(305),nt=a(127),rt=a.n(nt),ot=a(128),ct=a.n(ot),lt=a(129),it=a.n(lt),st=Object(u.a)(function(e){return{typography:{padding:e.spacing(2)}}}),ut=function(e){var t=e.dismissMsg,a=e.setdismissMsg,n=e.anchorEl,o=e.setAnchorEl,c=(e.timerdisplay,e.setTimerdisplay),l=st();var i=Boolean(n),s=i?"simple-popover":null;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{color:"secondary",size:"small",onClick:function(e){o(e.currentTarget);var t=document.querySelector(".timerComp .MuiSnackbarContent-message div span:nth-child(1)").innerText.split(" "),n=t[1],r=parseInt(t[0]);"minutes"===n||"minute"===n||"seconds"===n||"second"===n?("minutes"===n||"minute"===n)&&r<=5?a(["Not Allowed !",rt.a]):("seconds"===n||"second"===n)&&r<=30?a(["Line up and be ready !",it.a]):("seconds"===n||"second"===n)&&r<=60?a(["Forbidden !",ct.a]):c(!1):c(!1)}},"Dismiss"===t[0]?t[0]:null,"Dismiss"!==t[0]&&r.a.createElement("img",{src:t[1],width:"60",height:"60"})),r.a.createElement(at.a,{id:s,open:i,anchorEl:n,onClose:function(){o(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(y.a,{className:l.typography},t[0])))},mt={backgroundImage:"url(".concat(et.a,")"),height:"250px",backgroundSize:"auto 100%",backgroundRepeat:"no-repeat",width:"100%",backgroundPosition:"center",padding:"50% 0",fontSize:"2rem",fontWeight:"bold",color:"rgb(3, 155, 229)",backgroundColor:"#fff"},dt=function(e){var t=e.anim;e.setAnim;return r.a.createElement("div",null,t[0]&&r.a.createElement("div",{className:"Prayer-time",style:mt},t[1]," Time"))},pt=Object(u.a)(function(e){return{root:{maxWidth:600},snackbar:{margin:e.spacing(1)},typography:{padding:e.spacing(2)}}}),gt=function(e){var t=Object(n.useContext)(C),a=t.tz,o=(t.setTz,Object(n.useState)(Y("iso"))),c=Object(i.a)(o,2),l=c[0],s=c[1],u=te.a.tz.guess(),m=Object(n.useState)({}),d=Object(i.a)(m,2),p=d[0],g=d[1],f=Object(n.useState)([null]),b=Object(i.a)(f,2),h=b[0],y=b[1],E=function(){p.prefix&&p.prefix.replace("Left","Time"),T(!1),setTimeout(I,3e4)},v=Object(n.useState)(["Dismiss"]),O=Object(i.a)(v,2),j=O[0],S=O[1],x=r.a.useState(null),k=Object(i.a)(x,2),w=k[0],N=k[1],I=function(t){y([null,h[1]]),g({}),s(Y("iso"));var a=document.querySelector(".timerComp time");if(a){var n=a.innerHTML,r=n.split(" ")[1],o=Object.entries(e.prayers).reduce(function(e,a){var n=parseInt(a[1].split(":")[0]),o=parseInt(r.split(":")[0]);return parseInt(a[1].split(":")[1]),parseInt(r.split(":")[1]),n>=o?e.push(a):o-n<=1&&"init"===t&&(e.length=0,e.push(a)),e},[]);console.table("now",o),o.length&&(S(["Dismiss"]),T(!0),n=n.replace(r,o[0][1]),g({endDate:n,prefix:"Left for "+o[0][0],cb:E}),y([null,o[0][0]]))}};Object(n.useEffect)(function(){I("init")},[]);var z=pt(),A=Object(n.useState)(!0),M=Object(i.a)(A,2),P=M[0],T=M[1];return Object(n.useEffect)(function(){var e=document.querySelector(".timerComp .MuiSnackbarContent-message div span:nth-child(1)");P||(N(null),e&&" time expired"===e.innerText&&y(function(){return[et.a,h[1]]}),setTimeout(function(){T(!0)},6e4))},[P]),r.a.createElement(r.a.Fragment,null,r.a.createElement($e.a,{in:P},r.a.createElement("div",{className:"timerComp",style:{margin:"0 10px",position:"static",top:"95px",zIndex:"1"}},u===a&&r.a.createElement(Ze.a,{align:"left",className:z.snackbar,message:p.hasOwnProperty("endDate")&&r.a.createElement(Xe.a,{options:p}),action:r.a.createElement(ut,{dismissMsg:j,setdismissMsg:S,anchorEl:w,setAnchorEl:N,timerdisplay:P,setTimerdisplay:T}),style:{backgroundColor:"#1976d2",display:P?"flex":"none"}}),r.a.createElement(tt,{dt:l}))),r.a.createElement($e.a,{in:!P},r.a.createElement(dt,{anim:h,setAnim:y})))},ft=Object(u.a)(function(e){return{progress:{margin:e.spacing(2),color:V.a[500]},secondary:{color:"#4caf50"}}}),bt=function(e){var t=e.prdata,a=t.data.timings,o=Object(n.useState)({}),c=Object(i.a)(o,2),l=c[0],s=c[1];Object(n.useEffect)(function(){if(a.hasOwnProperty("Fajr")){var e=Object.keys(a).reduce(function(e,t){return-1!==["Fajr","Dhuhr","Asr","Maghrib","Isha"].indexOf(t)&&(e[t]=a[t]),e},{});s(e)}},[a]);var u=t.data,d=t.code,p=(t.status,ft());return Object(n.useEffect)(function(){u&&Object.keys(u).length}),r.a.createElement("div",{className:"pdnContainer"},l.hasOwnProperty("Fajr")&&r.a.createElement(gt,{prayers:l}),"object"===typeof t&&200===d&&Object.keys(u).length?r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{in:!0},r.a.createElement("div",null,r.a.createElement(Ue,{pdata:u})))):r.a.createElement(m.a,{className:p.progress,color:"secondary"}))},ht=Object(u.a)(function(e){return{progress:{margin:e.spacing(2),color:p.a[500]},secondary:{color:"#4caf50"}}}),yt=function(e){var t=e.country,a=e.region,o=e.place,c=e.pdate,l=e.startup,s=Object(n.useContext)(C).setTz,u=he({region:a,country:t,place:o,date:c}),d=Object(i.a)(u,1)[0];s((d&&d.data&&d.data.meta?d.data.meta:"Europe/AmsterDAM").timezone);var p=ht();return d&&d.data&&d.data.meta&&200===d.code?r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{startup:l,place:localStorage.getItem("padachone:place"),pdate:d.data.date.readable}),r.a.createElement(bt,{prdata:d}),r.a.createElement(K,{startup:l})):r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,d.data||"Failed to fetch"===d.error?"Site is down for maintenance! Please try after sometime.":d.error),d.data||d.error?r.a.createElement("p",null,"Please ",r.a.createElement(g.a,{color:"primary",onClick:function(){return l({finished:!1})}},"refresh")," to start over!"):r.a.createElement(m.a,{className:p.progress,color:"secondary"}))},Et=a(143),vt=a(330),Ot=a(335),jt=a(327),St=a(333),xt=a(337),kt=a(103),wt=a(130),Ct=a.n(wt),Nt=(a(233),Object(u.a)(function(e){return{root:{width:"100%"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)},resetContainer:{padding:e.spacing(3)},label:{color:"red",fontSize:"2rem"},selfont:{},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},h1:{fontWeight:"bold"},vertical:{color:"#fff"},iconContainer:{fontStyle:"italic"}}}));var It=function(e){e.setupdata;var t=e.country,a=e.region,o=e.place,c=Nt(),s=r.a.useState({activeStep:0,place:o,country:t,region:a}),u=Object(i.a)(s,2),m=u[0],d=u[1],p=m.activeStep,f=m.country,b=m.region,h=(m.seccountry,m.secregion,m.place),E=r.a.useState("rgba(0, 0, 0, 0.54)"),v=Object(i.a)(E,2),O=v[0],S=v[1],x=["Where on earth are you?","Almost there!","Need More Accuracy?"];function k(){0===m.activeStep&&!f||1===m.activeStep&&!b?S("red"):(S("rgba(0, 0, 0, 0.54)"),d(Object(l.a)({},m,{activeStep:m.activeStep+1})))}function w(){S("rgba(0, 0, 0, 0.54)"),d(Object(l.a)({},m,{activeStep:m.activeStep-1}))}return Object(n.useEffect)(function(){f&&d(Object(l.a)({},m,{region:"",place:""}))},[f]),Object(n.useEffect)(function(){d(Object(l.a)({},m,{country:t,region:a}))},[]),Object(n.useEffect)(function(){var t;p===x.length&&(t=Object(l.a)({},m,{finished:!0,travel:!1}),d(function(){return e.finished(t),t}))}),m.travel?r.a.createElement(Ge,null):r.a.createElement("div",{className:c.root},r.a.createElement(y.a,{color:"textPrimary",variant:"h1",component:"h1",align:"left",style:{backgroundImage:"url(".concat(Ct.a,")"),backgroundRepeat:"no-repeat",backgroundPosition:"right top",backgroundSize:"auto 100%",backgroundColor:"#0c39e3",fontWeight:"bold",fontSize:"4rem",padding:"24px",color:"rgba(255, 255, 255, 0.7)",marginBottom:0},gutterBottom:!0},"Know Your Prayer times ",r.a.createElement("br",null)),r.a.createElement(y.a,{color:"textSecondary",align:"left",variant:"body2",component:"p",style:{padding:"0 24px",fontStyle:"italic",fontSize:"0.9rem",marginTop:"10px"},gutterBottom:!0},"An easy to use light weight application for knowing your Fajr, Dhuhr, Asr, Maghrib & Isha timings of the day.",r.a.createElement("br",null),' "Worries end when Salah begins"'),r.a.createElement(Ot.a,{activeStep:p,orientation:"vertical"},x.map(function(e,t){return r.a.createElement(jt.a,{key:e,style:{color:"white",background:"#f5f5f5",borderRadius:"15px",padding:"10px"}},r.a.createElement(St.a,{align:"left"},r.a.createElement("span",{style:{fontSize:"1.5rem",color:"rgb(3, 155, 229)",fontWeight:"bold"}},e)),r.a.createElement(xt.a,{align:"left",style:{border:"none"}},0===p&&r.a.createElement(kt.a,{value:f,onChange:function(e){return t=e,void d(Object(l.a)({},m,{country:t}));var t},className:c.selfont,style:{maxWidth:"100%",fontSize:"1rem",marginBottom:"10px",minHeight:"40px"}}),1===p&&r.a.createElement(kt.b,{country:f,value:b,onChange:function(e){return t=e,void d(Object(l.a)({},m,{region:t}));var t},className:c.selfont,style:{maxWidth:"100%",fontSize:"1rem",minHeight:"30px",marginBottom:"10px"}}),2===p&&r.a.createElement(L.a,{id:"place-name",label:"Place",className:c.textField,value:h,onChange:function(e){var t=e.target.value;t.match(/^[a-z A-Z]*$/)&&d(Object(l.a)({},m,{place:t}))},margin:"normal",variant:"outlined"}),r.a.createElement(y.a,{color:"textSecondary",variant:"body2",component:"p",style:{fontStyle:"italic",fontSize:"1rem",color:O},gutterBottom:!0},function(e){switch(e){case 0:return"This will Set up your timezone preferance";case 1:return"You can always re-configure these settings on click of a button";case 2:return"Key in your Place name for more accurate results.";default:return"Unknown step"}}(t)),r.a.createElement("div",{className:c.actionsContainer},r.a.createElement("div",null,r.a.createElement(g.a,{disabled:0===p,onClick:w,className:c.button},"Back"),r.a.createElement(g.a,{variant:"contained",color:"primary",onClick:k,className:c.button,style:{color:"white"}},p===x.length-1?"Finish":2!==p||h?"Next":"Skip")))))})),p===x.length&&r.a.createElement(j.a,{square:!0,elevation:0,className:c.resetContainer},r.a.createElement(y.a,null,"All steps completed - you're finished"),r.a.createElement(g.a,{onClick:function(){d(Object(l.a)({},m,{activeStep:0}))},className:c.button},"Reset")))},zt=a(131),At=a(132),Mt=a(62),Pt=a(144),Tt=a(133),Bt=a(145),Ft=a(50),Dt=a(331),Jt=function(e){function t(e){var a;return Object(At.a)(this,t),(a=Object(Pt.a)(this,Object(Tt.a)(t).call(this,e))).state={error:null,eventId:null},a}return Object(Bt.a)(t,e),Object(Mt.a)(t,[{key:"componentDidCatch",value:function(e,t){var a=this;this.setState({error:e}),Ft.b(function(n){n.setExtras(t);var r=Ft.a(e);a.setState({eventId:r})})}},{key:"render",value:function(){var e=this;return this.state.error?r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{onClick:function(){return Dt.b({eventId:e.state.eventId})}},"Report feedback"),r.a.createElement("p",null,"We're sorry \u2014 something's gone wrong."),r.a.createElement("p",null,"Our team has been notified, but send us an email to admirer@padachone.com with your suggestions/feedback.")):this.props.children}}]),t}(n.Component),Lt=a(135),Rt=a.n(Lt),Wt=a(136),Yt=a(5),Ht=a(137),_t=a.n(Ht),qt=a(139),Gt=a.n(qt),Kt=a(140),Ut=a.n(Kt),Vt=a(141),Xt=a.n(Vt),Zt=a(336),$t=a(138),Qt=a.n($t),ea={success:_t.a,warning:Qt.a,error:Gt.a,info:Ut.a},ta=Object(u.a)(function(e){return{info:{},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}});function aa(e){var t=ta(),a=e.className,n=e.message,o=e.onClose,c=e.variant,l=Object(Wt.a)(e,["className","message","onClose","variant"]),i=ea[c];return r.a.createElement(Ze.a,Object.assign({className:Object(Yt.a)(t[c],a),"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:t.message},r.a.createElement(i,{className:Object(Yt.a)(t.icon,t.iconVariant)}),n),action:[r.a.createElement(ae.a,{key:"close","aria-label":"Close",color:"inherit",onClick:o},r.a.createElement(Xt.a,{className:t.icon}))]},l))}var na=Object(u.a)(function(e){return{margin:{margin:e.spacing(1)}}});var ra=function(e){var t=e.msg,a=(na(),r.a.useState(!0)),n=Object(i.a)(a,2),o=n[0],c=n[1];function l(e,t){"clickaway"!==t&&c(!1)}return r.a.createElement("div",{className:"admirer-msg"},r.a.createElement(Zt.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:o,autoHideDuration:1e4,onClose:l},r.a.createElement(aa,{onClose:l,variant:"info",message:t})))},oa=a(142),ca={backgroundImage:"url(".concat(a.n(oa).a,")"),height:"250px",backgroundSize:"auto 100%",backgroundRepeat:"no-repeat",width:"100%",backgroundPosition:"center",padding:"50% 0",fontSize:"2rem",fontWeight:"bold",color:"transparent"},la=function(e){var t=e.display,a=e.setdisplay;return Object(n.useEffect)(function(){var e=te.a.tz.guess();"03 Jun 2019"===Y()&&"Europe/Amsterdam"===e||"04 Jun 2019"===Y()&&"Europe/Amsterdam"===e||"04 Jun 2019"===Y()&&"Europe/London"===e||"03 Jun 2019"===Y()&&"Europe/London"===e||"04 Jun 2019"===Y()&&"Asia/Dubai"===e||"03 Jun 2019"===Y()&&"Asia/Dubai"===e||"04 Jun 2019"===Y()&&"Asia/Riyadh"===e||"03 Jun 2019"===Y()&&"Asia/Riyadh"===e||"03 Jun 2019"===Y()&&"Asia/Jerusalem"===e||"04 Jun 2019"===Y()&&"Asia/Jerusalem"===e||"05 Jun 2019"===Y()?(console.log("Amsterdam & Indian fellow bros"),setTimeout(function(){a(!1)},5e3)):a(!1)},[]),r.a.createElement("div",null,t&&r.a.createElement("div",{className:"Prayer-time",style:ca},"."))},ia=Object(Et.a)({palette:{primary:p.a,secondary:{main:"#fff"},text:{}},typography:{}});var sa=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)("Setup"),u=Object(i.a)(c,2),m=u[0],d=u[1],p=Object(n.useState)(window.pageYOffset),g=Object(i.a)(p,2),f=g[0],b=g[1],h=Object(n.useState)(!0),y=Object(i.a)(h,2),E=y[0],v=y[1],O=function(){var e=window.pageYOffset;f>=e?null!==document.querySelector(".padachone-ftr")&&(document.querySelector(".padachone-ftr").style.visibility="visible"):null!==document.querySelector(".padachone-ftr")&&(document.querySelector(".padachone-ftr").style.visibility="hidden"),b(e)};Object(n.useEffect)(function(){return window.addEventListener("scroll",O),function(){window.removeEventListener("scroll",O)}},[]);var j=Object(n.useState)({finished:!1,pdtodaysDate:Y().split(" ").join(""),place:localStorage.getItem("padachone:place"),country:localStorage.getItem("padachone:country"),region:localStorage.getItem("padachone:region")}),S=Object(i.a)(j,2),x=S[0],k=S[1],w=x.finished,N=x.country,I=x.region,z=x.pdtodaysDate,A=(x.prayerdata,x.place),M=function(e){var t=e.country,a=e.region,n=e.finished,r=e.place;k(Object(l.a)({},x,{finished:n,country:t,region:a,place:r})),d(n?"Home":"Setup")},P=Object(n.useState)([!1,""]),T=Object(i.a)(P,2),B=T[0],F=T[1];return Object(n.useEffect)(function(){if(localStorage.removeItem("padachone_msg"),localStorage.removeItem("padachone_msg1"),localStorage.removeItem("padachone_msg2"),localStorage.removeItem("padachone_msg3"),!localStorage.getItem("padachone_msg4")){var e="Email Subscription option is available now ! Check homepage footer.";F(function(){return localStorage.setItem("padachone_msg4",e),[!0,e]})}Object.keys(localStorage).filter(function(e){return e.startsWith("padachone:")&&"padachone:region"!==e&&"padachone:country"!==e&&"padachone:place"!==e}).length&&(k(Object(l.a)({},x,{finished:!0})),d("Home"))},[]),r.a.createElement(vt.a,{theme:ia},r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null),r.a.createElement(C.Provider,{value:{tz:a,setTz:o,page:m,setPage:d}},r.a.createElement(Jt,null,r.a.createElement(Rt.a,{location:"bottom",style:{background:"#29b6f6",marginBottom:"30px"},buttonStyle:{borderRadius:"10px"}},"This website uses cookies to enhance the user experience."),r.a.createElement($e.a,{in:!0},r.a.createElement(la,{display:E,setdisplay:v})),B[0]&&r.a.createElement(ra,{msg:B[1]}),!w&&"Setup"===m&&r.a.createElement(It,{setupdata:zt,finished:function(e){return M(e)},country:N,region:I,place:A}),w&&"Home"===m&&r.a.createElement(yt,{country:N,region:I,pdate:z,place:A,startup:function(e){return M(e)}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Dt.a({dsn:"https://bc34e53e67594e09803e8dbbe9e4df5b@sentry.io/1457299"}),c.a.render(r.a.createElement(sa,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},79:function(e,t,a){e.exports=a.p+"static/media/Prayer-time.dd3c6541.jpg"}},[[161,1,2]]]);
//# sourceMappingURL=main.73cb0b46.chunk.js.map