const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');
let mX = 0, mY = 0, fX = 0, fY = 0;

document.addEventListener('mousemove', (e) => {
    mX = e.clientX; mY = e.clientY;
    cursor.style.left = mX + 'px';
    cursor.style.top  = mY + 'px';
});

(function animateFollower() {
    fX += (mX - fX) * 0.12;
    fY += (mY - fY) * 0.12;
    follower.style.left = fX + 'px';
    follower.style.top  = fY + 'px';
    requestAnimationFrame(animateFollower);
})();

document.querySelectorAll('a, button, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); follower.classList.add('hover'); });
    el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); follower.classList.remove('hover'); });
});

// =====================
// PARTICLES
// =====================
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const particles = [];
for (let i = 0; i < 80; i++) particles.push(newParticle());

function newParticle() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.4 + 0.3,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.45 + 0.1
    };
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
            Object.assign(p, newParticle());
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,245,200,${p.alpha})`;
        ctx.fill();
    });
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            if (dist < 100) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(0,245,200,${0.07 * (1 - dist/100)})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(drawParticles);
}
drawParticles();

// =====================
// NAV — HAMBURGER
// =====================
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
    });
});

// =====================
// NAV — SCROLL ACTIVE
// =====================
const sections = document.querySelectorAll('section[id]');
const navItems  = document.querySelectorAll('.nav-link');
const navbar    = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.getAttribute('id');
    });
    navItems.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
});

// =====================
// FADE-IN ON SCROLL
// =====================
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 100);
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

// =====================
// SKILL BARS
// =====================
const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fill = entry.target;
            setTimeout(() => { fill.style.width = fill.dataset.width; }, 300);
            barObserver.unobserve(fill);
        }
    });
}, { threshold: 0.4 });
document.querySelectorAll('.bar-fill').forEach(b => barObserver.observe(b));

// =====================
// CONTACT FORM
// =====================
const form = document.getElementById('contact-form');

function showError(id, msg) {
    document.getElementById(id).classList.add('invalid');
    document.getElementById(id + '-error').textContent = msg;
}
function clearError(id) {
    document.getElementById(id).classList.remove('invalid');
    document.getElementById(id + '-error').textContent = '';
}
['name','email','message'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => clearError(id));
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const success = document.getElementById('form-success');
    let valid = true;

    if (!name)                    { showError('name',    '> name is required');          valid = false; }
    if (!email)                   { showError('email',   '> email is required');         valid = false; }
    else if (!emailRx.test(email)){ showError('email',   '> invalid email format');      valid = false; }
    if (!message)                 { showError('message', '> message cannot be empty');   valid = false; }
    else if (message.length < 10) { showError('message', '> minimum 10 characters');     valid = false; }

    if (valid) {
        success.style.display = 'block';
        form.reset();
        setTimeout(() => { success.style.display = 'none'; }, 5000);
    }
});

// =====================
// PROJECT DATA
// =====================
const projects = {
    bank: {
        title:  'Bank Management System',
        eyebrow:'01 / Java · OOP · File I/O',
        lang:   'JAVA',
        code: `<span class="cm">// Bank Management System — Tarendra HST</span>
<span class="kw">import</span> java.util.*;

