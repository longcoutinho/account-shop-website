(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8558],{1222:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var s=t(7294);function l({controlled:e,default:n,name:t,state:l="value"}){let{current:r}=s.useRef(void 0!==e),[c,i]=s.useState(n),u=s.useCallback(e=>{r||i(e)},[]);return[r?e:c,u]}},4021:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/topup/list",function(){return t(7924)}])},9202:function(e,n,t){"use strict";var s=t(5893);t(7294);var l=t(9008),r=t.n(l),c=t(118),i=t(2329),u=t(7357),a=t(2119),x=t(6127),h=t(1163);let o=e=>{let{children:n,title:t,admin:l,menuIndex:o,cartAmount:d,isHome:f}=e;return(0,h.useRouter)(),(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,s.jsx)(r(),{children:(0,s.jsx)("title",{children:c.Ti.PREFIX+t})}),(0,s.jsx)(a.Z,{}),(0,s.jsxs)(u.Z,{className:"w-full flex flex-col h-screen overflow-y-auto overflow-x-hidden",children:[(0,s.jsx)(i.Z,{}),(0,s.jsxs)("div",{className:"min-h-[calc(100vh-78px)] mt-[78px]",children:[(0,s.jsx)("div",{className:" max-w-[1280px] mx-auto w-full pt-10 px-[2%] sm:px-[5%] min-h-[calc(100%-188px)] lg:min-h-[calc(100%-164px)] pb-8",children:n}),(0,s.jsx)(x.Z,{})]})]})]})};n.Z=o},7924:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var s=t(5893),l=t(118),r=t(9202);t(4950),t(4233),t(4256),t(7775);var c=t(9154),i=t(7294),u=t(7357),a=t(5054),x=t(915),h=t(2882),o=t(3184),d=t(7906),f=t(3252),j=t(3816),p=t(295);function Z(e){let[n,t]=(0,i.useState)([]),[r,Z]=i.useState(1),m=(e,n)=>{Z(n)};(0,i.useEffect)(()=>{v()},[]);let v=()=>{(0,x.pC)().then(e=>{e.status==l.MG.OK&&t(e.data.listTopUp)}).catch(e=>{console.log(e)})};return(0,s.jsxs)(u.Z,{className:"flex flex-row gap-5 flex-wrap justify-items-center bg-white rounded-2xl box-shadow p-5",children:[(0,s.jsx)(h.Z,{children:(0,s.jsxs)(d.Z,{children:[(0,s.jsx)(o.Z,{children:(0,s.jsxs)(j.Z,{children:[(0,s.jsx)(f.Z,{children:"STT"}),(0,s.jsx)(f.Z,{children:"M\xe3 giao dịch"}),(0,s.jsx)(f.Z,{children:"Số tiền"}),(0,s.jsx)(f.Z,{children:"Phương thức nạp"}),(0,s.jsx)(f.Z,{children:"Thời gian"}),(0,s.jsx)(f.Z,{children:"Trạng th\xe1i"})]})}),(0,s.jsx)(p.Z,{children:n.map((e,n)=>(0,s.jsxs)(j.Z,{children:[(0,s.jsx)(f.Z,{children:n+1}),(0,s.jsx)(f.Z,{children:e.id}),(0,s.jsx)(f.Z,{children:e.amount}),(0,s.jsx)(f.Z,{children:1==e.method?"Interner Banking":"MoMo"}),(0,s.jsx)(f.Z,{children:(0,c.o0)(e.createDate)}),(0,s.jsx)(f.Z,{children:0==e.status?"Thất bại":1==e.status?"Th\xe0nh c\xf4ng":"Đang xử l\xfd"})]}))})]})}),(0,s.jsx)(a.Z,{count:10,page:r,onChange:m,className:"custom-pagination"})]})}function m(){let[e,n]=(0,i.useState)(null),[t,c]=(0,i.useState)(""),[a,x]=(0,i.useState)(null),[h,o]=(0,i.useState)("");return(0,s.jsx)(r.Z,{title:l.Ti.ALL_PRODUCTS,menuIndex:1,children:(0,s.jsx)(u.Z,{className:"p-5 flex flex-col gap-5",children:(0,s.jsx)(Z,{})})})}},915:function(e,n,t){"use strict";t.d(n,{Cv:function(){return c},OR:function(){return i},pC:function(){return r}});var s=t(118),l=t(9154);let r=async()=>{let e=s.zj.TOPUP_SERVICE+"/list";return(0,l.vn)(e,null)},c=async e=>{let n=s.zj.TOPUP_SERVICE+"/request";return(0,l.NJ)(n,{amount:e,method:null})},i=async e=>{let n=s.zj.TOPUP_SERVICE+"";return(0,l.vn)(n,e)}}},function(e){e.O(0,[4976,3662,746,8415,5054,9097,4706,9774,2888,179],function(){return e(e.s=4021)}),_N_E=e.O()}]);