"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4706],{6127:function(e,t,n){var r=n(5893),s=n(7357),l=n(2045);let a=()=>(0,r.jsx)(l.Z,{disableGutters:!0,maxWidth:!1,className:"footer-container-page bg-gray-200",children:(0,r.jsxs)(s.Z,{className:"flex items-center gap-4 px-[5%] py-6",children:[(0,r.jsx)("img",{alt:"",id:"logo",src:"/img/fb.png",height:48,width:48}),(0,r.jsx)("p",{className:"text-xl font-bold",children:"LOGO"})]})});t.Z=a},2119:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(5893);n(7294);var s=n(9134);function l(){return(0,r.jsx)(s.Ix,{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,limit:3})}n(1399)},2329:function(e,t,n){n.d(t,{Z:function(){return Z}});var r=n(5893),s=n(7357),l=n(7533),a=n(7294),o=n(3321),i=n(1163),u=n(9154),c=n(118),h=n(8405),p=n(5675),d=n.n(p),m=n(6486),g=n(3375),f=n(3599),E=n(9933),x=n(7150),S=n(9029);function j(e){let{open:t,anchorEl:n,handleClose:s,handleLogout:l}=e,a=(0,i.useRouter)();return(0,r.jsx)("div",{children:(0,r.jsxs)(g.Z,{id:"basic-menu",anchorEl:n,open:t,onClose:s,MenuListProps:{"aria-labelledby":"basic-button"},children:[(0,r.jsxs)(f.Z,{onClick:()=>a.push(c.Q.PROFILE),children:[(0,r.jsx)(E.Z,{fontSize:"small",className:"mr-2"}),"Th\xf4ng tin t\xe0i khoản"]}),(0,r.jsxs)(f.Z,{onClick:()=>a.push(c.Q.HISTORY),children:[(0,r.jsx)(x.Z,{fontSize:"small",className:"mr-2"}),"Lịch sử giao dịch"]}),(0,r.jsxs)(f.Z,{onClick:l,children:[(0,r.jsx)(S.Z,{fontSize:"small",className:"mr-2"}),"Đăng xuất"]})]})})}var N=n(422),v=n(1649),R=n(1469);function I(){let e=(0,v.I0)(),[t,n]=(0,a.useState)("0"),l=(0,i.useRouter)(),[p,g]=(0,a.useState)(),[f,E]=a.useState(null),x=Boolean(f),{itemInCart:S,buyNow:I}=(0,v.v9)(e=>e.cart);(0,a.useEffect)(()=>{let t=(0,u.bG)();null!==t&&(g(t),(0,h.n3)(t.id).then(e=>{e.status==c.MG.OK&&n(e.data.balance)}).catch(e=>{console.log(e)}));let r=JSON.parse(localStorage.getItem(c.k2.SHOPPING_CART));e((0,R.x$)(r&&(null==r?void 0:r.length)>0?null==r?void 0:r.length:0))},[]);let b=e=>{E(e.currentTarget)},C=()=>{E(null)},T=()=>{g(void 0),(0,u.qJ)(),l.push(c.Q.HOME),C()},A=()=>{e((0,R.L1)(!1)),l.push(c.Q.PAYMENT)};return(0,r.jsxs)(s.Z,{className:"w-fit flex justify-center items-center",children:[(0,r.jsxs)("div",{className:"relative cursor-pointer mr-5",onClick:A,children:[(0,r.jsx)(N.Z,{fontSize:"large"}),S>0&&(0,r.jsx)("p",{className:"absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs p-[2px] min-w-5 text-center",children:S})]}),(0,m.isUndefined)(p)?(0,r.jsxs)("div",{className:"flex gap-5",children:[(0,r.jsx)("span",{className:"cursor-pointer hover:underline",onClick:()=>l.push(c.Q.SIGNUP),children:"Sign up"}),(0,r.jsx)("span",{children:"/"}),(0,r.jsx)("span",{className:"cursor-pointer hover:underline",onClick:()=>l.push(c.Q.LOGIN),children:"Login"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.Z,{id:"basic-button","aria-controls":x?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":x?"true":void 0,onClick:b,className:"flex gap-2",children:[(0,r.jsx)(d(),{src:"/img/avatar-default.svg",alt:"ava",width:40,height:40,className:"bg-white rounded-full p-1"}),(0,r.jsx)("p",{className:"text-white",children:null==p?void 0:p.username})]}),x&&(0,r.jsx)(j,{open:x,anchorEl:f,handleClose:C,handleLogout:T})]})]})}function b(){let e=(0,i.useRouter)();return(0,r.jsx)(s.Z,{onClick:()=>(0,u.fL)(e,c.Q.HOME),className:"logo-wrapper",children:(0,r.jsxs)(s.Z,{className:"logo-container",children:[(0,r.jsx)("img",{alt:"",id:"logo",src:"/img/fb.png",height:48,width:48}),(0,r.jsx)("p",{className:"text-xl font-bold",children:"LOGO"})]})})}var C=n(3795),T=n(9417);let A=[{title:"Trang chủ",icon:T.wp6,url:c.Q.HOME},{title:"Mua thẻ",icon:T.yYj,url:c.Q.BUY_CARD},{title:"Nạp thẻ thủ c\xf4ng",icon:T.ioV,url:c.Q.RECHARGE},{title:"Nạp thẻ tự động",icon:T.Ozh,url:c.Q.RECHARGE_AUTO},{title:"Li\xean hệ",icon:T.lYg}];var O=n(2489);function _(){let e=(0,i.useRouter)(),t=A.map((t,n)=>(0,r.jsx)(s.Z,{className:"menu-element-wrapper",children:(0,r.jsxs)(C.Z,{href:null==t?void 0:t.url,className:"menu-element-content ".concat((null==t?void 0:t.url)===e.pathname&&"menu-element-content-hover"),children:[(0,r.jsx)(O.G,{icon:t.icon,className:"icon-menu"}),(0,r.jsx)(s.Z,{children:(0,r.jsx)("p",{children:t.title})})]})},n));return(0,r.jsx)(s.Z,{className:"big-menu",children:t})}function L(){return(0,r.jsxs)(s.Z,{className:"hori-header-container",children:[(0,r.jsx)(b,{}),(0,r.jsx)(_,{})]})}var P=n(2970);function Z(){let[e,t]=a.useState(!1),n=(0,i.useRouter)(),o=e=>()=>{t(e)};return(0,r.jsx)(s.Z,{className:"header-container min-h-20 h-20 border-b-2 fixed top-0 z-50",children:(0,r.jsxs)(s.Z,{className:"header-wrapper h-full px-6",children:[(0,r.jsxs)("div",{className:"flex gap-6 cursor-pointer",children:[(0,r.jsx)(P.Z,{onClick:o(!0)}),(0,r.jsx)("p",{onClick:()=>n.push(c.Q.HOME),className:"text-xl font-semibold",children:"LOGO"})]}),(0,r.jsx)(l.ZP,{open:e,onClose:o(!1),children:(0,r.jsx)(L,{})}),(0,r.jsx)(I,{})]})})}},9154:function(e,t,n){n.d(t,{EL:function(){return x},Ew:function(){return m},Hw:function(){return u},NJ:function(){return i},VC:function(){return j},bG:function(){return f},dp:function(){return g},fL:function(){return d},hA:function(){return o},o0:function(){return S},qJ:function(){return E},ug:function(){return p},vn:function(){return c}});var r=n(6154),s=n(7484),l=n.n(s);let a=(e,t,n)=>""+(t.substring(0,e)+n+t.substring(e,t.length+1)),o=(e,t)=>{if(null===e)return"0 VNĐ";let n=e.toString();for(let e=n.length-3;e>0;e-=3)n=a(e,n,".");return t||(n+=" VNĐ"),n},i=(e,t)=>{var n,s;return(0,r.Z)({method:"post",url:e,data:t,headers:{Authorization:(null===(n=f())||void 0===n||n.accessToken,null===(s=f())||void 0===s?void 0:s.accessToken)}}).then(e=>e,e=>("401"==e.response.status&&E(),e))},u=(e,t)=>{var n,s;return(0,r.Z)({method:"post",url:e,data:t,headers:{"Content-Type":"multipart/form-data",Authorization:(null===(n=f())||void 0===n||n.accessToken,null===(s=f())||void 0===s?void 0:s.accessToken)}}).then(e=>e,e=>("401"==e.response.status&&E(),e))},c=(e,t)=>{var n,s;return(0,r.Z)({method:"get",url:e,params:t,headers:{Authorization:(null===(n=f())||void 0===n||n.accessToken,null===(s=f())||void 0===s?void 0:s.accessToken)}}).then(e=>e,e=>("401"==e.response.status&&E(),e))},h=()=>{let e=window.localStorage.getItem("cart");return null==e?[]:JSON.parse(e)},p=e=>{let t=h(),n=t.length,r=t.slice(0,e),s=t.slice(e+1,n);return r.concat(s)},d=(e,t,n)=>{e.push({pathname:t,query:n})},m=e=>void 0==e||null==e||0==e.length,g=(e,t,n)=>t<=e.length&&e.length<=n,f=()=>{{let e=localStorage.getItem("user-info");return null==e?null:JSON.parse(e)}},E=()=>{localStorage.removeItem("user-info")},x=e=>{localStorage.setItem("user-info",JSON.stringify(e))},S=e=>l()(e).format("HH:mm:ss DD-MM-YYYY"),j=(e,t)=>Math.floor(t/e)+(t%e?1:0)},118:function(e,t,n){var r,s,l,a,o,i,u,c,h,p,d,m,g,f,E,x,S,j,N;function v(e,t){return"".concat(e).concat(t)}n.d(t,{zj:function(){return r},Zq:function(){return s},MG:function(){return l},k2:function(){return p},Ti:function(){return a},Q:function(){return h},vC:function(){return I}});let R={root:"/",login:v("/","/login"),user:{tab1:"/",tab2:v("/","posts?page=0&pageSize=9"),tab3:v("/","item?page=0&pageSize=9"),tab4:v("/","lapla"),tab5:v("/","course"),tab6:v("/","lapla"),tab7:v("/","lapla")},tintuc:{root:v("/","posts?page=0&pageSize=9"),detail:v("/","posts/detail")},lapla:{root:v("/","lapla"),tuvi:v("/","lapla/tuvi"),luchao:v("/","lapla/luchao"),tutru:v("/","lapla/tutru"),thansohoc:v("/","lapla/thansohoc")}};(d=r||(r={})).BASE_URL="http://91.108.111.192",d.USER_SERVICE="http://91.108.111.192/user",d.GAME_SERVICE="http://91.108.111.192/game",d.CARD_SERVICE="http://91.108.111.192/card",d.ITEM_SERVICE="http://91.108.111.192/item",d.IMAGE_SERVICE="http://91.108.111.192/image",d.TOPUP_SERVICE="http://91.108.111.192/top-up",d.SALE_ORDER_SERVICE="http://91.108.111.192/sale-order",(m=s||(s={})).BASE_URL="http://58.187.231.220:3000",m.ADD_ITEM_PAGE="http://58.187.231.220:3000/item/add",m.EDIT_ITEM_PAGE="http://58.187.231.220:3000/item/edit",m.DETAIL_ITEM_PAGE="http://58.187.231.220:3000/buy/item",m.LIST_TOP_UP_PAGE="http://58.187.231.220:3000/topup/list",(g=l||(l={}))[g.OK=200]="OK",g[g.UNAUTH=401]="UNAUTH",(f=a||(a={})).PREFIX="",f.HOME="Home",f.LAPLA="Lap la so phong thuy",f.ALL_PRODUCTS="All Products",f.EDIT_ITEM="Edit Item",f.RECHARGE="Nạp thẻ thủ c\xf4ng",f.RECHARGE_AUTO="Nạp thẻ tự động",f.BUY_CARD="Mua thẻ nạp",f.PAYMENT="Thanh to\xe1n",f.HISTORY="Lịch sử giao dịch",(E=o||(o={})).BASE_URL="",E.POSTS_SERVICE="/posts",E.ITEM_SERVICE="/item",(x=i||(i={})).getPost="/posts",x.SAVE="",x.getPostDetail="/posts/detail",(S=u||(u={})).getType="/type/",S.SAVE="",S.DETAIL="/detail",(j=c||(c={})).getItems="/item",j.DETAIL="/detail",j.getItemDetail="/item/detail";let I=[{title:"Lớp 1",teacher:"Kim ca",titleImageUrlStream:"https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?cs=srgb&dl=pexels-engin-akyurt-1486861.jpg&fm=jpg",videoTime:20}];(N=h||(h={})).HOME="/",N.LOGIN="/login",N.SIGNUP="/signup",N.PROFILE="/profile",N.BUY="/buy",N.POST="/post",N.RECHARGE="/recharge",N.RECHARGE_AUTO="/recharge-auto",N.BUY_CARD="/buy-card",N.PAYMENT="/payment",N.HISTORY="/history",R.user.tab1,R.user.tab2,R.user.tab3,R.user.tab4,R.user.tab5,(p||(p={})).SHOPPING_CART="shopping_cart"},8405:function(e,t,n){n.d(t,{n3:function(){return o},y1:function(){return l},zB:function(){return a}});var r=n(118),s=n(9154);let l=async e=>{let t=r.zj.USER_SERVICE+"/register";return(0,s.NJ)(t,e)},a=async e=>{let t=r.zj.USER_SERVICE+"/login";return(0,s.NJ)(t,e)},o=async e=>{let t=r.zj.USER_SERVICE+"/"+e;return(0,s.vn)(t,null)}}}]);