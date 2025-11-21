import { ScrollReveal } from "./scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import ambassadorDjImage from "@assets/ambassador_dj_1757912854805.jpeg";
import ambassadorArtistImage from "@assets/ambassador_artist_1757912842410.jpeg";
import { AnimatedBackground } from "./animated-background";
import { MinimalistBackground } from "./minimalist-background";

export function AmbassadorSection() {
  return (
    <MinimalistBackground className="py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16">Our Brand Ambassadors</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Card className="rounded-2xl p-6 md:p-8 bg-black/30 backdrop-blur-md border-white/10 text-center hover:scale-105 transition-transform duration-300">
              <CardContent className="p-0">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-blue-600">
                  <img 
                    src={ambassadorDjImage} 
                    alt="Masibulele Pika"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Masibulele Pika</h3>
                <p className="text-lg text-muted-foreground mb-4">Professional DJ & Music Curator</p>
                <p className="text-sm leading-relaxed text-gray-300">
                  Masibulele Pika brings cutting-edge DJ skills and deep music knowledge to Mate Nations. As a professional DJ, he represents our commitment to discovering and promoting exceptional talent in the electronic and dance music scenes.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl p-6 md:p-8 bg-black/30 backdrop-blur-md border-white/10 text-center hover:scale-105 transition-transform duration-300">
              <CardContent className="p-0">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-pink-500 to-purple-600">
                  <img 
                    src={ambassadorArtistImage} 
                    alt="Demetrius Lucas"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">Demetrius Lucas</h3>
                <p className="text-base md:text-lg text-muted-foreground mb-4">Award-winning Music Producer</p>
                <p className="text-sm leading-relaxed text-gray-300">
                  Demetrius Lucas is an innovative music producer who embodies Mate Nations' vision of revolutionary sound. His expertise in modern production techniques and artist development makes him an invaluable ambassador for our record label.
                </p>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      </div>
  </MinimalistBackground>
  );
}
