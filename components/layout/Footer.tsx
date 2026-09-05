import { Facebook, Instagram, Linkedin, XIcon } from '@/assets/icons';

const FOOTER_COLUMNS = [
  { title: 'Product', links: ['Features', 'Pricing', 'Integrations', 'Changelog'] },
  { title: 'Company', links: ['About', 'Careers', 'Blog', 'Press'] },
  { title: 'Resources', links: ['Help Center', 'API Docs', 'Community', 'Status'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'Cookies'] },
];

const SOCIALS = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: XIcon, label: 'X' },
  { icon: Instagram, label: 'Instagram' },
];

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center border-t border-border-stroke bg-[#f5f3ef]">
      <div className="flex w-full container mx-auto flex-col gap-16 px-4 pb-10 pt-20 sm:px-6 lg:px-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex w-full flex-col gap-6 lg:max-w-sm">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="flex size-6 items-center justify-center rounded-md bg-primary">
                  <span className="text-[15px] font-black text-white">N</span>
                </div>
                <span className="text-lg font-extrabold text-text-primary">Novi</span>
              </div>
              <p className="text-sm text-text-secondary">
                Calm tools for fast teams. Integrated sprints, specs, and threads.
              </p>
            </div>
            <div className="flex w-full flex-col gap-2.5">
              <p className="text-[13px] font-semibold text-text-primary">
                Stay updated with our changelog
              </p>
              <div className="flex w-full gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 rounded-md border border-border-stroke bg-white px-3 py-2.5 text-[13px] text-text-secondary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="shrink-0 rounded-md bg-text-primary px-4 py-2.5 text-[13px] font-semibold text-white transition hover:bg-slate-800">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-12">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title} className="flex w-[120px] flex-col gap-4">
                <p className="text-[13px] font-bold text-text-primary">{col.title}</p>
                <div className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <p key={link} className="text-[13px] text-text-secondary">
                      {link}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-4 border-t border-border-stroke pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-slate-500">© 2026 Novi, Inc. All rights reserved.</p>
          <div className="flex gap-4">
            {SOCIALS.map(({ icon: Icon, label }) => (
              <Icon
                key={label}
                width={18}
                height={18}
                className="text-slate-500 transition hover:text-text-primary"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
