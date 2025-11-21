import { ScrollReveal } from "./scroll-reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UnisonLogo } from "./ui/unison-logo";
import { OfficialUnisonLogo } from "./ui/unison-logo";
import { UnisonLogoNoShape } from "./ui/unison-logo";
import { AnimatedBackground } from "./animated-background";

export function PartnerSection() {
  return (
    <AnimatedBackground intensity="medium" className="py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16">Our Partner Community</h2>
          <Card className="rounded-2xl p-8 md:p-12 text-center bg-black/30 backdrop-blur-md border-white/10 shadow-none">
            <CardContent className="p-0">
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-4">Unison Music App</h3>
                <p className="text-xl text-muted-foreground mb-8">Make music together. Let your unfinished tracks grow.</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                <div className="text-left">
                  <h4 className="text-xl md:text-2xl font-semibold mb-4">Ungatekeep Collaboration</h4>
                  <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                    <li>• Collaborate live with musicians worldwide</li>
                    <li>• Seamless stitching and stem creation</li>
                    <li>• Inspire and connect with creative community</li>
                    <li>• Automate stems with a single click</li>
                  </ul>
                </div>
                <div className="flex justify-center items-center h-full">
                  <div
                    className="rounded-2xl overflow-hidden flex items-center justify-center w-full"
                    style={{
                      aspectRatio: '4 / 3',
                      maxWidth: 420,
                      width: '100%',
                      background: 'url(https://cdn.dribbble.com/userupload/3914102/file/original-5025a045fbda683af63bf5113891a4c7.png?resize=1024x768&vertical=center) center/cover no-repeat'
                    }}
                  />
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  asChild 
                  className="bg-white text-black hover:bg-gray-200"
                  data-testid="button-unison-visit"
                >
                  <a href="https://unisonmusicapp.com/" target="_blank" rel="noopener noreferrer">
                    Visit Unison Music App
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </AnimatedBackground>
  );
}
