webpackJsonp([1],{"/sPc":function(e,a){},NHnr:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t("7+uW"),n={render:function(){var e=this.$createElement,a=this._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("router-view")],1)},staticRenderFns:[]};var i=t("VU/8")({name:"App"},n,!1,function(e){t("sVi2")},null,null).exports,s=t("/ocq"),o=t("kxiW"),d=t.n(o),l=t("NYxO");r.default.use(l.a);var c=new l.a.Store({state:{email:"",users:[],cards:[]},getters:{getEmail:function(e){return e.email},getUsers:function(e){d.a.database().ref("data").once("value").then(function(e){var a=e.child("users").val();c.dispatch("setUsers",a)})},getCards:function(e){return e.cards}},mutations:{setEmail:function(e,a){e.email=a},setCards:function(e,a){e.cards=a},setUsers:function(e,a){e.users=a}},actions:{setEmail:function(e,a){e.commit("setEmail",a)},setCards:function(e,a){e.commit("setCards",a)},setUsers:function(e,a){e.commit("setUsers",a)},getUsers:function(e,a){d.a.database().ref("data").once("value").then(function(a){var t=a.child("users").val();e.commit("setUsers",t)})},fetchCards:function(e){console.log("fetchCards"),d.a.database().ref("data").once("value").then(function(a){var t=a.child("users").val().filter(function(e){return e.email==c.getters.getEmail});console.log("userInfo[0].email:"+t[0].email);var r=void 0;r=t[0].cards instanceof Array?t[0].cards:[],e.commit("setCards",r)})},createCard:function(e,a){console.log("createCard has been called");var t=void 0;d.a.database().ref("data").once("value").then(function(r){var n=r.child("users").val(),i=n.filter(function(e){return e.email==c.getters.getEmail}),s=n.findIndex(function(e){return e.email==c.getters.getEmail});void 0===i[0].cards?(t=[a],d.a.database().ref("data/users/"+s).set({email:c.getters.getEmail,cards:t}),e.commit("setCards",t)):((t=i[0].cards).push(a),d.a.database().ref("data/users/"+s).set({email:c.getters.getEmail,cards:t}),e.commit("setCards",t))})}}}),u=c,v=t("MveA"),p=t.n(v),f=function(){return!!p.a.phone},m=function(){return!!p.a.tablet},h={props:["cardData"],data:function(){return{index:0}},methods:{nextCard:function(){this.index=this.index>=this.cardData.length-1?this.cardData.length-1:this.index+1,console.log("Index:"+this.index)},previousCard:function(){this.index=0==this.index?0:this.index-1,console.log("Index:"+this.index)}}},g={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-card",[t("v-container",{attrs:{fluid:"","grid-list-lg":""}},[t("v-layout",{attrs:{row:"",wrap:""}},e._l(e.cardData,function(a,r){return t("v-flex",{key:r,attrs:{xs12:""}},[t("v-card",{staticClass:"white--text",attrs:{color:"blue-grey darken-2 flip-card"}},[t("v-card-title",{attrs:{"primary-title":""}},[t("div",{staticClass:"flip-card-inner"},[t("div",{staticClass:"headline flip-card-front"},[e._v(e._s(a.mondai))]),e._v(" "),t("div",{staticClass:"headline flip-card-back"},[e._v(e._s(a.kotae))])])])],1)],1)}),1)],1)],1)},staticRenderFns:[]};var k=["red darken-1","red darken-2","red darken-3","red darken-4","pink darken-1","pink darken-2","pink darken-3","pink darken-4","purple darken-1","purple darken-2","purple darken-3","purple darken-4","deep-purple darken-1","deep-purple darken-2","deep-purple darken-3","deep-purple darken-4","indigo darken-1","indigo darken-2","indigo darken-3","indigo darken-4","blue darken-1","blue darken-2","blue darken-3","blue darken-4","light-blue darken-1","light-blue darken-2","light-blue darken-3","light-blue darken-4","cyan darken-1","cyan darken-2","cyan darken-3","cyan darken-4","teal darken-1","teal darken-2","teal darken-3","teal darken-4","green darken-1","green darken-2","green darken-3","green darken-4","light-green darken-1","light-green darken-2","light-green darken-3","light-green darken-4","lime darken-1","lime darken-2","lime darken-3","lime darken-4","yellow darken-1","yellow darken-2","yellow darken-3","yellow darken-4","amber darken-1","amber darken-2","amber darken-3","amber darken-4","orange darken-1","orange darken-2","orange darken-3","orange darken-4","deep-orange darken-1","deep-orange darken-2","deep-orange darken-3","deep-orange darken-4","brown darken-1","brown darken-2","brown darken-3","brown darken-4","blue-grey darken-1","blue-grey darken-2","blue-grey darken-3","blue-grey darken-4","grey darken-1","grey darken-2","grey darken-3","grey darken-4"],_=function(){return k[Math.floor(Math.random()*k.length)]},b={data:function(){return{mondai:"",kotae:""}},props:["cardData"],methods:{createCard:function(){if(""!=this.mondai&&""!=this.kotae){console.log(this.mondai+" - "+this.kotae);var e={mondai:this.mondai,kotae:this.kotae};u.dispatch("createCard",e),u.dispatch("fetchCards"),this.mondai="",this.kotae=""}},pickColor:function(){return _()}}},x={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[t("v-form",{model:{value:e.valid,callback:function(a){e.valid=a},expression:"valid"}},[t("v-text-field",{attrs:{label:"単語",required:""},model:{value:e.mondai,callback:function(a){e.mondai=a},expression:"mondai"}}),e._v(" "),t("v-text-field",{attrs:{label:"訳語",required:""},model:{value:e.kotae,callback:function(a){e.kotae=a},expression:"kotae"}}),e._v(" "),t("v-layout",{attrs:{"justify-center":""}},[t("v-btn",{attrs:{flat:"",large:"",color:"primary"},on:{click:e.createCard}},[e._v("登録")])],1)],1),e._v(" "),t("v-card",[t("v-container",{attrs:{fluid:"","grid-list-lg":""}},[t("v-layout",{attrs:{row:"",wrap:""}},e._l(e.cardData,function(a,r){return t("v-flex",{key:r,attrs:{xs2:""}},[t("v-card",{staticClass:"white--text",attrs:{color:e.pickColor()}},[t("v-layout",{attrs:{row:""}},[t("v-flex",[t("v-card-title",{attrs:{"primary-title":""}},[t("div",[t("div",{staticClass:"headline"},[e._v(e._s(a.mondai))]),e._v(" "),t("div",[e._v(e._s(a.kotae))])])])],1)],1),e._v(" "),t("v-divider",{attrs:{light:""}})],1)],1)}),1)],1)],1)],1)},staticRenderFns:[]};var w={components:{CardDeck:t("VU/8")(h,g,!1,function(e){t("S7ql")},null,null).exports,CardAppend:t("VU/8")(b,x,!1,function(e){t("uPUJ")},null,null).exports},name:"Dashboard",data:function(){return{device:"",drawer:null,headers:[{text:"Words",align:"left",sortable:!1,value:"name"},{text:"Translations",value:"translations"}]}},created:function(){this.fetchData(),f()||m()?this.device="sp":this.device="pc"},computed:{cards:function(){return u.getters.getCards},email:function(){return u.getters.getEmail}},methods:{fetchData:function(){u.getters.getEmail?u.dispatch("fetchCards"):this.$router.push("/signin")},signOut:function(){var e=this;d.a.auth().signOut().then(function(){e.$router.push("/signin")}),u.dispatch("setEmail","")}}},y={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-app",{attrs:{id:"inspire"}},["sp"==e.device?t("v-navigation-drawer",{attrs:{fixed:"",right:"",app:""},model:{value:e.drawer,callback:function(a){e.drawer=a},expression:"drawer"}},[t("v-list",{attrs:{dense:""}},[t("v-subheader",{attrs:{inset:""}},[e._v(e._s(e.email))]),e._v(" "),t("v-list-tile",[t("v-list-tile-action",[t("v-icon",[e._v("toggle_off")])],1),e._v(" "),t("v-list-tile-content",[t("v-list-tile-title",{on:{click:e.signOut}},[e._v("SignOut")])],1)],1)],1)],1):e._e(),e._v(" "),t("v-content",[t("v-toolbar",{attrs:{color:"indigo",dark:"",fixed:"",app:""}},[t("v-spacer"),e._v(" "),t("v-toolbar-title",[e._v("Vuemorize")]),e._v(" "),t("v-spacer"),e._v(" "),"sp"==e.device?t("v-toolbar-side-icon",{on:{click:function(a){a.stopPropagation(),e.drawer=!e.drawer}}}):e._e(),e._v(" "),t("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[t("v-btn",{attrs:{flat:""}},[e._v(e._s(e.email))]),e._v(" "),t("v-btn",{attrs:{flat:""},on:{click:e.signOut}},[e._v("Sign Out")])],1)],1),e._v(" "),t("div",["sp"==e.device?t("div",[t("CardDeck",{attrs:{cardData:e.cards}})],1):e._e(),e._v(" "),"pc"==e.device?t("div",[t("CardAppend",{attrs:{cardData:e.cards}})],1):e._e()])],1),e._v(" "),t("v-footer",{staticClass:"pa-3"},[t("v-spacer"),e._v(" "),t("div",[e._v("© @kenkenken "+e._s((new Date).getFullYear()))])],1)],1)},staticRenderFns:[]};var C=t("VU/8")(w,y,!1,function(e){t("uK7A")},null,null).exports,E={name:"Signup",data:function(){return{username:"",password:"",errorMessage:""}},methods:{signUp:function(){var e=this;d.a.auth().createUserWithEmailAndPassword(this.username,this.password).then(function(e){}).catch(function(e){}),u.dispatch("setEmail",this.username);var a={email:this.username,cards:[]},t=d.a.database().ref("data"),r=this.username;t.once("value").then(function(n){var i=n.child("users").val();if(i instanceof Array){console.log("update data");var s=i.filter(function(e){return e.email===r});if(console.log(s),s.length>0){console.log("this email has been taked already");i.filter(function(e){return e.email===r});e.errorMessage="既に使用されているメールアドレスです。"}else i.push(a),t.update({users:i}),u.dispatch("setEmail",a.email),e.$router.push("/dashboard")}else console.log("need initializing"),t.set({users:[a]}),u.dispatch("setEmail",a.email),e.$router.push("/dashboard")})}}},U={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-app",{attrs:{id:"inspire"}},[t("v-content",[t("v-container",{attrs:{fluid:"","fill-height":""}},[t("v-layout",{attrs:{"align-center":"","justify-center":""}},[t("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[t("v-card",{staticClass:"elevation-12"},[t("v-toolbar",{attrs:{dark:"",color:"primary"}},[t("v-toolbar-title",[e._v("SignUp Form")])],1),e._v(" "),t("v-card-text",[t("v-form",[t("v-text-field",{attrs:{"prepend-icon":"person",name:"login",label:"Email",type:"text"},model:{value:e.username,callback:function(a){e.username=a},expression:"username"}}),e._v(" "),t("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",type:"password"},model:{value:e.password,callback:function(a){e.password=a},expression:"password"}}),e._v(" "),t("v-card-actions",[t("v-spacer"),e._v(" "),t("v-btn",{attrs:{color:"primary"},on:{click:e.signUp}},[e._v("Sign Up")])],1)],1),e._v(" "),t("p",[e._v("Do you have an account?\n                  "),t("router-link",{attrs:{to:"/signin"}},[e._v("sign in now!!")])],1),e._v(" "),""!=e.errorMessage?t("v-alert",{attrs:{value:!0,color:"error",icon:"warning",outline:""}},[e._v(e._s(e.errorMessage))]):e._e()],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var D=t("VU/8")(E,U,!1,function(e){t("T0ym")},"data-v-0011698c",null).exports,A={name:"Signin",data:function(){return{username:"",password:"",errorMessage:""}},methods:{signIn:function(){var e=this,a=this;d.a.auth().signInWithEmailAndPassword(this.username,this.password).then(function(a){u.dispatch("setEmail",e.username),e.$router.push("/dashboard")},function(e){a.errorMessage=e.message})}}},S={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-app",{attrs:{id:"inspire"}},[t("v-content",[t("v-container",{attrs:{fluid:"","fill-height":""}},[t("v-layout",{attrs:{"align-center":"","justify-center":""}},[t("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[t("v-card",{staticClass:"elevation-12"},[t("v-toolbar",{attrs:{dark:"",color:"primary"}},[t("v-toolbar-title",[e._v("Login form")])],1),e._v(" "),t("v-card-text",[t("v-form",[t("v-text-field",{attrs:{"prepend-icon":"person",name:"login",label:"Email",type:"text"},model:{value:e.username,callback:function(a){e.username=a},expression:"username"}}),e._v(" "),t("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",type:"password"},model:{value:e.password,callback:function(a){e.password=a},expression:"password"}}),e._v(" "),t("v-card-actions",[t("v-spacer"),e._v(" "),t("v-btn",{attrs:{color:"primary"},on:{click:e.signIn}},[e._v("Sign in")])],1)],1),e._v(" "),t("p",[e._v("You don't have an account?\n                  "),t("router-link",{attrs:{to:"/signup"}},[e._v("create account now!!")])],1),e._v(" "),""!=e.errorMessage?t("v-alert",{attrs:{value:!0,color:"error",icon:"warning",outline:""}},[e._v(e._s(e.errorMessage))]):e._e()],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var M=t("VU/8")(A,S,!1,function(e){t("/sPc")},"data-v-844721fa",null).exports;r.default.use(s.a);var P=new s.a({routes:[{path:"/dashboard",name:"Dashboard",component:C,meta:{requiresAuth:!0}},{path:"/signup",name:"Signup",component:D},{path:"/signin",name:"Signin",component:M}]});P.beforeEach(function(e,a,t){e.matched.some(function(e){return e.meta.requireAuth})?d.a.auth().onAuthStateChanged(function(a){a?t():t({path:"/signin",query:{redirect:e.fullPath}})}):t()});var z=P,$=t("3EgV"),q=t.n($);t("QCv7"),t("gJtD");r.default.config.productionTip=!1,r.default.use(q.a);d.a.initializeApp({apiKey:"AIzaSyCj1DihqxjnC5zCq_kr7zhl9Ze8o3z4P7g",authDomain:"vuemorize.firebaseapp.com",databaseURL:"https://vuemorize.firebaseio.com",projectId:"vuemorize",storageBucket:"vuemorize.appspot.com",messagingSenderId:"568967384037"}),new r.default({el:"#app",router:z,components:{App:i},template:"<App/>"})},QCv7:function(e,a){},S7ql:function(e,a){},T0ym:function(e,a){},gJtD:function(e,a){},sVi2:function(e,a){},uK7A:function(e,a){},uPUJ:function(e,a){}},["NHnr"]);
//# sourceMappingURL=app.4d977217b5dc1aed08d8.js.map