(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8252],{8456:function(e,r,t){"use strict";t.d(r,{Z:function(){return C}});var n=t(3366),l=t(7462),i=t(7294),s=t(6010),a=t(8510),o=t(917),c=t(8216),d=t(1657),u=t(948),m=t(1977),h=t(8027);function x(e){return(0,h.ZP)("MuiCircularProgress",e)}(0,m.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var v=t(5893);let f=["className","color","disableShrink","size","style","thickness","value","variant"],p=e=>e,g,j,N,b,w=(0,o.F4)(g||(g=p`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),y=(0,o.F4)(j||(j=p`
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
`)),k=e=>{let{classes:r,variant:t,color:n,disableShrink:l}=e,i={root:["root",t,`color${(0,c.Z)(n)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(t)}`,l&&"circleDisableShrink"]};return(0,a.Z)(i,x,r)},S=(0,u.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,c.Z)(t.color)}`]]}})(({ownerState:e,theme:r})=>(0,l.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:r.transitions.create("transform")},"inherit"!==e.color&&{color:(r.vars||r).palette[e.color].main}),({ownerState:e})=>"indeterminate"===e.variant&&(0,o.iv)(N||(N=p`
      animation: ${0} 1.4s linear infinite;
    `),w)),Z=(0,u.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),_=(0,u.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.circle,r[`circle${(0,c.Z)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})(({ownerState:e,theme:r})=>(0,l.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,o.iv)(b||(b=p`
      animation: ${0} 1.4s ease-in-out infinite;
    `),y)),P=i.forwardRef(function(e,r){let t=(0,d.Z)({props:e,name:"MuiCircularProgress"}),{className:i,color:a="primary",disableShrink:o=!1,size:c=40,style:u,thickness:m=3.6,value:h=0,variant:x="indeterminate"}=t,p=(0,n.Z)(t,f),g=(0,l.Z)({},t,{color:a,disableShrink:o,size:c,thickness:m,value:h,variant:x}),j=k(g),N={},b={},w={};if("determinate"===x){let e=2*Math.PI*((44-m)/2);N.strokeDasharray=e.toFixed(3),w["aria-valuenow"]=Math.round(h),N.strokeDashoffset=`${((100-h)/100*e).toFixed(3)}px`,b.transform="rotate(-90deg)"}return(0,v.jsx)(S,(0,l.Z)({className:(0,s.Z)(j.root,i),style:(0,l.Z)({width:c,height:c},b,u),ownerState:g,ref:r,role:"progressbar"},w,p,{children:(0,v.jsx)(Z,{className:j.svg,ownerState:g,viewBox:"22 22 44 44",children:(0,v.jsx)(_,{className:j.circle,style:N,ownerState:g,cx:44,cy:44,r:(44-m)/2,fill:"none",strokeWidth:m})})}))});var C=P},71:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/payment",function(){return t(913)}])},9202:function(e,r,t){"use strict";var n=t(5893);t(7294);var l=t(9008),i=t.n(l),s=t(118),a=t(2329),o=t(7357),c=t(2119),d=t(6127),u=t(1163);let m=e=>{let{children:r,title:t,admin:l,menuIndex:m,cartAmount:h,isHome:x}=e;return(0,u.useRouter)(),(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,n.jsx)(i(),{children:(0,n.jsx)("title",{children:s.Ti.PREFIX+t})}),(0,n.jsx)(c.Z,{}),(0,n.jsxs)(o.Z,{className:"w-full flex flex-col h-screen overflow-y-auto overflow-x-hidden",children:[(0,n.jsx)(a.Z,{}),(0,n.jsxs)("div",{className:"min-h-[calc(100vh-78px)] mt-[78px]",children:[(0,n.jsx)("div",{className:" max-w-[1280px] mx-auto w-full pt-10 px-[2%] sm:px-[5%] min-h-[calc(100%-188px)] lg:min-h-[calc(100%-164px)] pb-8",children:r}),(0,n.jsx)(d.Z,{})]})]})]})};r.Z=m},913:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return g}});var n=t(5893),l=t(9202),i=t(118),s=t(7294),a=t(5675),o=t.n(a),c=t(5869),d=t(3321),u=t(8456),m=t(9134),h=t(1163),x=t(1649),v=t(1469);let f=()=>{let e=(0,h.useRouter)(),r=(0,x.I0)(),{buyNow:t,orderDetail:l}=(0,x.v9)(e=>e.cart),[a,f]=(0,s.useState)(),[p,g]=(0,s.useState)([]),[j,N]=(0,s.useState)(),[b,w]=(0,s.useState)(0),[y,k]=(0,s.useState)(!1);(0,s.useEffect)(()=>{S();let e=t?l:JSON.parse(localStorage.getItem(i.k2.SHOPPING_CART));if(e&&(null==e?void 0:e.length)>0){let r=0;null==e||e.map(e=>{r+=(null==e?void 0:e.amount)*(null==e?void 0:e.price)}),w(r)}f(e)},[t,l]);let S=async()=>{try{let e=await (0,c.os)();(null==e?void 0:e.status)===i.MG.OK&&g(null==e?void 0:e.data)}catch(e){console.log(e)}},Z=async()=>{var r,n,l;try{if(j){k(!0);let l=await (0,c.g_)({orderList:null==a?void 0:a.map(e=>{var r;return{itemId:null==e?void 0:null===(r=e.item)||void 0===r?void 0:r.id,amount:e.amount}}),price:b,method:null==j?void 0:j.id});(null==l?void 0:l.status)===i.MG.OK?(k(!1),m.Am.success("Mua th\xe0nh c\xf4ng"),t||localStorage.removeItem(i.k2.SHOPPING_CART),e.push(null==l?void 0:null===(r=l.data)||void 0===r?void 0:r.hosted_url)):(k(!1),(null==l?void 0:null===(n=l.response)||void 0===n?void 0:n.status)===i.MG.UNAUTH?m.Am.error("Bạn chưa đăng nhập"):m.Am.error("Mua kh\xf4ng th\xe0nh c\xf4ng"))}}catch(e){k(!1),(null==e?void 0:null===(l=e.response)||void 0===l?void 0:l.status)===i.MG.UNAUTH?m.Am.error("Bạn chưa đăng nhập"):m.Am.error("Mua kh\xf4ng th\xe0nh c\xf4ng")}},_=(e,t)=>{let n=null==a?void 0:a.filter(r=>r.cardId===t&&r.item.id===e),l=null==a?void 0:a.filter(e=>!(null==n?void 0:n.includes(e)));l&&(localStorage.setItem(i.k2.SHOPPING_CART,JSON.stringify(l)),f(l),r((0,v.x$)(null==l?void 0:l.length)))};return(0,n.jsx)("div",{className:"flex flex-col w-full gap-4",children:a&&(null==a?void 0:a.length)>0?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:" flex flex-col w-full",children:[(0,n.jsx)("div",{className:"mt-4",children:a&&(null==a?void 0:a.map((e,r)=>{var t,l;return(0,n.jsxs)("div",{className:"flex justify-between border-gray-200 border px-4 py-2 mb-4 relative",children:[(0,n.jsxs)("div",{className:"flex items-center gap-3",children:[(0,n.jsx)(o(),{src:null==e?void 0:null===(t=e.item)||void 0===t?void 0:t.image,alt:"order",width:90,height:50,className:"h-[50px]"}),(0,n.jsx)("p",{children:null==e?void 0:null===(l=e.item)||void 0===l?void 0:l.name})]}),(0,n.jsxs)("div",{className:"w-1/2 flex justify-between items-center",children:[(0,n.jsxs)("p",{className:"",children:["Số lượng:"," ",(0,n.jsx)("span",{className:" font-semibold",children:e.amount})]}),(0,n.jsxs)("p",{children:["Gi\xe1 tiền:"," ",(0,n.jsxs)("span",{className:" font-semibold",children:[(e.price*e.amount).toLocaleString("vi-VN"),"đ"]})]})]}),(0,n.jsx)(d.Z,{style:{border:"1px solid red"},onClick:()=>_(e.item.id,e.cardId),className:" absolute top-5 -right-10 border text-red-500 font-bold w-6 h-6",children:"X"})]},r)}))}),(0,n.jsxs)("p",{className:"text-right w-full text-xl font-semibold mt-4",children:["Tổng tiền:"," ",(0,n.jsxs)("span",{className:" font-semibold text-2xl text-red-500",children:[b.toLocaleString("vi-VN"),"đ"]})]})]}),(0,n.jsxs)("div",{className:" w-full",children:[(0,n.jsx)("p",{className:"w-fit py-2 px-4 my-4 mx-auto",children:"Chọn phương thức thanh to\xe1n:"}),(0,n.jsx)("div",{className:" w-full flex justify-center flex-wrap",children:null==p?void 0:p.map(e=>(0,n.jsx)("div",{onClick:()=>{N(e)},className:" p-0.5 max-w-36 rounded-lg cursor-pointer hover:scale-105  hover:shadow-lg transition-all ".concat(e.id===(null==j?void 0:j.id)?" border-[#f3a44a] shadow-md border-2":" border-[#1b1b1b1f] border-2"),children:(0,n.jsx)(o(),{src:e.image,alt:"card",width:150,height:100,className:" mx-auto h-[100px]"})},e.id))}),(0,n.jsx)("div",{className:"w-full flex justify-center mt-4",children:(0,n.jsxs)(d.Z,{onClick:Z,className:"w-[120px] mx-auto bg-[#052d75] text-white min-h-11 mt-4 capitalize ".concat(j?"cursor-pointer hover:bg-[#30466b]":"cursor-not-allowed opacity-50 hover:bg-[#052d75] hover:text-white"),children:[y&&(0,n.jsx)(u.Z,{size:20,color:"inherit",className:"mr-2"}),"Thanh to\xe1n"]})})]})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"mx-auto text-4xl font-bold border border-gray-500 border-dashed px-20 py-32 w-fit mt-6",children:"Giỏ h\xe0ng trống"}),(0,n.jsx)(d.Z,{onClick:()=>{e.push(i.Q.BUY_CARD)},className:"w-[200px] bg-[#052d75] text-white min-h-11 mt-4 mx-auto cursor-pointer hover:bg-[#30466b] capitalize",children:"Tiếp tục mua sắm"})]})})},p=()=>(0,n.jsxs)(l.Z,{title:i.Ti.PAYMENT,menuIndex:1,children:[(0,n.jsx)("p",{className:"font-bold text-2xl mb-4",children:i.Ti.PAYMENT}),(0,n.jsx)(f,{})]});var g=p},5869:function(e,r,t){"use strict";t.d(r,{IP:function(){return a},MJ:function(){return u},Oq:function(){return s},dx:function(){return d},g_:function(){return o},os:function(){return c},wh:function(){return i}});var n=t(118),l=t(9154);let i=async()=>{let e=n.zj.GAME_SERVICE;return(0,l.vn)(e,null)},s=async()=>{let e=n.zj.CARD_SERVICE;return(0,l.vn)(e,null)},a=async e=>{let r=n.zj.ITEM_SERVICE+"/card/".concat(e);return(0,l.vn)(r,null)},o=async e=>{let r=n.zj.BASE_URL+"/sale-order/create";return(0,l.NJ)(r,e)},c=async()=>{let e=n.zj.BASE_URL+"/payment/method";return(0,l.vn)(e,null)},d=async e=>{let r=n.zj.BASE_URL+"/top-up-game/lord-mobile/send-otp/".concat(e);return(0,l.vn)(r,null)},u=async(e,r)=>{let t=n.zj.BASE_URL+"/top-up-game/lord-mobile/token/".concat(e);return(0,l.NJ)(t,{otp:r})}}},function(e){e.O(0,[4976,3662,746,8415,4706,9774,2888,179],function(){return e(e.s=71)}),_N_E=e.O()}]);