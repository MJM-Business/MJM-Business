
(function(){
  const $=s=>document.querySelector(s);
  const path=(location.pathname.split("/").pop()||"index.html").replace(".html","");
  const page=path==="index"?"dashboard":path;
  const D=window.MJM_DEMO;
  const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const money=n=>new Intl.NumberFormat("en-SA").format(Number(n)||0)+" SAR";
  const get=(k,f)=>{try{return JSON.parse(localStorage.getItem(k)||"null")??f}catch{return f}};
  const save=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
  const current=()=>{try{return JSON.parse(sessionStorage.getItem("mjm_user")||"null")}catch{return null}};
  const nav=[
    ["dashboard","Dashboard","▦"],["records","Records","▤"],["payments","Finance & Payments","▣"],
    ["transfers","Transfers","⇄"],["reports","Reports & Analytics","▥"],["contracts","Contracts","▧"],
    ["employees","Employees / HR","♙"],["cargo","Cargo & Logistics","◈"],["travel","Travel","✈"],
    ["transportation","Transportation","▰"],["assets","Assets","◆"],["inventory","Purchasing & Inventory","▤"],
    ["settings","Settings","⚙"]
  ];
  const titles={
    dashboard:["Dashboard","Executive overview of MJM Smart Business"],
    records:["Records","Business transactions and service records"],
    payments:["Finance & Payments","Invoices, collections and payment tracking"],
    transfers:["Transfers","Bank transfers and settlement workflow"],
    reports:["Reports & Analytics","Management reporting and performance"],
    contracts:["Contracts","Contracts, renewals and obligations"],
    employees:["Employees / HR","People, contracts and HR operations"],
    cargo:["Cargo & Logistics","Cargo movements and logistics operations"],
    travel:["Travel","Travel services and bookings"],
    transportation:["Transportation","Vehicles, routes and transport operations"],
    assets:["Assets","Company assets and maintenance"],
    inventory:["Purchasing & Inventory","Purchasing, suppliers and stock"],
    settings:["Settings","Account and demo environment controls"]
  };
  const access={};
  D.users.forEach(u=>access[u.id]=u.access);
  function allowed(u,p){return u&&(access[u.id]||[]).includes("*") || (access[u?.id]||[]).includes(p)}
  function toast(msg){const t=document.createElement("div");t.className="toast";t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.remove(),2400)}
  function logout(){sessionStorage.removeItem("mjm_user");location.replace("login.html")}
  function shell(content){
    const u=current(); if(!u){location.replace("login.html");return}
    const links=nav.filter(n=>allowed(u,n[0]));
    const title=titles[page]||titles.dashboard;
    document.body.innerHTML=`<div class="layout">
      <aside class="sidebar">
        <div class="brand"><span class="brand-icon">◆</span><div><b>MJM Smart</b><small>Business ERP Platform</small></div></div>
        <nav>${links.map(([p,t,i])=>`<a class="${p===page?'active':''}" href="${p==="dashboard"?"index":p}.html"><span class="nav-icon">${i}</span>${t}</a>`).join("")}</nav>
        <div class="side-status"><b>System Status</b><span><i></i> All demo systems operational</span><small>GitHub Pages test mode · local demo data</small></div>
      </aside>
      <main class="main">
        <header class="topbar">
          <div class="user"><div class="avatar">${esc(u.name.charAt(0))}</div><div><b>${esc(u.name)}</b><small>${esc(u.role)}</small></div></div>
          <div class="search">⌕ <input id="globalSearch" placeholder="Search customer, transaction or document..."></div>
          <div class="actions"><button class="icon-btn" id="logoutBtn">Logout</button><button class="lang" id="langBtn">AR / EN</button></div>
        </header>
        <section class="content">
          <div class="page-head"><div><div class="eyebrow">MJM Smart Business</div><h1>${title[0]}</h1><p>${title[1]}</p></div><button class="btn primary" id="printBtn">Export / Print</button></div>
          ${content}
        </section>
      </main>
    </div>`;
    $("#logoutBtn").onclick=logout; $("#printBtn").onclick=()=>window.print();
    $("#langBtn").onclick=()=>toast("English is active for this GitHub test. Arabic/English UI can be expanded later.");
    $("#globalSearch").onkeydown=e=>{if(e.key==="Enter"&&e.target.value.trim())location.href="records.html?q="+encodeURIComponent(e.target.value.trim())}
  }
  function statusBadge(s){
    const m={"Paid":"success","Completed":"success","Active":"success","Pending":"warning","Pending Payment":"warning","Processing":"warning","Expiring Soon":"warning","In Progress":"info","Expired":"danger"};
    return `<span class="badge ${m[s]||"info"}">${esc(s)}</span>`
  }
  function recordsTable(data){
    return data.map(r=>`<tr><td><b>${esc(r.id)}</b><small>${esc(r.date)}</small></td><td>${esc(r.customer)}</td><td>${esc(r.service)}</td><td><b>${money(r.amount)}</b></td><td>${statusBadge(r.status)}</td></tr>`).join("")
  }
  function dashboard(){
    const u=current(), r=get("mjmRecords",D.records), p=get("mjmPayments",D.payments), t=get("mjmTransfers",D.transfers);
    const paid=p.filter(x=>x.status==="Paid").reduce((a,x)=>a+x.amount,0);
    const trans=t.reduce((a,x)=>a+x.amount,0);
    const cards=u.role==="CEO"
      ? `<div class="cards"><article class="stat"><span class="stat-icon">▣</span><small>Collected Today</small><strong>${money(paid)}</strong><label class="up">↗ Finance</label></article>
         <article class="stat"><span class="stat-icon">⇄</span><small>Transfers</small><strong>${money(trans)}</strong><label>All departments</label></article>
         <article class="stat gold"><span class="stat-icon">◆</span><small>Business Records</small><strong>${r.length}</strong><label>Full CEO visibility</label></article>
         <article class="stat"><span class="stat-icon">♟</span><small>Your Role</small><strong style="font-size:22px">CEO</strong><label class="up">Full access</label></article></div>`
      : `<div class="cards"><article class="stat"><span class="stat-icon">▤</span><small>My Records</small><strong>${r.length}</strong><label>Department scope</label></article>
         <article class="stat"><span class="stat-icon">✓</span><small>Completed</small><strong>${r.filter(x=>x.status==="Completed").length}</strong><label class="up">Current demo</label></article>
         <article class="stat gold"><span class="stat-icon">◆</span><small>Department</small><strong style="font-size:22px">${esc(u.role)}</strong><label>Restricted access</label></article>
         <article class="stat"><span class="stat-icon">●</span><small>Mode</small><strong style="font-size:22px">TEST</strong><label>GitHub Pages</label></article></div>`;
    const quick=nav.filter(n=>allowed(u,n[0])&&n[0]!=="dashboard").slice(0,6).map(([p,t,i])=>`<a href="${p}.html">${i}<b>${t}</b></a>`).join("");
    shell(`${cards}
      <div class="grid2">
        <section class="panel"><div class="panel-head"><h2>Quick Access</h2><span class="pill">${u.role}</span></div><div class="quick-grid">${quick}</div></section>
        <section class="panel"><div class="panel-head"><h2>Department Access</h2><span class="pill">${u.role==="CEO"?"ALL MODULES":"ROLE LIMITED"}</span></div>
          <div class="access-box"><b>${u.role==="CEO"?"CEO Control Center":"Role-based workspace"}</b><p class="muted">${u.role==="CEO"?"CEO can view and manage finance, transportation, cargo, HR, contracts, assets, inventory, travel and all other modules.":"This account only sees modules assigned to its department. Unauthorized pages are blocked in the demo."}</p></div>
          <div class="feature-grid">${linksFor(u)}</div>
        </section>
      </div>
      <div class="panel"><div class="panel-head"><h2>Recent Business Records</h2><a href="records.html">View all →</a></div><div class="table-wrap"><table><thead><tr><th>ID</th><th>Customer</th><th>Service</th><th>Amount</th><th>Status</th></tr></thead><tbody>${recordsTable(r.slice(0,8))}</tbody></table></div></div>
      <div class="panel"><div class="panel-head"><h2>Visual Asset Library</h2><span class="muted">Images supplied for the test build</span></div><div class="image-grid">${[1,2,3,4,5,6,7,8].map(n=>`<img src="assets/images/${n}.png" alt="MJM visual ${n}" onerror="this.style.display='none'">`).join("")}</div></div>`);
  }
  function linksFor(u){return nav.filter(n=>allowed(u,n[0])).slice(1,7).map(([p,t,i])=>`<a href="${p}.html"><b>${i} ${t}</b><div class="muted">Open module</div></a>`).join("")}
  function generic(pageName){
    const u=current(); const configs={
      records:["Records",get("mjmRecords",D.records)],
      payments:["Finance & Payments",get("mjmPayments",D.payments)],
      transfers:["Transfers",get("mjmTransfers",D.transfers)],
      contracts:["Contracts",get("mjmContracts",D.contracts)]
    };
    if(configs[pageName]){
      const [name,data]=configs[pageName];
      let rows="";
      if(pageName==="records") rows=recordsTable(data);
      if(pageName==="payments") rows=data.map(x=>`<tr><td><b>${x.id}</b><small>${x.date}</small></td><td>${esc(x.customer)}</td><td>${money(x.amount)}</td><td>${esc(x.method)}</td><td>${statusBadge(x.status)}</td></tr>`).join("");
      if(pageName==="transfers") rows=data.map(x=>`<tr><td><b>${x.id}</b><small>${x.date}</small></td><td>${esc(x.beneficiary)}</td><td>${money(x.amount)}</td><td>${esc(x.bank)}</td><td>${statusBadge(x.status)}</td></tr>`).join("");
      if(pageName==="contracts") rows=data.map(x=>`<tr><td><b>${x.id}</b></td><td>${esc(x.customer)}</td><td>${esc(x.type)}</td><td>${esc(x.end)}</td><td>${money(x.amount)}</td><td>${statusBadge(x.status)}</td></tr>`).join("");
      shell(`<div class="cards"><article class="stat"><small>Total Items</small><strong>${data.length}</strong><label>Demo records</label></article><article class="stat gold"><small>Total Value</small><strong>${money(data.reduce((a,x)=>a+Number(x.amount||0),0))}</strong><label>Recorded value</label></article><article class="stat"><small>Role</small><strong style="font-size:22px">${esc(u.role)}</strong><label>Scoped workspace</label></article></div>
      <div class="panel"><div class="panel-head"><h2>${name}</h2><span class="pill">Demo data</span></div><div class="table-wrap"><table><thead>${pageName==="records"?'<tr><th>ID</th><th>Customer</th><th>Service</th><th>Amount</th><th>Status</th></tr>':pageName==="payments"?'<tr><th>Invoice</th><th>Customer</th><th>Amount</th><th>Method</th><th>Status</th></tr>':pageName==="transfers"?'<tr><th>ID</th><th>Beneficiary</th><th>Amount</th><th>Bank</th><th>Status</th></tr>':'<tr><th>Contract</th><th>Customer</th><th>Type</th><th>End</th><th>Value</th><th>Status</th></tr>'}</thead><tbody>${rows}</tbody></table></div></div>`);
      return;
    }
    const details={
      employees:["Employees / HR","Employee profiles, payroll, contracts and performance."],
      cargo:["Cargo & Logistics","Air, sea and land cargo operations, manifests and tracking."],
      travel:["Travel","Flights, hotels, travel requests and service coordination."],
      transportation:["Transportation","Vehicles, routes, drivers, schedules and transport operations."],
      assets:["Assets","Vehicles, equipment, property and maintenance records."],
      inventory:["Purchasing & Inventory","Suppliers, purchase orders, stock and warehouse controls."],
      reports:["Reports & Analytics","Executive dashboards, finance summaries and operational KPIs."],
      settings:["Settings","Account, role and local demo controls."]
    };
    const [name,desc]=details[pageName]||details.settings;
    shell(`<div class="panel"><div class="panel-head"><h2>${name}</h2><span class="pill">${esc(u.role)}</span></div>
      <div class="access-box"><h3>${name} workspace</h3><p class="muted">${desc}</p>
      <div class="notice">GitHub test mode: interface and role navigation are active. Production database, server-side authentication and real permissions will be connected later.</div>
      <div class="feature-grid"><a><b>Dashboard</b><div class="muted">Overview and KPIs</div></a><a><b>Records</b><div class="muted">View department data</div></a><a><b>Operations</b><div class="muted">Manage workflows</div></a><a><b>Reports</b><div class="muted">Review activity</div></a><a><b>Documents</b><div class="muted">Files and references</div></a><a><b>Audit</b><div class="muted">Activity trail</div></a></div></div></div>`);
  }
  if(page==="dashboard"){if(!allowed(current(),"dashboard"))location.replace("login.html");else dashboard()}
  else {
    const u=current();
    if(!u){location.replace("login.html");return}
    if(!allowed(u,page)){location.replace("index.html");return}
    generic(page)
  }
})();
