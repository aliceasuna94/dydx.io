(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{2122:function(e,t,a){"use strict";a.d(t,"b",function(){return d}),a.d(t,"c",function(){return u}),a.d(t,"d",function(){return m}),a.d(t,"a",function(){return p});var r=a(4),n=a.n(r),i=a(41),o=a(44),l=a(26),s=a(94),c=a(10);const d=e=>n()(e,"indexPrices.indexPrices"),u=e=>n()(e,"indexPrices.areIndexPricesLoaded"),m=Object(i.a)([o.e,d,l.d],(e,t,a)=>p({pair:e,allIndexPrices:t,allMarkets:a})),p=({pair:e,allIndexPrices:t,allMarkets:a})=>{const r=e.orderMarket,n=e.baseSymbol,i=e.quoteSymbol,o=Object(l.c)({allMarkets:a,symbol:n}),d=Object(l.c)({allMarkets:a,symbol:i}),u=t[r];if(u)return new s.a(u,o,d).getNaturalValue();const m=Object(l.c)({allMarkets:a,symbol:"DAI"});if(m&&m.oraclePrice){if("WETH-DAI"===r){if(t["WETH-USDC"])return new s.a(t["WETH-USDC"],o,Object(l.c)({allMarkets:a,symbol:"USDC"})).getNaturalValue().div(m.oraclePrice)}if("DAI-USDC"===r)return Object(c.a)(m.oraclePrice)}return null}},2130:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(1),o=a.n(i),l=a(19),s=a.n(l),c=a(2139),d=a.n(c),u=a(384),m=a(2128),p=a(620);a(2159);const E=({className:e,children:t})=>n.a.createElement("div",{className:s()("new-table",e)},t);E.propTypes={className:o.a.string,children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]).isRequired};const b=({children:e,className:t,expandable:a,expandableContent:r,highlighted:i,hoverContent:o,isExpanded:l,isGreyedOut:c,isLoading:m,leftBorderGreen:E,leftBorderRed:b,noLoadingCell:f,onClick:y,useLegacyStyles:g=!1,useModuleStyles:O=!1})=>n.a.createElement("div",{tabIndex:0,role:"button",className:s()("row-container",t,{"row-container__highlight":i,"row-container__hover":a,"row-container__expanded":l,"row-container__loading":m,"row-container__greyed-out":c,"row-container__left-border-red":b,"row-container__left-border-green":E,"row-container__module-styles":O,"row-container__legacy-styles":g}),onClick:y},n.a.createElement("div",{className:s()("row",{"row__module-styles":O})},n.a.createElement("div",{className:s()("row-content",{"row-content__loading":m,"row-content__greyed-out":c})},e),!f&&n.a.createElement(h,{className:"loading-cell"},m&&n.a.createElement(u.a,null))),a&&n.a.createElement(d.a,{isOpened:l},n.a.createElement("div",{className:"expandable-row"},r)),!m&&(o||a)&&n.a.createElement("div",{className:s()("hover-content-container",{"hover-content-container__with-gradient":!!o})},n.a.createElement("div",{className:"hover-content"},o,a&&n.a.createElement("div",{className:"expandable-row-icon-container"},n.a.createElement("div",{className:s()("expandable-row-icon",{"expandable-row-icon__expanded":l})},n.a.createElement(p.a,null)))))," ");b.propTypes={children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]).isRequired,className:o.a.string,expandable:o.a.bool,expandableContent:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]),highlighted:o.a.bool,hoverContent:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]),isExpanded:o.a.bool,isGreyedOut:o.a.bool,isLoading:o.a.bool,leftBorderGreen:o.a.bool,leftBorderRed:o.a.bool,noLoadingCell:o.a.bool,onClick:o.a.func,useLegacyStyles:o.a.bool,useModuleStyles:o.a.bool};const h=({children:e,className:t,marketSymbol:a,isTitle:r,label:i,green:o,red:l,orange:c,grey:d,stacked:u,uppercase:p,width:E})=>n.a.createElement("div",{className:s()("cell",t,{cell__title:r,cell__stacked:u,"cell__with-label":i,cell__uppercase:p,red:l,green:o,orange:c,grey:d}),style:{flexBasis:E}},i&&n.a.createElement("div",{className:"label"},i),a&&n.a.createElement("div",{className:"currency-icon-container"},n.a.createElement("div",{className:`currency-icon-${a.toLowerCase()}`},n.a.createElement(m.a,{symbol:a}))),e);h.propTypes={children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]),className:o.a.string,marketSymbol:o.a.string,isTitle:o.a.bool,label:o.a.oneOfType([o.a.string,o.a.node]),green:o.a.bool,red:o.a.bool,orange:o.a.bool,grey:o.a.bool,stacked:o.a.bool,uppercase:o.a.bool,width:o.a.string},a.d(t,"c",function(){return E}),a.d(t,"b",function(){return b}),a.d(t,"a",function(){return h})},2134:function(e,t,a){e.exports={emptyState:"_1zSGkn9574CJw_zgFytURn",loading:"_1SVbZA8N8vyAQWeViUq5VG",content:"_1u3pYOs23j8ttVBpg9qBdW",contentPerpetual:"_3yWRuRvOs55FQVlNcjIpe1"}},2136:function(e,t,a){"use strict";var r=a(55),n=a.n(r),i=a(0),o=a.n(i),l=a(1),s=a.n(l),c=a(19),d=a.n(c),u=a(74),m=a(2138),p=a(2123),E=a(2130),b=a(2160),h=a.n(b);const f=({headerConfig:e,useModuleStyles:t,stringGetter:a})=>o.a.createElement(E.b,{useModuleStyles:t},n()(e,({titleKey:e,titleBottomKey:t,width:r,tooltip:n,tooltipBottom:i,tag:l})=>{const s=a({key:e}),c=t?a({key:t}):void 0;if(!c&&!n)return o.a.createElement(E.a,{isTitle:!0,key:s,width:r},l?o.a.createElement(m.a,{tag:l},s):s);const u=n?o.a.createElement(p.a,{className:d()({[h.a.doubleTooltip]:!!c}),top:n.top||8,left:n.left||-36,tooltip:n.name,stringParams:n.stringParams},s):o.a.createElement("div",{className:h.a.doubleTooltip},s);let b;c&&(b=i?o.a.createElement(p.a,{className:h.a.doubleTooltip,top:i.top||8,left:i.left||-36,tooltip:i.name,stringParams:n.stringParams},c):o.a.createElement("div",{className:h.a.doubleTooltip},c));const f=o.a.createElement("div",{className:d()(h.a.title,{[h.a.doubleTitle]:!!c})},u,c?o.a.createElement("span",null,"/"):null,b);return o.a.createElement(E.a,{isTitle:!0,key:s,width:r},l?o.a.createElement(m.a,{tag:l},f):f)}));f.propTypes={headerConfig:s.a.arrayOf(s.a.shape({titleKey:s.a.string.isRequired,titleBottomKey:s.a.string,width:s.a.string.isRequired,tag:s.a.oneOfType([s.a.string,s.a.node]),tooltip:s.a.shape({top:s.a.number,left:s.a.number,name:s.a.string.isRequired,stringParams:s.a.object}),tooltipBottom:s.a.shape({top:s.a.number,left:s.a.number,name:s.a.string.isRequired,stringParams:s.a.object})})).isRequired,stringGetter:s.a.func,useModuleStyles:s.a.bool};var y=Object(u.k)(f);a.d(t,"a",function(){return y})},2138:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(1),o=a.n(i),l=a(19),s=a.n(l),c=a(2145),d=a.n(c);const u=({tag:e,children:t,extraSpacing:a})=>n.a.createElement(r.Fragment,null,t,e&&n.a.createElement("div",{className:s()(d.a.tag,{[d.a.extraSpacing]:a})},e));u.propTypes={children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]).isRequired,extraSpacing:o.a.bool,tag:o.a.oneOfType([o.a.string,o.a.node])};var m=u;a.d(t,"a",function(){return m})},2145:function(e,t,a){e.exports={tag:"_2ukp2icrWLdgvD3odSm2Hm",extraSpacing:"_18tcZvIMJWLJT8DSy4PNW3"}},2155:function(e,t,a){"use strict";var r=a(55),n=a.n(r),i=a(90),o=a.n(i),l=a(67),s=a.n(l),c=a(231),d=a.n(c),u=a(6),m=a.n(u),p=a(0),E=a.n(p),b=a(1),h=a.n(b),f=a(52),y=a(34),g=a(60),O=a(19),T=a.n(O),_=a(74),k=a(384),v=a(2136),w=a(2130),R=a(190);function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var a,r,n=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var P=E.a.createElement("path",{d:"M12 13.3333V6.66663",stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),L=E.a.createElement("path",{d:"M8 13.3333V2.66663",stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),S=E.a.createElement("path",{d:"M4 13.3334V9.33337",stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),j=function SvgMarketOrderOutline(e){var t=e.svgRef,a=_objectWithoutProperties(e,["svgRef"]);return E.a.createElement("svg",_extends({width:16,height:16,viewBox:"0 0 16 16",fill:"none",ref:t},a),P,L,S)},C=E.a.forwardRef(function(e,t){return E.a.createElement(j,_extends({svgRef:t},e))});a.p;function limit_order_outline_extends(){return(limit_order_outline_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function limit_order_outline_objectWithoutProperties(e,t){if(null==e)return{};var a,r,n=function limit_order_outline_objectWithoutPropertiesLoose(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var N=E.a.createElement("path",{d:"M12 12L8 8L4 12",stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),A=E.a.createElement("line",{x1:4.75,y1:3.25,x2:11.25,y2:3.25,stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),I=function SvgLimitOrderOutline(e){var t=e.svgRef,a=limit_order_outline_objectWithoutProperties(e,["svgRef"]);return E.a.createElement("svg",limit_order_outline_extends({width:16,height:16,viewBox:"0 0 16 16",fill:"none",ref:t},a),N,A)},x=E.a.forwardRef(function(e,t){return E.a.createElement(I,limit_order_outline_extends({svgRef:t},e))}),M=(a.p,a(83)),D=a(80),W=a(33),F=a(102),q=a(44),B=a(146),K=a(2122),U=a(249),V=a(21),G=a(5),H=a(24),Y=a(61),Z=a(94),$=a(10),Q=a(191),z=a(614),J=a(103),X=a(2),ee=a(2203),te=a.n(ee),ae=a(2134),re=a.n(ae);const ne=(e,t,a)=>({TYPE:{titleKey:G.a.TYPE,width:"15%"},AMOUNT:{titleKey:G.a.AMOUNT,tag:a?t:e,width:"15%"},FILLED:{titleKey:G.a.AMOUNT_FILLED,tag:a?t:e,width:"15%"},PRICE:{titleKey:G.a.PRICE,tag:t,width:"15%"},STOP_INDEX:{titleKey:G.a.STOP_PRICE_ABBREVIATED,titleBottomKey:G.a.INDEX_PRICE_ABBREVIATED,tag:t,width:"20%",tooltip:{name:"stop-price",stringParams:{SYMBOL:e}},tooltipBottom:{name:"index-price"}},STATUS:{titleKey:G.a.STATUS,width:"10%"},GOOD_TIL:{titleKey:G.a.GOOD_TIL_DATE_ABBREVIATED,width:"10%"}}),ie=()=>({TYPE:{titleKey:G.a.TYPE,width:"24%"},AMOUNT:{titleKey:G.a.AMOUNT,titleBottomKey:G.a.AMOUNT_FILLED,width:"29%"},PRICE:{titleKey:G.a.PRICE,titleBottomKey:G.a.STOP_PRICE,width:"29%"},STATUS_GOOD_TIL:{titleKey:G.a.STATUS,titleBottomKey:G.a.GOOD_TIL_DATE_ABBREVIATED,width:"18%"}});class oe extends p.Component{constructor(e){super(e),this.onClickRow=(e=>{this.state.expandedOrder===e?this.setState({expandedOrder:null}):this.setState({expandedOrder:e})}),this.state={expandedOrder:null}}getTableConfig(){const e=this.props,t=e.currentPair,a=t.baseSymbol,r=t.displayQuoteSymbol,n=t.isInversePerpetual;return e.isMobile?ie():ne(a,r,n)}renderStopAndIndex(e){const t=this.props,a=t.baseMarket,r=t.currentPair,n=t.quoteMarket,i=t.indexPriceNatural,o=e.orderType,l=e.triggerPrice,s=r.tickDecimals,c=this.getTableConfig();if(!m()([V.n.PERPETUAL_STOP_LIMIT,V.n.CANONICAL_STOP_LIMIT,V.n.CANONICAL_SPOT_STOP_LIMIT],o))return E.a.createElement(w.a,{width:c.STOP_INDEX.width},"-");const d=new Z.a(Object($.a)(l),a,n).getNaturalValue().toFixed(s);return E.a.createElement(w.a,{stacked:!0,width:c.STOP_INDEX.width},E.a.createElement("div",null,d),E.a.createElement("div",null,i?i.toFixed(s):"-"))}renderCancelButton(e){const t=e.id,a=e.orderType,r=e.status,n=this.props,i=n.currentPair,o=n.cancelLimitOrder,l=n.clearDexOrder,s=n.legacySigning,c=n.stringGetter,d=n.walletAddress,u=n.walletType;return E.a.createElement(w.a,{className:te.a.mobileFullWidth},r===V.l.CANCELED||r===V.l.FILLED?E.a.createElement(R.g,{className:te.a.mobileFullWidth,onClick:e=>{e.stopPropagation(),l(t)}},c({key:G.a.CLEAR})):E.a.createElement(R.g,{className:te.a.mobileFullWidth,onClick:e=>{e.stopPropagation(),o({pair:i,walletAddress:d,walletType:u,legacySigning:s,orderHash:t,tradeOrderType:a})}},c({key:G.a.CANCEL})))}renderTableRow(e){const t=e.id,a=e.baseAmount,r=e.filledAmount,n=e.orderType,i=e.price,o=e.triggerPrice,l=e.side,s=e.createdAt,c=e.updatedAt,u=e.expiresAt,b=e.status,h=e.cancelReason,f=e.fillOrKill,g=e.trailingPercent,O=this.props,_=O.baseMarket,k=O.currentPair,v=k.tickDecimals,R=k.isInversePerpetual,P=O.isMobile,L=O.quoteMarket,S=O.stringGetter,j=this.state.expandedOrder,N=R?L:_,A=new Z.a(Object($.a)(i),_,L).getNaturalValue().toFixed(v),I=o?`${new Z.a(Object($.a)(o),_,L).getNaturalValue().toFixed(v)} ${L.symbol}`:"-",M=Object(Q.e)(a,N.currency.decimals),D=Object(Q.e)(r,N.currency.decimals),W=Object(z.c)({expiration:y.DateTime.fromISO(u).minus({minutes:V.j}),abbreviateUnits:P,stringGetter:S}),F=W.timeString,q=W.unitString,B=W.hasExpirationWarning,K=`${Object($.a)(r).div(a).times(100).toFixed(2)}%`,U=b===V.l.PENDING,H=b===V.l.CANCELED,ee=b===V.l.FILLED,ae=U?"-":D,re=m()([V.n.PERPETUAL_STOP_LIMIT,V.n.CANONICAL_STOP_LIMIT,V.n.CANONICAL_SPOT_STOP_LIMIT],n),ne=Object(J.e)(b,h),ie=ne?S({key:ne}):"-",oe=V.b[h]||"-",le=F&&!H&&b!==V.l.FILLED&&(re||!f),se=le?`${F}${P?"":" "}${q}`:"-",ce=P?this.renderCancelButton(e):E.a.createElement(p.Fragment,null,E.a.createElement(w.a,{label:S({key:G.a.FILLED_PERCENT})},U||H?"-":K),g&&E.a.createElement(w.a,{label:S({key:G.a.TRAILING_PERCENT})},Object($.a)(g).toFixed(Y.k),"%"),E.a.createElement(w.a,{label:S({key:G.a.CREATED_AT})},y.DateTime.fromISO(s).toFormat("MM/dd/yyyy hh:mm ZZZZ")),E.a.createElement(w.a,{label:S({key:G.a.UPDATED_AT})},y.DateTime.fromISO(c).toFormat("MM/dd/yyyy hh:mm ZZZZ")),H&&E.a.createElement(w.a,{label:S({key:G.a.CANCEL_REASON})},E.a.createElement("span",{className:te.a.uppercase},oe))),de=this.getTableConfig();return E.a.createElement(w.b,{key:t,expandable:!0,expandableContent:ce,hoverContent:this.renderCancelButton(e),isGreyedOut:H||ee,isLoading:U,isExpanded:j===t,onClick:U?d.a:()=>this.onClickRow(t),leftBorderRed:l===X.f.SELL,leftBorderGreen:l===X.f.BUY},E.a.createElement(w.a,{width:de.TYPE.width},E.a.createElement("div",{className:te.a.typeCell},f?E.a.createElement(C,null):E.a.createElement(x,null),E.a.createElement("div",{className:te.a.typeCellText},E.a.createElement("div",null,re&&`${S({key:G.a.ORDER_TYPES_STOP})} `,(!P||!re)&&S(f?{key:G.a.ORDER_TYPES_MARKET}:{key:G.a.ORDER_TYPES_LIMIT})),E.a.createElement("div",{className:T()(te.a.direction,{[te.a.red]:l===X.f.SELL})},l===X.f.BUY?S({key:G.a.BUY}):S({key:G.a.SELL}))))),E.a.createElement(w.a,{stacked:P,width:de.AMOUNT.width},P?E.a.createElement(p.Fragment,null,E.a.createElement("div",null,M," ",_.symbol),E.a.createElement("div",null,ae," ",_.symbol)):M),!P&&E.a.createElement(w.a,{width:de.FILLED.width},ae),!P&&E.a.createElement(w.a,{uppercase:!0,width:de.PRICE.width},re&&f?S({key:G.a.MARKET_PRICE_SHORT}):`${A}`),P?E.a.createElement(w.a,{stacked:!0,uppercase:!0,width:de.PRICE.width},E.a.createElement("div",null,re&&f?S({key:G.a.MARKET_PRICE_ABBREVIATED}):`${A} ${L.symbol}`),E.a.createElement("div",null,I)):this.renderStopAndIndex(e),P?E.a.createElement(w.a,{stacked:!0,uppercase:!0,width:de.STATUS_GOOD_TIL.width},E.a.createElement("div",null,ie),E.a.createElement("div",{className:T()({[te.a.red]:le&&B})},se)):E.a.createElement(p.Fragment,null,E.a.createElement(w.a,{uppercase:!0,width:de.STATUS.width},ie),E.a.createElement(w.a,{uppercase:!0,width:de.GOOD_TIL.width,red:le&&B},se)))}renderContent(){const e=this.props,t=e.orders,a=e.filter,r=e.currentPair,i=e.stringGetter,l=r.marketName;let c,d=i({key:G.a.EMPTY_ALL_ORDERS,params:{MARKET:l}});switch(a){case V.i.ALL_ORDERS:c=t;break;case V.i.MARKET_ORDERS:c=s()(t,e=>m()([V.n.LIMIT,V.n.CANONICAL_CROSS,V.n.PERPETUAL_CROSS],e.orderType)&&e.fillOrKill),d=i({key:G.a.EMPTY_MARKET_ORDERS,params:{MARKET:l}});break;case V.i.LIMIT_ORDERS:c=s()(t,e=>m()([V.n.LIMIT,V.n.CANONICAL_CROSS,V.n.PERPETUAL_CROSS],e.orderType)&&!e.fillOrKill),d=i({key:G.a.EMPTY_LIMIT_ORDERS,params:{MARKET:l}});break;case V.i.STOP_ORDERS:c=s()(t,e=>m()([V.n.PERPETUAL_STOP_LIMIT,V.n.CANONICAL_STOP_LIMIT,V.n.CANONICAL_SPOT_STOP_LIMIT],e.orderType)),d=i({key:G.a.EMPTY_STOP_ORDERS,params:{MARKET:l}});break;default:c=t}return E.a.createElement(p.Fragment,null,o()(c)?E.a.createElement("div",{className:re.a.emptyState},d):E.a.createElement(p.Fragment,null,n()(c,e=>this.renderTableRow(e))))}render(){const e=this.props,t=e.currentPair,a=e.isWalletConnecting,r=e.isWalletReady,i=e.ordersLoaded,o=e.userHasNoAccounts;return E.a.createElement("div",{className:"component-cross-limit-orders"},E.a.createElement(w.c,null,E.a.createElement(v.a,{headerConfig:n()(this.getTableConfig(),e=>e)}),E.a.createElement("div",{className:T()(re.a.content,{[re.a.contentPerpetual]:t&&t.type===H.d.PERPETUAL})},a||!o&&!i&&r?E.a.createElement("div",{className:re.a.loading},E.a.createElement(k.a,null)):this.renderContent())))}}oe.propTypes={baseMarket:h.a.object.isRequired,cancelLimitOrder:h.a.func.isRequired,clearDexOrder:h.a.func.isRequired,currentPair:h.a.object.isRequired,filter:h.a.oneOf(n()(V.i,e=>e)),indexPriceNatural:h.a.object,isMobile:h.a.bool.isRequired,isWalletConnecting:h.a.bool.isRequired,isWalletReady:h.a.bool.isRequired,legacySigning:h.a.bool.isRequired,orders:h.a.array.isRequired,ordersLoaded:h.a.bool.isRequired,quoteMarket:h.a.object.isRequired,stringGetter:h.a.func.isRequired,userHasNoAccounts:h.a.bool.isRequired,walletAddress:h.a.string,walletType:h.a.string};var le=Object(_.k)(Object(f.c)(e=>({baseMarket:Object(q.d)(e),currentPair:Object(q.e)(e),indexPriceNatural:Object(K.d)(e),isMobile:Object(B.d)(e).isMobile,isWalletConnecting:Object(W.e)(e),isWalletReady:Object(W.w)(e),orders:Object(U.e)(e),ordersLoaded:Object(U.l)(e),quoteMarket:Object(q.h)(e),userHasNoAccounts:Object(F.y)(e),walletAddress:Object(W.m)(e),walletType:Object(W.q)(e),legacySigning:Object(W.i)(e)}),e=>Object(g.b)({cancelLimitOrder:M.a,clearDexOrder:D.a},e))(oe));a.d(t,"a",function(){return le})},2156:function(e,t,a){"use strict";var r=a(55),n=a.n(r),i=a(0),o=a.n(i),l=a(1),s=a.n(l),c=a(19),d=a.n(c),u=a(74),m=a(2123);a(2204);function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const p=({config:e,onClick:t,selectedToggleKey:a,className:r,stringGetter:l})=>o.a.createElement("div",{className:d()("component-tabbed-header",r)},o.a.createElement("div",{className:"buttons"},n()(e,({key:e,labelKey:r,badge:n,notification:s,tooltip:c})=>{const u=l({key:r}),p=c?m.a:i.Fragment,E=c?{top:c.top,left:c.left,tooltip:c.name}:{};return o.a.createElement(p,_extends({key:e},E),o.a.createElement("div",{role:"button",tabIndex:0,className:d()("tab",{tab__selected:a===e}),onClick:()=>t(e)},u,n&&n.label&&o.a.createElement("div",{className:d()("badge",{badge__alert:n.hasAlert})},n.label),s&&o.a.createElement("div",{className:"notification-dot"})))})));p.propTypes={className:s.a.string,config:s.a.arrayOf(s.a.shape({key:s.a.string.isRequired,labelKey:s.a.string.isRequired,notification:s.a.bool,tooltip:s.a.shape({top:s.a.number.isRequired,left:s.a.number.isRequired,name:s.a.string.isRequired}),badge:s.a.shape({label:s.a.number,hasAlert:s.a.bool})})).isRequired,onClick:s.a.func.isRequired,selectedToggleKey:s.a.string,stringGetter:s.a.func.isRequired};var E=Object(u.k)(p);a.d(t,"a",function(){return E})},2157:function(e,t,a){"use strict";var r=a(113),n=a.n(r),i=a(116),o=a.n(i),l=a(55),s=a.n(l),c=a(90),d=a.n(c),u=a(0),m=a.n(u),p=a(1),E=a.n(p),b=a(9),h=a.n(b),f=a(52),y=a(34),g=a(19),O=a.n(g),T=a(74),_=a(31),k=a(384),v=a(2130),w=a(2136),R=a(33),P=a(102),L=a(44),S=a(26),j=a(249),C=a(146),N=a(5),A=a(21),I=a(24),x=a(61),M=a(94),D=a(10),W=a(2),F=a(191),q=a(46),B=a(614),K=a(2202),U=a.n(K),V=a(2134),G=a.n(V);const H=(e,t,a)=>({TYPE:{titleKey:N.a.TYPE,width:"12%"},AMOUNT:{titleKey:N.a.AMOUNT,width:"16%",tag:a?t:e},PRICE:{titleKey:N.a.PRICE,width:"15%",tag:t},FEE:{titleKey:N.a.FEE,width:"15%",tag:a?e:t},STATUS:{titleKey:N.a.STATUS,width:"15%"},TIME:{titleKey:N.a.TIME,width:"15%"},TRANSACTION:{titleKey:N.a.TRANSACTION,width:"12%"}}),Y=()=>({TYPE:{titleKey:N.a.TYPE,titleBottomKey:N.a.AMOUNT,width:"36%"},PRICE:{titleKey:N.a.PRICE,titleBottomKey:N.a.FEE,width:"29%"},STATUS:{titleKey:N.a.STATUS,titleBottomKey:N.a.TIME,width:"24%"},TRANSACTION:{titleKey:N.a.TRANSACTION_ABBREVIATED,width:"11%"}});class Z extends u.Component{constructor(...e){super(...e),this.getTableConfig=(()=>{const e=this.props,t=e.currentPair,a=t.baseSymbol,r=t.displayQuoteSymbol,n=t.isInversePerpetual;return e.isMobile?Y():H(a,r,n)})}renderTableRow(e){const t=e.uuid,a=e.amount,r=e.createdAt,n=e.price,i=e.transactionHash,o=e.status,l=e.side,s=e.feeAmount,c=this.props,d=c.allMarkets,p=c.currentPair,E=p.baseSymbol,b=p.quoteSymbol,f=p.tickDecimals,g=p.isInversePerpetual,O=c.isMobile,T=c.stringGetter,k=Object(S.c)({allMarkets:d,symbol:E}),w=Object(S.c)({allMarkets:d,symbol:b}),R=g?w:k,P=g?k:w,L=new M.a(n,k,w).getNaturalValue().toFixed(f),j=Object(q.a)(Object(D.a)(a),R.currency.decimals).toFixed(x.n,h.a.ROUND_HALF_UP),C=s?Object(q.a)(Object(D.a)(s),P.currency.decimals).toFixed(x.n):W.a.ZERO.toFixed(x.n),I=Object(B.b)({datetime:y.DateTime.fromISO(r),abbreviateUnits:O,stringGetter:T}),K=I.timeString,V=I.unitString;let G="-";o===A.d.CONFIRMED?G=T({key:N.a.CONFIRMED}):o===A.d.PENDING?G=T({key:N.a.PENDING}):o===A.d.REVERTED&&(G=T({key:N.a.REVERTED}));const H=l===W.f.BUY?T({key:N.a.BUY}):T({key:N.a.SELL}),Y=this.getTableConfig();return m.a.createElement(v.b,{key:t,leftBorderRed:l===W.f.SELL,leftBorderGreen:l===W.f.BUY},m.a.createElement(v.a,{uppercase:!0,className:U.a.typeCell,width:Y.TYPE.width},l===W.f.BUY?m.a.createElement(_.d,null):m.a.createElement(_.c,null),O?m.a.createElement("div",{className:U.a.typeCellText},m.a.createElement("div",null,H),m.a.createElement("div",null,j," ",R.symbol)):H),!O&&m.a.createElement(v.a,{width:Y.AMOUNT.width},j),m.a.createElement(v.a,{stacked:O,width:Y.PRICE.width},O?m.a.createElement(u.Fragment,null,m.a.createElement("div",null,L," ",w.symbol),m.a.createElement("div",null,C," ",w.symbol)):L),!O&&m.a.createElement(v.a,{width:Y.FEE.width},C),m.a.createElement(v.a,{uppercase:!0,stacked:O,width:Y.STATUS.width},O?m.a.createElement(u.Fragment,null,m.a.createElement("div",null,G),m.a.createElement("div",{className:U.a.uppercaseMobile},`${K}${V}`)):G),!O&&m.a.createElement(v.a,{uppercase:!0,width:Y.TIME.width},`${K} ${V}`),m.a.createElement(v.a,{width:Y.TRANSACTION.width,grey:!0,className:U.a.etherscanLink},m.a.createElement("a",{target:"blank",href:`https://etherscan.io/tx/${i}`},Object(F.f)(i,O)),!O&&m.a.createElement(_.ub,null)))}renderContent(){const e=this.props.fills;return m.a.createElement(u.Fragment,null,d()(e)?m.a.createElement("div",{className:G.a.emptyState},"You have no past order fills."):m.a.createElement(u.Fragment,null,s()(o()(n()(e,"createdAt")),e=>this.renderTableRow(e))))}render(){const e=this.props,t=e.currentPair,a=e.fillsLoaded,r=e.isWalletConnecting,n=e.isWalletInvalid,i=e.userHasNoAccounts;return m.a.createElement("div",{className:U.a.crossFills},m.a.createElement(v.c,null,m.a.createElement(w.a,{headerConfig:s()(this.getTableConfig(),e=>e)}),m.a.createElement("div",{className:O()(G.a.content,{[G.a.contentPerpetual]:t&&t.type===I.d.PERPETUAL})},r||!a&&!i&&!n?m.a.createElement("div",{className:G.a.loading},m.a.createElement(k.a,null)):this.renderContent())))}}Z.propTypes={allMarkets:E.a.array.isRequired,currentPair:E.a.object.isRequired,fills:E.a.array.isRequired,fillsLoaded:E.a.bool.isRequired,isMobile:E.a.bool.isRequired,isWalletConnecting:E.a.bool.isRequired,isWalletInvalid:E.a.bool.isRequired,stringGetter:E.a.func.isRequired,userHasNoAccounts:E.a.bool.isRequired};var $=Object(T.k)(Object(f.c)(e=>({allMarkets:Object(S.d)(e),currentPair:Object(L.e)(e),fills:Object(j.i)(e),fillsLoaded:Object(j.j)(e),isMobile:Object(C.d)(e).isMobile,isWalletConnecting:Object(R.e)(e),isWalletInvalid:Object(R.v)(e),userHasNoAccounts:Object(P.y)(e)}))(Z));a.d(t,"a",function(){return $})},2159:function(e,t,a){},2160:function(e,t,a){e.exports={title:"_1PdUqVekrSRpvnWjZzeVrE",doubleTitle:"wSdqhEheF-kdmofL9_n5G",doubleTooltip:"_1t07aupEV6Hw8ag1Rwh-TC"}},2177:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var r=a(0),n=a.n(r);function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var a,r,n=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createElement("path",{d:"M0 4C0 1.79086 1.79086 0 4 0H12C14.2091 0 16 1.79086 16 4V12C16 14.2091 14.2091 16 12 16H4C1.79086 16 0 14.2091 0 12V4Z",fill:"#4280F9"}),o=n.a.createElement("path",{d:"M6.5 5H11.5",stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l=n.a.createElement("path",{d:"M6.5 8H11.5",stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),s=n.a.createElement("path",{d:"M6.5 11H11.5",stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),c=n.a.createElement("path",{d:"M4 5H4.00556",stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),d=n.a.createElement("path",{d:"M4 8H4.00556",stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),u=n.a.createElement("path",{d:"M4 11H4.00556",stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),m=function SvgList(e){var t=e.svgRef,a=_objectWithoutProperties(e,["svgRef"]);return n.a.createElement("svg",_extends({width:16,height:16,viewBox:"0 0 16 16",fill:"none",ref:t},a),i,o,l,s,c,d,u)},p=n.a.forwardRef(function(e,t){return n.a.createElement(m,_extends({svgRef:t},e))});a.p},2178:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var r=a(0),n=a.n(r);function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var a,r,n=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createElement("path",{d:"M0 4C0 1.79086 1.79086 0 4 0H12C14.2091 0 16 1.79086 16 4V12C16 14.2091 14.2091 16 12 16H4C1.79086 16 0 14.2091 0 12V4Z",fill:"#4280F9"}),o=n.a.createElement("path",{d:"M12 13.3334V6.66669",stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l=n.a.createElement("path",{d:"M8 13.3334V2.66669",stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),s=n.a.createElement("path",{d:"M4 13.3333V9.33331",stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),c=function SvgMarketOrder(e){var t=e.svgRef,a=_objectWithoutProperties(e,["svgRef"]);return n.a.createElement("svg",_extends({width:16,height:16,viewBox:"0 0 16 16",fill:"none",ref:t},a),i,o,l,s)},d=n.a.forwardRef(function(e,t){return n.a.createElement(c,_extends({svgRef:t},e))});a.p},2179:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var r=a(0),n=a.n(r);function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var a,r,n=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createElement("path",{d:"M0 4C0 1.79086 1.79086 0 4 0H12C14.2091 0 16 1.79086 16 4V12C16 14.2091 14.2091 16 12 16H4C1.79086 16 0 14.2091 0 12V4Z",fill:"#4280F9"}),o=n.a.createElement("path",{d:"M12 12L8 8L4 12",stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l=n.a.createElement("line",{x1:4.75,y1:4.25,x2:11.25,y2:4.25,stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),s=function SvgLimitOrder(e){var t=e.svgRef,a=_objectWithoutProperties(e,["svgRef"]);return n.a.createElement("svg",_extends({width:16,height:16,viewBox:"0 0 16 16",fill:"none",ref:t},a),i,o,l)},c=n.a.forwardRef(function(e,t){return n.a.createElement(s,_extends({svgRef:t},e))});a.p},2180:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var r=a(0),n=a.n(r);function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var a,r,n=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createElement("path",{d:"M0 4C0 1.79086 1.79086 0 4 0H12C14.2091 0 16 1.79086 16 4V12C16 14.2091 14.2091 16 12 16H4C1.79086 16 0 14.2091 0 12V4Z",fill:"#4280F9"}),o=n.a.createElement("path",{d:"M8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13Z",stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),l=n.a.createElement("path",{d:"M10 6H6V10H10V6Z",stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),s=function SvgStopOrder(e){var t=e.svgRef,a=_objectWithoutProperties(e,["svgRef"]);return n.a.createElement("svg",_extends({width:16,height:16,viewBox:"0 0 16 16",fill:"none",ref:t},a),i,o,l)},c=n.a.forwardRef(function(e,t){return n.a.createElement(s,_extends({svgRef:t},e))});a.p},2202:function(e,t,a){e.exports={typeCell:"_2avqTeEtkQ60SmQ0f_A__z",typeCellText:"_38JJZl0YRm80WFvV7l0_9u",uppercaseMobile:"_2efOsCFF3WCjxy8VnGhtFE",etherscanLink:"_3T-bDfemeooLD3FO2SSCQN"}},2203:function(e,t,a){e.exports={headerTooltip:"JzTU_56Z8O75-AzNqkZmT",typeCell:"_3x5ahjnac_-Z3NlNQr_tzH",typeCellText:"XKt5CopXogD3bPle1nDxB",direction:"KMcauQm_7xLQGOFRkprh_",red:"_2Wt2drTgFePNslGFCqasqL",mobileFullWidth:"_3R0TaDRjPWQz9nj0rzsgGG",uppercase:"_3gQhn0WAddJG8sd3596Rmd"}},2204:function(e,t,a){}}]);