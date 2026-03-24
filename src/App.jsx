import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUp,
  BarChart3,
  Briefcase,
  Building2,
  CheckCircle2,
  ClipboardList,
  Compass,
  LineChart,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Target,
  Users,
  X,
} from 'lucide-react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#services', label: 'Services', id: 'services' },
    { href: '#why', label: 'Why Us', id: 'why' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'why', 'contact'];
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  const services = [
    {
      icon: <LineChart className="h-6 w-6" />,
      title: 'EPM / CPM Consultancy',
      description:
        'Advisory services for enterprise performance management and corporate performance management, helping organizations improve planning, budgeting, forecasting, consolidation, reporting, and executive decision support.',
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'EPM / CPM Implementation',
      description:
        'Structured implementation support for performance management solutions, from requirement analysis and solution design to deployment, testing, training, and business adoption.',
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: 'Project Management Consultancy',
      description:
        'Practical project management support for strategic initiatives, with stronger control over scope, schedule, cost, quality, risks, and stakeholder communication.',
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: 'Governance & PMO Support',
      description:
        'Governance frameworks, reporting models, delivery controls, and PMO practices that improve visibility, accountability, prioritization, and execution discipline.',
    },
  ];

  const industries = [
    'Retail & Consumer Business',
    'Manufacturing & Industrial Operations',
    'Professional Services',
    'Holding Groups & Enterprise Functions',
    'Public Sector & Semi-Government Entities',
    'Organizations Undergoing Digital Transformation',
  ];

  const differentiators = [
    {
      title: 'Structured Thinking',
      text: 'We approach every engagement with clarity, method, and practical business logic.',
      icon: <Target className="h-6 w-6" />,
    },
    {
      title: 'Execution Focus',
      text: 'Our work is not only about recommendations, but about turning plans into operational results.',
      icon: <CheckCircle2 className="h-6 w-6" />,
    },
    {
      title: 'Management Discipline',
      text: 'Strong governance, reporting, and control are embedded into the way we support clients.',
      icon: <ClipboardList className="h-6 w-6" />,
    },
  ];

  const process = [
    'Understand the business context, priorities, and pain points.',
    'Define the right governance, reporting, and planning structure.',
    'Support implementation with clear deliverables and control points.',
    'Embed adoption, visibility, and measurable performance improvement.',
  ];

  const highlights = [
    'Executive-facing consulting style',
    'Blue-chip corporate positioning',
    'Performance management and delivery focus',
    'Governance-driven execution support',
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-auto overflow-hidden">
              <img src="/logo.png" alt="J Intelligenza logo" className="h-full w-auto object-contain" />
            </div>
            <div>
              <div className="text-xl font-semibold tracking-tight text-slate-900">J Intelligenza</div>
              <div className="text-xs uppercase tracking-[0.28em] text-slate-500">
                Insight • Governance • Delivery
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 lg:flex">
            {navLinks.map(({ href, label, id }) => (
              <a
                key={id}
                href={href}
                className={`transition ${
                  activeSection === id ? 'text-sky-700 font-semibold' : 'hover:text-sky-700'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
            >
              Contact Us
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-50 lg:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-t border-slate-100 bg-white px-6 pb-5 pt-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {navLinks.map(({ href, label, id }) => (
                <a
                  key={id}
                  href={href}
                  onClick={handleNavClick}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    activeSection === id
                      ? 'bg-sky-50 text-sky-700'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-sky-700'
                  }`}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="relative overflow-hidden bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_55%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(2,132,199,0.18),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.08),transparent_28%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-sky-800 shadow-sm">
                <Compass className="h-4 w-4" />
                Dubai-Based Consultancy
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-6xl">
                Intelligence for performance. Structure for delivery.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
                J Intelligenza is a Dubai-based consultancy focused on EPM / CPM consultancy and implementation,
                project management consultancy, and governance support for organizations that need clearer control,
                stronger reporting, and more disciplined execution.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#services" className="rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5">
                  Explore Services
                </a>
                <a href="#contact" className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5">
                  Request Consultation
                </a>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[2rem] border border-sky-100 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Company Focus</div>
                    <div className="text-xl font-semibold tracking-tight">Management & Performance Excellence</div>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  {highlights.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" />
                      <p className="text-sm leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Sector</div>
                  <div className="mt-2 text-lg font-semibold tracking-tight">Consulting</div>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Base</div>
                  <div className="mt-2 text-lg font-semibold tracking-tight">Dubai, UAE</div>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Approach</div>
                  <div className="mt-2 text-lg font-semibold tracking-tight">Executive-Level</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Positioning */}
        <section className="mx-auto max-w-7xl px-6 py-8 md:py-12">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Corporate Positioning</div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  A focused advisory partner for performance management and governance.
                </h2>
              </div>
              <p className="text-base leading-8 text-slate-600">
                J Intelligenza is positioned for organizations that want more than generic consulting. The company is built
                around sharp business thinking, disciplined project execution, and structured governance support that helps
                leaders make decisions with greater confidence.
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-y border-slate-200 bg-slate-950 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">About Us</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                A consultancy brand built around clarity, control, and credibility.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                J Intelligenza serves organizations that need stronger performance management, more reliable project
                delivery, and more mature governance practices. The brand is designed to communicate professionalism,
                structure, and executive readiness across every engagement.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                From advisory to implementation support, the company focuses on practical outcomes: better visibility,
                better planning, stronger decision support, and more disciplined execution of strategic initiatives.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-300">
                  <Users className="h-6 w-6" />
                </div>
                <div className="text-xl font-semibold tracking-tight">Who We Serve</div>
              </div>
              <div className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
                {industries.map((industry) => (
                  <div key={industry} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" />
                    <span>{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Services</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Specialized consulting services for performance, control, and delivery.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Our services are centered on enterprise performance management, implementation support, project management
              consulting, and governance structures that help organizations operate with more confidence and control.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                  {service.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How We Work */}
        <section className="bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[0.95fr_1.05fr] md:items-start">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">How We Work</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                A clear consulting approach designed for professional execution.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
                We believe consulting should create clarity, not confusion. Our approach is based on understanding the
                business environment, designing the right management structure, and supporting implementation with strong control.
              </p>
            </div>

            <div className="space-y-4">
              {process.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white">
                    0{index + 1}
                  </div>
                  <p className="pt-1 text-sm leading-7 text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section id="why" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Why Us</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Built for companies that value structure, clarity, and executive-level professionalism.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {differentiators.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Decision-Makers Choose Us */}
        <section className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
              <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-start">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Why Decision-Makers Choose Us</div>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                    Professional communication, sharp positioning, and structured delivery support.
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    J Intelligenza is designed to speak the language of executives, finance leaders, transformation sponsors,
                    and PMO stakeholders. The brand presents a serious, credible image while staying focused on practical value.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    'Clear executive reporting',
                    'Better visibility for decision-making',
                    'Stronger planning and forecasting support',
                    'Improved governance and accountability',
                  ].map((item) => (
                    <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" />
                        <div className="text-sm leading-7 text-slate-700">{item}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-[linear-gradient(135deg,#0f172a_0%,#1e3a8a_100%)] text-white">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-start">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Contact</div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  Let's discuss how J Intelligenza can support your organization.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-slate-200">
                  Whether your company needs EPM / CPM advisory, implementation support, project management consultancy,
                  or governance reinforcement, J Intelligenza is positioned to deliver professional consulting support from Dubai.
                </p>

                <div className="mt-8 space-y-4 text-sm leading-7 text-slate-100">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-sky-300" />
                    <span>Silicon Oasis, Dubai, UAE</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 h-5 w-5 shrink-0 text-sky-300" />
                    <a href="mailto:info@jintelligenza.com" className="hover:text-white">info@jintelligenza.com</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 h-5 w-5 shrink-0 text-sky-300" />
                    <a href="tel:+971545669956" className="hover:text-white">+971 54 566 9956</a>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur">
                <div className="text-lg font-semibold tracking-tight">Start the Conversation</div>
                <p className="mt-2 text-sm leading-7 text-slate-200">
                  Reach out directly by email or phone. We're happy to discuss your needs and explore how J Intelligenza can support your organization.
                </p>

                <div className="mt-6 grid gap-4">
                  <a
                    href="mailto:info@jintelligenza.com?subject=Consultation%20Request%20-%20J%20Intelligenza"
                    className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm font-medium text-white transition hover:bg-white/15"
                  >
                    <span>Email J Intelligenza</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="tel:+971545669956"
                    className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm font-medium text-white transition hover:bg-white/15"
                  >
                    <span>Call +971 54 566 9956</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm leading-7 text-slate-300">
                    <span className="font-medium text-white">Based in Dubai, UAE.</span> Serving organizations across the region and internationally. Available for engagements in-person or remotely.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-auto overflow-hidden">
              <img src="/logo.png" alt="J Intelligenza logo" className="h-full w-auto object-contain" />
            </div>
            <div>
              <div className="font-semibold text-slate-900">J Intelligenza</div>
              <div>© {new Date().getFullYear()} · Silicon Oasis, Dubai, UAE</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-5">
            {navLinks.map(({ href, label, id }) => (
              <a key={id} href={href} className="transition hover:text-sky-700">{label}</a>
            ))}
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
