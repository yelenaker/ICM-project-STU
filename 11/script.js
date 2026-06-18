// =========================================================
// DATA STORE
// =========================================================
const COORDINATORS = ['Mgr. Katarína Mrózová', 'Ing. Peter Blaho', 'PhDr. Jana Lukáčová', 'Mgr. Tomáš Horváth'];
const COUNTRIES = [
  {code:'DE', name:'Germany', flag:'🇩🇪'},
  {code:'FR', name:'France', flag:'🇫🇷'},
  {code:'ES', name:'Spain', flag:'🇪🇸'},
  {code:'IT', name:'Italy', flag:'🇮🇹'},
  {code:'PL', name:'Poland', flag:'🇵🇱'},
  {code:'CZ', name:'Czech Republic', flag:'🇨🇿'},
  {code:'AT', name:'Austria', flag:'🇦🇹'},
  {code:'NL', name:'Netherlands', flag:'🇳🇱'},
  {code:'PT', name:'Portugal', flag:'🇵🇹'},
  {code:'HU', name:'Hungary', flag:'🇭🇺'},
  {code:'RO', name:'Romania', flag:'🇷🇴'},
  {code:'SE', name:'Sweden', flag:'🇸🇪'},
  {code:'FI', name:'Finland', flag:'🇫🇮'},
  {code:'BE', name:'Belgium', flag:'🇧🇪'},
];
const UNIVERSITIES = [
  {id:1, country:'DE', name:'TU Berlin', coordinator:COORDINATORS[0], partner:'Prof. Hans Müller', partnerEmail:'h.muller@tu-berlin.de', iro:'Maria Schmidt', iroEmail:'iro@tu-berlin.de', iia:'Active', ais:'Active'},
  {id:2, country:'FR', name:'Université Paris-Saclay', coordinator:COORDINATORS[1], partner:'Dr. Marie Dubois', partnerEmail:'m.dubois@paris-saclay.fr', iro:'Jean Dupont', iroEmail:'iro@paris-saclay.fr', iia:'Active', ais:'Pending'},
  {id:3, country:'ES', name:'Universidad Complutense Madrid', coordinator:COORDINATORS[0], partner:'Prof. Carlos García', partnerEmail:'c.garcia@ucm.es', iro:'Ana López', iroEmail:'iro@ucm.es', iia:'Active', ais:'Active'},
  {id:4, country:'IT', name:'Politecnico di Milano', coordinator:COORDINATORS[2], partner:'Prof. Luca Rossi', partnerEmail:'l.rossi@polimi.it', iro:'Giulia Bianchi', iroEmail:'iro@polimi.it', iia:'Expired', ais:'Active'},
  {id:5, country:'PL', name:'AGH University Kraków', coordinator:COORDINATORS[3], partner:'Dr. Anna Kowalski', partnerEmail:'a.kowalski@agh.edu.pl', iro:'Piotr Nowak', iroEmail:'iro@agh.edu.pl', iia:'Active', ais:'Active'},
  {id:6, country:'AT', name:'TU Wien', coordinator:COORDINATORS[1], partner:'Dr. Klaus Weber', partnerEmail:'k.weber@tuwien.ac.at', iro:'Eva Huber', iroEmail:'iro@tuwien.ac.at', iia:'Active', ais:'Active'},
  {id:7, country:'NL', name:'TU Delft', coordinator:COORDINATORS[0], partner:'Dr. Jan van Berg', partnerEmail:'j.vanberg@tudelft.nl', iro:'Sophie Peters', iroEmail:'iro@tudelft.nl', iia:'Active', ais:'Pending'},
  {id:8, country:'PT', name:'IST Lisboa', coordinator:COORDINATORS[2], partner:'Prof. João Ferreira', partnerEmail:'j.ferreira@ist.utl.pt', iro:'Inês Costa', iroEmail:'iro@ist.utl.pt', iia:'Active', ais:'Active'},
];

const FIRST_NAMES = ['Adam','Barbora','Marek','Zuzana','Tomáš','Lucia','Patrik','Eva','Jakub','Monika','Martin','Petra','Roman','Simona','Ondrej','Kristína','Filip','Tereza','Juraj','Veronika','Denisa','Michal','Alžbeta','Samuel','Natália','Lukáš'];
const LAST_NAMES = ['Novák','Kováč','Horváth','Varga','Tóth','Szabó','Baláž','Krajčí','Blaho','Mináč','Sedlák','Benko','Polák','Rusnák','Farkaš','Šimko','Vlček','Oravec','Baran','Krajňák'];

function rnd(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function rndNum(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function rndDate(from, to) {
  const f = new Date(from), t = new Date(to);
  return new Date(f.getTime() + Math.random() * (t.getTime() - f.getTime()));
}
function fmtDate(d) {
  if (!d) return '';
  const dt = typeof d === 'string' ? new Date(d) : d;
  return dt.toLocaleDateString('en-GB', {day:'2-digit', month:'short', year:'numeric'});
}
function addMonths(date, m) {
  const d = new Date(date);
  d.setMonth(d.getMonth() + m);
  return d;
}

const DOCS = ['Application','Nomination','Learning Agreement','Invitation','Insurance','Visa','Boarding Pass','Confirmation','Transcript','Survey','Final Report'];
const TYPES_STUD = ['Studies', 'Traineeship'];
const TYPES_STAFF = ['Teaching', 'Training'];
const DEGREES = ['Bachelor', 'Master', 'PhD'];
const STATUSES = ['Upcoming', 'Active', 'Completed', 'Cancelled'];
const SENIORITY = ['Junior', 'Mid-level', 'Senior', 'Professor', 'Full Professor'];

function genStudents(n) {
  return Array.from({length: n}, (_, i) => {
    const country = rnd(COUNTRIES);
    const uni = rnd(UNIVERSITIES.filter(u => u.country === country.code)) || rnd(UNIVERSITIES);
    const start = rndDate('2024-08-01', '2025-02-01');
    const end = addMonths(start, rndNum(4, 10));
    const status = rnd(STATUSES);
    const docs = DOCS.reduce((acc, d) => ({...acc, [d]: Math.random() > 0.25}), {});
    const indiv = rndNum(700, 1100) * rndNum(3, 10);
    const travel = rndNum(200, 600);
    const inclusion = Math.random() > 0.6 ? rndNum(200, 500) : 0;
    return {
      id: i + 1,
      firstName: rnd(FIRST_NAMES),
      lastName: rnd(LAST_NAMES),
      dob: fmtDate(rndDate('1998-01-01', '2003-12-31')),
      gender: rnd(['Male', 'Female', 'Other']),
      nationality: 'Slovak',
      coordinator: rnd(COORDINATORS),
      flow: rnd(['Outgoing', 'Incoming']),
      duration: rndNum(4, 10) + ' months',
      country: country.name,
      countryCode: country.code,
      flag: country.flag,
      university: (rnd(UNIVERSITIES.filter(u => u.country === country.code)) || rnd(UNIVERSITIES)).name,
      faculty: rnd(['Faculty of Engineering', 'Faculty of Computer Science', 'Faculty of Architecture', 'Faculty of Civil Engineering', 'Faculty of Chemistry']),
      department: rnd(['Dept. of Informatics', 'Dept. of Mathematics', 'Dept. of Physics', 'Dept. of Electronics']),
      degree: rnd(DEGREES),
      academicYear: '2024/2025',
      studyField: rnd(['Informatics', 'Electrical Engineering', 'Architecture', 'Civil Engineering', 'Mechanical Engineering']),
      iscedCode: rnd(['0611', '0710', '0730', '0732', '0714', '0613']),
      type: rnd(TYPES_STUD),
      startDate: start,
      endDate: end,
      status,
      individualSupport: indiv,
      travelGrant: travel,
      inclusionSupport: inclusion,
      totalGrant: indiv + travel + inclusion,
      finalGrant: status === 'Completed' ? rndNum(indiv + travel - 200, indiv + travel + 100) : 0,
      accPayment: rndNum(200, 500),
      flightPayment: rndNum(100, 300),
      email: `student${i+1}@example.com`,
      phone: `+421 9${rndNum(10,99)} ${rndNum(100,999)} ${rndNum(100,999)}`,
      passport: `SK${rndNum(1000000, 9999999)}`,
      address: `Ul. Hlavná ${rndNum(1,200)}, Bratislava`,
      birthPlace: 'Bratislava',
      documents: docs,
      notes: '',
      driveUrl: 'https://drive.google.com/drive/folders/example',
    };
  });
}

function genStaff(n) {
  return Array.from({length: n}, (_, i) => {
    const country = rnd(COUNTRIES);
    const start = rndDate('2024-09-01', '2025-04-01');
    const end = addMonths(start, rndNum(1, 2));
    const status = rnd(STATUSES);
    const docs = DOCS.reduce((acc, d) => ({...acc, [d]: Math.random() > 0.2}), {});
    return {
      id: i + 1001,
      firstName: rnd(FIRST_NAMES),
      lastName: rnd(LAST_NAMES),
      coordinator: rnd(COORDINATORS),
      flow: rnd(['Outgoing', 'Incoming']),
      country: country.name,
      countryCode: country.code,
      flag: country.flag,
      university: (rnd(UNIVERSITIES.filter(u => u.country === country.code)) || rnd(UNIVERSITIES)).name,
      type: rnd(TYPES_STAFF),
      seniority: rnd(SENIORITY),
      teachingHours: rnd(TYPES_STAFF[0]) === 'Teaching' ? rndNum(8, 20) : 0,
      academicYear: '2024/2025',
      status,
      startDate: start,
      endDate: end,
      totalGrant: rndNum(1000, 3500),
      email: `staff${i+1}@stuba.sk`,
      phone: `+421 2 ${rndNum(100,999)} ${rndNum(10000,99999)}`,
      documents: docs,
      notes: '',
      driveUrl: 'https://drive.google.com/drive/folders/example',
    };
  });
}

// Generate data
const ALL_STUDENTS = genStudents(60);
const ALL_STAFF = genStaff(25);
const ALL_MOBILITIES = [...ALL_STUDENTS, ...ALL_STAFF];

// Current state
let currentLang = 'en';
let currentTheme = 'light';
let currentYear = '2024/2025';
let sidebarCollapsed = false;
let currentPanelPerson = null;
let currentDocType = 'students';
let calendarDate = new Date(2025, 1, 1); // Feb 2025
let calendarView = 'month';
let charts = {};

// =========================================================
// INIT
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
  loadFromStorage();
  renderDashboard();
  renderMobilities();
  renderStudents();
  renderStaff();
  renderDocs();
  renderUniversities();
  renderPartners();
  renderBudget();
  renderCalendar();
  renderTasks();
  renderNotifications();
  openSettingsSection('appearance', document.querySelector('.settings-nav-item'));
  populateFilters();

  // Keyboard shortcut
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openGlobalSearch(); }
    if (e.key === 'Escape') { closePanel(); closeContactModal(); closeAddModal(); closeGlobalSearch(null, true); closeUniModal(); }
  });
});

