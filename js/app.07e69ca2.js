(function(t){function e(e){for(var i,n,s=e[0],r=e[1],l=e[2],u=0,b=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&b.push(c[n][0]),c[n]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);d&&d(e);while(b.length)b.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],i=!0,s=1;s<o.length;s++){var r=o[s];0!==c[r]&&(i=!1)}i&&(a.splice(e--,1),t=n(n.s=o[0]))}return t}var i={},c={app:0},a=[];function n(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=i,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/mix-it-app/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=r;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0a3a":function(t,e,o){},"0c05":function(t,e,o){},"0c59":function(t,e,o){},1410:function(t,e,o){"use strict";o("a0b9")},"14e3":function(t,e,o){"use strict";o("442f")},2372:function(t,e,o){"use strict";o("e170")},"32b0":function(t,e,o){"use strict";o("6423")},"3d7e":function(t,e,o){"use strict";o("0a3a")},"442f":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);var i=o("7a23");function c(t,e,o,c,a,n){const s=Object(i["C"])("the-header"),r=Object(i["C"])("age-gate"),l=Object(i["C"])("router-view");return Object(i["u"])(),Object(i["h"])(i["a"],null,[Object(i["k"])(s,{adult:a.isAdult},null,8,["adult"]),Object(i["k"])(r,{show:a.ageGateOpen,onAllowNavigation:n.allowNavigation,onRestrictedNavigation:n.restrictedNavigation},null,8,["show","onAllowNavigation","onRestrictedNavigation"]),Object(i["k"])(l,null,{default:Object(i["J"])(t=>[Object(i["k"])(i["c"],{name:"route",mode:"out-in"},{default:Object(i["J"])(()=>[(Object(i["u"])(),Object(i["f"])(Object(i["D"])(t.Component),{adult:a.isAdult,onOpenDialog:n.openDialog},null,40,["adult","onOpenDialog"]))]),_:2},1024)]),_:1})],64)}var a=o("9b19"),n=o.n(a);const s=t=>(Object(i["x"])("data-v-86c2aa48"),t=t(),Object(i["v"])(),t),r=s(()=>Object(i["i"])("img",{src:n.a,class:"nav__logo-img"},null,-1)),l=s(()=>Object(i["i"])("h1",{class:"nav__logo-txt"},"Mix it!",-1)),d=s(()=>Object(i["i"])("h3",null,"Favorites",-1)),u={key:0,class:"nav__container"},b=s(()=>Object(i["i"])("h3",null,"Alcoholic drinks",-1)),h=s(()=>Object(i["i"])("h3",null,"Ordinary drinks",-1)),j=s(()=>Object(i["i"])("h3",null,"Shots",-1)),O=s(()=>Object(i["i"])("h3",null,"Non-alcoholic",-1)),p=s(()=>Object(i["i"])("div",{class:"hamburger__bar hamburger__bar--1"},null,-1)),f=s(()=>Object(i["i"])("div",{class:"hamburger__bar hamburger__bar--2"},null,-1)),v=s(()=>Object(i["i"])("div",{class:"hamburger__bar hamburger__bar--3"},null,-1)),m=[p,f,v];function k(t,e,o,c,a,n){const s=Object(i["C"])("router-link"),p=Object(i["C"])("search-cocktails");return Object(i["u"])(),Object(i["h"])("header",null,[Object(i["i"])("nav",{class:Object(i["q"])(["nav",{transform:a.isTransformed}])},[Object(i["k"])(s,{to:"/",class:"nav__link nav__link--logo"},{default:Object(i["J"])(()=>[r,l]),_:1}),Object(i["k"])(p,{class:"nav__search"}),Object(i["i"])("div",{class:"nav__container",onClick:e[0]||(e[0]=t=>n.toggleNavigation(this.isTransformed))},[Object(i["k"])(s,{to:"/mix-it-app/favorites",class:"nav__link"},{default:Object(i["J"])(()=>[d]),_:1}),"notAdult"===o.adult&&o.adult?Object(i["g"])("",!0):(Object(i["u"])(),Object(i["h"])("div",u,[Object(i["k"])(s,{to:"/mix-it-app/alcoholic",class:"nav__link"},{default:Object(i["J"])(()=>[b]),_:1}),Object(i["k"])(s,{to:"/ordinary",class:"nav__link"},{default:Object(i["J"])(()=>[h]),_:1}),Object(i["k"])(s,{to:"/shots",class:"nav__link"},{default:Object(i["J"])(()=>[j]),_:1})])),Object(i["k"])(s,{to:"/non_alcoholic",class:"nav__link"},{default:Object(i["J"])(()=>[O]),_:1})]),Object(i["i"])("div",{class:"hamburger",onClick:e[1]||(e[1]=(...t)=>n.toggleNavigation&&n.toggleNavigation(...t))},m)],2)])}const g=t=>(Object(i["x"])("data-v-438304b8"),t=t(),Object(i["v"])(),t),_={class:"form"},y=g(()=>Object(i["i"])("input",{type:"submit",class:"form__button",value:"🔎"},null,-1));function w(t,e,o,c,a,n){const s=Object(i["C"])("router-link");return Object(i["u"])(),Object(i["h"])("form",{onSubmit:e[1]||(e[1]=Object(i["L"])(e=>t.$router.push(n.searchLink),["prevent"]))},[Object(i["i"])("div",_,[Object(i["K"])(Object(i["i"])("input",{type:"text",class:"form__input","onUpdate:modelValue":e[0]||(e[0]=t=>a.searchTerm=t),placeholder:"Search...",required:""},null,512),[[i["H"],a.searchTerm]]),Object(i["k"])(s,{to:n.searchLink,onClick:n.clearSearchTerm},{default:Object(i["J"])(()=>[y]),_:1},8,["to","onClick"])])],32)}var C={data(){return{searchTerm:""}},computed:{searchLink(){return{path:"/mix-it-app/search",query:{s:this.searchTerm}}}},methods:{clearSearchTerm(){this.searchTerm=""}}},A=(o("932e"),o("d959")),J=o.n(A);const x=J()(C,[["render",w],["__scopeId","data-v-438304b8"]]);var S=x,$={components:{SearchCocktails:S},props:{adult:{type:[String,null],required:!0,default:"adult"}},data(){return{isTransformed:!1}},methods:{toggleNavigation(t){t&&(this.isTransformed=!this.isTransformed)}}};o("14e3");const D=J()($,[["render",k],["__scopeId","data-v-86c2aa48"]]);var L=D;const I=Object(i["j"])(" Welcome! "),F=Object(i["i"])("h3",null," Are you over 18 years of age? ",-1),N=Object(i["j"])(" Yes! "),q=Object(i["j"])(" No, show me non-alcoholic cocktails ");function T(t,e,o,c,a,n){const s=Object(i["C"])("base-dialog");return Object(i["u"])(),Object(i["f"])(s,{onAction:n.allowNavigation,onAction2:n.restrictedNavigation,onClose:n.close},{header:Object(i["J"])(()=>[I]),action1:Object(i["J"])(()=>[N]),action2:Object(i["J"])(()=>[q]),default:Object(i["J"])(()=>[F]),_:1},8,["onAction","onAction2","onClose"])}var B={emits:["allow-navigation","restricted-navigation","close"],methods:{close(){this.$emit("close")},allowNavigation(){this.$emit("allow-navigation")},restrictedNavigation(){this.$emit("restricted-navigation")}}};const P=J()(B,[["render",T]]);var E=P,G=o("45e4"),M=o.n(G),R={name:"App",components:{TheHeader:L,AgeGate:E},data(){return{isAdult:null,ageGateOpen:!1}},methods:{openDialog(){!this.isAdult&&this.$route.meta.withAlcohol&&(this.ageGateOpen=!0,M.a.disable())},closeDialog(){this.ageGateOpen=!1,M.a.enable()},allowNavigation(){this.isAdult="adult",localStorage.setItem("isAdult",JSON.stringify(this.isAdult)),this.closeDialog()},restrictedNavigation(){this.isAdult="notAdult",localStorage.setItem("isAdult",JSON.stringify(this.isAdult)),this.closeDialog(),this.$router.replace("/non_alcoholic")}},created(){this.openDialog(),this.isAdult=JSON.parse(localStorage.getItem("isAdult")),console.log(this.$route.fullPath)},watch:{$route(){this.openDialog()}}};o("fe5c");const H=J()(R,[["render",c]]);var K=H,U=o("6605");const V={key:1},W={key:2},Y=Object(i["j"])(" Sorry, we can't find your cocktail. Try to search for a different name ");function Q(t,e,o,c,a,n){const s=Object(i["C"])("base-dialog"),r=Object(i["C"])("router-view"),l=Object(i["C"])("base-spinner"),d=Object(i["C"])("cocktail-item"),u=Object(i["C"])("base-card");return Object(i["u"])(),Object(i["h"])("div",null,[Object(i["k"])(s,{show:!!a.error,title:"An error occurred!",onClose:n.handleError,onAction:n.handleError},{default:Object(i["J"])(()=>[Object(i["i"])("p",null,Object(i["F"])(a.error),1)]),_:1},8,["show","onClose","onAction"]),n.showBrowse?(Object(i["u"])(),Object(i["f"])(r,{key:0})):Object(i["g"])("",!0),a.isLoading?(Object(i["u"])(),Object(i["h"])("div",V,[Object(i["k"])(l)])):a.cocktails.length>0?(Object(i["u"])(),Object(i["h"])("ul",W,[(Object(i["u"])(!0),Object(i["h"])(i["a"],null,Object(i["A"])(a.cocktails,t=>(Object(i["u"])(),Object(i["f"])(d,{key:t.id,id:t.id,name:t.name,image:t.image},null,8,["id","name","image"]))),128))])):(Object(i["u"])(),Object(i["f"])(u,{key:3},{default:Object(i["J"])(()=>[Y]),_:1}))])}async function X(t){const e=await fetch(t),o=await e.json(),i=o.drinks,c=[];for(const a in i){const t={id:i[a].idDrink,name:i[a].strDrink,image:i[a].strDrinkThumb,alcoholic:i[a].strAlcoholic};c.push(t)}return c}const Z={class:"card"};function z(t,e){return Object(i["u"])(),Object(i["h"])("div",Z,[Object(i["B"])(t.$slots,"default",{},void 0,!0)])}o("77bf");const tt={},et=J()(tt,[["render",z],["__scopeId","data-v-35e8c68a"]]);var ot=et,it={components:{BaseCard:ot},props:{endpoint:{type:String,required:!0},adult:{type:[String,null],required:!0}},data(){return{cocktails:[],isLoading:!1,error:null}},methods:{async loadCocktails(t){this.isLoading=!0;try{let e=await X(t);"notAdult"===this.adult&&(e=e.filter(t=>"Alcoholic"!==t.alcoholic&&"Optional alcohol"!==t.alcoholic)),this.cocktails=e}catch(e){this.error=e.message||"Failed to load data, try again later"}this.isLoading=!1},handleError(){this.error=null}},watch:{endpoint(t){this.$route.query.s?this.loadCocktails(t+this.$route.query.s):this.loadCocktails(t)},$route(t,e){e.query.s&&t.query.s&&this.loadCocktails(this.endpoint+t.query.s)}},created(){this.$route.query.s?this.loadCocktails(this.endpoint+this.$route.query.s):this.loadCocktails(this.endpoint),console.log("this.showBrowse",this.showBrowse),console.log(this.$route.path)},computed:{showBrowse(){return"adult"===this.adult&&"/cocktails"===this.$route.path||"notAdult"===this.adult&&"/non_alcoholic"===this.$route.path}}};o("3d7e");const ct=J()(it,[["render",Q],["__scopeId","data-v-4cf8cbb8"]]);var at=ct,nt=o("6006"),st=o.n(nt),rt=o("c9b2"),lt=o.n(rt);const dt=t=>(Object(i["x"])("data-v-64a90ef0"),t=t(),Object(i["v"])(),t),ut={key:0},bt={key:1},ht=Object(i["j"])(" Cocktail not found. Maybe checkout "),jt=Object(i["j"])("ordinary drinks"),Ot={key:2},pt=Object(i["j"])(" This cocktail contains alcohol and can be displayed only for adults. "),ft={key:3},vt={class:"star"},mt={key:0},kt=dt(()=>Object(i["i"])("p",{class:"star__text"},"Add to favorites",-1)),gt={key:1},_t=dt(()=>Object(i["i"])("p",{class:"star__text"},"Remove from favorites",-1)),yt=["src"],wt={class:"box__recipe"},Ct=dt(()=>Object(i["i"])("h3",null,"Ingredients:",-1)),At={key:0},Jt=dt(()=>Object(i["i"])("h3",null,"Instructions:",-1)),xt=dt(()=>Object(i["i"])("h3",null,"Glass type:",-1));function St(t,e,o,c,a,n){const s=Object(i["C"])("base-dialog"),r=Object(i["C"])("base-spinner"),l=Object(i["C"])("router-link"),d=Object(i["C"])("base-card");return Object(i["u"])(),Object(i["h"])("div",null,[Object(i["k"])(s,{show:!!a.error,title:"An error occurred!",onClose:n.handleError,onAction:n.handleError},{default:Object(i["J"])(()=>[Object(i["i"])("p",null,Object(i["F"])(a.error),1)]),_:1},8,["show","onClose","onAction"]),a.isLoading?(Object(i["u"])(),Object(i["h"])("div",ut,[Object(i["k"])(r)])):0===Object.keys(a.drinkDetails).length?(Object(i["u"])(),Object(i["h"])("div",bt,[Object(i["k"])(d,null,{default:Object(i["J"])(()=>[ht,Object(i["k"])(l,{to:"/ordinary"},{default:Object(i["J"])(()=>[jt]),_:1})]),_:1})])):"adult"!==o.adult&&this.$route.meta.withAlcohol?(Object(i["u"])(),Object(i["h"])("div",Ot,[Object(i["k"])(d,null,{default:Object(i["J"])(()=>[pt]),_:1})])):(Object(i["u"])(),Object(i["h"])("div",ft,[Object(i["k"])(d,{class:"box"},{default:Object(i["J"])(()=>[Object(i["i"])("div",null,[Object(i["i"])("div",vt,[n.isFavorite?(Object(i["u"])(),Object(i["h"])("div",gt,[Object(i["i"])("img",{src:lt.a,onClick:e[1]||(e[1]=(...t)=>n.deleteFavorite&&n.deleteFavorite(...t)),class:"star__icon"}),_t])):(Object(i["u"])(),Object(i["h"])("div",mt,[Object(i["i"])("img",{src:st.a,onClick:e[0]||(e[0]=(...t)=>n.addFavorite&&n.addFavorite(...t)),class:"star__icon"}),kt]))]),Object(i["i"])("h1",null,Object(i["F"])(a.drinkDetails.strDrink),1),Object(i["i"])("div",null,[Object(i["i"])("img",{class:"box__img",src:a.drinkDetails.strDrinkThumb},null,8,yt)])]),Object(i["i"])("div",wt,[Ct,Object(i["i"])("ul",null,[(Object(i["u"])(!0),Object(i["h"])(i["a"],null,Object(i["A"])(a.drinkIngredients,(t,e)=>(Object(i["u"])(),Object(i["h"])("li",{key:e},[Object(i["j"])(Object(i["F"])(t.name)+" ",1),t.measure?(Object(i["u"])(),Object(i["h"])("span",At,": "+Object(i["F"])(t.measure),1)):Object(i["g"])("",!0)]))),128))]),Jt,Object(i["i"])("p",null,Object(i["F"])(a.drinkDetails.strInstructions),1),xt,Object(i["i"])("p",null,Object(i["F"])(a.drinkDetails.strGlass),1)])]),_:1})]))])}o("caad");var $t={components:{BaseCard:ot},props:{adult:{type:[String,null],required:!0}},emits:["open-dialog"],data(){return{isLoading:!1,id:this.$route.params.id,drinkDetails:{},drinkIngredients:{},favorites:[],error:null}},methods:{async fetchCocktail(){this.isLoading=!0;try{const t=await fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+this.id),e=await t.json();this.drinkDetails=e.drinks[0],"Alcoholic"!==this.drinkDetails.strAlcoholic&&"Optional alcohol"!==this.drinkDetails.strAlcoholic||(this.$route.meta={withAlcohol:!0},this.$emit("open-dialog"))}catch(t){this.error="Loading data failed!"}this.listIngredients(),this.isLoading=!1},listIngredients(){const t=Object.entries(this.drinkDetails);this.drinkIngredients=t.map(t=>{if(t[0].includes("strIngredient")&&t[1])return{name:t[1],measure:this.drinkDetails["strMeasure"+t[0].replace("strIngredient","")]}}).filter(Boolean)},addFavorite(){this.favorites.push(this.id),localStorage.setItem("favoriteDrinks",JSON.stringify(this.favorites))},deleteFavorite(){this.favorites=this.favorites.filter(t=>t!==this.id),localStorage.setItem("favoriteDrinks",JSON.stringify(this.favorites))},getFavoriteCocktails(){const t=JSON.parse(localStorage.getItem("favoriteDrinks"));t&&(this.favorites=t)},handleError(){this.error=null}},computed:{isFavorite(){return!!this.favorites&&this.favorites.find(t=>t===this.id)}},watch:{$route(){this.id=this.$route.params.id,this.fetchCocktail()}},created(){this.fetchCocktail(),this.getFavoriteCocktails(),console.log("this.$route.params",this.$route.params)}};o("1410");const Dt=J()($t,[["render",St],["__scopeId","data-v-64a90ef0"]]);var Lt=Dt;const It=t=>(Object(i["x"])("data-v-961825fe"),t=t(),Object(i["v"])(),t),Ft=It(()=>Object(i["i"])("h3",null,"Browse cocktails by first letter",-1)),Nt={class:"browse__box"},qt=Object(i["j"])(" / ");function Tt(t,e,o,c,a,n){const s=Object(i["C"])("router-link"),r=Object(i["C"])("base-card");return Object(i["u"])(),Object(i["f"])(r,{class:"browse"},{default:Object(i["J"])(()=>[Ft,Object(i["i"])("div",Nt,[(Object(i["u"])(!0),Object(i["h"])(i["a"],null,Object(i["A"])(a.letters,t=>(Object(i["u"])(),Object(i["h"])("h3",{key:t,class:"browse__item"},[Object(i["k"])(s,{to:n.browseLink,onClick:e=>n.chooseLetter(t)},{default:Object(i["J"])(()=>[Object(i["j"])(Object(i["F"])(t),1)]),_:2},1032,["to","onClick"]),qt]))),128))])]),_:1})}var Bt={data(){return{letters:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],chosenLetter:null}},computed:{browseLink(){return{path:"/browse",query:{s:this.chosenLetter}}}},methods:{chooseLetter(t){this.chosenLetter=t,console.log(t,this.chosenLetter,this.browseLink.query.s),this.$router.push(this.browseLink)}}};o("32b0");const Pt=J()(Bt,[["render",Tt],["__scopeId","data-v-961825fe"]]);var Et=Pt;const Gt={key:0},Mt={key:1},Rt=Object(i["j"])(" This list is empty. Add some cocktails to favorites "),Ht={key:2};function Kt(t,e,o,c,a,n){const s=Object(i["C"])("base-dialog"),r=Object(i["C"])("base-spinner"),l=Object(i["C"])("base-card"),d=Object(i["C"])("cocktail-item");return Object(i["u"])(),Object(i["h"])("div",null,[Object(i["k"])(s,{show:!!a.error,title:"An error occurred!",onClose:n.handleError},{default:Object(i["J"])(()=>[Object(i["i"])("p",null,Object(i["F"])(a.error),1)]),_:1},8,["show","onClose"]),a.isLoading?(Object(i["u"])(),Object(i["h"])("div",Gt,[Object(i["k"])(r)])):!a.favorites||a.favorites.length<1?(Object(i["u"])(),Object(i["h"])("div",Mt,[Object(i["k"])(l,null,{default:Object(i["J"])(()=>[Rt]),_:1})])):(Object(i["u"])(),Object(i["h"])("ul",Ht,[(Object(i["u"])(!0),Object(i["h"])(i["a"],null,Object(i["A"])(a.cocktails,t=>(Object(i["u"])(),Object(i["f"])(d,{key:t.id,id:t.id,name:t.name,image:t.image},null,8,["id","name","image"]))),128))]))])}var Ut={data(){return{cocktails:[],isLoading:!1,favorites:[],error:null,endpoint:"https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="}},methods:{async loadCocktails(){this.isLoading=!0;try{for(const t of Object.values(this.favorites)){const e=await X(this.endpoint+t);this.cocktails.push(e[0])}}catch(t){this.error=t.message||"Failed to load data, try again later"}this.isLoading=!1},getFavoriteCocktails(){const t=JSON.parse(localStorage.getItem("favoriteDrinks"));t&&(this.favorites=t)},handleError(){this.error=null}},created(){this.getFavoriteCocktails(),this.loadCocktails()}};const Vt=J()(Ut,[["render",Kt]]);var Wt=Vt;const Yt=Object(i["i"])("h2",null,"Page not found",-1),Qt=Object(i["j"])("This page could not be found - go back to "),Xt=Object(i["j"])("home page");function Zt(t,e){const o=Object(i["C"])("router-link"),c=Object(i["C"])("base-card");return Object(i["u"])(),Object(i["h"])("section",null,[Object(i["k"])(c,null,{default:Object(i["J"])(()=>[Yt,Object(i["i"])("p",null,[Qt,Object(i["k"])(o,{to:"/"},{default:Object(i["J"])(()=>[Xt]),_:1})])]),_:1})])}const zt={},te=J()(zt,[["render",Zt]]);var ee=te;const oe=Object(U["a"])({history:Object(U["b"])(),scrollBehavior(t,e,o){return new Promise(t=>{o?setTimeout(()=>{t(o)},600):t({top:0})})},routes:[{path:"/cocktails",alias:"/mix-it-app",component:at,meta:{withAlcohol:!0},props:{endpoint:"https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"},children:[{path:"",component:Et}]},{path:"/mix-it-app/cocktails/id=:id",component:Lt},{path:"/mix-it-app/alcoholic",component:at,meta:{withAlcohol:!0},props:{endpoint:"https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"}},{path:"/mix-it-app/favorites",component:Wt},{path:"/mix-it-app/ordinary",component:at,meta:{withAlcohol:!0},props:{endpoint:"https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"}},{path:"/mix-it-app/shots",component:at,meta:{withAlcohol:!0},props:{endpoint:"https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Shot"}},{path:"/mix-it-app/non_alcoholic",component:at,meta:{withAlcohol:!1},props:{endpoint:"https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"},children:[{path:"",component:Et}]},{path:"/mix-it-app/search",component:at,props:{endpoint:"https://www.thecocktaildb.com/api/json/v1/1/search.php?s="}},{path:"/mix-it-app/browse",component:at,props:{endpoint:"https://www.thecocktaildb.com/api/json/v1/1/search.php?f="}},{path:"/:notFound(.*)",component:ee}]});oe.beforeEach((function(t,e,o){const i=JSON.parse(localStorage.getItem("isAdult"));t.meta.withAlcohol&&"notAdult"===i?o("/non_alcoholic"):o()}));var ie=oe;function ce(t,e,o,c,a,n){const s=Object(i["C"])("router-link");return o.link?(Object(i["u"])(),Object(i["f"])(s,{key:1,to:o.to,class:Object(i["q"])(o.mode)},{default:Object(i["J"])(()=>[Object(i["B"])(t.$slots,"default",{},void 0,!0)]),_:3},8,["to","class"])):(Object(i["u"])(),Object(i["h"])("button",{key:0,class:Object(i["q"])(o.mode)},[Object(i["B"])(t.$slots,"default",{},void 0,!0)],2))}var ae={props:{mode:{type:String,required:!1,default:null},link:{type:Boolean,required:!1,default:!1},to:{type:String,required:!1,default:"/"}}};o("6d99");const ne=J()(ae,[["render",ce],["__scopeId","data-v-42bcb02b"]]);var se=ne;const re=t=>(Object(i["x"])("data-v-2389dacc"),t=t(),Object(i["v"])(),t),le={class:"spinner"},de=re(()=>Object(i["i"])("div",{class:"lds-roller"},[Object(i["i"])("div"),Object(i["i"])("div"),Object(i["i"])("div"),Object(i["i"])("div"),Object(i["i"])("div"),Object(i["i"])("div"),Object(i["i"])("div"),Object(i["i"])("div")],-1)),ue=[de];function be(t,e){return Object(i["u"])(),Object(i["h"])("div",le,ue)}o("ef59");const he={},je=J()(he,[["render",be],["__scopeId","data-v-2389dacc"]]);var Oe=je;const pe={key:0,open:"",class:"dialog"},fe={class:"dialog__header"},ve={key:0},me=Object(i["j"])("Close"),ke=Object(i["j"])("Close");function ge(t,e,o,c,a,n){const s=Object(i["C"])("base-button");return Object(i["u"])(),Object(i["f"])(i["b"],{to:"body"},[o.show?(Object(i["u"])(),Object(i["h"])("div",{key:0,onClick:e[0]||(e[0]=(...t)=>n.tryClose&&n.tryClose(...t)),class:"backdrop"})):Object(i["g"])("",!0),Object(i["k"])(i["c"],{name:"dialog"},{default:Object(i["J"])(()=>[o.show?(Object(i["u"])(),Object(i["h"])("dialog",pe,[Object(i["i"])("header",null,[Object(i["i"])("h2",fe,[Object(i["B"])(t.$slots,"header",{},()=>[Object(i["j"])(Object(i["F"])(o.title),1)],!0)])]),Object(i["i"])("section",null,[Object(i["B"])(t.$slots,"default",{class:"dialog__message"},void 0,!0)]),o.fixed?Object(i["g"])("",!0):(Object(i["u"])(),Object(i["h"])("menu",ve,[Object(i["k"])(s,{onClick:n.action},{default:Object(i["J"])(()=>[Object(i["B"])(t.$slots,"action1",{},()=>[me],!0)]),_:3},8,["onClick"]),t.$slots.action2?(Object(i["u"])(),Object(i["f"])(s,{key:0,mode:"outline",onClick:n.action2},{default:Object(i["J"])(()=>[Object(i["B"])(t.$slots,"action2",{},()=>[ke],!0)]),_:3},8,["onClick"])):Object(i["g"])("",!0)]))])):Object(i["g"])("",!0)]),_:3})])}var _e={props:{show:{type:Boolean,required:!0},title:{type:String,required:!1},fixed:{type:Boolean,required:!1,default:!1}},emits:["close","action","action2"],methods:{tryClose(){this.fixed||this.$emit("close")},action(){this.$emit("action")},action2(){this.$emit("action2")}}};o("2372");const ye=J()(_e,[["render",ge],["__scopeId","data-v-49889793"]]);var we=ye;const Ce={class:"cocktail__item"},Ae={class:"cocktail__title"},Je=["src"];function xe(t,e,o,c,a,n){const s=Object(i["C"])("router-link"),r=Object(i["C"])("base-card");return Object(i["u"])(),Object(i["f"])(r,{class:"cocktail"},{default:Object(i["J"])(()=>[Object(i["i"])("li",Ce,[Object(i["k"])(s,{to:n.detailsLink,class:"cocktail__link"},{default:Object(i["J"])(()=>[Object(i["i"])("h1",Ae,Object(i["F"])(o.name),1),Object(i["i"])("img",{src:o.image,class:"cocktail__image"},null,8,Je)]),_:1},8,["to"])])]),_:1})}var Se={props:["name","image","id"],computed:{detailsLink(){return"/mix-it-app/cocktails/id="+this.id}}};o("e3e8");const $e=J()(Se,[["render",xe],["__scopeId","data-v-2ff42c58"]]);var De=$e;const Le=Object(i["e"])(K);Le.component("base-card",ot),Le.component("base-button",se),Le.component("base-spinner",Oe),Le.component("base-dialog",we),Le.component("cocktail-item",De),Le.use(ie),Le.mount("#app")},6006:function(t,e,o){t.exports=o.p+"img/outlineStar.63349b2b.svg"},6423:function(t,e,o){},"6d99":function(t,e,o){"use strict";o("0c05")},"77bf":function(t,e,o){"use strict";o("baa7")},9034:function(t,e,o){},"932e":function(t,e,o){"use strict";o("a4f7")},"9b19":function(t,e,o){t.exports=o.p+"img/logo.2fc9630f.svg"},a0b9:function(t,e,o){},a4f7:function(t,e,o){},baa7:function(t,e,o){},c9b2:function(t,e,o){t.exports=o.p+"img/solidStar.af6a9b0b.svg"},e170:function(t,e,o){},e3e8:function(t,e,o){"use strict";o("e7f9")},e7f9:function(t,e,o){},ef59:function(t,e,o){"use strict";o("0c59")},fe5c:function(t,e,o){"use strict";o("9034")}});
//# sourceMappingURL=app.07e69ca2.js.map