import { motion } from "framer-motion";
import { Instagram, Youtube } from "lucide-react";
import { SiBluesky, SiFacebook, SiX } from "react-icons/si";

export function ModernFooter() {
  const navigationLinks = [
    { label: "Home", href: "#" },
    { label: "For Artists", href: "#for-artists" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" }
  ];

  const servicesLinks = [
    { label: "Music Discovery", href: "#" },
    { label: "Artist Development", href: "#" },
    { label: "Distribution", href: "#" },
    { label: "Partnership", href: "#" }
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://instagram.com/matenations" },
    { icon: SiX, label: "X", href: "https://x.com/matenations" },
    { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@mateexclusives" },
    { icon: SiFacebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61580036896615" },
    { icon: SiBluesky, label: "Bluesky", href: "https://bsky.app/profile/matenations.bsky.social" }
  ];

  return (
    <footer className="relative py-12 md:py-16 px-4 md:px-6 bg-black/90 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-500/20 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-400/20"
          >
            <h3 className="text-white text-lg md:text-xl mb-4 md:mb-6">Stay up to date with all things Mate Nation</h3>
            <p className="text-gray-300 text-sm mb-4 md:mb-6">
              Join our mailing list to be the first to know about new features and releases.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="info@matenation.org"
                className="flex-1 bg-white/10 border-2 border-white/30 rounded-l-full px-4 md:px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 backdrop-blur-xl text-sm md:text-base"
              />
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 md:px-8 py-3 rounded-r-full transition-colors shadow-lg text-sm md:text-base whitespace-nowrap">
                Sign up
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gray-500/20 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-400/20"
          >
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              <div>
                <ul className="space-y-3">
                  {navigationLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="text-gray-200 hover:text-white transition-colors text-sm">
                        • {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  {servicesLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="text-gray-200 hover:text-white transition-colors text-sm">
                        • {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-500/20 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-400/20"
          >
            <h4 className="text-white mb-4 md:mb-6 text-base md:text-lg">Follow us</h4>
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex flex-col items-center justify-center bg-gray-600/20 backdrop-blur-xl rounded-2xl p-3 md:p-4 hover:bg-gray-500/30 transition-colors group border border-gray-400/20"
                >
                  <social.icon className="w-5 h-5 md:w-6 md:h-6 text-white mb-1 md:mb-2" />
                  <span className="text-[10px] md:text-xs text-gray-300">{social.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-400 border-t border-white/20 pt-6 md:pt-8">
          <span>© Mate Nation, 2025</span>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Media Assets</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