function loadFromStorage() {
  try {
    const saved = localStorage.getItem('erasmus_prefs');
    if (saved) {
      const p = JSON.parse(saved);
      if (p.theme) setTheme(p.theme);
      if (p.lang) setLang(p.lang);
      if (p.year) { currentYear = p.year; document.getElementById('yearSelector').value = p.year; }
      if (p.sidebar) { sidebarCollapsed = p.sidebar; updateSidebar(); }
    }
  } catch(e) {}
}
function saveToStorage() {
  localStorage.setItem('erasmus_prefs', JSON.stringify({theme:currentTheme, lang:currentLang, year:currentYear, sidebar:sidebarCollapsed}));
}

// =========================================================
// NAVIGATION
// =========================================================
document.querySelectorAll('.nav-item[data-page]').forEach(item => {
  item.addEventListener('click', () => navigateTo(item.dataset.page));
});

function navigateTo(page) {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelector(`.nav-item[data-page="${page}"]`)?.classList.add('active');
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const p = document.getElementById('page-' + page);
  if (p) p.classList.add('active');
  const titles = {
    dashboard:'Dashboard', mobilities:'Mobilities', students:'Students', staff:'Staff',
    documents:'Documents', universities:'Universities', partners:'Partner Managers',
    budget:'Budget', calendar:'Calendar', tasks:'Tasks', notifications:'Notifications', settings:'Settings'
  };
  document.getElementById('currentPageTitle').textContent = titles[page] || page;
}

// =========================================================
// SIDEBAR TOGGLE
// =========================================================
document.getElementById('sidebarToggle').addEventListener('click', () => {
  sidebarCollapsed = !sidebarCollapsed;
  updateSidebar();
  saveToStorage();
});
function updateSidebar() {
  const sb = document.getElementById('sidebar');
  const mc = document.getElementById('mainContent');
  const btn = document.getElementById('sidebarToggle');
  if (sidebarCollapsed) {
    sb.classList.add('collapsed');
    mc.classList.add('expanded');
    btn.textContent = '❯';
  } else {
    sb.classList.remove('collapsed');
    mc.classList.remove('expanded');
    btn.textContent = '❮';
  }
}

// =========================================================
// THEME
// =========================================================
const THEMES = ['light', 'dark', 'stu-blue', 'purple'];
const THEME_ICONS = {light:'🌙', dark:'☀', 'stu-blue':'🎨', purple:'💜'};
function setTheme(t) {
  currentTheme = t;
  document.documentElement.setAttribute('data-theme', t);
  document.getElementById('themeBtn').textContent = THEME_ICONS[t] || '🎨';
  // Redraw charts on theme change
  setTimeout(() => { destroyCharts(); renderDashboard(); renderBudget(); }, 50);
}
function cycleTheme() {
  const idx = THEMES.indexOf(currentTheme);
  setTheme(THEMES[(idx + 1) % THEMES.length]);
  saveToStorage();
}
function destroyCharts() {
  Object.values(charts).forEach(c => { if (c) c.destroy(); });
  charts = {};
}

// =========================================================
// LANGUAGE
// =========================================================
function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.dataset[lang] || el.dataset.en;
  });
  document.getElementById('langBtn').textContent = lang === 'en' ? 'SK' : 'EN';
}
function toggleLang() {
  setLang(currentLang === 'en' ? 'sk' : 'en');
  saveToStorage();
}

// =========================================================
// YEAR CHANGE
// =========================================================
function changeYear(y) {
  currentYear = y;
  renderDashboard();
  saveToStorage();
}

// =========================================================
// FILTER HELPERS
// =========================================================
function getFilteredStudents() {
  const search = (document.getElementById('studSearchInput')?.value || '').toLowerCase();
  const country = document.getElementById('studFilterCountry')?.value;
  const status = document.getElementById('studFilterStatus')?.value;
  const degree = document.getElementById('studFilterDegree')?.value;
  const coord = document.getElementById('studFilterCoord')?.value;
  return ALL_STUDENTS.filter(s => {
    const full = `${s.firstName} ${s.lastName} ${s.email} ${s.university}`.toLowerCase();
    return (!search || full.includes(search))
      && (!country || s.country === country)
      && (!status || s.status === status)
      && (!degree || s.degree === degree)
      && (!coord || s.coordinator === coord);
  });
}
function getFilteredStaff() {
  const search = (document.getElementById('staffSearchInput')?.value || '').toLowerCase();
  const country = document.getElementById('staffFilterCountry')?.value;
  const status = document.getElementById('staffFilterStatus')?.value;
  return ALL_STAFF.filter(s => {
    const full = `${s.firstName} ${s.lastName} ${s.university}`.toLowerCase();
    return (!search || full.includes(search))
      && (!country || s.country === country)
      && (!status || s.status === status);
  });
}
function getFilteredMobilities() {
  const search = (document.getElementById('mobSearchInput')?.value || '').toLowerCase();
  const country = document.getElementById('mobFilterCountry')?.value;
  const status = document.getElementById('mobFilterStatus')?.value;
  const type = document.getElementById('mobFilterType')?.value;
  return ALL_MOBILITIES.filter(m => {
    const full = `${m.firstName} ${m.lastName} ${m.university} ${m.country}`.toLowerCase();
    return (!search || full.includes(search))
      && (!country || m.country === country)
      && (!status || m.status === status)
      && (!type || m.type === type);
  });
}
function populateFilters() {
  const countries = [...new Set(ALL_STUDENTS.map(s => s.country))].sort();
  ['studFilterCountry','staffFilterCountry','mobFilterCountry'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const first = el.options[0];
    el.innerHTML = '';
    el.appendChild(first);
    countries.forEach(c => { const o = document.createElement('option'); o.value = c; o.textContent = c; el.appendChild(o); });
  });
  const coords = [...new Set(ALL_STUDENTS.map(s => s.coordinator))].sort();
  const coordEl = document.getElementById('studFilterCoord');
  if (coordEl) {
    const first = coordEl.options[0];
    coordEl.innerHTML = '';
    coordEl.appendChild(first);
    coords.forEach(c => { const o = document.createElement('option'); o.value = c; o.textContent = c.split(' ').pop(); coordEl.appendChild(o); });
  }
}

// =========================================================
// STATUS BADGE
// =========================================================
function statusBadge(status) {
  const map = {
    'Active': 'green', 'Completed': 'purple', 'Upcoming': 'blue',
    'Cancelled': 'red', 'Active IIA': 'green', 'Expired': 'red', 'Pending': 'orange'
  };
  return `<span class="badge badge-${map[status]||'gray'}">${status}</span>`;
}
function getFlag(countryCode) {
  return COUNTRIES.find(c => c.code === countryCode)?.flag || '🌍';
}

