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
    "xbox": Xbox,
    "playstation": Playstation,
    "nintendo": Switch,
    "ios": Mobile,
    "android": Mobile,
    "linux": Linux,
  };

  return platforms?.map((platform): string => {
    const { slug, name } = platform.platform; //TODO: Changer de nom parce que là c'est vraiment pas ouf
    return `
      <div class="icon">
        <div class="hover">${name}</div>
        <img class="icon" src="${platformIconsMap[slug] ||= Other}" alt="${name}">
      </div>
    `;
  }).join("\n");
};

export default PlatformIcons;