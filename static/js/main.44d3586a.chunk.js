(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},131:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),l=(a(102),a(17)),i=a(15),s=(a(103),a(206)),u=(a(104),a(137)),m=a(200),d=a(43),p=a.n(d),g=a(56),h=a(193),f=a(194),y=a(196),b=a(210),E=a(195),v=a(72),O=a.n(v),j=a(73),w=a.n(j),S=Object(u.a)({grow:{flexGrow:1}}),k=function(e){var t,a=e.timezone,n=e.startup,o=e.city,c=S(),s=r.a.useState({checkedA:!0}),u=Object(i.a)(s,2),m=u[0],d=u[1];return r.a.createElement("div",{className:{flexGrow:1}},r.a.createElement(h.a,{position:"fixed",color:"primary"},r.a.createElement(f.a,null,r.a.createElement("img",{src:w.a,width:"150",height:"30",alt:"logo",className:"App-logo"}),r.a.createElement("div",{className:c.grow}),r.a.createElement("span",{style:{color:"#fff",padding:"0 0 0 3px"}},r.a.createElement(O.a,{format:"HH:mm:ss",ticking:!0,timezone:a})),r.a.createElement(b.a,{checked:m.checkedA,onChange:(t="checkedA",function(e){d(function(){return Object.keys(localStorage).map(function(e){e.startsWith("padachone:")&&localStorage.removeItem(e)}),n({country:"",region:"",finished:!1}),Object(l.a)({},m,Object(g.a)({},t,e.target.checked))})}),value:"checkedA",color:"secondary"})),r.a.createElement(E.a,{direction:"up",in:"true",mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(y.a,{variant:"caption",color:"textSecondary",style:{color:"white",fontStyle:"italic"}},r.a.createElement("strong",null,o)))))},x=Object(u.a)(function(e){return{text:{padding:e.spacing(2,2,0)},paper:{paddingBottom:50},list:{marginBottom:e.spacing(2)},subheader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0},grow:{flexGrow:1},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"}}}),N=function(e){var t=x();return r.a.createElement(h.a,{position:"fixed",color:"primary",className:t.appBar},r.a.createElement("div",{className:t.grow}),r.a.createElement(y.a,{variant:"caption",display:"block",gutterBottom:!0,color:"secondary",style:{paddingTop:"10px"}},"Copyright \xa9 2019 WISMIM."))},A=a(199),C=a(50),I=a.n(C),B=a(66),D=function(e){var t=e.country,a=void 0===t?"Netherlands":t,r=e.city,o=void 0===r?"Amsterdam":r,c=e.date,l="https://api.aladhan.com/v1/timingsByCity?city=".concat(o,"&country=").concat(a,"&method=8"),s=Object(n.useState)({}),u=Object(i.a)(s,2),m=u[0],d=u[1];function p(){return(p=Object(B.a)(I.a.mark(function e(){var t,n;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(l,{headers:{Accept:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,Object.keys(localStorage).map(function(e){e.startsWith("padachone:")&&localStorage.removeItem(e)}),n&&n.data&&n.data.meta&&(localStorage.setItem("padachone:city",o),localStorage.setItem("padachone:country",a),localStorage.setItem("padachone:".concat(c),JSON.stringify(n))),d(n),e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(0),d({error:e.t0.message}),e.abrupt("return",!1);case 16:case"end":return e.stop()}},e,null,[[0,12]])}))).apply(this,arguments)}return Object(n.useEffect)(function(){localStorage.getItem("padachone:".concat(c))?d(JSON.parse(localStorage.getItem("padachone:".concat(c)))):function(){p.apply(this,arguments)}()},[]),[m,d]},F=function(e){var t=e.lat,a=e.lon,r="http://api.aladhan.com/v1/calendar?latitude=".concat(t,"&longitude=").concat(a,"&method=2&month=5&year=2019"),o=Object(n.useState)({}),c=Object(i.a)(o,2),l=c[0],s=c[1];function u(){return(u=Object(B.a)(I.a.mark(function e(){var t,a;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(r,{headers:{Accept:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,s(a.data[0]),e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(0),s({error:e.t0.message}),e.abrupt("return",!1);case 14:case"end":return e.stop()}},e,null,[[0,10]])}))).apply(this,arguments)}return Object(n.useEffect)(function(){!function(){u.apply(this,arguments)}()},[]),[l,s]},J=a(197),M=a(198),z=(a(129),a(75)),W=function(e){var t=e.lat,a=e.lon,n=F({lat:t,lon:a}),o=Object(i.a)(n,2),c=o[0];o[1];return c?r.a.createElement("div",null,JSON.stringify(c)):r.a.createElement("h5",null,"Loading...")},G=Object(z.geolocated)({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3})(function(e){var t=Object(n.useState)({}),a=Object(i.a)(t,2),o=a[0];a[1],o.country,o.region;return r.a.createElement(r.a.Fragment,null,e.isGeolocationAvailable?e.isGeolocationEnabled?e.coords?r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"latitude"),r.a.createElement("td",null,e.coords.latitude)),r.a.createElement("tr",null,r.a.createElement("td",null,"longitude"),r.a.createElement("td",null,e.coords.longitude)),r.a.createElement("tr",null,r.a.createElement("td",null,"altitude"),r.a.createElement("td",null,e.coords.altitude)),r.a.createElement("tr",null,r.a.createElement("td",null,"heading"),r.a.createElement("td",null,e.coords.heading)),r.a.createElement("tr",null,r.a.createElement("td",null,"speed"),r.a.createElement("td",null,e.coords.speed)))),r.a.createElement(W,{lat:e.coords.latitude,lon:e.coords.longitude})):r.a.createElement("div",null,"Getting the location data\u2026 "):r.a.createElement("div",{style:{marginTop:"150px"}},r.a.createElement("h5",null,'Message from Lab : "Geolocation is not enabled. Please enable location. Please refresh to go back"')):r.a.createElement("div",null,"Your browser does not support Geolocation"),r.a.createElement(W,{lat:"52.37275104452866",lon:"4.9632149461322195"}))}),P=Object(u.a)({card:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},buttonaction:{justifyContent:"center"}}),T=function(e){var t=e.pdata,a=t.timings,n=t.date,o=t.meta,c=P(),l=r.a.useState(!1),s=Object(i.a)(l,2),u=s[0],m=s[1],d=function(){m(!0)};return a?u?r.a.createElement(G,null):Object.keys(a).map(function(e,t){return r.a.createElement(J.a,{className:c.card,key:t},r.a.createElement(M.a,null,r.a.createElement(y.a,{className:c.title,color:"textSecondary",gutterBottom:!0},e),r.a.createElement(y.a,{variant:"h3",component:"h2"},a[e]),r.a.createElement(y.a,{className:c.pos,color:"textSecondary"},n.readable," ( ",o.timezone,r.a.createElement("span",{onClick:d},")")),r.a.createElement(y.a,{variant:"body2",component:"p"},n.hijri.month.ar,r.a.createElement("br",null),'"'.concat(n.hijri.weekday.en,'"'))))}):null},R=(a(131),Object(u.a)(function(e){return{progress:{margin:e.spacing(2),color:p.a[500]},secondary:{color:"#4caf50"}}})),H=function(e){var t=e.prdata,a=t.data,o=t.code;t.status;console.log(t);var c=R(),l=new Date,i=("0"+l.getDate()).slice(-2),s=["January","February","March","April","May","June","July","August","September","October","November","December"][l.getMonth()],u=l.getFullYear();return console.log("".concat(i," ").concat(s," ").concat(u)),Object(n.useEffect)(function(){a&&Object.keys(a).length}),r.a.createElement("div",{className:"pdnContainer"},"object"===typeof t&&200===o&&Object.keys(a).length?r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{in:"true"},r.a.createElement("div",null,r.a.createElement(T,{pdata:a})))):r.a.createElement(m.a,{className:c.progress,color:"secondary"}))},Y=(a(132),Object(u.a)(function(e){return{progress:{margin:e.spacing(2),color:p.a[500]},secondary:{color:"#4caf50"}}})),L=function(e){var t=e.country,a=void 0===t?localStorage.getItem("padachone:country"):t,n=e.city,o=void 0===n?localStorage.getItem("padachone:city"):n,c=e.pdate,l=e.startup,s=D({city:o,country:a,date:c}),u=Object(i.a)(s,2),d=u[0],p=(u[1],(d&&d.data&&d.data.meta?d.data.meta:"Europe/AmsterDAM").timezone),g=Y();return d&&d.data&&d.data.meta&&200===d.code?r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{timezone:p,startup:l,city:localStorage.getItem("padachone:city")}),r.a.createElement(H,{prdata:d}),r.a.createElement(N,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,d.data||d.error),d.data||d.error?r.a.createElement("p",null,"Please refresh to start over!"):r.a.createElement(m.a,{className:g.progress,color:"secondary"}))},$=a(82),q=a(205),K=a(47),U=a(212),Z=a(201),Q=a(209),V=a(211),X=a(202),_=a(86),ee=a(207),te=Object(u.a)(function(e){return{root:{width:"100%"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)},resetContainer:{padding:e.spacing(3)},label:{color:"red"},selfont:{},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)}}});var ae=function(e){e.setupdata;var t=te(),a=r.a.useState({activeStep:0,place:""}),o=Object(i.a)(a,2),c=o[0],s=o[1],u=c.activeStep,m=c.country,d=c.region,p=(c.seccountry,c.secregion,c.place),g=['P A D A C H O N E !  "Worries end when Salah begins!"',"Almost there!","More Accuracy?","Setup your Secondary Preferance - Coming Soon!"];function h(){s(Object(l.a)({},c,{activeStep:c.activeStep+1}))}function f(){s(Object(l.a)({},c,{activeStep:c.activeStep-1}))}return Object(n.useEffect)(function(){var t;u===g.length&&(t=p?Object(l.a)({},c,{region:p,finished:!0}):Object(l.a)({},c,{finished:!0}),s(function(){return e.finished(t),t}))}),r.a.createElement("div",{className:t.root},r.a.createElement(U.a,{activeStep:u,orientation:"vertical"},g.map(function(e,a){return r.a.createElement(Z.a,{key:e,style:{color:"white"}},r.a.createElement(Q.a,{classes:t.label},e),r.a.createElement(V.a,null,0===u&&r.a.createElement(K.a,{value:m,onChange:function(e){return t=e,void s(Object(l.a)({},c,{country:t}));var t},className:t.selfont}),1===u&&r.a.createElement(K.b,{country:m,value:d,onChange:function(e){return t=e,void s(Object(l.a)({},c,{region:t}));var t},className:t.selfont}),2===u&&r.a.createElement(ee.a,{id:"place-name",label:"Place",className:t.textField,value:p,onChange:function(e){var t=e.target.value;t.match(/^[a-z A-Z]*$/)&&s(Object(l.a)({},c,{place:t}))},margin:"normal",variant:"outlined"}),r.a.createElement(y.a,{color:"textSecondary",variant:"body2",component:"p"},function(e){switch(e){case 0:return"This will Set up your timezone preferance to appear on top of the screen";case 1:return"You can always re-configure these settings on click of a button appearing next to timezone display";case 2:return"Key in your Place name for more accurate results";case 3:return"Do you think Setting up a secondary preferance would always come handy whenever you want to make a \n              comparison between your second home and main?";default:return"Unknown step"}}(a)),r.a.createElement("div",{className:t.actionsContainer},r.a.createElement("div",null,r.a.createElement(X.a,{disabled:0===u,onClick:f,className:t.button},"Back"),r.a.createElement(X.a,{variant:"contained",color:"primary",onClick:h,className:t.button,style:{color:"white"}},u===g.length-1?"Finish":"Next")))))})),u===g.length&&r.a.createElement(_.a,{square:!0,elevation:0,className:t.resetContainer},r.a.createElement(y.a,null,"All steps completed - you're finished"),r.a.createElement(X.a,{onClick:function(){s(Object(l.a)({},c,{activeStep:0}))},className:t.button},"Reset")))},ne=a(77),re=function(){var e=new Date,t=("0"+e.getDate()).slice(-2),a=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],n=e.getFullYear();return"".concat(t," ").concat(a," ").concat(n)},oe=a(78),ce=a(46),le=a(84),ie=a(79),se=a(83),ue=a(36),me=a(208),de=function(e){function t(e){var a;return Object(oe.a)(this,t),(a=Object(le.a)(this,Object(ie.a)(t).call(this,e))).state={error:null,eventId:null},a}return Object(se.a)(t,e),Object(ce.a)(t,[{key:"componentDidCatch",value:function(e,t){var a=this;this.setState({error:e}),ue.b(function(n){n.setExtras(t);var r=ue.a(e);a.setState({eventId:r})})}},{key:"render",value:function(){var e=this;return this.state.error?r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{onClick:function(){return me.b({eventId:e.state.eventId})}},"Report feedback"),r.a.createElement("p",null,"We're sorry \u2014 something's gone wrong."),r.a.createElement("p",null,"Our team has been notified, but click here fill out a report.")):this.props.children}}]),t}(n.Component),pe=a(81),ge=a.n(pe),he=Object($.a)({palette:{primary:p.a,secondary:{main:"#fff"},text:{}},typography:{}});var fe=function(){var e=Object(n.useState)({finished:!1,pdtodaysDate:re().split(" ").join("")}),t=Object(i.a)(e,2),a=t[0],o=t[1],c=a.finished,u=a.country,m=a.city,d=a.pdtodaysDate,p=(a.prayerdata,function(e){var t=e.country,n=e.region,r=e.finished;o(Object(l.a)({},a,{finished:r,country:t,city:n}))});return Object(n.useEffect)(function(){Object.keys(localStorage).filter(function(e){return e.startsWith("padachone:")}).length&&o(Object(l.a)({},a,{finished:!0}))},[]),r.a.createElement(q.a,{theme:he},r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null),r.a.createElement(de,null,r.a.createElement(ge.a,{location:"bottom",style:{background:"#4caf50",marginBottom:"30px"},buttonStyle:{borderRadius:"10px"}},"This website uses cookies to enhance the user experience."),!c&&r.a.createElement(ae,{setupdata:ne,finished:function(e){return p(e)}}),c&&r.a.createElement(L,{country:u,city:m,pdate:d,startup:function(e){return p(e)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));me.a({dsn:"https://bc34e53e67594e09803e8dbbe9e4df5b@sentry.io/1457299"}),c.a.render(r.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},73:function(e,t,a){e.exports=a.p+"static/media/logo.a299d8fa.png"},77:function(e){e.exports=[{title:"Select campaign settings",description:"For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more."},{title:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{title:"Create an ad",description:"Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If you run into any problems with your ads, find out how to tell if they're running and how to resolve approval issues."}]},97:function(e,t,a){e.exports=a(136)}},[[97,1,2]]]);
//# sourceMappingURL=main.44d3586a.chunk.js.map