// =========================================================
// DASHBOARD
// =========================================================
function renderDashboard() {
  const yr = currentYear;
  const stud = yr === 'all' ? ALL_STUDENTS : ALL_STUDENTS.filter(s => s.academicYear === yr);
  const stf = yr === 'all' ? ALL_STAFF : ALL_STAFF.filter(s => s.academicYear === yr);
  const all = [...stud, ...stf];
  const totalBudget = all.reduce((s, m) => s + m.totalGrant, 0);
  const usedBudget = all.filter(m => m.status === 'Completed').reduce((s, m) => s + m.totalGrant, 0);

  const kpiData = [
    {icon:'✈', label:'Total Mobilities', value:all.length, color:'var(--accent-blue)', bg:'var(--accent-blue-light)', change:'+12%'},
    {icon:'🎓', label:'Students', value:stud.length, color:'var(--accent-purple)', bg:'var(--accent-purple-light)', change:'+8%'},
    {icon:'👩‍💼', label:'Staff', value:stf.length, color:'var(--accent-green)', bg:'var(--accent-green-light)', change:'+5%'},
    {icon:'🟢', label:'Active', value:all.filter(m=>m.status==='Active').length, color:'var(--accent-green)', bg:'var(--accent-green-light)'},
    {icon:'🔵', label:'Upcoming', value:all.filter(m=>m.status==='Upcoming').length, color:'var(--accent-blue)', bg:'var(--accent-blue-light)'},
    {icon:'✅', label:'Completed', value:all.filter(m=>m.status==='Completed').length, color:'var(--accent-purple)', bg:'var(--accent-purple-light)'},
    {icon:'❌', label:'Cancelled', value:all.filter(m=>m.status==='Cancelled').length, color:'var(--accent-red)', bg:'var(--accent-red-light)'},
    {icon:'💰', label:'Total Budget', value:'€'+Math.round(totalBudget/1000)+'k', color:'var(--accent-blue)', bg:'var(--accent-blue-light)', change:'+3%'},
    {icon:'💸', label:'Used Budget', value:'€'+Math.round(usedBudget/1000)+'k', color:'var(--accent-orange)', bg:'var(--accent-orange-light)'},
    {icon:'💚', label:'Remaining', value:'€'+Math.round((totalBudget-usedBudget)/1000)+'k', color:'var(--accent-green)', bg:'var(--accent-green-light)'},
    {icon:'🌍', label:'Countries', value:[...new Set(all.map(m=>m.country))].length, color:'var(--accent-blue)', bg:'var(--accent-blue-light)'},
    {icon:'🏛', label:'Partner Unis', value:UNIVERSITIES.length, color:'var(--accent-purple)', bg:'var(--accent-purple-light)'},
  ];

  document.getElementById('kpiGrid').innerHTML = kpiData.map(k => `
    <div class="kpi-card" style="--kpi-color:${k.color};--kpi-bg:${k.bg}">
      <div class="kpi-icon">${k.icon}</div>
      <div class="kpi-value">${k.value}</div>
      <div class="kpi-label">${k.label}</div>
      ${k.change ? `<div class="kpi-change up">▲ ${k.change} vs last year</div>` : ''}
    </div>
  `).join('');

  // Alerts
  const missingDocs = all.filter(m => Object.values(m.documents).filter(v=>!v).length > 2).length;
  const missingInsurance = all.filter(m => !m.documents['Insurance']).length;
  const upcoming = all.filter(m => m.status === 'Upcoming').length;
  document.getElementById('alertsSection').innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:10px;margin-bottom:20px">
      ${missingDocs > 0 ? `<div class="alert alert-warning"><span class="alert-icon">⚠</span><div class="alert-content"><div class="alert-title">${missingDocs} participants missing documents</div><div class="alert-desc">Review document checklist</div></div></div>` : ''}
      ${missingInsurance > 0 ? `<div class="alert alert-danger"><span class="alert-icon">🚨</span><div class="alert-content"><div class="alert-title">${missingInsurance} participants missing insurance</div><div class="alert-desc">Insurance is required before departure</div></div></div>` : ''}
      ${upcoming > 0 ? `<div class="alert alert-info"><span class="alert-icon">ℹ</span><div class="alert-content"><div class="alert-title">${upcoming} upcoming mobilities</div><div class="alert-desc">Departing in the next 30 days</div></div></div>` : ''}
      <div class="alert alert-success"><span class="alert-icon">✅</span><div class="alert-content"><div class="alert-title">Budget on track</div><div class="alert-desc">${Math.round(usedBudget/totalBudget*100)}% of total budget used</div></div></div>
    </div>
  `;

  // Charts
  setTimeout(() => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const gridColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)';
    const textColor = isDark ? '#8a9abb' : '#5a6a8a';

    Chart.defaults.color = textColor;
    Chart.defaults.borderColor = gridColor;
    Chart.defaults.font.family = "'DM Sans', sans-serif";
    Chart.defaults.font.size = 11;

    // Chart 1: Mobilities by Country
    const countryCounts = {};
    all.forEach(m => { countryCounts[m.country] = (countryCounts[m.country]||0) + 1; });
    const topCountries = Object.entries(countryCounts).sort((a,b)=>b[1]-a[1]).slice(0,8);
    if (charts.country) charts.country.destroy();
    charts.country = new Chart(document.getElementById('chartCountry'), {
      type: 'bar',
      data: {
        labels: topCountries.map(e=>e[0]),
        datasets: [{
          data: topCountries.map(e=>e[1]),
          backgroundColor: ['#1a56db','#8b5cf6','#0ea371','#f59e0b','#ef4444','#06b6d4','#ec4899','#84cc16'],
          borderRadius: 6,
        }]
      },
      options: { responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}, scales:{x:{grid:{display:false}},y:{grid:{color:gridColor}}} }
    });

    // Chart 2: Budget by Country
    const budgetByCountry = {};
    all.forEach(m => { budgetByCountry[m.country] = (budgetByCountry[m.country]||0) + m.totalGrant; });
    const topBudgetCountries = Object.entries(budgetByCountry).sort((a,b)=>b[1]-a[1]).slice(0,6);
    if (charts.budgetCountry) charts.budgetCountry.destroy();
    charts.budgetCountry = new Chart(document.getElementById('chartBudgetCountry'), {
      type: 'doughnut',
      data: {
        labels: topBudgetCountries.map(e=>e[0]),
        datasets: [{
          data: topBudgetCountries.map(e=>Math.round(e[1])),
          backgroundColor: ['#1a56db','#8b5cf6','#0ea371','#f59e0b','#ef4444','#06b6d4'],
          borderWidth: 2,
          borderColor: isDark ? '#141d2e' : '#ffffff',
        }]
      },
      options: { responsive:true, maintainAspectRatio:false, plugins:{legend:{position:'right',labels:{boxWidth:10}}} }
    });

    // Chart 3: Students vs Staff
    if (charts.studStaff) charts.studStaff.destroy();
    charts.studStaff = new Chart(document.getElementById('chartStudentsStaff'), {
      type: 'doughnut',
      data: {
        labels: ['Students', 'Staff'],
        datasets: [{
          data: [stud.length, stf.length],
          backgroundColor: ['#1a56db','#0ea371'],
          borderWidth: 2,
          borderColor: isDark ? '#141d2e' : '#ffffff',
        }]
      },
      options: { responsive:true, maintainAspectRatio:false, plugins:{legend:{position:'bottom'}} }
    });

    // Chart 4: Mobility Types
    const typeCounts = {};
    all.forEach(m => { typeCounts[m.type] = (typeCounts[m.type]||0)+1; });
    if (charts.types) charts.types.destroy();
    charts.types = new Chart(document.getElementById('chartMobilityTypes'), {
      type: 'pie',
      data: {
        labels: Object.keys(typeCounts),
        datasets: [{
          data: Object.values(typeCounts),
          backgroundColor: ['#1a56db','#8b5cf6','#0ea371','#f59e0b'],
          borderWidth: 2,
          borderColor: isDark ? '#141d2e' : '#ffffff',
        }]
      },
      options: { responsive:true, maintainAspectRatio:false, plugins:{legend:{position:'bottom'}} }
    });

    // Chart 5: Monthly
    const months = ['Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun','Jul'];
    const monthlyData = months.map((_,i) => {
      const m = (i + 7) % 12;
      return all.filter(s => {
        const sd = new Date(s.startDate);
        return sd.getMonth() === m;
      }).length;
    });
    if (charts.monthly) charts.monthly.destroy();
    charts.monthly = new Chart(document.getElementById('chartMonthly'), {
      type: 'line',
      data: {
        labels: months,
        datasets: [{
          label: 'Mobilities Started',
          data: monthlyData,
          borderColor: '#1a56db',
          backgroundColor: 'rgba(26,86,219,0.1)',
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#1a56db',
          pointRadius: 4,
        }]
      },
      options: { responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}, scales:{x:{grid:{display:false}},y:{grid:{color:gridColor},beginAtZero:true}} }
    });
  }, 100);

  // Activity feed
  const activities = [
    {time:'2m ago', user:'Mgr. Mrózová', action:'added student Jakub Novák (Studies → TU Berlin)'},
    {time:'1h ago', user:'Ing. Blaho', action:'updated budget for Germany allocation'},
    {time:'2h ago', user:'Mgr. Mrózová', action:'confirmed insurance for Barbora Kováč'},
    {time:'3h ago', user:'PhDr. Lukáčová', action:'created Learning Agreement for Marek Tóth'},
    {time:'Yesterday', user:'Mgr. Horváth', action:'exported staff mobility report'},
    {time:'Yesterday', user:'Ing. Blaho', action:'added partner manager at Politecnico di Milano'},
  ];
  document.getElementById('activityFeed').innerHTML = activities.map(a => `
    <div class="activity-item">
      <span class="activity-time">${a.time}</span>
      <span><span class="activity-user">${a.user.split(' ').pop()}</span><span class="activity-action">${a.action}</span></span>
    </div>
  `).join('');

  // Upcoming widget
  const upcoming5 = all.filter(m => m.status === 'Upcoming').slice(0, 5);
  document.getElementById('upcomingWidget').innerHTML = upcoming5.length ? upcoming5.map(m => `
    <div style="display:flex;align-items:center;gap:10px;padding:10px 18px;border-bottom:1px solid var(--border-color);cursor:pointer" onclick="openStudentPanel(${m.id})">
      <span style="font-size:20px">${m.flag}</span>
      <div style="flex:1">
        <div style="font-size:12px;font-weight:600">${m.firstName} ${m.lastName}</div>
        <div style="font-size:10px;color:var(--text-muted)">${m.university} • ${m.type}</div>
      </div>
      <div style="text-align:right">
        <div style="font-size:11px;font-weight:600;color:var(--accent-blue)">${fmtDate(m.startDate)}</div>
        <div style="font-size:10px;color:var(--text-muted)">${m.country}</div>
      </div>
    </div>
  `).join('') : '<div class="empty-state"><div class="empty-icon">✈</div><div>No upcoming mobilities</div></div>';
}

// =========================================================
// MOBILITIES TABLE
// =========================================================
function renderMobilities() {
  const data = getFilteredMobilities();
  document.getElementById('mobCount').textContent = `${data.length} mobilities found`;
  document.getElementById('mobilitiesTbody').innerHTML = data.map(m => `
    <tr class="clickable" onclick="openStudentPanel(${m.id})">
      <td>
        <div style="display:flex;align-items:center;gap:8px">
          <div style="width:28px;height:28px;border-radius:6px;background:linear-gradient(135deg,#1a56db,#8b5cf6);display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700;flex-shrink:0">${m.firstName[0]}${m.lastName[0]}</div>
          <span style="font-weight:600">${m.firstName} ${m.lastName}</span>
        </div>
      </td>
      <td><span class="country-flag">${m.flag}</span>${m.country}</td>
      <td style="max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${m.university}</td>
      <td style="font-size:11px">${m.coordinator.split(' ').slice(-1)}</td>
      <td><span class="chip">${m.type}</span></td>
      <td style="font-family:var(--font-mono);font-size:11px">${fmtDate(m.startDate)}</td>
      <td style="font-family:var(--font-mono);font-size:11px">${fmtDate(m.endDate)}</td>
      <td>${statusBadge(m.status)}</td>
      <td style="font-weight:600;color:var(--accent-green)">€${m.totalGrant.toLocaleString()}</td>
      <td onclick="event.stopPropagation()">
        <div class="row-actions">
          <button class="btn btn-ghost btn-xs" onclick="openStudentPanel(${m.id})">👁</button>
          <button class="btn btn-ghost btn-xs" onclick="openGDrive()">📁</button>
          <button class="btn btn-ghost btn-xs" onclick="openContactModal(${m.id})">✉</button>
        </div>
      </td>
    </tr>
  `).join('') || '<tr><td colspan="10" style="text-align:center;padding:30px;color:var(--text-muted)">No mobilities found</td></tr>';
}
function filterMobilities() { renderMobilities(); }

// =========================================================
// STUDENTS TABLE
// =========================================================
function renderStudents() {
  const data = getFilteredStudents();
  document.getElementById('studCount').textContent = `${data.length} students`;
  document.getElementById('studentsTbody').innerHTML = data.map(s => `
    <tr class="clickable">
      <td onclick="event.stopPropagation()"><input type="checkbox"></td>
      <td onclick="openStudentPanel(${s.id})" style="cursor:pointer">
        <div style="display:flex;align-items:center;gap:8px">
          <div style="width:28px;height:28px;border-radius:6px;background:linear-gradient(135deg,#1a56db,#8b5cf6);display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700;flex-shrink:0">${s.firstName[0]}${s.lastName[0]}</div>
          <span style="font-weight:600">${s.firstName} ${s.lastName}</span>
        </div>
      </td>
      <td><span class="country-flag">${s.flag}</span>${s.country}</td>
      <td style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:11px">${s.university}</td>
      <td style="font-size:11px">${s.coordinator.split(' ').slice(-1)}</td>
      <td><span class="chip">${s.degree}</span></td>
      <td style="font-size:11px;font-family:var(--font-mono)">${fmtDate(s.startDate)} – ${fmtDate(s.endDate)}</td>
      <td>${statusBadge(s.status)}</td>
      <td style="font-weight:600;color:var(--accent-green)">€${s.totalGrant.toLocaleString()}</td>
      <td onclick="event.stopPropagation()">
        <div class="row-actions">
          <button class="btn btn-ghost btn-xs" onclick="openStudentPanel(${s.id})">👁</button>
          <button class="btn btn-ghost btn-xs" onclick="openGDrive()">📁</button>
          <button class="btn btn-ghost btn-xs" onclick="openContactModal()">✉</button>
        </div>
      </td>
    </tr>
  `).join('');
}
function filterStudents() { renderStudents(); }
function selectAll(cb, tableId) {
  document.querySelectorAll(`#${tableId} input[type=checkbox]`).forEach(c => c.checked = cb.checked);
}

