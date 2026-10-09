:root{
  --navy:#101B35; --white:#F8F9FC; --orange:#FF7A30; --orange-deep:#e7631c;
  --soft:#E8EEFA; --ink:#172033; --muted:#5b6a85; --line:#e2e8f5;
  --card:#ffffff; --radius:24px; --shadow:0 18px 45px -20px rgba(16,27,53,.25);
  --shadow-sm:0 10px 28px -14px rgba(16,27,53,.22);
  --font-body:"Plus Jakarta Sans",system-ui,-apple-system,Segoe UI,Roboto,sans-serif;
  --font-display:"Fraunces",Georgia,serif;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:90px}
body{margin:0;font-family:var(--font-body);background:var(--white);color:var(--ink);line-height:1.6;-webkit-font-smoothing:antialiased}
body::before{content:"";position:fixed;inset:0;pointer-events:none;z-index:0;
  background:radial-gradient(600px 400px at 12% 8%,#ffe3cf 0%,transparent 60%),
  radial-gradient(700px 500px at 95% 18%,var(--soft) 0%,transparent 62%);opacity:.9}
main,.site-header,.site-footer{position:relative;z-index:1}
h1,h2,h3,h4{line-height:1.08;margin:0 0 .5rem;letter-spacing:-.02em}
h1{font-family:var(--font-display);font-weight:900;font-size:clamp(2.4rem,5.2vw,4.2rem);color:var(--navy)}
h1 em,h2 em{font-style:normal;color:var(--orange);position:relative}
h2{font-family:var(--font-display);font-weight:700;font-size:clamp(1.7rem,3.4vw,2.6rem);color:var(--navy)}
.container{width:min(1200px,92%);margin:0 auto}
.muted{color:var(--muted)} .small{font-size:.86rem}
.skip-link{position:absolute;left:-999px;top:0;background:var(--navy);color:#fff;padding:.7rem 1rem;z-index:99;border-radius:0 0 12px 0}
.skip-link:focus{left:0}
:focus-visible{outline:3px solid var(--orange);outline-offset:3px;border-radius:8px}

/* Header */
.site-header{position:sticky;top:12px;z-index:50;margin:12px auto 0;width:min(1200px,94%)}
.header-inner{display:flex;align-items:center;justify-content:space-between;gap:1rem;background:rgba(255,255,255,.86);backdrop-filter:blur(14px);border:1px solid var(--line);border-radius:18px;padding:.65rem .8rem .65rem 1rem;box-shadow:var(--shadow-sm)}
.brand{display:flex;align-items:center;gap:.6rem;text-decoration:none;color:var(--navy);font-weight:800;font-size:1.1rem}
.brand-text span{color:var(--orange)}
.brand.light{color:#fff}
.desktop-nav{display:flex;gap:.2rem;background:var(--soft);padding:.3rem;border-radius:999px}
.nav-link{text-decoration:none;color:var(--navy);font-weight:600;font-size:.92rem;padding:.5rem .95rem;border-radius:999px}
.nav-link:hover{background:#fff}
.nav-link.is-active{background:var(--navy);color:#fff}
.header-actions{display:flex;align-items:center;gap:.6rem}
.hamburger{display:none;flex-direction:column;gap:5px;background:#fff;border:1px solid var(--line);border-radius:12px;padding:.65rem;cursor:pointer}
.hamburger span{width:22px;height:2.5px;background:var(--navy);border-radius:99px;display:block;transition:.25s}
.hamburger[aria-expanded="true"] span:nth-child(1){transform:translateY(7.5px) rotate(45deg)}
.hamburger[aria-expanded="true"] span:nth-child(2){opacity:0}
.hamburger[aria-expanded="true"] span:nth-child(3){transform:translateY(-7.5px) rotate(-45deg)}
.mobile-menu{background:#fff;border:1px solid var(--line);border-radius:18px;margin-top:.5rem;padding:.6rem;box-shadow:var(--shadow)}
.mobile-menu nav{display:grid;gap:.25rem}
.mobile-menu a:not(.btn){padding:.8rem 1rem;border-radius:12px;text-decoration:none;color:var(--navy);font-weight:700}
.mobile-menu a:not(.btn):hover{background:var(--soft)}

/* Buttons */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;text-decoration:none;font-weight:800;border-radius:999px;padding:.9rem 1.5rem;border:2px solid transparent;cursor:pointer;font-size:.95rem;transition:transform .18s,box-shadow .18s,background .18s}
.btn:hover{transform:translateY(-2px)}
.btn-primary{background:var(--orange);color:var(--navy);box-shadow:0 12px 26px -12px rgba(255,122,48,.7)}
.btn-primary:hover{background:var(--orange-deep);color:#fff}
.btn-ghost{background:var(--navy);color:#fff}
.btn-ghost:hover{background:#1b2a52}
.btn-dark{background:var(--navy);color:#fff}
.btn-light{background:#fff;color:var(--navy)}
.btn-outline-light{border-color:rgba(255,255,255,.5);color:#fff}
.btn-sm{padding:.6rem 1.1rem;font-size:.88rem}
.btn.full{width:100%}

/* Bento */
.hero-bento{padding:2rem 0 .5rem}
.bento-grid{display:grid;grid-template-columns:repeat(12,1fr);gap:1.1rem}
.span-8{grid-column:span 8}.span-7{grid-column:span 7}.span-5{grid-column:span 5}.span-4{grid-column:span 4}
.card{background:var(--card);border:1px solid var(--line);border-radius:var(--radius);padding:1.6rem;box-shadow:var(--shadow-sm);transition:transform .22s,box-shadow .22s}
.card:hover{transform:translateY(-4px);box-shadow:var(--shadow)}
.eyebrow{display:inline-flex;align-items:center;gap:.5rem;font-size:.78rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--orange-deep);background:#fff3ea;border:1px solid #ffd9bd;padding:.4rem .8rem;border-radius:999px;margin:0 0 1rem}
.eyebrow.dark{background:var(--navy);color:#fff;border-color:var(--navy)}
.eyebrow .dot{width:8px;height:8px;background:#22c55e;border-radius:50%;box-shadow:0 0 0 5px rgba(34,197,94,.18)}
.pill{display:inline-flex;align-items:center;gap:.4rem;font-size:.75rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;background:var(--soft);color:var(--navy);padding:.35rem .75rem;border-radius:999px;margin:0 0 .8rem}
.pill-light{background:rgba(255,255,255,.2);color:#fff}
.editable-tag{font-size:.68rem;font-weight:800;letter-spacing:.08em;background:#fff7d6;border:1px dashed #c9a100;color:#7a5e00;padding:.3rem .6rem;border-radius:8px}
.editable-tag.amber{background:#101B35;color:#ffcf8a;border-color:#ffcf8a}
.card-top{display:flex;justify-content:space-between;align-items:center;gap:.6rem;flex-wrap:wrap;margin-bottom:.4rem}
.link-arrow{color:var(--navy);font-weight:800;text-decoration:none;border-bottom:2px solid var(--orange)}
.link-arrow.small{font-size:.9rem}

/* Hero */
.card-hero{display:grid;grid-template-columns:1.05fr .95fr;gap:1.4rem;background:linear-gradient(180deg,#fff, #f2f5fd);overflow:hidden;position:relative;padding:2rem}
.lede{font-size:1.25rem;font-weight:700;color:var(--navy);margin:.2rem 0}
.hero-copy p....{color:var(--muted)}
.hero-btns{display:flex;gap:.7rem;flex-wrap:wrap;margin:1.1rem 0}
.hero-points{list-style:none;display:flex;gap:1rem;flex-wrap:wrap;padding:0;margin:.4rem 0 0;font-size:.88rem;font-weight:600;color:var(--navy)}
.hero-points li{display:flex;align-items:center;gap:.4rem}
.hero-media{position:relative;border-radius:18px;overflow:hidden;min-height:340px}
.hero-media img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.float-badge{position:absolute;background:rgba(255,255,255,.94);backdrop-filter:blur(8px);border:1px solid #fff;border-radius:14px;padding:.6rem .8rem;box-shadow:var(--shadow-sm);display:flex;gap:.6rem;align-items:center}
.float-badge strong{display:block;line-height:1}
.float-badge span{font-size:.75rem;color:var(--muted)}
.badge-top{top:12px;left:12px}.badge-bottom{bottom:12px;left:12px;right:12px}
.avatar-stack{display:flex}.avatar-stack i{width:28px;height:28px;border-radius:50%;border:2.5px solid #fff;margin-left:-8px;background:linear-gradient(135deg,var(--orange),#ffb37e)}
.avatar-stack i:nth-child(2){background:linear-gradient(135deg,#101B35,#3b4f85)}.avatar-stack i:nth-child(3){background:linear-gradient(135deg,#22c55e,#8ff0b3)}
.card-accent{background:linear-gradient(155deg,#182747 0%,#101B35 55%,#233a6b 100%);color:#fff;position:relative;overflow:hidden}
.card-accent h2{color:#fff;font-size:2rem}.card-accent p{color:#c8d3ea}
.accent-orb{position:absolute;width:280px;height:280px;right:-90px;bottom:-90px;background:radial-gradient(circle at 30% 30%,#ff9a5c,var(--orange) 55%,transparent 72%);opacity:.9;filter:saturate(1.1)}
.card-accent .link-arrow{color:#fff}
.card-mini .mini-row{display:flex;justify-content:space-between;align-items:center;gap:.8rem;margin:.6rem 0}
.live-dot{display:flex;align-items:center;gap:.4rem;font-size:.8rem;font-weight:800;color:#15803d;background:#e9fbeF;border:1px solid #b6e8c4;padding:.35rem .7rem;border-radius:999px}
.live-dot span{width:8px;height:8px;background:#22c55e;border-radius:50%;animation:pulse 1.6s infinite}
@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(34,197,94,.5)}70%{box-shadow:0 0 0 8px transparent}100%{box-shadow:0 0 0 0 transparent}}
.progress{height:10px;background:var(--soft);border-radius:99px;overflow:hidden}
.progress i{display:block;height:100%;background:linear-gradient(90deg,var(--orange),#ffb37e);border-radius:99px}
.card-navy{background:var(--navy);color:#d6deF2;border-color:var(--navy)}
.card-navy h3{color:#fff}
.icon-circle{width:42px;height:42px;display:grid;place-items:center;border-radius:14px;background:var(--soft);font-weight:900;margin-bottom:.7rem}
.icon-circle.orange{background:var(--orange)}
.tag-row{display:flex;gap:.5rem;margin-top:.9rem}.tag-row span{background:rgba(255,255,255,.12);padding:.35rem .7rem;border-radius:999px;font-size:.78rem;font-weight:700}
.card-cream{background:#fff8f0}
.trust-bar{margin:1.1rem 0 0;display:flex;gap:.9rem;flex-wrap:wrap;align-items:center;justify-content:center;color:var(--muted);font-weight:700;font-size:.9rem;background:#fff;border:1px dashed var(--line);border-radius:999px;padding:.7rem 1.2rem}
.trust-bar i{color:var(--orange);font-style:normal}

/* Sections */
.section{padding:3.2rem 0}
.section-head{max-width:720px;margin:0 0 1.6rem}
.section-sub{color:var(--muted);font-size:1.05rem}
.section-sub.left{text-align:left}
.about-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:1.1rem}
.check-list{list-style:none;padding:0;margin:1rem 0;display:grid;gap:.6rem}
.check-list li{background:var(--soft);border-radius:14px;padding:.7rem .9rem}
.about-cta{display:flex;align-items:center;gap:.8rem;flex-wrap:wrap;margin-top:1rem}
.note{font-size:.82rem;color:var(--muted)}
.about-cards{display:grid;gap:1.1rem}
.a-card{background:var(--navy);color:#dbe3f5;border-radius:var(--radius);padding:1.4rem;border:1px solid var(--navy)}
.a-card:nth-child(2){background:var(--orange);color:var(--navy);border-color:var(--orange)}
.a-card:nth-child(3){background:#fff;border-color:var(--line);color:var(--ink)}
.a-num{font-family:var(--font-display);font-weight:900;opacity:.5}

/* Courses / main grid */
.course-list{display:grid;gap:.7rem;margin:1rem 0}
.course{display:flex;align-items:center;gap:.9rem;text-decoration:none;color:inherit;background:var(--white);border:1px solid var(--line);border-radius:16px;padding:.8rem .9rem;transition:.18s}
.course:hover{border-color:var(--orange);transform:translateX(4px)}
.course strong{display:block;color:var(--navy)}.course strong em{font-style:normal;font-size:.7rem;background:var(--soft);padding:.15rem .45rem;border-radius:99px;color:var(--muted)}
.course small{color:var(--muted)}
.c-icon{width:44px;height:44px;flex:0 0 44px;display:grid;place-items:center;border-radius:14px;font-size:1.2rem}
.c-icon.blue{background:#dbe7ff}.c-icon.orange{background:#ffe2cc}.c-icon.navy{background:var(--navy);color:#fff}.c-icon.green{background:#d9f7e5}
.c-arrow{margin-left:auto;font-weight:900;color:var(--orange)}
.stat-grid{display:grid;grid-template-columns:1fr 1fr;gap:.8rem;margin:1rem 0}
.stat{background:var(--navy);color:#fff;border-radius:16px;padding:1rem;text-align:center}
.stat:nth-child(2){background:var(--orange);color:var(--navy)}
.stat:nth-child(3){background:var(--soft);color:var(--navy)}
.stat:nth-child(4){background:#fff;border:1px solid var(--line);color:var(--navy)}
.stat strong{font-family:var(--font-display);font-size:1.7rem;display:block}
.stat span{font-size:.8rem}.stat em{font-style:normal;display:block;opacity:.7;font-size:.72rem}
.card-excellence ul{padding-left:1.1rem;color:var(--navy);font-weight:600}
.sheet{margin-top:1rem;background:var(--soft);border-radius:14px;padding:.8rem;display:grid;gap:.4rem;font-size:.8rem;font-weight:700}
.sheet i{display:block;height:10px;border-radius:99px;background:linear-gradient(90deg,var(--navy),#5b74b5)}
.sheet i:nth-child(2){width:72%}.sheet i:nth-child(3){width:48%;background:linear-gradient(90deg,var(--orange),#ffb37e)}
.teacher-photos{display:flex;margin-bottom:.6rem}.teacher-photos span{width:44px;height:44px;border-radius:50%;border:3px solid #fff;margin-left:-10px;background:linear-gradient(135deg,#c9d6f5,#fff)}
.teacher-photos span:nth-child(2){background:linear-gradient(135deg,#ffb37e,#fff)}.teacher-photos span:nth-child(3){background:linear-gradient(135deg,#101B35,#7a8fc0);color:#fff;display:grid;place-items:center}
.teacher-photos span:last-child{background:var(--navy);color:#fff;display:grid;place-items:center;font-weight:800}
.support-row{display:flex;justify-content:space-between;align-items:center;gap:.7rem;margin-top:1rem;flex-wrap:wrap}
.online{font-size:.82rem;font-weight:800;display:flex;gap:.4rem;align-items:center}.online i{width:9px;height:9px;background:#22c55e;border-radius:50%;display:inline-block}
.steps{margin:.6rem 0 1rem;padding-left:1.2rem;display:grid;gap:.6rem}
.card-testimonials{background:linear-gradient(180deg,#fff,#eef2fb)}
.testi-grid{display:grid;grid-template-columns:1fr 1fr;gap:.8rem;margin-top:1rem}
.testi{background:#fff;border:1px solid var(--line);border-radius:16px;padding:1rem;margin:0}
.testi blockquote{margin:0 0 .8rem;font-weight:600;color:var(--navy)}
.testi figcaption{display:flex;align-items:center;gap:.6rem}
.t-avatar{width:38px;height:38px;border-radius:50%;background:var(--navy);color:#fff;display:grid;place-items:center;font-weight:800;font-size:.8rem}
.t-avatar.orange{background:var(--orange);color:var(--navy)}
.testi small{color:var(--muted);display:block}.stars{margin-left:auto;color:#f59e0b;font-size:.8rem}
.card-cta{background:linear-gradient(155deg,var(--orange) 0%,#ff8f4d 60%,#ffab7a 100%);color:var(--navy);border-color:transparent}
.card-cta h3{font-size:1.7rem}.cta-points{list-style:none;display:flex;gap:.8rem;padding:0;font-weight:800}
.cta-btns{display:flex;gap:.6rem;flex-wrap:wrap;margin:.8rem 0}

/* Contact */
.contact-wrap{display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;background:var(--navy);border-radius:28px;padding:2rem;color:#dbe3f5;overflow:hidden;position:relative}
.contact-wrap h2{color:#fff}.contact-wrap .section-sub{color:#aebad6}
.info-list{list-style:none;padding:0;margin:1.2rem 0;display:grid;gap:.7rem}
.info-list li{display:flex;gap:.8rem;align-items:flex-start;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);padding:.8rem;border-radius:16px}
.info-list a{color:#fff}
.i-icon{width:36px;height:36px;flex:0 0 36px;display:grid;place-items:center;background:var(--orange);border-radius:12px}
.backend-note{background:#fff8e6;color:#5b4300;border-radius:14px;padding:.9rem;font-size:.86rem}
.backend-note code{background:#101B35;color:#ffcf8a;padding:.1rem .35rem;border-radius:6px}
.contact-form{background:#fff;color:var(--ink)}
.contact-form h3{font-family:var(--font-display);color:var(--navy);font-size:1.5rem;margin:0}
.field{margin:.9rem 0}.field label{font-weight:800;font-size:.88rem;display:block;margin-bottom:.35rem;color:var(--navy)}
.optional{font-weight:500;color:var(--muted)}
.field input,.field textarea{width:100%;border:2px solid var(--line);border-radius:14px;padding:.85rem 1rem;font:inherit;background:var(--white)}
.field input:focus,.field textarea:focus{border-color:var(--orange);outline:none;background:#fff}
.field input.invalid,.field textarea.invalid{border-color:#ef4444;background:#fef2f2}
.error{color:#dc2626;font-size:.8rem;font-weight:600;min-height:1.1em;display:block}
.form-status{font-weight:700;margin:.8rem 0 0}
.form-status.success{background:#e9fbef;border:1px solid #86efac;color:#14532d;padding:.8rem;border-radius:12px}
.form-status.error{background:#fef2f2;border:1px solid #fca5a5;color:#7f1d1d;padding:.8rem;border-radius:12px}

/* Footer */
.site-footer{background:var(--navy);color:#c3cde3;margin-top:3rem;border-radius:28px 28px 0 0}
.footer-grid{display:grid;grid-template-columns:1.3fr 1fr 1fr 1fr;gap:1.5rem;padding:2.5rem 0 1rem}
.footer-grid nav,.footer-grid div{display:grid;gap:.45rem;align-content:start}
.footer-grid a{color:#c3cde3;text-decoration:none}.footer-grid a:hover{color:#fff}
.footer-grid strong{color:#fff}
.footer-tag{margin:.7rem 0}
.footer-bottom{display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap;border-top:1px solid rgba(255,255,255,.12);padding:1rem 0 1.4rem;align-items:center}
.to-top{color:#fff;text-decoration:none;font-weight:800}

/* Responsive */
@media(max-width:980px){
  .desktop-nav{display:none}.hamburger{display:flex}
  .span-8,.span-7,.span-5,.span-4{grid-column:span 12}
  .card-hero{grid-template-columns:1fr}
  .hero-media{min-height:260px}
  .about-grid,.contact-wrap{grid-template-columns:1fr}
  .footer-grid{grid-template-columns:1fr 1fr}
}
@media(max-width:600px){
  .site-header{top:8px}.card{padding:1.2rem}.card-hero{padding:1.3rem}
  .testi-grid,.stat-grid{grid-template-columns:1fr}
  .footer-grid{grid-template-columns:1fr}
  .hero-btns .btn{flex:1}
  .trust-bar{border-radius:18px}
}
@media(prefers-reduced-motion:reduce){
  html{scroll-behavior:auto}*{animation:none!important;transition:none!important}
}
