import { InstagramLogo } from "@/assets/InstagramLogo";
import { Network1Logo } from "@/assets/Networkl1";
import { TwiterLogo } from "@/assets/TwiterLogo";
import { YoutubeLogo } from "@/assets/YoutubeLogo";

export function SocialNetworkLinks() {
  return (
    <div className="find-us-on">
      <a href="">
        <InstagramLogo />
      </a>
      <a href="">
        <Network1Logo />
      </a>
      <a href="">
        <TwiterLogo />
      </a>
      <a href="">
        <YoutubeLogo />
      </a>
    </div>
  );
}
