const stack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Authentication",
  "Marketplace UX",
  "Responsive Design",
  "Vercel Deployment",
];

const features = [
  {
    title: "Student-focused marketplace",
    detail:
      "Built a platform where students can discover and exchange useful items such as laptops, rooms, notes, and campus essentials.",
  },
  {
    title: "Authentication flow",
    detail:
      "Designed a login/signup experience for student users, with the product positioned around verified college access.",
  },
  {
    title: "Listing discovery",
    detail:
      "Created a marketplace-style browsing experience for student deals, rentals, notes, and shared resources.",
  },
  {
    title: "Responsive UI",
    detail:
      "Built a clean interface suitable for desktop and mobile usage using Tailwind CSS.",
  },
  {
    title: "Production deployment",
    detail:
      "Deployed the application live on Vercel, making it accessible as a real hosted product.",
  },
  {
    title: "Product thinking",
    detail:
      "Focused on a real student pain point: fragmented buying, selling, renting, and academic resource sharing.",
  },
];

export default function StudentHubMarketplaceCaseStudy() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="border-b border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-pink-300">
              Full-Stack Product · Marketplace · Vercel
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Student Hub Marketplace
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
              A live student-to-student marketplace app built to help students
              buy, sell, rent, and discover useful campus resources such as
              laptops, rooms, notes, and student deals.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-neutral-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://student-superapp.vercel.app/login"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-pink-300 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-white"
              >
                View live app →
              </a>

              <a
                href="/#projects"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/[0.06]"
              >
                Back to projects
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <InfoCard
            eyebrow="Problem"
            title="Student needs are scattered across many platforms"
            detail="Students often use different WhatsApp groups, social pages, and informal channels to find rooms, notes, second-hand items, or student deals."
          />

          <InfoCard
            eyebrow="Solution"
            title="One student-first marketplace"
            detail="The app brings student-focused buying, selling, renting, and resource discovery into a single clean marketplace experience."
          />

          <InfoCard
            eyebrow="Goal"
            title="Build a real deployed product"
            detail="The project demonstrates full-stack product thinking, authentication flow, responsive UI, marketplace structure, and live deployment."
          />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Architecture"
            title="Product Flow"
            description="The platform follows a simple product flow from landing page to authentication, user access, marketplace browsing, and listing interaction."
          />

          <div className="overflow-x-auto rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl">
            <div className="min-w-[980px] text-neutral-900">
              <div className="grid grid-cols-[1fr_36px_1fr_36px_1fr_36px_1fr_36px_1fr] items-center">
                <FlowNode title="Landing Page" detail="Student value proposition" />
                <ArrowRight />
                <FlowNode title="Login / Signup" detail="Student access flow" />
                <ArrowRight />
                <FlowNode title="Marketplace Home" detail="Deals, notes, rentals" />
                <ArrowRight />
                <FlowNode title="Listing Discovery" detail="Browse useful items" />
                <ArrowRight />
                <FlowNode title="Student Action" detail="Buy, sell, rent, connect" accent />
              </div>

              <div className="mt-6 rounded-2xl border border-dashed border-pink-300 bg-pink-50 px-5 py-4 text-sm text-pink-900">
                This project is included as a full-stack product case study,
                separate from the AI/ML projects, to show product engineering,
                UI implementation, and deployment capability.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Features"
            title="What I Built"
            description="A practical student marketplace product with authentication, discovery, responsive UI, and live deployment."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-300">
                  {feature.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-pink-400/20 bg-pink-400/[0.05] p-8 md:p-10">
          <p className="text-sm font-medium uppercase tracking-wider text-pink-300">
            Interview Explanation Script
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            How I would explain this project
          </h2>

          <div className="mt-6 space-y-5 text-neutral-300">
            <p>
              “Student Hub is a full-stack marketplace product I built for
              students. The idea was to create one place where students can
              discover student deals, notes, rentals, and useful second-hand
              items instead of relying on scattered informal groups.”
            </p>

            <p>
              “I focused on the complete product flow: landing page, login and
              signup, marketplace discovery, listing structure, responsive UI,
              and deployment. The goal was not just to create screens, but to
              build something that behaves like a real hosted product.”
            </p>

            <p>
              “I deployed it on Vercel, so it demonstrates that I can take a
              product idea from design and implementation to a live production
              URL. I include it separately from my AI projects because it shows
              my full-stack engineering and product-building ability.”
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({
  eyebrow,
  title,
  detail,
}: {
  eyebrow: string;
  title: string;
  detail: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
      <p className="text-sm font-medium uppercase tracking-wider text-pink-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold">{title}</h2>
      <p className="mt-4 text-neutral-300">{detail}</p>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-pink-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-neutral-300">{description}</p>
    </div>
  );
}

function FlowNode({
  title,
  detail,
  accent = false,
}: {
  title: string;
  detail: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-5 text-center shadow-sm ${
        accent ? "border-pink-300 bg-pink-50" : "border-neutral-200 bg-neutral-50"
      }`}
    >
      <p className="text-sm font-semibold text-neutral-900">{title}</p>
      <p className="mt-2 text-xs leading-5 text-neutral-500">{detail}</p>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="flex items-center justify-center">
      <div className="h-px w-7 bg-neutral-300" />
      <div className="h-0 w-0 border-y-[6px] border-l-[8px] border-y-transparent border-l-neutral-300" />
    </div>
  );
}