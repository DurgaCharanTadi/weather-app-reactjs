(this["webpackJsonpweather-app-reactjs"]=this["webpackJsonpweather-app-reactjs"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.b0e94896.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),r=a.n(c),o=(a(9),a(1)),i=(a(10),"9c63bcc881bda8f8fd73608995f9a967"),s="https://api.openweathermap.org/data/2.5/";var m=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),c=t[0],r=t[1],m=Object(n.useState)(""),u=Object(o.a)(m,2),d=u[0],p=u[1];return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"header"},l.a.createElement("img",{src:a(11),alt:"My Logo",height:"100",width:"140"}),l.a.createElement("ul",{className:"menuItems"},l.a.createElement("li",null,"My Projects"),l.a.createElement("li",null,"About"))),l.a.createElement("div",{className:"undefined"!=typeof d.main&&d.main.temp<16?"content cold-bg":"content warm-bg"},l.a.createElement("h2",null,"What is your Weather ?"),l.a.createElement("input",{type:"text",className:"search-bar",placeholder:"search for city....",onChange:function(e){return r(e.target.value)},value:c,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(s,"weather?q=").concat(c,"&units=metric&APPID=").concat(i)).then((function(e){return e.json()})).then((function(e){p(e),r(""),console.log(e)}))}}),"undefined"!=typeof d.main?l.a.createElement("div",null,l.a.createElement("div",{className:"details_sheet_1"},l.a.createElement("p",{className:"temperature"},d.main.temp,"\xb0C"),l.a.createElement("ul",null,l.a.createElement("li",null,d.name,", ",d.sys.country),l.a.createElement("li",null,function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],l=e.getFullYear();return"".concat(t," ").concat(a," ").concat(n," ").concat(l)}(new Date)))),l.a.createElement("div",{className:"set_two"},l.a.createElement("ul",{className:"details_sheet_2"},l.a.createElement("li",null,"Maximum Temperature: ",d.main.temp_max,"\xb0C"),l.a.createElement("li",null,"Minimum Temperature: ",d.main.temp_min,"\xb0C"),l.a.createElement("li",null,"Feels like: ",d.main.feels_like,"\xb0C"),l.a.createElement("li",null,"Wind Speed: ",d.wind.speed,"mph")),l.a.createElement("ul",{className:"details_sheet_3"},l.a.createElement("li",null,"Sunrise: ",d.sys.sunrise),l.a.createElement("li",null,"Sunset: ",d.sys.sunset),l.a.createElement("li",null,"Latitute: ",d.coord.lat),l.a.createElement("li",null,"Longitude: ",d.coord.lon)))):""))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.ae47721f.chunk.js.map