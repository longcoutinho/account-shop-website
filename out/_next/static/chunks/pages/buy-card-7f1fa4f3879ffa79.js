(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5505],{7401:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/buy-card",function(){return t(4463)}])},8152:function(e,n,t){"use strict";t.d(n,{Y:function(){return p}});var l=t(5893),r=t(948),a=t(2489),o=t(9417),i=t(1413),s=t(7294);let c={100:"#daecff",200:"#b6daff",300:"#66b2ff",400:"#3399ff",500:"#007fff",600:"#0072e5",700:"#0059B2",800:"#004c99"},d={50:"#F3F6F9",100:"#E5EAF2",200:"#DAE2ED",300:"#C7D0DD",400:"#B0B8C4",500:"#9DA8B7",600:"#6B7A90",700:"#434D5B",800:"#303740",900:"#1C2025"};function u(e){return(0,l.jsx)(a.G,{icon:o.r8p})}function x(e){return(0,l.jsx)(a.G,{icon:o.Kl4})}let m=(0,r.ZP)("div")(e=>{let{theme:n}=e;return"\n  font-family: 'IBM Plex Sans', sans-serif;\n  font-weight: 400;\n  color: ".concat("dark"===n.palette.mode?d[300]:d[500],";\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  ")}),f=(0,r.ZP)("input")(e=>{let{theme:n}=e;return"\n  font-size: 0.875rem;\n  font-family: inherit;\n  font-weight: 400;\n  line-height: 1.375;\n  color: ".concat("dark"===n.palette.mode?d[300]:d[900],";\n  background: ").concat("dark"===n.palette.mode?d[900]:"#fff",";\n  border: 1px solid ").concat("dark"===n.palette.mode?d[700]:d[200],";\n  box-shadow: 0px 2px 4px ").concat("dark"===n.palette.mode?"rgba(0,0,0, 0.5)":"rgba(0,0,0, 0.05)",";\n  border-radius: 8px;\n  margin: 0 8px;\n  padding: 10px 12px;\n  outline: 0;\n  min-width: 0;\n  width: 4rem;\n  text-align: center;\n  \n  &:hover {\n    border-color: ").concat(c[400],";\n  }\n  \n  &:focus {\n    border-color: ").concat(c[400],";\n    box-shadow: 0 0 0 3px ").concat("dark"===n.palette.mode?c[700]:c[200],";\n  }\n  \n  &:focus-visible {\n    outline: 0;\n  }\n  ")}),h=(0,r.ZP)("button")(e=>{let{theme:n}=e;return"\n  font-family: 'IBM Plex Sans', sans-serif;\n  font-size: 0.875rem;\n  box-sizing: border-box;\n  line-height: 1.5;\n  border: 1px solid;\n  border-radius: 999px;\n  border-color: ".concat("dark"===n.palette.mode?d[800]:d[200],";\n  background: ").concat("dark"===n.palette.mode?d[900]:d[50],";\n  color: ").concat("dark"===n.palette.mode?d[200]:d[900],";\n  width: 32px;\n  height: 32px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 120ms;\n  \n  &:hover {\n    cursor: pointer;\n    background: ").concat("dark"===n.palette.mode?c[700]:c[500],";\n    border-color: ").concat("dark"===n.palette.mode?c[500]:c[400],";\n    color: ").concat(d[50],";\n  }\n  \n  &:focus-visible {\n    outline: 0;\n  }\n  \n  &.increment {\n    order: 1;\n  }\n  ")}),p=s.forwardRef(function(e,n){return(0,l.jsx)(i.Y,{slots:{root:m,input:f,incrementButton:h,decrementButton:h},slotProps:{incrementButton:{children:(0,l.jsx)(u,{fontSize:"small"}),className:"increment"},decrementButton:{children:(0,l.jsx)(x,{fontSize:"small"})}},...e,ref:n})})},9202:function(e,n,t){"use strict";var l=t(5893);t(7294);var r=t(9008),a=t.n(r),o=t(118),i=t(2329),s=t(7357),c=t(2119),d=t(6127),u=t(1163);let x=e=>{let{children:n,title:t,admin:r,menuIndex:x,cartAmount:m,isHome:f}=e;return(0,u.useRouter)(),(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,l.jsx)(a(),{children:(0,l.jsx)("title",{children:o.Ti.PREFIX+t})}),(0,l.jsx)(c.Z,{}),(0,l.jsxs)(s.Z,{className:"w-full flex flex-col h-screen overflow-y-auto overflow-x-hidden",children:[(0,l.jsx)(i.Z,{}),(0,l.jsx)("div",{className:" max-w-[1280px] mx-auto w-full mt-28 mb-14  px-[5%] min-h-[calc(100vh-78px-96px)]",children:n}),(0,l.jsx)(d.Z,{})]})]})};n.Z=x},4463:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var l=t(5893),r=t(9202),a=t(118),o=t(5869),i=t(7294),s=t(3321),c=t(1649),d=t(1469),u=t(1163);let x=e=>{var n;let{card:t,cardValue:r,amount:o,reset:i}=e,x=(0,c.I0)(),m=(0,u.useRouter)(),f=()=>{if(o&&r&&(null==r?void 0:r.value)&&r.value*o>0){var e;let n;let l=JSON.parse(null!==(e=localStorage.getItem(a.k2.SHOPPING_CART))&&void 0!==e?e:"[]"),s={item:t,cardId:r.id,price:r.value,amount:o};n=l?l.filter(e=>e.item&&e.item.id===(null==t?void 0:t.id)&&e.cardId===r.id).map(e=>({...e,amount:e.amount+o})):[];let c=n.length>0?[...l.filter(e=>n[0].cardId!==e.cardId),...n]:[...l,s];localStorage.setItem(a.k2.SHOPPING_CART,"".concat(JSON.stringify(c))),x((0,d.x$)(null==c?void 0:c.length)),i()}},h=()=>{let e={item:t,price:r.value,amount:o||0};x((0,d.L1)(!0)),x((0,d.vh)([e])),null==m||m.push(a.Q.PAYMENT)};return(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"w-full bg-gray-200 py-2 px-4 text-xl my-4",children:"Chi tiết"}),(0,l.jsxs)("div",{className:"mx-3",children:[(0,l.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,l.jsx)("p",{children:"Thẻ: "}),(0,l.jsx)("p",{className:"text-red-500 font-medium",children:null==t?void 0:t.name})]}),(0,l.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,l.jsx)("p",{children:"Mệnh gi\xe1 thẻ: "}),(0,l.jsxs)("p",{className:"text-red-500 font-medium",children:[null==r?void 0:null===(n=r.value)||void 0===n?void 0:n.toLocaleString("vi-VN"),"đ"," "]})]}),(0,l.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,l.jsx)("p",{children:"Số lượng: "}),(0,l.jsx)("p",{className:"text-red-500 font-medium",children:o})]}),(0,l.jsx)("hr",{className:"text-black mb-4"}),(0,l.jsxs)("div",{className:"flex justify-between mb-4",children:[(0,l.jsx)("p",{children:"Tổng tiền: "}),(0,l.jsxs)("p",{className:"text-red-500 font-semibold text-xl",children:[o&&r&&(null==r?void 0:r.value)?(r.value*o).toLocaleString("vi-VN"):0,"đ"]})]}),(0,l.jsxs)("div",{className:"flex gap-3",children:[(0,l.jsx)(s.Z,{onClick:f,style:{border:"1px solid #0e1522"},className:"w-full  text-[#05296b] min-h-11 mt-4 capitalize ".concat(o&&r&&(null==r?void 0:r.value)&&r.value*o>0?"cursor-pointer hover:bg-[#05296b1f]":"cursor-not-allowed opacity-50 hover:bg-white"),children:"Th\xeam v\xe0o giỏ"}),(0,l.jsx)(s.Z,{onClick:h,className:"w-full bg-[#05296b] text-white min-h-11 mt-4 capitalize ".concat(o&&r&&(null==r?void 0:r.value)&&r.value*o>0?"cursor-pointer hover:bg-[#30466b]":"cursor-not-allowed opacity-50 hover:bg-[#05296b] hover:text-white"),children:"Mua ngay"})]})]})]})};var m=t(8152),f=t(5675),h=t.n(f);let p=()=>{let[e,n]=(0,i.useState)([]),[t,r]=(0,i.useState)([]),[s,c]=(0,i.useState)(),[d,u]=(0,i.useState)({value:0,id:0}),[f,p]=(0,i.useState)(0);(0,i.useEffect)(()=>{v()},[]);let v=async()=>{try{let e=await (0,o.Oq)();(null==e?void 0:e.status)===a.MG.OK&&n(null==e?void 0:e.data)}catch(e){console.log(e)}},b=async e=>{try{let n=await (0,o.IP)(e);(null==n?void 0:n.status)===a.MG.OK&&r(null==n?void 0:n.data)}catch(e){console.log(e)}},g=()=>{u({value:0,id:0}),p(0)};return(0,l.jsxs)("div",{className:"flex w-full gap-4",children:[(0,l.jsxs)("div",{className:" flex flex-col w-2/3",children:[(0,l.jsx)("p",{className:"w-full bg-gray-200 font-bold py-2 px-4 text-lg my-4",children:"Chọn nh\xe0 cung cấp"}),(0,l.jsx)("div",{className:"flex flex-wrap gap-2",children:null==e?void 0:e.map(e=>(0,l.jsx)("div",{onClick:()=>{b(e.id.toString()),c(e)},className:"w-36 rounded-lg cursor-pointer hover:scale-105  hover:shadow-lg transition-all ".concat(e.id===(null==s?void 0:s.id)?" border-[#f3a44a] shadow-md border-2":" border-[#1b1b1b1f] border-2"),children:(0,l.jsx)(h(),{src:e.image,alt:"card",width:110,height:50,className:" mx-auto w-full h-[80px]"})},e.id))}),(null==t?void 0:t.length)>0&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:"w-full bg-gray-200 font-bold py-2 px-4 text-lg my-4",children:"Chọn mệnh gi\xe1"}),(0,l.jsx)("div",{className:"grid grid-cols-6 gap-2",children:null==t?void 0:t.map(e=>(0,l.jsx)("div",{onClick:()=>u({value:e.price,id:e.id}),className:" p-3 max-w-36 rounded-lg cursor-pointer hover:scale-105  hover:shadow-lg transition-all ".concat(e.id===d.id?" border-[#f3a44a] shadow-md border-2":" border-[#1b1b1b1f] border-2"),children:(0,l.jsxs)("p",{children:[e.price.toLocaleString("vi-VN"),"đ"]})},e.id))}),(0,l.jsxs)("div",{className:"flex mt-8 justify-between items-center",children:[(0,l.jsx)("p",{className:"text-base font-semibold",children:"Số lượng: "}),(0,l.jsx)(m.Y,{defaultValue:1,value:f,min:1,onChange:(e,n)=>p(n)})]})]})]}),(0,l.jsx)("div",{className:" w-1/3",children:(0,l.jsx)(x,{card:s,cardValue:d,amount:f,reset:g})})]})},v=()=>(0,l.jsxs)(r.Z,{title:a.Ti.BUY_CARD,menuIndex:1,children:[(0,l.jsx)("p",{className:"font-bold text-2xl mb-4",children:a.Ti.BUY_CARD}),(0,l.jsx)(p,{})]});var b=v},5869:function(e,n,t){"use strict";t.d(n,{IP:function(){return i},MJ:function(){return u},Oq:function(){return o},dx:function(){return d},g_:function(){return s},os:function(){return c},wh:function(){return a}});var l=t(118),r=t(9154);let a=async()=>{let e=l.zj.GAME_SERVICE;return(0,r.vn)(e,null)},o=async()=>{let e=l.zj.CARD_SERVICE;return(0,r.vn)(e,null)},i=async e=>{let n=l.zj.ITEM_SERVICE+"/card/".concat(e);return(0,r.vn)(n,null)},s=async e=>{let n=l.zj.BASE_URL+"/sale-order/create";return(0,r.NJ)(n,e)},c=async()=>{let e=l.zj.BASE_URL+"/payment/method";return(0,r.vn)(e,null)},d=async e=>{let n=l.zj.BASE_URL+"/top-up-game/lord-mobile/send-otp/".concat(e);return(0,r.vn)(n,null)},u=async(e,n)=>{let t=l.zj.BASE_URL+"/top-up-game/lord-mobile/token/".concat(e);return(0,r.NJ)(t,{otp:n})}}},function(e){e.O(0,[4976,3662,746,8415,1413,4706,9774,2888,179],function(){return e(e.s=7401)}),_N_E=e.O()}]);