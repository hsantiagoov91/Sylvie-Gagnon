export default function IndustrialLinecardLandingPage() {
  const getFaviconUrl = (website) => {
    try {
      return `${new URL(website).origin}/favicon.ico`;
    } catch {
      return "";
    }
  };

  const getInitials = (name) =>
    name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();

  const LogoBadge = ({ company, compact = false }) => {
    const sizeClasses = compact ? "h-14 w-14 rounded-2xl" : "h-16 w-16 rounded-2xl";
    const useTextLogo = company.logoMode === "text";
    const fallbackText = company.logoText || getInitials(company.name);

    return (
      <div
        className={`${sizeClasses} flex shrink-0 items-center justify-center border border-white/10 bg-white px-3 py-3 shadow-lg`}
        title={`${company.name} logo`}
      >
        {!useTextLogo ? (
          <img
            src={getFaviconUrl(company.website)}
            alt={`${company.name} logo`}
            className="max-h-full max-w-full object-contain"
            loading="lazy"
            onError={(e) => {
              const img = e.currentTarget;
              img.style.display = "none";
              const fallback = img.nextElementSibling;
              if (fallback) fallback.style.display = "flex";
            }}
          />
        ) : null}
        <div
          className={`${useTextLogo ? "flex" : "hidden"} h-full w-full items-center justify-center rounded-xl bg-slate-900 px-2 text-center text-sm font-bold tracking-[0.12em] text-cyan-300`}
          aria-hidden="true"
        >
          {fallbackText}
        </div>
      </div>
    );
  };

  const companies = [
    {
      name: "Allied Titanium, Inc.",
      category: "Titanium Fasteners",
      description:
        "Stocking common titanium fasteners for distributors, with additional availability from production overruns and rotating inventory for immediate shipment.",
      website: "https://www.alliedtitanium.com",
    },
    {
      name: "Aztech Locknut Company",
      category: "Locknuts",
      description:
        "Engineered locknuts with reliable performance, dependable delivery, technical innovation, and competitive per-piece pricing.",
      website: "https://www.aztechlocknut.com",
    },
    {
      name: "Brikksen",
      category: "Stainless Steel Fasteners",
      description:
        "Master distributor of high-quality stainless steel fasteners with fast turnaround, strong quality control, and competitive pricing.",
      website: "https://www.brikksen.com",
    },
    {
      name: "Cable Ties Unlimited",
      category: "Wire and Cable Management",
      description:
        "Specialist in wire and cable management products serving a wide range of industrial and commercial applications.",
      website: "https://www.cabletiesunlimited.com",
    },
    {
      name: "Crescent Manufacturing",
      category: "Precision Miniature Fasteners",
      description:
        "Precision fastener supplier with decades of expertise in miniature screws and engineered fasteners for aerospace, military, and commercial requirements.",
      website: "https://crescentmanufacturing.com",
    },
    {
      name: "Huyett",
      category: "Industrial Fastener Distribution Support",
      description:
        "Long-established supplier partner serving industrial fastener distributors with broad product access, service, and operational excellence.",
      website: "https://www.huyett.com",
    },
    {
      name: "Impact Tool Supply",
      category: "Fastener Manufacturing Tooling",
      description:
        "Full-service manufacturer and distributor of tooling used by fastener manufacturers in production and tool room environments.",
      website: "https://www.impacttoolsupply.com",
    },
    {
      name: "JM Tor Par",
      category: "North American Hot Forged Bolts and Cap Screws",
      description:
        "North American manufacturer of hot-forged bolts, cap screws, and specialty fasteners made from 100% U.S.-melt steel for construction, oil and gas, mining, heavy equipment, truck and trailer, and infrastructure applications.",
      website: "https://store.jmtorpar.com",
      logoMode: "text",
      logoText: "JM USA",
      featured: true,
    },
    {
      name: "Screws Industries Inc.",
      category: "Screws, SEMS, and Fasteners",
      description:
        "Full-service manufacturer of high-quality screws, SEMS, and fasteners with decades of operating history.",
      website: "https://www.screwsindustries.com",
    },
    {
      name: "Nishant Steel Industries",
      category: "Export Fasteners",
      description:
        "Export-focused fastener company supporting international buyers with broad fulfillment capabilities.",
      website: "https://www.nishanttowerfasteners.com",
    },
    {
      name: "Wisechain Fasteners",
      category: "Industrial Fasteners and Construction Hardware",
      description:
        "Global group focused on bolts, nuts, washers, rods, screws, and special fasteners through multiple dedicated operating companies.",
      website: "http://www.wisechainfasteners.com.cn",
    },
    {
      name: "W.J. Roberts Co., Inc.",
      category: "Spacers and Standoffs",
      description:
        "American manufacturer specializing in high-quality spacers and standoffs with a long legacy in precision manufacturing.",
      website: "https://www.wjroberts.com",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.18),_transparent_30%),linear-gradient(135deg,_#020617,_#0f172a_55%,_#111827)]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-400 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-400 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm tracking-[0.18em] text-cyan-200 uppercase">
                Industrial Manufacturer Representative
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Strategic Line Card for Industrial Fasteners, Tooling, and Supply Partners
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                A clean, modern landing page built to present represented manufacturers,
                product categories, and direct website access for distributor and OEM buyers.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#linecard"
                  className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  View Line Card
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Rep
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ["12", "Represented Lines"],
                  ["North America", "Industrial Market Focus"],
                  ["Fasteners + Tooling", "Core Product Scope"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <div className="text-2xl font-semibold text-white">{value}</div>
                    <div className="mt-1 text-sm text-slate-300">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="mb-4 text-sm uppercase tracking-[0.2em] text-cyan-200">Featured Manufacturer</div>
              <div className="rounded-3xl border border-cyan-400/20 bg-slate-900/80 p-6">
                <div className="mb-5 flex items-center gap-4">
                  <LogoBadge company={companies.find((company) => company.featured) || companies[0]} />
                  <div>
                    <div className="text-2xl font-semibold">JM Tor Par USA</div>
                    <div className="mt-2 text-sm text-emerald-300">North American Hot Forged Bolts and Cap Screws</div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  North American manufacturing partner producing hot-forged bolts, cap screws, and specialty fasteners from 100% U.S.-melt steel. Built for construction, oil and gas, mining, heavy vehicle, and infrastructure applications, with in-house process control, traceability, and broad coverage across the U.S., Canada, and Mexico.
                </p>
                <a
                  href="https://store.jmtorpar.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200 transition hover:bg-emerald-400/20"
                >
                  Visit JM USA Store
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10" id="linecard">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Line Card</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Represented manufacturers
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-400">
            Each company card highlights the product focus and links directly to the manufacturer website.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {companies.map((company) => (
            <div
              key={company.name}
              className={`group rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                company.featured
                  ? "border-emerald-400/30 bg-emerald-400/5"
                  : "border-white/10 bg-white/[0.03] hover:border-cyan-400/30"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <LogoBadge company={company} compact />
                  <div>
                    <h3 className="text-xl font-semibold text-white">{company.name}</h3>
                    <p className="mt-2 text-sm font-medium text-cyan-200">{company.category}</p>
                  </div>
                </div>
                {company.featured ? (
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                    Featured
                  </span>
                ) : null}
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-300">{company.description}</p>

              <a
                href={company.website}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-cyan-200"
              >
                Visit website
                <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-3 lg:px-10">
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
            <div className="text-sm uppercase tracking-[0.18em] text-cyan-300">Why this page works</div>
            <h3 className="mt-3 text-2xl font-semibold">Built for industrial buyers</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Clear positioning. Fast scanning. Direct access to represented lines. Designed to make line card review easier for distributors, sourcing teams, and OEM contacts.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
            <div className="text-sm uppercase tracking-[0.18em] text-cyan-300">Use cases</div>
            <h3 className="mt-3 text-2xl font-semibold">Lead generation and credibility</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Use this page as a standalone landing page, sales follow-up destination, distributor reference page, or digital line card inside campaigns and CRM sequences.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6" id="contact">
            <div className="text-sm uppercase tracking-[0.18em] text-cyan-300">Representative</div>
            <h3 className="mt-3 text-2xl font-semibold">Sylvie Gagnon</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Agent Manufacturier / Manufacturer&apos;s Agent
            </p>
            <div className="mt-5 space-y-2 text-sm text-white">
              <a className="block hover:text-cyan-200" href="mailto:sylviegagnon54@gmail.com">
                sylviegagnon54@gmail.com
              </a>
              <a className="block hover:text-cyan-200" href="tel:15147175454">
                514-717-5454
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
