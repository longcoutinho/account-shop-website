(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3459],{3700:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(3664)}])},9154:function(t,e,n){"use strict";n.d(e,{EL:function(){return S},Ew:function(){return E},Hw:function(){return u},NJ:function(){return i},VC:function(){return x},bG:function(){return f},dp:function(){return g},fL:function(){return d},hA:function(){return l},o0:function(){return _},qJ:function(){return m},ug:function(){return h},vn:function(){return c}});var r=n(6154),a=n(7484),s=n.n(a);let o=(t,e,n)=>""+(e.substring(0,t)+n+e.substring(t,e.length+1)),l=(t,e)=>{if(null===t)return"0 VNĐ";let n=t.toString();for(let t=n.length-3;t>0;t-=3)n=o(t,n,".");return e||(n+=" VNĐ"),n},i=(t,e)=>{var n,a;return(0,r.Z)({method:"post",url:t,data:e,headers:{Authorization:(null===(n=f())||void 0===n||n.accessToken,null===(a=f())||void 0===a?void 0:a.accessToken)}}).then(t=>t,t=>("401"==t.response.status&&m(),t))},u=(t,e)=>{var n,a;return(0,r.Z)({method:"post",url:t,data:e,headers:{"Content-Type":"multipart/form-data",Authorization:(null===(n=f())||void 0===n||n.accessToken,null===(a=f())||void 0===a?void 0:a.accessToken)}}).then(t=>t,t=>("401"==t.response.status&&m(),t))},c=(t,e)=>{var n,a;return(0,r.Z)({method:"get",url:t,params:e,headers:{Authorization:(null===(n=f())||void 0===n||n.accessToken,null===(a=f())||void 0===a?void 0:a.accessToken)}}).then(t=>t,t=>("401"==t.response.status&&m(),t))},p=()=>{let t=window.localStorage.getItem("cart");return null==t?[]:JSON.parse(t)},h=t=>{let e=p(),n=e.length,r=e.slice(0,t),a=e.slice(t+1,n);return r.concat(a)},d=(t,e,n)=>{t.push({pathname:e,query:n})},E=t=>void 0==t||null==t||0==t.length,g=(t,e,n)=>e<=t.length&&t.length<=n,f=()=>{{let t=localStorage.getItem("user-info");return null==t?null:JSON.parse(t)}},m=()=>{localStorage.removeItem("user-info")},S=t=>{localStorage.setItem("user-info",JSON.stringify(t))},_=t=>s()(t).format("HH:mm:ss DD-MM-YYYY"),x=(t,e)=>Math.floor(e/t)+(e%t?1:0)},118:function(t,e,n){"use strict";var r,a,s,o,l,i,u,c,p,h,d,E,g,f,m,S,_,x,I;function T(t,e){return"".concat(t).concat(e)}n.d(e,{zj:function(){return r},Zq:function(){return a},MG:function(){return s},k2:function(){return h},Ti:function(){return o},Q:function(){return p},vC:function(){return A}});let R={root:"/",login:T("/","/login"),user:{tab1:"/",tab2:T("/","posts?page=0&pageSize=9"),tab3:T("/","item?page=0&pageSize=9"),tab4:T("/","lapla"),tab5:T("/","course"),tab6:T("/","lapla"),tab7:T("/","lapla")},tintuc:{root:T("/","posts?page=0&pageSize=9"),detail:T("/","posts/detail")},lapla:{root:T("/","lapla"),tuvi:T("/","lapla/tuvi"),luchao:T("/","lapla/luchao"),tutru:T("/","lapla/tutru"),thansohoc:T("/","lapla/thansohoc")}};(d=r||(r={})).BASE_URL="http://91.108.111.192",d.USER_SERVICE="http://91.108.111.192/user",d.GAME_SERVICE="http://91.108.111.192/game",d.CARD_SERVICE="http://91.108.111.192/card",d.ITEM_SERVICE="http://91.108.111.192/item",d.IMAGE_SERVICE="http://91.108.111.192/image",d.TOPUP_SERVICE="http://91.108.111.192/top-up",d.SALE_ORDER_SERVICE="http://91.108.111.192/sale-order",(E=a||(a={})).BASE_URL="http://58.187.231.220:3000",E.ADD_ITEM_PAGE="http://58.187.231.220:3000/item/add",E.EDIT_ITEM_PAGE="http://58.187.231.220:3000/item/edit",E.DETAIL_ITEM_PAGE="http://58.187.231.220:3000/buy/item",E.LIST_TOP_UP_PAGE="http://58.187.231.220:3000/topup/list",(g=s||(s={}))[g.OK=200]="OK",g[g.UNAUTH=401]="UNAUTH",(f=o||(o={})).PREFIX="",f.HOME="Home",f.LAPLA="Lap la so phong thuy",f.ALL_PRODUCTS="All Products",f.EDIT_ITEM="Edit Item",f.RECHARGE="Nạp thẻ thủ c\xf4ng",f.RECHARGE_AUTO="Nạp thẻ tự động",f.BUY_CARD="Mua thẻ nạp",f.PAYMENT="Thanh to\xe1n",f.HISTORY="Lịch sử giao dịch",(m=l||(l={})).BASE_URL="",m.POSTS_SERVICE="/posts",m.ITEM_SERVICE="/item",(S=i||(i={})).getPost="/posts",S.SAVE="",S.getPostDetail="/posts/detail",(_=u||(u={})).getType="/type/",_.SAVE="",_.DETAIL="/detail",(x=c||(c={})).getItems="/item",x.DETAIL="/detail",x.getItemDetail="/item/detail";let A=[{title:"Lớp 1",teacher:"Kim ca",titleImageUrlStream:"https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?cs=srgb&dl=pexels-engin-akyurt-1486861.jpg&fm=jpg",videoTime:20}];(I=p||(p={})).HOME="/",I.LOGIN="/login",I.SIGNUP="/signup",I.PROFILE="/profile",I.BUY="/buy",I.POST="/post",I.RECHARGE="/recharge",I.RECHARGE_AUTO="/recharge-auto",I.BUY_CARD="/buy-card",I.PAYMENT="/payment",I.HISTORY="/history",R.user.tab1,R.user.tab2,R.user.tab3,R.user.tab4,R.user.tab5,(h||(h={})).SHOPPING_CART="shopping_cart"},3664:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var r=n(5893),a=n(7357),s=n(3321);n(4950),n(4233),n(4256),n(7775);var o=n(7294),l=n(1664),i=n.n(l),u=n(8405),c=n(118),p=n(1163),h=n(9154);function d(){let t=(0,p.useRouter)(),e=()=>{let[e,n]=(0,o.useState)(""),[l,p]=(0,o.useState)(""),[d,E]=(0,o.useState)(""),[g,f]=(0,o.useState)(""),m=t=>(0,r.jsx)(a.Z,{className:"notify-text-container",children:(0,r.jsx)("p",{style:{color:t.textColor},className:"notify-text",children:t.text})}),S=async()=>{(0,u.zB)({username:e,password:l}).then(e=>{e.status==c.MG.OK?(console.log(e.data),(0,h.EL)(e.data),(0,h.fL)(t,c.Q.HOME,null)):(E(e.response.data),f("red"),console.log(e))}).catch(t=>{var e;console.log(t),E(null==t?void 0:null===(e=t.response)||void 0===e?void 0:e.data),f("red")})};return(0,r.jsxs)(a.Z,{className:"login-wrapper",children:[(0,r.jsxs)(a.Z,{className:"title-container",children:[(0,r.jsx)("p",{children:"login"}),(0,r.jsx)("p",{children:"Enter Login details to get access"})]}),(0,r.jsxs)(a.Z,{className:"form-container",children:[(0,r.jsxs)(a.Z,{className:"input-container",children:[(0,r.jsx)("label",{children:"Username"}),(0,r.jsx)("input",{type:"text",value:e,onChange:t=>{n(t.currentTarget.value)},placeholder:"Username"})]}),(0,r.jsxs)(a.Z,{className:"input-container",children:[(0,r.jsx)("label",{children:"Password"}),(0,r.jsx)("input",{type:"password",value:l,onChange:t=>{p(t.currentTarget.value)},placeholder:"Enter Password"})]}),(0,r.jsx)(m,{textColor:g,text:d}),(0,r.jsxs)(a.Z,{className:"forgot-password-container",children:[(0,r.jsxs)(a.Z,{className:"remember-me-container",children:[(0,r.jsx)("input",{type:"checkbox"}),(0,r.jsx)("label",{children:"keep me logged in"})]}),(0,r.jsx)(a.Z,{className:"forgot-pass-container",children:(0,r.jsx)(i(),{href:"/signup",children:"forgot password?"})})]})]}),(0,r.jsxs)(a.Z,{className:"login-button-container",children:[(0,r.jsxs)(a.Z,{className:"sign-up-container",children:[(0,r.jsx)("p",{children:"Don't have an account?"}),(0,r.jsx)(i(),{href:c.Q.SIGNUP,children:"Sign Up"}),(0,r.jsx)("p",{children:"here"})]}),(0,r.jsx)(s.Z,{onClick:S,className:"login-button",children:"Login"})]})]})};return(0,r.jsx)(a.Z,{className:"login-container",sx:{width:"100vw"},children:(0,r.jsx)(e,{})})}},8405:function(t,e,n){"use strict";n.d(e,{n3:function(){return l},y1:function(){return s},zB:function(){return o}});var r=n(118),a=n(9154);let s=async t=>{let e=r.zj.USER_SERVICE+"/register";return(0,a.NJ)(e,t)},o=async t=>{let e=r.zj.USER_SERVICE+"/login";return(0,a.NJ)(e,t)},l=async t=>{let e=r.zj.USER_SERVICE+"/"+t;return(0,a.vn)(e,null)}},4233:function(){},4256:function(){},7775:function(){},4950:function(){}},function(t){t.O(0,[746,1664,9774,2888,179],function(){return t(t.s=3700)}),_N_E=t.O()}]);