"use strict";(()=>{var e={};e.id=891,e.ids=[891],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},2079:e=>{e.exports=import("openai")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},8054:(e,t,r)=>{r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{config:()=>l,default:()=>c,routeModule:()=>p});var a=r(1802),o=r(7153),s=r(6249),i=r(2473),u=e([i]);i=(u.then?(await u)():u)[0];let c=(0,s.l)(i,"default"),l=(0,s.l)(i,"config"),p=new a.PagesAPIRouteModule({definition:{kind:o.x.PAGES_API,page:"/api/calc/[type]",pathname:"/api/calc/[type]",bundlePath:"",filename:""},userland:i});n()}catch(e){n(e)}})},2473:(e,t,r)=>{r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{default:()=>s});var a=r(2079),o=e([a]);function s(e,t){let{type:r}=e.query,{prompt:n,apiKey:o}=e.body,s=new a.default({apiKey:o||process.env.OPENAI_API_KEY,dangerouslyAllowBrowser:!0});"0"==r?s.chat.completions.create({model:"gpt-3.5-turbo",messages:[{role:"user",content:n}],temperature:.5}).then(e=>{t.status(200).json(e)}).catch(e=>{t.status(500).json({error:e})}):"1"==r?s.images.generate({model:"dall-e-3",prompt:n,n:1,size:"1792x1024"}).then(e=>{console.log(e),t.status(200).json(e)}).catch(e=>{t.status(500).json({error:e.error})}):t.status(404).json({error:"Invalid type"})}a=(o.then?(await o)():o)[0],n()}catch(e){n(e)}})},7153:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},1802:(e,t,r)=>{e.exports=r(145)}};var t=require("../../../webpack-api-runtime.js");t.C(e);var r=t(t.s=8054);module.exports=r})();