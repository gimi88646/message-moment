import PhoneIcon from "../../public/Icons/cellphone.svg";
import Desktop from "../../public/Icons/laptop.svg";
import Tablet from "../../public/Icons/tablet.svg";
import TV from "../../public/Icons/television.svg";
import Console from "../../public/Icons/controller.svg";
import SecureIcon from "../../public/Icons/secureIcon.png";
import PrivateIcon from "../../public/Icons/privateIcon.png";
import BrowseBasedIcon from "../../public/Icons/browseBasedIcon.png";
import ProjectModeIcon from "../../public/Icons/projectModeIcon888.png";

// Message Momments Platforms
const platforms = [
  { icon: PhoneIcon, name: "Phone" },
  { icon: Desktop, name: "Desktop" },
  { icon: Tablet, name: "Tablet" },
  { icon: TV, name: "Smart TV" },
  { icon: Console, name: "Consoles" },
];

// Desktop Discover Steps
const desktopDiscoverSteps = [
  { id: 1, img: SecureIcon, extraIcon: false, name: "Secure" },
  { id: 2, img: PrivateIcon, extraIcon: false, name: "Private" },
  { id: 3, img: BrowseBasedIcon, extraIcon: false, name: "Browser Based" },
  { id: 4, img: ProjectModeIcon, extraIcon: true, name: "Project Mode" },
  { id: 5, img: SecureIcon, extraIcon: false, name: "Secure" },
  { id: 6, img: PrivateIcon, extraIcon: false, name: "Private" },
  { id: 7, img: BrowseBasedIcon, extraIcon: false, name: "Browser Based" },
  { id: 8, img: ProjectModeIcon, extraIcon: true, name: "Project Mode" },
];

// Mobile Discover Steps
const mobileDiscoverSteps = [
  { id: 1, img: SecureIcon, extraIcon: false, name: "Secure" },
  { id: 2, img: PrivateIcon, extraIcon: false, name: "Private" },
  { id: 3, img: BrowseBasedIcon, extraIcon: false, name: "Browser Based" },
  { id: 4, img: ProjectModeIcon, extraIcon: true, name: "Project Mode" },
];

export { platforms, desktopDiscoverSteps, mobileDiscoverSteps };
