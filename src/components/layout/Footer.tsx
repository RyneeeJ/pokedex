export default function Footer() {
  return (
    <div className="flex min-h-[80px] flex-col justify-center border-t border-(--border) bg-(--footer-bg) px-6 shadow-xs">
      <span>Pokèdex Encyclopedia</span>
      <span className="text-sm text-(--text-secondary)">
        &copy; {new Date().getFullYear()} Pokèdex. All rights reserved.
      </span>
    </div>
  );
}
