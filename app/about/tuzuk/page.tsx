import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export default function TuzukPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="bg-gradient-to-br from-[#383e42]/7 via-[#383e42]/3 to-[#f2f2f2] py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="mb-4 text-4xl font-bold text-black">Statute</h1>
            <div className="h-1 w-20 bg-[#556b2f]"></div>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* §1 */}
            <section className="rounded-lg border border-[#383e42]/10 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-black">§1 Title, Meeting, Fiscal Year</h2>
              <div className="space-y-3 text-[#383e42] leading-relaxed">
                <p>1. The association is established as "Association for Human Rights in Syria."</p>
                <p>2. The association is headquartered in Neuss. The association was founded in Mannheim on April 12, 2025.</p>
                <p>3. The association is politically, ethnically, and religiously independent.</p>
                <p>4. The association's fiscal year is the calendar year.</p>
              </div>
            </section>

            {/* §2 */}
            <section className="rounded-lg border border-[#383e42]/10 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-black">§2 Purpose of the Association</h2>
              <div className="space-y-4 text-[#383e42] leading-relaxed">
                <p>
                  1. The purpose of the association is to uncover and document all acts of violence perpetrated
                  by state, civilian, paramilitary, and all other pro-regime groups against Alawites and other
                  minorities in Syria and the surrounding neighboring countries, as well as to provide humanitarian
                  aid and legal assistance based on international law to victims of massacres.
                </p>
                <p>
                  2. The association opposes any attempt to destroy the ethnic or religious unity of a local
                  community or minority, its right to self-determination, property and development, religion,
                  and linguistic and cultural identity.
                </p>
                <p>
                  3. The association supports and undertakes possible search operations for missing persons in
                  Syria and neighboring countries in accordance with the UN Charter of Human Rights, with the
                  aim of encouraging the international community to prosecute the perpetrators.
                </p>
                <p>
                  4. The association will achieve its purpose through measures including:
                </p>
                <ul className="ml-4 list-disc space-y-2">
                  <li>Establishment of an archive and documentation centre</li>
                  <li>Collection, analysis, and publication of reliable, accurate, and verifiable data</li>
                  <li>Coordination with relevant human rights organizations</li>
                  <li>Development and communication of international, legally relevant standards</li>
                  <li>Participation in political decision-making processes</li>
                  <li>Lobbying and public campaigns for humanitarian aid</li>
                  <li>Preparation of legally admissible eyewitness accounts for international courts</li>
                  <li>Exposing religiously motivated intentions to kill Alawites and other religiously ethnic communities</li>
                </ul>
              </div>
            </section>

            {/* §3 */}
            <section className="rounded-lg border border-[#383e42]/10 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-black">§3 Acquisition of Membership/Supporting Membership</h2>
              <div className="space-y-3 text-[#383e42] leading-relaxed">
                <p>
                  1. Any natural or legal person who commits to the association's purpose and makes a regular
                  contribution may become a member/supporting member. The application for admission must be
                  submitted in writing to the Board of Directors, which will decide on admission.
                </p>
                <p>
                  2. By joining, the member/supporter agrees that personal data will be stored electronically
                  exclusively for the association's purposes and will not be passed on to third parties, in
                  compliance with the data protection regulations of the Federal Data Protection Act (BDSG).
                </p>
              </div>
            </section>

            {/* §4 */}
            <section className="rounded-lg border border-[#383e42]/10 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-black">§4 Termination of Membership</h2>
              <div className="space-y-3 text-[#383e42] leading-relaxed">
                <p>
                  1. Membership/supporting membership ends with the death of the member, by resignation, by
                  expulsion from the association, or in the case of legal entities, by their dissolution.
                </p>
                <p>
                  2. The arbitration commission decides on the exclusion of a member/supporter. The decision
                  may be revised by the General Assembly by a simple majority.
                </p>
                <p>
                  3. A member/sponsor may be removed if they are at least twelve months in arrears with their
                  membership fees despite a written reminder.
                </p>
                <p>4. Upon leaving the association, all rights of the member expire.</p>
              </div>
            </section>

            {/* §5 */}
            <section className="rounded-lg border border-[#383e42]/10 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-black">§5 Rights and Obligations</h2>
              <div className="space-y-4 text-[#383e42] leading-relaxed">
                <div>
                  <h3 className="mb-2 font-semibold text-black">Members:</h3>
                  <ul className="ml-4 list-disc space-y-1">
                    <li>Each member has one vote at the general meeting</li>
                    <li>Obliged to pay the minimum contribution determined by the general meeting</li>
                    <li>Obliged to notify the association of any change of residence</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-black">Supporters:</h3>
                  <ul className="ml-4 list-disc space-y-1">
                    <li>Right to attend the general meeting, but without voting rights</li>
                    <li>May not run for the board of directors</li>
                    <li>Right to determine the amount of their regular contribution</li>
                    <li>Obliged to notify the association of any change of residence</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* §6-19 - Summary */}
            <section className="rounded-lg border border-[#383e42]/10 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-black">§6-19 Organization Structure</h2>
              <div className="space-y-4 text-[#383e42] leading-relaxed">
                <p>
                  <span className="font-semibold text-black">§6 Bodies:</span> The bodies of the association
                  are the general meeting and the board of directors.
                </p>
                <p>
                  <span className="font-semibold text-black">§7 General Meeting:</span> An annual general
                  meeting is held, to which all members must be invited. The General Meeting is responsible
                  for receiving reports, elections, amendments to the Articles of Association, and dissolution.
                </p>
                <p>
                  <span className="font-semibold text-black">§9 Executive Board:</span> The Executive Board
                  consists of the Chairperson, Deputy Chairperson, Treasurer, and two other members (up to 6
                  total). The Board manages day-to-day business and implements resolutions of the General Meeting.
                </p>
                <p>
                  <span className="font-semibold text-black">§10-11 Board Terms:</span> The Board is elected
                  for a term of three years. Resolutions are made by simple majority.
                </p>
                <p>
                  <span className="font-semibold text-black">§12-13 Amendments & Dissolution:</span> Amendments
                  to the Articles require a two-thirds majority. Dissolution requires three-quarters of members
                  present.
                </p>
                <p>
                  <span className="font-semibold text-black">§14 Non-profit Status:</span> The association
                  pursues exclusively and directly non-profit purposes within the meaning of the German Fiscal Code.
                </p>
                <p>
                  <span className="font-semibold text-black">§15-17 Other Bodies:</span> Three auditors are
                  elected annually. An Advisory Board of at least five members provides advisory functions.
                  An Arbitration Commission of three members resolves disputes.
                </p>
                <p>
                  <span className="font-semibold text-black">§18 Branch Offices:</span> Branch offices are
                  essential pillars of the association's work and may only act within the framework of the
                  Articles of Association with the approval of the Board of Directors.
                </p>
                <p>
                  <span className="font-semibold text-black">§19 Entry into Force:</span> This version of the
                  Articles of Association shall enter into force upon registration in the Register of Associations.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="rounded-lg border border-[#556b2f]/30 bg-[#556b2f]/5 p-6">
              <h2 className="mb-4 text-2xl font-bold text-black">Full Statute Document</h2>
              <p className="mb-4 text-[#383e42] leading-relaxed">
                For the complete and official statute document, please contact us through our contact page.
                The full document contains all detailed provisions and legal requirements.
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
