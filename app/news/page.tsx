import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

const newsItems = [
  {
    id: 1,
    date: 'May 5, 2025',
    title: 'Meeting with UNICEF Germany',
    excerpt: 'AHRS representatives met with UNICEF Germany in Cologne to discuss child protection programs and potential support for children in conflict regions of Syria.',
    category: 'Partnership',
    link: '/reports#unicef-meeting',
  },
];

export default function NewsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="bg-gradient-to-br from-[#383e42]/7 via-[#383e42]/3 to-[#f2f2f2] py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="mb-4 text-4xl font-bold text-black">News</h1>
            <div className="h-1 w-20 bg-[#556b2f]"></div>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="rounded-lg border border-[#383e42]/10 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-[#556b2f]/30"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-sm font-medium text-[#556b2f]">{item.date}</span>
                  <span className="rounded-full bg-[#556b2f]/10 px-3 py-1 text-xs font-medium text-[#556b2f]">
                    {item.category}
                  </span>
                </div>
                <h2 className="mb-3 text-2xl font-bold text-black">{item.title}</h2>
                <p className="mb-4 text-[#383e42] leading-relaxed">{item.excerpt}</p>
                <Link
                  href={item.link}
                  className="inline-flex items-center text-sm font-medium text-[#556b2f] transition-colors hover:text-[#4a5d26]"
                >
                  Read more
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