<span class="kw">public class</span> <span class="cl">BankAccount</span> {
    <span class="kw">private</span> <span class="cl">String</span> accountHolder;
    <span class="kw">private</span> <span class="cl">String</span> accountNumber;
    <span class="kw">private double</span> balance;
    <span class="kw">private</span> <span class="cl">List</span>&lt;<span class="cl">String</span>&gt; transactions = <span class="kw">new</span> <span class="cl">ArrayList</span>&lt;&gt;();

    <span class="kw">public</span> <span class="fn">BankAccount</span>(<span class="cl">String</span> holder, <span class="cl">String</span> accNum, <span class="kw">double</span> initial) {
        <span class="kw">this</span>.accountHolder = holder;
        <span class="kw">this</span>.accountNumber  = accNum;
        <span class="kw">this</span>.balance        = initial;
        transactions.<span class="fn">add</span>(<span class="st">"Account opened. Initial: ₹"</span> + initial);
    }

    <span class="kw">public void</span> <span class="fn">deposit</span>(<span class="kw">double</span> amount) {
        <span class="kw">if</span> (amount &lt;= <span class="nm">0</span>) { System.out.<span class="fn">println</span>(<span class="st">"Invalid amount."</span>); <span class="kw">return</span>; }
        balance += amount;
        transactions.<span class="fn">add</span>(<span class="st">"+ Deposited ₹"</span> + amount + <span class="st">" | Bal: ₹"</span> + balance);
    }

    <span class="kw">public void</span> <span class="fn">withdraw</span>(<span class="kw">double</span> amount) {
        <span class="kw">if</span> (amount &gt; balance) { System.out.<span class="fn">println</span>(<span class="st">"Insufficient funds!"</span>); <span class="kw">return</span>; }
        balance -= amount;
        transactions.<span class="fn">add</span>(<span class="st">"- Withdrawn ₹"</span> + amount + <span class="st">" | Bal: ₹"</span> + balance);
    }

    <span class="kw">public void</span> <span class="fn">printStatement</span>() {
        System.out.<span class="fn">println</span>(<span class="st">"=== Statement: "</span> + accountHolder + <span class="st">" ==="</span>);
        transactions.<span class="fn">forEach</span>(System.out::<span class="fn">println</span>);
        System.out.<span class="fn">println</span>(<span class="st">"Balance: ₹"</span> + balance);
    }

    <span class="kw">public static void</span> <span class="fn">main</span>(<span class="cl">String</span>[] args) {
        <span class="cl">BankAccount</span> acc = <span class="kw">new</span> <span class="cl">BankAccount</span>(<span class="st">"Tarendra HST"</span>, <span class="st">"ACC-001"</span>, <span class="nm">5000</span>);
        acc.<span class="fn">deposit</span>(<span class="nm">2000</span>);
        acc.<span class="fn">withdraw</span>(<span class="nm">1500</span>);
        acc.<span class="fn">withdraw</span>(<span class="nm">99999</span>); <span class="cm">// fails — insufficient funds</span>
        acc.<span class="fn">printStatement</span>();
    }
}`,
        demo: `<style>
