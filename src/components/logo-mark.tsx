type LogoMarkProps = {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
};

const sizeMap = {
  sm: "h-9 w-9",
  md: "h-12 w-12",
  lg: "h-16 w-16",
};

export function LogoMark({
  src,
  alt,
  size = "md",
  variant = "light",
}: LogoMarkProps) {
  return (
    <div
      className={[
        "flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border p-2",
        sizeMap[size],
        variant === "light"
          ? "border-white/10 bg-white"
          : "border-white/10 bg-white/[0.05]",
      ].join(" ")}
    >
      <img src={src} alt={alt} className="max-h-full max-w-full object-contain" />
    </div>
  );
}