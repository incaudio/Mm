import { ModernHero } from "@/components/modern-hero";
import { ModernMenu } from "@/components/modern-menu";
import { ModernAbout } from "@/components/modern-about";
import { ModernContact } from "@/components/modern-contact";
import { ModernFooter } from "@/components/modern-footer";
import { ThemeToggle } from "@/components/theme-toggle";

export default function HomeModern() {
  return (
    <div className="relative min-h-screen">
      <ThemeToggle />
      <ModernMenu />

      <ModernHero />

      <div id="about">
        <ModernAbout />
      </div>

      <ModernContact />

      <ModernFooter />
    </div>
  );
}
