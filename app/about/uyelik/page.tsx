import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export default function UyelikPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="bg-gradient-to-br from-[#383e42]/7 via-[#383e42]/3 to-[#f2f2f2] py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="mb-4 text-4xl font-bold text-black">Membership</h1>
            <div className="h-1 w-20 bg-[#556b2f]"></div>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Membership Types */}
            <section className="rounded-lg border border-[#383e42]/10 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-black">Types of Membership</h2>
              <div className="space-y-6">
                <div className="rounded-lg border border-[#383e42]/10 p-4">
                  <h3 className="mb-3 text-xl font-semibold text-black">Members</h3>
                  <p className="mb-3 text-[#383e42] leading-relaxed">
                    Any natural or legal person who commits to the association's purpose and makes a regular
                    contribution may become a member. Members have voting rights at the General Meeting.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-black">Rights:</h4>
                    <ul className="ml-4 list-disc space-y-1 text-[#383e42]">
                      <li>One vote at the General Meeting</li>
                      <li>Right to participate in all association activities</li>
                      <li>Right to be elected to the Executive Board</li>
                    </ul>
                  </div>
                  <div className="mt-3 space-y-2">
                    <h4 className="font-semibold text-black">Obligations:</h4>
                    <ul className="ml-4 list-disc space-y-1 text-[#383e42]">
                      <li>Payment of the minimum contribution determined by the General Meeting</li>
                      <li>Notification of any change of residence</li>
                      <li>Commitment to the association's purpose and statutes</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-[#383e42]/10 p-4">
                  <h3 className="mb-3 text-xl font-semibold text-black">Supporting Members</h3>
                  <p className="mb-3 text-[#383e42] leading-relaxed">
                    Supporting members support the association's work through contributions but do not have
                    voting rights. They may attend General Meetings but cannot vote or be elected to the Board.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-black">Rights:</h4>
                    <ul className="ml-4 list-disc space-y-1 text-[#383e42]">
                      <li>Right to attend General Meetings (without voting rights)</li>
                      <li>Right to determine the amount of their regular contribution</li>
                      <li>Right to participate in association activities</li>
                    </ul>
                  </div>
                  <div className="mt-3 space-y-2">
                    <h4 className="font-semibold text-black">Obligations:</h4>
                    <ul className="ml-4 list-disc space-y-1 text-[#383e42]">
                      <li>Notification of any change of residence</li>
                      <li>Commitment to the association's purpose</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Application Process */}
            <section className="rounded-lg border border-[#383e42]/10 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-black">Application Process</h2>
              <div className="space-y-4 text-[#383e42] leading-relaxed">
                <p>
                  The application for admission must be submitted in writing to the Board of Directors,
                  which will decide on admission. By applying for membership, the applicant acknowledges
                  the association's statutes.
                </p>
                <p>
                  By joining, the member/supporter agrees that personal data known and required in connection
                  with membership will be stored electronically exclusively for the association's purposes
                  and will not be passed on to third parties, in compliance with the data protection regulations
                  of the Federal Data Protection Act (BDSG).
                </p>
              </div>
            </section>

            {/* Termination of Membership */}
            <section className="rounded-lg border border-[#383e42]/10 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-2xl font-bold text-black">Termination of Membership</h2>
              <div className="space-y-4 text-[#383e42] leading-relaxed">
                <p>
                  Membership/supporting membership ends by:
                </p>
                <ul className="ml-4 list-disc space-y-2">
                  <li>Death of the member/supporting member</li>
                  <li>Resignation (by written declaration)</li>
                  <li>Expulsion from the association (by decision of the Arbitration Commission or General Meeting)</li>
                  <li>In the case of legal entities, by their dissolution</li>
                  <li>Removal if membership fees are at least twelve months in arrears despite written reminder</li>
                </ul>
                <p className="mt-4">
                  Upon leaving the association, all rights of the member expire.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="rounded-lg border border-[#556b2f]/30 bg-[#556b2f]/5 p-6">
              <h2 className="mb-4 text-2xl font-bold text-black">Interested in Membership?</h2>
              <p className="mb-4 text-[#383e42] leading-relaxed">
                If you would like to become a member or supporting member of the Association for Human Rights
                in Syria, please contact us through our contact page or send a written application to the
                Board of Directors.
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
