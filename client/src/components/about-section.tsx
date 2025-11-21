import { ScrollReveal } from "./scroll-reveal";
import { AnimatedBackground } from "./animated-background";

export function AboutSection() {
  return (
    <div className="relative min-h-screen w-full py-20 md:py-32 px-4 md:px-6">
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-12" style={{ letterSpacing: "-1px" }}>
              About Mate Nations
            </h2>
            <div className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-300 space-y-6">
              <p>
                <strong>Mate Nations</strong> is an innovative record label revolutionizing the music industry. We embrace and celebrate all music genres, welcoming artists from every musical background and style.
              </p>
              <p>
                As a full-service record label, we provide comprehensive artist development, professional recording services, global distribution, and strategic marketing campaigns. Our artists benefit from industry expertise, creative support, and direct access to major streaming platforms and media outlets.
              </p>
              <p>
                At Mate Nations, we transform talented artists into global superstars through innovative music production, strategic brand development, and worldwide distribution networks.
              </p>
              <p>
                Founded on the principle that exceptional music knows no boundaries, we combine state-of-the-art technology with traditional artistry to create unforgettable sonic experiences. Our team of industry veterans, creative visionaries, and technical experts work collaboratively to nurture raw talent from studio to stage. With cutting-edge recording facilities, strategic partnerships with global streaming platforms, and a deep commitment to artistic integrity, we're not just launching careers—we're building legacies. Whether you're an emerging artist with a groundbreaking sound or an established performer ready to evolve, Mate Nations provides the platform, expertise, and support to make your musical dreams a reality.
              </p>
              
              {/* Additional info visible only on desktop */}
              <div className="hidden md:block mt-8 pt-8 border-t border-gray-700">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-pink-400">
                  What Sets Us Apart
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-3">
                    <h4 className="text-xl font-medium text-blue-300">Industry Expertise</h4>
                    <p className="text-gray-400">
                      Our team brings decades of combined experience from major labels, indie success stories, and cutting-edge music technology ventures. We understand both the creative and business sides of the industry.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl font-medium text-purple-300">Global Network</h4>
                    <p className="text-gray-400">
                      With partnerships spanning across continents, we ensure your music reaches audiences worldwide. From streaming platforms to radio stations, we have the connections that matter.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl font-medium text-pink-300">Artist-First Philosophy</h4>
                    <p className="text-gray-400">
                      We believe in empowering artists, not controlling them. Transparent contracts, fair royalty splits, and creative freedom are at the core of every partnership we forge.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl font-medium text-cyan-300">Innovation & Technology</h4>
                    <p className="text-gray-400">
                      Leveraging AI-powered analytics, blockchain distribution, and immersive experiences, we're pioneering the future of music while respecting its timeless essence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
