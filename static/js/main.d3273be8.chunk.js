(this["webpackJsonpbitcoin-real-time"]=this["webpackJsonpbitcoin-real-time"]||[]).push([[0],{206:function(e){e.exports=JSON.parse('[{"coinName":"Bitcoin","nameCode":"btc","imgUrl":"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"},{"coinName":"Ethereum","nameCode":"eth","imgUrl":"https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"},{"coinName":"Solana","nameCode":"sol","imgUrl":"https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png"},{"coinName":"Cardano","nameCode":"ada","imgUrl":"https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png"},{"coinName":"XRP","nameCode":"xrp","imgUrl":"https://s2.coinmarketcap.com/static/img/coins/64x64/52.png"},{"coinName":"Polkadot","nameCode":"dot","imgUrl":"https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png"},{"coinName":"Dogecoin","nameCode":"doge","imgUrl":"https://s2.coinmarketcap.com/static/img/coins/64x64/74.png"},{"coinName":"Avalanche","nameCode":"avax","imgUrl":"https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png"},{"coinName":"Axie Infinity","nameCode":"axs","imgUrl":"https://s2.coinmarketcap.com/static/img/coins/64x64/6783.png"},{"coinName":"Internet Computer","nameCode":"icp","imgUrl":"https://s2.coinmarketcap.com/static/img/coins/64x64/8916.png"},{"coinName":"Terra","nameCode":"luna","imgUrl":"https://s2.coinmarketcap.com/static/img/coins/64x64/4172.png"}]')},243:function(e,t,c){},418:function(e,t,c){},419:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),a=c(42),s=c.n(a),r=(c(243),c(103)),o=c(30),l=c(12),j=c(48),d=c(474),m=c(472),h=c(473),u=c(469);var b=c(206),g=c(2);function p(){var e=Object(j.b)(),t=n.useState(""),c=Object(l.a)(t,2),i=(c[0],c[1]),a=Object(n.useState)(""),s=Object(l.a)(a,2),r=s[0],o=s[1],p=n.useState(!1),O=Object(l.a)(p,2),x=O[0],f=O[1];return Object(g.jsx)("div",{className:"drop-down",children:Object(g.jsxs)(h.a,{variant:"outlined",sx:{m:2,minWidth:300},children:[Object(g.jsxs)("div",{className:"coin-choosing-text",children:["Choose Your Coin"," ",Object(g.jsx)("img",{className:"coin-symbol",src:"https://www.iconpacks.net/icons/2/free-cryptocurrency-coin-icon-2457-thumb.png",alt:""})," "]}),Object(g.jsx)(d.a,{id:"demo-simple-select-standard-label",children:r.toUpperCase()}),Object(g.jsx)(u.a,{className:"select-container",labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",label:r,value:r,onChange:function(e){i(e.target.value)},onClose:function(){f(!1)},onOpen:function(){f(!0)},open:x,children:b.map((function(t){return Object(g.jsx)("div",{className:"coins-container",children:Object(g.jsxs)(m.a,{onClick:function(){return c=t.nameCode,n=t.imgUrl,i=t.coinName,o(c),e(function(e){return function(t){t({type:"SET_COIN_TYPE",coinType:e})}}(c)),e(function(e){return function(t){t({type:"SET_COIN_IMG",imgUrl:e})}}(n)),e(function(e){return function(t){t({type:"SET_COIN_NAME",coinName:e})}}(i)),void f(!x);var c,n,i},value:t.nameCode,children:[t.coinName," ",Object(g.jsx)("span",{children:Object(g.jsx)("img",{className:"coin-logo",src:t.imgUrl,alt:""})})]})})}))})]})})}function O(){var e=Object(n.useState)("N/A"),t=Object(l.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)("N/A"),s=Object(l.a)(a,2),r=s[0],o=s[1],d=Object(n.useState)("N/A"),m=Object(l.a)(d,2),h=m[0],u=m[1],b=Object(n.useState)("N/A"),O=Object(l.a)(b,2),x=O[0],f=O[1],v=Object(n.useState)("N/A"),N=Object(l.a)(v,2),w=N[0],C=N[1],k=Object(j.c)((function(e){return e.bitcoinModule})),y=k.coinType,S=k.currCoinImg,_=k.coinName,U=Object(n.useRef)(null);return Object(n.useEffect)((function(){U.current=new WebSocket("wss://wstest.fxempire.com?token=btctothemoon"),U.current.onopen=function(e){U.current.send(JSON.stringify({type:"SUBSCRIBE",instruments:["cc-".concat(y,"-usd-cccagg")]}))},U.current.onmessage=function(e){var t=JSON.parse(e.data);i(t["cc-".concat(y,"-usd-cccagg")].last),o(t["cc-".concat(y,"-usd-cccagg")].percentChange),u(t["cc-".concat(y,"-usd-cccagg")].change),f(t["cc-".concat(y,"-usd-cccagg")].lastUpdate)},U.current.onerror=function(e){},C(y);var e=U.current;return U.current.onclose=function(t){e.send(JSON.stringify({type:"UNSUBSCRIBE",instruments:["cc-".concat(w,"-usd-cccagg")]}))},function(){e.close()}}),[y]),Object(g.jsxs)("div",{className:"header-container",children:[Object(g.jsxs)("h1",{className:"flicker","data-heading":"B",children:["itcoin",Object(g.jsx)("span",{className:"green-point",children:"."})]}),Object(g.jsxs)("div",{className:"drop-down-container",children:[Object(g.jsx)(p,{}),Object(g.jsxs)("a",{href:"https://coinmarketcap.com/currencies/".concat(_,"/"),children:[" ",Object(g.jsx)("img",{className:"coin-hero-header",src:S,alt:""})]}),Object(g.jsxs)("span",{className:"coin-type-hero",children:[y.toUpperCase(),Object(g.jsx)("img",{className:"coin-hero-input",src:S,alt:""})]})]}),Object(g.jsxs)("div",{className:"live-stream",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{children:Object(g.jsx)("img",{className:"arrow animate-flicker",src:r>0?"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Dark_Green_Arrow_Up.svg/1200px-Dark_Green_Arrow_Up.svg.png":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Red_Arrow_Down.svg/1200px-Red_Arrow_Down.svg.png",alt:""})}),"$",c.toLocaleString()]}),Object(g.jsxs)("div",{className:"presents",children:[Object(g.jsx)("span",{className:r>0?"price-change-green":"price-change-red",children:h.toLocaleString()}),"(",r,"%)"]}),Object(g.jsxs)("div",{className:"last-update",children:[Object(g.jsx)("img",{className:"header-coin-iqon",src:S,alt:""}),"last update : ",x.substring(11,16)]})]})]})}var x=c(476),f=c(478),v=c(119),N=c.n(v),w=c(210),C=c.n(w),k={getPriceBy:function(e,t,c){return C.a.get("https://www.fxempire.com/api/v1/en/crypto-coin/chart/candles/".concat(e,"?aggregate=").concat(t,"&e=CCCAGG&fsym=").concat(c,"&tsym=usd&limit=30")).then((function(e){return e.data}))}};var y=c(464),S=c(468),_=c(223),U=c(224),E=c(107),I=c(227);function T(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],i=t[1],a=Object(j.c)((function(e){return e.bitcoinModule})),s=a.coinType,r=a.currCoinImg;Object(n.useEffect)((function(){o("histohour",1),console.log(c[2])}),[s]);var o=function(e,t){k.getPriceBy(e,t,s).then((function(t){var n=t.data.map((function(t){return"histoday"===e?{name:t.Date.substring(5,10).split("/").reverse().join("/"),uv:t.High,pv:t.Low,amt:t.Open}:{name:t.Date.substring(10,16),uv:t.High,pv:t.Low,amt:t.Open}}));i(n),console.log(c)}))},d=[Object(g.jsx)(x.a,{onClick:function(){return o("histominute",1)},children:"1 Min"},"one"),Object(g.jsxs)(x.a,{onClick:function(){return o("histominute",5)},children:["5 Min"," "]},"two"),Object(g.jsxs)(x.a,{onClick:function(){return o("histohour",1)},children:["1 Hour"," "]},"two"),Object(g.jsxs)(x.a,{onClick:function(){return o("histoday",7)},children:["1 Week"," "]},"two")];return c.length?Object(g.jsx)("div",{className:"overview-container",children:Object(g.jsxs)("div",{className:"top-container",children:[Object(g.jsx)(f.a,{className:"buttons-group",variant:"outlined",size:"large","aria-label":"large button group",children:d}),Object(g.jsxs)("div",{className:"arrows-container",children:[Object(g.jsxs)("div",{className:"positive-value",children:["High: ",Object(g.jsx)("span",{className:"dollar-sign",children:"$"}),c[30].uv.toLocaleString(),Object(g.jsx)("img",{className:"arrow2 animate-flicker",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Dark_Green_Arrow_Up.svg/1200px-Dark_Green_Arrow_Up.svg.png",alt:""})]}),Object(g.jsxs)("div",{className:"header-coin-iqon-contianer",children:[Object(g.jsx)("img",{className:"header-coin-iqon",src:r,alt:""}),Object(g.jsx)("span",{className:"cointype-white",children:s})]}),Object(g.jsxs)("div",{className:"negative-value",children:["Low: ",Object(g.jsx)("span",{className:"dollar-sign",children:"$"}),c[30].pv.toLocaleString(),Object(g.jsx)("img",{className:"arrow3 animate-flicker",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Red_Arrow_Down.svg/1200px-Red_Arrow_Down.svg.png",alt:""})]})]}),Object(g.jsx)("div",{}),Object(g.jsxs)(y.a,{className:"area-charts",width:1400,height:500,data:c,margin:{top:10,right:0,left:0,bottom:100},children:[Object(g.jsx)(S.a,{strokeDasharray:"3 3"}),Object(g.jsx)(_.a,{dataKey:"name"}),Object(g.jsx)(U.a,{}),Object(g.jsx)(E.a,{}),Object(g.jsx)(I.a,{type:"linear",dataKey:"uv",stroke:"rgb(255, 255, 255)",fill:"#f6a000"})]}),Object(g.jsx)("div",{className:"unfortunately",children:"Unfortunately Carths Is Not Availibal For Mobile"})]})}):Object(g.jsx)("div",{className:"loader",children:Object(g.jsx)(N.a,{type:"Puff",color:"#00BFFF",height:100,width:100,top:50,"margin-top":-50,"margin-left":0,"margin-right":0,timeout:4e3})})}var A=c(480),D=c(484),L=c(483),M=c(479),B=c(481),P=c(482),F=c(477);function R(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],i=t[1],a=Object(j.c)((function(e){return e.bitcoinModule})).coinType;Object(n.useEffect)((function(){s("histoday",7)}),[a]);var s=function(e,t){k.getPriceBy(e,t,a).then((function(t){var c=t.data.map((function(t){return r("histoday"===e?t.Date.substring(0,10):t.Date.substring(10,16),t.High,t.Low,t.Open,t.Close)}));i(c)}))};function r(e,t,c,n,i){return{date:e,high:t,low:c,open:n,close:i}}var o=[Object(g.jsx)(x.a,{onClick:function(){return s("histominute",1)},children:"1 Min"},"one"),Object(g.jsxs)(x.a,{onClick:function(){return s("histominute",5)},children:["5 Min"," "]},"two"),Object(g.jsxs)(x.a,{onClick:function(){return s("histohour",1)},children:["1 Hour"," "]},"two"),Object(g.jsxs)(x.a,{onClick:function(){return s("histoday",7)},children:["1 Week"," "]},"two")];return c.length?Object(g.jsxs)("div",{className:"history-container",children:[Object(g.jsx)(f.a,{className:"buttons-group",variant:"outlined",size:"large","aria-label":"large button group",children:o}),Object(g.jsx)(M.a,{component:F.a,children:Object(g.jsxs)(A.a,{sx:{minWidth:650},size:"medium","aria-label":"a dense table",children:[Object(g.jsx)(B.a,{children:Object(g.jsxs)(P.a,{children:[Object(g.jsx)(L.a,{children:"Time"}),Object(g.jsx)(L.a,{align:"right",children:"High"}),Object(g.jsx)(L.a,{align:"right",children:"Low"}),Object(g.jsx)(L.a,{align:"right",children:"Open"}),Object(g.jsx)(L.a,{align:"right",children:"Close"})]})}),Object(g.jsx)(D.a,{children:c.map((function(e){return Object(g.jsxs)(P.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(g.jsx)(L.a,{component:"th",scope:"row",children:e.date.split("/").reverse().join("/")}),Object(g.jsx)(L.a,{align:"right",children:e.high.toLocaleString()}),Object(g.jsx)(L.a,{align:"right",children:e.low.toLocaleString()}),Object(g.jsx)(L.a,{align:"right",children:e.open.toLocaleString()}),Object(g.jsx)(L.a,{align:"right",children:e.close.toLocaleString()})]},e.name)}))})]})})]}):Object(g.jsx)("div",{className:"loader",children:Object(g.jsx)(N.a,{type:"Puff",color:"#00BFFF",height:100,width:100,top:50,"margin-top":-50,"margin-left":0,"margin-right":0,timeout:4e3})})}var G=[{path:"/",component:function(){return Object(g.jsx)("div",{children:Object(g.jsx)(T,{})})}},{path:"/history",component:function(){return Object(g.jsx)("div",{children:Object(g.jsx)(R,{})})}}];function H(){return Object(g.jsx)("div",{className:"footer",children:Object(g.jsx)("div",{className:"coffee-rights",children:"\xa9 2021 Itay Rosental"})})}function J(){return Object(g.jsxs)("div",{className:"tabs-container",children:[Object(g.jsx)(r.b,{className:"page-link",to:"/",children:Object(g.jsx)(x.a,{id:"overview",variant:"contained",children:"Overview"})}),Object(g.jsx)(r.b,{className:"page-link",to:"/history",children:Object(g.jsx)(x.a,{id:"history",variant:"contained",children:"history"})})]})}c(418);var W=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)(r.a,{children:[Object(g.jsx)(O,{}),Object(g.jsx)(o.c,{children:Object(g.jsxs)("div",{className:"main-container",children:[Object(g.jsx)(J,{}),G.map((function(e){return Object(g.jsx)(o.a,{exact:!0,component:e.component,path:e.path},e.path)}))]})}),Object(g.jsx)(H,{})]})})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,485)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))},z=c(106),X=c(225),Y=c(77),$={coinType:"btc",coinName:"Bitcoin",currCoinImg:"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"};var K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||z.c,V=Object(z.b)({bitcoinModule:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COIN_TYPE":return Object(Y.a)(Object(Y.a)({},e),{},{coinType:t.coinType});case"SET_COIN_IMG":return Object(Y.a)(Object(Y.a)({},e),{},{currCoinImg:t.imgUrl});case"SET_COIN_NAME":return Object(Y.a)(Object(Y.a)({},e),{},{coinName:t.coinName});default:return e}}}),Q=Object(z.d)(V,K(Object(z.a)(X.a)));s.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(j.a,{store:Q,children:Object(g.jsx)(W,{})})}),document.getElementById("root")),q()}},[[419,1,2]]]);
//# sourceMappingURL=main.d3273be8.chunk.js.map