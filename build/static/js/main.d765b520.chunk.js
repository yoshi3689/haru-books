(this["webpackJsonpoverhaul-book-app"]=this["webpackJsonpoverhaul-book-app"]||[]).push([[0],{245:function(e,t,n){},246:function(e,t,n){"use strict";n.r(t);var a,o=n(0),r=n.n(o),c=n(34),i=n.n(c),s=n(12),l=n(14),u=n(110),d=n(8),h=n(9),b=n(10),p=n(11),j=n(13),m=n(32),v=n(17),f=n(6),O=n(26),k=n(15),g=n.n(k),x=n(40),y=n.n(x),N=y.a.create({baseURL:"https://www.googleapis.com/books/v1"}),S="FETCH_BOOKS",C="FETCH_BOOK",E="CLEAR_BOOKS",w="SIGN_IN",I="SIGN_OUT",R="FETCH_SAVED_BOOKS",T="FETCH_SAVED_BOOK",_="SAVE_BOOK",A="DELETE_SAVED_BOOK",B="GET_PATH",L="GET_HEIGHT",D="LANG_SELECTED",P="FILTER_SELECTED",M="PRINTTYPE_SELECTED",H="ORDER_SELECTED",U="MAX_RESULT_NUM_SELECTED",F="LANGUAGE",K="ORDER",G="FILTER",z="MAX_RESULT_NUM",q="PRINTTYPE",W=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BOOKS_API_KEY:"AIzaSyAjk1_X0XmKDDSKdLgyEimUR5Ltqp3-kkI",REACT_APP_OAUTH_CLIENT_ID:"205159397556-9acd9gsm4kmfv34jecqkb7lpvpogupo3.apps.googleusercontent.com"}).PORT||3001,X=y.a.create({baseURL:"http://localhost:".concat(W,"/bookshelf")}),V=(y.a.create({baseURL:"http://localhost:".concat(W,"/users")}),n(18)),J=Object(V.a)(),Y=function(e){return function(){var t=Object(O.a)(g.a.mark((function t(n,a){var o,r,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=Object.values(a().selections),t.next=3,N.get("/volumes?",{params:{q:e,orderBy:o[0].value,maxResults:o[1].value,langRestrict:o[2].value,filter:o[3].value,printType:o[4].value,download:"epub",key:"AIzaSyAjk1_X0XmKDDSKdLgyEimUR5Ltqp3-kkI"}});case 3:r=t.sent,c=r.data,n({type:S,payload:c.items});case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},Q=function(){return function(){var e=Object(O.a)(g.a.mark((function e(t){var n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.get();case 2:n=e.sent,a=n.data,t({type:R,payload:a});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Z=n(1),$=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).onAuthChange=function(t){var n=e.props,a=n.signIn,o=n.signOut;t?a(e.auth.currentUser.get().getId()):o()},e.onSignInClick=function(){e.auth.signIn()},e.onSignOutClick=function(){e.auth.signOut()},e.renderAuthButton=function(){var t=e.props.isSignedIn;if(null===t)return null;var n=t?{text:"sign out",handler:e.onSignOutClick}:{text:"sign in",handler:e.onSignInClick};return Object(Z.jsxs)("button",{onClick:n.handler,className:"ui google plus button",children:[Object(Z.jsx)("i",{className:"google icon"}),n.text]})},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"205159397556-9acd9gsm4kmfv34jecqkb7lpvpogupo3.apps.googleusercontent.com",scope:"email"}).then((function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)}))}))}},{key:"render",value:function(){return Object(Z.jsx)(Z.Fragment,{children:this.renderAuthButton()})}}]),n}(o.Component),ee=Object(s.b)((function(e){return{isSignedIn:e.auth.isSignedIn}}),{signIn:function(e){return{type:w,payload:e}},signOut:function(){return{type:I}}})($),te=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).getPath=function(){e.props.getPath(window.location.pathname)},e.onLocationChange=function(){var t=e.props.auth,n=t.isSignedIn,a=t.userId,o=n&&"/"===window.location.pathname?{link:"/bookshelf/".concat(a),btnTxt:"Bookshelf"}:{link:"/",btnTxt:"Home"};return Object(Z.jsx)("div",{className:"item",children:Object(Z.jsx)(m.a,{to:o.link,className:"ui button",children:o.btnTxt})})},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getPath(),this.onLocationChange()}},{key:"componentDidUpdate",value:function(e){this.getPath(),e.path!==window.location.pathname&&this.onLocationChange()}},{key:"render",value:function(){return Object(Z.jsx)("div",{className:"ui",children:Object(Z.jsxs)("div",{className:"ui top sticky menu",children:[Object(Z.jsx)("div",{className:"item",children:Object(Z.jsx)("h2",{children:"Haru Books"})}),Object(Z.jsx)("div",{className:"item",children:Object(Z.jsx)(ee,{})}),this.onLocationChange()]})})}}]),n}(o.Component),ne=Object(s.b)((function(e){return{auth:e.auth,path:e.path}}),{getPath:function(e){return{type:B,payload:e}}})(Object(j.e)(te)),ae=n(248),oe=n(247),re=n(111),ce=function(e){var t=e.label,n=e.options,a=e.selected,r=e.onSelectedClick,c=Object(o.useState)(!1),i=Object(re.a)(c,2),s=i[0],l=i[1],u=Object(o.useRef)();Object(o.useEffect)((function(){var e=function(e){u.current&&u.current.contains(e.target)||l(!1)};return document.body.addEventListener("click",e,{capture:!0}),function(){document.body.removeEventListener("click",e,{capture:!0})}}),[]);var d=n.map((function(e){return a.value===e.value?null:Object(Z.jsx)("div",{className:"item",onClick:function(){return r(e)},children:e.label},e.value)}));return Object(Z.jsx)("div",{ref:u,className:"ui form",children:Object(Z.jsxs)("div",{className:"field",children:[Object(Z.jsxs)("label",{className:"label",children:["select a ",t," "]}),Object(Z.jsxs)("div",{onClick:function(){l(!s)},className:"ui selection dropdown ".concat(s&&"visible active"),children:[Object(Z.jsx)("i",{className:"dropdown icon"}),Object(Z.jsxs)("div",{className:"text",children:[" ",a.label," "]}),Object(Z.jsx)("div",{className:"menu ".concat(s&&"visible transition"),children:d})]})]})})},ie=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.options,t=e.languages,n=e.filters,a=e.printTypes,o=e.orders,r=e.maxResultNums,c=this.props,i=c.language,s=c.filter,l=c.printType,u=c.order,d=c.maxResultNum,h=c.selectLanguage,b=c.selectFilter,p=c.selectPrintType,j=c.selectOrder,m=c.selectMaxResultNum;return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(ce,{label:"language",options:t,selected:i,onSelectedClick:h}),Object(Z.jsx)(ce,{label:"price filter",options:n,selected:s,onSelectedClick:b}),Object(Z.jsx)(ce,{label:"print type",options:a,selected:l,onSelectedClick:p}),Object(Z.jsx)(ce,{label:"order",options:o,selected:u,onSelectedClick:j}),Object(Z.jsx)(ce,{label:"number of max results",options:r,selected:d,onSelectedClick:m})]})}}]),n}(o.Component),se=Object(s.b)((function(e){return{options:e.options,language:e.selections.LANGUAGE,filter:e.selections.FILTER,printType:e.selections.PRINTTYPE,order:e.selections.ORDER,maxResultNum:e.selections.MAX_RESULT_NUM}}),{selectLanguage:function(e){return{type:D,payload:Object(v.a)({},F,e)}},selectFilter:function(e){return{type:P,payload:Object(v.a)({},G,e)}},selectPrintType:function(e){return{type:M,payload:Object(v.a)({},q,e)}},selectOrder:function(e){return{type:H,payload:Object(v.a)({},K,e)}},selectMaxResultNum:function(e){return{type:U,payload:Object(v.a)({},z,e)}}})(ie),le=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).renderError=function(e){var t=e.error,n=e.touched;if(t&&n)return Object(Z.jsx)("div",{className:"ui error message",children:t})},e.renderInput=function(t){var n=t.input,a=t.label,o=t.meta,r="field".concat(o.touched&&o.error?" error":"");return Object(Z.jsxs)("div",{className:r,children:[Object(Z.jsx)("label",{className:"label",children:a}),Object(Z.jsx)("input",Object(f.a)({},n)),Object(Z.jsx)("div",{children:e.renderError(o)})]})},e.onSubmit=function(t){var n=e.props,a=n.clearBooks,o=n.fetchBooks;t.term&&(a(),o(t))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.fetchBooks,n=e.initialValues,a=e.books,o=e.searchBar;a||t(o?o.values:n.term)}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.filters,a=t.searchBar;e.filters!==n&&a&&this.onSubmit(a.values)}},{key:"render",value:function(){return Object(Z.jsx)("div",{className:"ui container",style:{margin:"10px 10px"},children:Object(Z.jsxs)("div",{ref:this.searchBarRef,className:"ui segment",children:[Object(Z.jsx)("form",{onSubmit:this.props.handleSubmit(this.onSubmit),className:"ui form error",children:Object(Z.jsx)(ae.a,{name:"term",component:this.renderInput,label:"Search"})}),Object(Z.jsx)(se,{}),Object(Z.jsx)("br",{}),Object(Z.jsx)("div",{className:"actions",children:Object(Z.jsx)("button",{className:"ui button primary",onClick:this.props.handleSubmit(this.onSubmit),children:"search"})})]})})}}]),n}(o.Component),ue=Object(oe.a)({form:"searchBar",validate:function(e){var t={};return e.term||(t.term="Please enter a search term!"),t}})(le),de=Object(s.b)((function(e){return{books:e.books,filters:e.selections,searchBar:e.form.searchBar}}),{fetchBooks:Y,clearBooks:function(){return{type:E}}})(ue),he=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={imgHeight:null,headerHeight:null},a.setHeights=function(){var e=Math.ceil(1.3*a.imgRef.current.clientWidth);a.setState({imgHeight:e});var t=Math.ceil(.26*a.headerRef.current.clientWidth);a.setState({headerHeight:t})},a.renderAuthors=function(e){var t=e.authors,n=t||"N/A";return Object(Z.jsxs)("div",{className:"description",style:{marginBottom:"auto"},children:[Object(Z.jsx)("i",{className:"users icon"}),Object(Z.jsx)("span",{children:n})]})},a.renderRetailprice=function(e){var t=e.retailPrice,n=e.saleability;return Object(Z.jsxs)("div",{className:"description",style:{marginTop:"auto",paddingTop:"1rem",marginBottom:"1rem"},children:[Object(Z.jsx)("i",{className:"money bill alternate icon"}),Object(Z.jsx)("span",{children:t?t.currencyCode+" "+t.amount:n})]})},a.imgRef=r.a.createRef(),a.headerRef=r.a.createRef(),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.bookInfo.volumeInfo&&(this.imgRef.current.addEventListener("load",this.setHeights),window.addEventListener("resize",this.setHeights))}},{key:"componentWillUnmount",value:function(){this.props.bookInfo.volumeInfo&&(this.imgRef.current.removeEventListener("load",this.setHeights),window.removeEventListener("resize",this.setHeights))}},{key:"render",value:function(){var e="/".concat(this.props.bookInfo.id),t="/"===window.location.pathname?e:window.location.pathname+e,n=this.props.bookInfo,a=n.volumeInfo,o=n.saleInfo;return a?Object(Z.jsxs)("div",{className:"card",children:[Object(Z.jsx)("div",{className:"image",children:Object(Z.jsx)("img",{ref:this.imgRef,src:a.imageLinks?a.imageLinks.thumbnail:"/img/square-image.png",alt:a.title,style:{height:"".concat(this.state.imgHeight,"px")}})}),Object(Z.jsxs)("div",{className:"content",style:{display:"flex",flexDirection:"column"},children:[Object(Z.jsx)("div",{ref:this.headerRef,className:"header",id:"card-header",style:{height:"".concat(this.state.headerHeight,"px")},children:a.title}),this.renderAuthors(a),Object(Z.jsx)("br",{}),this.renderRetailprice(o)]}),Object(Z.jsx)(m.a,{to:t,className:"ui bottom attached button primary",children:"See details"})]}):Object(Z.jsx)("div",{children:"cant render this volume"})}}]),n}(o.Component),be=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={cardNum:null},e.updateCardNum=function(){var t="two",n=window.innerWidth;n>700&&n<1e3?t="three":n>=1e3?t="five":n<450&&(t="one"),e.setState({cardNum:t})},e.renderResult=function(e){if(e){var t=0===e.length?"no books found":e.length+"items found ";return Object(Z.jsx)("h2",{className:"label",children:t})}return Object(Z.jsx)("h2",{className:"label",children:"Loading..."})},e.renderBookRows=function(e){if(e){if(e.length>1)return e.map((function(e){return Object(Z.jsx)(he,{bookInfo:e},e.id)}));if(1===e.length)return Object(Z.jsx)(he,{bookInfo:e[0]},e[0].id)}},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){console.log(this.updateCardNum()),window.addEventListener("resize",this.updateCardNum)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateCardNum)}},{key:"render",value:function(){var e=this.props.books;return Object(Z.jsxs)("div",{className:"ui container",id:"mt-2",children:[this.renderResult(e),Object(Z.jsx)("div",{className:"ui ".concat(this.state.cardNum," cards"),children:this.renderBookRows(e)})]})}}]),n}(o.Component),pe=be,je=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(Z.jsxs)("div",{children:[Object(Z.jsx)(de,{initialValues:{term:"apple"}}),this.props.books&&Object(Z.jsx)(pe,{books:Object.values(this.props.books),pathname:this.props.match.url})]})}}]),n}(o.Component),me=Object(s.b)((function(e){return{books:e.books}}),{fetchBooks:Y})(je),ve=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchSavedBooks()}},{key:"render",value:function(){return Object(Z.jsxs)("div",{children:[Object(Z.jsx)("div",{className:"ui container",children:Object(Z.jsx)("h1",{children:" Shelf "})}),this.props.books&&Object(Z.jsx)(pe,{books:Object.values(this.props.books),pathname:this.props.match.url})]})}}]),n}(o.Component),fe=Object(s.b)((function(e){return{books:e.bookshelf}}),{fetchSavedBooks:Q})(ve),Oe=(n(245),document.querySelector("#modal")),ke=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).ourModalDiv=document.createElement("div"),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){Oe.appendChild(this.ourModalDiv)}},{key:"componentWillUnmount",value:function(){Oe.removeChild(this.ourModalDiv)}},{key:"render",value:function(){return i.a.createPortal(Object(Z.jsx)("div",{onClick:this.props.onClick,className:"ui dimmer modals visible active",id:"modal-background",children:Object(Z.jsx)("div",{onClick:function(e){return e.stopPropagation()},className:"ui modal visible active",id:"modal-wrapper",children:this.props.children})}),this.ourModalDiv)}}]),n}(o.Component),ge=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).setClampNum=function(e){console.log(e.clientHeight)},a.renderRetailprice=function(e){var t=e.retailPrice,n=e.saleability;return Object(Z.jsxs)("div",{className:"description",id:"retail-price",children:[Object(Z.jsx)("i",{className:"money bill alternate icon"}),Object(Z.jsx)("span",{children:t?t.currencyCode+" "+t.amount:n})]})},a.renderAdmin=function(){var e=a.props,t=e.auth,n=e.book,o=e.onClick,r=e.isSavable;return t.isSignedIn&&r?Object(Z.jsx)("button",{onClick:function(){return o(n,t.userId)},className:"ui negative button",children:"Save to Bookshelf"}):window.location.pathname.includes("bookshelf")?Object(Z.jsx)("button",{onClick:function(){return o(n.id,t.userId)},className:"ui negative button",children:"Delete from Bookshelf"}):null},a.descRef=r.a.createRef(),a.state={clampNum:0},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){console.log(this.descRef.current),this.setClampNum(this.descRef.current)}},{key:"render",value:function(){console.log(this.state);var e=this.props.book.volumeInfo;if(this.props.book)return Object(Z.jsx)(Z.Fragment,{children:Object(Z.jsxs)(ke,{children:[Object(Z.jsx)("div",{className:"header",children:e.title}),Object(Z.jsxs)("div",{className:"ui container",id:"modal-container",children:[Object(Z.jsx)("div",{className:"image",id:"modal-image",children:Object(Z.jsx)("img",{className:"big-thumbnail",src:e.imageLinks?e.imageLinks.thumbnail:"/img/square-image.png",alt:e.title})}),Object(Z.jsxs)("div",{className:"content",id:"modal-content",children:[Object(Z.jsxs)("p",{className:"description",id:"modal-description",children:[Object(Z.jsx)("i",{className:"file alternate icon"}),e.description?e.description:"N/A"]}),Object(Z.jsxs)("div",{className:"description",id:"authors",ref:this.descRef,children:[Object(Z.jsx)("i",{className:"users icon"}),Object(Z.jsx)("span",{children:e.authors?e.authors:"N/A"})]})]})]}),Object(Z.jsxs)("div",{className:"actions",id:"modal-actions",children:[Object(Z.jsx)("a",{className:"ui primary button",href:e.previewLink,children:"preview on GoogleBooks"}),this.renderAdmin(),Object(Z.jsx)(m.a,{to:this.props.match.url.replace("/".concat(this.props.match.params.volumeId),""),className:"ui button",children:"Go Back"})]})]})})}}]),n}(o.Component),xe=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).onClick=function(t,n){e.props.bookToCheck?alert("this books is already in your bookshelf!"):e.props.saveBook(t,n)},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.match;(0,e.fetchBook)(t.params.volumeId),this.props.fetchSavedBooks()}},{key:"render",value:function(){var e=this.props,t=e.book,n=e.auth,a=e.match,o=!this.props.bookToCheck;return Object(Z.jsx)(Z.Fragment,{children:t&&Object(Z.jsx)(ge,{onClick:this.onClick,book:t,auth:n,match:a,isSavable:o})})}}]),n}(o.Component),ye=Object(s.b)((function(e,t){return{book:e.book,bookToCheck:e.bookshelf&&e.bookshelf[t.match.params.volumeId],auth:e.auth}}),{fetchBook:function(e){return function(){var t=Object(O.a)(g.a.mark((function t(n){var a,o;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.get("/volumes/".concat(e));case 2:a=t.sent,o=a.data,n({type:C,payload:o});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},fetchSavedBooks:Q,saveBook:function(e,t){return function(){var n=Object(O.a)(g.a.mark((function n(a){var o,r;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,X.post("",Object(f.a)({userId:t},e));case 2:o=n.sent,r=o.data,a({type:_,payload:r}),J.push("/");case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(xe),Ne=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.match,n=e.fetchSavedBook,a=e.auth;n(t.params.volumeId,a.userId)}},{key:"render",value:function(){console.log(this.props);var e=this.props,t=e.book,n=e.auth,a=e.match;return Object(Z.jsx)(Z.Fragment,{children:t&&Object(Z.jsx)(ge,{onClick:this.props.deleteSavedBook,book:t,auth:n,match:a})})}}]),n}(o.Component),Se=Object(s.b)((function(e){return{book:e.savedBook,auth:e.auth,currentPath:e.path}}),{fetchSavedBook:function(e,t){return function(){var n=Object(O.a)(g.a.mark((function n(a){var o,r;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,X.get("/".concat(e));case 2:o=n.sent,(r=o.data).userId===t?a({type:T,payload:r}):console.log("this is not your book");case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},deleteSavedBook:function(e,t){return function(){var n=Object(O.a)(g.a.mark((function n(a){return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,X.delete("/".concat(e));case 2:a({type:A,payload:e}),console.log("deleted from the Redux"),J.push("/bookshelf/".concat(t));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(Ne),Ce=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(Z.jsx)("div",{children:Object(Z.jsxs)(j.b,{history:J,children:[Object(Z.jsx)(ne,{},window.location.pathname),Object(Z.jsx)(j.a,{exact:!0,path:"/",component:me}),Object(Z.jsx)(j.a,{exact:!0,path:"/:volumeId",component:ye}),Object(Z.jsx)(j.a,{exact:!0,path:"/bookshelf/:userId",component:fe}),Object(Z.jsx)(j.a,{exact:!0,path:"/bookshelf/:userId/:volumeId",component:Se})]})})}}]),n}(o.Component),Ee=Object(s.b)(null)(Ce),we=n(249),Ie={isSignedIn:null,userId:null},Re=n(44),Te=n.n(Re),_e=function(){return{languages:[{label:"English",value:"en"},{label:"Japanese",value:"ja"},{label:"French",value:"fr"},{label:"Chinese",value:"ch"},{label:"Spanish",value:"sp"},{label:"Arabic",value:"ar"}],filters:[{label:"All e-books",value:"ebooks"},{label:"Free books",value:"free-ebooks"},{label:"Paid books",value:"paid-ebooks"}],printTypes:[{label:"All",value:"all"},{label:"Books",value:"books"},{label:"Magazines",value:"magazines"}],orders:[{label:"Most Relevant",value:"relevance"},{label:"Newest",value:"newest"}],maxResultNums:[{label:"10",value:10},{label:"20",value:20},{label:"30",value:30},{label:"40",value:40}]}},Ae={languages:[{label:"English",value:"en"},{label:"Japanese",value:"ja"},{label:"French",value:"fr"},{label:"Chinese",value:"ch"},{label:"Spanish",value:"sp"},{label:"Arabic",value:"ar"}],filters:[{label:"All e-books",value:"ebooks"},{label:"Free books",value:"free-ebooks"},{label:"Paid books",value:"paid-ebooks"}],printTypes:[{label:"All",value:"all"},{label:"Books",value:"books"},{label:"Magazines",value:"magazines"}],orders:[{label:"Most Relevant",value:"relevance"},{label:"Newest",value:"newest"}],maxResultNums:[{label:"10",value:10},{label:"20",value:20},{label:"30",value:30},{label:"40",value:40}]},Be=Ae.languages,Le=Ae.filters,De=Ae.printTypes,Pe=Ae.orders,Me=Ae.maxResultNums,He=(a={},Object(v.a)(a,K,Pe[0]),Object(v.a)(a,z,Me[0]),Object(v.a)(a,F,Be[0]),Object(v.a)(a,G,Le[0]),Object(v.a)(a,q,De[0]),a),Ue=Object(l.c)({options:_e,selections:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:case P:case M:case H:case U:return Object(f.a)(Object(f.a)({},e),t.payload);default:return e}},form:we.a,books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(f.a)(Object(f.a)({},e),Te.a.mapKeys(t.payload,"id"));case E:return null;default:return e}},book:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return t.type===C?t.payload:e},bookshelf:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Te.a.mapKeys(t.payload,"id");case _:return Object(f.a)(Object(f.a)({},e),{},Object(v.a)({},t.payload.id,t.payload));case A:return Te.a.omit(e,t.payload);default:return e}},savedBook:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return t.type===T?t.payload:e},path:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",t=arguments.length>1?arguments[1]:void 0;return t.type===B?t.payload:e},height:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===L?(console.log(t.payload),t.payload):e},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(f.a)(Object(f.a)({},e),{},{isSignedIn:!0,userId:t.payload});case I:return Object(f.a)(Object(f.a)({},e),{},{isSignedIn:!1,userId:null});default:return e}}}),Fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,Ke=Object(l.e)(Ue,Fe(Object(l.a)(u.a)));i.a.render(Object(Z.jsxs)(s.a,{store:Ke,children:[" ",Object(Z.jsx)(Ee,{})," "]}),document.querySelector("#root"))}},[[246,1,2]]]);
//# sourceMappingURL=main.d765b520.chunk.js.map