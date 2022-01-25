import { stringLiteral } from "@babel/types";
import { Platform } from "../../interfaces";
import Linux from "../../assets/images/linux.svg";
import Mobile from "../../assets/images/mobile.svg";
import Other from "../../assets/images/other.svg";
import Playstation from "../../assets/images/ps4.svg";
import Switch from "../../assets/images/switch.svg";
import Windows from "../../assets/images/windows.svg";
import Xbox from "../../assets/images/xbox.svg";

const PlatformIcons = (platforms: Platform[]): any => {
  type IconsMap = { [key: string]: string; }

  const platformIconsMap: IconsMap = {
    "pc": Windows,
    "playstation5": Playstation,
    "xbox-one": Xbox,
    "playstation4": Playstation,
    "xbox-series-x": Xbox,
    "nintendo-switch": Switch,
    "ios": Mobile,
    "android": Mobile,
    "linux": Linux,
  };

  console.log(Windows)

  return platforms?.map(({ platform }: Platform): string => {
    const { slug, name } = platform;
    return `
      <img class="icon" src="${platformIconsMap[slug] ||= Other}" alt="${name}">
    `;
  }).join("\n");
};

export default PlatformIcons;