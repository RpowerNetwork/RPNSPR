import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Icons } from '@/components/icons';

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
];

const footerLinks = {
  Solutions: [
    { name: 'Find a Property', href: '#' },
    { name: 'List your Property', href: '#' },
    { name: 'Agent Dashboard', href: '#' },
    { name: 'Home Loans', href: '#' },
  ],
  Support: [
    { name: 'Pricing', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Help Center', href: '#' },
    { name: 'Legal & Privacy', href: '#' },
  ],
  Company: [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Blog', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Icons.logo className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">Property SPR</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-xs">
              Your trusted partner in finding the perfect property.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary"
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <p className="font-semibold text-foreground font-headline">{title}</p>
                <ul className="mt-4 space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Property SPR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
