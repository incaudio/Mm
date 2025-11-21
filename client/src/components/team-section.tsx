import { ScrollReveal } from "./scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import avikImage from "@assets/AVIK_1757912854902.jpeg";
import amritImage from "@assets/Amrit_1757912855008.jpeg";
import prosperImage from "@assets/prosper_1757912855043.jpeg";
import abhayImage from "@assets/Abhay_1757912854967.jpeg";
import ceoImage from "@assets/ceo_1757912854870.jpeg";
import { AnimatedBackground } from "./animated-background";
import { MinimalistBackground } from "./minimalist-background";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  gradient: string;
  image?: string;
}

const teamData = {
  operatingManager: [
    {
      name: "Alvin",
      role: "Director",
      description: "Experienced leader overseeing daily operations and ensuring organizational efficiency at Mate Nations.",
      gradient: "from-yellow-500 to-orange-500"
    }
  ],
  leadership: [
    {
      name: "AVIK",
      role: "Founder & EDM Producer",
      description: "Visionary founder driving Mate Nations' mission to revolutionize music discovery and artist development in the electronic music space.",
      gradient: "from-purple-500 to-pink-500",
      image: avikImage
    },
    {
      name: "Alex Mendez",
      role: "Chief Executive Officer",
      description: "Strategic leader orchestrating Mate Nations' growth and ensuring operational excellence across all business verticals.",
      gradient: "from-blue-500 to-cyan-500",
      image: ceoImage
    },
    {
      name: "Amrit",
      role: "Investor & Sponsorship",
      description: "Financial strategist and partnership architect securing resources and strategic alliances for Mate Nations' expansion.",
      gradient: "from-green-500 to-emerald-500",
      image: amritImage
    }
  ],
  ar: [
    {
      name: "Abhay",
      role: "A&R Specialist",
      description: "Pop and electronic music specialist identifying next-gen artists.",
      gradient: "from-indigo-500 to-purple-500",
      image: abhayImage
    },
    {
      name: "AVIK",
      role: "A&R Lead",
      description: "Electronic and dance music expert guiding artist development.",
      gradient: "from-purple-500 to-pink-500",
      image: avikImage
    }
  ],
  digital: [
    {
      name: "Stefflen",
      role: "Head of Digital Art",
      description: "Creative director leading visual identity and digital artwork creation.",
      gradient: "from-teal-500 to-cyan-500"
    }
  ],
  video: [
    {
      name: "Soumyadeep Banik",
      role: "Head of Video Editing",
      description: "Video production maestro crafting compelling music visuals and content.",
      gradient: "from-rose-500 to-pink-500"
    }
  ],
  developers: [
    {
      name: "AVIK",
      role: "Web Developer",
      description: "Full-stack web developer architecting Mate Nations' digital platform and user experience.",
      gradient: "from-purple-500 to-pink-500",
      image: avikImage
    },
    {
      name: "Amrit",
      role: "Web Developer",
      description: "Systems engineer building robust web infrastructure and API services.",
      gradient: "from-green-500 to-emerald-500",
      image: amritImage
    },
    {
      name: "Rendra",
      role: "Web Developer",
      description: "Mobile web developer ensuring seamless cross-platform web experiences.",
      gradient: "from-orange-500 to-red-500"
    }
  ],
  releaseCoordinator: [
    {
      name: "Peter",
      role: "Release Coordinator",
      description: "Managing album releases, distribution schedules, and coordinating between artists and streaming platforms.",
      gradient: "from-cyan-500 to-blue-500"
    }
  ],
  strategist: [
    {
      name: "Prajit",
      role: "Strategist",
      description: "Developing market strategies and analyzing music trends to position our artists for maximum success.",
      gradient: "from-violet-500 to-indigo-500"
    }
  ],
  management: [
    {
      name: "Utsav Poonia",
      role: "Manager",
      description: "Operations manager ensuring seamless execution of projects and maintaining team productivity across all departments.",
      gradient: "from-amber-500 to-orange-500"
    }
  ]
};

function TeamCard({ member, size = "normal" }: { member: TeamMember; size?: "normal" | "small" | "large" }) {
  const sizeClasses = {
    small: "w-16 h-16",
    normal: "w-20 h-20", 
    large: "w-20 h-20"
  };

  const textSizes = {
    small: { name: "text-lg", role: "text-primary", desc: "text-xs" },
    normal: { name: "text-xl", role: "text-primary", desc: "text-sm" },
    large: { name: "text-xl", role: "text-primary", desc: "text-sm" }
  };

  // Simple circular avatar for members without images
  const PolygonalAvatar = ({ name, gradient, className }: { name: string; gradient: string; className: string }) => (
    <div className={`${className} bg-gradient-to-br ${gradient} rounded-full mx-auto mb-4 flex items-center justify-center`}>
      <span className="text-white font-bold text-lg">
        {name.split(' ').map(n => n[0]).join('').toUpperCase()}
      </span>
    </div>
  );

  return (
    <Card className="team-card rounded-xl p-4 md:p-6 text-center hover:scale-105 transition-all duration-300" data-testid={`card-team-${member.name.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="p-0">
        {member.image ? (
          <div className={`${sizeClasses[size]} mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br ${member.gradient}`}>
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <PolygonalAvatar 
            name={member.name}
            gradient={member.gradient}
            className={sizeClasses[size]}
          />
        )}
        <h4 className={`${textSizes[size].name} font-bold mb-2`}>{member.name}</h4>
        <p className={`${textSizes[size].role} mb-3`}>{member.role}</p>
        <p className={`${textSizes[size].desc} text-muted-foreground`}>{member.description}</p>
      </CardContent>
    </Card>
  );
}

export function TeamSection() {
  return (
    <MinimalistBackground className="py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16 md:mb-20">Our Team</h2>
          
          {/* Leadership */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center">Leadership</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {teamData.leadership.map((member) => (
                <TeamCard key={member.name} member={member} size="large" />
              ))}
            </div>
          </div>

          {/* Operating Manager */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Operating Manager</h3>
            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                {teamData.operatingManager.map((member) => (
                  <TeamCard key={member.name} member={member} size="normal" />
                ))}
              </div>
            </div>
          </div>

          {/* A&R Team */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">A&R Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {teamData.ar.map((member, index) => (
                <TeamCard key={`${member.name}-${index}`} member={member} size="normal" />
              ))}
            </div>
          </div>

          {/* Creative Teams */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Digital Artist Team */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">Digital Artist Team</h3>
              <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
                {teamData.digital.map((member) => (
                  <TeamCard key={member.name} member={member} size="normal" />
                ))}
              </div>
            </div>

            {/* Video Editing Team */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">Video Editing Team</h3>
              <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
                {teamData.video.map((member) => (
                  <TeamCard key={member.name} member={member} size="normal" />
                ))}
              </div>
            </div>
          </div>

          {/* Developers */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Development Team</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {teamData.developers.map((member, index) => (
                <TeamCard key={`${member.name}-dev-${index}`} member={member} size="small" />
              ))}
            </div>
          </div>

          {/* Release Coordinator */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Release Coordination</h3>
            <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
              {teamData.releaseCoordinator.map((member) => (
                <TeamCard key={member.name} member={member} size="normal" />
              ))}
            </div>
          </div>

          {/* Strategist */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Strategist</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamData.strategist.map((member) => (
                <TeamCard key={member.name} member={member} size="normal" />
              ))}
            </div>
          </div>

          {/* Management */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Management</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamData.management.map((member) => (
                <TeamCard key={member.name} member={member} size="normal" />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
  </MinimalistBackground>
  );
}
