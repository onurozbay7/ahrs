import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#383e42]/7 via-[#383e42]/3 to-[#f2f2f2] py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
                Association for Human Rights in Syria
              </h1>
              <p className="mb-8 text-xl leading-8 text-[#383e42] sm:text-2xl">
                Uncovering and documenting acts of violence against Alawites and other minorities in Syria
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="#objectives"
                  className="rounded-md bg-[#556b2f] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[#4a5d26] focus:outline-none focus:ring-2 focus:ring-[#556b2f] focus:ring-offset-2"
                >
                  Our Mission
                </a>
                <a
                  href="#support"
                  className="rounded-md border border-[#383e42] bg-white px-6 py-3 text-base font-medium text-[#383e42] transition-colors hover:bg-gray-50 hover:border-black focus:outline-none focus:ring-2 focus:ring-[#556b2f] focus:ring-offset-2"
                >
                  How to Help
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <section id="objectives" className="bg-[#f5f5f5] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-black sm:text-4xl">
                Our Mission
              </h2>
              <p className="mb-12 text-lg text-[#383e42]">
                The aim of the Association for Human Rights in Syria is to uncover and document
                all acts of violence perpetrated by state, civilian, paramilitary, and all other
                pro-regime groups against Alawites and other minorities in Syria and the surrounding
                neighbouring countries.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Objective 1 */}
              <div className="rounded-lg border border-[#383e42]/10 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-[#556b2f]/30">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#556b2f]/10">
                  <svg
                    className="h-6 w-6 text-[#556b2f]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-black">
                  Documentation
                </h3>
                <p className="text-[#383e42]">
                  We uncover and document all acts of violence perpetrated by state, civilian,
                  paramilitary, and all other pro-regime groups against Alawites and other
                  minorities in Syria and neighbouring countries.
                </p>
              </div>

              {/* Objective 2 */}
              <div className="rounded-lg border border-[#383e42]/10 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-[#556b2f]/30">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#556b2f]/10">
                  <svg
                    className="h-6 w-6 text-[#556b2f]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-black">
                  Support Victims
                </h3>
                <p className="text-[#383e42]">
                  We support victims of state orchestrated violence with humanitarian and legal
                  assistance in accordance with international law.
                </p>
              </div>

              {/* Objective 3 */}
              <div className="rounded-lg border border-[#383e42]/10 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-[#556b2f]/30">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#556b2f]/10">
                  <svg
                    className="h-6 w-6 text-[#556b2f]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-black">
                  Protection of Rights
                </h3>
                <p className="text-[#383e42]">
                  We oppose any attempt to destroy the ethnic, religious or cultural unity of
                  communities, deny their right to self-determination, or assault their
                  religious, linguistic and cultural identity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="bg-[#f2f2f2] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-center text-3xl font-bold text-black sm:text-4xl">
                Our Principles
              </h2>
              <div className="space-y-6">
                <div className="rounded-lg bg-white p-6 shadow-sm border border-[#383e42]/10 hover:border-[#556b2f]/30 transition-colors">
                  <h3 className="mb-3 text-lg font-semibold text-black">
                    Opposition to Destruction of Unity
                  </h3>
                  <p className="text-[#383e42]">
                    We oppose any attempt to destroy the ethnic, religious or cultural unity
                    of a local community or minority.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm border border-[#383e42]/10 hover:border-[#556b2f]/30 transition-colors">
                  <h3 className="mb-3 text-lg font-semibold text-black">
                    Right to Self-Determination
                  </h3>
                  <p className="text-[#383e42]">
                    We oppose any denial of the right to self-determination, property and
                    development of communities and minorities.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-sm border border-[#383e42]/10 hover:border-[#556b2f]/30 transition-colors">
                  <h3 className="mb-3 text-lg font-semibold text-black">
                    Protection of Identity
                  </h3>
                  <p className="text-[#383e42]">
                    We oppose any assault on the religious, linguistic and cultural identity
                    of communities and minorities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section id="support" className="bg-[#556b2f] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                Support Our Mission
              </h2>
              <p className="mb-8 text-xl text-white/90">
                Help us document violations and support victims of violence. Together, we can
                make a difference.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="/contact"
                  className="rounded-md bg-white px-6 py-3 text-base font-medium text-[#556b2f] transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#556b2f]"
                >
                  Get in Touch
                </a>
                <a
                  href="/reports"
                  className="rounded-md border-2 border-white px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#556b2f]"
                >
                  View Reports
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
