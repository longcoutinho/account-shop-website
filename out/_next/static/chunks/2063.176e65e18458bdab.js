"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2063],{8456:function(e,t,r){r.d(t,{Z:function(){return P}});var a=r(3366),n=r(7462),s=r(7294),l=r(3961),o=r(8510),i=r(917),c=r(8216),d=r(1657),u=r(948),h=r(1977),m=r(8027);function x(e){return(0,m.ZP)("MuiCircularProgress",e)}(0,h.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var f=r(5893);let v=["className","color","disableShrink","size","style","thickness","value","variant"],g=e=>e,p,b,j,y,w=(0,i.F4)(p||(p=g`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),N=(0,i.F4)(b||(b=g`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),k=e=>{let{classes:t,variant:r,color:a,disableShrink:n}=e,s={root:["root",r,`color${(0,c.Z)(a)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(r)}`,n&&"circleDisableShrink"]};return(0,o.Z)(s,x,t)},S=(0,u.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,c.Z)(r.color)}`]]}})(({ownerState:e,theme:t})=>(0,n.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main}),({ownerState:e})=>"indeterminate"===e.variant&&(0,i.iv)(j||(j=g`
      animation: ${0} 1.4s linear infinite;
    `),w)),Z=(0,u.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),C=(0,u.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.circle,t[`circle${(0,c.Z)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})(({ownerState:e,theme:t})=>(0,n.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,i.iv)(y||(y=g`
      animation: ${0} 1.4s ease-in-out infinite;
    `),N)),E=s.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiCircularProgress"}),{className:s,color:o="primary",disableShrink:i=!1,size:c=40,style:u,thickness:h=3.6,value:m=0,variant:x="indeterminate"}=r,g=(0,a.Z)(r,v),p=(0,n.Z)({},r,{color:o,disableShrink:i,size:c,thickness:h,value:m,variant:x}),b=k(p),j={},y={},w={};if("determinate"===x){let e=2*Math.PI*((44-h)/2);j.strokeDasharray=e.toFixed(3),w["aria-valuenow"]=Math.round(m),j.strokeDashoffset=`${((100-m)/100*e).toFixed(3)}px`,y.transform="rotate(-90deg)"}return(0,f.jsx)(S,(0,n.Z)({className:(0,l.Z)(b.root,s),style:(0,n.Z)({width:c,height:c},y,u),ownerState:p,ref:t,role:"progressbar"},w,g,{children:(0,f.jsx)(Z,{className:b.svg,ownerState:p,viewBox:"22 22 44 44",children:(0,f.jsx)(C,{className:b.circle,style:j,ownerState:p,cx:44,cy:44,r:(44-h)/2,fill:"none",strokeWidth:h})})}))});var P=E},9299:function(e,t,r){var a=r(1222);t.Z=a.Z},1222:function(e,t,r){r.d(t,{Z:function(){return n}});var a=r(7294);function n({controlled:e,default:t,name:r,state:n="value"}){let{current:s}=a.useRef(void 0!==e),[l,o]=a.useState(t),i=a.useCallback(e=>{s||o(e)},[]);return[s?e:l,i]}},9326:function(e,t,r){r.d(t,{Z:function(){return o}});var a,n=r(7294);let s=0,l=(a||(a=r.t(n,2)))["useId".toString()];function o(e){if(void 0!==l){let t=l();return null!=e?e:t}return function(e){let[t,r]=n.useState(e);return n.useEffect(()=>{null==t&&r(`mui-${s+=1}`)},[t]),e||t}(e)}},8410:function(e,t,r){r.d(t,{Z:function(){return l}});var a=r(5893),n=r(1954),s=r(5616);function l(e){let{icon:t,sx:r,...l}=e;return(0,a.jsx)(s.Z,{component:n.JO,icon:t,sx:{...r},...l})}},1590:function(e,t,r){r.r(t);var a=r(5893),n=r(118),s=r(5869),l=r(777),o=r(3946),i=r(9417),c=r(8456),d=r(5454),u=r(4808),h=r(5616),m=r(7294),x=r(9134),f=r(5675),v=r.n(f),g=r(4855),p=r.n(g),b=r(8410),j=r(6720);let y=e=>{let{isQuick:t}=e,{enqueueSnackbar:r}=(0,j.Ds)(),[f,g]=(0,m.useState)([]),[y,N]=(0,m.useState)(),[k,S]=(0,m.useState)(""),[Z,C]=(0,m.useState)(!1),[E,P]=(0,m.useState)(!1),[M,R]=(0,m.useState)(""),[_,A]=(0,m.useState)(""),[D,I]=(0,m.useState)([]),[z,T]=(0,m.useState)();(0,m.useEffect)(()=>{$(),L()},[]);let $=async()=>{try{let e=await (0,s.oN)();(null==e?void 0:e.status)===n.MG.OK&&g(null==e?void 0:e.data)}catch(e){console.log(e)}},G=()=>{P(!1),A("")},L=async()=>{try{let e=await (0,s.os)();console.log(e),(null==e?void 0:e.status)===n.MG.OK&&I(null==e?void 0:e.data)}catch(e){console.log(e)}},O=async()=>{y&&z&&k&&(P(!0),setTimeout(()=>{x.Am.success("Thanh to\xe1n th\xe0nh c\xf4ng")},4e3))},B=async()=>{if(_&&k)try{C(!0);let e=await (0,s.MJ)(k,_);console.log(e),(null==e?void 0:e.status)===n.MG.OK?(R(e.data),x.Am.success("Th\xe0nh c\xf4ng")):x.Am.error("Kh\xf4ng th\xe0nh c\xf4ng"),C(!1),S(""),A("")}catch(e){C(!1),x.Am.error("Kh\xf4ng th\xe0nh c\xf4ng")}},J=()=>{r("Copied!"),void 0!==navigator.clipboard&&navigator.clipboard.writeText(M||"")};return(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsx)("p",{className:"w-full bg-gray-200 font-bold py-2 px-4 text-lg my-4",children:"Chọn g\xf3i"}),(0,a.jsx)("div",{className:"grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3",children:null==f?void 0:f.map(e=>{var t;return(0,a.jsxs)("div",{onClick:()=>N(e),className:"w-full rounded-lg cursor-pointer hover:scale-105  hover:shadow-lg transition-all hover:text-[#f3a44a] ".concat(e.id===(null==y?void 0:y.id)?" border-[#f3a44a] shadow-md border-2":" border-[#00000038] border-2"),children:[(0,a.jsxs)("div",{className:"bg-[url(/img/diamond-bg.jpg)] bg-cover bg-no-repeat rounded-t-lg bg-center relative",children:[(0,a.jsx)(v(),{src:e.image,alt:"game",width:135,height:100,className:"w-full h-[150px] rounded-t-lg m-auto"}),(0,a.jsxs)("div",{className:" flex absolute bottom-0 left-1/2 -translate-x-1/2 ",children:[(0,a.jsx)(v(),{src:"/img/diamond.png",alt:"diamond",width:20,height:20,className:"w-5 h-5"}),(0,a.jsx)("p",{className:"text-sm text-yellow-400 mb-2",children:e.amount})]})]}),(0,a.jsx)("p",{className:"text-center text-sm my-2 hover:text-[#f3a44a]",children:(null===(t=e.price)||void 0===t?void 0:t.toLocaleString("vi-VN"))+e.currency})]},e.id)})}),(0,a.jsxs)("div",{className:" w-full",children:[(0,a.jsxs)("div",{className:"flex mt-8 gap-4 items-center",children:[(0,a.jsx)("p",{className:"text-base font-semibold min-w-16",children:"IGG ID: "}),(0,a.jsx)("input",{className:"border border-gray-300 rounded h-10",value:k,onChange:e=>S(e.target.value)})]}),t&&(0,a.jsxs)("div",{className:"flex mt-4 sm:mt-8 gap-4 items-center flex-wrap",children:[(0,a.jsx)("p",{className:"text-base font-semibold min-w-16",children:"OTP: "}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("input",{className:"border border-gray-300 rounded h-10",type:"text",value:_,maxLength:6,onChange:e=>A(e.target.value)})," ",(0,a.jsx)("p",{className:"absolute -bottom-6 left-0 whitespace-nowrap text-xs text-blue-600 mt-3",children:"(* OTP will be sent via your ID)"})]}),(0,a.jsx)("p",{className:"text-[#e6a357] cursor-pointer underline",onClick:B,children:"Get code"})]})]}),M&&(0,a.jsxs)("div",{className:"text-wrap text-center w-full mt-4",children:[(0,a.jsx)("span",{children:"Token của bạn:"}),(0,a.jsx)("span",{className:"ml-3 font-semibold",children:(null==M?void 0:M.slice(0,8))+"..."+(null==M?void 0:M.slice(-8))}),(0,a.jsx)(p(),{text:M,onCopy:J,children:(0,a.jsx)(l.Z,{title:"Copy",children:(0,a.jsx)(o.Z,{children:(0,a.jsx)(b.Z,{icon:"eva:copy-fill",width:24,height:24})})})})]}),(0,a.jsx)("p",{className:"w-full bg-gray-200 font-bold py-2 px-4 text-lg my-8",children:"Chọn phương thức thanh to\xe1n"}),(0,a.jsx)("div",{className:"flex flex-wrap gap-3",children:null==D?void 0:D.map(e=>(0,a.jsxs)("div",{onClick:()=>T(e),className:" min-w-24 w-36 rounded-lg cursor-pointer hover:scale-105  hover:shadow-lg transition-all hover:text-[#f3a44a] ".concat(e.id===(null==z?void 0:z.id)?" border-[#f3a44a] shadow-md border-2":" border-[#00000038] border-2"),children:[(0,a.jsx)(v(),{src:e.image,alt:"game",width:135,height:100,className:"w-full h-[100px] rounded-t-lg"}),(0,a.jsx)("p",{className:"text-center text-sm my-2 hover:text-[#f3a44a]",children:e.name})]},e.id))}),(0,a.jsx)("div",{className:"flex flex-col mt-4 items-center",children:(0,a.jsxs)(i.Z,{onClick:O,className:" w-32 bg-[#052d75] text-white min-h-11 mt-4  \n          ".concat(y&&z&&(t?_:k)?"cursor-pointer hover:bg-[#30466b]":"cursor-not-allowed opacity-50 hover:bg-[#052d75] hover:text-white","\n          "),children:[Z&&(0,a.jsx)(c.Z,{size:20,color:"inherit",className:"mr-2"}),"X\xe1c nhận"]})}),E&&(0,a.jsx)(d.Z,{open:E,onClose:G,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",closeAfterTransition:!0,slots:{backdrop:u.Z},slotProps:{backdrop:{timeout:500}},children:(0,a.jsx)(h.Z,{sx:w,children:(0,a.jsx)("div",{className:"w-full flex justify-center",children:(0,a.jsx)(v(),{src:"/img/vietqr.jpg",alt:"qr",width:500,height:500})})})})]})};t.default=y;let w={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4}},5869:function(e,t,r){r.d(t,{IP:function(){return o},MJ:function(){return u},Oq:function(){return l},dx:function(){return d},g_:function(){return i},oN:function(){return h},os:function(){return c},wh:function(){return s}});var a=r(118),n=r(9154);let s=async()=>{let e=a.zj.GAME_SERVICE;return(0,n.vn)(e,null)},l=async()=>{let e=a.zj.CARD_SERVICE;return(0,n.vn)(e,null)},o=async e=>{let t=a.zj.ITEM_SERVICE+"/card/".concat(e);return(0,n.vn)(t,null)},i=async e=>{let t=a.zj.BASE_URL+"/sale-order/create";return(0,n.NJ)(t,e)},c=async()=>{let e=a.zj.BASE_URL+"/payment/method";return(0,n.vn)(e,null)},d=async e=>{let t=a.zj.BASE_URL+"/top-up-game/lord-mobile/send-otp/".concat(e);return(0,n.vn)(t,null)},u=async(e,t)=>{let r=a.zj.BASE_URL+"/top-up-game/lord-mobile/token/".concat(e);return(0,n.NJ)(r,{otp:t})},h=async()=>{let e=a.zj.BASE_URL+"/top-up-item/1";return(0,n.vn)(e,null)}}}]);