*{box-sizing:border-box;font-family:'Segoe UI',sans-serif;margin:0;padding:0}
body{background:#0f172a;color:#e2e8f0;padding:20px}
h2{color:#00f5c8;font-size:18px;margin-bottom:4px}
.sub{color:#64748b;font-size:12px;margin-bottom:18px}
.card{background:#1e293b;border-radius:10px;padding:20px;margin-bottom:14px;border:1px solid #334155}
.balance{font-size:34px;font-weight:700;color:#00f5c8}
.label{font-size:11px;color:#64748b;margin-bottom:4px;font-family:monospace;letter-spacing:1px}
.row{display:flex;gap:10px;margin-bottom:12px}
input{flex:1;background:#0f172a;border:1px solid #334155;color:#e2e8f0;padding:10px 14px;border-radius:8px;font-size:14px;outline:none}
input:focus{border-color:#00f5c8}
button{padding:10px 18px;border:none;border-radius:8px;font-weight:700;cursor:pointer;font-size:13px;transition:.2s}
.d{background:#00f5c8;color:#000}.d:hover{background:#00d4b0}
.w{background:#ff4d6d;color:#fff}.w:hover{background:#e0365a}
.log{background:#0f172a;border-radius:8px;padding:12px;max-height:160px;overflow-y:auto}
.li{font-size:12px;padding:5px 0;border-bottom:1px solid #1e293b;color:#94a3b8}
.li:last-child{border:none}
.li.p{color:#00f5c8}.li.m{color:#ff4d6d}
.msg{font-size:12px;padding:8px 12px;border-radius:6px;margin-bottom:8px;display:none}
.ok{background:rgba(0,245,200,.1);color:#00f5c8;border:1px solid rgba(0,245,200,.2)}
.er{background:rgba(255,77,109,.1);color:#ff4d6d;border:1px solid rgba(255,77,109,.2)}
.acc{display:flex;justify-content:space-between;font-size:12px;color:#64748b;margin-bottom:14px;font-family:monospace}
</style>
<h2>Bank Management System</h2>
<p class="sub">Demo — Tarendra HST</p>
<div class="card">
<div class="acc"><span>Tarendra HST</span><span>ACC-2024-001</span></div>
<div class="label">CURRENT BALANCE</div>
<div class="balance" id="bal">&#8377;5,000.00</div>
</div>
<div class="card">
<div class="row">
<input id="amt" type="number" placeholder="Enter amount (&#8377;)" min="1"/>
<button class="d" onclick="dep()">Deposit</button>
<button class="w" onclick="wit()">Withdraw</button>
</div>
<div class="msg" id="msg"></div>
<div class="label" style="margin-bottom:8px">TRANSACTION HISTORY</div>
<div class="log" id="log">
<div class="li p">&#8226; Account opened. Initial deposit: &#8377;5,000</div>
</div>
</div>
<script>
let bal=5000;
function fmt(n){return'&#8377;'+n.toLocaleString('en-IN',{minimumFractionDigits:2});}
function msg(t,c){const m=document.getElementById('msg');m.textContent=t;m.className='msg '+c;m.style.display='block';setTimeout(()=>m.style.display='none',2500);}
function log(t,c){const l=document.getElementById('log');const d=document.createElement('div');d.className='li '+c;d.textContent='&#8226; '+t;l.appendChild(d);l.scrollTop=l.scrollHeight;}
function dep(){const a=parseFloat(document.getElementById('amt').value);if(!a||a<=0){msg('Enter a valid amount','er');return;}bal+=a;document.getElementById('bal').innerHTML=fmt(bal);log('Deposited: '+fmt(a)+' | Balance: '+fmt(bal),'p');msg('Deposited '+fmt(a),'ok');document.getElementById('amt').value='';}
function wit(){const a=parseFloat(document.getElementById('amt').value);if(!a||a<=0){msg('Enter a valid amount','er');return;}if(a>bal){msg('Insufficient funds!','er');return;}bal-=a;document.getElementById('bal').innerHTML=fmt(bal);log('Withdrawn: '+fmt(a)+' | Balance: '+fmt(bal),'m');msg('Withdrawn '+fmt(a),'ok');document.getElementById('amt').value='';}
<\/script>`
    },

    quiz: {
        title:  'Online Quiz App',
        eyebrow:'02 / Java · HTML · CSS · JS',
        lang:   'HTML + JS',
        code: `<span class="cm">&lt;!-- Online Quiz App — Tarendra HST --&gt;</span>
<span class="kw">&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;</span>
  <span class="kw">&lt;style&gt;</span>
    <span class="cl">body</span>    { background:<span class="st">#0f172a</span>; color:<span class="st">#e2e8f0</span>; font-family:sans-serif; padding:<span class="nm">20px</span>; }
    <span class="cl">.card</span>   { background:<span class="st">#1e293b</span>; border-radius:<span class="nm">12px</span>; padding:<span class="nm">24px</span>; max-width:<span class="nm">500px</span>; margin:auto; }
    <span class="cl">.option</span> { background:<span class="st">#0f172a</span>; border:<span class="nm">1px solid #334155</span>; padding:<span class="nm">12px 16px</span>;
              border-radius:<span class="nm">8px</span>; margin:<span class="nm">8px 0</span>; cursor:pointer; transition:<span class="nm">.2s</span>; }
    <span class="cl">.option:hover</span>   { border-color:<span class="st">#00f5c8</span>; color:<span class="st">#00f5c8</span>; }
    <span class="cl">.option.correct</span> { background:<span class="st">rgba(0,245,200,.1)</span>; border-color:<span class="st">#00f5c8</span>; color:<span class="st">#00f5c8</span>; }
    <span class="cl">.option.wrong</span>   { background:<span class="st">rgba(255,77,109,.1)</span>; border-color:<span class="st">#ff4d6d</span>; color:<span class="st">#ff4d6d</span>; }
    <span class="cl">.timer</span>  { color:<span class="st">#ff4d6d</span>; font-weight:bold; font-family:monospace; }
  <span class="kw">&lt;/style&gt;&lt;/head&gt;&lt;body&gt;</span>
<span class="kw">&lt;div</span> id=<span class="st">"app"</span> class=<span class="st">"card"</span><span class="kw">&gt;&lt;/div&gt;</span>
<span class="kw">&lt;script&gt;</span>
  <span class="kw">const</span> questions = [
    { q: <span class="st">"What does OOP stand for?"</span>,
      opts: [<span class="st">"Object Oriented Programming"</span>, <span class="st">"Open Object Protocol"</span>, <span class="st">"Ordered Output Process"</span>],
      ans: <span class="nm">0</span> },
    { q: <span class="st">"Which keyword creates an object in Java?"</span>,
      opts: [<span class="st">"create"</span>, <span class="st">"build"</span>, <span class="st">"new"</span>],
      ans: <span class="nm">2</span> },
    { q: <span class="st">"Which is a valid Java collection?"</span>,
      opts: [<span class="st">"DataList"</span>, <span class="st">"ArrayList"</span>, <span class="st">"ItemStack"</span>],
      ans: <span class="nm">1</span> }
  ];
  <span class="kw">let</span> cur=<span class="nm">0</span>, score=<span class="nm">0</span>, timeLeft=<span class="nm">15</span>, timer, locked=<span class="kw">false</span>;
  <span class="kw">function</span> <span class="fn">render</span>() { <span class="cm">/* renders question, options, and timer */</span> }
  <span class="kw">function</span> <span class="fn">pick</span>(i)   { <span class="cm">/* validates answer, updates score */</span> }
  <span class="kw">function</span> <span class="fn">showResult</span>() { <span class="cm">/* shows final score */</span> }
  <span class="fn">render</span>();
<span class="kw">&lt;/script&gt;&lt;/body&gt;&lt;/html&gt;</span>`,
        demo: `<style>
*{box-sizing:border-box;font-family:'Segoe UI',sans-serif;margin:0;padding:0}
body{background:#0f172a;color:#e2e8f0;padding:20px}
h2{color:#00f5c8;font-size:18px;margin-bottom:4px}
.sub{color:#64748b;font-size:12px;margin-bottom:18px}
.card{background:#1e293b;border-radius:10px;padding:22px;border:1px solid #334155}
.topbar{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}
.badge{font-size:11px;color:#64748b;background:#0f172a;padding:4px 12px;border-radius:999px;font-family:monospace}
.timer{font-family:monospace;font-size:13px;font-weight:700;padding:4px 12px;border-radius:999px}
.timer.ok{color:#00f5c8;background:rgba(0,245,200,.1);border:1px solid rgba(0,245,200,.2)}
.timer.warn{color:#ff4d6d;background:rgba(255,77,109,.1);border:1px solid rgba(255,77,109,.2)}
.prog{height:4px;background:#334155;border-radius:4px;margin-bottom:18px}
.prog-fill{height:100%;background:linear-gradient(90deg,#00f5c8,#7b5ea7);border-radius:4px;transition:width .4s}
.question{font-size:16px;font-weight:600;margin-bottom:18px;line-height:1.5}
.option{background:#0f172a;border:1px solid #334155;padding:12px 16px;border-radius:8px;margin:8px 0;cursor:pointer;transition:.2s;font-size:14px}
.option:hover:not(.locked){border-color:#00f5c8;color:#00f5c8;transform:translateX(4px)}
.option.correct{background:rgba(0,245,200,.1);border-color:#00f5c8;color:#00f5c8}
.option.wrong{background:rgba(255,77,109,.1);border-color:#ff4d6d;color:#ff4d6d}
.option.locked{cursor:default}
.next{background:#00f5c8;color:#000;border:none;padding:10px 24px;border-radius:8px;font-weight:700;cursor:pointer;margin-top:14px;font-size:14px;display:none;transition:.2s}
.next:hover{background:#00d4b0}
.result{text-align:center;padding:16px 0}
.big{font-size:52px;font-weight:700;color:#00f5c8}
.result p{color:#94a3b8;margin:8px 0 18px;font-size:14px}
.restart{background:#00f5c8;color:#000;border:none;padding:10px 24px;border-radius:8px;font-weight:700;cursor:pointer;font-size:14px}
</style>
<h2>Online Quiz App</h2>
<p class="sub">Java &amp; Programming Fundamentals</p>
<div class="card" id="app"></div>
<script>
const qs=[
{q:"What does OOP stand for?",opts:["Object Oriented Programming","Open Object Protocol","Ordered Output Process"],ans:0},
{q:"Which keyword creates an object in Java?",opts:["create","build","new"],ans:2},
{q:"Which is a valid Java collection?",opts:["DataList","ArrayList","ItemStack"],ans:1},
{q:"What does 'void' return type mean?",opts:["Returns nothing","Returns zero","Returns null"],ans:0},
{q:"Single-line comment symbol in Java?",opts:["#","//","--"],ans:1}
];
let cur=0,score=0,timeLeft=15,timer,locked=false;
function render(){
locked=false;clearInterval(timer);timeLeft=15;
const app=document.getElementById('app');
if(cur>=qs.length){showResult();return;}
const q=qs[cur];
app.innerHTML='<div class="topbar"><span class="badge">Q'+(cur+1)+' / '+qs.length+'</span><span class="timer ok" id="tmr">'+timeLeft+'s</span></div><div class="prog"><div class="prog-fill" style="width:'+(cur/qs.length*100)+'%"></div></div><div class="question">'+q.q+'</div>'+q.opts.map((o,i)=>'<div class="option" id="o'+i+'" onclick="pick('+i+')">'+o+'</div>').join('')+'<button class="next" id="nb" onclick="next()">Next &rarr;</button>';
timer=setInterval(()=>{timeLeft--;const t=document.getElementById('tmr');if(t){t.textContent=timeLeft+'s';t.className='timer '+(timeLeft>5?'ok':'warn');}if(timeLeft<=0){clearInterval(timer);if(!locked)autoFail();}},1000);
}
function pick(i){
if(locked)return;locked=true;clearInterval(timer);
document.querySelectorAll('.option').forEach(o=>o.classList.add('locked'));
document.getElementById('o'+i).classList.add(i===qs[cur].ans?'correct':'wrong');
if(i!==qs[cur].ans)document.getElementById('o'+qs[cur].ans).classList.add('correct');
if(i===qs[cur].ans)score++;
document.getElementById('nb').style.display='inline-block';
}
function autoFail(){locked=true;document.querySelectorAll('.option').forEach(o=>o.classList.add('locked'));document.getElementById('o'+qs[cur].ans).classList.add('correct');document.getElementById('nb').style.display='inline-block';}
function next(){cur++;render();}
function showResult(){clearInterval(timer);const pct=Math.round(score/qs.length*100);const msg=pct>=80?'Excellent!':pct>=60?'Good job!':'Keep practicing!';document.getElementById('app').innerHTML='<div class="result"><div class="big">'+score+'/'+qs.length+'</div><p>'+msg+' You scored '+pct+'%</p><button class="restart" onclick="restart()">Try Again &#8635;</button></div>';}
function restart(){cur=0;score=0;render();}
render();
<\/script>`
    },

    portfolio: {
        title:  'Portfolio Website',
        eyebrow:'03 / HTML · CSS · JavaScript',
        lang:   'HTML + CSS + JS',
        code: `<span class="cm">&lt;!-- Portfolio Website — Tarendra HST --&gt;</span>
<span class="kw">&lt;!DOCTYPE html&gt;</span>
<span class="kw">&lt;html</span> lang=<span class="st">"en"</span><span class="kw">&gt;&lt;head&gt;</span>
  <span class="kw">&lt;meta</span> charset=<span class="st">"UTF-8"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;title&gt;</span>Tarendra | Developer<span class="kw">&lt;/title&gt;</span>
  <span class="kw">&lt;link</span> rel=<span class="st">"stylesheet"</span> href=<span class="st">"style.css"</span><span class="kw">&gt;</span>
<span class="kw">&lt;/head&gt;&lt;body&gt;</span>

<span class="cm">&lt;!-- Sticky nav with blur + active link highlight --&gt;</span>
<span class="kw">&lt;nav</span> id=<span class="st">"navbar"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;div</span> class=<span class="st">"logo"</span><span class="kw">&gt;</span>T<span class="kw">&lt;span&gt;</span>.<span class="kw">&lt;/span&gt;</span>HST<span class="kw">&lt;/div&gt;</span>
  <span class="kw">&lt;ul</span> class=<span class="st">"nav-links"</span><span class="kw">&gt;</span>
    <span class="kw">&lt;li&gt;&lt;a</span> href=<span class="st">"#home"</span> class=<span class="st">"nav-link"</span><span class="kw">&gt;</span>Home<span class="kw">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="kw">&lt;li&gt;&lt;a</span> href=<span class="st">"#about"</span> class=<span class="st">"nav-link"</span><span class="kw">&gt;</span>About<span class="kw">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="kw">&lt;li&gt;&lt;a</span> href=<span class="st">"#projects"</span> class=<span class="st">"nav-link"</span><span class="kw">&gt;</span>Projects<span class="kw">&lt;/a&gt;&lt;/li&gt;</span>
  <span class="kw">&lt;/ul&gt;</span>
<span class="kw">&lt;/nav&gt;</span>

<span class="cm">&lt;!-- Hero: glitch heading + particle canvas --&gt;</span>
<span class="kw">&lt;section</span> class=<span class="st">"hero"</span><span class="kw">&gt;</span>
  <span class="kw">&lt;canvas</span> id=<span class="st">"particle-canvas"</span><span class="kw">&gt;&lt;/canvas&gt;</span>
  <span class="kw">&lt;h1</span> class=<span class="st">"hero-name"</span> data-text=<span class="st">"TARENDRA"</span><span class="kw">&gt;</span>TARENDRA<span class="kw">&lt;/h1&gt;</span>
<span class="kw">&lt;/section&gt;</span>

<span class="cm">&lt;!-- Scroll fade-in with IntersectionObserver --&gt;</span>
<span class="kw">&lt;script&gt;</span>
  <span class="kw">const</span> obs = <span class="kw">new</span> <span class="cl">IntersectionObserver</span>((entries) =&gt; {
    entries.<span class="fn">forEach</span>(e =&gt; {
      <span class="kw">if</span> (e.isIntersecting) e.target.classList.<span class="fn">add</span>(<span class="st">'visible'</span>);
    });
  }, { threshold: <span class="nm">0.15</span> });
  document.<span class="fn">querySelectorAll</span>(<span class="st">'.fade-in'</span>).<span class="fn">forEach</span>(el =&gt; obs.<span class="fn">observe</span>(el));
<span class="kw">&lt;/script&gt;&lt;/body&gt;&lt;/html&gt;</span>`,
        demo: `<style>
*{box-sizing:border-box;margin:0;padding:0;font-family:'Segoe UI',sans-serif}
body{background:#050709;color:#e2e8f0}
nav{background:rgba(5,7,9,.95);padding:14px 20px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(255,255,255,.07);position:sticky;top:0}
.logo{font-size:15px;font-weight:700;color:#fff;letter-spacing:2px;font-family:monospace}
.logo span{color:#00f5c8}
.links{display:flex;gap:20px;list-style:none}
.links a{color:#64748b;text-decoration:none;font-size:12px;font-family:monospace;transition:.2s}
.links a:hover{color:#00f5c8}
.hero{min-height:220px;display:flex;align-items:center;justify-content:center;text-align:center;padding:30px 20px;background:radial-gradient(ellipse at 60% 40%,rgba(0,245,200,.08) 0%,transparent 70%)}
h1{font-size:clamp(38px,9vw,72px);font-weight:900;font-style:italic;color:#fff;margin-bottom:10px}
.sub{color:#64748b;font-size:13px;margin-bottom:14px}
.btn{background:#00f5c8;color:#000;padding:9px 20px;border-radius:6px;font-size:12px;font-weight:700;text-decoration:none;font-family:monospace}
.about{padding:28px 20px;background:#0b0e14;border-top:1px solid rgba(255,255,255,.06)}
.about h2{font-size:20px;font-style:italic;color:#fff;margin-bottom:8px}
.about p{color:#64748b;font-size:13px;line-height:1.6}
.projects{padding:28px 20px}
.projects h2{font-size:20px;font-style:italic;color:#fff;margin-bottom:14px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px}
.pcard{background:#1e293b;border:1px solid rgba(255,255,255,.06);border-top:2px solid #00f5c8;border-radius:8px;padding:14px}
.pcard h3{font-size:13px;color:#fff;margin-bottom:5px}
.pcard p{font-size:11px;color:#64748b;line-height:1.5}
.tag{display:inline-block;font-size:10px;background:rgba(0,245,200,.08);color:#00f5c8;padding:2px 7px;border-radius:3px;margin-top:7px;margin-right:3px;font-family:monospace}
footer{background:#050709;border-top:1px solid rgba(255,255,255,.06);padding:14px 20px;text-align:center;color:#334155;font-size:11px;font-family:monospace}
</style>
<nav><div class="logo">T<span>.</span>HST</div><ul class="links"><li><a href="#">Home</a></li><li><a href="#">About</a></li><li><a href="#">Projects</a></li></ul></nav>
<div class="hero"><div><h1>TARENDRA</h1><p class="sub">Java Developer &middot; Web Enthusiast &middot; Problem Solver</p><a href="#" class="btn">See My Work &nearr;</a></div></div>
<div class="about"><h2>About Me</h2><p>I'm a passionate Java developer and web enthusiast currently studying UI Design. I love turning ideas into real, functional, and beautiful projects.</p></div>
<div class="projects"><h2>Projects</h2><div class="grid">
<div class="pcard"><h3>Bank System</h3><p>Java banking app with full account management.</p><span class="tag">Java</span></div>
<div class="pcard"><h3>Quiz App</h3><p>Dynamic quiz with timer and score tracking.</p><span class="tag">Java</span><span class="tag">JS</span></div>
<div class="pcard"><h3>Portfolio</h3><p>This site — particles, glitch, animations.</p><span class="tag">HTML</span><span class="tag">CSS</span></div>
</div></div>
<footer>&copy; 2026 Tarendra. All Rights Reserved.</footer>`
    }
};

// =====================
// MODAL
// =====================
const overlay   = document.getElementById('modal-overlay');
const modalEl   = document.getElementById('modal');
const demoFrame = document.getElementById('demo-frame');
const codeEl    = document.getElementById('code-content');
const langEl    = document.getElementById('code-lang');
const titleEl   = document.getElementById('modal-title');
const eyebrowEl = document.getElementById('modal-eyebrow');
const tabBtnDemo= document.getElementById('tab-btn-demo');
const tabBtnCode= document.getElementById('tab-btn-code');
const tabDemo   = document.getElementById('tab-demo');
const tabCode   = document.getElementById('tab-code');
const copyBtn   = document.getElementById('copy-btn');
const closeBtn  = document.getElementById('modal-close');

function openModal(id) {
    const p = projects[id];
    titleEl.textContent   = p.title;
    eyebrowEl.textContent = p.eyebrow;
    langEl.textContent    = p.lang;
    codeEl.innerHTML      = p.code;
    demoFrame.innerHTML   = p.demo;
    // reset to demo tab
    tabBtnDemo.classList.add('active'); tabBtnCode.classList.remove('active');
    tabDemo.classList.add('active');    tabCode.classList.remove('active');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { demoFrame.innerHTML = ''; }, 350);
}

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

tabBtnDemo.addEventListener('click', () => {
    tabBtnDemo.classList.add('active'); tabBtnCode.classList.remove('active');
    tabDemo.classList.add('active');    tabCode.classList.remove('active');
});
tabBtnCode.addEventListener('click', () => {
    tabBtnCode.classList.add('active'); tabBtnDemo.classList.remove('active');
    tabCode.classList.add('active');    tabDemo.classList.remove('active');
});

copyBtn.addEventListener('click', () => {
    const text = codeEl.innerText;
    navigator.clipboard.writeText(text).then(() => {
        copyBtn.textContent = 'Copied!';
        setTimeout(() => { copyBtn.textContent = 'Copy Code'; }, 2000);
    });
});
