import "./App.css";

/* ── Inline SVG Icons ── */
const icons = {
  cloud: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    </svg>
  ),
  gear: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  cube: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  ),
  shield: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  chart: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  bolt: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  arrow: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  ),
  chevron: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  ),
};

/* ── Feature Data ── */
const features = [
  { icon: icons.cloud, title: "AWS Cloud Infrastructure", desc: "Production-grade deployment on AWS EC2 with auto-scaling, load balancing, and high availability configurations.", tag: "Infrastructure" },
  { icon: icons.gear, title: "Jenkins CI/CD Pipelines", desc: "Fully automated build, test, and deploy workflows integrated directly with GitHub repositories and webhooks.", tag: "Automation" },
  { icon: icons.cube, title: "Docker Containerization", desc: "Containerized microservices architecture ensuring consistent environments from development to production.", tag: "Containers" },
  { icon: icons.shield, title: "Security & Compliance", desc: "Built-in security scanning, secrets management, and compliance monitoring across your entire infrastructure.", tag: "Security" },
  { icon: icons.chart, title: "Real-time Monitoring", desc: "Comprehensive observability with metrics, logs, and traces for every service in your deployment pipeline.", tag: "Observability" },
  { icon: icons.bolt, title: "Instant Rollbacks", desc: "Zero-downtime deployments with automatic health checks and instant rollback capabilities on failure.", tag: "Reliability" },
];

const pipelineSteps = [
  { num: "01", label: "Code Push", sub: "GitHub" },
  { num: "02", label: "Build & Test", sub: "Jenkins" },
  { num: "03", label: "Containerize", sub: "Docker" },
  { num: "04", label: "Deploy", sub: "Container Registry" },
  { num: "05", label: "Serve", sub: "AWS EC2" },
];

const stats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "<2min", label: "Deploy Time" },
  { value: "50+", label: "Pipelines Active" },
  { value: "24/7", label: "Monitoring" },
];

/* ── Navbar ── */
function Navbar() {
  return (
    <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 bg-slate-950/70 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-10 py-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow duration-300">
            <span className="text-white font-extrabold text-sm">CN</span>
          </div>
          <span className="text-lg font-bold tracking-tight">
            Cloud<span className="gradient-text">Ops</span>
          </span>
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="nav-link">Features</a>
          <a href="#pipeline" className="nav-link">Pipeline</a>
          <a href="#stats" className="nav-link">Metrics</a>
          <a href="#deploy" className="nav-link">Deploy</a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a href="#deploy" className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-sm font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5">
            Get Started {icons.arrow}
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ── Hero ── */
function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-cyan-500/[0.07] rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/[0.05] rounded-full blur-[100px]" />
      <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-violet-600/[0.04] rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center section-padding animate-fade-in">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-sm text-slate-300 mb-8 animate-fade-in-down">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Platform v2.0 — Now with auto-scaling
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] text-balance animate-fade-in-up">
          Production-Grade{" "}
          <span className="gradient-text">DevOps</span>
          <br className="hidden sm:block" />
          Automation
        </h1>

        {/* Subheadline */}
        <p className="mt-8 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
          Ship faster with enterprise CI/CD pipelines powered by AWS, Docker, Jenkins, and GitHub — all orchestrated from a single platform.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <button id="hero-cta-primary" className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-base font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1">
            Start Deploying
            <span className="group-hover:translate-x-1 transition-transform duration-300">{icons.arrow}</span>
          </button>
          <button id="hero-cta-secondary" className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl glass-card text-base font-semibold hover:bg-white/[0.08] transition-all duration-300 hover:-translate-y-1">
            View Pipeline {icons.chevron}
          </button>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500 animate-fade-in-up animation-delay-600">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> 99.9% Uptime
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> SOC 2 Compliant
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Enterprise Ready
          </span>
        </div>
      </div>
    </section>
  );
}

