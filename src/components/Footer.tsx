export default function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-10 flex items-center justify-between">
        <span className="font-display text-lg text-ink">StackLeap</span>
        <span className="text-[11px] text-ink-3">
          © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}
