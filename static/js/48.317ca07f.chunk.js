(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{2245:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return l});var n=a(6),i=a.n(n),r=a(22);function asyncGeneratorStep(e,t,a,n,i,r,s){try{var l=e[r](s),o=l.value}catch(c){return void a(c)}l.done?t(o):Promise.resolve(o).then(n,i)}function _asyncToGenerator(e){return function(){var t=this,a=arguments;return new Promise(function(n,i){var r=e.apply(t,a);function _next(e){asyncGeneratorStep(r,n,i,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(r,n,i,_next,_throw,"throw",e)}_next(void 0)})}}const s=Object(r.createAsyncAction)("SEND_VERIFICATION_EMAIL",({walletAddress:e,emailAddress:t})=>({meta:{walletAddress:e},makeRequest:function(){var a=_asyncToGenerator(function*(){const a=yield fetch("https://api.dydx.exchange/v1/user/send-verification-email",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({owner:e,emailAddress:t})});return new Promise((e,t)=>{a.ok&&i()([200,201],a.status)?e():t(new Error("Failed to send verification email"))})});return function makeRequest(){return a.apply(this,arguments)}}()})),l=Object(r.createAsyncAction)("VERIFY_EMAIL",({token:e})=>({makeRequest:function(){var t=_asyncToGenerator(function*(){const t=yield fetch(`https://api.dydx.exchange/v1/user/verify-email?token=${e}`);let a;try{a=yield t.json()}catch(n){}return new Promise((e,n)=>{t.ok&&i()([200,201],t.status)?e():n(a)})});return function makeRequest(){return t.apply(this,arguments)}}()}))},2463:function(e,t,a){e.exports={emailNotificationsModal:"ePPu0EGOTWz4SwdE9OR-7",title:"_35hluf-YF8rkcdAfXKJsmt",mailIcon:"_1v4IUGT3jc9M5_RQUaO-lN",loginWalletArea:"_1Rifn56nVZxjdTxTipBy5B",walletName:"_1PLAwR0Fqj8Ko6xFiABMss",rememberMeCheckbox:"_3lCcpuLSkx1FSBvBuqaltO",rememberMeLabel:"_1AfUZWVRQLPTq3t5V0Na-P",loading:"_3-ziphBERoD8ykxx3PETeH",emailInput:"_1Bn48N4mqug8b2-9CvRika",inputField:"_1sW0pqZLwQ4x-RGerxQHVS",inputIcon:"_1ck4jNJChaE9zDVeFNiusn",resendLink:"_16M4X9acJ43ROrSzwQ6FNp",notificationTypeArea:"_3shdA7cJIpo1rZQyOt6YiP",notificationCategory:"_2Gy0cPhzoyLiBFCHnJRdRS",checkboxLabel:"_3o-841_bJnpW-54lQ5QSq4",notificationDescription:"_2TFPCHrgvUVlYG6dgzWY1u",saveExplanation:"_3EGSqdh1LX6shXsDNVytFo"}},2514:function(e,t,a){"use strict";a.r(t);var n=a(231),i=a.n(n),r=a(55),s=a.n(r),l=a(17),o=a.n(l),c=a(135),d=a.n(c),E=a(4),u=a.n(E),m=a(0),g=a.n(m),p=a(1),y=a.n(p),A=a(60),b=a(52),I=a(302),h=a(74),S=a(31),_=a(2303),T=a(384),O=a(149),f=a(2143),C=a(622),N=a(2123),k=a(286),L=a(2127),w=a(618),R=a(79),v=a(98),M=a(2245),D=a(207),x=a(33),j=a(232),G=a(150),P=a(5),F=a(235),W=a(170),V=a(191),q=a(10),U=a(391),B=a(2463),H=a.n(B);function ownKeys(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(a,!0).forEach(function(t){_defineProperty(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ownKeys(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function _defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function asyncGeneratorStep(e,t,a,n,i,r,s){try{var l=e[r](s),o=l.value}catch(c){return void a(c)}l.done?t(o):Promise.resolve(o).then(n,i)}function _asyncToGenerator(e){return function(){var t=this,a=arguments;return new Promise(function(n,i){var r=e.apply(t,a);function _next(e){asyncGeneratorStep(r,n,i,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(r,n,i,_next,_throw,"throw",e)}_next(void 0)})}}const Q={[P.a.EMAIL_GENERAL]:{key:"GENERAL",category:P.a.EMAIL_GENERAL,description:P.a.EMAIL_GENERAL_DESCRIPTION,standardActions:[]},[P.a.EMAIL_ACCOUNT]:{key:"ACCOUNT",category:P.a.EMAIL_ACCOUNT,description:P.a.EMAIL_ACCOUNT_DESCRIPTION,standardActions:[F.d.DEPOSIT,F.d.WITHDRAW,F.d.BORROW,F.d.REPAY]},[P.a.EMAIL_TRADING]:{key:"TRADING",category:P.a.EMAIL_TRADING,description:P.a.EMAIL_TRADING_DESCRIPTION,standardActions:[F.d.TRADE,F.d.EXPIRED,F.d.LIQUIDATED,F.d.ISOLATED_OPEN,F.d.ISOLATED_PARTIAL_CLOSE,F.d.ISOLATED_FULL_CLOSE,F.d.OPEN,F.d.CLOSE,F.d.INCREASE,F.d.DECREASE]}},J=1e4;class z extends m.Component{constructor(e){var t;super(e),t=this,this.sendVerificationEmail=function(){var e=_asyncToGenerator(function*({isResend:e=!1}={}){const a=t.props,n=a.sendVerificationEmail,i=a.stringGetter,r=a.walletAddress,s=t.state.email;t.setState({errorMessage:null});try{yield n({walletAddress:r,emailAddress:s})}catch(l){return t.setState({isLoading:!1,errorMessage:i({key:P.a.FAILED_SEND_VERIFICATION})}),!1}return e&&Object(I.b)(({closeToast:e})=>Object(k.b)({toastType:k.a.SUCCESS,title:i({key:P.a.SUCCESS}),body:i({key:P.a.EMAIL_VERIFICATION_SENT,params:{EMAIL:s}}),onClose:e}),{autoClose:J}),!0});return function(){return e.apply(this,arguments)}}(),this.onClickLogin=_asyncToGenerator(function*(){const e=t.props,a=e.fetchWalletData,n=e.legacySigning,i=e.stringGetter,r=e.userLogin,s=e.walletAddress,l=e.walletType,o=t.state.isRememberMeChecked;t.setState({isLoading:!0});try{const e=yield r({walletAddress:s,walletType:l,legacySigning:n,rememberMe:o}),d=e.loginToken,E=e.loginExpiration;yield a({walletAddress:s,loginToken:d,loginExpiration:E}),t.setState({loginToken:d,loginExpiration:E,shouldReadNewWalletData:!0,isLoading:!1,errorMessage:null})}catch(c){const e=Object(W.j)({error:c,walletAddress:s,walletType:l,location:"email-notifications-modal:login",stringGetter:i}).message;t.setState({isLoading:!1,errorMessage:e})}}),this.onClickSave=_asyncToGenerator(function*(){const e=t.props,a=e.legacySigning,n=e.setWalletData,i=e.stringGetter,r=e.walletAddress,s=e.walletType,l=t.state,c=l.email,d=l.savedEmail,E=l.checkboxes,u=l.loginToken,m=l.loginExpiration;t.setState({isLoading:!0});let g=[];const p={};o()(E,(e,t)=>{const a=Q[t],n=a.key,i=a.standardActions;e&&(g=[...g,...i]),p[n]=e});const y=d!==c;try{yield n({walletAddress:r,walletType:s,legacySigning:a,loginToken:u,loginExpirationISO:m,data:{[G.e.HAS_SET_EMAIL_NOTIFICATIONS]:{value:!0,allowPublicRead:G.d[G.e.HAS_SET_EMAIL_NOTIFICATIONS]},[G.e.NOTIFICATION_SETTINGS]:{value:{emailAddress:c,subscribedStandardActions:g,categoryData:p},allowPublicRead:G.d[G.e.NOTIFICATION_SETTINGS]}}})}catch(b){let e;Object(W.g)(b)&&(e=i({key:P.a.UNAUTHORIZED_SIGNATURE}));const a=Object(W.j)({error:b,walletAddress:r,walletType:s,location:"email-notifications-modal:save",notifyBugsnag:!e,stringGetter:i}).message;return void t.setState({isLoading:!1,errorMessage:e||a})}if(t.setState({savedEmail:c,savedCheckboxes:E}),y){if(!(yield t.sendVerificationEmail()))return}let A=i({key:P.a.SUCCESS_SAVE_EMAIL});y&&(A+=` ${i({key:P.a.EMAIL_VERIFICATION_SENT,params:{EMAIL:c}})}`),Object(I.b)(({closeToast:e})=>Object(k.b)({toastType:k.a.SUCCESS,title:i({key:P.a.SUCCESS}),body:A,onClose:e}),{autoClose:J}),t.setState({isLoading:!1})}),this.onChangeEmail=(e=>{const t=this.props.stringGetter;let a;Object(V.g)(e)||(a=t({key:P.a.INVALID_EMAIL})),this.setState({email:e,errorMessage:a})});const a=e.walletAddress,n=Object(U.a)(a),i=n.loginToken,r=n.loginExpiration;this.state=_objectSpread({loginToken:i,loginExpiration:r,shouldReadNewWalletData:!1,isRememberMeChecked:!0,isLoading:!1,errorMessage:null},this.getExistingSettings())}componentDidUpdate(e){const t=e.walletAddress,a=e.isWalletDataLoaded,n=this.props,i=n.walletAddress,r=n.isWalletDataLoaded,s=this.state.shouldReadNewWalletData;if(i!==t){const e=Object(U.a)(i),t=e.loginToken,a=e.loginExpiration;this.setState({loginToken:t,loginExpiration:a})}(r!==a||s)&&this.setState(_objectSpread({},this.getExistingSettings(),{shouldReadNewWalletData:!1}))}getExistingSettings(){const e=this.props.walletData[G.e.NOTIFICATION_SETTINGS],t=u()(e,"emailAddress"),a=d()(Q,(t,{key:a,category:n})=>(t[n]=u()(e,`categoryData[${a}]`,!0),t),{});return{email:t,savedEmail:t,checkboxes:a,savedCheckboxes:a}}getHaveSettingsChanged(){const e=this.state,t=e.email,a=e.checkboxes,n=e.savedEmail,i=e.savedCheckboxes;if(t!==n)return!0;let r=!1;return o()(a,(e,t)=>{e!==i[t]&&(r=!0)}),r}renderLogin(){const e=this.props,t=e.walletType,a=e.walletAddress,n=e.stringGetter,i=e.closeModal,r=this.state,s=r.isLoading,l=r.isRememberMeChecked,o=r.errorMessage;return g.a.createElement(m.Fragment,null,g.a.createElement(v.d,null,g.a.createElement(R.d,{wide:!0,className:H.a.title},n({key:P.a.LOGIN_FOR_EMAIL_NOTIFICATIONS})),g.a.createElement(R.b,{className:H.a.loginWalletArea},g.a.createElement("div",{className:H.a.walletName},g.a.createElement(C.a,{walletType:t}),Object(U.b)(t)),Object(q.b)(a)),g.a.createElement(f.a,{className:H.a.rememberMeCheckbox,label:n({key:P.a.REMEMBER_ME_30_DAYS}),labelClassName:H.a.rememberMeLabel,checked:l,onClick:()=>this.setState(e=>({isRememberMeChecked:!e.isRememberMeChecked}))}),o&&g.a.createElement(R.a,null,o)),g.a.createElement(v.c,null,g.a.createElement(v.b,{onClick:i},n({key:P.a.CANCEL})),g.a.createElement(v.b,{onClick:this.onClickLogin,loading:s},n({key:P.a.CONFIRM}))))}renderEmailNotifications(){const e=this.props,t=e.closeModal,a=e.stringGetter,n=e.walletData,i=this.state,r=i.email,l=i.savedEmail,o=i.isLoading,c=i.checkboxes,d=i.errorMessage,E=r&&""!==r&&!d&&this.getHaveSettingsChanged(),p=u()(n,G.e.HAS_VERIFIED_EMAIL,!1),y=l&&r===l;let A;return y&&(A=p?g.a.createElement(S.F,null):g.a.createElement(N.a,{top:36,left:-240,tooltip:"pending-email-verification"},g.a.createElement(T.a,{big:!0}))),g.a.createElement(m.Fragment,null,g.a.createElement(v.d,null,g.a.createElement(R.d,{wide:!0,className:H.a.title},g.a.createElement("div",{className:H.a.mailIcon},g.a.createElement(S.Q,null)),a({key:P.a.EMAIL_NOTIFICATIONS})),g.a.createElement(L.c,{grey:!0,className:H.a.emailInput,size:L.a.MEDIUM,label:a({key:P.a.EMAIL})},g.a.createElement("div",{className:H.a.inputField},g.a.createElement(w.a,{noMargins:!0,textInput:!0,value:r,onChange:this.onChangeEmail,placeholder:"example@email.com"}),A&&g.a.createElement("div",{className:H.a.inputIcon},A))),g.a.createElement(L.c,{grey:!0,size:L.a.MEDIUM,label:a({key:P.a.EMAIL_NOTIFICATION_TYPES})},g.a.createElement(R.b,{className:H.a.notificationTypeArea},s()(Q,({category:e,description:t})=>g.a.createElement("div",{key:e,className:H.a.notificationCategory},g.a.createElement(f.a,{topAlignedCheckbox:!0,label:g.a.createElement("div",null,a({key:e}),g.a.createElement("div",{className:H.a.notificationDescription},a({key:t}))),labelClassName:H.a.checkboxLabel,checked:c[e],onClick:()=>this.setState({checkboxes:_objectSpread({},c,{[e]:!c[e]}),errorMessage:null})}))))),y&&!p&&g.a.createElement("div",{role:"button",tabIndex:0,className:H.a.resendLink,onClick:()=>this.sendVerificationEmail({isResend:!0})},a({key:P.a.RESEND_VERIFICATION_EMAIL})),d&&g.a.createElement(R.a,null,d)),g.a.createElement(v.c,null,g.a.createElement(v.b,{onClick:t},a({key:P.a.CLOSE})),g.a.createElement(v.b,{green:!0,onClick:this.onClickSave,disabled:!E,loading:o},a({key:P.a.SAVE}))))}render(){const e=this.props,t=e.isWalletReady,a=e.isWalletConnecting,n=e.isWalletDataLoaded,r=this.state.loginToken;return a||!n?g.a.createElement("div",{className:H.a.loading},g.a.createElement(O.a,null)):t?g.a.createElement("div",{className:H.a.emailNotificationsModal},r?this.renderEmailNotifications():this.renderLogin()):g.a.createElement(_.a,{titleOverride:P.a.CONNECT_WALLET_EDIT_EMAIL,closeModal:i.a})}}z.propTypes={closeModal:y.a.func.isRequired,fetchWalletData:y.a.func.isRequired,isWalletConnecting:y.a.bool.isRequired,isWalletDataLoaded:y.a.bool.isRequired,isWalletReady:y.a.bool.isRequired,legacySigning:y.a.bool,sendVerificationEmail:y.a.func.isRequired,setWalletData:y.a.func.isRequired,stringGetter:y.a.func.isRequired,userLogin:y.a.func.isRequired,walletAddress:y.a.string,walletData:y.a.object,walletType:y.a.string};var Y=Object(h.k)(Object(b.c)(e=>({isWalletConnecting:Object(x.e)(e),isWalletDataLoaded:Object(j.a)(e),isWalletReady:Object(x.h)(e),legacySigning:Object(x.i)(e),walletAddress:Object(x.m)(e),walletData:Object(j.b)(e),walletType:Object(x.q)(e)}),e=>Object(A.b)({setWalletData:D.b,fetchWalletData:D.a,userLogin:D.c,sendVerificationEmail:M.a},e))(z));a.d(t,"default",function(){return Y})}}]);