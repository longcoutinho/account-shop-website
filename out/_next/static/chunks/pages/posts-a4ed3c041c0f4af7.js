(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2679],{1222:function(e,s,t){"use strict";t.d(s,{Z:function(){return l}});var a=t(7294);function l({controlled:e,default:s,name:t,state:l="value"}){let{current:i}=a.useRef(void 0!==e),[n,r]=a.useState(s),c=a.useCallback(e=>{i||r(e)},[]);return[i?e:n,c]}},5794:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return t(6472)}])},9202:function(e,s,t){"use strict";var a=t(5893);t(7294);var l=t(9008),i=t.n(l),n=t(118),r=t(2329),c=t(7357),p=t(2119),o=t(6127),d=t(1163);let x=e=>{let{children:s,title:t,admin:l,menuIndex:x,cartAmount:m,isHome:h}=e;return(0,d.useRouter)(),(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,a.jsx)(i(),{children:(0,a.jsx)("title",{children:n.Ti.PREFIX+t})}),(0,a.jsx)(p.Z,{}),(0,a.jsxs)(c.Z,{className:"w-full flex flex-col h-screen overflow-y-auto overflow-x-hidden",children:[(0,a.jsx)(r.Z,{}),(0,a.jsxs)("div",{className:"min-h-[calc(100vh-78px)] mt-[78px]",children:[(0,a.jsx)("div",{className:" max-w-[1280px] mx-auto w-full pt-10 px-[2%] sm:px-[5%] min-h-[calc(100%-188px)] lg:min-h-[calc(100%-164px)] pb-8",children:s}),(0,a.jsx)(o.Z,{})]})]})]})};s.Z=x},6472:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return u}});var a=t(5893),l=t(118),i=t(9202),n=t(7357),r=t(5054);t(4950),t(4233),t(4256),t(7775);var c=t(7294),p=t(6154),o=t(1163),d=t(2546),x=t(4988),m=t(1664),h=t.n(m);function u(){let[e,s]=(0,c.useState)([]),[t,m]=(0,c.useState)([]),[u,j]=(0,c.useState)(1),[g,f]=(0,c.useState)(0),[N,Z]=(0,c.useState)(""),[v,w]=(0,c.useState)([]),{push:y,query:S}=(0,o.useRouter)();(0,c.useRef)();let k=(0,c.useRef)(null);(0,c.useEffect)(()=>{console.log(S.type),Z(S.type),(0,p.Z)({method:"get",url:l.zj.BASE_URL+"/type/0"}).then(e=>{console.log(e.data),w(e.data)},e=>{console.log(e)}),void 0!==S.page&&void 0!==S.pageSize&&((0,p.Z)({method:"get",url:l.zj.BASE_URL+"/posts",params:{page:S.page,pageSize:S.pageSize,title:S.title}}).then(e=>{s(e.data.content),j(e.data.pageable.pageNumber+1),f(e.data.totalPages)},e=>{console.log(e)}),(0,p.Z)({method:"get",url:l.zj.BASE_URL+"/posts"}).then(e=>{m(e.data.content)},e=>{console.log(e)}))},[S]);let _=(e,s,t)=>{var a=parseInt(e);a--;let l=new URLSearchParams;l.append("page",a.toString()),l.append("pageSize",s),""!=t&&void 0!=t&&l.append("type",t),y({pathname:"/posts",search:"?"+l})},P=(e,s,t,a)=>{var l=parseInt(e);l--;let i=new URLSearchParams;i.set("page",l.toString()),void 0!=t&&i.set("type",t),""!=a&&i.set("title",a),i.set("pageSize","9"),y({pathname:"/posts",search:"?"+i})},b=e=>{console.log(N),_(e,9,N)},T=e=>{"Enter"==e.key&&(k.current.value=e.target.value,P("1",9,N,k.current.value))},z=e=>{k.current.value=e.target.value},C=()=>(0,a.jsx)(n.Z,{sx:{marginTop:"40px"},className:"posts-search-input display-laptop",children:(0,a.jsx)("input",{autoFocus:!0,ref:k,onChange:z,className:"list-posts-input-content",onKeyDown:T,placeholder:"T\xecm kiếm b\xe0i viết"})}),E=()=>(0,a.jsx)(n.Z,{sx:{marginTop:"40px"},className:"posts-search-input laptop-view",children:(0,a.jsx)("input",{autoFocus:!0,ref:k,onChange:z,className:"list-posts-input-content",onKeyDown:T,placeholder:"T\xecm kiếm b\xe0i viết"})}),R=()=>(0,a.jsx)(n.Z,{className:"related-post-container",children:e.slice(0,5).map((e,s)=>(0,a.jsxs)(n.Z,{onClick:()=>U(e.id),className:"related-post-element",children:[(0,a.jsx)(n.Z,{className:"related-post-image",children:(0,a.jsx)("img",{src:e.titleImageUrlStream})}),(0,a.jsxs)(n.Z,{className:"related-post-content",children:[(0,a.jsx)("p",{children:e.title}),(0,a.jsx)("p",{children:e.createAt})]})]},s))}),L=()=>{let e=t.slice(0,4).map((e,s)=>(0,a.jsx)(n.Z,{children:(0,a.jsx)(d.o5,{onClick:()=>U(e.id),className:"swiper-slide-featured-posts",children:(0,a.jsxs)("div",{className:"slide-post",children:[(0,a.jsx)("div",{className:"posts-image",style:{cursor:"pointer"},children:(0,a.jsx)("img",{src:e.titleImageUrlStream,className:"swiper-slide-featured-posts-image",alt:""})}),(0,a.jsxs)("div",{className:"swiper-slide-featured-posts-content",children:[(0,a.jsx)("p",{className:"post-page-para-tilte",children:null==e?void 0:e.title}),(0,a.jsx)("p",{className:"post-page-para-intro",children:null==e?void 0:e.introduction}),(0,a.jsx)("p",{className:"post-page-create-at",children:null==e?void 0:e.createAt})]})]})},s)},s));return t.slice(0,4).map((e,s)=>(0,a.jsxs)(n.Z,{className:"list-read-most-content",children:[(0,a.jsx)(n.Z,{className:"rounded-index",children:(0,a.jsx)("p",{children:s+1})}),(0,a.jsx)("p",{onClick:()=>U(e.id),className:"list-read-most-title",style:{marginLeft:"10px"},children:e.title})]},s)),(0,a.jsx)(n.Z,{className:"list-posts-page-featured-container",children:(0,a.jsx)(n.Z,{className:"list-posts-page-featured-wrapper",children:(0,a.jsxs)(d.tq,{className:"list-posts-featured-swiper",modules:[x.W_,x.tl,x.LW,x.s5,x.pt],slidesPerView:1,spaceBetween:50,breakpoints:{300:{slidesPerView:1},690:{slidesPerView:1},1100:{slidesPerView:1},1300:{slidesPerView:1},1600:{slidesPerView:1},1900:{slidesPerView:1}},autoplay:{delay:2500,disableOnInteraction:!1},navigation:!0,pagination:{clickable:!0},children:[e,"..."]})})})},U=e=>{y({pathname:"/posts/detail",search:"?"+new URLSearchParams({id:e})})},A=()=>{let s=s=>(0,a.jsx)(n.Z,{className:"list-posts-container",children:e.map((e,s)=>(0,a.jsx)(n.Z,{onClick:()=>U(e.id),className:"list-posts-element",children:(0,a.jsxs)(n.Z,{className:"image-and-content-element",children:[(0,a.jsx)(n.Z,{className:"list-posts-image",children:(0,a.jsx)("img",{alt:"",id:"image-post_tintuc",src:e.titleImageUrlStream})}),(0,a.jsxs)(n.Z,{className:"list-posts-content",children:[(0,a.jsx)("h1",{style:{fontSize:"18px",fontWeight:"700",color:"rgb(0,32,96)",textTransform:"uppercase"},className:"title-list-posts-element",children:e.title}),(0,a.jsx)("p",{className:"introduction-list-posts-element",style:{fontSize:"10px",color:"rgb(0,32,96)",marginTop:"0px"},children:e.introduction}),(0,a.jsx)("p",{children:e.createAt})]})]})},s))});return(0,a.jsxs)(n.Z,{className:"list-posts-wrapper",sx:{padding:"0",flexGrow:1},children:[(0,a.jsx)(s,{}),(0,a.jsx)(r.Z,{count:g,defaultPage:u,variant:"outlined",onChange:(e,s)=>b(s),sx:{color:"white"}})]})},I=()=>(0,a.jsx)(n.Z,{className:"post-page-title-wrapper",children:(0,a.jsx)("p",{children:N})}),V=()=>{let e=()=>void 0===N||""==N?(0,a.jsx)(n.Z,{}):(0,a.jsxs)(n.Z,{sx:{display:"flex",flexDirection:"row"},children:[(0,a.jsxs)("p",{className:"directiory-icon",children:[" ",">>"," "]}),(0,a.jsx)("a",{style:{textTransform:"capitalize",marginLeft:"5px"},href:"#",children:N})]}),s=()=>void 0==S.title?(0,a.jsx)(n.Z,{}):(0,a.jsxs)(n.Z,{sx:{display:"flex",flexDirection:"row"},children:[(0,a.jsxs)("p",{className:"directiory-icon",children:[" "," >> "," "]}),(0,a.jsxs)("a",{style:{marginLeft:"5px"},href:"#",children:["T\xecm kiếm với từ kh\xf3a `'`",S.title,"`'`"]})]});return(0,a.jsxs)(n.Z,{className:"directory-wrapper",children:[(0,a.jsx)("a",{href:"./",children:"Trang chủ"}),(0,a.jsxs)("p",{className:"directiory-icon",children:[" "," >> "," "]}),(0,a.jsx)(h(),{style:{marginLeft:"5px"},href:"/posts?page=0&pageSize=9",children:"Kho t\xe0ng tri thức"}),(0,a.jsx)(e,{}),(0,a.jsx)(s,{})]})},B=()=>void 0!==N?(0,a.jsx)(n.Z,{}):(0,a.jsxs)(n.Z,{className:"menu-type-post-wrapper display-laptop",children:[(0,a.jsx)(n.Z,{className:"post-page-title",children:(0,a.jsx)("p",{children:"Kho t\xe0ng tri thức"})}),(0,a.jsx)(n.Z,{className:"menu-type-post-content",children:v.map((e,s)=>(0,a.jsx)(n.Z,{onClick:()=>P("1",9,e.name,k.current.value),className:"menu-type-post-element",children:(0,a.jsx)("p",{children:e.name})},s))})]}),D=()=>void 0!==N?(0,a.jsx)(n.Z,{}):(0,a.jsxs)(n.Z,{className:"menu-type-post-wrapper laptop-view",children:[(0,a.jsx)(n.Z,{className:"post-page-title",children:(0,a.jsx)("p",{children:"Kho t\xe0ng tri thức"})}),(0,a.jsx)(n.Z,{className:"menu-type-post-content",children:v.map((e,s)=>(0,a.jsx)(n.Z,{onClick:()=>P("1",9,e.name,k.current.value),className:"menu-type-post-element",children:(0,a.jsx)("p",{children:e.name})},s))})]}),K=()=>(0,a.jsxs)(n.Z,{children:[(0,a.jsx)(B,{}),(0,a.jsx)(C,{})]}),O=()=>(0,a.jsxs)(n.Z,{className:"post-page-content-container",children:[(0,a.jsxs)(n.Z,{className:"post-page-content-wrapper",children:[(0,a.jsx)(V,{}),(0,a.jsx)(I,{}),(0,a.jsx)(K,{}),(0,a.jsx)(L,{}),(0,a.jsx)(A,{})]}),(0,a.jsxs)(n.Z,{className:"post-page-ad-wrapper",children:[(0,a.jsx)(E,{}),(0,a.jsx)(D,{}),(0,a.jsxs)(n.Z,{className:"post-page-register-wrapper laptop-view",children:[(0,a.jsx)(n.Z,{className:"post-page-title",children:(0,a.jsx)("p",{children:"Đăng k\xfd xem tử vi"})}),(0,a.jsxs)(n.Z,{className:"post-page-register-content",children:[(0,a.jsxs)(n.Z,{className:"post-page-input-wrapper",children:[(0,a.jsx)("p",{children:"Họ v\xe0 t\xean"}),(0,a.jsx)("input",{type:"text"})]}),(0,a.jsxs)(n.Z,{className:"post-page-input-wrapper",children:[(0,a.jsx)("p",{children:"Số điện thoại"}),(0,a.jsx)("input",{type:"text"})]}),(0,a.jsx)("button",{children:"Đăng k\xfd"})]})]}),(0,a.jsxs)(n.Z,{children:[(0,a.jsx)(n.Z,{className:"post-page-title",children:(0,a.jsx)("p",{children:"B\xe0i viết li\xean quan"})}),(0,a.jsx)(R,{})]})]})]});return(0,a.jsx)(i.Z,{title:l.Ti.HOME,menuIndex:0,cartAmount:5,children:(0,a.jsx)(n.Z,{className:"post_content",children:(0,a.jsx)(O,{})})})}},4233:function(){},4256:function(){},7775:function(){},4950:function(){}},function(e){e.O(0,[4976,3662,746,8415,5054,1664,2546,4947,4706,9774,2888,179],function(){return e(e.s=5794)}),_N_E=e.O()}]);