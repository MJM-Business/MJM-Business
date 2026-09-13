const languages = [
["العربية","🇸🇦"],["English","🇺🇸"],["Français","🇫🇷"],["Deutsch","🇩🇪"],["Español","🇪🇸"],["中文","🇨🇳"],["日本語","🇯🇵"],
["한국어","🇰🇷"],["Русский","🇷🇺"],["Português","🇵🇹"],["Italiano","🇮🇹"],["Türkçe","🇹🇷"],["فارسی","🇮🇷"],["اردو","🇵🇰"],
["हिन्दी","🇮🇳"],["বাংলা","🇧🇩"],["Bahasa Indonesia","🇮🇩"],["Malay","🇲🇾"],["ไทย","🇹🇭"],["Tiếng Việt","🇻🇳"],
["Nederlands","🇳🇱"],["Polski","🇵🇱"],["Svenska","🇸🇪"],["Norsk","🇳🇴"],["Dansk","🇩🇰"],["Suomi","🇫🇮"],
["Ελληνικά","🇬🇷"],["עברית","🇮🇱"],["Українська","🇺🇦"],["Čeština","🇨🇿"],["Magyar","🇭🇺"],["Română","🇷🇴"],
["Български","🇧🇬"],["Slovenčina","🇸🇰"],["Hrvatski","🇭🇷"],["Serbian","🇷🇸"],["Slovenščina","🇸🇮"],["Bosanski","🇧🇦"],
["فارسی تاجیکی","🇹🇯"],["ქართული","🇬🇪"],["Հայերեն","🇦🇲"],["Azərbaycan","🇦🇿"],["Қазақша","🇰🇿"],["Kyrgyz","🇰🇬"],
["Uzbek","🇺🇿"],["Türkmen","🇹🇲"],["Pashto","🇦🇫"],["Swahili","🌍"],["Amharic","🇪🇹"],["Somali","🇸🇴"],
["Zulu","🇿🇦"],["Afrikaans","🇿🇦"],["Yorùbá","🌍"],["Hausa","🌍"],["Igbo","🌍"],["Kiswahili","🌍"],
["Latin","🌍"],["Esperanto","🌍"],["Català","🇪🇸"],["Euskara","🇪🇸"],["Galego","🇪🇸"],["Lietuvių","🇱🇹"],
["Latviešu","🇱🇻"],["Eesti","🇪🇪"],["Íslenska","🇮🇸"],["Albanian","🇦🇱"],["Macedonian","🇲🇰"],["Maltese","🇲🇹"],
["Irish","🇮🇪"],["Welsh","🏴"],["Filipino","🇵🇭"],["Tagalog","🇵🇭"],["বাংলা","🇧🇩"],["नेपाली","🇳🇵"],
["සිංහල","🇱🇰"],["தமிழ்","🇮🇳"],["తెలుగు","🇮🇳"],["मराठी","🇮🇳"],["ગુજરાતી","🇮🇳"],["ਪੰਜਾਬੀ","🇮🇳"],
["ಕನ್ನಡ","🇮🇳"],["മലയാളം","🇮🇳"],["ਪੰਜਾਬੀ","🇵🇰"],["Монгол","🇲🇳"],["ភាសាខ្មែរ","🇰🇭"],["မြန်မာ","🇲🇲"],
["Lao","🇱🇦"],["नेपाली","🇳🇵"],["ქართული","🇬🇪"],["Shqip","🇦🇱"],["Euskara","🌍"],["Català","🌍"],
["Azərbaycan dili","🇦🇿"],["Bahasa Melayu","🇲🇾"],["Javanese","🌍"],["Sundanese","🌍"],["Cebuano","🌍"],["Hmong","🌍"],
["Malayalam","🇮🇳"],["Odia","🇮🇳"],["Assamese","🇮🇳"],["Kurdî","🌍"],["Pashto","🇦🇫"],["Māori","🇳🇿"]
];

const users = {
  ceo:{name:"الرئيس التنفيذي",role:"CEO",allowed:["government","realestate","transport","residential","hr","finance","employees","admin"]},
  hr:{name:"مدير الموارد البشرية",role:"HR",allowed:["hr"]},
  finance:{name:"مدير المالية",role:"Finance Manager",allowed:["finance"]},
  transport:{name:"مدير النقل",role:"Transport Manager",allowed:["transport"]},
  employees:{name:"مدير الموظفين",role:"Employees Manager",allowed:["employees"]},
  admin:{name:"مدير النظام",role:"Admin",allowed:["admin"]}
};

