(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(t,e,a){},13:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(6),c=a.n(s),o=(a(12),a(13),a(1)),i=a(2),l=a(4),u=a(3),h=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"timer"},"0:",this.props.sec)}}]),a}(n.Component),m=function(t){return r.a.createElement("div",{className:"cont"},r.a.createElement(h,{sec:t.sec}),r.a.createElement("div",{className:"bar",style:{width:t.width,backgroundColor:t.color}}),r.a.createElement("button",{className:"btn",onClick:t.toggle},t.state.status?"start":"stop"),r.a.createElement("button",{className:"btn restart",onClick:t.restart},"restart"))},d=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={min:0,sec:59,status:!1,status2:!1,width:177,color:"#9acd32"},t.clear=function(){clearInterval(t.timer)},t.changeStyle=function(){return t.state.sec<=10?t.setState({width:t.state.width-3,color:"#f44336"}):t.setState({width:t.state.width-3})},t.changeTimer=function(){t.changeStyle(),t.setState((function(e){if(!(t.state.sec<=0))return t.state.sec<=10?{sec:"0"+(e.sec-1)}:{sec:e.sec-1};t.clear()}))},t.toggle=function(){return t.setState((function(t){return{status:!t.status}})),t.state.status?t.timer=setInterval(t.changeTimer,1e3):clearInterval(t.timer)},t.restart=function(){t.setState({sec:59,width:177})},t}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.timer=setInterval(this.changeTimer,1e3)}},{key:"render",value:function(){return r.a.createElement("div",{className:"wrap"},r.a.createElement(m,{sec:this.state.sec,width:this.state.width,color:this.state.color,toggle:this.toggle,state:this.state,restart:this.restart}))}}]),a}(r.a.Component),f=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(i.a)(a,[{key:"shouldComponentUpdate",value:function(t,e){return"0"===t.sec.toString().slice(-1)||!!t.restartStatus}},{key:"render",value:function(){return r.a.createElement("div",{className:"timer"},"0:",this.props.sec)}}]),a}(n.Component),v=function(t){return r.a.createElement("div",{className:"cont"},r.a.createElement(f,{sec:t.sec,restartStatus:t.restartStatus}),r.a.createElement("div",{className:"bar",style:{width:t.width,backgroundColor:t.color}}),r.a.createElement("button",{className:"btn",onClick:t.toggle},t.state.status?"start":"stop"),r.a.createElement("button",{className:"btn restart",onClick:t.restart},"restart"))},g=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={min:0,sec:59,status:!1,status2:!1,width:177,color:"#9acd32",restart:!1},t.clear=function(){clearInterval(t.timer)},t.changeStyle=function(){return t.state.sec<=10?t.setState({width:t.state.width-3,color:"#f44336"}):t.setState({width:t.state.width-3,restart:!1})},t.changeTimer=function(){t.changeStyle(),t.setState((function(e){if(!(t.state.sec<=0))return t.state.sec<=10?{sec:"0"+(e.sec-1)}:{sec:e.sec-1};t.clear()}))},t.toggle=function(){return t.setState((function(t){return{status:!t.status}})),t.state.status?t.timer=setInterval(t.changeTimer,1e3):t.clear()},t.restart=function(){t.setState({sec:59,width:177,restart:!0})},t}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.timer=setInterval(this.changeTimer,1e3)}},{key:"render",value:function(){return r.a.createElement("div",{className:"wrap"},r.a.createElement(v,{sec:this.state.sec,width:this.state.width,color:this.state.color,toggle:this.toggle,state:this.state,restart:this.restart,restartStatus:this.state.restart}))}}]),a}(r.a.Component);var p=function(){return r.a.createElement("div",{className:"whole"},r.a.createElement(d,null),r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},7:function(t,e,a){t.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.0ef22ee1.chunk.js.map