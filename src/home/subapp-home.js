import { React, loadSubApp } from "subapp-react";
import electrodePng from "../../static/electrode.png";
import { Link, Image } from "../components/Link";
import { Sidenav } from "../components/sidenav.jsx";
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
const _links = [
  {
    text: "Home",
    href: "#home",
    icon: LibraryBooks,
  },
  {
    icon: LocationOn,
    text: "locatoin",
    onClick: async function (e) {
      try {
        captureStream = await navigator.getUserMedia({ video: true });
      } catch (err) {
        console.error("Error: " + err);
      }
      return captureStream;
    },
  },
];
const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        <Link href="https://nba.com">link</Link>
        <Image
          src="https://cdn.nba.net/assets/logos/teams/secondary/web/CHI.svg"
          href="https://nba.com"
        ></Image>
      </h1>
      <Sidenav links={_links}>sd</Sidenav>
    </div>
  );
};

export default loadSubApp({ Component: Home, name: "Home" });
