interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => (
  <div className="mb-16">
    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.95] max-w-2xl">{title}</h2>
    {subtitle && <p className="text-lg text-white/50 max-w-lg leading-relaxed">{subtitle}</p>}
  </div>
);
