(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,r){},28:function(e,t,r){"use strict";r.r(t);var n,a=r(0),c=r.n(a),s=r(8),i=r.n(s),o=(r(18),r(2)),u=r(5),l=r(3),d=r(6),j=r.n(d),b=r(7),f="https://api.unsplash.com/search/photos?query=nature&page=1&per_page=5&client_id=".concat("gzpUbj5j5tdK9S2L_o4jSrDiA65NGgL_S5p2qmyllF0"),p={getImage:function(){var e=Object(b.a)(j.a.mark((function e(){var t,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(f);case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r.results.map((function(e){return e.urls.full})));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},m=Object(l.b)("backgroundImage/getImage",p.getImage),h=Object(l.c)({name:"backgroundImage",initialState:{imageUrls:[],currentImageUrlIndex:0},reducers:{switchToNextBackgroundImage:function(e){e.currentImageUrlIndex=(e.currentImageUrlIndex+1)%e.imageUrls.length},switchToPreviousBackgroundImage:function(e){var t=e.currentImageUrlIndex-1;t<0&&(t=e.imageUrls.length-1),e.currentImageUrlIndex=t}},extraReducers:Object(u.a)({},m.fulfilled,(function(e,t){e.imageUrls=t.payload,e.currentImageUrlIndex=0}))}),g=h.actions,O=(g.switchToNextBackgroundImage,g.switchToPreviousBackgroundImage,h.reducer),x=r(1),y=function(){var e=Object(o.c)((function(e){return e.backgroundImage})),t=e.imageUrls,r=e.currentImageUrlIndex,n=Object(o.b)();return Object(a.useEffect)((function(){n(m())}),[n]),Object(x.jsx)("div",{id:"background-image-container",children:Object(x.jsx)("img",{src:t[r],alt:"",id:"background-image"})})},v="https://api.openweathermap.org/data/2.5/weather?appid=".concat("7f8eeef97f46844f0755cec3950d3ff6","&units=metric"),w={getWeather:function(){var e=Object(b.a)(j.a.mark((function e(t,r){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"&q=").concat(t,",").concat(r));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",{weatherMetadata:a.weather[0],temperature:a.main.temp});case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},I=Object(l.b)("weather/getWeather",(function(e){var t=e.city,r=e.state;return w.getWeather(t,r)})),N=Object(l.c)({name:"weather",initialState:{city:"Seattle",state:"Washington",metadata:{},temperature:""},reducers:{setCity:function(e,t){e.city=t.payload},setState:function(e,t){e.state=t.payload}},extraReducers:Object(u.a)({},I.fulfilled,(function(e,t){e.metadata=t.payload.weatherMetadata,e.temperature=t.payload.temperature}))}),q=N.actions,k=(q.setCity,q.setState,N.reducer),S=function(){var e=Object(o.c)((function(e){return e.weather})),t=e.metadata,r=e.temperature,n=e.city,c=e.state,s=Object(o.b)();return Object(a.useEffect)((function(){s(I({city:n,state:c}))}),[s,n,c]),Object(x.jsx)("div",{className:"weather",children:Object(x.jsxs)("div",{className:"temperature-container",children:[Object(x.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(t.icon,"@2x.png"),alt:""}),Object(x.jsxs)("div",{className:"weather-text",children:[Object(x.jsxs)("p",{className:"temperature",children:[r,"\xb0"]}),Object(x.jsx)("p",{className:"weather-description",children:t.description})]})]})})},D={getQuote:function(){var e=Object(b.a)(j.a.mark((function e(){var t,r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://quotes.rest/qod?language=en");case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,n=r.contents.quotes[0],e.abrupt("return",{quote:n.quote,author:n.author});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},E=Object(l.b)("quote/getQuote",D.getQuote),U=Object(l.c)({name:"quote",initialState:{quote:"",author:""},extraReducers:Object(u.a)({},E.fulfilled,(function(e,t){e.quote=t.payload.quote,e.author=t.payload.author}))}).reducer,M=function(){var e=Object(o.c)((function(e){return e.quote})),t=e.quote,r=e.author,n=Object(o.b)();return Object(a.useEffect)((function(){n(E())}),[n]),Object(x.jsxs)("div",{id:"quote",children:[Object(x.jsxs)("p",{className:"quote-message",children:["\u201c",t,"\u201d"]}),Object(x.jsx)("p",{className:"quote-author",children:r})]})},R=Object(l.c)({name:"errors",initialState:{errorMessage:"",retryHandler:null},reducers:{clearErrorMessage:function(e){e.errorMessage="",e.retryHandler=null}},extraReducers:(n={},Object(u.a)(n,m.rejected,(function(e){e.errorMessage="Getting image failed.",e.retryHandler=m})),Object(u.a)(n,E.rejected,(function(e){e.errorMessage="Getting the quote failed.",e.retryHandler=E})),Object(u.a)(n,I.rejected,(function(e){e.errorMessage="Getting the weather failed.",e.retryHandler=I})),n)}),C=R.actions.clearErrorMessage,H=R.reducer,T=function(){var e=Object(o.c)((function(e){return e.error})),t=e.errorMessage,r=e.retryHandler,n=Object(o.b)();return t?Object(x.jsxs)("div",{id:"error-message-container",children:[Object(x.jsx)("p",{children:t}),Object(x.jsx)("button",{onClick:function(){n(r()),n(C())},children:"X"})]}):null},B=r(13),G=Object(l.c)({name:"journal",initialState:{entries:[],doneEntries:[]},reducers:{addJournalEntry:function(e,t){e.entries.push({text:t.payload,isDone:!1})},removeEntry:function(e,t){e.entries.splice(t.payload,1)},toggleEntryDone:function(e,t){e.entries[t.payload].isDone=!e.entries[t.payload].isDone}}}),J=G.actions,W=J.addJournalEntry,_=J.removeEntry,Q=J.toggleEntryDone,A=G.reducer,F=r(12),L=r.n(F),P=function(e){var t=e.children,r=e.id,n=e.isDone,a=Object(o.b)();return Object(x.jsxs)("div",{className:"entry",children:[Object(x.jsxs)("div",{className:"entry-actions-container",children:[Object(x.jsx)("button",{"aria-label":"Remove",className:"remove",onClick:function(){return a(_(r))},children:"Remove"}),Object(x.jsxs)("button",{"aria-label":"Mark Done",className:"done",onClick:function(){a(Q(r))},children:[n?"Redo":"Done",Object(x.jsx)(L.a,{active:n,config:{spread:360}})]})]}),t]})},z=function(e){var t=e.entries,r=["surface-blue","surface-red","surface-green","surface-orange"],n=function(e){return r[e%r.length]};return Object(x.jsx)("div",{className:"surface",children:Object(x.jsx)("ul",{className:"entries-list",children:t.map((function(e,t){var r=e.text,a=e.isDone;return Object(x.jsx)("li",{className:"".concat(n(t)," surface-styles ").concat(a?"entry-done":""),children:Object(x.jsx)(P,{id:t,isDone:a,children:r})},r)}))})})},K=function(){var e=Object(a.useState)(""),t=Object(B.a)(e,2),r=t[0],n=t[1],c=Object(o.c)((function(e){return e.journal})).entries,s=Object(o.b)();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{id:"journal",className:"surface",children:[Object(x.jsx)("h2",{children:"To Do Today"}),Object(x.jsx)("form",{onSubmit:function(e){e.preventDefault(),""!==r&&(s(W(r)),n(""))},children:Object(x.jsx)("input",{type:"text",className:"journal-input",value:r,onChange:function(e){n(e.target.value)},"aria-label":"New journal entry"})})]}),Object(x.jsx)(z,{entries:c})]})};var X=function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(y,{}),Object(x.jsxs)("header",{children:[Object(x.jsx)(T,{}),Object(x.jsx)(S,{})]}),Object(x.jsx)("aside",{className:"left-wallpaper-control wallpaper-control"}),Object(x.jsx)("main",{children:Object(x.jsx)(K,{})}),Object(x.jsx)("aside",{className:"right-wallpaper-control wallpaper-control"}),Object(x.jsx)("footer",{children:Object(x.jsx)(M,{})})]})},V=Object(l.a)({reducer:{backgroundImage:O,weather:k,quote:U,journal:A,error:H}});i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(o.a,{store:V,children:Object(x.jsx)(X,{})})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.bf029362.chunk.js.map