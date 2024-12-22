import { Text } from "./texts/Text";
import "./Footer.css";
import { SocialNetworkLinks } from "./SocialNetworkLinks";

export function Footer() {
  return (
    <div className="footer">
      <Text text="© 2021 Landify UI Kit. All rights reserved" color="gray" />
      <SocialNetworkLinks />
    </div>
  );
}
