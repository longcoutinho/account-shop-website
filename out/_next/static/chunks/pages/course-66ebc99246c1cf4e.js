(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[166],{1222:function(e,s,t){"use strict";t.d(s,{Z:function(){return n}});var i=t(7294);function n({controlled:e,default:s,name:t,state:n="value"}){let{current:c}=i.useRef(void 0!==e),[l,r]=i.useState(s),a=i.useCallback(e=>{c||r(e)},[]);return[c?e:l,a]}},9770:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/course",function(){return t(4960)}])},9202:function(e,s,t){"use strict";var i=t(5893);t(7294);var n=t(9008),c=t.n(n),l=t(118),r=t(2329),a=t(7357),o=t(2119),x=t(6127),h=t(1163);let p=e=>{let{children:s,title:t,admin:n,menuIndex:p,cartAmount:d,isHome:u}=e;return(0,h.useRouter)(),(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,i.jsx)(c(),{children:(0,i.jsx)("title",{children:l.Ti.PREFIX+t})}),(0,i.jsx)(o.Z,{}),(0,i.jsxs)(a.Z,{className:"w-full flex flex-col h-screen overflow-y-auto overflow-x-hidden",children:[(0,i.jsx)(r.Z,{}),(0,i.jsxs)("div",{className:"min-h-[calc(100vh-78px)] mt-[78px]",children:[(0,i.jsx)("div",{className:" max-w-[1280px] mx-auto w-full pt-10 px-[2%] sm:px-[5%] min-h-[calc(100%-188px)] lg:min-h-[calc(100%-164px)] pb-8",children:s}),(0,i.jsx)(x.Z,{})]})]})]})};s.Z=p},4960:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return u}});var i=t(5893),n=t(7357),c=t(3321),l=t(9202),r=t(118),a=t(7294),o=t(1163),x=t(1664),h=t.n(x),p=t(6154),d=t(5054);function u(){let[e,s]=(0,a.useState)(""),[t,x]=(0,a.useState)([]),{push:u,query:m}=(0,o.useRouter)(),[j,f]=(0,a.useState)(1),[g,N]=(0,a.useState)(1),Z=(0,a.useRef)(null);(0,a.useEffect)(()=>{(0,p.Z)({method:"get",url:r.zj.BASE_URL+"/type/2"}).then(e=>{console.log(e.data),x(e.data)},e=>{console.log(e)})},[]);let w=()=>(0,i.jsx)(n.Z,{className:"posts-search-input laptop-view",children:(0,i.jsx)("input",{autoFocus:!0,ref:Z,className:"list-posts-input-content",placeholder:"T\xecm kiếm kh\xf3a học"})}),v=s=>{console.log(e)},y=()=>{let e=t.map((e,s)=>(0,i.jsx)(n.Z,{className:"list-items-search-container-elements",children:(0,i.jsx)("p",{children:e.name})},s));return(0,i.jsx)(n.Z,{className:"list-items-search-container-content",children:e})},b=()=>{let s=()=>void 0===e||""==e?(0,i.jsx)(n.Z,{}):(0,i.jsxs)(n.Z,{sx:{display:"flex",flexDirection:"row"},children:[(0,i.jsxs)("p",{className:"directiory-icon",children:[" ",">>"," "]}),(0,i.jsx)("a",{style:{textTransform:"capitalize",marginLeft:"5px"},href:"#",children:e})]}),t=()=>void 0==m.title?(0,i.jsx)(n.Z,{}):(0,i.jsxs)(n.Z,{sx:{display:"flex",flexDirection:"row"},children:[(0,i.jsxs)("p",{className:"directiory-icon",children:[" "," >> "," "]}),(0,i.jsxs)("a",{style:{marginLeft:"5px"},href:"#",children:["T\xecm kiếm với từ kh\xf3a `'`",m.title,"`'`"]})]});return(0,i.jsxs)(n.Z,{className:"directory-wrapper",children:[(0,i.jsx)("a",{href:"./",children:"Trang chủ"}),(0,i.jsxs)("p",{className:"directiory-icon",children:[" "," >> "," "]}),(0,i.jsx)(h(),{style:{marginLeft:"5px"},href:"/posts?page=0&pageSize=9",children:"Kh\xf3a học"}),(0,i.jsx)(s,{}),(0,i.jsx)(t,{})]})},T=e=>(0,i.jsxs)(n.Z,{className:"list-course-item-page-container",children:[(0,i.jsxs)(n.Z,{className:"big-course-wrapper",children:[(0,i.jsxs)(n.Z,{className:"big-course-title-wrapper",children:[(0,i.jsx)("p",{className:"big-course-title",children:"TỬ VI CẤP TỐC"}),(0,i.jsx)("p",{className:"big-course-introduction",children:"Chỉ 12 buổi luận Tử vi như chuy\xean gia c\xf9ng thầy L\xea Thanh Cần"})]}),(0,i.jsx)(n.Z,{className:"big-course-register-button",children:(0,i.jsx)("button",{children:"Đăng k\xfd ngay"})})]}),r.vC.map((e,s)=>(0,i.jsxs)(n.Z,{className:"list-items-element-course",children:[(0,i.jsxs)(n.Z,{className:"image-and-content-element-item",children:[(0,i.jsx)(n.Z,{className:"list-items-image",children:(0,i.jsx)("img",{alt:"",id:"image-post_item",src:e.titleImageUrlStream})}),(0,i.jsxs)(n.Z,{className:"list-posts-content",children:[(0,i.jsx)("h1",{style:{fontSize:"17px",fontWeight:"700px",color:"rgb(0,32,96)",textTransform:"none"},className:"title-list-item-home",children:e.title}),(0,i.jsxs)("p",{className:"content-course",style:{fontSize:"15px",color:"rgb(0,32,96)",margin:"8px 0",width:"100%"},children:["Giảng vi\xean: ",e.teacher]}),(0,i.jsx)("div",{className:"item-desciption",children:(0,i.jsxs)("p",{children:["Thời lượng: ",e.videoTime," ph\xfat"]})})]})]}),(0,i.jsx)(c.Z,{className:"btn-details-post-course",children:"Xem ngay"})]},s))]});return(0,i.jsx)(l.Z,{title:r.Ti.HOME,menuIndex:0,children:(0,i.jsx)(n.Z,{className:"home-page-content",children:(0,i.jsxs)(n.Z,{className:"course-wrapper",children:[(0,i.jsx)(b,{}),(0,i.jsxs)(n.Z,{className:"list-courses-content-wrapper",children:[(0,i.jsxs)(n.Z,{className:"list-courses-search-container",children:[(0,i.jsx)(w,{}),(0,i.jsxs)(n.Z,{className:"list-courses-menu-wrapper",children:[(0,i.jsx)(n.Z,{className:"list-items-search-container-title",children:(0,i.jsx)("p",{children:"Đ\xe0o tạo"})}),(0,i.jsx)(y,{})]}),(0,i.jsxs)(n.Z,{className:"post-page-register-wrapper laptop-view",children:[(0,i.jsx)(n.Z,{className:"post-page-title",children:(0,i.jsx)("p",{children:"Đăng k\xfd xem tử vi"})}),(0,i.jsxs)(n.Z,{className:"post-page-register-content",children:[(0,i.jsxs)(n.Z,{className:"post-page-input-wrapper",children:[(0,i.jsx)("p",{children:"Họ v\xe0 t\xean"}),(0,i.jsx)("input",{type:"text"})]}),(0,i.jsxs)(n.Z,{className:"post-page-input-wrapper",children:[(0,i.jsx)("p",{children:"Số điện thoại"}),(0,i.jsx)("input",{type:"text"})]}),(0,i.jsx)("button",{children:"Đăng k\xfd"})]})]})]}),(0,i.jsxs)(n.Z,{className:"list-courses-course-page-wrapper",children:[(0,i.jsx)(T,{}),(0,i.jsx)(d.Z,{count:g,defaultPage:j,variant:"outlined",onChange:(e,s)=>v(s),sx:{color:"white"}})]})]})]})})})}}},function(e){e.O(0,[4976,3662,746,8415,5054,1664,4706,9774,2888,179],function(){return e(e.s=9770)}),_N_E=e.O()}]);