/* ── Features Grid ── */
function Features() {
  return (
    <section id="features" className="relative py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="badge-cyan mb-4">✦ Core Capabilities</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4">
            Everything you need to{" "}
            <span className="gradient-text">ship confidently</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            A complete DevOps toolkit designed for teams who demand reliability, speed, and full observability across their infrastructure.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={i} className="glass-card-hover p-8 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-colors duration-500">
                {f.icon}
              </div>
              <span className="text-[11px] font-semibold tracking-widest uppercase text-cyan-400/70 mb-3 block">{f.tag}</span>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Pipeline Flow ── */
function Pipeline() {
  return (
    <section id="pipeline" className="relative py-32 section-padding">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/[0.04] rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="badge-cyan mb-4">⟶ Pipeline Flow</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4">
            From <span className="gradient-text">commit to production</span> in minutes
          </h2>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Every code push triggers a fully automated pipeline — build, test, containerize, and deploy with zero manual intervention.
          </p>
        </div>

        {/* Pipeline Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {pipelineSteps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="glass-card-hover p-6 text-center h-full">
                <span className="text-3xl font-extrabold gradient-text font-mono block mb-3">{step.num}</span>
                <h3 className="text-base font-bold mb-1">{step.label}</h3>
                <p className="text-xs text-slate-500 font-mono">{step.sub}</p>
              </div>
              {/* Connector arrow (not on last) */}
              {i < pipelineSteps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 text-slate-600 z-10">
                  {icons.chevron}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Terminal Preview */}
        <div className="mt-16 glass-card overflow-hidden max-w-3xl mx-auto">
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06]">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-4 text-xs text-slate-500 font-mono">cloudops-nexus — pipeline.log</span>
          </div>
          <div className="p-6 font-mono text-sm leading-7 text-slate-300 space-y-1">
            <p><span className="text-cyan-400">$</span> git push origin main</p>
            <p className="text-slate-500">[webhook] Trigger received from GitHub...</p>
            <p><span className="text-emerald-400">✓</span> Build completed <span className="text-slate-500">— 18.3s</span></p>
            <p><span className="text-emerald-400">✓</span> Tests passed <span className="text-slate-500">— 142/142</span></p>
            <p><span className="text-emerald-400">✓</span> Docker image built <span className="text-slate-500">— cloudops/app:v2.0.4</span></p>
            <p><span className="text-emerald-400">✓</span> Deployed to EC2 <span className="text-slate-500">— us-east-1</span></p>
            <p className="text-cyan-400 pt-2">→ Live at https://app.cloudops-nexus.io</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Stats ── */
function Stats() {
  return (
    <section id="stats" className="py-24 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card p-10 md:p-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="stat-number gradient-text">{s.value}</p>
                <p className="mt-2 text-sm text-slate-400 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── CTA / Deploy ── */
function DeployCTA() {
  return (
    <section id="deploy" className="relative py-32 section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.03] to-transparent" />
      <div className="relative max-w-3xl mx-auto text-center">
        <span className="badge-cyan mb-6">🚀 Ready to ship?</span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mt-4">
          Deploy your first pipeline{" "}
          <span className="gradient-text">in minutes</span>
        </h2>
        <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
          Connect your repository, configure your pipeline, and let CloudOps Nexus handle the rest. No infrastructure expertise required.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button id="cta-start" className="group inline-flex items-center gap-2.5 px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-base font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1">
            Start Free Trial
            <span className="group-hover:translate-x-1 transition-transform">{icons.arrow}</span>
          </button>
          <button id="cta-docs" className="inline-flex items-center gap-2.5 px-10 py-4 rounded-2xl glass-card text-base font-semibold hover:bg-white/[0.08] transition-all duration-300 hover:-translate-y-1">
            Read the Docs
          </button>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  const links = {
    Product: ["Features", "Pipeline", "Pricing", "Changelog"],
    Resources: ["Documentation", "API Reference", "Status Page", "Blog"],
    Company: ["About", "Careers", "Contact", "Legal"],
  };

  return (
    <footer className="border-t border-white/[0.06] section-padding pt-16 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <span className="text-white font-extrabold text-xs">CN</span>
              </div>
              <span className="font-bold">CloudOps Nexus</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">Production-grade DevOps automation for modern engineering teams.</p>
          </div>

          {/* Link Columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold mb-4 text-slate-300">{title}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(/\s/g, "-")}`} className="text-sm text-slate-500 hover:text-white transition-colors duration-200">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/[0.06] gap-4">
          <p className="text-xs text-slate-600">© 2026 CloudOps Nexus. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <span>Built with AWS • Jenkins • Docker • GitHub • React</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── App ── */
function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans antialiased">
      <Navbar />
      <Hero />
      <Features />
      <Pipeline />
      <Stats />
      <DeployCTA />
      <Footer />
    </div>
  );
}

export default App;
