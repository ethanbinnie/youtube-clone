import { Nav, YouTube, Create, Bell } from "../Icons";
import { MicrophoneIcon } from "@heroicons/react/24/solid";
export default function Header() {
  return (
    <div className="header">
      <div className="header-1">
        <div className="headerContent">
          <Nav /> <YouTube />
        </div>
        <div className="headerContent">
          <input
            type="text"
            placeholder="Search"
            className="searchBar"
            id="search"
          />{" "}
          <MicrophoneIcon width={24} height={24} className="micIcon" />
        </div>
        <div className="headerContent" id="headerContent3">
          <Create /> <Bell />{" "}
          <img src="profile.jpg" alt="profile" className="profile" />
        </div>
      </div>
    </div>
  );
}
