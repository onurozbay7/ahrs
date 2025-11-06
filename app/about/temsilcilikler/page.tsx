import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export default function TemsilciliklerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="bg-gradient-to-br from-[#383e42]/7 via-[#383e42]/3 to-[#f2f2f2] py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="mb-4 text-4xl font-bold text-black">International Representations</h1>
            <div className="h-1 w-20 bg-[#556b2f]"></div>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="mb-6 text-lg leading-8 text-[#383e42]">
              This page content will be added soon.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

