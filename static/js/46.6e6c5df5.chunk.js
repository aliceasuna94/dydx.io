(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{2184:function(e,t,a){"use strict";var r=a(79);a.d(t,"g",function(){return r.h}),a.d(t,"h",function(){return r.i}),a.d(t,"f",function(){return r.g}),a.d(t,"c",function(){return r.d}),a.d(t,"d",function(){return r.e}),a.d(t,"b",function(){return r.b}),a.d(t,"a",function(){return r.a}),a.d(t,"e",function(){return r.f})},2246:function(e,t,a){"use strict";a.d(t,"a",function(){return r});const r={REFERRAL:"referral",USER_FEEDBACK_EMAIL:"user-feedback-email"}},2468:function(e,t,a){e.exports={referralModal:"_2KBgqaIVMtB6Eh3HxfBY-2",header:"_2PVhRSvhIc-DssRP8IGF0g",headerText:"_2UTSQZZahhlj1m0DOhvORn",progressBarContainer:"_8IQDLK5lDBfu0RcBOmtSZ",progressBar:"_1BRq03eluMoZe4Ri3uwMIm",tag:"SKFF6p-Dosh7D5un1Y3fR",dottedTag:"_2IL2X1jYACcj8UEgi2I1oR",filledTag:"_22ull1bUUTvIgpRTky-Flr",body:"_1jqqw_PWYmGCUEfwnVqyMj",bodyText:"_26HZ9ddcMm64a4lYKfpT_c",bodyTextHighlight:"_1uhLevLDsY1UCN1zqKYeRK",walletLoading:"_1HQSTnTZ5S9h20cG58be6A",learnAboutWallets:"Jp0bDKe1oGrI2RD2gElUX"}},2519:function(e,t,a){"use strict";a.r(t);var r=a(6),n=a.n(r),l=a(0),s=a.n(l),i=a(1),c=a.n(i),o=a(52),E=a(60),d=a(19),u=a.n(d),R=a(2303),g=a(74),_=a(384),T=a(190),S=a(2184),h=a(207),m=a(33),p=a(232),C=a(150),L=a(5),f=a(2246),b=a(170),y=a(2468),N=a.n(y);function asyncGeneratorStep(e,t,a,r,n,l,s){try{var i=e[l](s),c=i.value}catch(o){return void a(o)}i.done?t(c):Promise.resolve(c).then(r,n)}function _asyncToGenerator(e){return function(){var t=this,a=arguments;return new Promise(function(r,n){var l=e.apply(t,a);function _next(e){asyncGeneratorStep(l,r,n,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(l,r,n,_next,_throw,"throw",e)}_next(void 0)})}}const A={CONNECT_WALLET:"CONNECT_WALLET",CHOOSE_WALLET:"CHOOSE_WALLET",SIGN_MESSAGE:"SIGN_MESSAGE",COMPLETE:"COMPLETE"},O=e=>n()(["btcindefi","FL1422","test"],e)?"/icons/dydx-circle@2x.png":`/affiliates/${e}.jpg`;class M extends l.Component{constructor(e){var t;super(e),t=this,this.onClickAuthorize=_asyncToGenerator(function*(){const e=t.props,a=e.legacySigning,r=e.referrer,n=e.setWalletData,l=e.stringGetter,s=e.walletAddress,i=e.walletType;t.setState({isLoading:!0,errorMessage:null});try{yield n({walletAddress:s,walletType:i,legacySigning:a,data:{[C.e.REFERRER]:{value:r,allowPublicRead:C.d[C.e.REFERRER]},[C.e.HAS_SET_REFERRER]:{value:!0,allowPublicRead:C.d[C.e.HAS_SET_REFERRER]}},trackingId:f.a.REFERRAL}),t.setState({currentStep:A.COMPLETE})}catch(c){const e=Object(b.j)({error:c,walletAddress:s,walletType:i,location:"referral-modal",stringGetter:l}).message;t.setState({isLoading:!1,errorMessage:e})}});const a=e.isWalletReady,r=e.walletData;let n=A.CONNECT_WALLET,l=!1;a&&(r[C.e.HAS_SET_REFERRER]?(n=A.COMPLETE,l=!0):n=A.SIGN_MESSAGE),this.state={currentStep:n,isLoading:!1,errorMessage:null,alreadyReferred:l}}componentDidUpdate(){const e=this.props.walletData;this.state.currentStep!==A.COMPLETE&&e[C.e.HAS_SET_REFERRER]&&this.setState({currentStep:A.COMPLETE,alreadyReferred:!0})}renderConnectWallet(){const e=this.props.stringGetter;return s.a.createElement(l.Fragment,null,s.a.createElement("div",{className:N.a.bodyText},e({key:L.a.CONNECT_WALLET_CLAIM_INVITE})," ",s.a.createElement("span",{className:N.a.bodyTextHighlight},e({key:L.a.CONNECT_WALLET_CLAIM_INVITE_REWARD}))),s.a.createElement(T.b,{fullWidth:!0,className:N.a.button,onClick:()=>this.setState({currentStep:A.CHOOSE_WALLET})},e({key:L.a.CONNECT_WALLET})),s.a.createElement("div",{className:N.a.learnAboutWallets},s.a.createElement("a",{href:"https://help.dydx.exchange/en/articles/2921366-how-do-i-create-an-account-or-sign-up",target:"_blank",rel:"noopener noreferrer"},e({key:L.a.LEARN_ABOUT_WALLETS}))))}renderChooseWallet(){return s.a.createElement(R.a,{closeModal:()=>this.setState({currentStep:A.SIGN_MESSAGE})})}renderSignMessage(){const e=this.props,t=e.isWalletConnecting,a=e.isWalletDataLoaded,r=e.stringGetter,n=this.state,i=n.isLoading,c=n.errorMessage;return t||!a?s.a.createElement("div",{className:N.a.walletLoading},s.a.createElement(_.a,null)):s.a.createElement(l.Fragment,null,s.a.createElement("div",{className:N.a.bodyText},r({key:L.a.CONFIRM_OWNERSHIP_FINISH_REDEEM})),s.a.createElement(T.b,{fullWidth:!0,className:N.a.button,onClick:this.onClickAuthorize,loading:i},r({key:L.a.CONFIRM})),c&&s.a.createElement(S.a,null,c))}renderComplete(){const e=this.props,t=e.closeModal,a=e.stringGetter,r=a(this.state.alreadyReferred?{key:L.a.ALREADY_CLAIMED_DISCOUNT}:{key:L.a.SUCCESSFULLY_CLAIMED_DISCOUNT});return s.a.createElement(l.Fragment,null,s.a.createElement("div",{className:N.a.bodyText},r),s.a.createElement(T.b,{fullWidth:!0,className:N.a.button,onClick:t},a({key:L.a.START_TRADING})))}render(){const e=this.props,t=e.stringGetter,a=e.referrer,r=this.state.currentStep;let n,l;switch(r){case A.CONNECT_WALLET:n=this.renderConnectWallet(),l=25;break;case A.CHOOSE_WALLET:return this.renderChooseWallet();case A.SIGN_MESSAGE:n=this.renderSignMessage(),l=75;break;case A.COMPLETE:n=this.renderComplete(),l=100;break;default:n=this.renderConnectWallet(),l=25}return s.a.createElement("div",{className:N.a.referralModal},s.a.createElement("div",{className:N.a.header},s.a.createElement("img",{alt:a,src:O(a)}),s.a.createElement("div",{className:N.a.headerText},t({key:L.a.HAS_REFERRED_YOU,params:{REFERRER:a}}))),s.a.createElement("div",{className:N.a.progressBarContainer},s.a.createElement("div",{className:N.a.progressBar,style:{width:`${l}%`}})),r===A.COMPLETE?s.a.createElement("div",{className:u()(N.a.tag,N.a.filledTag)},t({key:L.a.PERCENT_OFF_REDEEMED})):s.a.createElement("div",{className:u()(N.a.tag,N.a.dottedTag)},t({key:L.a.REDEEMING_PERCENT_OFF})),s.a.createElement("div",{className:N.a.body},n))}}M.propTypes={closeModal:c.a.func.isRequired,isWalletConnecting:c.a.bool.isRequired,isWalletDataLoaded:c.a.bool.isRequired,isWalletReady:c.a.bool.isRequired,legacySigning:c.a.bool,referrer:c.a.string.isRequired,setWalletData:c.a.func.isRequired,stringGetter:c.a.func.isRequired,walletAddress:c.a.string,walletData:c.a.object.isRequired,walletType:c.a.string};var W=Object(g.k)(Object(o.c)(e=>({isWalletConnecting:Object(m.e)(e),isWalletDataLoaded:Object(p.a)(e),isWalletReady:Object(m.h)(e),legacySigning:Object(m.i)(e),walletAddress:Object(m.m)(e),walletData:Object(p.b)(e),walletType:Object(m.q)(e)}),e=>Object(E.b)({setWalletData:h.b},e))(M));a.d(t,"default",function(){return W})}}]);