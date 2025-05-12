import { cn } from "@/lib/utils";

interface GradientBackgroundProps {
  className?: string;
  children: React.ReactNode;
  variant?: "light" | "accent" | "dark";
}

export function GradientBackground({
  className,
  children,
  variant = "light",
}: GradientBackgroundProps) {
  const gradientStyles = {
    light: "bg-gradient-to-b from-white to-gray-50",
    accent: "bg-gradient-to-b from-gray-50 to-white/80 via-[#fdf7ff]",
    dark: "bg-gradient-to-b from-gray-100 to-white",
  };
  
  return (
    <div className={cn(gradientStyles[variant], className)}>
      {children}
    </div>
  );
} 