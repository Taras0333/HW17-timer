(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(t,e,a){},13:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(2),s=a.n(c),o=(a(12),a(13),a(3)),i=a(4),l=a(6),u=a(5);var h=function(t){return r.a.createElement("div",{className:"cont"},r.a.createElement("div",{className:"timer"},"0:",t.sec),r.a.createElement("div",{className:"bar",style:{width:t.width,backgroundColor:t.color}}))},m=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={min:0,sec:59,status:!1,width:177,color:"#9acd32"},t.clear=function(){clearInterval(t.timer)},t.changeStyle=function(){return t.state.sec>10?t.setState({width:t.state.width-3}):t.setState({width:t.state.width-3,color:"#f44336"})},t.changeTimer=function(){t.changeStyle(),t.setState((function(e){if(!(t.state.sec<=0))return t.state.sec<=10?{sec:"0"+(e.sec-1)}:{sec:e.sec-1};t.clear()}))},t.toggle=function(){return t.setState((function(t){return{status:!t.status}})),t.state.status?t.timer=setInterval(t.changeTimer,1e3):clearInterval(t.timer)},t}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.timer=setInterval(this.changeTimer,1e3)}},{key:"render",value:function(){return r.a.createElement("div",{className:"wrap"},r.a.createElement(h,{sec:this.state.sec,width:this.state.width,color:this.state.color}),r.a.createElement("button",{className:"btn",onClick:this.toggle},this.state.status?"start":"stop"))}}]),a}(r.a.Component);var d=function(){return r.a.createElement(m,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},7:function(t,e,a){t.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.0d0dffff.chunk.js.map