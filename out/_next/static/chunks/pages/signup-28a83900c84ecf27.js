(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7616],{8575:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return n(3757)}])},9154:function(t,e,n){"use strict";n.d(e,{EL:function(){return A},Ew:function(){return d},Hw:function(){return i},NJ:function(){return l},VC:function(){return _},bG:function(){return g},dp:function(){return S},fL:function(){return E},hA:function(){return u},o0:function(){return I},qJ:function(){return m},ug:function(){return p},vn:function(){return c}});var r=n(6154),s=n(7484),a=n.n(s);let o=(t,e,n)=>""+(e.substring(0,t)+n+e.substring(t,e.length+1)),u=(t,e)=>{if(null===t)return"0 VNĐ";let n=t.toString();for(let t=n.length-3;t>0;t-=3)n=o(t,n,".");return e||(n+=" VNĐ"),n},l=(t,e)=>{var n,s;return(0,r.Z)({method:"post",url:t,data:e,headers:{Authorization:(null===(n=g())||void 0===n||n.accessToken,null===(s=g())||void 0===s?void 0:s.accessToken)}}).then(t=>t,t=>("401"==t.response.status&&m(),t))},i=(t,e)=>{var n,s;return(0,r.Z)({method:"post",url:t,data:e,headers:{"Content-Type":"multipart/form-data",Authorization:(null===(n=g())||void 0===n||n.accessToken,null===(s=g())||void 0===s?void 0:s.accessToken)}}).then(t=>t,t=>("401"==t.response.status&&m(),t))},c=(t,e)=>{var n,s;return(0,r.Z)({method:"get",url:t,params:e,headers:{Authorization:(null===(n=g())||void 0===n||n.accessToken,null===(s=g())||void 0===s?void 0:s.accessToken)}}).then(t=>t,t=>("401"==t.response.status&&m(),t))},h=()=>{let t=window.localStorage.getItem("cart");return null==t?[]:JSON.parse(t)},p=t=>{let e=h(),n=e.length,r=e.slice(0,t),s=e.slice(t+1,n);return r.concat(s)},E=(t,e,n)=>{t.push({pathname:e,query:n})},d=t=>void 0==t||null==t||0==t.length,S=(t,e,n)=>e<=t.length&&t.length<=n,g=()=>{{let t=localStorage.getItem("user-info");return null==t?null:JSON.parse(t)}},m=()=>{localStorage.removeItem("user-info")},A=t=>{localStorage.setItem("user-info",JSON.stringify(t))},I=t=>a()(t).format("HH:mm:ss DD-MM-YYYY"),_=(t,e)=>Math.floor(e/t)+(e%t?1:0)},118:function(t,e,n){"use strict";var r,s,a,o,u,l,i,c,h,p,E,d,S,g,m,A,I,_,f;function N(t,e){return"".concat(t).concat(e)}n.d(e,{zj:function(){return r},Zq:function(){return s},MG:function(){return a},k2:function(){return p},Ti:function(){return o},Q:function(){return h},vC:function(){return T}});let R={root:"/",login:N("/","/login"),user:{tab1:"/",tab2:N("/","posts?page=0&pageSize=9"),tab3:N("/","item?page=0&pageSize=9"),tab4:N("/","lapla"),tab5:N("/","course"),tab6:N("/","lapla"),tab7:N("/","lapla")},tintuc:{root:N("/","posts?page=0&pageSize=9"),detail:N("/","posts/detail")},lapla:{root:N("/","lapla"),tuvi:N("/","lapla/tuvi"),luchao:N("/","lapla/luchao"),tutru:N("/","lapla/tutru"),thansohoc:N("/","lapla/thansohoc")}};(E=r||(r={})).BASE_URL="https://longhvh.click",E.USER_SERVICE="https://longhvh.click/user",E.GAME_SERVICE="https://longhvh.click/game",E.CARD_SERVICE="https://longhvh.click/card",E.ITEM_SERVICE="https://longhvh.click/item",E.IMAGE_SERVICE="https://longhvh.click/image",E.TOPUP_SERVICE="https://longhvh.click/top-up",E.SALE_ORDER_SERVICE="https://longhvh.click/sale-order",(d=s||(s={})).BASE_URL="http://58.187.231.220:3000",d.ADD_ITEM_PAGE="http://58.187.231.220:3000/item/add",d.EDIT_ITEM_PAGE="http://58.187.231.220:3000/item/edit",d.DETAIL_ITEM_PAGE="http://58.187.231.220:3000/buy/item",d.LIST_TOP_UP_PAGE="http://58.187.231.220:3000/topup/list",(S=a||(a={}))[S.OK=200]="OK",S[S.UNAUTH=401]="UNAUTH",(g=o||(o={})).PREFIX="",g.HOME="Home",g.LAPLA="Lap la so phong thuy",g.ALL_PRODUCTS="All Products",g.EDIT_ITEM="Edit Item",g.RECHARGE="Nạp thẻ thủ c\xf4ng",g.RECHARGE_AUTO="Nạp thẻ tự động",g.BUY_CARD="Mua thẻ nạp",g.PAYMENT="Thanh to\xe1n",g.HISTORY="Lịch sử giao dịch",(m=u||(u={})).BASE_URL="",m.POSTS_SERVICE="/posts",m.ITEM_SERVICE="/item",(A=l||(l={})).getPost="/posts",A.SAVE="",A.getPostDetail="/posts/detail",(I=i||(i={})).getType="/type/",I.SAVE="",I.DETAIL="/detail",(_=c||(c={})).getItems="/item",_.DETAIL="/detail",_.getItemDetail="/item/detail";let T=[{title:"Lớp 1",teacher:"Kim ca",titleImageUrlStream:"https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?cs=srgb&dl=pexels-engin-akyurt-1486861.jpg&fm=jpg",videoTime:20}];(f=h||(h={})).HOME="/",f.LOGIN="/login",f.SIGNUP="/signup",f.PROFILE="/profile",f.BUY="/buy",f.POST="/post",f.RECHARGE="/recharge",f.RECHARGE_AUTO="/recharge-auto",f.BUY_CARD="/buy-card",f.PAYMENT="/payment",f.HISTORY="/history",R.user.tab1,R.user.tab2,R.user.tab3,R.user.tab4,R.user.tab5,(p||(p={})).SHOPPING_CART="shopping_cart"},255:function(t,e,n){"use strict";n.d(e,{C1:function(){return a},ew:function(){return s},qX:function(){return r}});let r={TITLE:"Admin Web"},s={USERNAME:"Username",EMAIL_ADDRESS:"Email Address",PASSWORD:"Password",CONFIRM_PASSWORD:"Confirm Password",LOGIN:"login",SUCCESS:"success",SIGNUP:"sign up",COLLECTION:"collection",FULL_NAME:"Full name",PHONE_NUMBER:"Phone number"},a={SIGNUP:"sign up",TITLE:"Create Your Account To Get Full Access",EMPTY_USERNAME:"Username must not empty!",INVALID_LENGTH_USERNAME:"Username must not has length in range (6,12) characters!",INVALID_LENGTH_PASSWORD:"Password must not has length in range (6,24) characters!",INVALID_CONFIRM_PASSWORD:"Confirm password does not match",EMPTY_EMAIL:"Email must not empty!",EMPTY_PASSWORD:"Password must not empty!",EMPTY_CONFIRM_PASSWORD:"Confirm password must not empty!"}},3757:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var r=n(5893),s=n(7357),a=n(3321);n(4950),n(4233),n(4256),n(7775);var o=n(7294),u=n(1664),l=n.n(u),i=n(255),c=n(9154),h=n(8405),p=n(118),E=n(1163);function d(){let t=()=>{let[t,e]=(0,o.useState)(""),[n,u]=(0,o.useState)(""),[d,S]=(0,o.useState)(""),[g,m]=(0,o.useState)(""),[A,I]=(0,o.useState)(""),_=(0,E.useRouter)();(0,o.useEffect)(()=>{e(""),u(""),S(""),m("")},[]);let f=t=>(0,r.jsx)(s.Z,{className:"notify-text-container",children:(0,r.jsx)("p",{style:{color:t.textColor},className:"notify-text",children:t.text})}),N=async()=>{(0,c.Ew)(t)?m(i.C1.EMPTY_USERNAME):(0,c.dp)(t,6,12)?(0,c.Ew)(n)?m(i.C1.EMPTY_PASSWORD):(0,c.dp)(n,6,24)?(0,c.Ew)(d)?m(i.C1.EMPTY_CONFIRM_PASSWORD):n!=d?m(i.C1.INVALID_CONFIRM_PASSWORD):(0,h.y1)({username:t,password:n}).then(t=>{t.status==p.MG.OK&&(m(i.ew.SUCCESS),_.push(p.Q.LOGIN),I("green"))}).catch(t=>{var e;m(null==t?void 0:null===(e=t.response)||void 0===e?void 0:e.data),I("red")}):m(i.C1.INVALID_LENGTH_PASSWORD):m(i.C1.INVALID_LENGTH_USERNAME)};return(0,r.jsxs)(s.Z,{className:"signup-wrapper",children:[(0,r.jsxs)(s.Z,{className:"title-container",children:[(0,r.jsx)("p",{children:i.C1.SIGNUP}),(0,r.jsx)("p",{children:i.C1.TITLE})]}),(0,r.jsxs)(s.Z,{className:"form-container",children:[(0,r.jsxs)(s.Z,{className:"input-container",children:[(0,r.jsx)("label",{children:i.ew.USERNAME}),(0,r.jsx)("input",{type:"text",value:t,onChange:t=>{e(t.currentTarget.value)},placeholder:"Enter Username"})]}),(0,r.jsxs)(s.Z,{className:"input-container",children:[(0,r.jsx)("label",{children:i.ew.PASSWORD}),(0,r.jsx)("input",{type:"password",value:n,onChange:t=>{u(t.currentTarget.value)},placeholder:"Enter Password"})]}),(0,r.jsxs)(s.Z,{className:"input-container",children:[(0,r.jsx)("label",{children:i.ew.CONFIRM_PASSWORD}),(0,r.jsx)("input",{type:"password",value:d,onChange:t=>{S(t.currentTarget.value)},placeholder:"Confirm Password"})]}),(0,r.jsx)(f,{textColor:A,text:g})]}),(0,r.jsxs)(s.Z,{className:"signup-button-container",children:[(0,r.jsxs)(s.Z,{className:"sign-up-container",children:[(0,r.jsx)("p",{children:"Already have an account?"}),(0,r.jsx)(l(),{href:"login",children:i.ew.LOGIN}),(0,r.jsx)("p",{children:"here"})]}),(0,r.jsx)(a.Z,{onClick:N,className:"signup-button",children:i.C1.SIGNUP})]})]})};return(0,r.jsx)(s.Z,{className:"signup-container",sx:{width:"100vw"},children:(0,r.jsx)(t,{})})}},8405:function(t,e,n){"use strict";n.d(e,{n3:function(){return u},y1:function(){return a},zB:function(){return o}});var r=n(118),s=n(9154);let a=async t=>{let e=r.zj.USER_SERVICE+"/register";return(0,s.NJ)(e,t)},o=async t=>{let e=r.zj.USER_SERVICE+"/login";return(0,s.NJ)(e,t)},u=async t=>{let e=r.zj.USER_SERVICE+"/"+t;return(0,s.vn)(e,null)}},4233:function(){},4256:function(){},7775:function(){},4950:function(){}},function(t){t.O(0,[746,1664,9774,2888,179],function(){return t(t.s=8575)}),_N_E=t.O()}]);