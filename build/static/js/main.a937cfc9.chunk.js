(this.webpackJsonpesteem=this.webpackJsonpesteem||[]).push([[0],{207:function(e,a,t){e.exports=t(443)},212:function(e,a,t){},244:function(e,a){},246:function(e,a){},276:function(e,a){},277:function(e,a){},321:function(e,a){},323:function(e,a){},346:function(e,a){},443:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(83),l=t.n(c),s=(t(212),t(42)),o=t(14),i=t(15),m=t(16),u=t(17),d=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).render=function(){return r.a.createElement("div",{className:"container homePageJumbo"},r.a.createElement("h1",null,"About Page"))},t}return Object(u.a)(a,e),a}(r.a.Component),g=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).render=function(){return r.a.createElement("div",{className:"container homePageJumbo"},r.a.createElement("h1",{className:""},"Esteem Game Utility"),r.a.createElement("p",{className:""},"Esteem is a helpful game library for gamers by gamers."))},t}return Object(u.a)(a,e),a}(r.a.Component),h=t(21),p=t(202),b=t.n(p),f=t(203),E=t.n(f),v=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).hamburgerClick=function(){console.log("hamburger click here"),t.setState((function(e){return{dropdownVisible:!e.dropdownVisible}}))},t.render=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement(h.b,{className:"navbar-brand",to:"/"},r.a.createElement("div",{className:"logo font-24"},r.a.createElement("span",null,"eSteem"),r.a.createElement(b.a,{fontSize:"large",className:"pl-5"}))),r.a.createElement("div",{className:"menu-link-div"},r.a.createElement(h.b,{to:"/",className:"menu-bar-link"},"Home"),r.a.createElement(h.b,{to:"/games",className:"menu-bar-link"},"Games"),r.a.createElement(h.b,{to:"/about",className:"menu-bar-link"},"About")),r.a.createElement("div",{className:"login-div"},r.a.createElement(h.b,{to:"/login",className:"menu-bar-link"},"Login")),r.a.createElement("div",{className:"hamburger-button"},r.a.createElement(E.a,{fontSize:"large",className:"pl-5",onClick:function(){return t.hamburgerClick()}}))),r.a.createElement("div",{className:t.state.dropdownVisible?"dropdown-content":"hide"},r.a.createElement(h.b,{to:"/",className:"menu-bar-link"},"Home"),r.a.createElement(h.b,{to:"/games",className:"menu-bar-link"},"Games"),r.a.createElement(h.b,{to:"/about",className:"menu-bar-link"},"About"),r.a.createElement(h.b,{to:"/login",className:"menu-bar-link"},"Login")))},t.state={dropdownVisible:!1},t}return Object(u.a)(a,e),a}(r.a.Component),N=t(47),j=t(41),O=t(71),D=t.n(O),w=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).titleLengthCheck=function(e){return e.length>=21?e.substring(0,21)+"...":e},t.render=function(){return r.a.createElement(h.b,{className:"card-link",to:"gamedetails/"+t.props.propsObj.id},r.a.createElement("div",{className:"gameCard"},r.a.createElement("img",{className:"card-img-top gameCardImg",src:t.props.propsObj.background_image,alt:"Card image cap"}),r.a.createElement("div",{className:"card-header"},t.titleLengthCheck(t.props.propsObj.name)),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-body-item"},r.a.createElement("div",{className:""},r.a.createElement("b",null,"Rating: "),r.a.createElement("span",null,t.props.propsObj.rating))),r.a.createElement("div",{className:"card-body-item"},r.a.createElement("div",{className:""},r.a.createElement("b",null,"Released: "),r.a.createElement("span",null,t.props.propsObj.released))))))},t}return Object(u.a)(a,e),a}(r.a.Component),k=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).onScroll=function(){window.innerHeight+window.scrollY>=document.body.offsetHeight-500&&t.state.gameData.length&&!t.state.loading&&t.state.nextPageUri&&t.requestGames(t.state.nextPageUri)},t.requestGames=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://api.rawg.io/api/games",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";t.setState({loading:!0});var n={uri:e,qs:{page_size:40,search:a},headers:{},json:!0};D()(n).then((function(e){console.log("api call data: ",e),t.setState((function(a){return{gameData:[].concat(Object(N.a)(a.gameData),Object(N.a)(e.results)),nextPageUri:e.next}}))})).then((function(){t.setState({loading:!1})})).catch((function(e){console.log("API call failed ",e)}))},t.gameList=function(){return t.state.gameData&&t.state.gameData?t.state.gameData.map((function(e){return r.a.createElement(w,{key:e.id,propsObj:e})})):r.a.createElement("span",null)},t.formSubmit=function(e){e.preventDefault(),t.setState({gameData:[]}),t.requestGames(void 0,t.state.searchText)},t.searchChanged=function(e){t.setState({searchText:e.target.value})},t.render=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"text-center"},r.a.createElement("form",{onSubmit:t.formSubmit},r.a.createElement("input",{type:"text",className:"search-bar",value:t.state.searchText,onChange:t.searchChanged,placeholder:"Search for a game..."}),r.a.createElement("button",{type:"submit",className:"search-bar-button"},"Search"))),r.a.createElement("div",{className:"card-deck"},t.gameList()),t.state.loading?r.a.createElement("div",{className:"text-center"},r.a.createElement("br",null),r.a.createElement("h2",null,"Loading...")):r.a.createElement("span",null))},t.state={loading:!1,gameData:[],nextPageUri:null,searchText:""},t}return Object(u.a)(a,e),Object(j.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.onScroll,!1),this.requestGames(void 0,void 0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onScroll,!1)}}]),a}(r.a.Component),C=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).render=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:""}))},t}return Object(u.a)(a,e),a}(r.a.Component),y=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).render=function(){return r.a.createElement("div",{className:"container homePageJumbo"},r.a.createElement("h1",null,"You must purchase the Login DLC in order to login!"))},t}return Object(u.a)(a,e),a}(r.a.Component),S=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).render=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"this is the register page!"))},t}return Object(u.a)(a,e),a}(r.a.Component),L=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).getGameDetails=function(){var e={uri:"https://api.rawg.io/api/games/"+t.state.gameId,qs:{},headers:{},json:!0};D()(e).then((function(e){console.log("api call data: ",e),t.setState({gameData:e})})).catch((function(e){console.log("API call failed ",e)}))},t.getScreenshots=function(){var e={uri:"https://api.rawg.io/api/games/"+t.state.gameId+"/screenshots",qs:{},headers:{},json:!0};D()(e).then((function(e){console.log("screenshot api data: ",e),t.setState({screenshots:e.results})})).catch((function(e){console.log("API call failed ",e)}))},t.fetchPlatforms=function(){if(t.state.gameData&&t.state.gameData.platforms){var e=t.state.gameData.platforms.map((function(e){return e.platform.name}));return e.sort((function(e,a){return e.toLowerCase().localeCompare(a.toLowerCase())})),e.map((function(e){return r.a.createElement("li",{key:e},e)}))}},t.fetchGenres=function(){if(t.state.gameData&&t.state.gameData.genres){var e=t.state.gameData.genres.map((function(e){return e.name}));return e.sort((function(e,a){return e.toLowerCase().localeCompare(a.toLowerCase())})),e.map((function(e){return r.a.createElement("li",{key:e},e)}))}},t.fetchDevelopers=function(){if(t.state.gameData&&t.state.gameData.developers){var e=t.state.gameData.developers.map((function(e){return e.name}));return e.sort((function(e,a){return e.toLowerCase().localeCompare(a.toLowerCase())})),e.map((function(e){return r.a.createElement("li",{key:e},e)}))}},t.fetchScreenshots=function(){if(t.state.screenshots&&t.state.screenshots.length>0)return t.state.screenshots.map((function(e){return r.a.createElement("img",{className:"small-details-img",key:e.id,src:e.image})}))},t.render=function(){return r.a.createElement("div",{className:"container homePageJumbo"},r.a.createElement("div",{className:"gameTitle"},t.state.gameData.name),r.a.createElement("div",{className:"columnWrapper"},r.a.createElement("div",{className:"detailsLeftCol"},r.a.createElement("div",{className:"section-heading"},"Rating"),r.a.createElement("div",{className:"horizontal-display"},r.a.createElement("div",null,r.a.createElement("b",null,"Rating:")," ",t.state.gameData.rating),r.a.createElement("div",null,r.a.createElement("b",null,"Ratings Count:")," ",t.state.gameData.ratings_count)),r.a.createElement("div",{className:"section-heading"},"Genres"),r.a.createElement("div",null,r.a.createElement("ul",{className:"content-list"},t.fetchGenres())),r.a.createElement("div",{className:"section-heading"},"Platforms"),r.a.createElement("div",null,r.a.createElement("ul",{className:"content-list"},t.fetchPlatforms())),r.a.createElement("div",{className:"section-heading"},"Developers"),r.a.createElement("div",null,r.a.createElement("ul",{className:"content-list"},t.fetchDevelopers())),r.a.createElement("div",{className:"section-heading"},"Other"),r.a.createElement("div",{className:"horizontal-display"},r.a.createElement("div",null,r.a.createElement("b",null,"Release Date:")," ",t.state.gameData.released),r.a.createElement("div",null,r.a.createElement("b",null,"Website:")," ",r.a.createElement("a",{href:t.state.gameData.website},"Game Site"))),r.a.createElement("div",{className:"section-heading"},"Description"),t.state.gameData.description_raw),r.a.createElement("div",{className:"detailsRightCol"},r.a.createElement("img",{className:"details-img",src:t.state.gameData.background_image}),t.state.gameData.background_image_additional?r.a.createElement("img",{className:"details-img ",src:t.state.gameData.background_image_additional}):r.a.createElement("span",null),r.a.createElement("div",{className:"small-image-wrapper"},t.fetchScreenshots()))))},t.state={gameId:t.props.location.pathname.substring(13),gameData:[],screenshots:[]},t}return Object(u.a)(a,e),Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getGameDetails(),this.getScreenshots()}}]),a}(r.a.Component);var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:g}),r.a.createElement(s.a,{path:"/about",component:d}),r.a.createElement(s.a,{path:"/games",component:k}),r.a.createElement(s.a,{path:"/login",component:y}),r.a.createElement(s.a,{path:"/register",component:S}),r.a.createElement(s.a,{path:"/gamedetails",component:L})),r.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=t(205),A=t(54),G="ADD_TODO";var _=Object(A.b)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case G:return[].concat(Object(N.a)(e),[{text:a.text,completed:!1}]);default:return e}}}),I=Object(A.c)(_);l.a.render(r.a.createElement(P.a,{store:I},r.a.createElement(h.a,null,r.a.createElement(x,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[207,1,2]]]);
//# sourceMappingURL=main.a937cfc9.chunk.js.map