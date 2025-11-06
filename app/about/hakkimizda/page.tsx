import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export default function HakkimizdaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="bg-gradient-to-br from-[#383e42]/7 via-[#383e42]/3 to-[#f2f2f2] py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="mb-4 text-4xl font-bold text-black">About Us</h1>
            <div className="h-1 w-20 bg-[#556b2f]"></div>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Association Information */}
            <section className="rounded-lg border border-[#383e42]/10 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-black">Association Information</h2>
              <div className="space-y-3 text-[#383e42]">
                <p>
                  <span className="font-semibold text-black">Name:</span> Association for Human Rights in Syria
                </p>
                <p>
                  <span className="font-semibold text-black">Founded:</span> April 12, 2025 in Mannheim
                </p>
                <p>
                  <span className="font-semibold text-black">Headquarters:</span> Neuss, Germany
                </p>
                <p>
                  <span className="font-semibold text-black">Status:</span> The association is politically, ethnically, and religiously independent
                </p>
                <p>
                  <span className="font-semibold text-black">Fiscal Year:</span> Calendar year
                </p>
              </div>
            </section>

            {/* Mission */}
            <section className="rounded-lg border border-[#383e42]/10 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-black">Our Mission</h2>
              <p className="mb-4 text-[#383e42] leading-relaxed">
                The aim of the Association for Human Rights in Syria is to uncover and document
                all acts of violence perpetrated by state, civilian, paramilitary, and all other
                pro-regime groups against Alawites and other minorities in Syria and the surrounding
                neighbouring countries.
              </p>
              <p className="mb-4 text-[#383e42] leading-relaxed">
                We also aim to support the victims of state orchestrated violence with humanitarian
                and legal assistance in accordance with international law.
              </p>
              <div className="mt-4">
                <h3 className="mb-3 font-semibold text-black">Our Activities Include:</h3>
                <ul className="ml-4 list-disc space-y-2 text-[#383e42]">
                  <li>Establishment of an archive and documentation centre</li>
                  <li>Collection, analysis, and publication of reliable, accurate, and verifiable data</li>
                  <li>Coordination with human rights organizations to uncover crimes against humanity</li>
                  <li>Development and communication of international, legally relevant standards</li>
                  <li>Participation in political decision-making processes</li>
                  <li>Lobbying and public campaigns for humanitarian aid</li>
                  <li>Preparation of legally admissible eyewitness accounts for international courts</li>
                  <li>Search operations for missing persons in Syria and neighboring countries</li>
                </ul>
              </div>
            </section>

            {/* Principles */}
            <section className="rounded-lg border border-[#383e42]/10 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-black">Our Principles</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold text-black">
                    Opposition to Destruction of Unity
                  </h3>
                  <p className="text-[#383e42] leading-relaxed">
                    We oppose any attempt to destroy the ethnic, religious or cultural unity
                    of a local community or minority.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-black">
                    Right to Self-Determination
                  </h3>
                  <p className="text-[#383e42] leading-relaxed">
                    We oppose any denial of the right to self-determination, property and
                    development of communities and minorities.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-black">
                    Protection of Identity
                  </h3>
                  <p className="text-[#383e42] leading-relaxed">
                    We oppose any assault on the religious, linguistic and cultural identity
                    of communities and minorities.
                  </p>
                </div>
              </div>
            </section>

            {/* Organization Structure */}
            <section className="rounded-lg border border-[#383e42]/10 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-black">Organization Structure</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold text-black">General Meeting</h3>
                  <p className="text-[#383e42] leading-relaxed">
                    The highest decision-making body of the association. An annual general meeting is held
                    where members decide on important matters including elections, amendments to the statutes,
                    and the association's dissolution.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-black">Executive Board</h3>
                  <p className="text-[#383e42] leading-relaxed">
                    The Executive Board consists of the Chairperson, Deputy Chairperson, Treasurer, and
                    two other members (up to 6 members total). The Board manages the day-to-day business
                    and implements resolutions of the General Meeting.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-black">Advisory Board</h3>
                  <p className="text-[#383e42] leading-relaxed">
                    The Advisory Board consists of at least five members who provide advisory and supportive
                    functions to the General Meeting and Board of Directors, utilizing their expertise and contacts.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-black">Arbitration Commission</h3>
                  <p className="text-[#383e42] leading-relaxed">
                    The Arbitration Commission consists of three members responsible for resolving disputes
                    regarding the statutes and measures against members.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-black">Auditors</h3>
                  <p className="text-[#383e42] leading-relaxed">
                    Three auditors are elected by the General Meeting to audit the financial management
                    of the Board of Directors annually.
                  </p>
                </div>
              </div>
            </section>

            {/* Team */}
            <section className="rounded-lg border border-[#383e42]/10 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-black">Our Team</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-[#383e42]/10 p-4">
                  <h3 className="mb-1 font-semibold text-black">Prof. Dr. Jens Kreinath</h3>
                  <p className="text-sm text-[#383e42]">Member</p>
                </div>
                <div className="rounded-lg border border-[#383e42]/10 p-4">
                  <h3 className="mb-1 font-semibold text-black">Necati Sahin</h3>
                  <p className="text-sm text-[#383e42]">Member</p>
                </div>
                <div className="rounded-lg border border-[#383e42]/10 p-4">
                  <h3 className="mb-1 font-semibold text-black">Elif Aksu</h3>
                  <p className="text-sm text-[#383e42]">Member</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
