(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(54)},35:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),c=a.n(l),o=(a(35),a(3)),s=a(4),i=a(6),u=a(5),h=a(7),m=a(10),g=a(8),d=a(55),p=a(56),b=r.a.createContext(null),f=a(13),E=a.n(f),v=(a(38),a(40),a(43),{apiKey:"AIzaSyDni4UflIR1JzzSmNdyUfOUIWx9x0nzGM8",authDomain:"cat-243915.firebaseapp.com",databaseURL:"https://cat-243915.firebaseio.com",projectId:"youtube-cat-243915",storageBucket:"youtube-cat-243915.appspot.com",messagingSenderId:"719371077954",appId:"1:719371077954:web:12eebc6a33e42ddc"}),y=function e(){var t=this;Object(o.a)(this,e),this.onAuthUserListener=function(e,a){return t.auth.onAuthStateChanged(function(n){n?t.user(n.uid).get().then(function(t){var a=t.data();a.roles||(a.roles={}),n=Object(g.a)({uid:n.uid,email:n.email},a),e(n)}):a()})},this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doSignInWithGoogle=function(){return t.auth.signInWithPopup(t.googleProvider)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.user=function(e){return t.db.doc("users/".concat(e))},this.users=function(){return t.db.collection("users")},E.a.initializeApp(v),this.fieldValue=E.a.firestore.FieldValue,this.auth=E.a.auth(),this.db=E.a.firestore(),this.googleProvider=new E.a.auth.GoogleAuthProvider},k={username:"",email:"",password:"",retypePassword:"",error:null},S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state=Object(g.a)({},k),a.handleOnChange=function(e){a.setState(a.setState(Object(m.a)({},e.target.name,e.target.value)))},a.onSubmit=function(e,t){console.log(e);var n=a.state,r=n.email,l=n.password,c=n.username;e.firebase.doCreateUserWithEmailAndPassword(r,l).then(function(t){return e.firebase.user(t.user.uid).set({username:c,email:r},{merge:!0})}).then(function(e){a.setState(Object(g.a)({},k)),a.props.changePage("LogIn")}).catch(function(e){a.setState({error:e})}),t.preventDefault()},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.email,l=t.password,c=t.retypePassword,o=t.error,s=""===l||l!==c||""===a;return r.a.createElement(b.Consumer,null,function(t){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Sign Up:"),r.a.createElement(d.a,{placeholder:"Username",name:"username",onChange:e.handleOnChange,value:a}),r.a.createElement(d.a,{placeholder:"Email",name:"email",onChange:e.handleOnChange,value:n}),r.a.createElement(d.a,{placeholder:"Password",name:"password",type:"password",onChange:e.handleOnChange,value:l}),r.a.createElement(d.a,{placeholder:"Retype Password",name:"retypePassword",type:"password",onChange:e.handleOnChange,value:c}),r.a.createElement(p.a,{disabled:s,color:"primary",type:"submit",onClick:function(a){return e.onSubmit({firebase:t},a)}},"Sign Up!")," ",r.a.createElement("br",null),o&&r.a.createElement("p",null,o.message),"Already have an account?"," ",r.a.createElement("span",{className:"linking",onClick:function(){return e.props.changePage("LogIn")}},"Sign in"))})}}]),t}(n.Component),C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={errror:null},a.onSubmit=function(e){a.props.firebase.doSignInWithGoogle().then(function(e){return a.props.firebase.user(e.user.uid).set({username:e.user.displayName,email:e.user.email},{merge:!0})}).then(function(e){a.setState({error:null}),console.log("success"),a.props.firebase.auth.onAuthStateChanged(function(e){a.props.changeAuth(e),a.props.changePage("Welcome")})}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("div",null,r.a.createElement(p.a,{color:"primary",type:"submit",onClick:this.onSubmit},"Sign In with Google"),e&&r.a.createElement("p",null,e.message))}}]),t}(n.Component),w={email:"",password:"",error:null},O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state=Object(g.a)({},w),a.handleOnChange=function(e){a.setState(a.setState(Object(m.a)({},e.target.name,e.target.value)))},a.onSubmit=function(e,t){console.log(e);var n=a.state,r=n.email,l=n.password;e.firebase.doSignInWithEmailAndPassword(r,l).then(function(t){console.log("logged in"),a.setState(Object(g.a)({},w)),e.firebase.auth.onAuthStateChanged(function(e){console.log("going to welcome"),a.props.changeAuth(e),a.props.changePage("Welcome")}).catch(function(e){console.log("inner errors: ",e)})}).catch(function(e){a.setState({error:e}),console.log("errors: ",a.state.error)}),t.preventDefault()},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.password,l=t.error,c=""===n||""===a;return r.a.createElement(b.Consumer,null,function(t){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Sign In"),r.a.createElement(d.a,{placeholder:"Email",name:"email",onChange:e.handleOnChange,value:a}),r.a.createElement(d.a,{placeholder:"Password",name:"password",type:"password",onChange:e.handleOnChange,value:n}),r.a.createElement(p.a,{disabled:c,color:"primary",type:"submit",onClick:function(a){return e.onSubmit({firebase:t},a)}},"Sign In"),l&&r.a.createElement("p",null,l.message),r.a.createElement(C,{changePage:e.props.changePage,changeAuth:e.props.changeAuth,firebase:t}),r.a.createElement("br",null),r.a.createElement("span",{className:"linking",onClick:function(){return e.props.changePage("ForgotPassword")}},"Forgot Password?"),r.a.createElement("br",null),"Don't have an account?"," ",r.a.createElement("span",{className:"linking",onClick:function(){return e.props.changePage("SignUp")}},"Sign Up"))})}}]),t}(n.Component),P=a(22),A=a.n(P),j=a(27),U=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selectAllChecked:!0,blockedCategories:null},a.handleSavePreferences=function(e){for(var t=document.getElementsByClassName("enableKey"),n=[],r=[],l=0;l<t.length;l++)t[l].checked&&(n.push(t[l].value),r.push(t[l].name));chrome.tabs.query({active:!0,currentWindow:!0},function(e){chrome.tabs.sendMessage(e[0].id,{todo:"changePreferences",categories:r}),console.log("sending message about cats")}),localStorage.setItem("blockedCategories",JSON.stringify(n)),e.user(a.props.authUser.uid).set({blockedCategories:n},{merge:!0}),console.log(n)},a.handleSelectAll=function(){if(a.setState({selectAllChecked:!a.state.selectAllChecked}),a.state.selectAllChecked)for(var e=document.getElementsByClassName("enableKey"),t=0;t<e.length;t++)e[t].checked=!0;else for(var n=document.getElementsByClassName("enableKey"),r=0;r<n.length;r++)n[r].checked=!1},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(j.a)(A.a.mark(function e(){var t=this;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.firebase.user(this.props.authUser.uid).onSnapshot(function(e){t.setState({blockedCategories:e.data()},function(){var e=t.state.blockedCategories;if(null!==e&&void 0!==e&&void 0!==e.blockedCategories){var a=document.getElementsByClassName("enableKey"),n=e.blockedCategories;console.log("blocked cats: ",e.blockedCategories);for(var r=0;r<n.length;r++)console.log("element:",n[r]),a[n[r]].checked=!0}})});case 2:e.sent;case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Blocked categories:"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"checkbox-group"},r.a.createElement("ul",{className:"blockedcategories"},r.a.createElement("li",null,r.a.createElement("input",{type:"checkbox",value:"-1",id:"selectAll",onClick:this.handleSelectAll}),"Select all"),r.a.createElement("br",null),r.a.createElement("li",null,r.a.createElement("input",{type:"checkbox",value:"0",name:"Auto & Vehicles",class:"enableKey"}),"Auto & Vehicles"),r.a.createElement("li",null,r.a.createElement("input",{type:"checkbox",value:"1",name:"Beauty & Fashion",class:"enableKey"}),"Beauty & Fashion"),r.a.createElement("li",null,r.a.createElement("input",{type:"checkbox",value:"2",name:"Comedy",class:"enableKey"}),"Comedy"),r.a.createElement("li",null,r.a.createElement("input",{type:"checkbox",value:"3",name:"Education",class:"enableKey"}),"Education"),r.a.createElement("li",null,r.a.createElement("input",{type:"checkbox",value:"4",name:"Entertainment",class:"enableKey"}),"Entertainment"),r.a.createElement("li",null,r.a.createElement("input",{type:"checkbox",value:"5",name:"Family Entertainment",class:"enableKey"}),"Family Entertainment"),r.a.createElement("li",null,r.a.createElement("input",{type:"checkbox",value:"6",name:"Film & Animation",class:"enableKey"}),"Film & Animation"),r.a.createElement("li",null,r.a.createElement("input",{type:"checkbox",value:"7",name:"Food",class:"enableKey"}),"Food"),r.a.createElement("li",null,r.a.createElement("input",{type:"checkbox",value:"8",name:"Gaming",class:"enableKey"}),"Gaming"),r.a.createElement("li",null,r.a.createElement("input",{type:"checkbox",value:"9",name:"How-to & Style",class:"enableKey"}),"How-to & Style"),r.a.createElement("li",null,r.a.createElement("input",{type:"checkbox",value:"10",name:"Music",class:"enableKey"}),"Music"),r.a.createElement("li",null,r.a.createElement("input",{type:"checkbox",value:"11",name:"News & Politics",class:"enableKey"}),"News & Politics"),r.a.createElement("li",null,r.a.createElement("input",{type:"checkbox",value:"12",name:"Nonprofits & Activism",class:"enableKey"}),"Nonprofits &A Activism"),r.a.createElement("li",null,r.a.createElement("input",{type:"checkbox",value:"13",name:"People & Blogs",class:"enableKey"}),"People & Blogs"),r.a.createElement("li",null,r.a.createElement("input",{type:"checkbox",value:"14",name:"Pets & Animals",class:"enableKey"}),"Pets & Animals"),r.a.createElement("li",null,r.a.createElement("input",{type:"checkbox",value:"15",name:"Science & Technology",class:"enableKey"}),"Science & Technology"),r.a.createElement("li",null,r.a.createElement("input",{type:"checkbox",value:"16",name:"Sports",class:"enableKey"}),"Sports"),r.a.createElement("li",null,r.a.createElement("input",{type:"checkbox",value:"17",name:"Travel & Events",class:"enableKey"}),"Travel & Events")),r.a.createElement("button",{id:"savePreferences",onClick:function(){return e.handleSavePreferences(e.props.firebase)}},"Let the blocking begin!"))))}}]),t}(n.Component),x={email:"",error:null},I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state=Object(g.a)({},x,{resetEmailSent:!1}),a.handleOnChange=function(e){a.setState(a.setState(Object(m.a)({},e.target.name,e.target.value)))},a.onSubmit=function(e,t){console.log(e);var n=a.state.email;e.firebase.doPasswordReset(n).then(function(e){console.log("reset email sent"),a.setState(Object(g.a)({},x,{resetEmailSent:!0}))}).catch(function(e){a.setState({error:e})}),t.preventDefault()},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.resetEmailSent,l=t.error,c=""===a;return r.a.createElement(b.Consumer,null,function(t){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Reset Password"),r.a.createElement(d.a,{placeholder:"Email",name:"email",onChange:e.handleOnChange,value:a}),r.a.createElement(p.a,{disabled:c,color:"primary",type:"submit",onClick:function(a){return e.onSubmit({firebase:t},a)}},"Send email to reset"),l&&r.a.createElement("p",null,l.message),n&&r.a.createElement("div",null,r.a.createElement("p",null,"An email has been sent to reset your password")))})}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a.handleSignOut=function(e){e.doSignOut().then(function(t){console.log("signout"),e.auth.onAuthStateChanged(function(e){a.props.changeAuth("null"),a.props.changePage("LogIn")})})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return console.log("local storage: ",this.props.authUser),r.a.createElement(b.Consumer,null,function(t){return r.a.createElement("div",null,"Meow Arjavi!",r.a.createElement("br",null),r.a.createElement("span",{className:"linking",onClick:function(){return e.props.changePage("BlockedCategories")}},"Block Categories"),r.a.createElement("br",null),r.a.createElement(p.a,{onClick:function(){return e.handleSignOut(t)}},"Sign Out"))})}}]),t}(n.Component),K=a(28),B=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={page:"",authUser:"null"!==localStorage.getItem("authUser")?JSON.parse(localStorage.getItem("authUser")):"null"!==localStorage.getItem("authUser")},a.handlePages=function(e){a.setState({page:e})},a.handleAuthUser=function(e){a.setState({authUser:e}),"null"!==e?localStorage.setItem("authUser",JSON.stringify(e)):localStorage.setItem("authUser",e)},a.handleBack=function(){"SignUp"===a.state.page||"ForgotPassword"===a.state.page?a.handlePages("LogIn"):"BlockedCategories"===a.state.page&&a.handlePages("Welcome")},a.renderBack=function(){return console.log(a.state.page),"LogIn"===a.state.page||""===a.state.page||"Welcome"===a.state.page?r.a.createElement("div",null):r.a.createElement(K.a,{className:"backButton",icon:["fas","arrow-left"],size:"lg"})},a.renderComponent=function(){switch(a.state.page){case"LogIn":return r.a.createElement(O,{changePage:a.handlePages,changeAuth:a.handleAuthUser,page:a.state.page});case"SignUp":return r.a.createElement(S,{changePage:a.handlePages});case"ForgotPassword":return r.a.createElement(I,{changePage:a.handlePages});case"Welcome":return r.a.createElement(N,{changePage:a.handlePages,changeAuth:a.handleAuthUser,authUser:a.state.authUser});case"BlockedCategories":return r.a.createElement(b.Consumer,null,function(e){return r.a.createElement(U,{changePage:a.handlePages,authUser:a.state.authUser,firebase:e})});default:return"null"!==a.state.authUser&&null!==a.state.authUser&&!1!==a.state.authUser?r.a.createElement(N,{changePage:a.handlePages,changeAuth:a.handleAuthUser,authUser:a.state.authUser}):r.a.createElement(O,{changePage:a.handlePages,changeAuth:a.handleAuthUser,page:a.state.page})}},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container flexing"},r.a.createElement("div",{className:"flex1",onClick:this.handleBack},this.renderBack()),r.a.createElement("div",{className:"flex2"},this.renderComponent()))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(52),a(53);var W=a(14),F=a(29);W.b.add(F.a),c.a.render(r.a.createElement(b.Provider,{value:new y},r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.10b46229.chunk.js.map