import { Text } from "./texts/Text";
import { SocialNetworkLinks } from "./SocialNetworkLinks";

import "./Footer.css";

export function Footer(props: { fixed?: boolean }) {
  return (
    <div className={"footer " + (props.fixed ? "fixed bottom-0" : "")}>
      <Text
        text="© 2021 Landify UI Kit. All rights reserved"
        color="gray-light"
        size="sm"
      />
      <SocialNetworkLinks />
    </div>
  );
}
