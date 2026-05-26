export default function SectionTitle({ number, title }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span
        className="text-sm shrink-0"
        style={{
          fontFamily: "var(--font-jetbrains)",
          color: "var(--accent)",
        }}
      >
        {number}.
      </span>
      <h2
        className="text-2xl sm:text-3xl font-bold shrink-0"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h2>
      <div
        className="h-px flex-1 max-w-xs"
        style={{ background: "var(--border)" }}
      />
    </div>
  );
}
