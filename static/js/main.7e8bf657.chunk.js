(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){e.exports=a.p+"static/media/logo-sec.8be94c12.png"},112:function(e,t,a){e.exports=a.p+"static/media/bg-new.d6d84b19.png"},113:function(e){e.exports=[{title:"Select campaign settings",description:"For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more."},{title:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{title:"Create an ad",description:"Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If you run into any problems with your ads, find out how to tell if they're running and how to resolve approval issues."}]},141:function(e,t,a){e.exports=a(216)},146:function(e,t,a){},147:function(e,t,a){},158:function(e,t,a){},210:function(e,t,a){},213:function(e,t,a){},216:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),l=(a(146),a(17)),i=a(10),s=(a(147),a(297)),u=a(217),m=a(290),d=a(79),p=a.n(d),g=a(285),f=a(42),h=a(276),b=a(277),y=a(64),E=a(278),v=a(71),j=a.n(v),O=a(96),S=a(92),w=a.n(S),x=a(105),k=a.n(x),C=(a(158),Object(u.a)(function(e){var t;return{progress:{margin:e.spacing(2)},secondary:{color:"#4caf50"},grow:{flexGrow:1},root:(t={padding:e.spacing(3,2),borderRadius:0},Object(f.a)(t,"padding",0),Object(f.a)(t,"background","#efefef"),Object(f.a)(t,"transition","display 0.5s ease-in-out"),t)}})),N=function(e){var t=e.timezone,a=e.startup,n=e.place,o=e.pdate,c=C(),l=r.a.useState({checkedA:!0}),s=Object(i.a)(l,2),u=(s[0],s[1]);return r.a.createElement("div",{className:{flexGrow:1}},r.a.createElement(h.a,{position:"fixed",color:"primary"},r.a.createElement(b.a,{style:{minHeight:"45px"}},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:k.a,width:"150",height:"30",alt:"logo",className:"App-logo"})),r.a.createElement("div",{className:c.grow}),r.a.createElement(w.a,{fontSize:"default",className:"settings",onClick:function(){u(function(){Object.keys(localStorage).map(function(e){"padachone:place"!==e&&"padachone:country"!==e&&"padachone:region"!==e&&localStorage.removeItem(e)}),a({country:localStorage.getItem("padachone:country"),region:localStorage.getItem("padachone:region"),place:localStorage.getItem("padachone:place"),finished:!1})})},style:{color:"#fff"}})),r.a.createElement(O.a,{className:c.root},r.a.createElement(E.a,{direction:"up",in:!0,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(y.a,{variant:"caption",color:"textSecondary",style:{padding:"1px 5px",fontStyle:"normal",display:"flex",justifyContent:"space-between",color:"#555555"}},r.a.createElement("span",null,t),r.a.createElement("span",{style:{fontWeight:"normal"}},o))),r.a.createElement(E.a,{direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0,style:{fontStyle:"italic"}},r.a.createElement(y.a,{variant:"caption",color:"textSecondary",style:{padding:"1px 5px",display:"flex",justifyContent:"space-between",fontStyle:"normal",color:"#555555",fontSize:"1rem"}},r.a.createElement("span",null,n?"".concat(n):""),r.a.createElement("span",{style:{padding:"0 0 0 3px",fontWeight:"normal"}},r.a.createElement(j.a,{format:"HH:mm:ss",ticking:!0,timezone:t})))))))},I=Object(u.a)(function(e){return{text:{padding:e.spacing(2,2,0)},paper:{paddingBottom:50},list:{marginBottom:e.spacing(2)},subheader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0,background:"#efefef",transition:"display 0.5s ease-in-out"},grow:{flexGrow:1},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"}}}),z=function(e){e.startup;var t=I();return r.a.createElement(h.a,{position:"fixed",color:"primary",className:"".concat(t.appBar," padachone-ftr")},r.a.createElement("div",{className:t.grow}),r.a.createElement(y.a,{variant:"caption",display:"block",gutterBottom:!0,color:"secondary",style:{paddingTop:"10px",fontSize:"10px",color:"#555555"},align:"center"},"Copyright \xa9 2019 WISMIM."))},B=a(70),A=a.n(B),M=a(289),F=a(287),D=a(288),W=(a(165),a(107)),P=a(286),T=a(305),Y=a(93),H=a.n(Y),L=a(94),q=a.n(L),R=a(108),G=a.n(R),J=a(109),K=a(45),U=a.n(K),V=a(61),_=function(e){var t=new Date,a=("0"+t.getDate()).slice(-2),n=("0"+(t.getMonth()+1)).slice(-2),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],o=t.getFullYear();return"mdy"===e?"".concat(n,"/").concat(a,"/").concat(o):"iso"===e?t.toISOString():"".concat(a," ").concat(r," ").concat(o)};var X=function(e){var t=e.country,a=void 0===t?"Netherlands":t,r=e.place,o=e.region,c=void 0===o?"Noord-Holland":o,l=e.date,s="https://api.aladhan.com/v1/timingsByCity?city=".concat(r||c,"&country=").concat(a,"&method=8"),u=Object(n.useState)({}),m=Object(i.a)(u,2),d=m[0],p=m[1];function g(){return(g=Object(V.a)(U.a.mark(function e(){var t,n;return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(s,{headers:{Accept:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,Object.keys(localStorage).map(function(e){e.startsWith("padachone:")&&localStorage.removeItem(e)}),n&&n.data&&n.data.meta&&(c&&localStorage.setItem("padachone:region",c),a&&localStorage.setItem("padachone:country",a),r&&localStorage.setItem("padachone:place",r),localStorage.setItem("padachone:".concat(l),JSON.stringify(n))),p(n),e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(0),p({error:e.t0.message}),e.abrupt("return",!1);case 16:case"end":return e.stop()}},e,null,[[0,12]])}))).apply(this,arguments)}return Object(n.useEffect)(function(){localStorage.getItem("padachone:".concat(l))?p(JSON.parse(localStorage.getItem("padachone:".concat(l)))):function(){g.apply(this,arguments)}()},[]),[d,p]},$=function(e){var t=e.lat,a=e.lon,r=_(),o=new Date,c=o.getMonth()+1,l=o.getFullYear(),s="https://api.aladhan.com/v1/calendar?latitude=".concat(t,"&longitude=").concat(a,"&method=2&month=").concat(c,"&year=").concat(l),u=Object(n.useState)({}),m=Object(i.a)(u,2),d=m[0],p=m[1];function g(){return(g=Object(V.a)(U.a.mark(function e(){var t,a,n;return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(s,{headers:{Accept:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,n=a.data.filter(function(e){return e.date.readable===r}),p(n),e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),p({error:e.t0.message}),e.abrupt("return",!1);case 15:case"end":return e.stop()}},e,null,[[0,11]])}))).apply(this,arguments)}return Object(n.useEffect)(function(){!function(){g.apply(this,arguments)}()},[]),[d,p]};a(301),a(279),a(284),a(280),a(282),a(283),a(62),a(63),Object(u.a)({list:{width:250},fullList:{width:"auto"}});var Q=Object(J.autoPlay)(G.a),Z=[{label:"San Francisco \u2013 Oakland Bay Bridge, United States",imgPath:"https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"}],ee=Object(u.a)(function(e){return{root:{flexGrow:1},header:{display:"flex",alignItems:"center",height:50,paddingLeft:e.spacing(4),backgroundColor:e.palette.background.default},img:{height:255,display:"block",maxWidth:400,overflow:"hidden",width:"100%"},card:{minWidth:"100%"},title:{fontSize:14}}}),te=function(e){var t=e.lat,a=e.lon,n=$({lat:t,lon:a}),o=Object(i.a)(n,2),c=o[0],l=(o[1],ee()),s=Object(P.a)(),u=r.a.useState(0),m=Object(i.a)(u,2),d=m[0],p=m[1],f=Z.length;return c.length&&c[0].timings?r.a.createElement("div",{className:l.root},r.a.createElement(Q,{axis:"rtl"===s.direction?"x-reverse":"x",index:d,onChangeIndex:function(e){p(e)},enableMouseEvents:!0},Z.map(function(e,t){return r.a.createElement("div",{key:e.label},Math.abs(d-t)<=2?Object.keys(c[0].timings).map(function(e,t){var a=c[0].timings[e].split(" "),n=a[0],o=a[1];return r.a.createElement(F.a,{className:l.card,key:t},r.a.createElement(D.a,null,r.a.createElement(y.a,{className:l.title,color:"textSecondary",gutterBottom:!0},e),r.a.createElement(y.a,{variant:"h3",component:"h2"},r.a.createElement("strong",{style:{color:"#039be5"}},n)),r.a.createElement(y.a,{variant:"body2",component:"p",color:"textSecondary"},o,r.a.createElement("br",null),c[0].date.hijri.month.ar)))}):null)})),r.a.createElement(T.a,{steps:f,position:"static",variant:"text",activeStep:d,nextButton:r.a.createElement(g.a,{size:"small",onClick:function(){p(function(e){return e+1})},disabled:d===f-1},"Next","rtl"===s.direction?r.a.createElement(H.a,null):r.a.createElement(q.a,null)),backButton:r.a.createElement(g.a,{size:"small",onClick:function(){p(function(e){return e-1})},disabled:0===d},"rtl"===s.direction?r.a.createElement(q.a,null):r.a.createElement(H.a,null),"Back")})):r.a.createElement("h5",null,"Loading...")},ae=a(110),ne=function(e){var t=e.lat,a=e.lon,o=function(){},c=Object(n.useState)([{location:[t,a],option:{color:"blue"},addHandler:{type:"click",callback:o}}]),l=Object(i.a)(c,2),s=l[0],u=(l[1],Object(n.useState)({search:"Ijburg",polygonStyle:{fillColor:"rgba(161,224,255,0.4)",strokeColor:"#a495b2",strokeThickness:2},option:{entityType:"PopulatedPlace"}})),m=Object(i.a)(u,2);m[0],m[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae.ReactBingmaps,{bingmapKey:"ArNqsYDx-rtxpMbR4ddz8SyY4-dv8-JK35KErFW3GIU7_UwgaCVz8Bj4iKy4X-JP",center:[t,a],zoom:10,pushPins:s}))},re=function(e){e.lat,e.lon;var t=function(e,t){var a=Object(n.useState)([]),r=Object(i.a)(a,2),o=r[0],c=r[1],l=function(){var e=Object(V.a)(U.a.mark(function e(){var t,a;return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/customsearch/v1?key=AIzaSyCKmqa7yvpOyK2-XBFLM0ELOjsDmw9jjMM&cx=012395365576153944359:yyj6yr0jgku&q=mosques near me",{headers:{Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:(a=e.sent).items&&c(a.items);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){l()},[]),[o,c]}(),a=Object(i.a)(t,2),o=a[0];a[1];return o.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,o.map(function(e){return r.a.createElement("li",null,e.title)}))):r.a.createElement("h4",null,"Loading...")},oe=a(111),ce=a.n(oe),le=function(){console.log("expired callback")},ie=function(e){var t=Object(n.useState)({}),a=Object(i.a)(t,2),o=a[0],c=a[1];return Object(n.useEffect)(function(){var t=document.querySelector(".timerComp time").innerHTML,a=t.split(" ")[1],n=Object.entries(e.prayers).reduce(function(e,t){return parseInt(t[1].split(":")[0])>=parseInt(a.split(":")[0])&&e.push(t),e},[]);n.length&&(t=t.replace(a,n[0][1]),c({endDate:t,prefix:"Left for "+n[0][0],cb:le}))},[]),r.a.createElement("div",{className:"timerComp"},o.hasOwnProperty("endDate")&&r.a.createElement(ce.a,{options:o}),r.a.createElement(j.a,{timezone:e.timezone,format:"MM/D/YYYY HH:mm",style:{display:"none"}}))},se=Object(W.geolocated)({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3})(function(e){var t=e.timings,a=Object(n.useState)({}),o=Object(i.a)(a,2),c=o[0],l=o[1];return Object(n.useEffect)(function(){if(t.hasOwnProperty("Fajr")){var e=Object.keys(t).reduce(function(e,a){return-1!==["Fajr","Dhuhr","Asr","Maghrib","Isha"].indexOf(a)&&(e[a]=t[a]),e},{});l(e)}},[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{style:{marginTop:"40px"}},"Lab (Alpha Releases)"),r.a.createElement("h5",null,"Time left"),c.hasOwnProperty("Fajr")&&r.a.createElement(ie,{timezone:e.timezone,prayers:c}),e.isGeolocationAvailable?e.isGeolocationEnabled?e.coords?r.a.createElement("div",null,r.a.createElement("h5",null,"Travel Times"),r.a.createElement(te,{lat:e.coords.latitude,lon:e.coords.longitude}),r.a.createElement("h5",null,"Custom Search"),r.a.createElement(re,{lat:e.coords.latitude,lon:e.coords.longitude}),r.a.createElement("h5",null,"Mosque Map"),r.a.createElement("div",{style:{width:"100%",height:"90vh"}},r.a.createElement(ne,{lat:e.coords.latitude,lon:e.coords.longitude}))):r.a.createElement("div",null,"Getting the location data\u2026 "):r.a.createElement("div",{style:{marginTop:"30px"}},r.a.createElement("h5",null,'Message from Lab : "Geolocation is not enabled. Please enable location. Please refresh to go back"')):r.a.createElement("div",null,"Your browser does not support Geolocation"))}),ue=Object(u.a)({card:{minWidth:"100%"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},buttonaction:{justifyContent:"center"}}),me=function(e){var t=e.pdata,a=t.timings,n=t.date;t.meta;console.table(Object.entries(a));var o=ue(),c=r.a.useState(!1),l=Object(i.a)(c,2),s=l[0],u=l[1],m=function(){u(!0)};return a?s?r.a.createElement(se,{timings:a}):r.a.createElement(r.a.Fragment,null,Object.keys(a).map(function(e,t){return r.a.createElement(F.a,{className:o.card,key:t},r.a.createElement(D.a,null,r.a.createElement(y.a,{className:o.title,color:"textSecondary",gutterBottom:!0,style:{fontSize:"17px"}},e,r.a.createElement("span",{onClick:m,className:"arab-month",style:{color:"#fff"}},".")),r.a.createElement(y.a,{variant:"h3",component:"h2"},r.a.createElement("strong",{style:{color:"#039be5"}},a[e])),r.a.createElement(y.a,{variant:"body2",component:"p",color:"textSecondary"},n.hijri.month.ar)))})):null},de=(a(210),Object(u.a)(function(e){return{progress:{margin:e.spacing(2),color:A.a[500]},secondary:{color:"#4caf50"}}})),pe=function(e){var t=e.prdata,a=t.data,o=t.code,c=(t.status,de()),l=new Date;("0"+l.getDate()).slice(-2),l.getMonth(),l.getFullYear();return Object(n.useEffect)(function(){a&&Object.keys(a).length}),r.a.createElement("div",{className:"pdnContainer"},"object"===typeof t&&200===o&&Object.keys(a).length?r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{in:!0},r.a.createElement("div",null,r.a.createElement(me,{pdata:a,timezone:e.timezone})))):r.a.createElement(m.a,{className:c.progress,color:"secondary"}))},ge=(a(211),Object(u.a)(function(e){return{progress:{margin:e.spacing(2),color:p.a[500]},secondary:{color:"#4caf50"}}})),fe=function(e){var t=e.country,a=e.region,n=e.place,o=e.pdate,c=e.startup,l=X({region:a,country:t,place:n,date:o}),s=Object(i.a)(l,2),u=s[0],d=(s[1],(u&&u.data&&u.data.meta?u.data.meta:"Europe/AmsterDAM").timezone),p=ge();return u&&u.data&&u.data.meta&&200===u.code?r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{timezone:d,startup:c,place:localStorage.getItem("padachone:place"),pdate:u.data.date.readable}),r.a.createElement(pe,{prdata:u,timezone:d}),r.a.createElement(z,{startup:c})):r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,u.data||u.error),u.data||u.error?r.a.createElement("p",null,"Please ",r.a.createElement(g.a,{color:"primary",onClick:function(){return c({finished:!1})}},"refresh")," to start over!"):r.a.createElement(m.a,{className:p.progress,color:"secondary"}))},he=a(124),be=a(296),ye=a(57),Ee=a(304),ve=a(291),je=a(302),Oe=a(303),Se=a(299),we=a(112),xe=a.n(we),ke=(a(213),Object(u.a)(function(e){return{root:{width:"100%"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)},resetContainer:{padding:e.spacing(3)},label:{color:"red",fontSize:"2rem"},selfont:{},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},h1:{fontWeight:"bold"},vertical:{color:"#fff"},iconContainer:{fontStyle:"italic"}}}));var Ce=function(e){e.setupdata;var t=e.country,a=e.region,o=e.place,c=ke(),s=r.a.useState({activeStep:0,place:o,country:t,region:a}),u=Object(i.a)(s,2),m=u[0],d=u[1],p=m.activeStep,f=m.country,h=m.region,b=(m.seccountry,m.secregion,m.place),E=r.a.useState("rgba(0, 0, 0, 0.54)"),v=Object(i.a)(E,2),j=v[0],S=v[1],w=["Where on earth are you?","Almost there!","Need More Accuracy?"];function x(){0===m.activeStep&&!f||1===m.activeStep&&!h?S("red"):(S("rgba(0, 0, 0, 0.54)"),d(Object(l.a)({},m,{activeStep:m.activeStep+1})))}function k(){S("rgba(0, 0, 0, 0.54)"),d(Object(l.a)({},m,{activeStep:m.activeStep-1}))}return Object(n.useEffect)(function(){f&&d(Object(l.a)({},m,{region:"",place:""}))},[f]),Object(n.useEffect)(function(){d(Object(l.a)({},m,{country:t,region:a}))},[]),Object(n.useEffect)(function(){var t;p===w.length&&(t=Object(l.a)({},m,{finished:!0,travel:!1}),d(function(){return e.finished(t),t}))}),m.travel?r.a.createElement(se,null):r.a.createElement("div",{className:c.root},r.a.createElement(y.a,{color:"textPrimary",variant:"h1",component:"h1",align:"left",style:{backgroundImage:"url(".concat(xe.a,")"),backgroundRepeat:"no-repeat",backgroundPosition:"right top",backgroundSize:"auto 100%",backgroundColor:"#0c39e3",fontWeight:"bold",fontSize:"4rem",padding:"24px",color:"rgba(255, 255, 255, 0.7)",marginBottom:0},gutterBottom:!0},"Know Your Prayer times ",r.a.createElement("br",null)),r.a.createElement(y.a,{color:"textSecondary",align:"left",variant:"body2",component:"p",style:{padding:"0 24px",fontStyle:"italic",fontSize:"0.9rem",marginTop:"10px"},gutterBottom:!0},"An easy to use light weight application for knowing your Fajr, Dhuhr, Asr, Maghrib & Isha timings of the day.",r.a.createElement("br",null),' "Worries end when Salah begins"'),r.a.createElement(Ee.a,{activeStep:p,orientation:"vertical"},w.map(function(e,t){return r.a.createElement(ve.a,{key:e,style:{color:"white",background:"#f5f5f5",borderRadius:"15px",padding:"10px"}},r.a.createElement(je.a,{align:"left"},r.a.createElement("span",{style:{fontSize:"1.5rem",color:"rgb(3, 155, 229)",fontWeight:"bold"}},e)),r.a.createElement(Oe.a,{align:"left",style:{border:"none"}},0===p&&r.a.createElement(ye.a,{value:f,onChange:function(e){return t=e,void d(Object(l.a)({},m,{country:t}));var t},className:c.selfont,style:{maxWidth:"100%",fontSize:"1rem",marginBottom:"10px",minHeight:"40px"}}),1===p&&r.a.createElement(ye.b,{country:f,value:h,onChange:function(e){return t=e,void d(Object(l.a)({},m,{region:t}));var t},className:c.selfont,style:{maxWidth:"100%",fontSize:"1rem",minHeight:"30px",marginBottom:"10px"}}),2===p&&r.a.createElement(Se.a,{id:"place-name",label:"Place",className:c.textField,value:b,onChange:function(e){var t=e.target.value;t.match(/^[a-z A-Z]*$/)&&d(Object(l.a)({},m,{place:t}))},margin:"normal",variant:"outlined"}),r.a.createElement(y.a,{color:"textSecondary",variant:"body2",component:"p",style:{fontStyle:"italic",fontSize:"1rem",color:j},gutterBottom:!0},function(e){switch(e){case 0:return"This will Set up your timezone preferance";case 1:return"You can always re-configure these settings on click of a button";case 2:return"Key in your Place name for more accurate results.";default:return"Unknown step"}}(t)),r.a.createElement("div",{className:c.actionsContainer},r.a.createElement("div",null,r.a.createElement(g.a,{disabled:0===p,onClick:k,className:c.button},"Back"),r.a.createElement(g.a,{variant:"contained",color:"primary",onClick:x,className:c.button,style:{color:"white"}},p===w.length-1?"Finish":2!==p||b?"Next":"Skip")))))})),p===w.length&&r.a.createElement(O.a,{square:!0,elevation:0,className:c.resetContainer},r.a.createElement(y.a,null,"All steps completed - you're finished"),r.a.createElement(g.a,{onClick:function(){d(Object(l.a)({},m,{activeStep:0}))},className:c.button},"Reset")))},Ne=a(113),Ie=a(114),ze=a(56),Be=a(125),Ae=a(115),Me=a(126),Fe=a(47),De=a(298),We=function(e){function t(e){var a;return Object(Ie.a)(this,t),(a=Object(Be.a)(this,Object(Ae.a)(t).call(this,e))).state={error:null,eventId:null},a}return Object(Me.a)(t,e),Object(ze.a)(t,[{key:"componentDidCatch",value:function(e,t){var a=this;this.setState({error:e}),Fe.b(function(n){n.setExtras(t);var r=Fe.a(e);a.setState({eventId:r})})}},{key:"render",value:function(){var e=this;return this.state.error?r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{onClick:function(){return De.b({eventId:e.state.eventId})}},"Report feedback"),r.a.createElement("p",null,"We're sorry \u2014 something's gone wrong."),r.a.createElement("p",null,"Our team has been notified, but send us an email to admirer@padachone.com with your suggestions/feedback.")):this.props.children}}]),t}(n.Component),Pe=a(117),Te=a.n(Pe),Ye=a(118),He=a(4),Le=a(119),qe=a.n(Le),Re=a(121),Ge=a.n(Re),Je=a(122),Ke=a.n(Je),Ue=a(123),Ve=a.n(Ue),_e=a(295),Xe=a(306),$e=a(294),Qe=a(120),Ze=a.n(Qe),et={success:qe.a,warning:Ze.a,error:Ge.a,info:Ke.a},tt=Object(u.a)(function(e){return{info:{},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}});function at(e){var t=tt(),a=e.className,n=e.message,o=e.onClose,c=e.variant,l=Object(Ye.a)(e,["className","message","onClose","variant"]),i=et[c];return r.a.createElement($e.a,Object.assign({className:Object(He.a)(t[c],a),"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:t.message},r.a.createElement(i,{className:Object(He.a)(t.icon,t.iconVariant)}),n),action:[r.a.createElement(_e.a,{key:"close","aria-label":"Close",color:"inherit",onClick:o},r.a.createElement(Ve.a,{className:t.icon}))]},l))}var nt=Object(u.a)(function(e){return{margin:{margin:e.spacing(1)}}});var rt=function(e){var t=e.msg,a=(nt(),r.a.useState(!0)),n=Object(i.a)(a,2),o=n[0],c=n[1];function l(e,t){"clickaway"!==t&&c(!1)}return r.a.createElement("div",null,r.a.createElement(Xe.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:o,autoHideDuration:1e4,onClose:l},r.a.createElement(at,{onClose:l,variant:"info",message:t})))},ot=Object(he.a)({palette:{primary:p.a,secondary:{main:"#fff"},text:{}},typography:{}});var ct=function(){var e=Object(n.useState)(window.pageYOffset),t=Object(i.a)(e,2),a=t[0],o=t[1],c=function(){var e=window.pageYOffset;a>=e?null!==document.querySelector(".padachone-ftr")&&(document.querySelector(".padachone-ftr").style.visibility="visible"):null!==document.querySelector(".padachone-ftr")&&(document.querySelector(".padachone-ftr").style.visibility="hidden"),o(e)};Object(n.useEffect)(function(){return window.addEventListener("scroll",c),function(){window.removeEventListener("scroll",c)}},[]);var u=Object(n.useState)({finished:!1,pdtodaysDate:_().split(" ").join(""),place:localStorage.getItem("padachone:place"),country:localStorage.getItem("padachone:country"),region:localStorage.getItem("padachone:region")}),m=Object(i.a)(u,2),d=m[0],p=m[1],g=d.finished,f=d.country,h=d.region,b=d.pdtodaysDate,y=(d.prayerdata,d.place),E=function(e){var t=e.country,a=e.region,n=e.finished,r=e.place;p(Object(l.a)({},d,{finished:n,country:t,region:a,place:r}))},v=Object(n.useState)([!1,""]),j=Object(i.a)(v,2),O=j[0],S=j[1];return Object(n.useEffect)(function(){if(!localStorage.getItem("padachone_msg")){var e="Quick Tip: Use 'Add to Homescreen'";S(function(){return localStorage.setItem("padachone_msg",e),[!0,e]})}Object.keys(localStorage).filter(function(e){return e.startsWith("padachone:")&&"padachone:region"!==e&&"padachone:country"!==e&&"padachone:place"!==e}).length&&p(Object(l.a)({},d,{finished:!0}))},[]),r.a.createElement(be.a,{theme:ot},r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null),r.a.createElement(We,null,r.a.createElement(Te.a,{location:"bottom",style:{background:"#29b6f6",marginBottom:"30px"},buttonStyle:{borderRadius:"10px"}},"This website uses cookies to enhance the user experience."),O[0]&&r.a.createElement(rt,{msg:O[1]}),!g&&r.a.createElement(Ce,{setupdata:Ne,finished:function(e){return E(e)},country:f,region:h,place:y}),g&&r.a.createElement(fe,{country:f,region:h,pdate:b,place:y,startup:function(e){return E(e)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));De.a({dsn:"https://bc34e53e67594e09803e8dbbe9e4df5b@sentry.io/1457299"}),c.a.render(r.a.createElement(ct,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[141,1,2]]]);
//# sourceMappingURL=main.7e8bf657.chunk.js.map