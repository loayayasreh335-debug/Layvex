(function(){
var F=window.LIVO_FAQ;if(!F)return;
var D=document,H=D.documentElement,RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
var U={ar:{sub:'اسألني أي شيء عن لايفكس!',ph:'اكتب سؤالك هون...',close:'إغلاق',back:'رجوع',wave:'مرحبا! 👋 أنا ليفو، اضغط عليّ إذا بدك مساعدة',up:'LEVEL UP! 🔥 شاطر!',proj:'سوقنا ودورنا متاحين هلا! جرّبهم 😉',inv:'بتهتم بالاستثمار؟ اطلب ملف العرض من هون 👇',zz:'zZz...',wake:'هلا! صحيت 😄'},
en:{sub:'Ask me anything about LAYVEX!',ph:'Type your question...',close:'Close',back:'Back',wave:'Hi! 👋 I am Livo, tap me if you need help',up:'LEVEL UP! 🔥 Nice!',proj:'Sooqna and Dawrna are live now! Try them 😉',inv:'Interested in investing? Request the deck from here 👇',zz:'zZz...',wake:'I am awake! 😄'}};
var FN={ar:{happy:'سعيد',excited:'متحمس',surprised:'مندهش',angry:'غاضب',sad:'حزين',thinking:'متفكر',confused:'مستغرب',shy:'خجول'},en:{happy:'Happy',excited:'Excited',surprised:'Surprised',angry:'Angry',sad:'Sad',thinking:'Thinking',confused:'Confused',shy:'Shy'}};
function lg(){return H.lang==='en'?'en':'ar'}
function img(n){return 'livo/'+n+'.webp'}
function mk(t,c){var e=D.createElement(t);if(c)e.className=c;return e}
function nz(s){return String(s).toLowerCase().replace(/[\u064B-\u0652\u0670\u0640]/g,'').replace(/[أإآ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').replace(/[؟?!.,،:;"']/g,' ').replace(/\s+/g,' ').trim()}
F.entries.forEach(function(e){e.nk=e.kw.map(nz).filter(Boolean)});
function byId(id){for(var i=0;i<F.entries.length;i++)if(F.entries[i].id===id)return F.entries[i]}
function match(t){var s=nz(t),p=' '+s+' ',best=null,bs=0,sm=null,ss=0;if(!s)return null;
F.entries.forEach(function(e){var sc=0;e.nk.forEach(function(k){var hit=/^[a-z0-9 ]+$/.test(k)?p.indexOf(' '+k+' ')>=0:s.indexOf(k)>=0;if(hit)sc+=k.length});
if(e.q&&(nz(e.q.ar)===s||nz(e.q.en)===s))sc+=50;
if(e.small){if(sc>ss){ss=sc;sm=e}}else if(sc>bs){bs=sc;best=e}});
if(best&&bs>=3)return best;if(sm&&s.split(' ').length<=4)return sm;return null}
window.LIVO_TEST={nz:nz,match:match};

var fab,fi,avw,bub,pop,hero,panel,av,nameEl,subEl,xb,msgs,chips,inp,cf='happy',ov=0,sl=0,idle,st,welcomed=0;
function setFace(n){cf=n;av.src=img('face-'+n);if(!ov&&!sl)fi.src=img('face-'+n);pulse(av)}
function pulse(e){if(RM)return;e.classList.remove('lv-pulse');void e.offsetWidth;e.classList.add('lv-pulse')}
function pose(n,ms){ov++;var my=ov;fi.src=img('pose-'+n);fab.classList.add('pose');if(ms)setTimeout(function(){if(my===ov)rest()},ms)}
function tface(n,ms){ov++;var my=ov;fi.src=img('face-'+n);setTimeout(function(){if(my===ov)rest()},ms)}
function rest(){ov++;fab.classList.remove('pose');fi.src=img('face-'+cf)}
function say(k,ms){if(panel.classList.contains('on'))return;bub.textContent=U[lg()][k];bub.classList.add('on');clearTimeout(st);st=setTimeout(function(){bub.classList.remove('on')},ms)}
function isOpen(){return panel.classList.contains('on')}

function addMsg(t,c){var m=mk('div','lv-m '+c);m.textContent=t;msgs.appendChild(m);msgs.scrollTop=msgs.scrollHeight;return m}
function opn(u){window.open(u,'_blank','noopener')}
function act(a){if(a.k==='wa')opn('https://wa.me/'+F.wa+'?text='+encodeURIComponent(a.v));else if(a.k==='link')opn(a.v);
else if(a.k==='go'){var s=D.getElementById(a.v);if(s){if(innerWidth<=560)closeP();s.scrollIntoView({behavior:RM?'auto':'smooth',block:'start'})}}
else if(a.k==='ask'){var e=byId(a.v);if(e)ask(e)}else if(a.k==='fn'&&window[a.v]){closeP();window[a.v]()}}
function ask(e){addMsg(e.q[lg()],'u');reply(e)}
function reply(e){var l=lg(),d=mk('div','lv-m b lv-dots');d.innerHTML='<span></span><span></span><span></span>';msgs.appendChild(d);msgs.scrollTop=msgs.scrollHeight;setFace('thinking');ring(1);
setTimeout(function(){d.remove();ring(0);var m=addMsg(e.a[l],'b');setFace(e.face);talk();
if(e.acts&&e.acts.length){var w=mk('div','lv-acts');e.acts.forEach(function(a){var b=mk('button','lv-a');b.type='button';b.textContent=a.t[l];b.onclick=function(){act(a)};w.appendChild(b)});m.appendChild(w)}
showCats();msgs.scrollTop=msgs.scrollHeight},RM?0:650)}
function ring(on){[fab,avw].forEach(function(x){x.classList.toggle('think',!!on)})}
function talk(){[fab,avw].forEach(function(x){x.classList.add('talk')});setTimeout(function(){[fab,avw].forEach(function(x){x.classList.remove('talk')})},1300)}
var mode='cats',SUG={about:['about','vision','livo'],projects:['projects','available','sooqna','dawrna'],'livo-meet':['livo','isai'],roadmap:['available','wassalna','alamna'],game:['game','levelup'],initiative:['initiative','umbrella'],founder:['founder','vision'],invest:['investor','incubator','deck','contact'],events:['events','host'],ideas:['ideas','privacy'],join:['partner','contact']};
function curSec(){var id=null;D.querySelectorAll('section[id]').forEach(function(s){var r=s.getBoundingClientRect();if(r.top<innerHeight*.45&&r.bottom>innerHeight*.2)id=s.id});return id}
function chip(t,f){var b=mk('button','lv-c');b.type='button';b.textContent=t;b.onclick=f;chips.appendChild(b);return b}
function showCats(){mode='cats';chips.innerHTML='';(SUG[curSec()]||[]).forEach(function(id){var e=byId(id);if(e)chip('✨ '+e.q[lg()],function(){ask(e)}).classList.add('sg')});F.cats.forEach(function(c){chip(c.t[lg()],function(){showQs(c)})})}
function showQs(c){mode='qs';chips.innerHTML='';chip('← '+U[lg()].back,showCats);c.ids.forEach(function(id){var e=byId(id);if(e)chip(e.q[lg()],function(){ask(e)})})}
function send(){var t=inp.value.trim();if(!t)return;inp.value='';addMsg(t,'u');var e=match(t);reply(e||{a:F.fallback.a,face:F.fallback.face,acts:F.fallback.acts})}

function openP(){panel.classList.add('on');fab.classList.add('open');bub.classList.remove('on');wake();
if(innerWidth>900){if(!hero.src)hero.src=img('hero-sit-point');hero.classList.add('on')}
if(!welcomed){welcomed=1;addMsg(F.welcome.a[lg()],'b');setFace(F.welcome.face);showCats()}
if(mode==='cats')showCats();if(innerWidth>560)inp.focus()}
function closeP(){panel.classList.remove('on');fab.classList.remove('open');hero.classList.remove('on')}
function wake(){if(sl){sl=0;rest();say('wake',2000)}}
function sleepNow(){if(isOpen())return;sl=1;pose('sleep');say('zz',4000)}
function actv(){wake();clearTimeout(idle);if(!RM)idle=setTimeout(sleepNow,45000)}

function render(){var u=U[lg()];subEl.textContent=u.sub;inp.placeholder=u.ph;xb.setAttribute('aria-label',u.close);
if(!msgs.querySelector('.lv-m.u'))showCats();meet()}
function meet(){var f=D.getElementById('lv-faces'),big=D.getElementById('lv-big');if(!f)return;f.innerHTML='';
F.faces.forEach(function(n){var b=mk('button','lv-c');b.type='button';b.textContent=FN[lg()][n];b.onclick=function(){big.src=img('face-'+n);big.classList.remove('chg');void big.offsetWidth;big.classList.add('chg')};f.appendChild(b)});
var a=D.getElementById('lv-ask');if(a)a.onclick=openP}

var tr=0,tx=0,ty=0;
function cl(v){return Math.max(-14,Math.min(14,v)).toFixed(1)}
function tl(el){var r=el.getBoundingClientRect();if(!r.width)return;var dx=(tx-(r.left+r.width/2))/innerWidth,dy=(ty-(r.top+r.height/2))/innerHeight;el.style.transform='perspective(220px) rotateY('+cl(dx*40)+'deg) rotateX('+cl(-dy*40)+'deg)'}

function init(){
fab=mk('button','lv-fab');fab.type='button';fab.setAttribute('aria-label','Livo');fi=mk('img');fi.alt='Livo';fi.src=img('face-happy');fab.appendChild(fi);
bub=mk('div','lv-bub');pop=mk('img','lv-pop');pop.alt='';hero=mk('img','lv-hero');hero.alt='';
panel=mk('div','lv-panel');panel.setAttribute('role','dialog');
var hd=mk('div','lv-head');av=mk('img','lv-av');av.alt='Livo';av.src=img('face-happy');avw=mk('span','lv-avw');avw.appendChild(av);
var tt=mk('div');nameEl=mk('b');nameEl.textContent='Livo';subEl=mk('small');tt.appendChild(nameEl);tt.appendChild(subEl);
xb=mk('button','lv-x');xb.type='button';xb.textContent='✕';xb.onclick=closeP;hd.appendChild(avw);hd.appendChild(tt);hd.appendChild(xb);
msgs=mk('div','lv-msgs');chips=mk('div','lv-chips');
var row=mk('div','lv-in');inp=mk('input');inp.type='text';inp.maxLength=200;inp.setAttribute('dir','auto');
var sb=mk('button');sb.type='button';sb.textContent='➤';sb.setAttribute('aria-label','Send');sb.onclick=send;
inp.onkeydown=function(e){if(e.key==='Enter')send()};row.appendChild(inp);row.appendChild(sb);
panel.appendChild(hd);panel.appendChild(msgs);panel.appendChild(chips);panel.appendChild(row);
[hero,pop,panel,bub,fab].forEach(function(e){D.body.appendChild(e)});
fab.onclick=function(){isOpen()?closeP():openP()};bub.onclick=openP;
D.addEventListener('keydown',function(e){if(e.key==='Escape')closeP()});
render();new MutationObserver(render).observe(H,{attributes:true,attributeFilter:['lang']});
setTimeout(function(){['happy','excited','surprised','angry','sad','thinking','confused','shy'].forEach(function(n){(new Image).src=img('face-'+n)});['pose-wave','pose-win','pose-sleep'].forEach(function(n){(new Image).src=img(n)})},1500);

['pointermove','keydown','scroll','touchstart','click'].forEach(function(ev){addEventListener(ev,actv,{passive:true})});actv();
var sth;addEventListener('scroll',function(){if(!isOpen()||mode!=='cats')return;clearTimeout(sth);sth=setTimeout(showCats,400)},{passive:true});
D.addEventListener('pointermove',function(e){if(e.pointerType!=='mouse'||RM)return;tx=e.clientX;ty=e.clientY;if(!tr){tr=1;requestAnimationFrame(function(){tr=0;tl(fi);tl(av)})}});

try{if(!sessionStorage.lv_w&&!RM){sessionStorage.lv_w=1;setTimeout(function(){if(!isOpen()){pose('wave',3500);say('wave',5000)}},4000)}}catch(e){}
var ar=D.getElementById('arena');
if(ar)new MutationObserver(function(m){m.forEach(function(r){r.addedNodes.forEach(function(n){if(n.classList&&n.classList.contains('lvtxt'))cele()})})}).observe(ar,{childList:true});
var seen={};try{seen=JSON.parse(sessionStorage.lv_seen||'{}')}catch(e){}
function watch(id,key){var s=D.getElementById(id);if(!s||!('IntersectionObserver' in window))return;
var io=new IntersectionObserver(function(en){if(en[0].isIntersecting&&!seen[id]){seen[id]=1;try{sessionStorage.lv_seen=JSON.stringify(seen)}catch(e){}if(!isOpen()){tface('excited',4500);say(key,5000)}io.disconnect()}},{threshold:.35});io.observe(s)}
watch('projects','proj');watch('invest','inv');
}
function cele(){if(isOpen()){setFace('excited');return}
pop.src=img('pose-win');pop.classList.add('on');setTimeout(function(){pop.classList.remove('on')},2200);tface('excited',2200);say('up',2200)}

var go=function(){setTimeout(init,300)};D.readyState==='complete'?go():addEventListener('load',go);
})();
