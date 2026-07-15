interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 md:mb-14">
      {label && (
        <span className="inline-block text-xs font-mono text-[#5FA8A0] uppercase tracking-wider mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#F5F1EA]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[#A39C90] text-base md:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}