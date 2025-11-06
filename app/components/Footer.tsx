import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="mb-4 text-lg font-semibold text-white">AHRS</h3>
            <p className="mb-4 text-sm leading-6 text-[#6b7280]">
              Association for Human Rights in Syria. We are dedicated to uncovering
              and documenting acts of violence and supporting victims with humanitarian
              and legal assistance.
            </p>
            <p className="text-xs text-[#6b7280]">
              © {new Date().getFullYear()} Association for Human Rights in Syria. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about/hakkimizda" className="text-[#6b7280] hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-[#6b7280] hover:text-white transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/reports" className="text-[#6b7280] hover:text-white transition-colors">
                  Reports
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-[#6b7280] hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#6b7280] hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:contact@ahrs.org" className="text-[#6b7280] hover:text-white transition-colors">
                  contact@ahrs.org
                </a>
              </li>
              <li className="text-xs text-[#6b7280]">
                For urgent matters, please contact us via email
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

