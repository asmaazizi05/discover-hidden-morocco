(function(){const e="20261014_v9";try{localStorage.getItem("dhm_build_ver")!==e&&(localStorage.setItem("dhm_build_ver",e),"caches"in window&&caches.keys().then(t=>{t.forEach(a=>caches.delete(a))}),"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then(t=>{t.forEach(a=>a.unregister())}))}catch{}window.addEventListener("pageshow",function(t){t.persisted&&window.location.reload()})})(),(function(){function e(){try{const a=window.location.origin||window.location.protocol+"//"+window.location.host,i=window.location.pathname||"",o=window.location.search||"",n=window.location.hash||"",r=i.toLowerCase();if(r.endsWith("/index.html")||r==="/index.html"||r==="index.html"||r==="/index"){window.history.replaceState(null,document.title,a+"/"+o+n);return}if(r.includes("testimonials")){window.history.replaceState(null,document.title,a+"/reviews.html"+o+n);return}}catch{}}e(),document.readyState==="loading"&&document.addEventListener("DOMContentLoaded",e),window.addEventListener("pageshow",e),window.addEventListener("popstate",e);function t(){try{document.querySelectorAll("a[href]").forEach(function(a){const i=a.getAttribute("href");if(i){if(i==="index.html"||i==="./index.html"||i==="/index.html"){a.setAttribute("href","/");return}if(i==="testimonials.html"||i==="./testimonials.html"||i==="/testimonials.html"||i==="testimonials"||i==="/testimonials"){a.setAttribute("href","reviews.html");return}if(i==="reviews"||i==="/reviews"){a.setAttribute("href","reviews.html");return}if(i==="map"||i==="/map"){a.setAttribute("href","map.html");return}if(i==="booking"||i==="/booking"){a.setAttribute("href","booking.html");return}if(i==="destinations"||i==="/destinations"){a.setAttribute("href","destinations.html");return}if(i==="contact"||i==="/contact"){a.setAttribute("href","contact.html");return}if(i==="about"||i==="/about"){a.setAttribute("href","about.html");return}}})}catch{}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",t):t()})(),(function(){try{const e=".leaflet-control-attribution, .leaflet-control-attribution * { display: none !important; opacity: 0 !important; visibility: hidden !important; pointer-events: none !important; height: 0 !important; width: 0 !important; font-size: 0 !important; line-height: 0 !important; margin: 0 !important; padding: 0 !important; border: none !important; }",t=document.head||document.getElementsByTagName("head")[0];if(t){const a=document.createElement("style");a.id="dhm-hide-leaflet-attribution",a.appendChild(document.createTextNode(e)),t.appendChild(a)}}catch{}})(),(function(){(!window.chatbase||window.chatbase("getState")!=="initialized")&&(window.chatbase=(...a)=>{window.chatbase.q||(window.chatbase.q=[]),window.chatbase.q.push(a)},window.chatbase=new Proxy(window.chatbase,{get(a,i){return i==="q"?a.q:(...o)=>a(i,...o)}}));let e=!1;const t=function(){if(e||document.getElementById("aVrkUFtVzGoLUuzNCYVP0"))return;e=!0;const a=document.createElement("script");a.src="https://www.chatbase.co/embed.min.js",a.id="aVrkUFtVzGoLUuzNCYVP0",a.domain="www.chatbase.co",a.defer=!0,document.body?document.body.appendChild(a):document.addEventListener("DOMContentLoaded",()=>document.body.appendChild(a))};["scroll","touchstart","mousemove","click","keydown"].forEach(a=>{window.addEventListener(a,t,{once:!0,passive:!0})})})(),(function(){function e(){const t=document.getElementById("chatbase-bubble-button")||document.querySelector('button[id*="chatbase"]');if(t){t.style.setProperty("bottom","25px","important"),t.style.setProperty("left","25px","important"),t.style.setProperty("right","auto","important"),t.style.setProperty("z-index","99999","important"),t.style.setProperty("width","52px","important"),t.style.setProperty("height","52px","important"),t.style.setProperty("border-radius","50%","important"),t.style.setProperty("display","flex","important"),t.style.setProperty("align-items","center","important"),t.style.setProperty("justify-content","center","important"),t.style.setProperty("box-shadow","0 4px 25px rgba(200, 90, 50, 0.5)","important"),t.style.setProperty("border","2px solid #C85A32","important");const i=document.documentElement.getAttribute("data-theme")==="dark"||document.body.classList.contains("dark");t.style.setProperty("background",i?"#1E1E1E":"#FFFFFF","important"),t.querySelectorAll("svg, svg path, svg g").forEach(function(o){o.style.setProperty("fill","#C85A32","important"),o.style.setProperty("color","#C85A32","important")})}const a=document.getElementById("chatbase-bubble-window");if(a){const i=document.documentElement.getAttribute("data-theme")==="dark"||document.body.classList.contains("dark");a.style.setProperty("bottom","90px","important"),a.style.setProperty("box-shadow","0 0 25px rgba(200, 90, 50, 0.4)","important"),a.style.setProperty("border","1px solid rgba(200, 90, 50, 0.4)","important"),a.style.setProperty("border-radius","12px","important"),a.style.setProperty("overflow","hidden","important"),a.style.setProperty("background-color",i?"#151515":"#FAFAFA","important");try{if(window.chatbase&&window.chatbase_current_theme!==i){window.chatbase("setOptions",{theme:i?"dark":"light",styles:{theme:i?"dark":"light"}});const o=a.querySelector("iframe");if(o&&o.contentWindow)try{o.contentWindow.postMessage({type:"chatbase_theme",theme:i?"dark":"light"},"*")}catch{}window.chatbase_current_theme=i}}catch{}window.innerWidth<=640?(a.style.setProperty("left","12px","important"),a.style.setProperty("right","12px","important")):(a.style.setProperty("left","25px","important"),a.style.setProperty("right","auto","important"))}}window.MutationObserver&&new MutationObserver(e).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme","class"]})})(),(function(){const e="contact@discoverhiddenmorocco.com",t="dhm_ai_visitor_queries",a="dhm_ai_monthly_analytics",i=["hi","hello","hey","salam","bonjour","salut","hola","ciao","test","ok","yo"];let o={id:"sess_"+Date.now()+"_"+Math.random().toString(36).substring(2,7),startTime:new Date().toISOString(),page:window.location.href,pageTitle:document.title,userLanguage:localStorage.getItem("hm_lang")||navigator.language||"en",userQuestions:[],botResponses:[],chatWindowWasOpened:!1,timer:null,sent:!1};function n(){try{return JSON.parse(localStorage.getItem(t)||"[]")}catch{return[]}}function r(l){try{localStorage.setItem(t,JSON.stringify(l.slice(-100)))}catch{}}function d(){try{const l=new Date,s=l.getFullYear()+"-"+String(l.getMonth()+1).padStart(2,"0");let u=JSON.parse(localStorage.getItem(a)||"{}");return u.months||(u.months={}),u.months[s]||(u.months[s]={monthKey:s,totalConversations:0,totalQuestions:0,destinations:{},interests:{},gaps:[],recentInquiries:[],summaryDispatched:!1}),u.currentMonth=s,u}catch{return{currentMonth:"2026-10",months:{}}}}function c(l){try{localStorage.setItem(a,JSON.stringify(l))}catch{}}function h(l){const s=l.join(" ").toLowerCase(),u=[];[{name:"Sahara (Merzouga & Erg Chebbi)",match:/merzouga|sahara|desert|erg chebbi|dune|bivouac|zagora/i},{name:"Marrakech & Surrounding Region",match:/marrakech|marrakesh|jamaa|jemaa|medina|majorelle/i},{name:"Fes & Imperial Heritage",match:/fes|fez|tanner|chouara/i},{name:"Chefchaouen & Northern Rif",match:/chefchaouen|chaouen|blue city/i},{name:"High Atlas Mountains & Imlil",match:/atlas|imlil|toubkal|ourika/i},{name:"Essaouira & Atlantic Coast",match:/essaouira|mogador|beach|coast|ocean|taghazout/i},{name:"Agafay Stone Desert",match:/agafay|stone desert/i},{name:"Ouarzazate & Kasbah Trail",match:/ouarzazate|ait ben haddou|kasbah|cinema/i},{name:"Dades & Todra Gorges",match:/dades|todra|gorges|tinghir/i},{name:"Tangier, Casablanca & Coastal Hubs",match:/tanger|tangier|casablanca|rabat/i}].forEach(k=>{k.match.test(s)&&u.push(k.name)});const m=[];[{name:"Pricing & Itemized Quotation",match:/price|cost|how much|budget|rate|expensive|cheap|quote|prix|combien|tarif/i},{name:"Private Transportation & Chauffeur",match:/driver|transport|4x4|car|van|chauffeur|voiture|transfer|airport|pickup/i},{name:"Luxury Bivouac & Boutique Lodging",match:/camp|tent|riad|luxury|glamping|hotel|suite|pool|chambre/i},{name:"Dietary Preferences & Culinary Needs",match:/food|dinner|lunch|breakfast|halal|vegetarian|vegan|gluten|repas|diner/i},{name:"Family & Child Accommodations",match:/family|child|children|kid|baby|toddler|famille|enfant/i},{name:"Excursions & Desert Activities",match:/camel|quad|buggy|trek|hike|balloon|sunset|sunrise|dromadaire/i},{name:"Custom Dates & Tailored Itinerary",match:/day|days|night|nights|itinerary|schedule|custom|private|circuit|programme/i}].forEach(k=>{k.match.test(s)&&m.push(k.name)});const p=[];return/price|cost|prix|combien/i.test(s)&&p.push("Client requested itemized pricing. Ensure transparent starting rates and instant quote buttons are visible on this itinerary."),/vegetarian|vegan|halal|diet/i.test(s)&&p.push("Special culinary requirement identified. Clarify that private meals and desert camps accommodate vegetarian, vegan, and halal dining."),/baby|child|kid|famille|enfant/i.test(s)&&p.push("Family travel inquiry identified. Prominently highlight family safety provisions and private child car seats."),u.length===0&&u.push("Custom / Bespoke Morocco Itinerary"),m.length===0&&m.push("General Tour Inquiry"),{destinations:u.join(", "),interests:m.join(", "),destinationsList:u,interestsList:m,suggestions:p.join(" | ")||"Ensure personalized itinerary highlights and direct WhatsApp consultation are clear."}}function v(l,s){try{const u=d(),m=u.months[u.currentMonth];if(!m)return;m.totalConversations+=1,m.totalQuestions+=l.length,s.destinationsList.forEach(p=>{m.destinations[p]=(m.destinations[p]||0)+1}),s.interestsList.forEach(p=>{m.interests[p]=(m.interests[p]||0)+1}),s.suggestions&&!m.gaps.includes(s.suggestions)&&(m.gaps.push(s.suggestions),m.gaps.length>20&&m.gaps.shift()),m.recentInquiries.push({time:new Date().toLocaleDateString("en-US",{month:"short",day:"numeric"}),question:l[0].substring(0,80),dest:s.destinations}),m.recentInquiries.length>50&&m.recentInquiries.shift(),c(u)}catch{}}function f(l){return!l||l.length===0?!1:l.some(s=>{const u=s.trim().toLowerCase();return u.length>=4&&!i.includes(u)})}function y(l){if(o.sent||!f(o.userQuestions))return;o.sent=!0,o.timer&&clearTimeout(o.timer);const s=o.userQuestions,u=o.botResponses,m=h(s),p=new Date().toLocaleString("en-US",{timeZone:"Africa/Casablanca",dateStyle:"medium",timeStyle:"short"}),k=n();k.push({date:p,reason:l,page:o.page,questions:s,answers:u,analysis:m}),r(k),v(s,m);const A=s.map((g,S)=>`${S+1}. "${g}"`).join(`
`),x=u.length>0?u.map((g,S)=>`Response ${S+1}: ${g.substring(0,240)}${g.length>240?"...":""}`).join(`

`):"The client concluded their interactive inquiry session.",w="DHM-"+Date.now().toString(36).toUpperCase(),E={_subject:`Discover Hidden Morocco - Visitor Inquiry Intelligence: ${m.destinations}`,_template:"table","Report Reference":w,"Session Status":`Concluded (${l})`,"Recorded Date and Time":`${p} (Casablanca Time)`,"Target Destination":m.destinations,"Client Requirements and Intent":m.interests,"Visitor Inquiries":A,"AI Assistant Response Summary":x,"Website Optimization Recommendations":m.suggestions,"Referral Page URL":o.page,"Browser Language":o.userLanguage,_replyto:e};try{fetch("https://formsubmit.co/ajax/"+e,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(E)}).then(g=>g.json()).then(()=>{console.log("[DHM Executive Intelligence] Visitor brief successfully dispatched to",e)}).catch(g=>{console.warn("[DHM Executive Intelligence] Dispatch log:",g)})}catch(g){console.warn("[DHM Executive Intelligence] Dispatch error:",g)}}function b(){o.timer&&clearTimeout(o.timer),o.timer=setTimeout(function(){y("Inactivity timeout (3 minutes idle)")},18e4)}function T(l){if(!l||typeof l!="string")return;const s=l.trim();!s||o.userQuestions.includes(s)||(o.userQuestions.push(s),o.chatWindowWasOpened=!0,b())}function C(l){if(!l||typeof l!="string")return;const s=l.trim();s&&(o.botResponses.push(s),b())}function I(){if(window.chatbase&&typeof window.chatbase.addEventListener=="function")try{return window.chatbase.addEventListener("user-message",function(l){const s=l&&(l.content||l.message||l.text||l.data&&l.data.content);s&&T(s)}),window.chatbase.addEventListener("assistant-message",function(l){const s=l&&(l.content||l.message||l.text||l.data&&l.data.content);s&&C(s)}),!0}catch{}return!1}window.addEventListener("message",function(l){if(!(!l.origin||!l.origin.includes("chatbase.co")))try{let s=l.data;if(typeof s=="string"&&(s.startsWith("{")||s.startsWith("["))&&(s=JSON.parse(s)),!s)return;if(s.type==="user-message"||s.event==="user-message"||s.action==="user-message"){const u=s.content||s.message||s.text||s.data&&s.data.content;u&&T(u)}if(s.type==="assistant-message"||s.event==="assistant-message"){const u=s.content||s.message||s.text||s.data&&s.data.content;u&&C(u)}(s.type==="close"||s.action==="close"||s.event==="close"||s.type==="chatbase:closed")&&y("Chat window closed")}catch{}});function M(){const l=document.getElementById("chatbase-bubble-button")||document.querySelector('button[id*="chatbase"]');l&&!l._dhm_hooked&&(l._dhm_hooked=!0,l.addEventListener("click",function(){const s=document.getElementById("chatbase-bubble-window");s&&s.style.display!=="none"&&s.getAttribute("aria-hidden")!=="true"&&o.userQuestions.length>0&&setTimeout(function(){y("Chat window closed by client")},600)}))}if(setInterval(M,1e3),!I()){const l=setInterval(function(){I()&&clearInterval(l)},1500);setTimeout(function(){clearInterval(l)},3e4)}window.addEventListener("beforeunload",function(){o.userQuestions.length>0&&!o.sent&&y("Client left page / closed browser tab")}),document.addEventListener("visibilitychange",function(){document.visibilityState==="hidden"&&o.userQuestions.length>0&&!o.sent&&y("Client minimized browser / changed tab")}),window.sendMonthlyExecutiveDashboard=function(l,s){const u=d(),m=l||u.currentMonth,p=u.months[m];if(!p||p.totalConversations===0){const g=`No inquiries recorded for ${m}.`;return s&&alert(g),!1}const k=Object.entries(p.destinations||{}).sort((g,S)=>S[1]-g[1]).map(([g,S],B)=>`${B+1}. ${g}: ${S} inquiries (${Math.round(S/p.totalConversations*100)}% of demand)`).join(`
`),A=Object.entries(p.interests||{}).sort((g,S)=>S[1]-g[1]).map(([g,S],B)=>`${B+1}. ${g}: ${S} requests`).join(`
`),x=p.gaps&&p.gaps.length>0?p.gaps.map((g,S)=>`${S+1}. ${g}`).join(`
`):"No critical content gaps identified during this period.",w=p.recentInquiries&&p.recentInquiries.length>0?p.recentInquiries.slice(-8).map(g=>`\u2022 [${g.time}] Destination: ${g.dest} - Query: "${g.question}"`).join(`
`):"No sample records available.",E={_subject:`Discover Hidden Morocco - Monthly Intelligence Brief: ${m}`,_template:"table","Executive Overview":`Monthly prospective client demand and inquiry analysis for Discover Hidden Morocco during ${m}.`,"Reporting Period":m,"Total Inquiries Processed":`${p.totalConversations} completed client sessions (${p.totalQuestions} questions)`,"Destination Demand Ranking":k||"General Morocco Exploration","Primary Client Requirements":A||"Tailored Private Tours","Identified Website Optimization Opportunities":x,"Representative Client Inquiries":w,"Strategic Action Plan":"Publish dedicated transparent starting prices and highlight customized dietary accommodations to maximize direct reservation conversions.","Dispatch Timestamp":new Date().toLocaleString("en-US",{timeZone:"Africa/Casablanca",dateStyle:"long",timeStyle:"short"}),_replyto:e};try{return fetch("https://formsubmit.co/ajax/"+e,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(E)}).then(g=>g.json()).then(()=>{p.summaryDispatched=!0,c(u),s&&alert(`Monthly Executive Brief for ${m} has been successfully dispatched to ${e}.`),console.log(`[DHM Monthly Brief] Dispatched for ${m} to`,e)}).catch(g=>{s&&alert(`Unable to dispatch brief: ${g.message}`)}),!0}catch{return!1}};function D(){try{const l=d(),s=l.currentMonth;Object.keys(l.months).forEach(u=>{u!==s&&l.months[u]&&!l.months[u].summaryDispatched&&l.months[u].totalConversations>0&&(console.log("[DHM Monthly Rollover] Dispatching completed month brief for",u),window.sendMonthlyExecutiveDashboard(u,!1))})}catch{}}setTimeout(D,4e3),window.dhmMonthlyDashboard=function(){const l=d(),s=l.currentMonth,u=l.months[s]||{totalConversations:0,totalQuestions:0,destinations:{},interests:{},gaps:[]},m=document.getElementById("dhm-admin-dashboard-modal");m&&m.remove();const p=Object.entries(u.destinations||{}).sort((w,E)=>E[1]-w[1]).map(([w,E])=>`<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-size:0.88rem;color:#E2E8F0;"><span>${w}</span><strong style="color:#E7A93C;">${E} (${Math.round(E/(u.totalConversations||1)*100)}%)</strong></div>`).join("")||"<p style='color:rgba(255,255,255,0.4);font-size:0.85rem;'>No inquiry records registered yet for this period.</p>",k=Object.entries(u.interests||{}).sort((w,E)=>E[1]-w[1]).map(([w,E])=>`<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid rgba(255,255,260,0.06);font-size:0.88rem;color:#E2E8F0;"><span>${w}</span><strong style="color:#C85A32;">${E}</strong></div>`).join("")||"<p style='color:rgba(255,255,255,0.4);font-size:0.85rem;'>No inquiry records registered yet for this period.</p>",A=u.gaps&&u.gaps.length>0?u.gaps.map(w=>`<li style="margin-bottom:8px;font-size:0.85rem;color:#FBD38D;line-height:1.5;">${w}</li>`).join(""):"<p style='color:rgba(255,255,255,0.4);font-size:0.85rem;'>No content gaps identified yet.</p>",x=document.createElement("div");x.id="dhm-admin-dashboard-modal",x.style.cssText=`
      position: fixed; inset: 0; z-index: 999999;
      background: rgba(15, 23, 42, 0.9); backdrop-filter: blur(10px);
      display: flex; align-items: center; justify-content: center; padding: 20px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
    `,x.innerHTML=`
      <div style="background: #0B1120; border: 1.5px solid rgba(200,90,50,0.4); border-radius: 16px; width: 100%; max-width: 780px; max-height: 90vh; overflow-y: auto; color: #F8FAFC; box-shadow: 0 25px 65px rgba(0,0,0,0.7); padding: 32px;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 24px; padding-bottom: 18px; border-bottom: 1px solid rgba(255,255,255,0.08);">
          <div>
            <div style="font-size:0.75rem; letter-spacing:2px; text-transform:uppercase; color:#E7A93C; font-weight:700;">Discover Hidden Morocco | Executive Analytics</div>
            <h2 style="margin:6px 0 0; font-size:1.45rem; font-weight:700; color:#FFFFFF;">Monthly Client Demand Intelligence (${s})</h2>
          </div>
          <button id="dhm-close-dash" style="background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.15); border-radius:8px; color:#fff; font-size:1.1rem; cursor:pointer; padding:6px 14px; transition:all 0.2s;">Close</button>
        </div>

        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px; margin-bottom: 24px;">
          <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 18px;">
            <div style="font-size:0.78rem; text-transform:uppercase; letter-spacing:1px; color:#94A3B8;">Total Client Sessions</div>
            <div style="font-size:1.9rem; font-weight:800; color:#E7A93C; margin-top:6px;">${u.totalConversations}</div>
          </div>
          <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 18px;">
            <div style="font-size:0.78rem; text-transform:uppercase; letter-spacing:1px; color:#94A3B8;">Questions Processed</div>
            <div style="font-size:1.9rem; font-weight:800; color:#38BDF8; margin-top:6px;">${u.totalQuestions}</div>
          </div>
          <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 18px;">
            <div style="font-size:0.78rem; text-transform:uppercase; letter-spacing:1px; color:#94A3B8;">Monthly Dispatch Status</div>
            <div style="font-size:1.1rem; font-weight:700; color:${u.summaryDispatched?"#4ADE80":"#FBBF24"}; margin-top:12px;">${u.summaryDispatched?"Dispatched":"Active / Scheduled"}</div>
          </div>
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-bottom: 24px;">
          <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 20px;">
            <h4 style="margin:0 0 14px; color:#E7A93C; font-size:0.92rem; text-transform:uppercase; letter-spacing:1px;">Destination Demand Breakdown</h4>
            ${p}
          </div>
          <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 20px;">
            <h4 style="margin:0 0 14px; color:#C85A32; font-size:0.92rem; text-transform:uppercase; letter-spacing:1px;">Primary Client Requirements</h4>
            ${k}
          </div>
        </div>

        <div style="background: rgba(200,90,50,0.08); border: 1px solid rgba(200,90,50,0.25); border-radius: 12px; padding: 20px; margin-bottom: 24px;">
          <h4 style="margin:0 0 12px; color:#FF8A65; font-size:0.92rem; text-transform:uppercase; letter-spacing:1px;">Identified Website Content Opportunities</h4>
          <ul style="margin:0; padding-left:20px;">${A}</ul>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; padding-top:16px; border-top:1px solid rgba(255,255,255,0.08);">
          <button id="dhm-send-dash-now" style="background: linear-gradient(135deg, #C85A32, #E7A93C); border:none; color:#fff; font-weight:700; padding:13px 28px; border-radius:8px; cursor:pointer; font-size:0.92rem; box-shadow:0 4px 18px rgba(200,90,50,0.3); transition:transform 0.2s;">
            Send Executive Brief to Email Now
          </button>
          <button id="dhm-export-dash-json" style="background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.2); color:#E2E8F0; padding:13px 22px; border-radius:8px; cursor:pointer; font-size:0.88rem; transition:background 0.2s;">
            Export Data (JSON)
          </button>
        </div>
      </div>
    `,document.body.appendChild(x),document.getElementById("dhm-close-dash").addEventListener("click",()=>x.remove()),x.addEventListener("click",w=>{w.target===x&&x.remove()}),document.getElementById("dhm-send-dash-now").addEventListener("click",function(){this.textContent="Dispatching...",this.disabled=!0,window.sendMonthlyExecutiveDashboard(s,!0),setTimeout(()=>{x.remove()},1500)}),document.getElementById("dhm-export-dash-json").addEventListener("click",function(){const w=new Blob([JSON.stringify(u,null,2)],{type:"application/json"}),E=document.createElement("a");E.href=URL.createObjectURL(w),E.download=`dhm-executive-analytics-${s}.json`,E.click()})},(window.location.search.includes("admin=dashboard")||window.location.search.includes("admin_ai=1"))&&window.addEventListener("DOMContentLoaded",function(){setTimeout(window.dhmMonthlyDashboard,800)})})();const AppState={theme:localStorage.getItem("hm_theme")||"light",lang:localStorage.getItem("hm_lang")||"en",favorites:JSON.parse(localStorage.getItem("hm_favorites")||"[]"),mapInstance:null,mapMarkers:[]},DESTINATIONS_DB=[{id:"marrakech",title:"Marrakech",region:"Marrakech-Safi",category:"medina",price:180,currency:"EUR",rating:4.9,reviewsCount:340,img:"images/Marrakech/marrakech_11.jpg",badge:"Popular",desc:"Step into the heartbeat of Morocco. Explore bustling souks, hidden riads, Jemaa el-Fnaa square, and the Majorelle Garden.",lat:31.6295,lng:-7.9811,highlights:["Jemaa el-Fnaa Square","Bahia Palace & Saadian Tombs","Majorelle & YSL Museum","Spice Souks Walking Tour"],itinerary:[{day:"Day 1",text:"Arrival & Rooftop Tea overlooking Jemaa el-Fnaa"},{day:"Day 2",text:"Guided Medina & Bahia Palace Architectural Tour"},{day:"Day 3",text:"Jardin Majorelle & Traditional Moroccan Spa/Hammam"}]},{id:"merzouga",title:"Merzouga",region:"Dra\xE2-Tafilalet",category:"desert",price:290,currency:"EUR",rating:5,reviewsCount:420,img:"images/Merzouga/merzouga_1.jpg",badge:"Bucket List",desc:"Experience pure magic among golden dunes. Ride camels at sunset, sleep in a luxury Berber tent, and marvel at the Milky Way.",lat:31.0992,lng:-4.0116,highlights:["Sunset & Sunrise Camel Trek","Luxury Desert Camp with Private Bathroom","Berber Drumming & Campfire","Erg Chebbi Sandboarding"],itinerary:[{day:"Day 1",text:"Drive through High Atlas & Dades Gorge"},{day:"Day 2",text:"Sunset Camel Ride into Erg Chebbi Dunes"},{day:"Day 3",text:"Stargazing & Traditional Gnawa Music"}]},{id:"chefchaouen",title:"Chefchaouen",region:"Tanger-Tetouan-Al Hoceima",category:"mountain",price:150,currency:"EUR",rating:4.8,reviewsCount:290,img:"images/Chfchaouen/chefchaoun.jpg",badge:"Photogenic",desc:"Wander through world-famous cobalt blue alleyways nestled in the Rif Mountains. Unwind in relaxed cafes and artisan shops.",lat:35.1716,lng:-5.2697,highlights:["Photogenic Blue Medina","Spanish Mosque Sunset View","Ras El-Maa Waterfalls","Rif Mountain Trekking"],itinerary:[{day:"Day 1",text:"Arrival in Blue Pearl & Kasbah Exploration"},{day:"Day 2",text:"Hike to Spanish Mosque for Panoramic Views"}]},{id:"essaouira",title:"Essaouira",region:"Marrakech-Safi",category:"coastal",price:160,currency:"EUR",rating:4.9,reviewsCount:215,img:"images/Essaouira/essaouira_1.jpg",badge:"Relaxing",desc:"Breathe in Atlantic coastal ocean breezes, historic sea ramparts, fresh grilled seafood, and bohemian art galleries.",lat:31.5125,lng:-9.77,highlights:["18th-century Skala Ramparts","Fresh Port Seafood Grill","Kitesurfing & Beach Walk","Argan Oil Cooperative"],itinerary:[{day:"Day 1",text:"Ramparts Stroll & Sunset Port Dining"},{day:"Day 2",text:"Argan Forest & Beach Horse Riding"}]},{id:"ouarzazate",title:"Ouarzazate",region:"Dra\xE2-Tafilalet",category:"desert",price:210,currency:"EUR",rating:4.8,reviewsCount:180,img:"images/Ouarzazat/ouarzazat1.jpeg",badge:"UNESCO",desc:"Explore Morocco's Hollywood. Visit ancient earthen Kasbahs, UNESCO World Heritage fortress walls, and desert film studios.",lat:30.9189,lng:-6.8934,highlights:["Ait Benhaddou UNESCO Kasbah","Atlas Cinema Studios","Taourirt Kasbah Palace","Ounila Valley Scenic Drive"],itinerary:[{day:"Day 1",text:"Ait Benhaddou Guided Walk & Movie Set Tour"},{day:"Day 2",text:"Kasbah Taourirt & Oasis Exploration"}]},{id:"fes",title:"Fes",region:"F\xE8s-Mekn\xE8s",category:"medina",price:195,currency:"EUR",rating:4.9,reviewsCount:310,img:"images/Fes/fes_1.jpg",badge:"Heritage",desc:"Journey back in time in the world's largest car-free urban area. Discover Chouara Tanneries, Al-Qarawiyyin University, and intricate zellij tiles.",lat:34.0333,lng:-5,highlights:["Chouara Leather Tanneries","Al-Qarawiyyin Library","Bou Inania Medersa","Ceramic & Pottery Workshops"],itinerary:[{day:"Day 1",text:"Tanneries Tour & Ancient Souk Exploration"},{day:"Day 2",text:"Bab Boujeloud Gate & Pottery Crafting"}]},{id:"casablanca",title:"Casablanca",region:"Casablanca-Settat",category:"coastal",price:140,currency:"EUR",rating:4.7,reviewsCount:160,img:"images/Casablanca/casablanca.png",badge:"Modern Hub",desc:"Morocco's vibrant economic capital featuring the architectural masterpiece Hassan II Mosque perched directly over the Atlantic ocean.",lat:33.5731,lng:-7.5898,highlights:["Hassan II Mosque Ocean View","Corniche Promenade","Habous Quarter Architectural Tour","Rick's Caf\xE9 Experience"],itinerary:[{day:"Day 1",text:"Hassan II Mosque Guided Visit & Corniche Walk"},{day:"Day 2",text:"Habous Craft Market & Culinary Tasting"}]},{id:"zagora",title:"Zagora",region:"Dra\xE2-Tafilalet",category:"desert",price:220,currency:"EUR",rating:4.8,reviewsCount:190,img:"images/Zagora/zagora_hero.png",badge:"Sahara Gateway",desc:"Gateway to the Draa Valley. Palm groves, ancient earthen kasbahs, and authentic desert stargazing.",lat:30.3336,lng:-5.8264,highlights:["Draa Valley Palm Groves","Tamegroute Ancient Library","Sunset Camel Trek","Traditional Berber Music"],itinerary:[{day:"Day 1",text:"Draa Oasis Drive & Sunset Desert Camp"},{day:"Day 2",text:"Tamegroute Underground Kasbah Visit"}]},{id:"agadir",title:"Agadir",region:"Souss-Massa",category:"coastal",price:130,currency:"EUR",rating:4.7,reviewsCount:140,img:"images/Agadir/agadir_hero.png",badge:"Ocean Resort",desc:"Coastal breeze, golden sandy beaches, year-round sunshine, sea promenade, and Atlantic waters.",lat:30.4278,lng:-9.5981,highlights:["Agadir Kasbah Panoramic View","Souk El Had Shopping","Marina Promenade Dining","Taghazout Bay Surfing"],itinerary:[{day:"Day 1",text:"Kasbah Hill View & Beach Promenade Sunset"},{day:"Day 2",text:"Taghazout Coastal Trip & Argan Valley Tour"}]}],TRANSLATIONS={en:{nav_home:"Home",nav_destinations:"Destinations",nav_map:"Interactive Map",nav_about:"About Us",nav_reviews:"Reviews",nav_contact:"Contact",nav_favorites:"Wishlist",nav_book:"Book Now",hero_title:"Morocco Is Not Just A Destination. It's A Feeling.",hero_sub:"Discover hidden kasbahs, silent desert mornings under starry skies, and ancient medinas crafted by local storytellers.",search_placeholder:"Where to? e.g. Sahara, Chefchaouen",search_btn:"Explore Destinations",stats_routes:"Custom Routes",stats_travelers:"Happy Travelers",stats_destinations:"Iconic Destinations",stats_satisfaction:"Satisfaction Rate",why_title:"Why Hidden Morocco?",why_sub:"Handcrafted boutique private journeys tailored to your rhythm.",reviews_hero_title:"Traveler Reviews",reviews_hero_sub:"Authentic reviews shared by travelers exploring Morocco with us."},fr:{nav_home:"Accueil",nav_destinations:"Destinations",nav_map:"Carte Interactive",nav_about:"\xC0 Propos",nav_reviews:"Avis Clients",nav_contact:"Contact",nav_favorites:"Favoris",nav_book:"R\xE9server",hero_title:"Le Maroc N'est Pas Une Destination. C'est Une \xC9motion.",hero_sub:"Circuits priv\xE9s d'exception : kasbahs secr\xE8tes, nuits \xE9toil\xE9es dans le d\xE9sert du Sahara et m\xE9dinas imp\xE9riales avec nos guides locaux passionn\xE9s.",search_placeholder:"O\xF9 souhaitez-vous aller ? ex: Sahara, Chefchaouen",search_btn:"Rechercher",stats_routes:"Itin\xE9raires Sur-Mesure",stats_travelers:"Voyageurs Combl\xE9s",stats_destinations:"Destinations Embl\xE9matiques",stats_satisfaction:"Taux de Satisfaction",why_title:"Pourquoi Voyager Avec Nous ?",why_sub:"Des voyages priv\xE9s sur-mesure d'exception, con\xE7us selon votre propre rythme.",reviews_hero_title:"Avis de nos Voyageurs",reviews_hero_sub:"T\xE9moignages authentiques de voyageurs ayant explor\xE9 le Maroc avec nous."},es:{nav_home:"Inicio",nav_destinations:"Destinos",nav_map:"Mapa Interactivo",nav_about:"Sobre Nosotros",nav_reviews:"Opiniones",nav_contact:"Contacto",nav_favorites:"Deseos",nav_book:"Reservar Ahora",hero_title:"Marruecos No Es Solo Un Destino. Es Una Emoci\xF3n.",hero_sub:"Rutas privadas exclusivas por alcazabas ocultas, ma\xF1anas des\xE9rticas bajo las estrellas y medinas hist\xF3ricas de la mano de gu\xEDas locales.",search_placeholder:"\xBFA d\xF3nde quieres ir? ej: Sahara, Chefchaouen",search_btn:"Buscar Destinos",stats_routes:"Rutas Personalizadas",stats_travelers:"Viajeros Felices",stats_destinations:"Destinos Ic\xF3nicos",stats_satisfaction:"Tasa de Satisfacci\xF3n",why_title:"\xBFPor Qu\xE9 Elegirnos?",why_sub:"Viajes privados exclusivos dise\xF1ados a la medida de tus sue\xF1os y de tu ritmo.",reviews_hero_title:"Opiniones de Viajeros",reviews_hero_sub:"Rese\xF1as aut\xE9nticas de viajeros que exploraron Marruecos con nosotros."},ar:{nav_home:"\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629",nav_destinations:"\u0627\u0644\u0648\u062C\u0647\u0627\u062A",nav_map:"\u0627\u0644\u062E\u0631\u064A\u0637\u0629 \u0627\u0644\u062A\u0641\u0627\u0639\u0644\u064A\u0629",nav_about:"\u0645\u0646 \u0646\u062D\u0646",nav_reviews:"\u0622\u0631\u0627\u0621 \u0627\u0644\u0639\u0645\u0644\u0627\u0621",nav_contact:"\u0627\u062A\u0635\u0644 \u0628\u0646\u0627",nav_favorites:"\u0627\u0644\u0645\u0641\u0636\u0644\u0629",nav_book:"\u0627\u062D\u062C\u0632 \u0627\u0644\u0622\u0646",hero_title:"\u0627\u0644\u0645\u063A\u0631\u0628 \u0644\u064A\u0633 \u0645\u062C\u0631\u062F \u0648\u062C\u0647\u0629.. \u0628\u0644 \u062A\u062C\u0631\u0628\u0629 \u062A\u0639\u0627\u0634",hero_sub:"\u0631\u062D\u0644\u0627\u062A \u062E\u0627\u0635\u0629 \u0631\u0627\u0642\u064A\u0629 \u0639\u0628\u0631 \u0627\u0644\u0642\u0635\u0628\u0627\u062A \u0627\u0644\u062A\u0627\u0631\u064A\u062E\u064A\u0629\u060C \u0631\u0645\u0627\u0644 \u0627\u0644\u0635\u062D\u0631\u0627\u0621 \u0627\u0644\u0643\u0628\u0631\u0649\u060C \u0648\u0627\u0644\u0645\u062F\u0646 \u0627\u0644\u0639\u062A\u064A\u0642\u0629 \u0628\u0635\u062D\u0628\u0629 \u0623\u0641\u0636\u0644 \u0627\u0644\u0645\u0631\u0634\u062F\u064A\u0646 \u0627\u0644\u0645\u062D\u0644\u064A\u064A\u0646.",search_placeholder:"\u0625\u0644\u0649 \u0623\u064A\u0646 \u062A\u0631\u064A\u062F \u0627\u0644\u0630\u0647\u0627\u0628\u061F \u0645\u062B\u0644\u0627\u064B: \u0627\u0644\u0635\u062D\u0631\u0627\u0621\u060C \u0634\u0641\u0634\u0627\u0648\u0646",search_btn:"\u0627\u0633\u062A\u0643\u0634\u0641 \u0627\u0644\u0648\u062C\u0647\u0627\u062A",stats_routes:"\u0645\u0633\u0627\u0631\u0627\u062A \u0645\u062E\u0635\u0635\u0629",stats_travelers:"\u0645\u0633\u0627\u0641\u0631\u0648\u0646 \u0633\u0639\u062F\u0627\u0621",stats_destinations:"\u0648\u062C\u0647\u0627\u062A \u0645\u0645\u064A\u0632\u0629",stats_satisfaction:"\u0646\u0633\u0628\u0629 \u0627\u0644\u0631\u0636\u0627",why_title:"\u0644\u0645\u0627\u0630\u0627 \u062A\u062E\u062A\u0627\u0631\u0646\u0627\u061F",why_sub:"\u0631\u062D\u0644\u0627\u062A \u062E\u0627\u0635\u0629 \u0631\u0627\u0642\u064A\u0629 \u0645\u0635\u0645\u0645\u0629 \u062E\u0635\u064A\u0635\u0627\u064B \u0639\u0644\u0649 \u0645\u0642\u0627\u0633\u0643 \u0648\u0628\u0623\u062F\u0642 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0644\u062A\u0644\u0627\u0626\u0645 \u0631\u063A\u0628\u0627\u062A\u0643.",reviews_hero_title:"\u0622\u0631\u0627\u0621 \u0648\u062A\u0642\u064A\u064A\u0645\u0627\u062A \u0627\u0644\u0645\u0633\u0627\u0641\u0631\u064A\u0646",reviews_hero_sub:"\u062A\u062C\u0627\u0631\u0628 \u0648\u062A\u0648\u0635\u064A\u0627\u062A \u062D\u0642\u064A\u0642\u064A\u0629 \u0645\u0646 \u0645\u0633\u0627\u0641\u0631\u064A\u0646 \u0639\u0627\u0634\u0648\u0627 \u0633\u062D\u0631 \u0627\u0644\u0645\u063A\u0631\u0628 \u0645\u0639\u0646\u0627."}};document.addEventListener("DOMContentLoaded",()=>{initTheme(),initLanguage(),initWishlistBadge(),initBackToTop(),initStickyNav(),initSearchEngine(),initCounters(),document.getElementById("interactiveMap")&&initMapPage(),document.getElementById("homeMapPreview")&&initHomeMapPreview(),document.getElementById("destinationsGrid")&&renderDestinationsGrid(),document.getElementById("favoritesGrid")&&renderFavoritesGrid()});function initTheme(){document.documentElement.setAttribute("data-theme",AppState.theme),document.body&&document.body.setAttribute("data-theme",AppState.theme),updateThemeIcon(),document.querySelectorAll(".theme-toggle").forEach(e=>{e.addEventListener("click",()=>{AppState.theme=AppState.theme==="light"?"dark":"light",localStorage.setItem("hm_theme",AppState.theme),document.documentElement.setAttribute("data-theme",AppState.theme),document.body&&document.body.setAttribute("data-theme",AppState.theme),updateThemeIcon(),showToast(`Switched to ${AppState.theme.toUpperCase()} mode \u2728`);try{const t=AppState.theme==="dark"?"dark":"light";window.chatbot&&typeof window.chatbot.setTheme=="function"?window.chatbot.setTheme(t):window.chatbase&&typeof window.chatbase=="function"&&window.chatbase("setOptions",{theme:t});const a=document.getElementById("chatbase-bubble-window");a&&(a.style.setProperty("background-color",t==="dark"?"#151515":"#FFFFFF","important"),a.style.setProperty("box-shadow","0 0 25px rgba(200, 90, 50, 0.4)","important"),a.style.setProperty("border","1px solid rgba(200, 90, 50, 0.4)","important"));const i=document.getElementById("chatbase-bubble-button");i&&i.style.setProperty("background",t==="dark"?"#1E1E1E":"#FFFFFF","important")}catch{}})})}function updateThemeIcon(){document.querySelectorAll(".theme-toggle").forEach(e=>{e.innerHTML=AppState.theme==="dark"?'<i class="fa-solid fa-sun" style="color: #F59E0B; transform: rotate(360deg); transition: all 0.4s ease;"></i>':'<i class="fa-solid fa-moon" style="transition: all 0.4s ease;"></i>'})}const SUPPORTED_LANGUAGES=[{code:"en",label:"EN"},{code:"fr",label:"FR"},{code:"es",label:"ES"},{code:"ar",label:"AR"},{code:"de",label:"DE"},{code:"it",label:"IT"},{code:"pt",label:"PT"},{code:"ru",label:"RU"},{code:"zh-CN",label:"ZH"},{code:"ja",label:"JA"}];function setGoogleTransCookie(e){const t=!e||e.toLowerCase()==="en",a="expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";document.cookie="googtrans=;"+a;const i=window.location.hostname;if(i&&i!=="localhost"){document.cookie="googtrans=;"+a+" domain="+i+";";const o=i.split(".");if(o.length>=2){const n="."+o.slice(-2).join(".");document.cookie="googtrans=;"+a+" domain="+n+";"}}if(!t){const o="/en/"+e,n="max-age=31536000; path=/;";if(document.cookie="googtrans="+o+"; "+n,i&&i!=="localhost"){document.cookie="googtrans="+o+"; "+n+" domain="+i+";";const r=i.split(".");if(r.length>=2){const d="."+r.slice(-2).join(".");document.cookie="googtrans="+o+"; "+n+" domain="+d+";"}}}}function injectTranslationStyles(){if(document.getElementById("hm-translation-styles"))return;const e=document.createElement("style");e.id="hm-translation-styles",e.textContent=`
    /* 1. Completely Eradicate Google Translate Top Banner / Frame */
    .VIpgJd-ZVi9od-ORHb-OEVmcd,
    .VIpgJd-ZVi9I-ORHb-OEVmcd,
    .VIpgJd-ZVi9od-ORHb-OEVmcd.skiptranslate,
    .VIpgJd-ZVi9I-ORHb-OEVmcd.skiptranslate,
    .goog-te-banner-frame,
    .goog-te-banner-frame.skiptranslate,
    iframe.goog-te-banner-frame,
    iframe.skiptranslate,
    iframe[class*="VIpgJd"],
    iframe[id*=":1.container"],
    iframe[id*=":2.container"],
    iframe[src*="translate.google"],
    #goog-gt-tt,
    #goog-gt-tt *,
    .goog-te-balloon-frame,
    .goog-te-balloon-frame *,
    .goog-tooltip,
    .goog-tooltip *,
    .goog-tooltip:hover,
    .goog-text-highlight,
    .goog-te-gadget-icon,
    .VIpgJd-yAWNEb-hvhGLb-Snmizc,
    .VIpgJd-yAWNEb-r4nke {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      height: 0px !important;
      width: 0px !important;
      max-height: 0px !important;
      border: none !important;
      pointer-events: none !important;
    }

    /* 2. Lock body and html to 0px top and strict LTR layout so nothing moves */
    html, body {
      top: 0px !important;
      position: static !important;
      direction: ltr !important;
    }

    .goog-text-highlight {
      background: none !important;
      box-shadow: none !important;
    }

    #google_translate_element {
      position: absolute !important;
      top: -9999px !important;
      left: -9999px !important;
      width: 1px !important;
      height: 1px !important;
      opacity: 0 !important;
      overflow: hidden !important;
      pointer-events: none !important;
    }

    /* 3. Compact 2-Letter Language Switcher Pill (Fixed in LTR always) */
    .lang-wrapper {
      position: relative !important;
      display: inline-flex !important;
      align-items: center !important;
      flex-shrink: 0 !important;
      direction: ltr !important;
    }

    .lang-wrapper i.lang-icon {
      position: absolute !important;
      left: 10px !important;
      right: auto !important;
      pointer-events: none !important;
      font-size: 0.8rem !important;
      color: var(--hm-text-heading, #0F172A) !important;
      z-index: 2 !important;
      transition: color 0.25s ease !important;
    }

    .lang-wrapper:hover i.lang-icon {
      color: #C85A32 !important;
    }

    .lang-switcher,
    .lang-sw {
      height: 38px !important;
      min-width: 76px !important;
      max-width: 86px !important;
      padding: 0 8px 0 26px !important;
      background: var(--hm-bg-card-hover, rgba(15, 23, 42, 0.04)) !important;
      border: 1.5px solid var(--hm-border, rgba(15, 23, 42, 0.12)) !important;
      color: var(--hm-text-heading, #0F172A) !important;
      border-radius: 99px !important;
      font-size: 0.85rem !important;
      font-weight: 700 !important;
      cursor: pointer !important;
      outline: none !important;
      text-align: center !important;
      letter-spacing: 0.5px !important;
      direction: ltr !important;
      transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
      -webkit-appearance: none !important;
      -moz-appearance: none !important;
      appearance: none !important;
    }

    .lang-switcher:hover,
    .lang-sw:hover,
    .lang-switcher:focus,
    .lang-sw:focus {
      border-color: rgba(200, 90, 50, 0.5) !important;
      color: #C85A32 !important;
      box-shadow: 0 4px 14px rgba(200, 90, 50, 0.15) !important;
      transform: translateY(-1px) !important;
    }

    .lang-switcher option,
    .lang-sw option,
    .mobile-lang-select option {
      background: #ffffff !important;
      color: #0F172A !important;
      padding: 8px 12px !important;
      font-size: 0.9rem !important;
      font-weight: 700 !important;
      text-align: center !important;
      direction: ltr !important;
    }

    [data-theme="dark"] .lang-wrapper i.lang-icon {
      color: #F8FAFC !important;
    }

    [data-theme="dark"] .lang-wrapper:hover i.lang-icon {
      color: #E7A93C !important;
    }

    [data-theme="dark"] .lang-switcher,
    [data-theme="dark"] .lang-sw {
      background: #1E1E1E !important;
      border-color: rgba(255, 255, 255, 0.15) !important;
      color: #F8FAFC !important;
    }

    [data-theme="dark"] .lang-switcher option,
    [data-theme="dark"] .lang-sw option,
    [data-theme="dark"] .mobile-lang-select option {
      background: #1E1E1E !important;
      color: #F8FAFC !important;
    }
  `,document.head.prepend(e)}function startGoogleBannerKiller(){document.querySelectorAll('iframe.goog-te-banner-frame, iframe.skiptranslate, iframe[class*="VIpgJd"], .VIpgJd-ZVi9od-ORHb-OEVmcd, .VIpgJd-ZVi9I-ORHb-OEVmcd, iframe[id*=":1.container"], iframe[id*=":2.container"], iframe[src*="translate.google"], .goog-te-banner-frame').forEach(t=>{t.style.setProperty("display","none","important"),t.style.setProperty("visibility","hidden","important"),t.style.setProperty("height","0px","important"),t.style.setProperty("width","0px","important"),t.style.setProperty("opacity","0","important"),t.style.setProperty("pointer-events","none","important")}),document.body&&document.body.style.top&&document.body.style.top!=="0px"&&document.body.style.setProperty("top","0px","important");const e=()=>{const t=document.getElementById("goog-gt-tt");t&&t.remove(),document.querySelectorAll(".goog-te-balloon-frame, .goog-tooltip").forEach(a=>a.remove())};e(),document.addEventListener("mouseover",e,{passive:!0})}function injectPreconnect(){["https://translate.googleapis.com","https://translate.google.com"].forEach(e=>{if(!document.querySelector('link[href="'+e+'"]')){const t=document.createElement("link");t.rel="preconnect",t.href=e,document.head.appendChild(t)}})}window.googleTranslateElementInit=function(){try{new google.translate.TranslateElement({pageLanguage:"en",includedLanguages:"en,fr,es,ar,de,it,pt,ru,zh-CN,ja",autoDisplay:!1},"google_translate_element")}catch(e){console.warn("Google Translate initialization:",e)}};function ensureGoogleTranslateLoaded(){if(injectPreconnect(),injectTranslationStyles(),startGoogleBannerKiller(),!document.getElementById("google_translate_element")){const e=document.createElement("div");e.id="google_translate_element",document.body.appendChild(e)}if(!document.querySelector('script[src*="translate.google.com"]')&&!document.querySelector('script[src*="translate_a/element.js"]')){const e=document.createElement("script");e.type="text/javascript",e.src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit",document.head.appendChild(e)}}function populateLanguageSelects(){const e=SUPPORTED_LANGUAGES.map(t=>'<option value="'+t.code+'" class="notranslate" translate="no">'+t.label+"</option>").join("");document.querySelectorAll("#langSwitcher, .lang-switcher, .mobile-lang-select").forEach(t=>{t.classList.add("notranslate"),t.setAttribute("translate","no"),t.parentElement&&(t.parentElement.classList.add("notranslate"),t.parentElement.setAttribute("translate","no")),t.innerHTML=e,t.value=AppState.lang})}function handleLangChange(e){setLanguage(e.target.value)}function initLanguage(){let e="en";const t=document.cookie.match(/(?:^|;\s*)googtrans=\/en\/([a-zA-Z-]+)/);if(t&&t[1])e=t[1];else{const a=localStorage.getItem("hm_lang");a&&(e=a)}if(AppState.lang=e,document.documentElement.setAttribute("dir","ltr"),document.documentElement.setAttribute("lang",e),populateLanguageSelects(),document.querySelectorAll("#langSwitcher, .lang-switcher, .mobile-lang-select").forEach(a=>{a.removeEventListener("change",handleLangChange),a.addEventListener("change",handleLangChange)}),e!=="en"||document.cookie&&document.cookie.includes("googtrans")?ensureGoogleTranslateLoaded():document.querySelectorAll("#langSwitcher, .lang-switcher, .mobile-lang-select").forEach(a=>{a.addEventListener("focus",ensureGoogleTranslateLoaded,{once:!0,passive:!0}),a.addEventListener("pointerdown",ensureGoogleTranslateLoaded,{once:!0,passive:!0}),a.addEventListener("touchstart",ensureGoogleTranslateLoaded,{once:!0,passive:!0})}),applyTranslations(),e!=="en"&&!document.cookie.includes("/en/"+e)){setGoogleTransCookie(e);let a=window.location.pathname;!a.endsWith(".html")&&a!=="/"&&!a.endsWith("/")&&(a=a+".html"),window.location.href=window.location.origin+a+window.location.search+window.location.hash}}function setLanguage(e){if(!e)return;const t=AppState.lang||localStorage.getItem("hm_lang")||"en";AppState.lang=e,localStorage.setItem("hm_lang",e),sessionStorage.setItem("hm_lang",e),document.querySelectorAll("#langSwitcher, .lang-switcher, .mobile-lang-select").forEach(r=>{r.value=e}),setGoogleTransCookie(e),document.documentElement.setAttribute("dir","ltr"),document.documentElement.setAttribute("lang",e),applyTranslations(),showToast("Language set to "+e.toUpperCase());const a=document.getElementById("navLinks")||document.querySelector(".hn-links"),i=document.querySelector(".hamburger");a&&setTimeout(()=>{a.classList.remove("open","active","hn-links-open"),i&&i.classList.remove("is-active")},250);let o=!1;const n=document.querySelector(".goog-te-combo");n&&(n.value=e,n.dispatchEvent(new Event("change")),o=!0),!o&&e!==t&&setTimeout(()=>{let r=window.location.pathname;!r.endsWith(".html")&&r!=="/"&&!r.endsWith("/")&&(r=r+".html"),window.location.href=window.location.origin+r+window.location.search+window.location.hash},150)}function applyTranslations(){const e=TRANSLATIONS[AppState.lang]||TRANSLATIONS.en;e&&(document.querySelectorAll("h1, h2, .page-hero h1").forEach(t=>{(t.textContent.includes("Voices of Our Travelers")||t.textContent.includes("Voix de nos")||t.textContent.includes("\u0623\u0635\u0648\u0627\u062A \u0645\u0633\u0627\u0641\u0631\u064A\u0646\u0627"))&&(t.textContent=e.reviews_hero_title||"Traveler Reviews")}),document.querySelectorAll("[data-i18n]").forEach(t=>{const a=t.getAttribute("data-i18n");e[a]&&(t.tagName==="INPUT"&&t.type==="text"?t.placeholder=e[a]:t.textContent=e[a])}))}function isFavorite(e){return AppState.favorites.includes(e)}function toggleFavorite(e,t){t&&t.stopPropagation();const a=AppState.favorites.indexOf(e);a>-1?(AppState.favorites.splice(a,1),showToast("Removed from Wishlist")):(AppState.favorites.push(e),showToast("Added to Wishlist! \u2728")),localStorage.setItem("hm_favorites",JSON.stringify(AppState.favorites)),initWishlistBadge(),document.querySelectorAll(`.fav-btn[data-id="${e}"]`).forEach(i=>{i.classList.toggle("is-active",isFavorite(e)),i.innerHTML=isFavorite(e)?'<i class="fa-solid fa-heart"></i>':'<i class="fa-regular fa-heart"></i>'}),document.getElementById("favoritesGrid")&&renderFavoritesGrid()}function initWishlistBadge(){const e=AppState.favorites.length;document.querySelectorAll(".fav-count-badge").forEach(t=>{t.textContent=e,t.style.display=e>0?"inline-flex":"none"})}function initBackToTop(){let e=document.getElementById("backToTop");e||(e=document.createElement("button"),e.id="backToTop",e.setAttribute("aria-label","Back to Top"),e.innerHTML='<i class="fa-solid fa-arrow-up"></i>',document.body.appendChild(e));const t=()=>{window.scrollY>350?e.classList.add("is-visible"):e.classList.remove("is-visible")};window.addEventListener("scroll",t,{passive:!0}),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}function initStickyNav(){const e=document.getElementById("siteNav");if(!e)return;const t=()=>{window.scrollY>40?e.classList.add("glass-nav"):e.classList.remove("glass-nav")};window.addEventListener("scroll",t,{passive:!0}),t()}window.toggleMobileMenu=function(e){e&&e.stopPropagation&&e.stopPropagation();const t=document.querySelectorAll(".hn-links, .nav-links, #premNavLinks, #navLinks"),a=document.querySelectorAll(".hamburger, .hburg"),i=document.querySelectorAll(".drawer-backdrop");let o=!1;t.forEach(n=>{n.classList.toggle("hn-links-open"),n.classList.toggle("open"),n.classList.toggle("active"),(n.classList.contains("open")||n.classList.contains("hn-links-open"))&&(o=!0)}),a.forEach(n=>{o?n.classList.add("is-active"):n.classList.remove("is-active")}),i.forEach(n=>{o?n.classList.add("drawer-backdrop-open"):n.classList.remove("drawer-backdrop-open")})},document.addEventListener("click",e=>{const t=e.target.closest("a[href]"),a=e.target.closest(".mobile-menu-close"),i=e.target.closest(".drawer-backdrop"),o=e.target.closest(".hn-links, .nav-links, #premNavLinks, #navLinks, .hamburger, .hburg");t&&!a||(a||i||!o)&&(document.querySelectorAll(".hn-links, .nav-links, #premNavLinks, #navLinks").forEach(n=>{n.classList.remove("hn-links-open","open","active")}),document.querySelectorAll(".hamburger, .hburg").forEach(n=>{n.classList.remove("is-active")}),document.querySelectorAll(".drawer-backdrop").forEach(n=>{n.classList.remove("drawer-backdrop-open")}))});function initSearchEngine(){const e=document.getElementById("heroSearchInput");e&&e.addEventListener("input",t=>{const a=t.target.value.toLowerCase().trim();if(a.length===0){renderDestinationsGrid();return}const i=DESTINATIONS_DB.filter(o=>o.title.toLowerCase().includes(a)||o.desc.toLowerCase().includes(a)||o.region.toLowerCase().includes(a));renderDestinationsGrid(i)})}function initCounters(){const e=document.querySelectorAll(".stat-num, .stat-number");if(e.length===0)return;const t=new IntersectionObserver(a=>{a.forEach(i=>{if(i.isIntersecting){const o=i.target,n=parseInt(o.getAttribute("data-target")||"0",10);let r=0;const d=Math.abs(Math.floor(1800/n)),c=setInterval(()=>{r+=Math.ceil(n/40),r>=n?(o.textContent=n,clearInterval(c)):o.textContent=r},d);t.unobserve(o)}})},{threshold:.4});e.forEach(a=>t.observe(a))}function createCardHTML(e){const t=isFavorite(e.id);return`
    <div class="card glass-panel hover-lift">
      <div class="card-img-wrapper">
        <img src="${e.img}" alt="${e.title}" loading="lazy">
        <span class="badge badge-gold card-badge">\u2726 ${e.badge}</span>
        <button class="fav-btn card-fav-btn ${t?"is-active":""}" data-id="${e.id}" onclick="toggleFavorite('${e.id}', event)" aria-label="Add to Wishlist">
          <i class="fa-${t?"solid":"regular"} fa-heart"></i>
        </button>
      </div>

      <div class="card-content">
        <h3>${e.title}</h3>
        <div class="card-meta-row">
          <span class="card-region"><i class="fa-solid fa-location-dot"></i> ${e.region}</span>
          <div class="card-rating"><i class="fa-solid fa-star"></i> ${e.rating} (${e.reviewsCount||100})</div>
        </div>

        <p>${e.desc}</p>

        <div class="card-footer-row">
          <div>
            <span class="card-price-label">Pricing</span>
            <div class="card-price-val" style="font-size: 0.95rem; font-weight: 700;">Price on Request</div>
          </div>
          <div class="card-btns">
            <a href="destinations.html#${e.id}" class="btn-primary">Explore <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  `}function renderDestinationsGrid(e=DESTINATIONS_DB){const t=document.getElementById("destinationsGrid");t&&(t.innerHTML=e.map(createCardHTML).join(""))}function renderFavoritesGrid(){const e=document.getElementById("favoritesGrid");if(!e)return;const t=DESTINATIONS_DB.filter(a=>isFavorite(a.id));t.length===0?e.innerHTML=`
      <div style="grid-column: 1 / -1; text-align: center; padding: 80px 20px;">
        <i class="fa-regular fa-heart" style="font-size: 3.5rem; color: var(--hm-text-muted); margin-bottom: 20px;"></i>
        <h3 style="font-family: var(--hm-font-serif); font-size: 1.8rem; margin-bottom: 12px;">Your Wishlist is Empty</h3>
        <p style="color: var(--hm-text-muted); margin-bottom: 28px;">Explore our handcrafted Moroccan expeditions and tap the heart icon to save your dream journeys.</p>
        <a href="destinations.html" class="btn-primary">Explore Destinations <i class="fa-solid fa-compass"></i></a>
      </div>
    `:e.innerHTML=t.map(createCardHTML).join("")}function showToast(e){let t=document.getElementById("toastContainer");t||(t=document.createElement("div"),t.id="toastContainer",t.style.cssText=`
      position: fixed; bottom: 30px; right: 30px; z-index: 999999;
      display: flex; flex-direction: column; gap: 10px; pointer-events: none;
    `,document.body.appendChild(t));const a=document.createElement("div");a.style.cssText=`
    padding: 14px 22px; border-radius: 12px; font-weight: 600;
    font-size: 0.9rem; color: #0F172A; background: #FFFFFF; box-shadow: 0 12px 30px rgba(15,23,42,0.12);
    border-left: 4px solid #C85A32; pointer-events: auto; transition: all 0.35s ease;
    transform: translateY(20px); opacity: 0; display: flex; align-items: center; gap: 10px;
    border: 1px solid rgba(15,23,42,0.08);
  `,a.innerHTML=`<i class="fa-solid fa-circle-check" style="color:#C85A32;"></i> <span>${e}</span>`,t.appendChild(a),requestAnimationFrame(()=>{a.style.transform="translateY(0)",a.style.opacity="1"}),setTimeout(()=>{a.style.opacity="0",a.style.transform="translateY(10px)",setTimeout(()=>a.remove(),350)},3200)}window.openQuickBooking=function(e="marrakech"){const t=findDestinationId(e)||"marrakech";window.openCustomTourModal(t)},window.closeQuickBooking=function(){const e=document.getElementById("globalQuickBookModal");e&&(e.style.opacity="0",e.style.pointerEvents="none",setTimeout(()=>{e.style.display="none"},300)),lockBodyScroll(!1)},window.changeTravelers=function(e){const t=document.getElementById("qb-travelers");if(!t)return;let a=parseInt(t.value,10)+e;a<1&&(a=1),a>20&&(a=20),t.value=a,window.updateQuickBookPrice()},window.updateQuickBookPrice=function(){const e=document.getElementById("qb-dest")?.value||"marrakech",t=parseInt(document.getElementById("qb-travelers")?.value||"2",10),a=DESTINATIONS_DB.find(o=>o.id===e)||DESTINATIONS_DB[0],i=document.getElementById("qb-total-price");i&&a&&(i.textContent="Price on Request")},window.handleQuickBookSubmit=function(e){e&&e.preventDefault&&e.preventDefault();const t=document.getElementById("qb-name")?.value||"Valued Guest",a=document.getElementById("qb-dest")?.value||"marrakech",i=DESTINATIONS_DB.find(o=>o.id===a)||DESTINATIONS_DB[0];window.closeQuickBooking(),showToast(`Thank you ${t}! Your booking request for ${i.title} has been submitted.`)},document.addEventListener("click",function(e){const t=e.target.closest('.book-btn-nav, .hn-nav-book, [data-i18n="nav_book"], a[href="booking.html"], a[href="booking"]'),a=window.location.pathname.endsWith("booking.html")||window.location.pathname.endsWith("/booking")||window.location.pathname.endsWith("booking");t&&!a&&(e.preventDefault(),window.openQuickBooking("marrakech"))}),document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("heroSearchInput"),t=document.querySelector(".hero-search-btn");if(e&&t){const n=r=>{r.preventDefault();const d=e.value.trim(),c=window.location.protocol==="http:"||window.location.protocol==="https:"?"destinations":"destinations.html";window.location.href=d?`${c}?search=${encodeURIComponent(d)}`:c};t.addEventListener("click",n),e.addEventListener("keypress",r=>{r.key==="Enter"&&n(r)})}const a=new URLSearchParams(window.location.search),i=a.get("search");if(i){const n=document.getElementById("destSearchInput");n&&(n.value=i,typeof filterDestinations=="function"&&filterDestinations())}const o=a.get("dest")||a.get("destination")||a.get("city");if(o&&typeof window.openCustomTourModal=="function"){const n=findDestinationId(o);n&&setTimeout(()=>{window.openCustomTourModal(n)},300)}});function initMapPage(){if(!document.getElementById("interactiveMap")||typeof L>"u")return;AppState.mapMarkers=[],AppState.mapInstance&&(AppState.mapInstance.remove(),AppState.mapInstance=null),AppState.mapInstance=L.map("interactiveMap",{attributionControl:!1,zoomControl:!1,scrollWheelZoom:!1,minZoom:2,maxZoom:18,fadeAnimation:!0,zoomAnimation:!0,zoomAnimationThreshold:18,wheelPxPerZoomLevel:140,wheelDebounceTime:50,worldCopyJump:!1}).setView([31.7917,-7.0926],6),AppState.mapInstance.attributionControl&&AppState.mapInstance.attributionControl.remove(),setTimeout(()=>{AppState.mapInstance.invalidateSize()},150),window.addEventListener("resize",()=>{AppState.mapInstance&&AppState.mapInstance.invalidateSize()}),L.control.zoom({position:"topleft"}).addTo(AppState.mapInstance),["https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/5/12/15","https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/5/13/15","https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/6/25/30","https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/6/26/30","https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/6/25/31","https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/6/26/31"].forEach(i=>{const o=new Image;o.src=i}),L.tileLayer("https://{s}.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{subdomains:["server","services"],attribution:"",minZoom:2,maxZoom:18,maxNativeZoom:6,zIndex:1,keepBuffer:3,updateWhenZooming:!0,updateWhenIdle:!1,crossOrigin:!0}).addTo(AppState.mapInstance),L.tileLayer("https://{s}.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{subdomains:["server","services"],attribution:"",minZoom:2,maxZoom:18,maxNativeZoom:18,zIndex:2,keepBuffer:4,updateWhenZooming:!0,updateWhenIdle:!1,updateInterval:60,crossOrigin:!0}).addTo(AppState.mapInstance);const e=document.getElementById("interactiveMap");e&&(e.addEventListener("mousedown",()=>{AppState.mapInstance.scrollWheelZoom.enable()}),e.addEventListener("mouseleave",()=>{AppState.mapInstance.scrollWheelZoom.disable()}));const t=(i=!1)=>L.divIcon({className:"custom-map-pin-icon",html:`<div class="map-pin-marker ${i?"is-active":""}">
      <div class="pin-inner"></div>
    </div>`,iconSize:[32,40],iconAnchor:[16,40],popupAnchor:[0,-40]});DESTINATIONS_DB.forEach(i=>{const o=L.marker([i.lat,i.lng],{icon:t(!1)}).addTo(AppState.mapInstance);o.destData=i,o.on("click",n=>{L.DomEvent.stopPropagation(n),AppState.mapInstance.closePopup(),window.showMapDestCard(i)}),AppState.mapMarkers.push(o)});const a=[[35.1716,-5.2697],[34.0333,-5],[33.5731,-7.5898],[31.6295,-7.9811],[31.5125,-9.77],[30.4278,-9.5981],[30.9189,-6.8934],[30.3336,-5.8264],[31.0992,-4.0116]];AppState.routePolyline=L.polyline(a,{color:"#D4AF37",weight:2,opacity:.85,dashArray:"8, 10",lineJoin:"round"}).addTo(AppState.mapInstance),AppState.mapInstance.on("click",()=>{window.closeMapDestCard(),AppState.mapInstance.scrollWheelZoom.enable()})}window.filterMapCategory=function(e,t){if(!AppState.mapInstance||!AppState.mapMarkers)return;document.querySelectorAll(".map-filter-btn").forEach(i=>i.classList.remove("active")),t&&t.classList.add("active");const a=[];if(AppState.mapMarkers.forEach(i=>{const o=i.destData;e==="all"||o.category===e?(AppState.mapInstance.hasLayer(i)||i.addTo(AppState.mapInstance),a.push(i)):AppState.mapInstance.hasLayer(i)&&AppState.mapInstance.removeLayer(i)}),e!=="all"&&a.length>0){const i=L.featureGroup(a);AppState.mapInstance.fitBounds(i.getBounds().pad(.25))}else AppState.mapInstance.setView([31.7917,-7.0926],6)},window.searchMapQuery=function(e){if(!AppState.mapInstance||!AppState.mapMarkers)return;const t=e.toLowerCase().trim();AppState.mapMarkers.forEach(a=>{const i=a.destData;!t||i.title.toLowerCase().includes(t)||i.region.toLowerCase().includes(t)||i.id.toLowerCase().includes(t)?AppState.mapInstance.hasLayer(a)||a.addTo(AppState.mapInstance):AppState.mapInstance.hasLayer(a)&&AppState.mapInstance.removeLayer(a)})},window.showMapDestCard=function(e){const t=document.getElementById("mapDetailPanel");if(!t)return;const a=window.innerWidth<=900;AppState.mapInstance&&AppState.mapInstance.flyTo([e.lat,e.lng],a?6.5:7,{duration:1.2}),t.innerHTML=`
    <div class="map-side-card">
      <button class="map-card-close" onclick="window.closeMapDestCard()">&times;</button>
      <div class="map-side-img">
        <img src="${e.img}" alt="${e.title}">
        <span class="map-card-badge">${e.badge||"Featured"}</span>
      </div>
      <div class="map-side-content">
        <h3>${e.title}</h3>
        <div class="map-card-meta">
          <span class="map-card-region"><i class="fa-solid fa-location-dot"></i> ${e.region}</span>
          <span class="map-card-rating"><i class="fa-solid fa-star"></i> ${e.rating} (${e.reviewsCount||100}+ reviews)</span>
        </div>
        <p>${e.desc}</p>
        
        <div class="map-card-highlights">
          <h5><i class="fa-solid fa-sparkles"></i> Highlights</h5>
          <ul>
            ${(e.highlights||[]).slice(0,3).map(o=>`<li><i class="fa-solid fa-check"></i> ${o}</li>`).join("")}
          </ul>
        </div>

        <div class="map-card-footer">
          <div class="map-card-price-box">
            <span class="price-lbl">Pricing</span>
            <span class="price-val" style="font-size: 0.98rem; font-weight: 700; color: #E7A93C;">Price on Request</span>
          </div>
          <a href="destinations.html#${e.id}" class="btn-primary map-card-action-btn">
            View Experience &nbsp;<i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  `,t.classList.add("is-open");const i=document.getElementById("mapSheetOverlay");i&&a&&i.classList.add("is-visible")},window.closeMapDestCard=function(){const e=document.getElementById("mapDetailPanel");e&&e.classList.remove("is-open");const t=document.getElementById("mapSheetOverlay");t&&t.classList.remove("is-visible"),AppState.mapInstance&&AppState.mapInstance.flyTo([31.7917,-7.0926],6,{duration:1.2})};function initHomeMapPreview(){const e=document.getElementById("homeMapPreview");if(!e)return;function t(){if(e._leaflet_id)return;function a(){if(typeof L>"u"||e._leaflet_id)return;const i=L.map("homeMapPreview",{attributionControl:!1,zoomControl:!1,dragging:!0,scrollWheelZoom:!1,tap:!0}).setView([31.7917,-7.0926],6);i.attributionControl&&i.attributionControl.remove(),i.on("click",function(){i.scrollWheelZoom.enable()}),i.on("mouseout",function(){i.scrollWheelZoom.disable()}),L.control.zoom({position:"topright"}).addTo(i),L.tileLayer("https://{s}.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{subdomains:["server","services"],attribution:"",minZoom:2,maxZoom:18,maxNativeZoom:18,keepBuffer:3,updateWhenZooming:!0,updateWhenIdle:!1,crossOrigin:!0}).addTo(i);const o={marrakech:"Vibrant historic medina, souks, secret riads & lively Jemaa el-Fnaa.",merzouga:"Golden Erg Chebbi Sahara dunes, starlit camps & camel treks.",chefchaouen:"Magical Blue Pearl nestled in the scenic Rif mountain peaks.",essaouira:"Atlantic coastal ramparts, artisan woodwork & fresh ocean breeze.",fes:"Ancient UNESCO cultural capital with labyrinthine medieval alleyways.",ouarzazate:"Gateway to the Sahara with clay Kasbahs & cinematic desert vistas.",casablanca:"Cosmopolitan city with the majestic oceanfront Hassan II Mosque.",agadir:"Sunny Atlantic beaches, coastal promenades & relaxing retreats.",zagora:"Draa Valley palm groves, ancient caravan trails & desert oases.",tangier:"Where the Mediterranean meets the Atlantic, rich arts & seaside kasbah.",rabat:"Imperial capital of royal heritage, tranquil ocean kasbahs & gardens."},n=L.divIcon({className:"home-map-pin-wrap",html:'<div class="home-map-pin"><div class="pin-dot"></div></div>',iconSize:[26,26],iconAnchor:[13,26],popupAnchor:[0,-26]});DESTINATIONS_DB.forEach(function(d){const c=L.marker([d.lat,d.lng],{icon:n}).addTo(i),h=o[d.id]||(d.desc?d.desc.split(".")[0]+".":"Discover Morocco's extraordinary beauty."),f='<div class="hmp-card"><div class="hmp-top"><img src="'+(d.img||"images/hero-mobile.jpg")+'" alt="'+d.title+'" class="hmp-thumb" loading="lazy"><div class="hmp-head"><span class="hmp-region"><i class="fa-solid fa-location-dot"></i> '+(d.region||"Morocco")+'</span><h4 class="hmp-name">'+d.title+'</h4></div></div><p class="hmp-desc">'+h+`</p><div class="hmp-actions"><button type="button" class="hmp-btn-cta" onclick="window.openCustomTourModal('`+d.id+`')"><i class="fa-solid fa-wand-magic-sparkles"></i> Customize</button><a href="destinations#`+d.id+'" class="hmp-link-explore">Explore <i class="fa-solid fa-arrow-right"></i></a></div></div>';c.bindPopup(f,{className:"hm-home-popup",closeButton:!1,autoClose:!1,closeOnClick:!1,offset:[0,-18],minWidth:230,maxWidth:250});let y=null;c.on("mouseover",function(){clearTimeout(y),i.eachLayer(function(b){b instanceof L.Marker&&b!==c&&b.getPopup()&&b.isPopupOpen()&&b.closePopup()}),c.openPopup(),setTimeout(function(){const b=document.querySelector(".hm-home-popup");b&&(b.onmouseenter=function(){clearTimeout(y)},b.onmouseleave=function(){y=setTimeout(function(){c.closePopup()},250)})},30)}),c.on("mouseout",function(){y=setTimeout(function(){c.closePopup()},280)}),c.on("click",function(){clearTimeout(y),c.openPopup(),i.flyTo([d.lat,d.lng],7,{duration:.8})})});const r=[[35.1716,-5.2697],[34.0333,-5],[33.5731,-7.5898],[31.6295,-7.9811],[31.5125,-9.77],[30.4278,-9.5981],[30.9189,-6.8934],[30.3336,-5.8264],[31.0992,-4.0116]];L.polyline(r,{color:"#D4AF37",weight:2,opacity:.85,dashArray:"8, 10",lineJoin:"round"}).addTo(i)}if(typeof L>"u"){const i=document.createElement("script");i.src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",i.defer=!0,i.onload=a,document.head.appendChild(i)}else a()}"IntersectionObserver"in window?new IntersectionObserver(function(a,i){a[0].isIntersecting&&(t(),i.disconnect())},{rootMargin:"300px 0px"}).observe(e):t()}function lockBodyScroll(e){document.body.style.overflow=e?"hidden":""}window.openModal=function(e,t=!1){document.querySelectorAll(".modal").forEach(r=>{r.id&&r.id.startsWith("modal-")&&r.id!=="modal-"+e&&(r.style.display="none")});const a=document.getElementById("modal-"+e);if(!a)return;a.parentElement!==document.body&&document.body.appendChild(a),a.style.display="flex",a.scrollTop=0;const i=a.querySelector(".modal-content");if(i&&(i.scrollTop=0),lockBodyScroll(!0),a.setAttribute("tabindex","-1"),a.focus(),t){const r=document.getElementById("booking-"+e);r&&setTimeout(()=>r.scrollIntoView({behavior:"smooth"}),300)}const o="#modal-"+e+" .mySwiper-"+e,n=document.querySelector(o);n&&typeof Swiper<"u"&&(n.swiper?n.swiper.update():new Swiper(o,{loop:!0,observer:!0,observeParents:!0,autoplay:{delay:5e3,disableOnInteraction:!1},effect:"fade",fadeEffect:{crossFade:!0},navigation:{nextEl:"#modal-"+e+" .swiper-button-next",prevEl:"#modal-"+e+" .swiper-button-prev"},pagination:{el:"#modal-"+e+" .swiper-pagination",clickable:!0}}))},window.closeModal=function(e){const t=document.getElementById("modal-"+e);t&&(t.style.display="none",lockBodyScroll(!1))};const DEST_IMAGES={Marrakech:"images/Marrakech/Marrakech.jpg",Ouarzazate:"images/Ouarzazat/ouarzazat1.jpeg",Merzouga:"images/Merzouga/merzouga_1.jpg",Chefchaouen:"images/Chfchaouen/chefchaoun.jpg",Essaouira:"images/Essaouira/essaouira_1.jpg",Fes:"images/Fes/Fes.jpg",Casablanca:"images/Casablanca/casablanca.png",Agadir:"images/Agadir/agadir_hero.png",Zagora:"images/Zagora/zagora_hero.png"};window.openDestBooking=function(e){const t=findDestinationId(e)||"marrakech";window.openCustomTourModal(t)},window.closeDestBooking=function(){const e=document.getElementById("destBookingModal");e&&(e.style.display="none"),lockBodyScroll(!1)},window.sendDestBookingWhatsApp=function(){const e="212660082066",t=document.getElementById("destBookingTitle")?.textContent||"Morocco Tour",a=document.getElementById("db-name")?.value||"",i=document.getElementById("db-date")?.value||"",o=document.getElementById("db-adults")?.value||"1",n=document.getElementById("db-children")?.value||"0",r=document.getElementById("db-message")?.value||"";if(!a||!i){alert("Please fill in your name and preferred date.");return}const d=`Hello \u{1F44B}
I am interested in booking:
\u2705 Destination: ${t}
\u{1F464} Name: ${a}
\u{1F4C5} Date: ${i}
\u{1F465} Adults: ${o}
\u{1F9D2} Children: ${n}
\u{1F4DD} Message: ${r||"N/A"}

Thank you!`;window.open(`https://wa.me/${e}?text=${encodeURIComponent(d)}`,"_blank")},window.sendWhatsApp=function(){const e="212660082066",t=document.getElementById("fname")?.value||document.getElementById("c-name")?.value||"",a=document.getElementById("femail")?.value||document.getElementById("c-email")?.value||"",i=document.getElementById("fphone")?.value||"",o=document.getElementById("fdate")?.value||"",n=document.getElementById("fadults")?.value||"1",r=document.getElementById("fchildren")?.value||"0",d=document.getElementById("fmessage")?.value||document.getElementById("c-message")?.value||"",c=document.querySelectorAll('input[name="destinations"]:checked'),h=Array.from(c).map(f=>f.value).join(", ");if(!t){alert("Please enter your name.");return}const v=`Hello \u{1F44B} Discover Hidden Morocco!
I would like to request a Tour Booking:

\u{1F464} Name: ${t}
\u{1F4E7} Email: ${a}
\u{1F4DE} Phone: ${i||"N/A"}
\u{1F4C5} Travel Date: ${o||"N/A"}
\u{1F465} Adults: ${n}
\u{1F9D2} Children: ${r}
\u{1F4CD} Destinations: ${h||"Not specified"}
\u{1F4DD} Message: ${d||"N/A"}

Thank you!`;window.open(`https://wa.me/${e}?text=${encodeURIComponent(v)}`,"_blank")};const EXPERIENCES={ourika:{title:"Ourika Valley (Setti Fatma)",img:"images/Marrakech/ourika_1.png",desc:"Escape the city to the lush Ourika Valley, situated in the foothills of the High Atlas Mountains. Enjoy refreshing waterfalls, traditional Berber villages, and aromatic gardens. It's the perfect day trip for nature lovers seeking tranquility and a taste of authentic mountain life.",duration:"1 day",timing:"Departure 08:30 \u2022 Return ~18:00",price:"Price on Request",schedule:["08:30 \u2013 Pick up in Marrakech","10:00 \u2013 Scenic drive","11:00 \u2013 Setti Fatma & waterfalls","18:00 \u2013 Return"],activities:["Berber villages","Walk to waterfalls","Panoramic photos"]},ouzoud:{title:"Ouzoud Waterfalls",img:"images/Ouzoud/ouzoud-falls.jpg",desc:"Discover the breathtaking Ouzoud Waterfalls, cascading over 100 meters down rugged cliffs. Enjoy a scenic hike through olive groves, spot wild Barbary macaques, and take a refreshing boat ride near the falls. This natural wonder is an unforgettable escape into Morocco's dramatic landscapes.",duration:"1 day",timing:"Departure 08:00 \u2022 Return ~19:00",price:"Price on Request",schedule:["08:00 \u2013 Departure","11:00 \u2013 Walk","15:00 \u2013 Boat ride","19:00 \u2013 Return"],activities:["Easy hike","Macaque monkeys observation","Boat ride"]},agafay:{title:"Agafay Desert (Quad + Camel + Dinner)",img:"images/Marrakech/agafay.jpg",desc:"Experience the rugged beauty of the Agafay Desert, located just outside Marrakech. Characterized by its rocky dunes and vast barren landscapes, it offers thrilling quad biking, camel rides, and luxury desert camping. Enjoy a magical dinner under the stars with spectacular views of the Atlas Mountains.",duration:"\u2248 6 hours",timing:"Departure 15:30 \u2022 Return ~21:30",price:"Price on Request",schedule:["15:30 \u2013 Pick up","17:30 \u2013 Camel ride","18:15 \u2013 Quad biking","20:00 \u2013 Dinner + show"],activities:["Camel ride","Quad biking","Sunset","Berber dinner"]},imlil:{title:"Imlil & Atlas Mountains",img:"images/Marrakech/imlil_1.jpg",desc:"Imlil serves as the primary base camp for trekkers aiming to conquer Mount Toubkal. Surrounded by stunning alpine scenery and terraced walnut groves, this peaceful Berber village offers an immersive cultural experience and breathtaking panoramic views of the Atlas peaks.",duration:"1 day",timing:"Departure 08:00 \u2022 Return ~18:00",price:"Price on Request",schedule:["08:00 \u2013 Departure","10:00 \u2013 Arrival in Imlil","11:00 \u2013 Guided village hike","18:00 \u2013 Return"],activities:["Guided Hiking","Amazigh villages","Atlas Panoramas"]},takerkoust:{title:"Lalla Takerkoust Lake",img:"images/Marrakech/lac-lala-takerkoust.webp",desc:"Relaxing outing: lake, nature and outdoor activities depending on the package.",duration:"Half-day",timing:"Morning or afternoon departure",price:"Price on Request",schedule:["Pick-up","Scenic drive to Lake","Free time & quad","Tea break"],activities:["Walk by the lake","Relaxation","Outdoor Activities"]},ballon:{title:"Sunrise Hot Air Balloon",img:"images/Marrakech/montgolfiere.webp",desc:"Experience the magic of Marrakech from the sky with a sunrise hot air balloon flight. Float gently over the Atlas Mountains and the surrounding desert plains as the morning light illuminates the landscape. Conclude your aerial adventure with a traditional Berber breakfast in a local village.",duration:"\u2248 4\u20135 hours",timing:"Departure ~2h before sunrise",price:"Price on Request",schedule:["Pick-up","Balloon preparation","Flight over Atlas","Berber breakfast"],activities:["Sunrise Flight","Atlas Views","Berber Breakfast"]}};window.openExp=function(e){const t=EXPERIENCES[e];if(!t)return;let a=document.getElementById("destModal");a?a.parentElement!==document.body&&document.body.appendChild(a):(a=document.createElement("div"),a.id="destModal",a.style.cssText=`
      position: fixed; inset: 0; z-index: 9999999; display: flex; align-items: center; justify-content: center;
      padding: 20px; background: rgba(17, 17, 30, 0.85); backdrop-filter: blur(12px); opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
    `,document.body.appendChild(a)),a.innerHTML=`
    <div class="glass-panel exp-inner-content" style="width: min(850px, 95vw); max-height: 90vh; border-radius: var(--hm-radius-lg); overflow-y: auto; position: relative; background: #FFFFFF; margin: auto;">
      <button onclick="closeDestinationModal()" style="position: absolute; top: 20px; right: 20px; z-index: 10; width: 40px; height: 40px; border-radius: 50%; border: none; background: rgba(0,0,0,0.5); color: #fff; cursor: pointer; font-size: 1.2rem;">
        <i class="fa-solid fa-xmark"></i>
      </button>

      <div style="position: relative; height: 320px;">
        <img src="${t.img}" alt="${t.title}" style="width: 100%; height: 100%; object-fit: cover;">
        <div style="position: absolute; inset: 0; background: linear-gradient(180deg, transparent 40%, rgba(26,26,46,0.85) 100%);"></div>
        <div style="position: absolute; bottom: 24px; left: 30px; right: 30px; color: #fff;">
          <span class="badge badge-terracotta" style="margin-bottom: 8px; background: var(--hm-terracotta); color: #fff;">${t.duration}</span>
          <h2 style="font-size: 2.2rem; color: #fff; font-family: var(--hm-font-serif);">${t.title}</h2>
          <p style="opacity: 0.9; font-size: 0.95rem;"><i class="fa-regular fa-clock"></i> ${t.timing}</p>
        </div>
      </div>

      <div style="padding: 34px;">
        <p style="font-size: 1.05rem; line-height: 1.75; color: var(--hm-text-body); margin-bottom: 28px;">${t.desc}</p>

        <h4 style="font-size: 1.15rem; margin-bottom: 14px; font-family: var(--hm-font-serif);">Schedule & Itinerary</h4>
        <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 30px;">
          ${t.schedule.map(o=>`
            <div style="padding: 12px 16px; border-left: 3px solid var(--hm-terracotta); background: var(--hm-bg-main); border-radius: 0 var(--hm-radius-md) var(--hm-radius-md) 0; font-size: 0.95rem; font-weight: 600;">
              ${o}
            </div>
          `).join("")}
        </div>

        <h4 style="font-size: 1.15rem; margin-bottom: 14px; font-family: var(--hm-font-serif);">Included Activities</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 34px;">
          ${t.activities.map(o=>`
            <span class="badge badge-gold" style="font-size: 0.85rem;"><i class="fa-solid fa-check"></i> ${o}</span>
          `).join("")}
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--hm-border); padding-top: 24px;">
          <div>
            <span style="font-size: 0.85rem; color: var(--hm-text-muted);">Price per person</span>
            <div style="font-size: 1.8rem; font-weight: 800; color: var(--hm-text-heading);">${t.price}</div>
          </div>
          <button type="button" class="btn-primary" style="padding: 12px 30px;" onclick="openDestBooking('${t.title||"Marrakech"}')">Book this Experience</button>
        </div>
      </div>
    </div>
  `,a.style.display="flex",a.scrollTop=0;const i=a.querySelector(".exp-inner-content");i&&(i.scrollTop=0),lockBodyScroll(!0),requestAnimationFrame(()=>{a.style.opacity="1",a.style.pointerEvents="auto",a.setAttribute("tabindex","-1"),a.focus()})},window.closeDestinationModal=function(){const e=document.getElementById("destModal");e&&(e.style.opacity="0",e.style.pointerEvents="none",setTimeout(()=>{e.style.display="none"},300)),lockBodyScroll(!1)},window.closeExp=window.closeDestinationModal,document.addEventListener("keydown",function(e){e.key==="Escape"&&document.querySelectorAll(".modal, .dest-booking-modal-overlay, .exp-modal, #globalQuickBookModal, #destModal, #customTourModal").forEach(t=>{if(t.style.display==="flex"||t.style.display==="block"||t.style.opacity==="1"){const a=t.id;if(a.startsWith("modal-")){const i=a.replace("modal-","");closeModal(i)}else a==="globalQuickBookModal"?closeQuickBooking():a==="destBookingModal"?closeDestBooking():a==="destModal"||a==="expModal"?closeDestinationModal():a==="customTourModal"?closeCustomTourModal():(t.style.display="none",lockBodyScroll(!1))}})}),document.addEventListener("click",function(e){if(e.target.classList.contains("modal")||e.target.classList.contains("dest-booking-modal-overlay")||e.target.classList.contains("exp-modal")||e.target.id==="globalQuickBookModal"||e.target.id==="destModal"||e.target.id==="customTourModal"){const t=e.target.id;t.startsWith("modal-")?closeModal(t.replace("modal-","")):t==="globalQuickBookModal"?closeQuickBooking():t==="destBookingModal"?closeDestBooking():t==="destModal"||t==="expModal"?closeDestinationModal():t==="customTourModal"&&closeCustomTourModal()}});const CUSTOM_TOUR_DESTINATIONS=[{id:"marrakech",name:"Marrakech",region:"Marrakech-Safi",img:"images/Marrakech/marrakech_11.jpg"},{id:"fes",name:"F\xE8s",region:"F\xE8s-Mekn\xE8s",img:"images/Fes/fes_1.jpg"},{id:"chefchaouen",name:"Chefchaouen",region:"Rif Mountains",img:"images/Chfchaouen/chefchaoun.jpg"},{id:"merzouga",name:"Merzouga",region:"Sahara Desert",img:"images/Merzouga/merzouga_1.jpg"},{id:"zagora",name:"Zagora",region:"Dra\xE2 Valley & Dunes",img:"images/Zagora/zagora_hero.png"},{id:"ouarzazate",name:"Ouarzazate",region:"Dra\xE2-Tafilalet",img:"images/Ouarzazat/ouarzazat1.jpeg"},{id:"essaouira",name:"Essaouira",region:"Atlantic Coast",img:"images/Essaouira/essaouira_1.jpg"},{id:"agadir",name:"Agadir",region:"Souss-Massa",img:"images/Agadir/agadir_hero.png"},{id:"casablanca",name:"Casablanca",region:"Casablanca-Settat",img:"images/Casablanca/casablanca.png"},{id:"rabat",name:"Rabat",region:"Rabat-Sal\xE9-K\xE9nitra",img:"images/rabat.jpg"},{id:"tangier",name:"Tangier",region:"Tanger-Tetouan",img:"images/tangier.jpg"},{id:"sahara",name:"Sahara Desert",region:"Erg Chebbi & Dunes",img:"images/Zagora/zagora_hero.png"},{id:"ourika",name:"Ourika Valley",region:"Marrakech Region",img:"images/Marrakech/ourika.jpg"},{id:"ouzoud",name:"Ouzoud Waterfalls",region:"Marrakech Region",img:"images/Ouzoud/ouzoud-falls.jpg"},{id:"agafay",name:"Agafay Desert",region:"Marrakech Region",img:"images/Marrakech/agafay_pic2.jpg"},{id:"imlil",name:"Imlil & High Atlas",region:"High Atlas Mountains",img:"images/Marrakech/imlil_1.jpg"},{id:"palmeraie_balloon",name:"Palmeraie ( Sunrise Hot Air Balloon )",region:"Marrakech Region",img:"images/Marrakech/montgolfiere.webp"}],DESTINATION_CATEGORIES={marrakech:["medina","imperial","culture"],fes:["medina","imperial","culture"],chefchaouen:["mountain","medina"],merzouga:["desert","dunes"],zagora:["desert","dunes"],ouarzazate:["desert","kasbah"],sahara:["desert","dunes"],essaouira:["coastal","ocean"],agadir:["coastal","ocean"],ourika:["mountain","nature"],ouzoud:["nature"],agafay:["desert","nature"],imlil:["mountain","nature"],palmeraie_balloon:["adventure","nature"],casablanca:["coastal","imperial"],rabat:["coastal","imperial"],tangier:["coastal"],atlas:["mountain","hiking"]},CUSTOM_TOUR_DURATIONS=[{id:"2-3",title:"2\u20133 Days",desc:"Short weekend getaway & city highlights"},{id:"4-5",title:"4\u20135 Days",desc:"Express adventure & imperial tour"},{id:"6-7",title:"6\u20137 Days",desc:"Classic Morocco journey & desert camel trek"},{id:"8-10",title:"8\u201310 Days",desc:"Comprehensive expedition across cities & dunes"},{id:"10+",title:"10+ Days",desc:"Grand Morocco complete experience"}],CUSTOM_TOUR_STYLES=[{id:"luxury",title:"Luxury",icon:"fa-crown",desc:"5-star private riads & fine dining"},{id:"cultural",title:"Cultural",icon:"fa-landmark",desc:"Ancient medinas & heritage storytellers"},{id:"adventure",title:"Adventure",icon:"fa-compass",desc:"Desert dunes, quad biking & mountain treks"},{id:"relaxation",title:"Relaxation",icon:"fa-spa",desc:"Traditional hammams & peaceful coastal stays"},{id:"family",title:"Family",icon:"fa-people-roof",desc:"Kid-friendly pace & authentic experiences"},{id:"romantic",title:"Romantic",icon:"fa-sparkles",desc:"Private dinners under desert starry skies"},{id:"authentic",title:"Authentic / Local",icon:"fa-hand-holding-heart",desc:"Immersive Berber hospitality & craft workshops"}],CUSTOM_TOUR_ACTIVITIES=[{id:"desert",title:"Desert Experience & Stargazing",icon:"fa-sun",reqCategory:"desert"},{id:"camping",title:"Luxury Desert Camping",icon:"fa-campground",reqCategory:"desert"},{id:"camel",title:"Camel Trek & Sunset Ride",icon:"fa-dharmachakra",reqCategory:"desert"},{id:"beach",title:"Beach & Coastal Watersports",icon:"fa-umbrella-beach",reqCategory:"coastal"},{id:"hiking",title:"Mountain & Oasis Hiking",icon:"fa-mountain",reqCategory:null},{id:"souks",title:"Medina & Souks Guided Tour",icon:"fa-store",reqCategory:null},{id:"cooking",title:"Moroccan Cooking Masterclass",icon:"fa-utensils",reqCategory:null},{id:"food",title:"Local Street Food & Tasting",icon:"fa-mug-hot",reqCategory:null},{id:"riad",title:"Historic Riad Stay",icon:"fa-hotel",reqCategory:null},{id:"history",title:"Historical Sites & Kasbahs",icon:"fa-monument",reqCategory:null},{id:"photo",title:"Photography Tour & Viewpoints",icon:"fa-camera",reqCategory:null},{id:"wellness",title:"Traditional Hammam & Spa",icon:"fa-leaf",reqCategory:null}],CUSTOM_TOUR_ACCOMMODATION=[{id:"luxury_riad",title:"Luxury Riad",desc:"Palatial historic riads with private courtyard & plunge pool"},{id:"boutique_hotel",title:"Boutique Hotel",desc:"Charming boutique stays with unique local character"},{id:"luxury_hotel",title:"Luxury Hotel",desc:"5-star luxury resorts with full amenities & spas"},{id:"desert_camp",title:"Desert Camp",desc:"Private glamping tents in Erg Chebbi with ensuite bath"},{id:"standard",title:"Comfortable / Standard",desc:"Handpicked quality 3-4 star hotels & guesthouses"}],CUSTOM_TOUR_TRANSPORTATION=[{id:"private_driver",title:"Private Driver",desc:"Dedicated air-conditioned 4x4 or Mercedes V-Class with professional driver"},{id:"rental_car",title:"Rental Car",desc:"Self-drive SUV or sedan delivered to your arrival city"},{id:"mixed",title:"Mixed Transportation",desc:"Combination of high-speed train, private transfers, and short flights"},{id:"recommend",title:"I don't know / Recommend for me",desc:"Let our travel specialists select the optimal routes"}],CUSTOM_TOUR_BUDGET=[{id:"comfortable",title:"Comfortable",desc:"Value-focused high quality comfort",tier:"\u20AC"},{id:"premium",title:"Premium",desc:"High standard with handpicked luxury riads",tier:"\u20AC\u20AC"},{id:"luxury",title:"Luxury",desc:"Ultra-exclusive 5-star private expeditions",tier:"\u20AC\u20AC\u20AC"}],CustomTourState={currentStep:1,destinations:[],duration:"",travelStyles:[],activities:[],accommodation:"",transportation:"",budget:"",preferences:"",contact:{name:"",email:"",phone:"",dates:""}};function findDestinationId(e){if(!e)return null;const t=String(e).trim().toLowerCase();let a=CUSTOM_TOUR_DESTINATIONS.find(o=>o.id.toLowerCase()===t);if(a||(a=CUSTOM_TOUR_DESTINATIONS.find(o=>o.name.toLowerCase()===t),a))return a.id;const i=t.normalize("NFD").replace(/[\u0300-\u036f]/g,"");return a=CUSTOM_TOUR_DESTINATIONS.find(o=>{const n=o.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");return n===i||i.includes(n)||n.includes(i)}),a?a.id:t.includes("zagora")?"zagora":t.includes("merzouga")?"merzouga":t.includes("ouarzazat")?"ouarzazate":t.includes("marrakech")?"marrakech":t.includes("fes")?"fes":t.includes("chefchaouen")?"chefchaouen":t.includes("essaouira")?"essaouira":t.includes("agadir")?"agadir":t.includes("casablanca")?"casablanca":t.includes("rabat")?"rabat":t.includes("tangier")?"tangier":null}function getAvailableActivities(){const e=CustomTourState.destinations||[];let t=!1,a=!1;return e.forEach(i=>{const o=DESTINATION_CATEGORIES[i]||[];o.includes("desert")&&(t=!0),o.includes("coastal")&&(a=!0)}),CUSTOM_TOUR_ACTIVITIES.filter(i=>i.reqCategory==="desert"?t:i.reqCategory==="coastal"?a:!0)}function renderCustomTourStep4(){const e=document.getElementById("ctStep4");if(!e)return;const t=getAvailableActivities(),a=t.map(o=>o.id);CustomTourState.activities=CustomTourState.activities.filter(o=>a.includes(o));let i="Select all activities you would like to experience during your journey.";CustomTourState.destinations.length>0&&(i=`Activities available for <strong>${CUSTOM_TOUR_DESTINATIONS.filter(o=>CustomTourState.destinations.includes(o.id)).map(o=>o.name).join(", ")}</strong>:`),e.innerHTML=`
    <h3 class="ct-step-title">Step 4 \u2014 Activities & Experiences</h3>
    <p class="ct-step-subtitle">${i}</p>
    <div class="ct-option-grid">
      ${t.map(o=>`
          <div class="ct-option-card ${CustomTourState.activities.includes(o.id)?"is-selected":""}" data-val="${o.id}" onclick="window.toggleCTActivity('${o.id}')">
            <div class="ct-option-radio"></div>
            <div class="ct-option-icon"><i class="fa-solid ${o.icon}"></i></div>
            <div class="ct-option-title">${o.title}</div>
          </div>
        `).join("")}
    </div>
  `}window.openCustomTourModal=function(e){document.querySelectorAll(".hn-links, .nav-links, #premNavLinks, #navLinks").forEach(o=>{o.classList.remove("hn-links-open","open","active")}),document.querySelectorAll(".hamburger, .hburg").forEach(o=>{o.classList.remove("is-active")}),document.querySelectorAll(".drawer-backdrop").forEach(o=>{o.classList.remove("drawer-backdrop-open")}),document.querySelectorAll(".modal, .dest-booking-modal-overlay, #globalQuickBookModal, #destModal").forEach(o=>{o.style.display="none"});let t=document.getElementById("customTourModal");t||(initCustomTourDOM(),t=document.getElementById("customTourModal")),t.parentElement!==document.body&&document.body.appendChild(t);let a=null;if(e)a=findDestinationId(e);else{const o=new URLSearchParams(window.location.search),n=o.get("dest")||o.get("destination")||o.get("city");n&&(a=findDestinationId(n))}if(a){CustomTourState.destinations=[a];try{localStorage.setItem("hm_selected_dest",a)}catch{}}else if(CustomTourState.destinations.length===0){const o=localStorage.getItem("hm_selected_dest");o&&findDestinationId(o)&&(CustomTourState.destinations=[findDestinationId(o)])}CustomTourState.currentStep=1,renderCustomTourStep(1),t.style.display="flex",t.scrollTop=0;const i=t.querySelector(".ct-modal-content");i&&(i.scrollTop=0),lockBodyScroll(!0),requestAnimationFrame(()=>{t.style.opacity="1",t.style.pointerEvents="auto",t.setAttribute("tabindex","-1"),t.focus(),typeof window.animateCustomTourCards=="function"&&window.animateCustomTourCards(!0)})},window.closeCustomTourModal=function(){const e=document.getElementById("customTourModal");e&&(e.style.opacity="0",e.style.pointerEvents="none",setTimeout(()=>{e.style.display="none"},300)),lockBodyScroll(!1)};function initCustomTourDOM(){if(document.getElementById("customTourModal"))return;const e=document.createElement("div");e.id="customTourModal",e.innerHTML=`
    <div class="ct-modal-content">
      <button class="ct-close-btn" onclick="window.closeCustomTourModal()" aria-label="Close">&times;</button>

      <div class="ct-wizard-header">
        <div class="ct-progress-meta">
          <span class="ct-step-badge">Customize My Tour</span>
          <span class="ct-step-count" id="ctStepCount">Step 1 of 9</span>
        </div>
        <div class="ct-progress-track">
          <div class="ct-progress-fill" id="ctProgressFill" style="width: 11%;"></div>
        </div>
      </div>

      <!-- STEP 1: DESTINATIONS -->
      <div class="ct-step-content is-active" id="ctStep1">
        <h3 class="ct-step-title">Step 1 \u2014 Choose Destinations</h3>
        <p class="ct-step-subtitle">Select one or multiple Moroccan destinations you wish to include in your personalized trip.</p>
        <div class="ct-dest-grid">
          ${CUSTOM_TOUR_DESTINATIONS.map(t=>`
            <div class="ct-dest-card" data-id="${t.id}" onclick="window.toggleCTDest('${t.id}')">
              <div class="ct-dest-card-img">
                <img src="${t.img}" alt="${t.name}" loading="lazy">
                <div class="ct-dest-card-overlay"></div>
                <div class="ct-dest-check"><i class="fa-solid fa-check"></i></div>
              </div>
              <div class="ct-dest-card-body">
                <div class="ct-dest-card-title">${t.name}</div>
                <div class="ct-dest-card-region"><i class="fa-solid fa-location-dot" style="color:#C85A32;"></i> ${t.region}</div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- STEP 2: DURATION -->
      <div class="ct-step-content" id="ctStep2">
        <h3 class="ct-step-title">Step 2 \u2014 Trip Duration</h3>
        <p class="ct-step-subtitle">Select the approximate duration for your customized journey.</p>
        <div class="ct-option-grid">
          ${CUSTOM_TOUR_DURATIONS.map(t=>`
            <div class="ct-option-card" data-val="${t.id}" onclick="window.selectCTDuration('${t.id}')">
              <div class="ct-option-radio"></div>
              <div class="ct-option-icon"><i class="fa-regular fa-calendar-days"></i></div>
              <div class="ct-option-title">${t.title}</div>
              <div class="ct-option-desc">${t.desc}</div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- STEP 3: TRAVEL STYLE -->
      <div class="ct-step-content" id="ctStep3">
        <h3 class="ct-step-title">Step 3 \u2014 Travel Style</h3>
        <p class="ct-step-subtitle">Choose one or more travel experiences that match your travel vision.</p>
        <div class="ct-option-grid">
          ${CUSTOM_TOUR_STYLES.map(t=>`
            <div class="ct-option-card" data-val="${t.id}" onclick="window.toggleCTStyle('${t.id}')">
              <div class="ct-option-radio"></div>
              <div class="ct-option-icon"><i class="fa-solid ${t.icon}"></i></div>
              <div class="ct-option-title">${t.title}</div>
              <div class="ct-option-desc">${t.desc}</div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- STEP 4: ACTIVITIES -->
      <div class="ct-step-content" id="ctStep4">
        <h3 class="ct-step-title">Step 4 \u2014 Activities & Experiences</h3>
        <p class="ct-step-subtitle">Select all activities you would like to experience during your journey.</p>
        <div class="ct-option-grid">
          ${CUSTOM_TOUR_ACTIVITIES.map(t=>`
            <div class="ct-option-card" data-val="${t.id}" onclick="window.toggleCTActivity('${t.id}')">
              <div class="ct-option-radio"></div>
              <div class="ct-option-icon"><i class="fa-solid ${t.icon}"></i></div>
              <div class="ct-option-title">${t.title}</div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- STEP 5: ACCOMMODATION -->
      <div class="ct-step-content" id="ctStep5">
        <h3 class="ct-step-title">Step 5 \u2014 Preferred Accommodation</h3>
        <p class="ct-step-subtitle">Select the style of accommodation you prefer throughout your tour.</p>
        <div class="ct-option-grid">
          ${CUSTOM_TOUR_ACCOMMODATION.map(t=>`
            <div class="ct-option-card" data-val="${t.id}" onclick="window.selectCTAccom('${t.id}')">
              <div class="ct-option-radio"></div>
              <div class="ct-option-icon"><i class="fa-solid fa-bed"></i></div>
              <div class="ct-option-title">${t.title}</div>
              <div class="ct-option-desc">${t.desc}</div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- STEP 6: TRANSPORTATION -->
      <div class="ct-step-content" id="ctStep6">
        <h3 class="ct-step-title">Step 6 \u2014 Preferred Transportation</h3>
        <p class="ct-step-subtitle">Choose your preferred mode of travel between destinations.</p>
        <div class="ct-option-grid">
          ${CUSTOM_TOUR_TRANSPORTATION.map(t=>`
            <div class="ct-option-card" data-val="${t.id}" onclick="window.selectCTTrans('${t.id}')">
              <div class="ct-option-radio"></div>
              <div class="ct-option-icon"><i class="fa-solid fa-car-side"></i></div>
              <div class="ct-option-title">${t.title}</div>
              <div class="ct-option-desc">${t.desc}</div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- STEP 7: BUDGET -->
      <div class="ct-step-content" id="ctStep7">
        <h3 class="ct-step-title">Step 7 \u2014 Budget Range</h3>
        <p class="ct-step-subtitle">Select your preferred travel budget tier.</p>
        <div class="ct-option-grid">
          ${CUSTOM_TOUR_BUDGET.map(t=>`
            <div class="ct-option-card" data-val="${t.id}" onclick="window.selectCTBudget('${t.id}')">
              <div class="ct-option-radio"></div>
              <div class="ct-option-icon"><span style="font-weight:800; font-size:1.1rem;">${t.tier}</span></div>
              <div class="ct-option-title">${t.title}</div>
              <div class="ct-option-desc">${t.desc}</div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- STEP 8: PERSONAL PREFERENCES -->
      <div class="ct-step-content" id="ctStep8">
        <h3 class="ct-step-title">Step 8 \u2014 Personal Preferences</h3>
        <p class="ct-step-subtitle">Tell us anything else you would like for your trip (dietary requirements, celebratory events, travel pace, special requests...)</p>
        <div class="ct-textarea-group">
          <textarea id="ctPreferencesInput" class="ct-textarea" placeholder="Tell us anything else you would like for your trip... e.g. We are celebrating an anniversary, prefer vegetarian meals, and want a relaxed pace."></textarea>
        </div>
      </div>

      <!-- STEP 9: CONTACT DETAILS -->
      <div class="ct-step-content" id="ctStep9">
        <h3 class="ct-step-title">Step 9 \u2014 Contact Details</h3>
        <p class="ct-step-subtitle">Provide your contact details so our Moroccan travel designers can prepare your itinerary.</p>
        <div class="ct-form-grid">
          <div class="ct-input-group">
            <label class="ct-label">Full Name <span class="req">*</span></label>
            <input type="text" id="ctNameInput" class="ct-input" placeholder="e.g. Sarah Jenkins" required>
          </div>
          <div class="ct-input-group">
            <label class="ct-label">Email Address <span style="font-size: 0.8rem; font-weight: 400; color: var(--hm-text-muted);">(Optional)</span></label>
            <input type="email" id="ctEmailInput" class="ct-input" placeholder="e.g. sarah@example.com">
          </div>
          <div class="ct-input-group">
            <label class="ct-label">Phone / WhatsApp <span class="req">*</span></label>
            <input type="tel" id="ctPhoneInput" class="ct-input" placeholder="e.g. +1 555 123 4567" required>
          </div>
          <div class="ct-input-group">
            <label class="ct-label">Preferred Travel Dates <span class="req">*</span></label>
            <input type="text" id="ctDatesInput" class="ct-input" placeholder="e.g. October 15\u201325, 2026 or Spring 2027" required>
          </div>
        </div>
      </div>

      <!-- STEP 10: SUMMARY REVIEW -->
      <div class="ct-step-content" id="ctStep10">
        <h3 class="ct-step-title" style="color:#C85A32;">Your Morocco Journey</h3>
        <p class="ct-step-subtitle">Review your custom tour selections below before submitting your request.</p>

        <div class="ct-summary-box" id="ctSummaryBox">
          <!-- Dynamic Summary Output -->
        </div>
      </div>

      <!-- STEP 11: SUCCESS CONFIRMATION -->
      <div class="ct-step-content" id="ctStep11">
        <div class="ct-success-card">
          <div class="ct-success-icon"><i class="fa-solid fa-check"></i></div>
          <h3 class="ct-step-title" style="text-align:center;">Request Received! \u{1F389}</h3>
          <p class="ct-step-subtitle" style="text-align:center; max-width:600px; margin:0 auto 24px;">
            Thank you <strong id="ctSuccessName" style="color:#C85A32;">Traveler</strong>! Your custom Morocco tour request has been successfully submitted. Choose your preferred contact channel to connect directly with our travel designers:
          </p>

          <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap; max-width:640px; margin:0 auto 20px;">
            <button onclick="window.sendCustomTourWhatsApp()" class="ct-btn-next" style="background:#25D366; box-shadow:0 6px 20px rgba(37,211,102,0.4); flex:1; min-width:130px;">
              WhatsApp &nbsp;<i class="fa-brands fa-whatsapp"></i>
            </button>
            <button onclick="window.sendCustomTourEmail()" class="ct-btn-next" style="background:#C85A32; box-shadow:0 6px 20px rgba(200,90,50,0.4); flex:1; min-width:130px;">
              Email Us &nbsp;<i class="fa-solid fa-envelope"></i>
            </button>
            <button onclick="window.sendCustomTourFacebook()" class="ct-btn-next" style="background:#1877F2; box-shadow:0 6px 20px rgba(24,119,242,0.4); flex:1; min-width:130px;">
              Facebook &nbsp;<i class="fa-brands fa-facebook-f"></i>
            </button>
            <button onclick="window.sendCustomTourInstagram()" class="ct-btn-next" style="background:linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); box-shadow:0 6px 20px rgba(220,39,67,0.4); flex:1; min-width:130px;">
              Instagram &nbsp;<i class="fa-brands fa-instagram"></i>
            </button>
          </div>

          <div style="text-align:center;">
            <button onclick="window.closeCustomTourModal()" class="ct-btn-back">
              Done & Close
            </button>
          </div>
        </div>
      </div>

      <!-- NAV FOOTER -->
      <div class="ct-nav-footer" id="ctNavFooter">
        <button type="button" class="ct-btn-back" id="ctBackBtn" onclick="window.prevCTStep()">
          <i class="fa-solid fa-arrow-left"></i> Back
        </button>

        <button type="button" class="ct-btn-next" id="ctNextBtn" onclick="window.nextCTStep()">
          Continue &nbsp;<i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>

    </div>
  `,document.body.appendChild(e)}window.toggleCTDest=function(e){const t=CustomTourState.destinations.indexOf(e);t>-1?CustomTourState.destinations.splice(t,1):CustomTourState.destinations.push(e),document.querySelectorAll("#ctStep1 .ct-dest-card").forEach(i=>{const o=i.getAttribute("data-id");i.classList.toggle("is-selected",CustomTourState.destinations.includes(o))});const a=getAvailableActivities().map(i=>i.id);CustomTourState.activities=CustomTourState.activities.filter(i=>a.includes(i)),CustomTourState.currentStep===4&&renderCustomTourStep4()},window.selectCTDuration=function(e){CustomTourState.duration=e,document.querySelectorAll("#ctStep2 .ct-option-card").forEach(t=>{t.classList.toggle("is-selected",t.getAttribute("data-val")===e)})},window.toggleCTStyle=function(e){const t=CustomTourState.travelStyles.indexOf(e);t>-1?CustomTourState.travelStyles.splice(t,1):CustomTourState.travelStyles.push(e),document.querySelectorAll("#ctStep3 .ct-option-card").forEach(a=>{const i=a.getAttribute("data-val");a.classList.toggle("is-selected",CustomTourState.travelStyles.includes(i))})},window.toggleCTActivity=function(e){const t=CustomTourState.activities.indexOf(e);t>-1?CustomTourState.activities.splice(t,1):CustomTourState.activities.push(e),document.querySelectorAll("#ctStep4 .ct-option-card").forEach(a=>{const i=a.getAttribute("data-val");a.classList.toggle("is-selected",CustomTourState.activities.includes(i))})},window.selectCTAccom=function(e){CustomTourState.accommodation=e,document.querySelectorAll("#ctStep5 .ct-option-card").forEach(t=>{t.classList.toggle("is-selected",t.getAttribute("data-val")===e)})},window.selectCTTrans=function(e){CustomTourState.transportation=e,document.querySelectorAll("#ctStep6 .ct-option-card").forEach(t=>{t.classList.toggle("is-selected",t.getAttribute("data-val")===e)})},window.selectCTBudget=function(e){CustomTourState.budget=e,document.querySelectorAll("#ctStep7 .ct-option-card").forEach(t=>{t.classList.toggle("is-selected",t.getAttribute("data-val")===e)})};function renderCustomTourStep(e){CustomTourState.currentStep=e;for(let c=1;c<=11;c++){const h=document.getElementById("ctStep"+c);h&&h.classList.remove("is-active")}const t=document.getElementById("ctStep"+e);t&&t.classList.add("is-active");const a=document.getElementById("ctStepCount"),i=document.getElementById("ctProgressFill"),o=document.getElementById("ctBackBtn"),n=document.getElementById("ctNextBtn"),r=document.getElementById("ctNavFooter");e===1?(document.querySelectorAll("#ctStep1 .ct-dest-card").forEach(c=>{const h=c.getAttribute("data-id"),v=CustomTourState.destinations.includes(h);c.classList.toggle("is-selected",v),v&&setTimeout(()=>{const f=document.querySelector(".ct-modal-content");f&&f.scrollTo({top:c.offsetTop-150,behavior:"smooth"})},100)}),typeof window.animateCustomTourCards=="function"&&window.animateCustomTourCards(!1)):e===4&&renderCustomTourStep4(),e>=2&&e<=8&&document.querySelectorAll("#ctStep"+e+" .ct-option-card").forEach((c,h)=>{c.style.animation="none",c.offsetWidth;const v=(.08+h*.12).toFixed(2);c.style.animation=`luxuryEntrance 1.15s cubic-bezier(0.22, 1, 0.36, 1) ${v}s both`}),e<=9?(r&&(r.style.display="flex"),a&&(a.textContent=`Step ${e} of 9`),i&&(i.style.width=`${Math.round(e/9*100)}%`),o&&(o.style.visibility=e===1?"hidden":"visible"),n&&(n.innerHTML=e===9?'Review My Journey &nbsp;<i class="fa-solid fa-eye"></i>':'Continue &nbsp;<i class="fa-solid fa-arrow-right"></i>')):e===10?(r&&(r.style.display="flex"),a&&(a.textContent="Summary Review"),i&&(i.style.width="100%"),o&&(o.style.visibility="visible"),n&&(n.innerHTML='Request My Personalized Tour &nbsp;<i class="fa-solid fa-paper-plane"></i>'),renderCustomTourSummary()):e===11&&r&&(r.style.display="none");const d=document.getElementById("customTourModal");if(d){const c=d.querySelector(".ct-modal-content");c&&(c.scrollTop=0)}}window.nextCTStep=function(){const e=CustomTourState.currentStep;if(e===1){if(CustomTourState.destinations.length===0){showToast("Please select at least 1 destination");return}}else if(e===2){if(!CustomTourState.duration){showToast("Please select your approximate trip duration");return}}else if(e===3){if(CustomTourState.travelStyles.length===0){showToast("Please select at least 1 travel style");return}}else if(e===4){if(CustomTourState.activities.length===0){showToast("Please select at least 1 activity");return}}else if(e===5){if(!CustomTourState.accommodation){showToast("Please select your preferred accommodation style");return}}else if(e===6){if(!CustomTourState.transportation){showToast("Please select your transportation option");return}}else if(e===7){if(!CustomTourState.budget){showToast("Please select your budget range");return}}else if(e===8){const t=document.getElementById("ctPreferencesInput");t&&(CustomTourState.preferences=t.value.trim())}else if(e===9){const t=document.getElementById("ctNameInput")?.value.trim(),a=document.getElementById("ctEmailInput")?.value.trim(),i=document.getElementById("ctPhoneInput")?.value.trim(),o=document.getElementById("ctDatesInput")?.value.trim();if(!t||!i||!o){showToast("Please complete all required contact fields");return}CustomTourState.contact={name:t,email:a,phone:i,dates:o}}else if(e===10){window.submitCustomTour();return}renderCustomTourStep(e+1)},window.prevCTStep=function(){CustomTourState.currentStep>1&&renderCustomTourStep(CustomTourState.currentStep-1)};function renderCustomTourSummary(){const e=document.getElementById("ctSummaryBox");if(!e)return;const t=CUSTOM_TOUR_DESTINATIONS.filter(c=>CustomTourState.destinations.includes(c.id)),a=CUSTOM_TOUR_DURATIONS.find(c=>c.id===CustomTourState.duration),i=CUSTOM_TOUR_STYLES.filter(c=>CustomTourState.travelStyles.includes(c.id)),o=CUSTOM_TOUR_ACTIVITIES.filter(c=>CustomTourState.activities.includes(c.id)),n=CUSTOM_TOUR_ACCOMMODATION.find(c=>c.id===CustomTourState.accommodation),r=CUSTOM_TOUR_TRANSPORTATION.find(c=>c.id===CustomTourState.transportation),d=CUSTOM_TOUR_BUDGET.find(c=>c.id===CustomTourState.budget);e.innerHTML=`
    <div class="ct-summary-grid">
      <div class="ct-summary-item" style="grid-column: 1 / -1;">
        <span class="ct-summary-label"><i class="fa-solid fa-map-location-dot" style="color:#C85A32;"></i> Selected Destinations</span>
        <div class="ct-summary-chips">
          ${t.map(c=>`<span class="ct-chip"><i class="fa-solid fa-location-pin"></i> ${c.name}</span>`).join("")}
        </div>
      </div>

      <div class="ct-summary-item">
        <span class="ct-summary-label"><i class="fa-regular fa-calendar-days"></i> Duration & Dates</span>
        <span class="ct-summary-val">${a?a.title:"N/A"} (${CustomTourState.contact.dates||"TBD"})</span>
      </div>

      <div class="ct-summary-item">
        <span class="ct-summary-label"><i class="fa-solid fa-gem"></i> Travel Style</span>
        <div class="ct-summary-chips">
          ${i.map(c=>`<span class="ct-chip">${c.title}</span>`).join("")}
        </div>
      </div>

      <div class="ct-summary-item" style="grid-column: 1 / -1;">
        <span class="ct-summary-label"><i class="fa-solid fa-compass"></i> Planned Activities</span>
        <div class="ct-summary-chips">
          ${o.map(c=>`<span class="ct-chip"><i class="fa-solid ${c.icon}"></i> ${c.title}</span>`).join("")}
        </div>
      </div>

      <div class="ct-summary-item">
        <span class="ct-summary-label"><i class="fa-solid fa-bed"></i> Accommodation</span>
        <span class="ct-summary-val">${n?n.title:"N/A"}</span>
      </div>

      <div class="ct-summary-item">
        <span class="ct-summary-label"><i class="fa-solid fa-car"></i> Transportation</span>
        <span class="ct-summary-val">${r?r.title:"N/A"}</span>
      </div>

      <div class="ct-summary-item">
        <span class="ct-summary-label"><i class="fa-solid fa-wallet"></i> Budget Tier</span>
        <span class="ct-summary-val" style="color:#C85A32;">${d?d.title+" ("+d.tier+")":"N/A"}</span>
      </div>

      <div class="ct-summary-item">
        <span class="ct-summary-label"><i class="fa-solid fa-user"></i> Contact Traveler</span>
        <span class="ct-summary-val">${CustomTourState.contact.name} (${CustomTourState.contact.phone})</span>
      </div>

      ${CustomTourState.preferences?`
        <div class="ct-summary-item" style="grid-column: 1 / -1;">
          <span class="ct-summary-label"><i class="fa-regular fa-comment-dots"></i> Additional Preferences</span>
          <p style="font-size:0.92rem; color:var(--hm-text-body); font-style:italic; background:rgba(200,90,50,0.05); padding:10px 14px; border-radius:12px; border:1px dashed rgba(200,90,50,0.2);">
            "${CustomTourState.preferences}"
          </p>
        </div>
      `:""}
    </div>
  `}window.submitCustomTour=function(){const e=document.getElementById("ctSuccessName");e&&(e.textContent=CustomTourState.contact.name||"Traveler"),renderCustomTourStep(11),showToast(`Custom Tour request submitted for ${CustomTourState.contact.name}! \u2728`)},window.sendCustomTourWhatsApp=function(){const e="212660082066",t=CUSTOM_TOUR_DESTINATIONS.filter(n=>CustomTourState.destinations.includes(n.id)).map(n=>n.name).join(", "),a=CUSTOM_TOUR_DURATIONS.find(n=>n.id===CustomTourState.duration),i=CUSTOM_TOUR_STYLES.filter(n=>CustomTourState.travelStyles.includes(n.id)).map(n=>n.title).join(", "),o=`Hello \u{1F44B} Discover Hidden Morocco!
I would like to request a Personalized Custom Tour:

\u{1F4CD} Destinations: ${t}
\u23F1\uFE0F Duration: ${a?a.title:""}
\u2728 Style: ${i}
\u{1F4C5} Dates: ${CustomTourState.contact.dates}
\u{1F464} Name: ${CustomTourState.contact.name}
\u{1F4DE} Phone: ${CustomTourState.contact.phone}
\u{1F4E7} Email: ${CustomTourState.contact.email}
\u{1F4DD} Notes: ${CustomTourState.preferences||"N/A"}

Thank you!`;window.open(`https://wa.me/${e}?text=${encodeURIComponent(o)}`,"_blank")},window.sendCustomTourEmail=function(){const e=CUSTOM_TOUR_DESTINATIONS.filter(n=>CustomTourState.destinations.includes(n.id)).map(n=>n.name).join(", "),t=CUSTOM_TOUR_DURATIONS.find(n=>n.id===CustomTourState.duration),a=CUSTOM_TOUR_STYLES.filter(n=>CustomTourState.travelStyles.includes(n.id)).map(n=>n.title).join(", "),i=`Custom Tour Request - ${CustomTourState.contact.name||"Traveler"}`,o=`Hello Discover Hidden Morocco Team,

I would like to request a Tailor-Made Private Tour:

\u{1F4CD} Selected Destinations: ${e}
\u23F1\uFE0F Duration: ${t?t.title:""}
\u2728 Travel Style: ${a}
\u{1F4C5} Preferred Dates: ${CustomTourState.contact.dates}
\u{1F464} Traveler Name: ${CustomTourState.contact.name}
\u{1F4DE} Phone / WhatsApp: ${CustomTourState.contact.phone}
\u{1F4E7} Email: ${CustomTourState.contact.email}
\u{1F4DD} Special Requests: ${CustomTourState.preferences||"None"}

Looking forward to your reply!`;window.location.href=`mailto:contact@discoverhiddenmorocco.com?subject=${encodeURIComponent(i)}&body=${encodeURIComponent(o)}`},window.sendCustomTourFacebook=function(){window.open("https://www.facebook.com/discoverhiddenmorocco","_blank")},window.sendCustomTourInstagram=function(){window.open("https://www.instagram.com/discover_hidden_morocco/","_blank")},document.addEventListener("click",function(e){e.target.closest('.custom-tour-trigger, [data-action="custom-tour"]')&&(e.preventDefault(),window.openCustomTourModal())});const ReviewState={ratingFilter:"all",destFilter:"all"},DEFAULT_GLOBAL_REVIEWS=[{id:"rev_dhm_01",author:"Karim & Amine",avatar:"KA",country:"Casablanca, Morocco",destination:"merzouga",destinationName:"Merzouga Sahara",rating:5,verified:!0,text:"Tajriba wa3ra bzaf m3a Discover Hidden Morocco ! Organisation top o service n9i bzaf. L-guide kan f l-moustawa.",date:"2026-10-12"},{id:"rev_dhm_02",author:"Elena Rostova",avatar:"ER",country:"Madrid, Spain",destination:"sahara",destinationName:"Sahara Desert",rating:5,verified:!0,text:"A truly unforgettable experience in the Erg Chebbi dunes. Our private driver and guide was incredibly knowledgeable and welcoming.",date:"2026-10-04"},{id:"rev_dhm_03",author:"Marc & Sarah",avatar:"MS",country:"Lyon, France",destination:"marrakech",destinationName:"Marrakech",rating:5,verified:!0,text:"Organisation parfaite de notre s\xE9jour dans les riads et les m\xE9dinas. Service haut de gamme et authentique ! Chapeau \xE0 toute l'\xE9quipe.",date:"2026-09-28"},{id:"rev_dhm_04",author:"David & Clara Miller",avatar:"DM",country:"London, UK",destination:"chefchaouen",destinationName:"Chefchaouen",rating:5,verified:!0,text:"The Blue Pearl was magical. Discover Hidden Morocco arranged private transport and boutique accommodations that exceeded all our expectations.",date:"2026-09-20"},{id:"rev_dhm_05",author:"Sophie Dubois",avatar:"SD",country:"Brussels, Belgium",destination:"fes",destinationName:"Fes Medina",rating:5,verified:!0,text:"Guide local exceptionnel \xE0 F\xE8s. Visite des tanneries et des palais historiques en toute tranquillit\xE9. Merci pour ces souvenirs inoubliables.",date:"2026-09-12"},{id:"rev_dhm_06",author:"Michael Krause",avatar:"MK",country:"Munich, Germany",destination:"essaouira",destinationName:"Essaouira Coast",rating:5,verified:!0,text:"Fascinating coastal trip! Fresh seafood, Atlantic breeze, and wonderful Moroccan hospitality throughout our private tour.",date:"2026-09-05"}],STORAGE_KEY_REVIEWS="hm_reviews_dataset",STORAGE_KEY_MY_IDS="hm_my_authored_review_ids",STORAGE_KEY_DELETED="hm_deleted_reviews_ids";function getMyAuthoredReviewIds(){try{const e=localStorage.getItem(STORAGE_KEY_MY_IDS);if(e){const t=JSON.parse(e);if(Array.isArray(t))return t}}catch{}return[]}function addMyAuthoredReviewId(e){if(e)try{const t=getMyAuthoredReviewIds();t.includes(e)||(t.push(e),localStorage.setItem(STORAGE_KEY_MY_IDS,JSON.stringify(t)))}catch{}}function removeMyAuthoredReviewId(e){if(e)try{const t=getMyAuthoredReviewIds().filter(a=>a!==e);localStorage.setItem(STORAGE_KEY_MY_IDS,JSON.stringify(t))}catch{}}function getDeletedReviewIds(){try{const e=localStorage.getItem(STORAGE_KEY_DELETED);if(e){const t=JSON.parse(e);if(Array.isArray(t))return t}}catch{}return[]}function addDeletedReviewId(e){if(e)try{const t=getDeletedReviewIds();t.includes(e)||(t.push(e),localStorage.setItem(STORAGE_KEY_DELETED,JSON.stringify(t)))}catch{}}function getReviewsDatabase(){const e=new Set(getMyAuthoredReviewIds()),t=new Set(getDeletedReviewIds());let a=[];try{const n=localStorage.getItem(STORAGE_KEY_REVIEWS);if(n){const r=JSON.parse(n);Array.isArray(r)&&(a=r)}}catch(n){console.warn("Error reading stored reviews:",n)}const i=new Set,o=[];return a.forEach(n=>{n&&n.id&&!t.has(n.id)&&!i.has(n.id)&&(i.add(n.id),n.isMine=e.has(n.id)||!!n.isMine,o.push(n))}),DEFAULT_GLOBAL_REVIEWS.forEach(n=>{if(n&&n.id&&!t.has(n.id)&&!i.has(n.id)){i.add(n.id);const r={...n};r.isMine=e.has(r.id),o.push(r)}}),o}function saveReviewsDatabase(e){try{localStorage.setItem(STORAGE_KEY_REVIEWS,JSON.stringify(e))}catch{}}let currentReviewRating=5;window.setReviewRating=function(e){currentReviewRating=e;const t=document.getElementById("reviewRatingVal");t&&(t.value=e);const a=document.getElementById("starRatingSelect");a&&a.querySelectorAll(".star-btn").forEach((i,o)=>{o<e?(i.classList.remove("fa-regular"),i.classList.add("fa-solid")):(i.classList.remove("fa-solid"),i.classList.add("fa-regular"))})};function calculateReviewStats(e){const t=e.length;if(t===0)return{total:0,avg:"0.0",starsHtml:"\u2606\u2606\u2606\u2606\u2606",counts:{5:0,4:0,3:0,2:0,1:0},percents:{5:0,4:0,3:0,2:0,1:0}};const a=e.reduce((c,h)=>c+(h.rating||5),0)/t,i=a.toFixed(1),o=Math.round(a),n="\u2605".repeat(o)+"\u2606".repeat(5-o),r={5:0,4:0,3:0,2:0,1:0};e.forEach(c=>{const h=Math.min(5,Math.max(1,c.rating||5));r[h]=(r[h]||0)+1});const d={5:Math.round(r[5]/t*100),4:Math.round(r[4]/t*100),3:Math.round(r[3]/t*100),2:Math.round(r[2]/t*100),1:Math.round(r[1]/t*100)};return{total:t,avg:i,starsHtml:n,counts:r,percents:d}}window.filterReviewsByRating=function(e,t){if(ReviewState.ratingFilter=e,t){const a=t.closest(".star-filters");a&&(a.querySelectorAll(".review-filter-btn").forEach(i=>i.classList.remove("active")),t.classList.add("active"))}refreshReviewsView()},window.filterReviewsByDestination=function(e){ReviewState.destFilter=e,refreshReviewsView()};function getFilteredReviews(){return getReviewsDatabase().filter(e=>{if(ReviewState.ratingFilter!=="all"&&e.rating!=parseInt(ReviewState.ratingFilter,10))return!1;if(ReviewState.destFilter!=="all"){const t=ReviewState.destFilter.toLowerCase(),a=(e.destination||"").toLowerCase(),i=(e.country||"").toLowerCase(),o=(e.text||"").toLowerCase();if(!a.includes(t)&&!i.includes(t)&&!o.includes(t))return!1}return!0})}function refreshReviewsView(){const e=getReviewsDatabase(),t=getFilteredReviews(),a=calculateReviewStats(t),i=document.getElementById("summaryAvgRating"),o=document.getElementById("summaryAvgStars"),n=document.getElementById("summaryReviewCount");i&&(i.textContent=a.total>0?a.avg:"0.0"),o&&(o.textContent=a.total>0?a.starsHtml:"\u2606\u2606\u2606\u2606\u2606"),n&&(n.textContent=a.total>0?`Based on ${a.total} ${a.total===1?"review":"reviews"}`:"0 reviews for this selection");for(let p=1;p<=5;p++){const k=document.getElementById(`barFill${p}`),A=document.getElementById(`barPercent${p}`),x=a.percents[p]||0;k&&(k.style.width=`${x}%`),A&&(A.textContent=`${x}%`)}const r=document.getElementById("heroReviewSubtitle");r&&(r.textContent=e.length>0?`Over ${e.length} verified reviews shared by travelers exploring Morocco.`:"No reviews recorded yet. Be the first traveler to share your journey!");const d=e.length,c=e.filter(p=>(p.rating||5)>=4).length,h=d>0?Math.round(c/d*100):0,v=d>0?`${h}%`:"0%",f=document.getElementById("homeTotalReviews"),y=document.getElementById("homeTotalReviewsLabel"),b=document.getElementById("homeAvgRating"),T=document.getElementById("homeSatisfaction"),C=document.getElementById("homeDestinations");if(f&&(f.textContent=`${d}`),y&&(y.textContent=d===1?"Verified Review":"Verified Reviews"),b){const p=calculateReviewStats(e);b.textContent=p.total>0?`${p.avg}/5`:"0.0/5"}T&&(T.textContent=v),C&&(C.textContent="9");const I=document.getElementById("aboutTotalReviews"),M=document.getElementById("aboutTotalReviewsLabel"),D=document.getElementById("aboutTotalReviewsInline"),l=document.getElementById("aboutSatisfaction"),s=document.getElementById("aboutSatisfactionInline");I&&(I.textContent=`${d}`),M&&(M.textContent=d===1?"Happy Traveler":"Happy Travelers"),D&&(D.textContent=`${d}`),l&&(l.textContent=v),s&&(s.textContent=v);const u=document.getElementById("reviewsGridContainer");u&&renderCardsIntoGrid(u,t);const m=document.getElementById("homeReviewsGrid");m&&renderCardsIntoGrid(m,t.slice(0,3))}function renderCardsIntoGrid(e,t){if(e.innerHTML="",t.length===0){e.innerHTML=`
      <div class="empty-reviews-card" style="grid-column: 1 / -1; text-align: center; padding: 60px 32px; background: var(--hm-bg-card, #FFFFFF); border: 1.5px dashed var(--hm-border, rgba(212,175,55,0.3)); border-radius: 28px; margin: 20px 0; box-shadow: 0 15px 40px rgba(0,0,0,0.03);">
        <div style="width: 72px; height: 72px; margin: 0 auto 20px; border-radius: 50%; background: linear-gradient(135deg, rgba(200,90,50,0.1) 0%, rgba(231,169,60,0.15) 100%); display: flex; align-items: center; justify-content: center; font-size: 2.2rem; color: #C85A32; border: 1px solid rgba(212,175,55,0.3);">
          <i class="fa-regular fa-comments"></i>
        </div>
        <h3 style="font-family: var(--hm-font-serif, serif); font-size: 1.6rem; color: var(--hm-text-heading); margin-bottom: 10px; letter-spacing: -0.01em;">No Reviews Recorded Yet</h3>
        <p style="color: var(--hm-text-muted); font-size: 1rem; max-width: 480px; margin: 0 auto 24px; line-height: 1.6;">Be the first traveler to share your journey and leave feedback about your private tour with Discover Hidden Morocco.</p>
        <button class="btn-primary" onclick="openReviewModal()" style="padding: 14px 34px; border-radius: 99px; border: none; font-weight: 600; font-size: 0.98rem; cursor: pointer; background: linear-gradient(135deg, #C85A32 0%, #E7A93C 100%); color: #fff; box-shadow: 0 10px 30px rgba(200,90,50,0.35); transition: all 0.3s ease;">
          <i class="fa-solid fa-pen-to-square"></i> Leave a Review
        </button>
      </div>
    `;return}t.forEach(a=>{const i=document.createElement("div");i.className="review-card";const o="\u2605".repeat(a.rating||5)+"\u2606".repeat(5-(a.rating||5)),n=a.verified?'<div class="review-verified"><i class="fa-solid fa-circle-check"></i> Verified</div>':"",r=new URLSearchParams(window.location.search).get("admin")==="true",d=new Set(getMyAuthoredReviewIds()),c=!!(a.isMine||a.id&&d.has(a.id)),h=r||c,v=c&&!r?'<span style="background: rgba(200,90,50,0.1); color: #C85A32; font-size: 0.72rem; font-weight: 700; padding: 4px 10px; border-radius: 99px; border: 1px solid rgba(200,90,50,0.25); display: inline-flex; align-items: center; gap: 4px;"><i class="fa-solid fa-user-check"></i> Mon avis</span>':"",f=h?`<div class="review-actions-bar" style="display:inline-flex; align-items:center; gap: 6px;">
          <button onclick="editReview('${a.id}')" title="Modifier l'avis" style="background: rgba(231,169,60,0.12); color: #C85A32; border: 1px solid rgba(231,169,60,0.4); width: 32px; height: 32px; border-radius: 50%; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; font-size: 0.78rem; transition: all 0.2s;" onmouseover="this.style.background='#C85A32';this.style.color='#fff'" onmouseout="this.style.background='rgba(231,169,60,0.12)';this.style.color='#C85A32'"><i class="fa-solid fa-pen"></i></button>
          <button onclick="deleteReview('${a.id}')" title="Supprimer l'avis" style="background: rgba(220,53,69,0.1); color: #dc3545; border: 1px solid rgba(220,53,69,0.3); width: 32px; height: 32px; border-radius: 50%; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; font-size: 0.78rem; transition: all 0.2s;" onmouseover="this.style.background='#dc3545';this.style.color='#fff'" onmouseout="this.style.background='rgba(220,53,69,0.1)';this.style.color='#dc3545'"><i class="fa-solid fa-trash"></i></button>
        </div>`:"";i.innerHTML=`
      <div class="review-header">
        <div class="review-stars" style="color:#E7A93C;">${o}</div>
        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; justify-content: flex-end;">
          ${v}
          ${n}
          ${f}
        </div>
      </div>
      <p class="review-text">"${escapeHtmlStr(a.text)}"</p>
      <div class="review-author">
        <div class="review-avatar" style="background: linear-gradient(135deg, #C85A32 0%, #E7A93C 100%); color: #fff;">${escapeHtmlStr(a.avatar||"TR")}</div>
        <div class="review-author-info">
          <strong>${escapeHtmlStr(a.author)}</strong>
          <span>${escapeHtmlStr(a.country||"Traveler")}</span>
        </div>
      </div>
    `,e.appendChild(i)}),typeof initScrollRevealEngine=="function"&&setTimeout(initScrollRevealEngine,60)}window.openReviewModal=function(){let e=document.getElementById("reviewModal");if(!e){const t=window.location.protocol==="http:"||window.location.protocol==="https:";window.location.href="reviews.html?openReviewModal=true";return}e.style.display="flex",document.body.style.overflow="hidden",setTimeout(()=>{e.classList.add("active")},10)},window.closeReviewModal=function(){let e=document.getElementById("reviewModal");e&&(e.classList.remove("active"),setTimeout(()=>{e.style.display="none",document.body.style.overflow=""},250))},window.scrollToReviewForm=function(){window.openReviewModal()},window.handleReviewSubmit=function(e){e.preventDefault();const t=document.getElementById("reviewAuthor"),a=document.getElementById("reviewEmail"),i=document.getElementById("reviewLocation"),o=document.getElementById("reviewDestSelect"),n=document.getElementById("reviewText"),r=parseInt(document.getElementById("reviewRatingVal")?.value||"5",10);if(!t||!n)return;const d=t.value.trim(),c=a?a.value.trim():"",h=i?i.value.trim():"Traveler",v=o?o.value:"general",f=o&&o.options[o.selectedIndex]?o.options[o.selectedIndex].text:"",y=n.value.trim();if(!d||!y||!c){window.showToast&&window.showToast("Please fill in your name, email, and comment!");return}const b=d.split(" ").map(D=>D[0]).join("").substring(0,2).toUpperCase()||"TR",T=v!=="general"&&f?`${h} \xB7 ${f}`:h,C="rev_"+Date.now()+"_"+Math.random().toString(36).substring(2,6),I={id:C,author:d,avatar:b,country:T,destination:v,destinationName:f,rating:r,verified:!0,isMine:!0,text:y,date:new Date().toISOString().split("T")[0]};addMyAuthoredReviewId(C);const M=getReviewsDatabase();M.unshift(I),saveReviewsDatabase(M),refreshReviewsView(),t.value="",i&&(i.value=""),n.value="",window.setReviewRating(5),window.closeReviewModal(),window.showToast?window.showToast("Thank you! Your review has been published \u2728"):alert("Thank you! Your review has been published \u2728")};function escapeHtmlStr(e){return e?e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):""}document.addEventListener("DOMContentLoaded",function(){refreshReviewsView(),(window.location.search.includes("openReviewModal=true")||window.location.hash==="#addReviewForm")&&setTimeout(function(){openReviewModal()},200)});function initScrollRevealEngine(){if(typeof IntersectionObserver>"u")return;const e=new IntersectionObserver((t,a)=>{t.forEach(i=>{i.isIntersecting&&(i.target.classList.add("reveal-active"),a.unobserve(i.target))})},{root:null,threshold:.08,rootMargin:"0px 0px -40px 0px"});document.querySelectorAll("section h2, .section-header h2, .section-title, .story-main-title, .dest-clean-header h1, .legal-hero h1, .faq-header h2").forEach(t=>{!t.classList.contains("reveal-up")&&!t.classList.contains("reveal-active")&&t.classList.add("reveal-up")}),document.querySelectorAll(".section-header p, .section-subtitle, .story-paragraph, .dest-clean-header p, .legal-hero p, .faq-header p").forEach(t=>{!t.classList.contains("reveal-up")&&!t.classList.contains("reveal-active")&&t.classList.add("reveal-up")}),document.querySelectorAll(".tour-card, .why-card, .feature-item, .exp-cat-card, .exp-card, .review-card, .value-card, .team-card, .story-pillar-item, .faq-item, .contact-info-card, .contact-form-card, .travel-item, .travel-form-container, .hero-stat-item, .legal-card, .section-block").forEach((t,a)=>{!t.classList.contains("reveal-up")&&!t.classList.contains("reveal-active")&&(t.classList.add("reveal-up"),t.style.transitionDelay=a%4*.1+"s")}),document.querySelectorAll(".story-img-main, .about-img-main, .travel-form-left").forEach(t=>t.classList.add("reveal-left")),document.querySelectorAll(".story-img-accent, .about-img-accent, .travel-form-right").forEach(t=>t.classList.add("reveal-right")),document.querySelectorAll(".cta-banner-inner, .cta-strip, .privacy-cta").forEach(t=>t.classList.add("reveal-scale")),document.querySelectorAll(".reveal-up:not(.reveal-active), .reveal-left:not(.reveal-active), .reveal-right:not(.reveal-active), .reveal-scale:not(.reveal-active), .reveal-fade:not(.reveal-active)").forEach(t=>{e.observe(t)})}window.initScrollRevealEngine=initScrollRevealEngine;function initDestinationsEntrance(){const e=document.querySelectorAll(".destinations .grid > .card");e.length>0&&e.forEach((a,i)=>{const o=(.54+i*.18).toFixed(2);a.style.animation=`luxuryEntrance 1.15s cubic-bezier(0.22, 1, 0.36, 1) ${o}s both`});const t=document.querySelectorAll(".dest-grid > .dest-card");t.length>0&&t.forEach((a,i)=>{const o=(.15+i*.15).toFixed(2);a.style.animation=`luxuryEntrance 1.15s cubic-bezier(0.22, 1, 0.36, 1) ${o}s both`})}window.initDestinationsEntrance=initDestinationsEntrance,window.replayCustomTourAnimations=function(){const e=document.getElementById("customTourModal");e&&e.querySelectorAll(".ct-dest-card").forEach((t,a)=>{t.style.animation="none",t.offsetWidth;const i=(.15+a*.16).toFixed(2);t.style.animation=`luxuryEntrance 1.15s cubic-bezier(0.22, 1, 0.36, 1) ${i}s both`})},window.animateCustomTourCards=window.replayCustomTourAnimations,document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{initScrollRevealEngine(),initDestinationsEntrance()}):(initScrollRevealEngine(),initDestinationsEntrance()),window.deleteReview=function(e){const t=new URLSearchParams(window.location.search).get("admin")==="true",a=new Set(getMyAuthoredReviewIds());if(!(t||a.has(e))){alert("Action non autoris\xE9e. Vous pouvez uniquement supprimer vos propres avis.");return}if(!confirm("Voulez-vous vraiment supprimer cet avis ?"))return;removeMyAuthoredReviewId(e),addDeletedReviewId(e);let i=[];try{i=JSON.parse(localStorage.getItem(STORAGE_KEY_REVIEWS)||"[]"),Array.isArray(i)&&(i=i.filter(o=>o.id!==e),saveReviewsDatabase(i))}catch{}refreshReviewsView(),window.showToast&&window.showToast("Avis supprim\xE9 avec succ\xE8s.")},window.editReview=function(e){const t=new URLSearchParams(window.location.search).get("admin")==="true",a=new Set(getMyAuthoredReviewIds());if(!(t||a.has(e))){alert("Action non autoris\xE9e. Vous pouvez uniquement modifier vos propres avis.");return}const i=getReviewsDatabase().find(n=>n.id===e);if(!i)return;const o=prompt("Modifier le texte de l'avis :",i.text);if(o!==null&&o.trim()!==""){i.text=o.trim();let n=[];try{n=JSON.parse(localStorage.getItem(STORAGE_KEY_REVIEWS)||"[]"),Array.isArray(n)||(n=[])}catch{n=[]}const r=n.findIndex(d=>d.id===e);r!==-1?n[r].text=i.text:n.unshift(i),saveReviewsDatabase(n),refreshReviewsView(),window.showToast&&window.showToast("Avis mis \xE0 jour avec succ\xE8s.")}};
