(this["webpackJsonpreact-sir-like-model"]=this["webpackJsonpreact-sir-like-model"]||[]).push([[0],{214:function(e,a,t){e.exports=t(407)},407:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(15),i=t(47),l=t(33),c=t(10),s=t(432),u=t(437),m=t(433),d=t(430),p=t(434),h=t(435),f=t(181),b=t.n(f),g=t(22),v=t(48),E=t(49),y=t(55),C=t(50),P=t(56),O=t(436),j=function(e){function a(){var e,t;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(y.a)(this,(e=Object(C.a)(a)).call.apply(e,[this].concat(r)))).state={population:4,duration:3,beta:.5},t.handlePopulationChange=function(e,a){t.setState({population:a}),t.props.onParamsChange(Object(g.a)({},t.state,{population:a}))},t.handleDurationChange=function(e,a){t.setState({duration:a}),t.props.onParamsChange(Object(g.a)({},t.state,{duration:a}))},t.handleBetaChange=function(e,a){t.setState({beta:a}),t.props.onParamsChange(Object(g.a)({},t.state,{beta:a}))},t}return Object(P.a)(a,e),Object(E.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(d.a,{gutterBottom:!0},"\u4eba\u6570"),r.a.createElement(O.a,{value:this.state.population,valueLabelFormat:function(e){return"10^".concat(e)},"aria-labelledby":"population-slider",valueLabelDisplay:"auto",min:1,step:.1,max:10,onChange:this.handlePopulationChange}),r.a.createElement(d.a,{gutterBottom:!0},"\u611f\u67d3\u80fd\u529b\u304c\u3042\u308b\u671f\u9593\uff08\u65e5\uff09"),r.a.createElement(O.a,{value:this.state.duration,"aria-labelledby":"duration-slider",valueLabelDisplay:"auto",marks:!0,min:1,step:1,max:15,onChange:this.handleDurationChange}),r.a.createElement(d.a,{gutterBottom:!0},"\uff11\u65e5\u306b\uff11\u4eba\u304b\u3089\u611f\u67d3\u3059\u308b\u4eba\u6570"),r.a.createElement(O.a,{value:this.state.beta,"aria-labelledby":"beta-slider",valueLabelDisplay:"auto",min:0,step:.01,max:2,onChange:this.handleBetaChange}))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return e.params}}]),a}(n.Component),k=Object(c.a)((function(e){return{root:{width:400,padding:10}}}))(j),S=t(11),w=function(e,a){if(a<=4)return e;if(0===e)return e;var t=Math.floor(a-.01),n=e/Math.pow(10,t);return"".concat(n,"e").concat(t)},I={top:20,right:20,bottom:20,left:20},A=Object(c.a)((function(){return{root:{padding:10}}}))((function(e){var a=e.classes,t=e.params,n=e.data;return r.a.createElement("div",{className:a.root},r.a.createElement(S.b,{width:800,height:400,data:n,margin:I},r.a.createElement(S.c,{stroke:"#ccc",strokeDasharray:[5,5]}),r.a.createElement(S.a,{type:"monotone",dataKey:"infected",stackId:"1",stroke:"#ff7f58",fill:"#ff7f58"}),r.a.createElement(S.a,{type:"monotone",dataKey:"susceptable",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),r.a.createElement(S.a,{type:"monotone",dataKey:"recovered",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),r.a.createElement(S.f,{dataKey:"day"}),r.a.createElement(S.g,{tickFormatter:function(e){return w(e,t.population)}}),r.a.createElement(S.d,null),r.a.createElement(S.e,null)))})),B=function(e){var a=e.params,t=e.data,n=e.onParamsChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{params:a,onParamsChange:n}),r.a.createElement(A,{params:a,data:t}))},D=Object(l.b)((function(e){return e.mockSir}),(function(e){return{onParamsChange:function(a){return e(function(e){return{type:"MOCK_SIR_PARAMS_CHANGE",params:e}}(a))}}}))(B),x=function(e){function a(){var e,t;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(y.a)(this,(e=Object(C.a)(a)).call.apply(e,[this].concat(r)))).state={population:4,beta:.5,infectiousPeriod:3},t.handlePopulationChange=function(e,a){t.setState({population:a}),t.props.onParamsChange(Object(g.a)({},t.state,{population:a}))},t.handleBetaChange=function(e,a){t.setState({beta:a}),t.props.onParamsChange(Object(g.a)({},t.state,{beta:a}))},t.handleInfectiousPeriodChange=function(e,a){t.setState({infectiousPeriod:a}),t.props.onParamsChange(Object(g.a)({},t.state,{infectiousPeriod:a}))},t}return Object(P.a)(a,e),Object(E.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(d.a,{gutterBottom:!0},"N\uff1a\u4eba\u6570"),r.a.createElement(O.a,{value:this.state.population,valueLabelFormat:function(e){return"10^".concat(e)},"aria-labelledby":"population-slider",valueLabelDisplay:"auto",min:1,step:.1,max:10,onChange:this.handlePopulationChange}),r.a.createElement(d.a,{gutterBottom:!0},"\u03b2\uff1a\u4f1d\u9054\u4fc2\u6570"),r.a.createElement(O.a,{value:this.state.beta,"aria-labelledby":"beta-slider",valueLabelDisplay:"auto",min:0,step:.01,max:2,onChange:this.handleBetaChange}),r.a.createElement(d.a,{gutterBottom:!0},"ip\uff1a\u611f\u67d3\u671f\u9593"),r.a.createElement(O.a,{value:this.state.infectiousPeriod,"aria-labelledby":"infectious-period-slider",valueLabelDisplay:"auto",min:1,step:.1,max:15,onChange:this.handleInfectiousPeriodChange}))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return e.params}}]),a}(n.Component),L=Object(c.a)((function(e){return{root:{width:400,padding:10}}}))(x),N=function(e){var a=e.params,t=e.data,n=e.onParamsChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{params:a,onParamsChange:n}),r.a.createElement(A,{params:a,data:t}))},M=Object(l.b)((function(e){return e.sir}),(function(e){return{onParamsChange:function(a){return e(function(e){return{type:"SIR_PARAMS_CHANGE",params:e}}(a))}}}))(N),R=function(e){function a(){var e,t;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(y.a)(this,(e=Object(C.a)(a)).call.apply(e,[this].concat(r)))).state={population:4,beta:.8,latentPeriod:7,infectiousPeriod:3,tau:.001},t.handlePopulationChange=function(e,a){t.setState({population:a}),t.props.onParamsChange(Object(g.a)({},t.state,{population:a}))},t.handleBetaChange=function(e,a){t.setState({beta:a}),t.props.onParamsChange(Object(g.a)({},t.state,{beta:a}))},t.handleLatentPeriodChange=function(e,a){t.setState({latentPeriod:a}),t.props.onParamsChange(Object(g.a)({},t.state,{latentPeriod:a}))},t.handleInfectiousPeriodChange=function(e,a){t.setState({infectiousPeriod:a}),t.props.onParamsChange(Object(g.a)({},t.state,{infectiousPeriod:a}))},t.handleTauChange=function(e,a){t.setState({tau:a}),t.props.onParamsChange(Object(g.a)({},t.state,{tau:a}))},t}return Object(P.a)(a,e),Object(E.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(d.a,{gutterBottom:!0},"N\uff1a\u4eba\u6570"),r.a.createElement(O.a,{value:this.state.population,valueLabelFormat:function(e){return"10^".concat(e)},"aria-labelledby":"population-slider",valueLabelDisplay:"auto",min:1,step:.1,max:10,onChange:this.handlePopulationChange}),r.a.createElement(d.a,{gutterBottom:!0},"\u03b2\uff1a\u4f1d\u9054\u4fc2\u6570"),r.a.createElement(O.a,{value:this.state.beta,"aria-labelledby":"beta-slider",valueLabelDisplay:"auto",min:0,step:.01,max:2,onChange:this.handleBetaChange}),r.a.createElement(d.a,{gutterBottom:!0},"lp\uff1a\u6f5c\u4f0f\u671f\u9593"),r.a.createElement(O.a,{value:this.state.latentPeriod,"aria-labelledby":"latent-period-slider",valueLabelDisplay:"auto",min:1,step:.1,max:15,onChange:this.handleLatentPeriodChange}),r.a.createElement(d.a,{gutterBottom:!0},"ip\uff1a\u611f\u67d3\u671f\u9593"),r.a.createElement(O.a,{value:this.state.infectiousPeriod,"aria-labelledby":"infectious-period-slider",valueLabelDisplay:"auto",min:1,step:.1,max:15,onChange:this.handleInfectiousPeriodChange}),r.a.createElement(d.a,{gutterBottom:!0},"\u03c4\uff1a\u6b7b\u4ea1\u7387"),r.a.createElement(O.a,{value:this.state.tau,"aria-labelledby":"tau-slider",valueLabelDisplay:"auto",min:0,step:.001,max:.1,onChange:this.handleTauChange}))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return e.params}}]),a}(n.Component),_=Object(c.a)((function(e){return{root:{width:400,padding:10}}}))(R),K={top:20,right:20,bottom:20,left:20},F=Object(c.a)((function(){return{root:{padding:10}}}))((function(e){var a=e.classes,t=e.params,n=e.data;return r.a.createElement("div",{className:a.root},r.a.createElement(S.b,{width:800,height:400,data:n,margin:K},r.a.createElement(S.c,{stroke:"#ccc",strokeDasharray:[5,5]}),r.a.createElement(S.a,{type:"monotone",dataKey:"infected",stackId:"1",stroke:"#ff7f58",fill:"#ff7f58"}),r.a.createElement(S.a,{type:"monotone",dataKey:"exposed",stackId:"1",stroke:"#ffc658",fill:"#ffc658"}),r.a.createElement(S.a,{type:"monotone",dataKey:"susceptable",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),r.a.createElement(S.a,{type:"monotone",dataKey:"recovered",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),r.a.createElement(S.a,{type:"monotone",dataKey:"died",stackId:"1",stroke:"#cccccc",fill:"#cccccc"}),r.a.createElement(S.f,{dataKey:"day"}),r.a.createElement(S.g,{tickFormatter:function(e){return w(e,t.population)}}),r.a.createElement(S.d,null),r.a.createElement(S.e,null)))})),G=function(e){var a=e.params,t=e.data,n=e.onParamsChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,{params:a,onParamsChange:n}),r.a.createElement(F,{params:a,data:t}))},H=Object(l.b)((function(e){return e.seir}),(function(e){return{onParamsChange:function(a){return e(function(e){return{type:"SEIR_PARAMS_CHANGE",params:e}}(a))}}}))(G),T=Object(c.a)((function(e){return{root:{},grow:{flexGrow:1},content:{padding:e.spacing(3)}}}),{withTheme:!0})((function(e){var a=e.classes;return r.a.createElement("div",{className:a.root},r.a.createElement(s.a,null),r.a.createElement(u.a,{position:"static"},r.a.createElement(m.a,null,r.a.createElement(d.a,{variant:"h6",color:"inherit",className:a.grow},"\u611f\u67d3\u75c7\u6d41\u884c\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc"),r.a.createElement(p.a,{title:"View source on Github","aria-label":"View source on Github"},r.a.createElement(h.a,{color:"inherit",href:"https://github.com/nejiko96/react-sir-like-model"},r.a.createElement(b.a,{fontSize:"large"}))))),r.a.createElement("main",{className:a.content},r.a.createElement(d.a,{variant:"h4"},"\u96d1\u306aSIR\u30e2\u30c7\u30eb"),r.a.createElement(D,null),r.a.createElement(d.a,{variant:"h4"},"SIR\u30e2\u30c7\u30eb"),r.a.createElement(M,null),r.a.createElement(d.a,{variant:"h4"},"SEIR\u30e2\u30c7\u30eb"),r.a.createElement(H,null)))})),J={population:4,duration:3,beta:1},V=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,a=Math.pow(10,e.population),t=e.duration,n=e.beta,r=a,o=0,i=0,l=[{day:0,susceptable:r,infected:o,recovered:i}],c=[0],s=1,u=1;u<=1e3&&(c[u]=c[u-1]+s,i=c[u-t]||0,o=c[u]-i,r=a-c[u],l.push({day:u,susceptable:r,infected:o,recovered:i}),!(o<.5));u+=1)s=Math.min(n*o*r/a,r);return l},W={params:J,data:V()},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,a=arguments.length>1?arguments[1]:void 0;return"MOCK_SIR_PARAMS_CHANGE"===a.type?{params:a.params,data:V(a.params)}:e},$={population:4,beta:.5,infectiousPeriod:3},q=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,a=Math.pow(10,e.population),t=e.beta,n=1/e.infectiousPeriod,r=a,o=0,i=0,l=[{day:0,susceptable:r,infected:o,recovered:i}],c=-1,s=1,u=0,m=1;m<=1e3&&(r+=c,o+=s,i+=u,l.push({day:m,susceptable:r,infected:o,recovered:i}),!(o<.5));m+=1){var d=Math.min(t*o*r/a,r),p=n*o;c=-d,s=d-p,u=p}return l},Q={params:$,data:q()},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,a=arguments.length>1?arguments[1]:void 0;return"SIR_PARAMS_CHANGE"===a.type?{params:a.params,data:q(a.params)}:e},X={population:4,beta:.8,latentPeriod:7,infectiousPeriod:3,tau:.001},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,a=Math.pow(10,e.population),t=e.beta,n=1/e.latentPeriod,r=1/e.infectiousPeriod,o=e.tau;r+o>1&&(r=1-o);for(var i=a,l=0,c=0,s=0,u=0,m=[{day:0,susceptable:i,exposed:l,infected:c,recovered:s,died:u}],d=-1,p=0,h=1,f=0,b=0,g=1;g<=1e3&&(i+=d,l+=p,c+=h,s+=f,u+=b,m.push({day:g,susceptable:i,exposed:l,infected:c,recovered:s,died:u}),!(l+c<.5));g+=1){var v=t*c*i/a,E=n*l,y=r*c,C=o*c;d=-v,p=v-E,h=E-y-C,f=y,b=C}return m},Z={params:X,data:Y()},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,a=arguments.length>1?arguments[1]:void 0;return"SEIR_PARAMS_CHANGE"===a.type?{params:a.params,data:Y(a.params)}:e},ae=Object(i.b)({mockSir:z,sir:U,seir:ee});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=Object(i.c)(ae);Object(o.render)(r.a.createElement(l.a,{store:te},r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[214,1,2]]]);
//# sourceMappingURL=main.2cc2bb42.chunk.js.map