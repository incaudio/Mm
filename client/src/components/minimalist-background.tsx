import React from "react";

interface MinimalistBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

// A minimalist, continuous background (soft gradient, no animation)
export function MinimalistBackground({ children, className = "" }: MinimalistBackgroundProps) {
  return (
    <div
      className={`relative min-h-screen w-full ${className}`}
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #334155 100%)",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}