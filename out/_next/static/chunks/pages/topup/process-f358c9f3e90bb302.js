(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6318],{8456:function(e,r,t){"use strict";t.d(r,{Z:function(){return R}});var n=t(3366),i=t(7462),s=t(7294),a=t(6010),o=t(8510),l=t(917),c=t(8216),u=t(1657),d=t(948),f=t(1977),h=t(8027);function x(e){return(0,h.ZP)("MuiCircularProgress",e)}(0,f.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var m=t(5893);let v=["className","color","disableShrink","size","style","thickness","value","variant"],p=e=>e,Z,k,y,P,g=(0,l.F4)(Z||(Z=p`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),w=(0,l.F4)(k||(k=p`
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
`)),j=e=>{let{classes:r,variant:t,color:n,disableShrink:i}=e,s={root:["root",t,`color${(0,c.Z)(n)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(t)}`,i&&"circleDisableShrink"]};return(0,o.Z)(s,x,r)},_=(0,d.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,c.Z)(t.color)}`]]}})(({ownerState:e,theme:r})=>(0,i.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:r.transitions.create("transform")},"inherit"!==e.color&&{color:(r.vars||r).palette[e.color].main}),({ownerState:e})=>"indeterminate"===e.variant&&(0,l.iv)(y||(y=p`
      animation: ${0} 1.4s linear infinite;
    `),g)),C=(0,d.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),S=(0,d.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.circle,r[`circle${(0,c.Z)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})(({ownerState:e,theme:r})=>(0,i.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,l.iv)(P||(P=p`
      animation: ${0} 1.4s ease-in-out infinite;
    `),w)),E=s.forwardRef(function(e,r){let t=(0,u.Z)({props:e,name:"MuiCircularProgress"}),{className:s,color:o="primary",disableShrink:l=!1,size:c=40,style:d,thickness:f=3.6,value:h=0,variant:x="indeterminate"}=t,p=(0,n.Z)(t,v),Z=(0,i.Z)({},t,{color:o,disableShrink:l,size:c,thickness:f,value:h,variant:x}),k=j(Z),y={},P={},g={};if("determinate"===x){let e=2*Math.PI*((44-f)/2);y.strokeDasharray=e.toFixed(3),g["aria-valuenow"]=Math.round(h),y.strokeDashoffset=`${((100-h)/100*e).toFixed(3)}px`,P.transform="rotate(-90deg)"}return(0,m.jsx)(_,(0,i.Z)({className:(0,a.Z)(k.root,s),style:(0,i.Z)({width:c,height:c},P,d),ownerState:Z,ref:r,role:"progressbar"},g,p,{children:(0,m.jsx)(C,{className:k.svg,ownerState:Z,viewBox:"22 22 44 44",children:(0,m.jsx)(S,{className:k.circle,style:y,ownerState:Z,cx:44,cy:44,r:(44-f)/2,fill:"none",strokeWidth:f})})}))});var R=E},65:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/topup/process",function(){return t(5732)}])},9202:function(e,r,t){"use strict";var n=t(5893);t(7294);var i=t(9008),s=t.n(i),a=t(118),o=t(2329),l=t(7357),c=t(2119),u=t(6127),d=t(1163);let f=e=>{let{children:r,title:t,admin:i,menuIndex:f,cartAmount:h,isHome:x}=e;return(0,d.useRouter)(),(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,n.jsx)(s(),{children:(0,n.jsx)("title",{children:a.Ti.PREFIX+t})}),(0,n.jsx)(c.Z,{}),(0,n.jsxs)(l.Z,{className:"w-full flex flex-col h-screen overflow-y-auto overflow-x-hidden",children:[(0,n.jsx)(o.Z,{}),(0,n.jsxs)("div",{className:"min-h-[calc(100vh-78px)] mt-[78px]",children:[(0,n.jsx)("div",{className:" max-w-[1280px] mx-auto w-full pt-10 px-[2%] sm:px-[5%] min-h-[calc(100%-188px)] lg:min-h-[calc(100%-164px)] pb-8",children:r}),(0,n.jsx)(u.Z,{})]})]})]})};r.Z=f},5732:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return f}});var n=t(5893),i=t(118),s=t(9202),a=t(9154),o=t(7294),l=t(7357),c=t(8456),u=t(1163),d=t(915);function f(){let e=(0,u.useRouter)();return(0,o.useEffect)(()=>{null!=e.query.id&&(0,d.OR)(e.query).then(r=>{r.status==i.MG.OK&&(0,a.fL)(e,i.Zq.LIST_TOP_UP_PAGE,null)}).catch(e=>{console.log(e)})},[e.query.id]),(0,n.jsx)(s.Z,{title:i.Ti.ALL_PRODUCTS,menuIndex:1,children:(0,n.jsx)(l.Z,{sx:{height:"500px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:(0,n.jsx)(c.Z,{})})})}},915:function(e,r,t){"use strict";t.d(r,{Cv:function(){return a},OR:function(){return o},pC:function(){return s}});var n=t(118),i=t(9154);let s=async()=>{let e=n.zj.TOPUP_SERVICE+"/list";return(0,i.vn)(e,null)},a=async e=>{let r=n.zj.TOPUP_SERVICE+"/request";return(0,i.NJ)(r,{amount:e,method:null})},o=async e=>{let r=n.zj.TOPUP_SERVICE+"";return(0,i.vn)(r,e)}}},function(e){e.O(0,[4976,3662,746,8415,4706,9774,2888,179],function(){return e(e.s=65)}),_N_E=e.O()}]);