// =========================================================
// STAFF TABLE
// =========================================================
function renderStaff() {
  const data = getFilteredStaff();
  document.getElementById('staffCount').textContent = `${data.length} staff members`;
  document.getElementById('staffTbody').innerHTML = data.map(s => `
    <tr class="clickable">
      <td onclick="event.stopPropagation()"><input type="checkbox"></td>
      <td onclick="openStaffPanel(${s.id})" style="cursor:pointer">
        <div style="display:flex;align-items:center;gap:8px">
          <div style="width:28px;height:28px;border-radius:6px;background:linear-gradient(135deg,#0ea371,#1a56db);display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700;flex-shrink:0">${s.firstName[0]}${s.lastName[0]}</div>
          <span style="font-weight:600">${s.firstName} ${s.lastName}</span>
        </div>
      </td>
      <td><span class="country-flag">${s.flag}</span>${s.country}</td>
      <td style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:11px">${s.university}</td>
      <td style="font-size:11px">${s.coordinator.split(' ').slice(-1)}</td>
      <td><span class="chip">${s.type}</span></td>
      <td style="font-size:11px;font-family:var(--font-mono)">${fmtDate(s.startDate)} – ${fmtDate(s.endDate)}</td>
      <td>${statusBadge(s.status)}</td>
      <td style="font-weight:600;color:var(--accent-green)">€${s.totalGrant.toLocaleString()}</td>
      <td onclick="event.stopPropagation()">
        <div class="row-actions">
          <button class="btn btn-ghost btn-xs" onclick="openStaffPanel(${s.id})">👁</button>
          <button class="btn btn-ghost btn-xs" onclick="openGDrive()">📁</button>
        </div>
      </td>
    </tr>
  `).join('');
}
function filterStaff() { renderStaff(); }

