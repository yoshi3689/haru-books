(this["webpackJsonpoverhaul-book-app"]=this["webpackJsonpoverhaul-book-app"]||[]).push([[0],{245:function(e,t,n){},246:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),i=n(34),c=n.n(i),s=n(12),l=n(14),u=n(110),d=n(8),h=n(9),b=n(10),p=n(11),j=n(13),m=n(32),v=n(17),f=n(6),O=n(26),g=n(15),k=n.n(g),x=n(40),y=n.n(x),N=y.a.create({baseURL:"https://www.googleapis.com/books/v1"}),w="FETCH_BOOKS",S="FETCH_BOOK",E="CLEAR_BOOKS",C="SIGN_IN",I="SIGN_OUT",R="FETCH_SAVED_BOOKS",T="FETCH_SAVED_BOOK",_="SAVE_BOOK",A="DELETE_SAVED_BOOK",L="GET_PATH",B="GET_HEIGHT",D="LANG_SELECTED",P="FILTER_SELECTED",M="PRINTTYPE_SELECTED",U="ORDER_SELECTED",H="MAX_RESULT_NUM_SELECTED",F="LANGUAGE",K="ORDER",W="FILTER",G="MAX_RESULT_NUM",z="PRINTTYPE",q=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BOOKS_API_KEY:"AIzaSyAjk1_X0XmKDDSKdLgyEimUR5Ltqp3-kkI",REACT_APP_OAUTH_CLIENT_ID:"205159397556-6uh967scbo9n6bqtg4pmo4h3jp106hf2.apps.googleusercontent.com",REACT_APP_MONGODB_URI:"mongodb+srv://yoshi:1234@cluster0.yhgyt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"}).PORT||3002,X=y.a.create({baseURL:"http://localhost:".concat(q,"/bookshelf")}),V=(y.a.create({baseURL:"http://localhost:".concat(q,"/users")}),n(18)),J=Object(V.a)(),Y=function(e){return function(){var t=Object(O.a)(k.a.mark((function t(n,a){var r,o,i;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Object.values(a().selections),t.next=3,N.get("/volumes?",{params:{q:e,orderBy:r[0].value,maxResults:r[1].value,langRestrict:r[2].value,filter:r[3].value,printType:r[4].value,download:"epub",key:"AIzaSyAjk1_X0XmKDDSKdLgyEimUR5Ltqp3-kkI"}});case 3:o=t.sent,i=o.data,n({type:w,payload:i.items});case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},Q=function(e){return function(){var t=Object(O.a)(k.a.mark((function t(n){var a,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=6;break}return t.next=3,X.get(e);case 3:a=t.sent,r=a.data,n({type:R,payload:r.data});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Z=n(1),$=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onAuthChange=function(t){var n=e.props,a=n.signIn,r=n.signOut;t?a(e.auth.currentUser.get().getId()):r()},e.onSignInClick=function(){e.auth.signIn()},e.onSignOutClick=function(){e.auth.signOut(),window.location.replace("/")},e.renderAuthButton=function(){var t=e.props.isSignedIn;if(null===t)return null;var n=t?{text:"sign out",handler:e.onSignOutClick}:{text:"sign in",handler:e.onSignInClick};return Object(Z.jsxs)("button",{onClick:n.handler,className:"ui google plus button",children:[Object(Z.jsx)("i",{className:"google icon"}),n.text]})},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"205159397556-6uh967scbo9n6bqtg4pmo4h3jp106hf2.apps.googleusercontent.com",scope:"email"}).then((function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)}))}))}},{key:"render",value:function(){return Object(Z.jsx)(Z.Fragment,{children:this.renderAuthButton()})}}]),n}(r.Component),ee=Object(s.b)((function(e){return{isSignedIn:e.auth.isSignedIn}}),{signIn:function(e){return{type:C,payload:e}},signOut:function(){return{type:I}}})($),te=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getPath=function(){e.props.getPath(window.location.pathname)},e.onLocationChange=function(){var t=e.props.auth,n=t.isSignedIn,a=t.userId,r=n&&"/"===window.location.pathname?{link:"/bookshelf/".concat(a),btnTxt:"Bookshelf"}:{link:"/",btnTxt:"Home"};return Object(Z.jsx)("div",{className:"item",children:Object(Z.jsx)(m.a,{to:r.link,className:"ui button",children:r.btnTxt})})},e.renderMenu=function(){return e.props.width>767?Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)("div",{className:"item"}),Object(Z.jsx)("div",{className:"item",children:Object(Z.jsx)(ee,{})}),e.onLocationChange()]}):Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)("div",{style:{margin:"0 auto"}}),Object(Z.jsxs)("div",{className:"ui simple dropdown icon item",children:[Object(Z.jsx)("i",{className:"wrench icon"}),Object(Z.jsxs)("div",{className:"menu",children:[Object(Z.jsx)("div",{className:"item",children:Object(Z.jsx)(ee,{})}),e.onLocationChange()]})]})]})},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getPath(),this.onLocationChange()}},{key:"componentDidUpdate",value:function(e){this.getPath(),e.path!==window.location.pathname&&this.onLocationChange()}},{key:"render",value:function(){return Object(Z.jsx)("div",{className:"ui",children:Object(Z.jsxs)("div",{className:"ui top attached menu",children:[this.renderMenu(),Object(Z.jsx)("div",{className:"ui container",children:Object(Z.jsx)("h2",{style:{marginTop:"0.5rem",marginLeft:"auto",marginRight:"3rem"},children:"Haru Books"})})]})})}}]),n}(r.Component),ne=Object(s.b)((function(e){return{auth:e.auth,path:e.path}}),{getPath:function(e){return{type:L,payload:e}}})(Object(j.e)(te)),ae=n(248),re=n(247),oe=n(111),ie=function(e){var t=e.label,n=e.options,a=e.selected,o=e.onSelectedClick,i=Object(r.useState)(!1),c=Object(oe.a)(i,2),s=c[0],l=c[1],u=Object(r.useRef)();Object(r.useEffect)((function(){var e=function(e){u.current&&u.current.contains(e.target)||l(!1)};return document.body.addEventListener("click",e,{capture:!0}),function(){document.body.removeEventListener("click",e,{capture:!0})}}),[]);var d=n.map((function(e){return a.value===e.value?null:Object(Z.jsx)("div",{className:"item",onClick:function(){return o(e)},children:e.label},e.value)}));return Object(Z.jsx)("div",{ref:u,className:"ui form",children:Object(Z.jsxs)("div",{className:"field",children:[Object(Z.jsxs)("label",{className:"label",children:["select a ",t," "]}),Object(Z.jsxs)("div",{onClick:function(){l(!s)},className:"ui selection dropdown ".concat(s&&"visible active"),children:[Object(Z.jsx)("i",{className:"dropdown icon"}),Object(Z.jsxs)("div",{className:"text",children:[" ",a.label," "]}),Object(Z.jsx)("div",{className:"menu ".concat(s&&"visible transition"),children:d})]})]})})},ce=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.options,t=e.languages,n=e.filters,a=e.printTypes,r=e.orders,o=e.maxResultNums,i=this.props,c=i.language,s=i.filter,l=i.printType,u=i.order,d=i.maxResultNum,h=i.selectLanguage,b=i.selectFilter,p=i.selectPrintType,j=i.selectOrder,m=i.selectMaxResultNum;return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(ie,{label:"language",options:t,selected:c,onSelectedClick:h}),Object(Z.jsx)(ie,{label:"price filter",options:n,selected:s,onSelectedClick:b}),Object(Z.jsx)(ie,{label:"print type",options:a,selected:l,onSelectedClick:p}),Object(Z.jsx)(ie,{label:"order",options:r,selected:u,onSelectedClick:j}),Object(Z.jsx)(ie,{label:"number of max results",options:o,selected:d,onSelectedClick:m})]})}}]),n}(r.Component),se=Object(s.b)((function(e){return{options:e.options,language:e.selections.LANGUAGE,filter:e.selections.FILTER,printType:e.selections.PRINTTYPE,order:e.selections.ORDER,maxResultNum:e.selections.MAX_RESULT_NUM}}),{selectLanguage:function(e){return{type:D,payload:Object(v.a)({},F,e)}},selectFilter:function(e){return{type:P,payload:Object(v.a)({},W,e)}},selectPrintType:function(e){return{type:M,payload:Object(v.a)({},z,e)}},selectOrder:function(e){return{type:U,payload:Object(v.a)({},K,e)}},selectMaxResultNum:function(e){return{type:H,payload:Object(v.a)({},G,e)}}})(ce),le=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).renderError=function(e){var t=e.error,n=e.touched;if(t&&n)return Object(Z.jsx)("div",{className:"ui error message",children:t})},e.renderInput=function(t){var n=t.input,a=t.label,r=t.meta,o="field".concat(r.touched&&r.error?" error":"");return Object(Z.jsxs)("div",{className:o,children:[Object(Z.jsx)("label",{className:"label",children:a}),Object(Z.jsx)("input",Object(f.a)({},n)),Object(Z.jsx)("div",{children:e.renderError(r)})]})},e.onSubmit=function(t){var n=e.props,a=n.clearBooks,r=n.fetchBooks;t.term&&(a(),r(t))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.fetchBooks,n=e.initialValues,a=e.books,r=e.searchBar;a||t(r?r.values:n.term)}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.filters,a=t.searchBar;e.filters!==n&&a&&this.onSubmit(a.values)}},{key:"render",value:function(){return Object(Z.jsx)("div",{className:"ui container",style:{margin:"10px 10px"},children:Object(Z.jsxs)("div",{ref:this.searchBarRef,className:"ui segment",children:[Object(Z.jsx)("form",{onSubmit:this.props.handleSubmit(this.onSubmit),className:"ui form error",children:Object(Z.jsx)(ae.a,{name:"term",component:this.renderInput,label:"Search"})}),Object(Z.jsx)(se,{}),Object(Z.jsx)("br",{}),Object(Z.jsx)("div",{className:"actions",children:Object(Z.jsx)("button",{className:"ui button primary",onClick:this.props.handleSubmit(this.onSubmit),children:"search"})})]})})}}]),n}(r.Component),ue=Object(re.a)({form:"searchBar",validate:function(e){var t={};return e.term||(t.term="Please enter a search term!"),t}})(le),de=Object(s.b)((function(e){return{books:e.books,filters:e.selections,searchBar:e.form.searchBar}}),{fetchBooks:Y,clearBooks:function(){return{type:E}}})(ue),he=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={imgHeight:null,headerHeight:null},a.setHeights=function(){var e=Math.ceil(1.3*a.imgRef.current.clientWidth);a.setState({imgHeight:e});var t=Math.ceil(.26*a.headerRef.current.clientWidth);a.setState({headerHeight:t})},a.renderAuthors=function(e){var t=e.authors,n=t||"N/A";return Object(Z.jsxs)("div",{className:"description",style:{marginBottom:"auto"},children:[Object(Z.jsx)("i",{className:"users icon"}),Object(Z.jsx)("span",{children:n})]})},a.renderRetailPrice=function(e){var t=e.retailPrice,n=e.saleability;return Object(Z.jsxs)("div",{className:"description",style:{marginTop:"auto",paddingTop:"1rem",marginBottom:"1rem"},children:["imageLinks",Object(Z.jsx)("i",{className:"money bill alternate icon"}),Object(Z.jsx)("span",{children:t?t.currencyCode+" "+t.amount:n})]})},a.imgRef=o.a.createRef(),a.headerRef=o.a.createRef(),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.bookInfo.volumeInfo&&(this.imgRef.current.addEventListener("load",this.setHeights),window.addEventListener("resize",this.setHeights))}},{key:"componentWillUnmount",value:function(){this.props.bookInfo.volumeInfo&&(this.imgRef.current.removeEventListener("load",this.setHeights),window.removeEventListener("resize",this.setHeights))}},{key:"render",value:function(){var e="/".concat(this.props.bookInfo.id),t="/"===window.location.pathname?e:window.location.pathname+e,n=this.props.bookInfo,a=n.volumeInfo,r=n.saleInfo;return a?Object(Z.jsxs)("div",{className:"card",children:[Object(Z.jsx)("div",{className:"image",children:Object(Z.jsx)("img",{ref:this.imgRef,src:a.imageLinks?a.imageLinks.thumbnail:"/img/square-image.png",alt:a.title,style:{height:"".concat(this.state.imgHeight,"px")}})}),Object(Z.jsxs)("div",{className:"content",style:{display:"flex",flexDirection:"column"},children:[Object(Z.jsx)("div",{ref:this.headerRef,className:"header",id:"card-header",style:{height:"".concat(this.state.headerHeight,"px")},children:a.title}),this.renderAuthors(a),Object(Z.jsx)("br",{}),this.renderRetailPrice(r)]}),Object(Z.jsx)(m.a,{to:t,className:"ui bottom attached button primary",children:"See details"})]}):Object(Z.jsx)("div",{children:"cant render this volume"})}}]),n}(r.Component),be=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={cardNum:"two"},e.updateCardNum=function(){var t="two",n=window.innerWidth;n>700&&n<1e3?t="three":n>=1e3?t="five":n<450&&(t="one"),e.setState({cardNum:t})},e.renderResult=function(e){if(e){var t=0===e.length?"no books found":e.length+"items found ";return Object(Z.jsx)("h2",{className:"label",children:t})}return Object(Z.jsx)("h2",{className:"label",children:"Loading..."})},e.renderBookRows=function(e){if(e){if(e.length>1)return e.map((function(e){return Object(Z.jsx)(he,{bookInfo:e},e.id)}));if(1===e.length)return Object(Z.jsx)(he,{bookInfo:e[0]},e[0].id)}},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateCardNum)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateCardNum)}},{key:"render",value:function(){var e=this.props.books;return Object(Z.jsxs)("div",{className:"ui container",children:[this.renderResult(e),Object(Z.jsx)("div",{className:"ui ".concat(this.state.cardNum," cards"),children:this.renderBookRows(e)})]})}}]),n}(r.Component),pe=be,je=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(Z.jsxs)("div",{children:[Object(Z.jsx)(de,{initialValues:{term:"apple"}}),this.props.books&&Object(Z.jsx)(pe,{books:Object.values(this.props.books),pathname:this.props.match.url,width:this.props.width})]})}}]),n}(r.Component),me=Object(s.b)((function(e){return{books:e.books}}),{fetchBooks:Y})(je),ve=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchSavedBooks(this.props.match.params.userId)}},{key:"render",value:function(){return Object(Z.jsx)("div",{className:"ui container",children:this.props.books&&Object(Z.jsx)(pe,{books:Object.values(this.props.books),pathname:this.props.match.url})})}}]),n}(r.Component),fe=Object(s.b)((function(e){return{books:e.bookshelf}}),{fetchSavedBooks:Q})(ve),Oe=(n(245),document.querySelector("#modal")),ge=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).ourModalDiv=document.createElement("div"),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){Oe.appendChild(this.ourModalDiv)}},{key:"componentWillUnmount",value:function(){Oe.removeChild(this.ourModalDiv)}},{key:"render",value:function(){return c.a.createPortal(Object(Z.jsx)("div",{onClick:this.props.onClick,className:"ui dimmer modals visible active",id:"modal-background",children:Object(Z.jsx)("div",{onClick:function(e){return e.stopPropagation()},className:"ui modal visible active",id:"modal-wrapper",children:this.props.children})}),this.ourModalDiv)}}]),n}(r.Component),ke=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).renderRetailprice=function(e){var t=e.retailPrice,n=e.saleability;return Object(Z.jsxs)("div",{className:"description",id:"retail-price",children:[Object(Z.jsx)("i",{className:"money bill alternate icon"}),Object(Z.jsx)("span",{children:t?t.currencyCode+" "+t.amount:n})]})},a.renderAdmin=function(){var e=a.props,t=e.auth,n=e.book,r=e.onClick,o=e.isSavable;return t.isSignedIn&&o?Object(Z.jsx)("button",{onClick:function(){return r(n,t.userId)},className:"ui negative button",children:"Save to Bookshelf"}):window.location.pathname.includes("bookshelf")?Object(Z.jsx)("button",{onClick:function(){return r(n.id,t.userId)},className:"ui negative button",children:"Delete from Bookshelf"}):null},a.descRef=o.a.createRef(),a}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.book.volumeInfo;if(this.props.book)return Object(Z.jsx)(Z.Fragment,{children:Object(Z.jsxs)(ge,{children:[Object(Z.jsx)("div",{className:"header",children:e.title}),Object(Z.jsxs)("div",{className:"ui container",id:"modal-container",children:[Object(Z.jsx)("div",{className:"image",id:"modal-image",children:Object(Z.jsx)("img",{className:"big-thumbnail",src:e.imageLinks?e.imageLinks.thumbnail:"/img/square-image.png",alt:e.title})}),Object(Z.jsxs)("div",{className:"content",id:"modal-content",children:[Object(Z.jsxs)("p",{className:"description",id:"modal-description",children:[Object(Z.jsx)("i",{className:"file alternate icon"}),e.description?e.description:"N/A"]}),Object(Z.jsxs)("div",{className:"description",id:"authors",ref:this.descRef,children:[Object(Z.jsx)("i",{className:"users icon"}),Object(Z.jsx)("span",{children:e.authors?e.authors:"N/A"})]})]})]}),Object(Z.jsxs)("div",{className:"actions",id:"modal-actions",children:[Object(Z.jsx)("a",{className:"ui primary button",href:e.previewLink,children:"preview on GoogleBooks"}),this.renderAdmin(),Object(Z.jsx)(m.a,{to:this.props.match.url.replace("/".concat(this.props.match.params.volumeId),""),className:"ui button",children:"Go Back"})]})]})})}}]),n}(r.Component),xe=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onClick=function(t,n){e.props.bookToCheck?alert("this books is already in your bookshelf!"):e.props.saveBook(t,n)},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.match;(0,e.fetchBook)(t.params.volumeId),this.props.fetchSavedBooks()}},{key:"render",value:function(){var e=this.props,t=e.book,n=e.auth,a=e.match,r=!this.props.bookToCheck;return Object(Z.jsx)(Z.Fragment,{children:t&&Object(Z.jsx)(ke,{onClick:this.onClick,book:t,auth:n,match:a,isSavable:r})})}}]),n}(r.Component),ye=Object(s.b)((function(e,t){return{book:e.book,bookToCheck:e.bookshelf&&e.bookshelf[t.match.params.volumeId],auth:e.auth}}),{fetchBook:function(e){return function(){var t=Object(O.a)(k.a.mark((function t(n){var a,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.get("/volumes/".concat(e));case 2:a=t.sent,r=a.data,n({type:S,payload:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},fetchSavedBooks:Q,saveBook:function(e,t){return function(){var n=Object(O.a)(k.a.mark((function n(a){var r,o;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,X.post("",{userId:t,id:e.id,saleInfo:{retailPrice:e.saleInfo.retailPrice},volumeInfo:Object(f.a)({},e.volumeInfo)});case 2:r=n.sent,o=r.data,a({type:_,payload:o}),J.push("/");case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(xe),Ne=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.match;(0,e.fetchSavedBook)(t.params.volumeId,t.params.userId)}},{key:"render",value:function(){var e=this.props,t=e.book,n=e.auth,a=e.match;return Object(Z.jsx)(Z.Fragment,{children:t&&Object(Z.jsx)(ke,{onClick:this.props.deleteSavedBook,book:t,auth:n,match:a})})}}]),n}(r.Component),we=Object(s.b)((function(e){return{book:e.savedBook,auth:e.auth,currentPath:e.path}}),{fetchSavedBook:function(e,t){return function(){var n=Object(O.a)(k.a.mark((function n(a){var r,o;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,X.get("/".concat(t,"/").concat(e));case 2:r=n.sent,(o=r.data).data.userId===t&&a({type:T,payload:o.data});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},deleteSavedBook:function(e,t){return function(){var n=Object(O.a)(k.a.mark((function n(a){return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,X.delete("/".concat(t,"/").concat(e));case 2:a({type:A,payload:e}),J.push("/bookshelf/".concat(t));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(Ne),Se=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={width:window.innerWidth},e.getWidth=function(){var t=window.innerWidth;e.setState({width:t})},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.getWidth)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.getWidth)}},{key:"render",value:function(){return Object(Z.jsx)("div",{children:Object(Z.jsxs)(j.b,{history:J,children:[Object(Z.jsx)(ne,{width:this.state.width},window.location.pathname),Object(Z.jsx)(j.a,{exact:!0,path:"/",component:me}),Object(Z.jsx)(j.a,{exact:!0,path:"/:volumeId",component:ye}),Object(Z.jsx)(j.a,{exact:!0,path:"/bookshelf/:userId",component:fe}),Object(Z.jsx)(j.a,{exact:!0,path:"/bookshelf/:userId/:volumeId",component:we})]})})}}]),n}(r.Component),Ee=Object(s.b)(null)(Se),Ce=n(249),Ie={isSignedIn:null,userId:null},Re=n(44),Te=n.n(Re),_e=function(){return{languages:[{label:"English",value:"en"},{label:"Japanese",value:"ja"},{label:"French",value:"fr"},{label:"Chinese",value:"ch"},{label:"Spanish",value:"sp"},{label:"Arabic",value:"ar"}],filters:[{label:"All e-books",value:"ebooks"},{label:"Free books",value:"free-ebooks"},{label:"Paid books",value:"paid-ebooks"}],printTypes:[{label:"All",value:"all"},{label:"Books",value:"books"},{label:"Magazines",value:"magazines"}],orders:[{label:"Most Relevant",value:"relevance"},{label:"Newest",value:"newest"}],maxResultNums:[{label:"10",value:10},{label:"20",value:20},{label:"30",value:30},{label:"40",value:40}]}},Ae={languages:[{label:"English",value:"en"},{label:"Japanese",value:"ja"},{label:"French",value:"fr"},{label:"Chinese",value:"ch"},{label:"Spanish",value:"sp"},{label:"Arabic",value:"ar"}],filters:[{label:"All e-books",value:"ebooks"},{label:"Free books",value:"free-ebooks"},{label:"Paid books",value:"paid-ebooks"}],printTypes:[{label:"All",value:"all"},{label:"Books",value:"books"},{label:"Magazines",value:"magazines"}],orders:[{label:"Most Relevant",value:"relevance"},{label:"Newest",value:"newest"}],maxResultNums:[{label:"10",value:10},{label:"20",value:20},{label:"30",value:30},{label:"40",value:40}]},Le=Ae.languages,Be=Ae.filters,De=Ae.printTypes,Pe=Ae.orders,Me=Ae.maxResultNums,Ue=(a={},Object(v.a)(a,K,Pe[0]),Object(v.a)(a,G,Me[0]),Object(v.a)(a,F,Le[0]),Object(v.a)(a,W,Be[0]),Object(v.a)(a,z,De[0]),a),He=Object(l.c)({options:_e,selections:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:case P:case M:case U:case H:return Object(f.a)(Object(f.a)({},e),t.payload);default:return e}},form:Ce.a,books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(f.a)(Object(f.a)({},e),Te.a.mapKeys(t.payload,"id"));case E:return null;default:return e}},book:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return t.type===S?t.payload:e},bookshelf:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Te.a.mapKeys(t.payload,"id");case _:return Object(f.a)(Object(f.a)({},e),{},Object(v.a)({},t.payload.id,t.payload));case A:return Te.a.omit(e,t.payload);default:return e}},savedBook:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return t.type===T?t.payload:e},path:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",t=arguments.length>1?arguments[1]:void 0;return t.type===L?t.payload:e},height:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===B?t.payload:e},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(f.a)(Object(f.a)({},e),{},{isSignedIn:!0,userId:t.payload});case I:return Object(f.a)(Object(f.a)({},e),{},{isSignedIn:!1,userId:null});default:return e}}}),Fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,Ke=Object(l.e)(He,Fe(Object(l.a)(u.a)));c.a.render(Object(Z.jsxs)(s.a,{store:Ke,children:[" ",Object(Z.jsx)(Ee,{})," "]}),document.querySelector("#root"))}},[[246,1,2]]]);
//# sourceMappingURL=main.c0934cf9.chunk.js.map