(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4756],{3626:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/topup",function(){return t(4312)}])},9202:function(e,n,t){"use strict";var l=t(5893);t(7294);var s=t(9008),u=t.n(s),r=t(118),c=t(2329),i=t(7357),a=t(2119),o=t(6127),x=t(1163);let f=e=>{let{children:n,title:t,admin:s,menuIndex:f,cartAmount:d,isHome:h}=e;return(0,x.useRouter)(),(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,l.jsx)(u(),{children:(0,l.jsx)("title",{children:r.Ti.PREFIX+t})}),(0,l.jsx)(a.Z,{}),(0,l.jsxs)(i.Z,{className:"w-full flex flex-col h-screen overflow-y-auto overflow-x-hidden",children:[(0,l.jsx)(c.Z,{}),(0,l.jsx)("div",{className:" max-w-[1280px] mx-auto w-full mt-28 mb-14  px-[5%] min-h-[calc(100vh-78px-96px)]",children:n}),(0,l.jsx)(o.Z,{})]})]})};n.Z=f},4312:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var l=t(5893),s=t(118),u=t(9202),r=t(9154),c=t(7294),i=t(7357),a=t(966),o=t(3321),x=t(1163),f=t(915);function d(){let[e,n]=(0,c.useState)(""),t=(0,x.useRouter)(),d=()=>{(0,f.Cv)(e).then(e=>{e.status==s.MG.OK&&(0,r.fL)(t,e.data.checkoutUrl,null)}).catch(e=>{console.log(e)})};return(0,l.jsx)(u.Z,{title:s.Ti.ALL_PRODUCTS,menuIndex:1,children:(0,l.jsxs)(i.Z,{className:"bg-white rounded-2xl box-shadow p-5",children:[(0,l.jsx)(i.Z,{className:" flex gap-4 justify-center",children:(0,l.jsx)(a.Z,{className:"w-2/3",label:"Số tiền nạp",value:e,onChange:e=>n(e.target.value)})}),(0,l.jsx)(i.Z,{className:"w-full flex justify-center mt-4",children:(0,l.jsx)(o.Z,{onClick:d,variant:"contained",className:"bg-blue-500 text-white ",children:"Tạo y\xeau cầu nạp tiền"})})]})})}},915:function(e,n,t){"use strict";t.d(n,{Cv:function(){return r},OR:function(){return c},pC:function(){return u}});var l=t(118),s=t(9154);let u=async()=>{let e=l.zj.TOPUP_SERVICE+"/list";return(0,s.vn)(e,null)},r=async e=>{let n=l.zj.TOPUP_SERVICE+"/request";return(0,s.NJ)(n,{amount:e,method:null})},c=async e=>{let n=l.zj.TOPUP_SERVICE+"";return(0,s.vn)(n,e)}}},function(e){e.O(0,[4976,3662,746,8415,966,4706,9774,2888,179],function(){return e(e.s=3626)}),_N_E=e.O()}]);