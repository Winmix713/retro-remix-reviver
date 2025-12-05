var T=Object.defineProperty,U=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var R=(r,a,e)=>a in r?T(r,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[a]=e,_=(r,a)=>{for(var e in a||(a={}))K.call(a,e)&&R(r,e,a[e]);if(L)for(var e of L(a))A.call(a,e)&&R(r,e,a[e]);return r},B=(r,a)=>U(r,O(a));import{J as X,K as E,L as W,_ as J,M as s,N as V,a as d,O as p,s as Y,R as t,U as F,V as y,W as G,X as H,Y as P,b as Q,P as g}from"./index-CjZb1nI3.js";import{r as Z}from"./vendor-CHNy6hz8.js";function w(r){return X("MuiLinearProgress",r)}E("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const S=["className","color","value","valueBuffer","variant"];let l=r=>r,I,N,M,j,q,z;const C=4,rr=P(I||(I=l`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),ar=P(N||(N=l`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),er=P(M||(M=l`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),or=r=>{const{classes:a,variant:e,color:o}=r,c={root:["root",`color${t(o)}`,e],dashed:["dashed",`dashedColor${t(o)}`],bar1:["bar",`barColor${t(o)}`,(e==="indeterminate"||e==="query")&&"bar1Indeterminate",e==="determinate"&&"bar1Determinate",e==="buffer"&&"bar1Buffer"],bar2:["bar",e!=="buffer"&&`barColor${t(o)}`,e==="buffer"&&`color${t(o)}`,(e==="indeterminate"||e==="query")&&"bar2Indeterminate",e==="buffer"&&"bar2Buffer"]};return F(c,w,a)},x=(r,a)=>a==="inherit"?"currentColor":r.vars?r.vars.palette.LinearProgress[`${a}Bg`]:r.palette.mode==="light"?G(r.palette[a].main,.62):H(r.palette[a].main,.5),tr=p("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.root,a[`color${t(e.color)}`],a[e.variant]]}})(({ownerState:r,theme:a})=>s({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:x(a,r.color)},r.color==="inherit"&&r.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},r.variant==="buffer"&&{backgroundColor:"transparent"},r.variant==="query"&&{transform:"rotate(180deg)"})),nr=p("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.dashed,a[`dashedColor${t(e.color)}`]]}})(({ownerState:r,theme:a})=>{const e=x(a,r.color);return s({position:"absolute",marginTop:0,height:"100%",width:"100%"},r.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${e} 0%, ${e} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},y(j||(j=l`
    animation: ${0} 3s infinite linear;
  `),er)),ir=p("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.bar,a[`barColor${t(e.color)}`],(e.variant==="indeterminate"||e.variant==="query")&&a.bar1Indeterminate,e.variant==="determinate"&&a.bar1Determinate,e.variant==="buffer"&&a.bar1Buffer]}})(({ownerState:r,theme:a})=>s({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:r.color==="inherit"?"currentColor":(a.vars||a).palette[r.color].main},r.variant==="determinate"&&{transition:`transform .${C}s linear`},r.variant==="buffer"&&{zIndex:1,transition:`transform .${C}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&y(q||(q=l`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),rr)),sr=p("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.bar,a[`barColor${t(e.color)}`],(e.variant==="indeterminate"||e.variant==="query")&&a.bar2Indeterminate,e.variant==="buffer"&&a.bar2Buffer]}})(({ownerState:r,theme:a})=>s({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},r.variant!=="buffer"&&{backgroundColor:r.color==="inherit"?"currentColor":(a.vars||a).palette[r.color].main},r.color==="inherit"&&{opacity:.3},r.variant==="buffer"&&{backgroundColor:x(a,r.color),transition:`transform .${C}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&y(z||(z=l`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),ar)),lr=Z.forwardRef(function(a,e){const o=W({props:a,name:"MuiLinearProgress"}),{className:c,color:v="primary",value:h,valueBuffer:$,variant:i="indeterminate"}=o,D=J(o,S),u=s({},o,{color:v,variant:i}),f=or(u),k=V(),b={},m={bar1:{},bar2:{}};if((i==="determinate"||i==="buffer")&&h!==void 0){b["aria-valuenow"]=Math.round(h),b["aria-valuemin"]=0,b["aria-valuemax"]=100;let n=h-100;k&&(n=-n),m.bar1.transform=`translateX(${n}%)`}if(i==="buffer"&&$!==void 0){let n=($||0)-100;k&&(n=-n),m.bar2.transform=`translateX(${n}%)`}return d.jsxs(tr,s({className:Y(f.root,c),ownerState:u,role:"progressbar"},b,{ref:e},D,{children:[i==="buffer"?d.jsx(nr,{className:f.dashed,ownerState:u}):null,d.jsx(ir,{className:f.bar1,ownerState:u,style:m.bar1}),i==="determinate"?null:d.jsx(sr,{className:f.bar2,ownerState:u,style:m.bar2})]}))}),cr=({barColor:r="azure",trackColor:a,value:e,style:o={}})=>{const{theme:c}=Q(),v=`var(--${a})`||(c==="light"?"var(--body)":"transparent");return d.jsx(lr,{className:"progressbar",variant:"determinate","aria-label":e,value:e,sx:B(_({backgroundColor:v,height:6,borderRadius:2},o),{"& .MuiLinearProgress-bar":{backgroundColor:`var(--${r})`,borderRadius:2}})})};cr.propTypes={barColor:g.string,trackColor:g.string,value:g.number.isRequired,style:g.object};export{cr as P};
