"use strict";(()=>{var e={};e.id=174,e.ids=[174],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},4057:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>h,patchFetch:()=>P,requestAsyncStorage:()=>d,routeModule:()=>u,serverHooks:()=>m,staticGenerationAsyncStorage:()=>l});var a={};r.r(a),r.d(a,{GET:()=>c,dynamic:()=>p});var n=r(9303),o=r(8716),i=r(670),s=r(7070);let p="force-dynamic";async function c(){let e=await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"client_credentials",client_id:process.env.APP_CLIENT_ID,client_secret:process.env.APP_CLIENT_SECRET}).toString()}),t=await e.json();return s.NextResponse.json(t,{status:200})}let u=new n.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/token/route",pathname:"/api/token",filename:"route",bundlePath:"app/api/token/route"},resolvedPagePath:"C:\\Users\\leoni\\Data\\Informatica\\Projects\\daruma_vetrina\\app\\api\\token\\route.js",nextConfigOutput:"",userland:a}),{requestAsyncStorage:d,staticGenerationAsyncStorage:l,serverHooks:m}=u,h="/api/token/route";function P(){return(0,i.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:l})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[948,972],()=>r(4057));module.exports=a})();