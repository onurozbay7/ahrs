import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export default function ReportsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="bg-gradient-to-br from-[#383e42]/7 via-[#383e42]/3 to-[#f2f2f2] py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="mb-4 text-4xl font-bold text-black">Reports</h1>
            <div className="h-1 w-20 bg-[#556b2f]"></div>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Meeting Protocol */}
            <article
              id="unicef-meeting"
              className="rounded-lg border border-[#383e42]/10 bg-white p-8 shadow-sm"
            >
              <div className="mb-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full bg-[#556b2f]/10 px-3 py-1 text-xs font-medium text-[#556b2f]">
                    Meeting Protocol
                  </span>
                  <span className="text-sm text-[#383e42]">May 5, 2025</span>
                </div>
                <h2 className="mb-2 text-2xl font-bold text-black">
                  Protocol of the Meeting with UNICEF Germany
                </h2>
              </div>

              <div className="space-y-6 text-[#383e42]">
                <div>
                  <h3 className="mb-2 font-semibold text-black">Date & Location</h3>
                  <p>Date: May 5, 2025</p>
                  <p>Location: Cologne</p>
                  <p>Time: 12:30 PM – 2:00 PM</p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-black">Participants</h3>
                  <div className="space-y-2">
                    <div>
                      <p className="font-medium text-black">UNICEF Germany:</p>
                      <ul className="ml-4 list-disc space-y-1">
                        <li>Christian Schneider (Managing Director)</li>
                        <li>Robert Ewers (Team Leader, International Programs)</li>
                        <li>Ninja Charbonneau (Head of Press Department / Spokesperson)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-black">Association for Human Rights in Syria:</p>
                      <ul className="ml-4 list-disc space-y-1">
                        <li>Necati Sahin</li>
                        <li>Prof. Dr. Jens Kreinath</li>
                        <li>Elif Aksu</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-black">Agenda Item 1: Introduction and Purpose</h3>
                  <p>
                    The meeting aimed to exchange views on existing programs and possible actions by UNICEF to protect children in conflict regions of Syria. The focus was on potential support approaches for Alawite children, especially regarding human rights violations. Observations, concerns, and concrete demands were presented.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-black">Agenda Item 2: UNICEF Germany – Role and Mandate</h3>
                  <p className="mb-2">
                    Christian Schneider explained the tasks of the German Committee for UNICEF:
                  </p>
                  <ul className="ml-4 list-disc space-y-1">
                    <li>Public relations and fundraising</li>
                    <li>Lobbying (e.g., in the Bundestag)</li>
                    <li>Awareness campaigns about UNICEF's global work</li>
                  </ul>
                  <p className="mt-2">
                    UNICEF Germany acts as an interface to international UNICEF operations but does not have decision-making authority over specific measures in crisis areas like Syria. Decisions are made by the regional office in Amman under the supervision of the headquarters in New York.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-black">Agenda Item 3: Child Protection Programs</h3>
                  <p className="mb-2">
                    Robert Ewers presented UNICEF's international child protection work:
                  </p>
                  <ul className="ml-4 list-disc space-y-1">
                    <li>Goal: Long-term development of functioning child protection systems</li>
                    <li>UNICEF can offer consulting, training, and support to local partners</li>
                    <li>UNICEF must remain neutral and always work with local partners</li>
                    <li>Projects like building an orphanage require a clear mandate and approval from the regional teams</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-black">Agenda Item 4: Situation in Syria and Possible Support</h3>
                  <p>
                    Following the Battle of Aleppo (2018), Christian Schneider and Ninja Charbonneau were actively involved in humanitarian aid for children. However, only the regional office in Amman is responsible for concrete projects in Syria.
                  </p>
                  <p className="mt-2">
                    UNICEF Germany will facilitate contacts and forward relevant information but has no operational responsibility for actions in Syria. Concerns were raised about the risk of cultural identity loss or ethnocide, especially through foster family models used after the earthquake.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-black">Agenda Item 5: Human Rights Violations Against Children</h3>
                  <p>
                    The discussion addressed documented human rights violations such as the recruitment of child soldiers and other atrocities. UNICEF can only act based on verified information and existing sources.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-black">Agenda Item 6: Next Steps</h3>
                  <p className="mb-2">
                    UNICEF Germany expressed strong interest in the work of the Association for Human Rights in Syria. Communication with the regional office in Amman will be initiated promptly.
                  </p>
                  <p className="mb-2">
                    Reports and notes – especially the documentation folder with contributions from Prof. Dr. Jens Kreinath – will be handed over to UNICEF Germany and forwarded to the Syria regional team.
                  </p>
                  <p>
                    In the case of a potential orphanage project, UNICEF Germany offered possible professional support, such as training for caregivers, psychological programs for children, and quality assurance to ensure child protection and professional aid delivery.
                  </p>
                </div>

                <div className="border-t border-[#383e42]/10 pt-4">
                  <p className="text-sm text-[#6b7280]">
                    Protocol prepared by: Elif Aksu
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
