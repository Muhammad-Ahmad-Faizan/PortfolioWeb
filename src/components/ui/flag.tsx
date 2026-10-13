// Small inline flags. Emoji flags don't render on Windows (they show as "FR", "US", …),
// so these are drawn as SVG and look the same on every device.

export type CountryCode = "AE" | "FR" | "US" | "PK";

export default function Flag({ code, className = "" }: { code?: CountryCode; className?: string }) {
  const cls = `inline-block w-[18px] h-[12px] rounded-[2px] overflow-hidden shrink-0 ring-1 ring-black/20 ${className}`;
  switch (code) {
    case "AE":
      return (
        <svg viewBox="0 0 12 6" className={cls} aria-hidden>
          <rect width="12" height="2" fill="#00732F" />
          <rect y="2" width="12" height="2" fill="#FFFFFF" />
          <rect y="4" width="12" height="2" fill="#000000" />
          <rect width="3" height="6" fill="#FF0000" />
        </svg>
      );
    case "FR":
      return (
        <svg viewBox="0 0 3 2" className={cls} aria-hidden>
          <rect width="1" height="2" fill="#002395" />
          <rect x="1" width="1" height="2" fill="#FFFFFF" />
          <rect x="2" width="1" height="2" fill="#ED2939" />
        </svg>
      );
    case "US":
      return (
        <svg viewBox="0 0 19 10" className={cls} aria-hidden>
          <rect width="19" height="10" fill="#FFFFFF" />
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <rect key={`s${i}`} y={(i * 2 * 10) / 13} width="19" height={10 / 13} fill="#B22234" />
          ))}
          <rect width="7.6" height={(7 * 10) / 13} fill="#3C3B6E" />
        </svg>
      );
    case "PK":
      return (
        <svg viewBox="0 0 3 2" className={cls} aria-hidden>
          <rect width="3" height="2" fill="#01411C" />
          <rect width="0.75" height="2" fill="#FFFFFF" />
          <circle cx="1.95" cy="1" r="0.55" fill="#FFFFFF" />
          <circle cx="2.08" cy="0.9" r="0.47" fill="#01411C" />
          <circle cx="2.2" cy="0.75" r="0.11" fill="#FFFFFF" />
        </svg>
      );
    default:
      return null;
  }
}