// =========================================================
// DOCUMENTS
// =========================================================
function renderDocs() {
  const data = currentDocType === 'students' ? ALL_STUDENTS : ALL_STAFF;
  const search = (document.getElementById('docSearchInput')?.value || '').toLowerCase();
  const filtered = data.filter(p => `${p.firstName} ${p.lastName}`.toLowerCase().includes(search));
  document.getElementById('docsTbody').innerHTML = filtered.map(p => {
    const checked = Object.values(p.documents).filter(Boolean).length;
    const total = DOCS.length;
    const pct = Math.round(checked/total*100);
    const missing = DOCS.filter(d => !p.documents[d]);
    const color = pct >= 90 ? 'green' : pct >= 60 ? 'orange' : 'red';
    return `
      <tr style="cursor:pointer" onclick="openStudentPanel(${p.id})">
        <td>
          <div style="display:flex;align-items:center;gap:8px">
            <div style="width:26px;height:26px;border-radius:6px;background:linear-gradient(135deg,#1a56db,#8b5cf6);display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:700">${p.firstName[0]}${p.lastName[0]}</div>
            <span style="font-weight:600">${p.firstName} ${p.lastName}</span>
          </div>
        </td>
        <td style="font-size:11px">${p.coordinator.split(' ').slice(-1)}</td>
        <td style="font-size:11px;max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.university}</td>
        <td>
          <div style="display:flex;align-items:center;gap:8px;min-width:140px">
            <div style="flex:1">
              <div class="progress-bar-bg"><div class="progress-bar-fill ${color}" style="width:${pct}%"></div></div>
            </div>
            <span style="font-size:11px;font-weight:600;min-width:36px">${checked}/${total}</span>
          </div>
        </td>
        <td>
          ${missing.length > 0 
            ? missing.slice(0,3).map(d=>`<span class="chip" style="background:var(--accent-red-light);color:var(--accent-red);border-color:var(--accent-red)">${d}</span> `).join('') + (missing.length > 3 ? `<span class="chip">+${missing.length-3}</span>` : '')
            : '<span style="color:var(--accent-green);font-size:11px;font-weight:600">✓ Complete</span>'}
        </td>
        <td onclick="event.stopPropagation()">
          <div class="row-actions">
            <button class="btn btn-ghost btn-xs" onclick="openStudentPanel(${p.id})">👁</button>
            <button class="btn btn-ghost btn-xs" onclick="openContactModal()">✉</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}
function switchDocType(type, btn) {
  currentDocType = type;
  document.querySelectorAll('#docTypeSwitch .tab-switch-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderDocs();
}
function filterDocs() { renderDocs(); }

// =========================================================
// UNIVERSITIES
// =========================================================
function renderUniversities() {
  const search = (document.getElementById('uniSearchInput')?.value || '').toLowerCase();
  const unis = UNIVERSITIES.filter(u => u.name.toLowerCase().includes(search) || u.country.toLowerCase().includes(search));
  document.getElementById('uniCount').textContent = `${unis.length} partner universities`;
  document.getElementById('uniGrid').innerHTML = unis.map(u => {
    const country = COUNTRIES.find(c => c.code === u.country);
    const mobs = ALL_STUDENTS.filter(s => s.university === u.name).length + ALL_STAFF.filter(s => s.university === u.name).length;
    const budget = [...ALL_STUDENTS, ...ALL_STAFF].filter(m => m.university === u.name).reduce((s,m) => s + m.totalGrant, 0);
    return `
      <div class="uni-card" onclick="openUniModal(${u.id})">
        <div class="uni-card-top">
          <div class="uni-logo">${country?.flag || '🏛'}</div>
          <div>
            <div class="uni-card-name">${u.name}</div>
            <div class="uni-card-country">${country?.name || u.country}</div>
          </div>
        </div>
        <div style="font-size:11px;color:var(--text-muted);margin-bottom:10px">Coordinator: ${u.coordinator.split(' ').pop()}</div>
        <div style="font-size:11px;margin-bottom:10px">Partner: <span style="font-weight:600">${u.partner}</span></div>
        <div style="display:flex;gap:6px;margin-bottom:10px">
          ${statusBadge(u.iia)} <span style="font-size:10px;color:var(--text-muted)">IIA</span>
          ${statusBadge(u.ais)} <span style="font-size:10px;color:var(--text-muted)">AIS</span>
        </div>
        <div class="uni-card-stats">
          <div class="uni-stat"><div class="uni-stat-val">${mobs}</div><div class="uni-stat-lbl">Mobilities</div></div>
          <div class="uni-stat"><div class="uni-stat-val">€${Math.round(budget/1000)}k</div><div class="uni-stat-lbl">Budget</div></div>
        </div>
      </div>
    `;
  }).join('');
}
function filterUniversities() { renderUniversities(); }
function openUniModal(uniId) {
  const u = UNIVERSITIES.find(x => x.id === uniId);
  if (!u) return;
  const country = COUNTRIES.find(c => c.code === u.country);
  const mobs = ALL_STUDENTS.filter(s => s.university === u.name).concat(ALL_STAFF.filter(s => s.university === u.name));
  document.getElementById('uniModalTitle').textContent = `${country?.flag} ${u.name}`;
  document.getElementById('uniModalBody').innerHTML = `
    <div style="display:flex;flex-direction:column;gap:20px">
      <div>
        <div class="form-section-title">🌍 General Information</div>
        <div class="form-grid">
          <div class="form-group"><label class="form-label">Country</label><input class="form-input" value="${country?.name || u.country}" readonly></div>
          <div class="form-group"><label class="form-label">University Name</label><input class="form-input" value="${u.name}" readonly></div>
        </div>
      </div>
      <div>
        <div class="form-section-title">📞 Contacts</div>
        <div class="form-grid">
          <div class="form-group"><label class="form-label">Partner Manager</label><input class="form-input" value="${u.partner}"></div>
          <div class="form-group"><label class="form-label">Partner Email</label><input class="form-input" value="${u.partnerEmail}"></div>
          <div class="form-group"><label class="form-label">IRO Contact</label><input class="form-input" value="${u.iro}"></div>
          <div class="form-group"><label class="form-label">IRO Email</label><input class="form-input" value="${u.iroEmail}"></div>
        </div>
      </div>
      <div>
        <div class="form-section-title">📋 Project Status</div>
        <div class="form-grid">
          <div class="form-group"><label class="form-label">IIA Status</label>${statusBadge(u.iia)}</div>
          <div class="form-group"><label class="form-label">AIS Status</label>${statusBadge(u.ais)}</div>
        </div>
      </div>
      <div>
        <div class="form-section-title">✈ Connected Mobilities (${mobs.length})</div>
        <div style="max-height:150px;overflow-y:auto">
          ${mobs.slice(0,10).map(m=>`
            <div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--border-color);font-size:12px">
              <span>${m.firstName} ${m.lastName}</span>
              <span class="chip">${m.type}</span>
              ${statusBadge(m.status)}
              <span style="margin-left:auto;font-weight:600;color:var(--accent-green)">€${m.totalGrant.toLocaleString()}</span>
            </div>
          `).join('')}
        </div>
      </div>
      <div>
        <div class="form-section-title">📝 Notes</div>
        <textarea class="form-textarea" placeholder="Internal office notes..."></textarea>
      </div>
    </div>
  `;
  document.getElementById('uniModalOverlay').classList.add('open');
  document.getElementById('uniModal').classList.add('open');
}
function closeUniModal() {
  document.getElementById('uniModalOverlay').classList.remove('open');
  document.getElementById('uniModal').classList.remove('open');
}

// =========================================================
// PARTNER MANAGERS
// =========================================================
function renderPartners() {
  document.getElementById('partnersTbody').innerHTML = UNIVERSITIES.map(u => {
    const country = COUNTRIES.find(c => c.code === u.country);
    return `
      <tr>
        <td><span class="country-flag">${country?.flag}</span>${country?.name || u.country}</td>
        <td style="font-weight:600">${u.name}</td>
        <td style="font-size:11px">${u.coordinator.split(' ').pop()}</td>
        <td style="font-size:11px">Mgr. Mrózová</td>
        <td style="font-weight:500">${u.partner}</td>
        <td><a href="mailto:${u.partnerEmail}" style="color:var(--accent-blue);font-size:11px" onclick="event.stopPropagation()">${u.partnerEmail}</a></td>
        <td>${statusBadge(u.iia)}</td>
        <td>
          <div class="row-actions" style="opacity:1">
            <button class="btn btn-ghost btn-xs" onclick="openUniModal(${u.id})">👁</button>
            <button class="btn btn-ghost btn-xs">✏</button>
            <button class="btn btn-ghost btn-xs" style="color:var(--accent-red)">🗑</button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// =========================================================
// BUDGET
// =========================================================
function renderBudget() {
  const all = [...ALL_STUDENTS, ...ALL_STAFF];
  const totalBudget = all.reduce((s,m) => s + m.totalGrant, 0);
  const usedBudget = all.filter(m => m.status === 'Completed').reduce((s,m) => s + m.totalGrant, 0);
  const remaining = totalBudget - usedBudget;

  document.getElementById('budgetKpis').innerHTML = [
    {icon:'💰', label:'Total Budget', value:'€'+totalBudget.toLocaleString(), color:'var(--accent-blue)', bg:'var(--accent-blue-light)'},
    {icon:'💸', label:'Used Budget', value:'€'+usedBudget.toLocaleString(), color:'var(--accent-orange)', bg:'var(--accent-orange-light)'},
    {icon:'💚', label:'Remaining', value:'€'+remaining.toLocaleString(), color:'var(--accent-green)', bg:'var(--accent-green-light)'},
  ].map(k => `
    <div class="kpi-card" style="--kpi-color:${k.color};--kpi-bg:${k.bg}">
      <div class="kpi-icon">${k.icon}</div>
      <div class="kpi-value">${k.value}</div>
      <div class="kpi-label">${k.label}</div>
    </div>
  `).join('');

  // Budget by country table
  const byCountry = {};
  all.forEach(m => {
    if (!byCountry[m.country]) byCountry[m.country] = {flag: m.flag, total:0, used:0, count:0};
    byCountry[m.country].total += m.totalGrant;
    if (m.status === 'Completed') byCountry[m.country].used += m.totalGrant;
    byCountry[m.country].count++;
  });
  const countryRows = Object.entries(byCountry).sort((a,b) => b[1].total - a[1].total);

  document.getElementById('budgetTbody').innerHTML = countryRows.map(([country, d], i) => {
    const pct = Math.round(d.used/d.total*100);
    const color = pct > 85 ? 'red' : pct > 60 ? 'orange' : 'green';
    const bgColor = pct > 85 ? 'var(--accent-red-light)' : pct > 60 ? 'var(--accent-orange-light)' : 'var(--accent-green-light)';
    return `
      <tr class="budget-country-row" onclick="toggleBudgetExpand('budexp-${i}',this)">
        <td style="font-size:12px;color:var(--text-muted)">▶</td>
        <td style="font-weight:600">${d.flag} ${country}</td>
        <td style="font-weight:600">€${d.total.toLocaleString()}</td>
        <td style="color:var(--accent-orange)">€${d.used.toLocaleString()}</td>
        <td style="color:var(--accent-green)">€${(d.total-d.used).toLocaleString()}</td>
        <td>${d.count}</td>
        <td>
          <div class="budget-bar-wrap">
            <div style="flex:1;height:6px;background:var(--bg-tertiary);border-radius:10px;overflow:hidden">
              <div style="height:100%;width:${pct}%;background:var(--accent-${color});border-radius:10px;transition:width 0.6s ease"></div>
            </div>
            <span style="font-size:11px;font-weight:600;color:var(--accent-${color})">${pct}%</span>
          </div>
        </td>
      </tr>
      <tr class="budget-expand" id="budexp-${i}">
        <td colspan="7">
          <div class="budget-breakdown">
            ${['Teaching','Training','Studies','PhD','Incoming','Outgoing'].map(t => {
              const tv = all.filter(m => m.country === country && m.type === t || m.flow === t).reduce((s,m)=>s+m.totalGrant,0) || rndNum(500,5000);
              const tu = Math.round(tv * (0.3 + Math.random() * 0.5));
              const tp = Math.round(tu/tv*100);
              return `
                <div class="budget-breakdown-item">
                  <div class="label">${t}</div>
                  <div class="value">€${tv.toLocaleString()}</div>
                  <div class="bar"><div class="progress-bar-bg"><div class="progress-bar-fill ${tp>80?'red':tp>50?'orange':'green'}" style="width:${tp}%"></div></div></div>
                  <div style="font-size:10px;color:var(--text-muted);margin-top:2px">${tp}% used</div>
                </div>
              `;
            }).join('')}
          </div>
        </td>
      </tr>
    `;
  }).join('');

  // Budget charts
  setTimeout(() => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const gridColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)';

    if (charts.budgetByCountry) charts.budgetByCountry.destroy();
    charts.budgetByCountry = new Chart(document.getElementById('chartBudgetByCountry'), {
      type: 'bar',
      data: {
        labels: countryRows.slice(0,8).map(([c]) => c),
        datasets: [
          {label:'Total', data: countryRows.slice(0,8).map(([,d]) => d.total), backgroundColor:'rgba(26,86,219,0.3)', borderColor:'#1a56db', borderWidth:2, borderRadius:4},
          {label:'Used', data: countryRows.slice(0,8).map(([,d]) => d.used), backgroundColor:'rgba(14,163,113,0.5)', borderColor:'#0ea371', borderWidth:2, borderRadius:4},
        ]
      },
      options: { responsive:true, maintainAspectRatio:false, scales:{x:{grid:{display:false}},y:{grid:{color:gridColor}}}, plugins:{legend:{labels:{boxWidth:10}}} }
    });

    const typeData = ['Studies','Traineeship','Teaching','Training'];
    const typeValues = typeData.map(t => all.filter(m=>m.type===t).reduce((s,m)=>s+m.totalGrant,0));
    if (charts.budgetByType) charts.budgetByType.destroy();
    charts.budgetByType = new Chart(document.getElementById('chartBudgetByType'), {
      type: 'doughnut',
      data: {
        labels: typeData,
        datasets: [{data:typeValues, backgroundColor:['#1a56db','#8b5cf6','#0ea371','#f59e0b'], borderWidth:2, borderColor:isDark?'#141d2e':'#fff'}]
      },
      options: { responsive:true, maintainAspectRatio:false, plugins:{legend:{position:'bottom',labels:{boxWidth:10}}} }
    });

    const usagePct = Math.round(usedBudget/totalBudget*100);
    if (charts.budgetUsage) charts.budgetUsage.destroy();
    charts.budgetUsage = new Chart(document.getElementById('chartBudgetUsage'), {
      type: 'doughnut',
      data: {
        labels: ['Used', 'Remaining'],
        datasets: [{
          data: [usagePct, 100-usagePct],
          backgroundColor: ['#1a56db', isDark?'#1e2a45':'#e2e8f5'],
          borderWidth: 0,
        }]
      },
      options: {
        responsive:true, maintainAspectRatio:false, cutout:'75%',
        plugins:{legend:{display:false}, tooltip:{enabled:false}},
      },
      plugins: [{
        id: 'centerText',
        afterDraw(chart) {
          const {ctx, width, height} = chart;
          ctx.save();
          ctx.font = 'bold 28px DM Sans';
          ctx.fillStyle = isDark?'#e8edf8':'#0d1b3e';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(usagePct+'%', width/2, height/2 - 8);
          ctx.font = '11px DM Sans';
          ctx.fillStyle = isDark?'#8a9abb':'#5a6a8a';
          ctx.fillText('Budget Used', width/2, height/2 + 16);
          ctx.restore();
        }
      }]
    });
  }, 150);
}
function toggleBudgetExpand(id, row) {
  const exp = document.getElementById(id);
  if (!exp) return;
  const isOpen = exp.classList.contains('open');
  exp.classList.toggle('open');
  const arrow = row.querySelector('td:first-child');
  if (arrow) arrow.textContent = isOpen ? '▶' : '▼';
}

// =========================================================
// CALENDAR
// =========================================================
function renderCalendar() {
  const container = document.getElementById('calendarContainer');
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();
  const today = new Date();

  const allEvents = ALL_MOBILITIES.map(m => ({
    name: `${m.firstName} ${m.lastName}`,
    startDate: new Date(m.startDate),
    endDate: new Date(m.endDate),
    type: m.status,
    flag: m.flag,
  }));

  let html = `
    <div class="calendar-wrap">
      <div class="calendar-header">
        <button class="btn btn-ghost btn-sm" onclick="calendarDate.setMonth(calendarDate.getMonth()-1);renderCalendar()">◀ Prev</button>
        <div class="calendar-title">${monthNames[month]} ${year}</div>
        <button class="btn btn-ghost btn-sm" onclick="calendarDate.setMonth(calendarDate.getMonth()+1);renderCalendar()">Next ▶</button>
      </div>
      <div class="calendar-grid">
        ${['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d=>`<div class="cal-day-header">${d}</div>`).join('')}
  `;

  const startPad = firstDay;
  for (let i = startPad - 1; i >= 0; i--) {
    html += `<div class="cal-day other-month"><div class="cal-day-num">${daysInPrevMonth - i}</div></div>`;
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const isToday = date.toDateString() === today.toDateString();
    const departures = allEvents.filter(e => e.startDate.toDateString() === date.toDateString());
    const arrivals = allEvents.filter(e => e.endDate.toDateString() === date.toDateString());

    html += `
      <div class="cal-day ${isToday ? 'today' : ''}">
        <div class="cal-day-num">${isToday ? `<span class="cal-today-num">${day}</span>` : day}</div>
        ${departures.slice(0,2).map(e => `<div class="cal-event cal-event-departure">✈ ${e.flag} ${e.name.split(' ')[0]}</div>`).join('')}
        ${arrivals.slice(0,1).map(e => `<div class="cal-event cal-event-arrival">🏠 ${e.flag} ${e.name.split(' ')[0]}</div>`).join('')}
        ${departures.length + arrivals.length > 3 ? `<div class="cal-event" style="background:var(--bg-tertiary);color:var(--text-muted)">+${departures.length+arrivals.length-3} more</div>` : ''}
      </div>
    `;
  }

  const totalCells = Math.ceil((startPad + daysInMonth) / 7) * 7;
  const endPad = totalCells - startPad - daysInMonth;
  for (let i = 1; i <= endPad; i++) {
    html += `<div class="cal-day other-month"><div class="cal-day-num">${i}</div></div>`;
  }

  html += '</div></div>';
  container.innerHTML = html;
}

// =========================================================
// TASKS
// =========================================================
const TASKS_DATA = {
  todo: [
    {id:1, title:'Send invitation letters – TU Berlin batch', assignee:'MK', deadline:'2025-02-10', priority:'high'},
    {id:2, title:'Update IIA agreement with Politecnico', assignee:'PB', deadline:'2025-02-15', priority:'medium'},
    {id:3, title:'Collect insurance documents from incoming students', assignee:'JL', deadline:'2025-02-08', priority:'high'},
  ],
  inprogress: [
    {id:4, title:'Prepare Q3 budget report for KA131', assignee:'MK', deadline:'2025-02-12', priority:'high'},
    {id:5, title:'Review Learning Agreements – Spain cohort', assignee:'TH', deadline:'2025-02-20', priority:'medium'},
  ],
  done: [
    {id:6, title:'Upload nomination files to AIS system', assignee:'MK', deadline:'2025-01-31', priority:'low'},
    {id:7, title:'Send welcome email to incoming students', assignee:'JL', deadline:'2025-01-28', priority:'medium'},
    {id:8, title:'Create Google Drive folders for new cohort', assignee:'PB', deadline:'2025-01-25', priority:'low'},
  ]
};
function renderTasks() {
  const cols = [
    {key:'todo', label:'📋 To Do', color:'var(--text-muted)'},
    {key:'inprogress', label:'⚡ In Progress', color:'var(--accent-orange)'},
    {key:'done', label:'✅ Completed', color:'var(--accent-green)'},
  ];
  document.getElementById('tasksBoard').innerHTML = cols.map(col => `
    <div class="task-col">
      <div class="task-col-header">
        <span class="task-col-title" style="color:${col.color}">${col.label}</span>
        <span class="task-count">${TASKS_DATA[col.key].length}</span>
      </div>
      ${TASKS_DATA[col.key].map(task => `
        <div class="task-card">
          <div class="task-title">${task.title}</div>
          <div class="task-meta">
            <div class="task-assignee">
              <div class="task-avatar">${task.assignee}</div>
              ${task.assignee}
            </div>
            <span class="badge badge-${task.priority==='high'?'red':task.priority==='medium'?'orange':'gray'}">${task.priority}</span>
            <span class="task-deadline ${new Date(task.deadline) < new Date() && col.key !== 'done' ? 'overdue' : ''}">📅 ${fmtDate(task.deadline)}</span>
          </div>
        </div>
      `).join('')}
      <button class="btn btn-ghost btn-sm" style="width:100%;margin-top:6px;justify-content:center" onclick="openAddModal('task')">+ Add Task</button>
    </div>
  `).join('');
}

// =========================================================
// NOTIFICATIONS
// =========================================================
function renderNotifications() {
  const groups = [
    {
      label: '🚨 Critical', color: 'var(--accent-red)',
      items: [
        {icon:'🚨', bg:'var(--accent-red-light)', title:'3 participants missing insurance', desc:'Jakub Novák, Barbora Kováč, Martin Blaho - departure in 5 days', time:'Just now', unread:true},
        {icon:'⚠', bg:'var(--accent-red-light)', title:'Budget exceeded - Italy', desc:'Politecnico di Milano allocation exceeded by €1,234', time:'2h ago', unread:true},
      ]
    },
    {
      label: '⚠ Warning', color: 'var(--accent-orange)',
      items: [
        {icon:'📋', bg:'var(--accent-orange-light)', title:'5 missing Learning Agreements', desc:'Deadline in 3 days - Germany cohort', time:'3h ago', unread:true},
        {icon:'📅', bg:'var(--accent-orange-light)', title:'8 mobilities starting next week', desc:'Confirm all documents and travel arrangements', time:'1d ago', unread:false},
        {icon:'📊', bg:'var(--accent-orange-light)', title:'7 missing Final Reports', desc:'Spain cohort - deadline passed', time:'2d ago', unread:false},
      ]
    },
    {
      label: 'ℹ Info', color: 'var(--accent-blue)',
      items: [
        {icon:'🎓', bg:'var(--accent-blue-light)', title:'New student registration', desc:'Adam Sedlák applied for Studies at TU Berlin', time:'1h ago', unread:true},
        {icon:'✈', bg:'var(--accent-blue-light)', title:'Mobility completed', desc:'Zuzana Horáková returned from Université Paris-Saclay', time:'3h ago', unread:true},
      ]
    }
  ];

  document.getElementById('notificationsContent').innerHTML = groups.map(g => `
    <div class="card" style="margin-bottom:16px">
      <div class="card-header">
        <span class="card-title" style="color:${g.color}">${g.label}</span>
        <span style="font-size:11px;color:var(--text-muted)">${g.items.length} notifications</span>
      </div>
      <div class="card-body" style="padding:0 16px">
        ${g.items.map(n => `
          <div class="notif-item" style="${n.unread ? 'border-left:3px solid var(--accent-blue);padding-left:10px' : ''}">
            <div class="notif-icon-wrap" style="background:${n.bg}">${n.icon}</div>
            <div class="notif-body">
              <div class="notif-title">${n.title}</div>
              <div class="notif-desc">${n.desc}</div>
              <div class="notif-time">${n.time}</div>
            </div>
            ${n.unread ? '<div class="notif-dot"></div>' : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}
function markAllRead() {
  document.querySelectorAll('.notif-dot').forEach(d => d.remove());
  document.querySelectorAll('.notif-item').forEach(n => n.style.borderLeft = '');
  document.getElementById('notifSubtitle').textContent = 'All caught up!';
  document.querySelector('.header-badge')?.remove();
  document.querySelector('.nav-badge')?.parentElement?.querySelector('.nav-badge') && null;
}

// =========================================================
// STUDENT / STAFF PANEL
// =========================================================
function openStudentPanel(id) {
  const person = id ? (ALL_STUDENTS.find(s => s.id === id) || ALL_STAFF.find(s => s.id === id)) : null;
  if (!person && id) return;
  currentPanelPerson = person || {
    firstName:'New', lastName:'Student', flag:'🌍', university:'', country:'',
    coordinator:'', type:'Studies', status:'Upcoming', degree:'Master',
    documents: DOCS.reduce((acc,d) => ({...acc,[d]:false}), {}), notes:''
  };
  populatePanel(currentPanelPerson, 'student');
  document.getElementById('panelOverlay').classList.add('open');
  document.getElementById('slidePanel').classList.add('open');
  switchPanelTab('general', document.querySelector('.panel-tab'));
}
function openStaffPanel(id) {
  const person = id ? ALL_STAFF.find(s => s.id === id) : null;
  currentPanelPerson = person || {
    firstName:'New', lastName:'Staff', flag:'🌍', university:'', country:'',
    coordinator:'', type:'Teaching', status:'Upcoming', seniority:'Senior',
    documents: DOCS.reduce((acc,d) => ({...acc,[d]:false}), {}), notes:''
  };
  populatePanel(currentPanelPerson, 'staff');
  document.getElementById('panelOverlay').classList.add('open');
  document.getElementById('slidePanel').classList.add('open');
}
function populatePanel(p, type) {
  document.getElementById('panelAvatar').textContent = (p.firstName[0]||'?') + (p.lastName[0]||'?');
  document.getElementById('panelName').textContent = `${p.firstName} ${p.lastName}`;
  document.getElementById('panelFlag').textContent = p.flag || '🌍';
  document.getElementById('panelUniversity').textContent = p.university || '';
  document.getElementById('panelBadge').innerHTML = p.status ? statusBadge(p.status) : '';

  const tabsEl = document.getElementById('panelTabs');
  tabsEl.querySelectorAll('.panel-tab').forEach(t => t.classList.remove('active'));
  tabsEl.querySelectorAll('.panel-tab')[0]?.classList.add('active');

  renderPanelBody(p, 'general', type);
}
function switchPanelTab(tab, el) {
  document.querySelectorAll('.panel-tab').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');
  if (!currentPanelPerson) return;
  const type = ALL_STAFF.find(s => s.id === currentPanelPerson.id) ? 'staff' : 'student';
  renderPanelBody(currentPanelPerson, tab, type);
}
function renderPanelBody(p, tab, type) {
  const el = document.getElementById('panelBody');
  const docsChecked = p.documents ? Object.values(p.documents).filter(Boolean).length : 0;
  const bodies = {
    general: `
      <div class="form-section-title">👤 Personal Information</div>
      <div class="form-grid">
        <div class="form-group"><label class="form-label">First Name</label><input class="form-input" value="${p.firstName||''}"></div>
        <div class="form-group"><label class="form-label">Last Name</label><input class="form-input" value="${p.lastName||''}"></div>
        <div class="form-group"><label class="form-label">Date of Birth</label><input class="form-input" value="${p.dob||''}"></div>
        <div class="form-group"><label class="form-label">Gender</label>
          <select class="form-select"><option>Male</option><option>Female</option><option>Other</option></select>
        </div>
        <div class="form-group"><label class="form-label">Nationality</label><input class="form-input" value="${p.nationality||'Slovak'}"></div>
      </div>
    `,
    mobility: `
      <div class="form-section-title">✈ Mobility Information</div>
      <div class="form-grid">
        <div class="form-group"><label class="form-label">Coordinator</label><select class="form-select">${COORDINATORS.map(c=>`<option ${c===p.coordinator?'selected':''}>${c}</option>`).join('')}</select></div>
        <div class="form-group"><label class="form-label">Flow</label><select class="form-select"><option ${p.flow==='Outgoing'?'selected':''}>Outgoing</option><option ${p.flow==='Incoming'?'selected':''}>Incoming</option></select></div>
        <div class="form-group"><label class="form-label">Duration</label><input class="form-input" value="${p.duration||''}"></div>
        <div class="form-group"><label class="form-label">Country</label><input class="form-input" value="${p.country||''}"></div>
        <div class="form-group full"><label class="form-label">University</label><input class="form-input" value="${p.university||''}"></div>
        <div class="form-group"><label class="form-label">Faculty</label><input class="form-input" value="${p.faculty||''}"></div>
        <div class="form-group"><label class="form-label">Department</label><input class="form-input" value="${p.department||''}"></div>
        <div class="form-group"><label class="form-label">Start Date</label><input class="form-input" type="date" value="${p.startDate ? new Date(p.startDate).toISOString().split('T')[0] : ''}"></div>
        <div class="form-group"><label class="form-label">End Date</label><input class="form-input" type="date" value="${p.endDate ? new Date(p.endDate).toISOString().split('T')[0] : ''}"></div>
      </div>
    `,
    academic: `
      <div class="form-section-title">📚 Academic Information</div>
      <div class="form-grid">
        ${type==='student' ? `
          <div class="form-group"><label class="form-label">Degree</label><select class="form-select">${DEGREES.map(d=>`<option ${d===p.degree?'selected':''}>${d}</option>`).join('')}</select></div>
          <div class="form-group"><label class="form-label">Academic Year</label><input class="form-input" value="${p.academicYear||'2024/2025'}"></div>
          <div class="form-group"><label class="form-label">Study Field</label><input class="form-input" value="${p.studyField||''}"></div>
          <div class="form-group"><label class="form-label">ISCED Code</label><input class="form-input" value="${p.iscedCode||''}"></div>
        ` : `
          <div class="form-group"><label class="form-label">Seniority</label><select class="form-select">${SENIORITY.map(s=>`<option ${s===p.seniority?'selected':''}>${s}</option>`).join('')}</select></div>
          <div class="form-group"><label class="form-label">Teaching Hours</label><input class="form-input" type="number" value="${p.teachingHours||0}"></div>
          <div class="form-group"><label class="form-label">Academic Year</label><input class="form-input" value="${p.academicYear||'2024/2025'}"></div>
        `}
        <div class="form-group"><label class="form-label">Mobility Type</label><select class="form-select">${(type==='student'?TYPES_STUD:TYPES_STAFF).map(t=>`<option ${t===p.type?'selected':''}>${t}</option>`).join('')}</select></div>
      </div>
    `,
    finance: `
      <div class="form-section-title">💰 Financial Information</div>
      <div style="background:var(--accent-blue-light);border-radius:10px;padding:14px;margin-bottom:16px;display:flex;align-items:center;justify-content:space-between">
        <span style="font-size:12px;color:var(--accent-blue)">Total Grant</span>
        <span style="font-size:22px;font-weight:800;color:var(--accent-blue)">€${(p.totalGrant||0).toLocaleString()}</span>
      </div>
      <div class="form-grid">
        <div class="form-group"><label class="form-label">Individual Support</label><input class="form-input" value="${(p.individualSupport||0).toLocaleString()}" placeholder="€0"></div>
        <div class="form-group"><label class="form-label">Travel Grant</label><input class="form-input" value="${(p.travelGrant||0).toLocaleString()}" placeholder="€0"></div>
        <div class="form-group"><label class="form-label">Inclusion Support</label><input class="form-input" value="${(p.inclusionSupport||0).toLocaleString()}" placeholder="€0"></div>
        <div class="form-group"><label class="form-label">Final Grant</label><input class="form-input" value="${(p.finalGrant||0).toLocaleString()}" placeholder="€0"></div>
        <div class="form-group"><label class="form-label">Accommodation Payment</label><input class="form-input" value="${(p.accPayment||0).toLocaleString()}"></div>
        <div class="form-group"><label class="form-label">Flight Payment</label><input class="form-input" value="${(p.flightPayment||0).toLocaleString()}"></div>
      </div>
    `,
    contact: `
      <div class="form-section-title">📞 Contact Information</div>
      <div class="form-grid">
        <div class="form-group full"><label class="form-label">Email</label><input class="form-input" value="${p.email||''}" type="email"></div>
        <div class="form-group"><label class="form-label">Phone</label><input class="form-input" value="${p.phone||''}"></div>
        <div class="form-group"><label class="form-label">Passport Number</label><input class="form-input" value="${p.passport||''}"></div>
        <div class="form-group full"><label class="form-label">Address</label><input class="form-input" value="${p.address||''}"></div>
        <div class="form-group"><label class="form-label">Place of Birth</label><input class="form-input" value="${p.birthPlace||''}"></div>
      </div>
    `,
    documents: `
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
        <div class="form-section-title" style="margin:0">📋 Document Checklist</div>
        <span style="font-size:12px;font-weight:600;color:${docsChecked===DOCS.length?'var(--accent-green)':'var(--accent-orange)'}">${docsChecked} / ${DOCS.length} complete</span>
      </div>
      <div style="margin-bottom:10px">
        <div class="progress-bar-bg" style="height:7px"><div class="progress-bar-fill ${docsChecked===DOCS.length?'green':docsChecked>DOCS.length*0.6?'orange':'red'}" style="width:${Math.round(docsChecked/DOCS.length*100)}%"></div></div>
      </div>
      <div class="doc-checklist">
        ${DOCS.map(doc => `
          <div class="doc-item ${p.documents?.[doc] ? 'checked' : ''}" onclick="toggleDoc(this,'${doc}')">
            <div class="doc-check">${p.documents?.[doc] ? '✓' : ''}</div>
            <span class="doc-name">${doc}</span>
            <span class="doc-date" style="font-size:10px;color:var(--text-muted)">${p.documents?.[doc] ? '✓ Received' : '⏳ Pending'}</span>
          </div>
        `).join('')}
      </div>
    `,
    notes: `
      <div class="form-section-title">📝 Internal Notes</div>
      <textarea class="form-textarea" id="panelNotes" style="min-height:200px;width:100%" placeholder="Add internal notes about this participant...">${p.notes||''}</textarea>
      <button class="btn btn-primary" style="margin-top:10px" onclick="saveNotes()">💾 Save Notes</button>
    `
  };
  el.innerHTML = bodies[tab] || '';
}
function toggleDoc(el, doc) {
  el.classList.toggle('checked');
  const check = el.querySelector('.doc-check');
  const isChecked = el.classList.contains('checked');
  check.textContent = isChecked ? '✓' : '';
  el.querySelector('.doc-date').textContent = isChecked ? '✓ Received' : '⏳ Pending';
  if (currentPanelPerson?.documents) {
    currentPanelPerson.documents[doc] = isChecked;
  }
}
function saveNotes() {
  const val = document.getElementById('panelNotes')?.value;
  if (currentPanelPerson) currentPanelPerson.notes = val;
  showToast('Notes saved!');
}
function savePanel() { showToast('Changes saved!'); }
function closePanel() {
  document.getElementById('panelOverlay').classList.remove('open');
  document.getElementById('slidePanel').classList.remove('open');
}

// =========================================================
// CONTACT MODAL
// =========================================================
function openContactModal() {
  const missing = currentPanelPerson?.documents
    ? DOCS.filter(d => !currentPanelPerson.documents[d])
    : ['Insurance', 'Learning Agreement', 'Final Report'];

  document.getElementById('contactModalBody').innerHTML = `
    <div style="margin-bottom:16px">
      <div class="form-label" style="margin-bottom:8px">Select missing documents to include:</div>
      <div class="doc-checklist">
        ${missing.map(d => `
          <div class="doc-item" onclick="this.classList.toggle('checked');this.querySelector('.doc-check').textContent=this.classList.contains('checked')?'✓':'';generateEmail()">
            <div class="doc-check"></div>
            <span class="doc-name">${d}</span>
          </div>
        `).join('')}
        ${missing.length === 0 ? '<div style="color:var(--accent-green);font-size:12px;font-weight:600;text-align:center;padding:10px">✓ All documents received!</div>' : ''}
      </div>
    </div>
    <button class="btn btn-primary" style="width:100%;justify-content:center;margin-bottom:12px" onclick="generateEmail()">✨ Generate Email</button>
    <div id="generatedEmail" style="background:var(--bg-tertiary);border:1px solid var(--border-color);border-radius:8px;padding:14px;font-size:12px;line-height:1.7;display:none;white-space:pre-wrap;font-family:var(--font-mono)"></div>
  `;
  document.getElementById('contactOverlay').classList.add('open');
  document.getElementById('contactModal').classList.add('open');
}
function generateEmail() {
  const selected = [...document.querySelectorAll('#contactModalBody .doc-item.checked')].map(el => el.querySelector('.doc-name').textContent);
  const name = currentPanelPerson ? `${currentPanelPerson.firstName} ${currentPanelPerson.lastName}` : 'Dear student';
  const email = document.getElementById('generatedEmail');
  if (selected.length === 0) {
    email.style.display = 'none';
    return;
  }
  email.style.display = 'block';
  email.textContent = `Dear ${name},

I am writing to you regarding your Erasmus+ mobility at ${currentPanelPerson?.university || '[University]'}.

We have noticed that the following documents are still pending in our records:

${selected.map(d => `  • ${d}`).join('\n')}

Please submit the missing documentation as soon as possible to ensure your mobility can proceed without delays.

Deadline: [INSERT DEADLINE]

If you have any questions or need assistance, please do not hesitate to contact us.

Best regards,
International Relations Office
Slovak University of Technology in Bratislava
iro@stuba.sk | +421 2 5732 4xxx`;
}
function copyEmail() {
  const text = document.getElementById('generatedEmail')?.textContent;
  if (text) { navigator.clipboard?.writeText(text); showToast('Email copied to clipboard!'); }
}
function openGmail() {
  const text = encodeURIComponent(document.getElementById('generatedEmail')?.textContent || '');
  const email = currentPanelPerson?.email || '';
  window.open(`https://mail.google.com/mail/?view=cm&to=${email}&body=${text}`, '_blank');
}
function closeContactModal() {
  document.getElementById('contactOverlay').classList.remove('open');
  document.getElementById('contactModal').classList.remove('open');
}

// =========================================================
// ADD MODAL
// =========================================================
function openAddModal(type) {
  const titles = {task:'New Task', university:'Add University', partner:'Add Partner', mobility:'New Mobility'};
  document.getElementById('addModalTitle').textContent = titles[type] || 'Add';
  const bodies = {
    task: `
      <div class="form-grid">
        <div class="form-group full"><label class="form-label">Task Title</label><input class="form-input" placeholder="e.g. Send invitation letters to TU Berlin"></div>
        <div class="form-group full"><label class="form-label">Description</label><textarea class="form-textarea" style="min-height:80px" placeholder="Task details..."></textarea></div>
        <div class="form-group"><label class="form-label">Assign To</label><select class="form-select">${COORDINATORS.map(c=>`<option>${c}</option>`).join('')}</select></div>
        <div class="form-group"><label class="form-label">Deadline</label><input class="form-input" type="date"></div>
        <div class="form-group"><label class="form-label">Priority</label><select class="form-select"><option>High</option><option>Medium</option><option>Low</option></select></div>
        <div class="form-group"><label class="form-label">Status</label><select class="form-select"><option>To Do</option><option>In Progress</option><option>Completed</option></select></div>
      </div>
    `,
    university: `
      <div class="form-grid">
        <div class="form-group"><label class="form-label">Country</label><select class="form-select">${COUNTRIES.map(c=>`<option value="${c.code}">${c.flag} ${c.name}</option>`).join('')}</select></div>
        <div class="form-group full"><label class="form-label">University Name</label><input class="form-input" placeholder="e.g. TU Berlin"></div>
        <div class="form-group"><label class="form-label">Coordinator (STU)</label><select class="form-select">${COORDINATORS.map(c=>`<option>${c}</option>`).join('')}</select></div>
        <div class="form-group"><label class="form-label">Partner Manager</label><input class="form-input" placeholder="Contact name"></div>
        <div class="form-group full"><label class="form-label">Partner Email</label><input class="form-input" type="email" placeholder="partner@university.edu"></div>
        <div class="form-group"><label class="form-label">IIA Status</label><select class="form-select"><option>Active</option><option>Pending</option><option>Expired</option></select></div>
        <div class="form-group"><label class="form-label">AIS Status</label><select class="form-select"><option>Active</option><option>Pending</option></select></div>
      </div>
    `,
    mobility: `
      <div class="form-grid">
        <div class="form-group"><label class="form-label">First Name</label><input class="form-input"></div>
        <div class="form-group"><label class="form-label">Last Name</label><input class="form-input"></div>
        <div class="form-group"><label class="form-label">Type</label><select class="form-select"><option>Studies</option><option>Traineeship</option><option>Teaching</option><option>Training</option></select></div>
        <div class="form-group"><label class="form-label">Country</label><select class="form-select">${COUNTRIES.map(c=>`<option>${c.flag} ${c.name}</option>`).join('')}</select></div>
        <div class="form-group full"><label class="form-label">University</label><input class="form-input"></div>
        <div class="form-group"><label class="form-label">Start Date</label><input class="form-input" type="date"></div>
        <div class="form-group"><label class="form-label">End Date</label><input class="form-input" type="date"></div>
        <div class="form-group"><label class="form-label">Coordinator</label><select class="form-select">${COORDINATORS.map(c=>`<option>${c}</option>`).join('')}</select></div>
        <div class="form-group"><label class="form-label">Status</label><select class="form-select"><option>Upcoming</option><option>Active</option></select></div>
      </div>
    `,
  };
  document.getElementById('addModalBody').innerHTML = bodies[type] || '<p>Form coming soon...</p>';
  document.getElementById('addModalOverlay').classList.add('open');
  document.getElementById('addModal').classList.add('open');
}
function closeAddModal() {
  document.getElementById('addModalOverlay').classList.remove('open');
  document.getElementById('addModal').classList.remove('open');
}
function saveFromModal() { closeAddModal(); showToast('Record saved!'); }

// =========================================================
// SETTINGS
// =========================================================
function openSettingsSection(section, el) {
  document.querySelectorAll('.settings-nav-item').forEach(i => i.classList.remove('active'));
  if (el) el.classList.add('active');
  const panels = {
    appearance: `
      <div class="settings-section">
        <div class="settings-section-title">Theme</div>
        <div class="theme-options">
          ${[{id:'light',label:'Light',cls:'theme-swatch-light'},{id:'dark',label:'Dark',cls:'theme-swatch-dark'},{id:'stu-blue',label:'STU Blue',cls:'theme-swatch-blue'},{id:'purple',label:'Purple',cls:'theme-swatch-purple'}].map(t => `
            <div class="theme-option ${currentTheme===t.id?'active':''}" onclick="setTheme('${t.id}');saveToStorage();document.querySelectorAll('.theme-option').forEach(e=>e.classList.remove('active'));this.classList.add('active')">
              <div class="theme-swatch ${t.cls}"></div>
              <span class="theme-name">${t.label}</span>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="settings-section">
        <div class="settings-section-title">Display</div>
        <div style="display:flex;flex-direction:column;gap:12px">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <span style="font-size:13px">Compact Mode</span>
            <label class="toggle-switch"><input type="checkbox"><span class="toggle-slider"></span></label>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center">
            <span style="font-size:13px">Collapsed Sidebar by Default</span>
            <label class="toggle-switch"><input type="checkbox" ${sidebarCollapsed?'checked':''}><span class="toggle-slider"></span></label>
          </div>
        </div>
      </div>
    `,
    language: `
      <div class="settings-section">
        <div class="settings-section-title">Interface Language</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          ${[{code:'en',label:'🇬🇧 English'},{code:'sk',label:'🇸🇰 Slovak'}].map(l => `
            <div onclick="setLang('${l.code}');saveToStorage();document.querySelectorAll('.lang-option').forEach(e=>e.classList.remove('selected'));this.classList.add('selected')" class="lang-option" style="padding:14px;border-radius:8px;border:2px solid ${currentLang===l.code?'var(--accent-blue)':'var(--border-color)'};background:${currentLang===l.code?'var(--accent-blue-light)':'var(--bg-tertiary)'};cursor:pointer;text-align:center;font-weight:600;font-size:13px">
              ${l.label}
            </div>
          `).join('')}
        </div>
      </div>
    `,
    export: `
      <div class="settings-section">
        <div class="settings-section-title">Export Data</div>
        <div style="display:flex;flex-direction:column;gap:8px">
          ${['Students','Staff','Universities','Documents','Budget','Entire Database'].map(item => `
            <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:var(--bg-tertiary);border-radius:8px;border:1px solid var(--border-color)">
              <span style="font-size:13px;font-weight:500">${item}</span>
              <div style="display:flex;gap:6px">
                <button class="btn btn-secondary btn-sm" onclick="exportData('${item.toLowerCase()}','xlsx')">XLSX</button>
                <button class="btn btn-secondary btn-sm" onclick="exportData('${item.toLowerCase()}','csv')">CSV</button>
                <button class="btn btn-secondary btn-sm" onclick="exportData('${item.toLowerCase()}','pdf')">PDF</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `,
    backup: `
      <div class="settings-section">
        <div class="settings-section-title">Backup & Restore</div>
        <div style="display:flex;flex-direction:column;gap:10px">
          <button class="btn btn-primary" onclick="createBackup()" style="justify-content:center">💾 Create Backup Now</button>
          <button class="btn btn-secondary" onclick="restoreBackup()" style="justify-content:center">📂 Restore from Backup</button>
          <div style="background:var(--bg-tertiary);border:1px solid var(--border-color);border-radius:8px;padding:12px;font-size:12px;color:var(--text-secondary)">
            Last backup: <strong>2025-02-05 14:32</strong> — 85 records, 2.4 MB
          </div>
        </div>
      </div>
    `,
    preferences: `
      <div class="settings-section">
        <div class="settings-section-title">User Preferences</div>
        <div class="form-grid">
          <div class="form-group"><label class="form-label">Default Language</label><select class="form-select"><option>English</option><option>Slovak</option></select></div>
          <div class="form-group"><label class="form-label">Default Academic Year</label><select class="form-select"><option>2024/2025</option><option>2025/2026</option></select></div>
          <div class="form-group"><label class="form-label">Default Landing Page</label><select class="form-select"><option>Dashboard</option><option>Students</option><option>Mobilities</option></select></div>
          <div class="form-group"><label class="form-label">User Name</label><input class="form-input" value="Mgr. Katarína Mrózová"></div>
          <div class="form-group"><label class="form-label">User Role</label><input class="form-input" value="IRO Coordinator" readonly></div>
        </div>
        <button class="btn btn-primary" style="margin-top:14px" onclick="showToast('Preferences saved!')">Save Preferences</button>
      </div>
    `,
    integrations: `
      <div class="settings-section">
        <div class="settings-section-title">Google Drive Integration</div>
        <div style="background:var(--accent-blue-light);border-radius:10px;padding:16px;margin-bottom:14px">
          <div style="font-size:13px;font-weight:600;margin-bottom:6px">📁 Google Drive Connected</div>
          <div style="font-size:11px;color:var(--text-secondary)">Erasmus+ folder: /STU-IRO/Erasmus+/2024-2025</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <button class="btn btn-secondary" style="justify-content:center">🔄 Sync Now</button>
          <button class="btn btn-secondary" style="justify-content:center">⚙ Configure Folders</button>
          <button class="btn btn-ghost" style="justify-content:center;color:var(--accent-red)">🔌 Disconnect Google Drive</button>
        </div>
        <div class="form-section-title" style="margin-top:20px">Google Sheets Database</div>
        <div class="form-group" style="margin-bottom:10px"><label class="form-label">Spreadsheet URL</label><input class="form-input" placeholder="https://docs.google.com/spreadsheets/d/..."></div>
        <button class="btn btn-primary" onclick="showToast('Connected to Google Sheets!')">Connect Spreadsheet</button>
      </div>
    `,
  };
  document.getElementById('settingsPanelContent').innerHTML = panels[section] || '';
}

// =========================================================
// GLOBAL SEARCH
// =========================================================
function openGlobalSearch() {
  document.getElementById('globalSearch').classList.add('open');
  setTimeout(() => document.getElementById('globalSearchInput')?.focus(), 100);
}
function closeGlobalSearch(e, force) {
  if (force || (e && e.target === document.getElementById('globalSearch'))) {
    document.getElementById('globalSearch').classList.remove('open');
    document.getElementById('globalSearchInput').value = '';
    document.getElementById('searchResults').innerHTML = '<div style="padding:30px;text-align:center;color:var(--text-muted);font-size:13px">Start typing to search across all records...</div>';
  }
}
function runGlobalSearch(q) {
  const query = q.toLowerCase();
  const res = document.getElementById('searchResults');
  if (!query) { res.innerHTML = '<div style="padding:30px;text-align:center;color:var(--text-muted);font-size:13px">Start typing...</div>'; return; }
  const students = ALL_STUDENTS.filter(s => `${s.firstName} ${s.lastName} ${s.email} ${s.university} ${s.country}`.toLowerCase().includes(query)).slice(0,5);
  const staff = ALL_STAFF.filter(s => `${s.firstName} ${s.lastName} ${s.university}`.toLowerCase().includes(query)).slice(0,3);
  const unis = UNIVERSITIES.filter(u => u.name.toLowerCase().includes(query) || u.partner.toLowerCase().includes(query)).slice(0,3);
  let html = '';
  if (students.length) {
    html += `<div class="search-result-group-title">Students</div>`;
    html += students.map(s => `<div class="search-result-item" onclick="openStudentPanel(${s.id});closeGlobalSearch(null,true)"><span class="search-result-icon">${s.flag}</span><div><div class="search-result-name">${s.firstName} ${s.lastName}</div><div class="search-result-sub">${s.university} • ${s.type}</div></div><span style="margin-left:auto">${statusBadge(s.status)}</span></div>`).join('');
  }
  if (staff.length) {
    html += `<div class="search-result-group-title">Staff</div>`;
    html += staff.map(s => `<div class="search-result-item" onclick="openStaffPanel(${s.id});closeGlobalSearch(null,true)"><span class="search-result-icon">${s.flag}</span><div><div class="search-result-name">${s.firstName} ${s.lastName}</div><div class="search-result-sub">${s.university} • ${s.type}</div></div></div>`).join('');
  }
  if (unis.length) {
    html += `<div class="search-result-group-title">Universities</div>`;
    html += unis.map(u => `<div class="search-result-item" onclick="openUniModal(${u.id});closeGlobalSearch(null,true)"><span class="search-result-icon">${COUNTRIES.find(c=>c.code===u.country)?.flag}</span><div><div class="search-result-name">${u.name}</div><div class="search-result-sub">${u.partner}</div></div></div>`).join('');
  }
  res.innerHTML = html || '<div style="padding:20px;text-align:center;color:var(--text-muted);font-size:13px">No results found</div>';
}

// =========================================================
// UTILITIES
// =========================================================
function openGDrive() {
  const url = currentPanelPerson?.driveUrl || 'https://drive.google.com';
  window.open(url, '_blank');
}
function exportData(type, format) {
  showToast(`Exporting ${type} as ${format||'XLSX'}...`);
  setTimeout(() => showToast('Export complete! File downloaded.'), 1500);
}
function createBackup() {
  const data = JSON.stringify({students:ALL_STUDENTS, staff:ALL_STAFF, unis:UNIVERSITIES, timestamp:new Date().toISOString()});
  const blob = new Blob([data], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `erasmus-backup-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  showToast('Backup created and downloaded!');
}
function restoreBackup() { showToast('Select a backup file to restore...'); }
function showImportModal() { openAddModal('import'); }

let toastTimeout;
function showToast(msg, type) {
  let toast = document.getElementById('toastNotif');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotif';
    toast.style.cssText = `position:fixed;bottom:24px;right:24px;background:var(--text-primary);color:var(--bg-secondary);padding:10px 18px;border-radius:10px;font-size:13px;font-weight:600;z-index:1000;box-shadow:var(--shadow-lg);transition:all 0.3s;transform:translateY(0)`;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateY(10px)'; }, 3000);
}