import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="bg-gradient-to-br from-[#383e42]/7 via-[#383e42]/3 to-[#f2f2f2] py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="mb-4 text-4xl font-bold text-black">Contact</h1>
            <div className="h-1 w-20 bg-[#556b2f]"></div>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-[#383e42]/10 bg-white p-8 shadow-sm">
            <div className="mb-6">
              <h2 className="mb-4 text-2xl font-semibold text-black">Get in Touch</h2>
              <p className="text-[#383e42]">
                Please contact us for inquiries, support, or to report violations.
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#383e42] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-[#383e42]/20 px-4 py-2 text-black focus:border-[#556b2f] focus:outline-none focus:ring-2 focus:ring-[#556b2f]"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#383e42] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full rounded-md border border-[#383e42]/20 px-4 py-2 text-black focus:border-[#556b2f] focus:outline-none focus:ring-2 focus:ring-[#556b2f]"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#383e42] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full rounded-md border border-[#383e42]/20 px-4 py-2 text-black focus:border-[#556b2f] focus:outline-none focus:ring-2 focus:ring-[#556b2f]"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button className="rounded-md bg-[#556b2f] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[#4a5d26] focus:outline-none focus:ring-2 focus:ring-[#556b2f] focus:ring-offset-2">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

