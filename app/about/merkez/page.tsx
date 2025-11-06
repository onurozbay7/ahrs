import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export default function MerkezPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="bg-gradient-to-br from-[#383e42]/7 via-[#383e42]/3 to-[#f2f2f2] py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="mb-4 text-4xl font-bold text-black">Center</h1>
            <div className="h-1 w-20 bg-[#556b2f]"></div>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Headquarters */}
            <section className="rounded-lg border border-[#383e42]/10 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-black">Headquarters</h2>
              <div className="space-y-3 text-[#383e42]">
                <p>
                  <span className="font-semibold text-black">Location:</span> Neuss, Germany
                </p>
                <p>
                  <span className="font-semibold text-black">Founded:</span> April 12, 2025 in Mannheim
                </p>
                <p className="leading-relaxed">
                  The Association for Human Rights in Syria has its headquarters in Neuss, Germany.
                  The association was founded in Mannheim on April 12, 2025, and is registered in
                  the Register of Associations.
                </p>
              </div>
            </section>

            {/* Branch Offices */}
            <section className="rounded-lg border border-[#383e42]/10 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-black">Branch Offices</h2>
              <div className="space-y-4 text-[#383e42] leading-relaxed">
                <p>
                  The branch offices are essential pillars of the association's work. They are appointed
                  and supported by the Executive Board. Branch offices may only act within the framework
                  of the Articles of Association with the approval of the Board of Directors.
                </p>
                <p>
                  The Board may also establish branches or international commissions outside Germany as needed
                  and establish external offices of the Association for these purposes.
                </p>
              </div>
            </section>

            {/* International Representations */}
            <section className="rounded-lg border border-[#383e42]/10 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-black">International Representations</h2>
              <p className="text-[#383e42] leading-relaxed">
                The association may establish international representations and commissions outside Germany
                to better serve its mission of protecting human rights in Syria and neighboring countries.
                These offices work in coordination with the headquarters in Neuss and operate under the
                framework of the association's statutes.
              </p>
            </section>

            {/* Contact */}
            <section className="rounded-lg border border-[#556b2f]/30 bg-[#556b2f]/5 p-6">
              <h2 className="mb-4 text-2xl font-bold text-black">Contact Information</h2>
              <p className="mb-4 text-[#383e42] leading-relaxed">
                For inquiries about the headquarters, branch offices, or international representations,
                please contact us through our contact page.
              </p>
              <a
                href="/contact"
                className="inline-block rounded-md bg-[#556b2f] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[#4a5d26]"
              >
                Contact Us
              </a>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
