import { cn } from "@/lib/utils";

interface WaveDividerProps {
  className?: string;
  fillColor?: string;
  direction?: "up" | "down";
}

export function WaveDivider({
  className,
  fillColor = "fill-white",
  direction = "down",
}: WaveDividerProps) {
  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <svg
        className={cn("w-full h-12 md:h-16", {
          "rotate-180": direction === "up",
        })}
        viewBox="0 0 1440 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 22L48 17.3C96 12.7 192 3.3 288 0.2C384 -3 480 0 576 5.7C672 11.3 768 19.7 864 24.8C960 30 1056 32 1152 29.8C1248 27.7 1344 21.3 1392 18.2L1440 15V54H1392C1344 54 1248 54 1152 54C1056 54 960 54 864 54C768 54 672 54 576 54C480 54 384 54 288 54C192 54 96 54 48 54H0V22Z"
          className={fillColor}
        />
      </svg>
    </div>
  );
} 