import {
  Home,
  Shorts,
  Subscriptions,
  Library,
  History,
  Yourvideos,
  Yourcourses,
  Watchlater,
  Showmore,
} from "../Icons";
import {
  Trending,
  Music,
  Movies,
  Gaming,
  Sports,
  Learning,
  Fashion,
  Settings,
  Report,
  Help,
  Feedback,
} from "../Icons";
import { Ytpremium, Ytstudio, Ytmusic, Ytkids } from "../Icons";


export default function Sidebar(props) {
  return (
    <div className={props.isMinimised === true ? "sidebarMinimised" : "sidebar"}>
      <div className="sideSection">
        <div className="direction">
          <Home />
          {props.isMinimised === false && <p>Home</p>} 
        </div>
        <div className="direction">
          <Shorts />
          {props.isMinimised === false && <p>Shorts</p>}
        </div>
        <div className="direction">
          <Subscriptions /> {props.isMinimised === false && <p>Subscriptions</p>}
        </div>
      </div>
      <div className="sideSection">
        <div className="direction">
          <Library /> {props.isMinimised === false && <p>Library</p>}
        </div>
        <div className="direction">
          <History /> {props.isMinimised === false && <p>History</p>}
        </div>
        <div className="direction">
          <Yourvideos /> {props.isMinimised === false && <p>History</p>}
        </div>
        <div className="direction">
          <Yourcourses /> {props.isMinimised === false && <p>Your Courses</p>}
        </div>
        <div className="direction">
          <Watchlater /> {props.isMinimised === false && <p>Watch Later</p>}
        </div>
        <div className="direction">
          <Showmore /> {props.isMinimised === false && <p>Show more</p>}
        </div>
      </div>
      <div className="sideSection">
        <h4>Subscriptions</h4>
        <div className="direction">
          <img src="sidemen.jpeg" alt="sidemen" className="channels" />{" "}
          <p>Sidemen</p>
        </div>
        <div className="direction">
          <img src="moresidemen.jpeg" alt="moresidemen" className="channels" />{" "}
          <p>More Sidemen</p>
        </div>
        <div className="direction">
          <img src="ryantrahan.jpeg" alt="ryantrahan" className="channels" />{" "}
          <p>Ryan Trahan</p>
        </div>
        <div className="direction">
          <img src="nickfry.jpeg" alt="nickfry" className="channels" />{" "}
          <p>Nick Fry</p>
        </div>
        <div className="direction">
          <img src="jomezpro.jpeg" alt="jomezpro" className="channels" />{" "}
          <p>Jomez Pro</p>
        </div>
        <div className="direction">
          <img
            src="vlogcreations.jpeg"
            alt="vlogcreations"
            className="channels"
          />{" "}
          <p>Vlog Creations</p>
        </div>
        <div className="direction">
          <img src="goodgood.jpeg" alt="goodgoodgolf" className="channels" />{" "}
          <p>Good Good</p>
        </div>
      </div>
      <div className="sideSection">
        <h4>Explore</h4>
        <div className="direction">
          <Trending /> <p>Trending</p>
        </div>
        <div className="direction">
          <Music /> <p>Music</p>
        </div>
        <div className="direction">
          <Movies /> <p>Movies</p>
        </div>
        <div className="direction">
          <Gaming /> <p>Gaming</p>
        </div>
        <div className="direction">
          <Sports /> <p>Sports</p>
        </div>
        <div className="direction">
          <Learning /> <p>Learning</p>
        </div>
        <div className="direction">
          <Fashion /> <p>Fashion & Beauty</p>
        </div>
      </div>
      <div className="sideSection">
        <h4>More from YouTube</h4>
        <div className="direction">
          <Ytpremium /> <p>YouTube Premium</p>
        </div>
        <div className="direction">
          <Ytstudio /> <p>YouTube Studio</p>
        </div>
        <div className="direction">
          <Ytmusic /> <p>YouTube Music</p>
        </div>
        <div className="direction">
          <Ytkids /> <p>YouTube Kids</p>
        </div>
      </div>
      <div className="sideSection">
        <div className="direction">
          <Settings /> <p>Settings</p>
        </div>
        <div className="direction">
          <Report /> <p>Report</p>
        </div>
        <div className="direction">
          <Help /> <p>Help</p>
        </div>
        <div className="direction">
          <Feedback /> <p>Send Feedback</p>
        </div>
      </div>
    </div>
  );
}