const demo = {
 government:{title:"الخدمات الحكومية",items:[["طلبات اليوم","128"],["المعاملات قيد المتابعة","42"],["معاملات مكتملة هذا الشهر","1,286"],["متوسط الإنجاز","2.4 يوم"]]},
 realestate:{title:"العقارات",items:[["عقارات نشطة","84"],["طلبات بيع","19"],["طلبات تأجير","31"],["قيمة المحفظة التجريبية","48.6M SAR"]]},
 transport:{title:"النقل والخدمات اللوجستية",items:[["شحنات قيد النقل","76"],["مركبات الأسطول","128"],["وجهات خليجية","18"],["التسليم في الموعد","96.4%"]]},
 residential:{title:"السكن",items:[["وحدات سكنية","342"],["وحدات متاحة","58"],["طلبات الصيانة","17"],["المجمعات المدارة","12"]]},
 hr:{title:"الموارد البشرية",items:[["طلبات إجازة","14"],["مقابلات مجدولة","8"],["وظائف مفتوحة","11"],["حضور اليوم","96%"]]},
 finance:{title:"المالية",items:[["إيرادات الشهر","2.45M SAR"],["مصروفات الشهر","1.23M SAR"],["فواتير معلقة","38"],["التدفق النقدي","1.22M SAR"]]},
 employees:{title:"الموظفون",items:[["إجمالي الموظفين","120"],["إضافة هذا الشهر","6"],["طلبات قيد المراجعة","9"],["تقييمات مكتملة","74%"]]},
 admin:{title:"إدارة النظام",items:[["المستخدمون","25"],["الصلاحيات","68"],["التنبيهات","12"],["حالة النظام","نشط"]]}
};

const langSelect = document.getElementById("languageSelect");
const langList = document.getElementById("langList");
languages.forEach(([name,flag],i)=>{
  const opt=document.createElement("option"); opt.value=name; opt.textContent=`${flag} ${name}`; langSelect.appendChild(opt);
  if(i<8){const row=document.createElement("div");row.textContent=`${name} ${flag}`;langList.appendChild(row);}
});
langSelect.addEventListener("change",()=>{document.getElementById("selectedLanguageLabel").textContent=langSelect.value; toast(`تم اختيار اللغة: ${langSelect.value}`)});

const demoGrid=document.getElementById("demoGrid");
Object.values(demo).forEach(d=>{
  demoGrid.insertAdjacentHTML("beforeend",`<article class="demo-card"><h3>${d.title}</h3><table class="demo-table">${d.items.map(x=>`<tr><td>${x[0]}</td><td><span class="demo-badge">${x[1]}</span></td></tr>`).join("")}</table></article>`);
});

function openLogin(){document.getElementById("loginModal").classList.add("show");document.getElementById("username").focus()}
function closeLogin(){document.getElementById("loginModal").classList.remove("show")}
function login(){
  const u=document.getElementById("username").value.trim().toLowerCase(), p=document.getElementById("password").value;
  if(users[u] && p==="demo123"){
    closeLogin(); showDashboard(u);
  } else document.getElementById("loginError").textContent="بيانات تجريبية غير صحيحة. استخدم كلمة المرور: demo123";
}
function showDashboard(key){
  const user=users[key];
  const all=["government","realestate","transport","residential","hr","finance","employees","admin"];
  const perms=all.map(k=>`<div class="permission ${user.allowed.includes(k)?"allowed":""}"><b>${demo[k]?.title || k}</b>${user.allowed.includes(k)?"✓ وصول مسموح":"🔒 وصول محظور"}</div>`).join("");
  document.getElementById("serviceContent").innerHTML=`<span class="eyebrow">لوحة التحكم الآمنة</span><h2>${user.name}</h2><p>الدور: <strong>${user.role}</strong> — تم تطبيق صلاحيات الدور في هذه النسخة التجريبية.</p><div class="permission-list">${perms}</div><div style="margin-top:20px;text-align:center"><button class="gold-btn" onclick="closeService()">العودة للموقع</button></div>`;
  document.getElementById("serviceModal").classList.add("show");
}
function closeService(){document.getElementById("serviceModal").classList.remove("show")}
function openService(key){
  const d=demo[key];
  document.getElementById("serviceContent").innerHTML=`<span class="eyebrow">تفاصيل تجريبية</span><h2>${d.title}</h2><p>هذه بيانات Demo مرتبطة بمجال الخدمة، ويمكن استبدالها لاحقاً ببيانات النظام الحقيقية.</p><table class="demo-table">${d.items.map(x=>`<tr><td>${x[0]}</td><td><span class="demo-badge">${x[1]}</span></td></tr>`).join("")}</table><div style="margin-top:20px;text-align:center"><button class="gold-btn" onclick="closeService()">إغلاق</button></div>`;
  document.getElementById("serviceModal").classList.add("show");
}
function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)}
window.addEventListener("click",e=>{if(e.target.classList.contains("modal"))e.target.classList.remove("show")});
