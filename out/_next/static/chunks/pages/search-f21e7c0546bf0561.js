(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9603],{1222:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var a=s(7294);function n({controlled:e,default:t,name:s,state:n="value"}){let{current:i}=a.useRef(void 0!==e),[l,r]=a.useState(t),c=a.useCallback(e=>{i||r(e)},[]);return[i?e:l,c]}},5243:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return s(6807)}])},9202:function(e,t,s){"use strict";var a=s(5893);s(7294);var n=s(9008),i=s.n(n),l=s(118),r=s(2329),c=s(7357),o=s(2119),p=s(6127),u=s(1163);let d=e=>{let{children:t,title:s,admin:n,menuIndex:d,cartAmount:x,isHome:h}=e;return(0,u.useRouter)(),(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,a.jsx)(i(),{children:(0,a.jsx)("title",{children:l.Ti.PREFIX+s})}),(0,a.jsx)(o.Z,{}),(0,a.jsxs)(c.Z,{className:"w-full flex flex-col h-screen overflow-y-auto overflow-x-hidden",children:[(0,a.jsx)(r.Z,{}),(0,a.jsxs)("div",{className:"min-h-[calc(100vh-78px)] mt-[78px]",children:[(0,a.jsx)("div",{className:" max-w-[1280px] mx-auto w-full pt-10 px-[2%] sm:px-[5%] min-h-[calc(100%-188px)] lg:min-h-[calc(100%-164px)] pb-8",children:t}),(0,a.jsx)(p.Z,{})]})]})]})};t.Z=d},6807:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return x}});var a=s(5893),n=s(118),i=s(9202),l=s(7357),r=s(5054);s(4950),s(4233),s(4256),s(7775);var c=s(7294),o=s(6154),p=s(1163);s(2546),s(4988);var u=s(1664),d=s.n(u);function x(){let[e,t]=(0,c.useState)([]),[s,u]=(0,c.useState)([]),[x,h]=(0,c.useState)(1),[m,f]=(0,c.useState)(0),[j,g]=(0,c.useState)(""),[N,Z]=(0,c.useState)(""),[v,S]=(0,c.useState)([]),{push:w,query:_}=(0,p.useRouter)();(0,c.useRef)(),(0,c.useEffect)(()=>{console.log(_.type),Z(_.type),(0,o.Z)({method:"get",url:n.zj.BASE_URL+"/type/0"}).then(e=>{console.log(e.data),S(e.data)},e=>{console.log(e)}),void 0!=_.title&&void 0!=_.page&&void 0!=_.pageSize&&(0,o.Z)({method:"get",url:n.zj.BASE_URL+"/posts",params:{page:_.page,pageSize:_.pageSize,title:_.title}}).then(e=>{t(e.data.content),h(e.data.pageable.pageNumber+1),f(e.data.totalPages)},e=>{console.log(e)})},[_]);let y=(e,t)=>{var s=parseInt(e);s--,w({pathname:"/posts",search:"?"+new URLSearchParams({page:s.toString(),pageSize:t,type:j})})},E=e=>{y(e,9)},T=e=>{w({pathname:"/posts/detail",search:"?"+new URLSearchParams({id:e})})},k=()=>{let t=t=>(0,a.jsx)(l.Z,{className:"list-posts-container",children:e.map((e,t)=>(0,a.jsx)(l.Z,{onClick:()=>T(e.id),className:"list-posts-search-element",children:(0,a.jsxs)(l.Z,{className:"image-and-content-element",children:[(0,a.jsx)(l.Z,{className:"list-posts-image",children:(0,a.jsx)("img",{alt:"",id:"image-post_tintuc",src:e.titleImageUrlStream})}),(0,a.jsxs)(l.Z,{className:"list-posts-search-content",children:[(0,a.jsx)("h1",{style:{fontSize:"18px",fontWeight:"700",color:"rgb(0,32,96)",textTransform:"uppercase"},className:"title-list-posts-element",children:e.title}),(0,a.jsx)("p",{className:"introduction-list-posts-element",style:{fontSize:"10px",color:"rgb(0,32,96)",marginTop:"5px"},children:e.introduction}),(0,a.jsx)("p",{style:{marginTop:"5px"},children:e.createAt})]})]})},t))});return(0,a.jsxs)(l.Z,{className:"list-posts-wrapper",sx:{padding:"0",flexGrow:1},children:[(0,a.jsx)(t,{}),(0,a.jsx)(r.Z,{count:m,defaultPage:x,variant:"outlined",onChange:(e,t)=>E(t),sx:{color:"white"}})]})},z=()=>{let e=()=>void 0===_.title?(0,a.jsx)(l.Z,{}):(0,a.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"row"},children:[(0,a.jsxs)("p",{className:"directiory-icon",children:[" "," >> "," "]}),(0,a.jsxs)("a",{href:"#",children:["T\xecm kiếm với từ kh\xf3a `'`",_.title,"`'`"]})]});return(0,a.jsxs)(l.Z,{className:"directory-wrapper",children:[(0,a.jsx)("a",{href:"./",children:"Trang chủ"}),(0,a.jsxs)("p",{className:"directiory-icon",children:[" ",">>"," "]}),(0,a.jsx)(d(),{href:"/posts?page=0&pageSize=9",children:"T\xccm kiếm"}),(0,a.jsx)(e,{})]})},R=()=>(0,a.jsx)(l.Z,{className:"post-page-content-container",children:(0,a.jsxs)(l.Z,{className:"search-page-content-wrapper",children:[(0,a.jsx)(z,{}),(0,a.jsx)(k,{})]})});return(0,a.jsx)(i.Z,{title:n.Ti.HOME,menuIndex:0,children:(0,a.jsx)(l.Z,{className:"post_content",children:(0,a.jsx)(R,{})})})}},4233:function(){},4256:function(){},7775:function(){},4950:function(){}},function(e){e.O(0,[4976,3662,746,8415,5054,1664,2546,335,4706,9774,2888,179],function(){return e(e.s=5243)}),_N_E=e.O()}]);