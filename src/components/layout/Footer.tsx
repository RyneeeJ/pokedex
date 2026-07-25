export default function Footer() {
  const dummyLinksClass =
    "text-sm text-(--text-secondary) hover:underline cursor-pointer";
  return (
    <div className="border-border flex min-h-22 items-center justify-between border-t bg-(--footer-bg) px-6 shadow-xs">
      <div className="flex flex-col justify-center gap-1">
        <span className="text-lg font-semibold">Pokèdex Encyclopedia</span>
        <span className="text-sm text-(--text-secondary)">
          &copy; {new Date().getFullYear()} Pokèdex. All rights reserved.
        </span>
      </div>

      <ul className="flex items-center gap-6">
        <li className={dummyLinksClass}>Privacy Policy</li>
        <li className={dummyLinksClass}>Terms of Service</li>
        <li className={dummyLinksClass}>Contact Us</li>
      </ul>
    </div>
  );
}
