import logoMark from "@/assets/amora.png";

type BrandLogoProps = {
  className?: string;
  textClassName?: string;
  subtitle?: string;
  subtitleClassName?: string;
  iconClassName?: string;
};

export default function BrandLogo({
  className = "",
  textClassName = "",
  subtitle,
  subtitleClassName = "",
  iconClassName = "",
}: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      <div className={`flex h-12 w-12 items-center justify-center rounded-sm ${iconClassName}`.trim()}>
        <img
          src={logoMark}
          alt="Amora mark"
          className="h-10 w-10 object-contain mix-blend-screen opacity-95"
        />
      </div>
      <div className="flex flex-col">
        <span
          className={`font-sans text-[1.14rem] font-medium uppercase tracking-[0.34em] text-[#3f352d] ${textClassName}`.trim()}
        >
          Amora
        </span>
        {subtitle ? (
          <span
            className={`font-sans text-[0.62rem] uppercase tracking-[0.24em] text-[#8c7660] ${subtitleClassName}`.trim()}
          >
            {subtitle}
          </span>
        ) : null}
      </div>
    </div>
  );
}