
import React from 'react';
import type { Language } from '../types';

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const PinterestIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 0 0-3.1 19.5c-.1-1-.2-2.5 0-3.6l1.3-5.6s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.3.6 1.3 1.4 0 .9-.5 2.2-.8 3.4-.2.9.4 1.7 1.3 1.7 1.5 0 2.7-1.6 2.7-3.9 0-2-1.5-3.5-3.6-3.5-2.5 0-4 1.8-4 3.8 0 .7.3 1.5.6 1.8 0 .1 0 .2 0 .3l-.2.8c-.1.2-.2.2-.4.1-1.2-.5-1.9-2.2-1.9-3.5 0-2.8 2.1-5.5 6-5.5 3.1 0 5.6 2.2 5.6 5.2 0 3.1-2 5.6-4.7 5.6-1 0-1.9-.5-2.2-1.1l-.6 2.3c-.2.9-.8 2.1-1.2 2.8a10 10 0 1 0 7.8 0" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TikTokIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 4c.4 1.6 1.6 3 3.1 3.5V11a5 5 0 1 1-5-5v3a2 2 0 1 0 2 2V4h-.1z" />
  </svg>
);

const SocialLink: React.FC<{ href: string; label: string; icon: React.ReactNode }> = ({ href, label, icon }) => (
  <a 
    href={href} 
    className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400 hover:text-black transition-all duration-300 group"
  >
    <span className="opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
      {icon}
    </span>
    <span>{label}</span>
  </a>
);

interface FooterProps {
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const isHebrew = language === 'he';

  return (
    <footer id="contact" className="bg-white border-t border-gray-100 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <h2 className="text-2xl serif tracking-widest uppercase mb-6">Lisette</h2>
          <p className="text-xs text-gray-400 leading-loose tracking-wider uppercase">
            {isHebrew ? (
              <>
                תל אביב / לונדון / פריז<br />
                info@lisettehautecouture.com
              </>
            ) : (
              <>
                London / Paris / New York<br />
                info@lisettehautecouture.com
              </>
            )}
          </p>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold mb-6">
            {isHebrew ? 'פנייה' : 'Inquiry'}
          </h4>
          <ul className="space-y-4 text-xs tracking-wider text-gray-500 uppercase">
            <li>
              <a href="#" className="hover:text-black transition-colors">
                {isHebrew ? 'תיאום פגישת כלה' : 'Bridal Consultation'}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition-colors">
                {isHebrew ? 'עיתונות ומדיה' : 'Press & Media'}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition-colors">
                {isHebrew ? 'קניינים וסיטונאות' : 'Wholesale'}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold mb-6">
            {isHebrew ? 'לגלות' : 'Explore'}
          </h4>
          <ul className="space-y-4 text-xs tracking-wider text-gray-500 uppercase">
            <li>
              <a href="#collections" className="hover:text-black transition-colors">
                {isHebrew ? 'קולקציות' : 'Collections'}
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-black transition-colors">
                {isHebrew ? 'הסטודיו' : 'The Studio'}
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition-colors">
                {isHebrew ? 'קיימות' : 'Sustainability'}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold mb-6">
            {isHebrew ? 'הצטרפו אלינו' : 'Join Us'}
          </h4>
          <p className="text-xs text-gray-500 mb-6 uppercase tracking-widest leading-relaxed">
            {isHebrew
              ? 'קבלו עדכון על תצוגות פרטיות והשקות חדשות.'
              : 'Receive updates on our private viewings and new releases.'}
          </p>
          <div className="relative">
            <input 
              type="email" 
              placeholder={isHebrew ? 'אימייל' : 'Email'} 
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black text-xs font-light"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
          <span className="text-[10px] uppercase tracking-widest text-gray-400">
            {isHebrew ? '© 2026 סטודיו Lisette' : '© 2026 Lisette Studio'}
          </span>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-500">
            <span>{isHebrew ? 'עוצב על ידי RD' : 'Built by RD'}</span>
            <a 
              href="https://ron-site.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Visit RD portfolio"
              className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center text-[9px] hover:border-black hover:text-black transition-colors"
            >
              ↗
            </a>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-10 gap-y-4 justify-center items-center">
          <SocialLink href="#" label="Instagram" icon={<InstagramIcon />} />
          <SocialLink href="#" label="Pinterest" icon={<PinterestIcon />} />
          <SocialLink href="#" label="Facebook" icon={<FacebookIcon />} />
          <SocialLink
            href="https://www.tiktok.com/@lizpedaya?_r=1&_t=ZS-93ddG5xGPJ6"
            label="TikTok"
            icon={<TikTokIcon />}
          />
          <a href="#" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
            Vogue Runway
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
