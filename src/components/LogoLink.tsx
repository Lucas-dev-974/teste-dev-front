import { Logo } from "@/assets/Logo";

export function LogoLink() {
  return (
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a href="/">
      <Logo />
    </a>
  );
}
