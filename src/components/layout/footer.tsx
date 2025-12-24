import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { addUTMParams } from '@/lib/utils';

const footerLinks = {
  product: [
    { name: 'Semua Produk', href: '/products' },
    { name: 'SUKUNERGY Original', href: '/products/sukunergy-original' },
    { name: 'SUKUNERGY Chocolate', href: '/products/sukunergy-chocolate' },
    { name: 'SUKUNERGY Mixed Nuts', href: '/products/sukunergy-mixed-nuts' },
  ],
  company: [
    { name: 'Tentang Kami', href: '/about' },
    { name: 'Tim Kami', href: '/team' },
    { name: 'Mengapa Sukun?', href: '/why-breadfruit' },
    { name: 'Kontak', href: '/contact' },
  ],
  support: [
    { name: 'FAQ', href: '/faq' },
    { name: 'Cara Konsumsi', href: '/cara-konsumsi-penyimpanan' },
    { name: 'Kebijakan Privasi', href: '/privacy-policy' },
    { name: 'Syarat & Ketentuan', href: '/terms-of-service' },
  ],
};

// SVG Icons for social media
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const ShopeeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c2.296 0 4.32 1.152 5.544 2.904-.216.024-.432.048-.648.096-1.08.24-2.016.72-2.784 1.416-.384-.048-.768-.072-1.152-.072-3.528 0-6.384 2.856-6.384 6.384 0 .384.024.768.072 1.152-.696.768-1.176 1.704-1.416 2.784-.048.216-.072.432-.096.648C3.552 16.32 2.4 14.296 2.4 12c0-5.304 4.296-9.6 9.6-9.6zm0 4.8c.264 0 .528.024.792.048-.528.624-.912 1.368-1.104 2.184-.216-.024-.456-.024-.696-.024-2.208 0-4.008 1.8-4.008 4.008 0 .24 0 .48.024.696-.816.192-1.56.576-2.184 1.104-.024-.264-.048-.528-.048-.792 0-3.528 2.856-6.384 6.384-6.384zm0 2.4c2.208 0 4.008 1.8 4.008 4.008S14.208 17.616 12 17.616 7.992 15.816 7.992 13.608 9.792 9.6 12 9.6zm0 2.4c-.888 0-1.608.72-1.608 1.608S11.112 15.216 12 15.216s1.608-.72 1.608-1.608S12.888 12 12 12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const socialLinks = [
  {
    name: 'Instagram',
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/sukunergy',
    icon: InstagramIcon,
    color: 'instagram',
  },
  {
    name: 'WhatsApp',
    href: `https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER}`,
    icon: WhatsAppIcon,
    color: 'whatsapp',
  },
  {
    name: 'Shopee',
    href: process.env.NEXT_PUBLIC_SHOPEE_URL || 'https://shopee.co.id/sukunergy',
    icon: ShopeeIcon,
    color: 'shopee',
  },
  {
    name: 'LinkedIn',
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/company/sukunergy',
    icon: LinkedInIcon,
    color: 'linkedin',
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 text-xl font-bold mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span>SUKUNERGY</span>
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              Smart fuel for your day. Bar protein sukun sehat, rendah kalori, tinggi protein untuk gaya hidup aktif Anda.
            </p>
            <p className="text-gray-400 text-xs">
              Mendukung produk lokal Indonesia 🇮🇩
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Produk</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Perusahaan</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Bantuan</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Contact */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <h4 className="font-semibold text-white mb-2">Ikuti Kami</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant={social.color as any}
                    size="icon"
                    asChild
                  >
                    <Link
                      href={addUTMParams(social.href, social.name.toLowerCase(), 'social', 'footer')}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <social.icon />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-300 text-sm mb-2">
                Hubungi Kami
              </p>
              <p className="text-gray-400 text-xs">
                Email: {process.env.SUPPORT_EMAIL || 'hello@sukunergy.id'}
              </p>
              <p className="text-gray-400 text-xs">
                WhatsApp: +{process.env.NEXT_PUBLIC_WA_NUMBER || '6281234567890'}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} SUKUNERGY. All rights reserved.
            </p>
            <div className="flex space-x-6 text-xs text-gray-400">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/refund-policy" className="hover:text-primary transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
