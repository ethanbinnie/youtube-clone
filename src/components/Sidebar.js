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
    <div
      className={props.isMinimised === false ? "sidebar" : "sidebarMinimised"}
    >
      <div className={props.isMinimised === false && "sideBorder"}> 
        <div
          className={
            props.isMinimised === false ? "direction" : "directionMinimised"
          }
        >
          <Home /> <p>Home</p>
        </div>
        <div
          className={
            props.isMinimised === false ? "direction" : "directionMinimised"
          }
        >
          <Shorts /> <p>Shorts</p>
        </div>
        <div
          className={
            props.isMinimised === false ? "direction" : "directionMinimised"
          }
        >
          <Subscriptions /> <p>Subscriptions</p>
        </div>
      </div>
      <div className={props.isMinimised === false && "sideBorder"}>
        <div
          className={
            props.isMinimised === false ? "direction" : "directionMinimised"
          }
        >
          <Library /> <p>Library</p>
        </div>
        <div className="direction">
          {props.isMinimised === false && <History />}{" "}
          {props.isMinimised === false && <p>History</p>}
        </div>
        <div className="direction">
          {props.isMinimised === false && <Yourvideos />}{" "}
          {props.isMinimised === false && <p>History</p>}
        </div>
        <div className="direction">
          {props.isMinimised === false && <Yourcourses />}{" "}
          {props.isMinimised === false && <p>Your Courses</p>}
        </div>
        <div className="direction">
          {props.isMinimised === false && <Watchlater />}{" "}
          {props.isMinimised === false && <p>Watch Later</p>}
        </div>
        <div className="direction">
          {props.isMinimised === false && <Showmore />}{" "}
          {props.isMinimised === false && <p>Show more</p>}
        </div>
      </div>
      <div className={props.isMinimised === false && "sideBorder"}>
        {props.isMinimised === false && <h4>Subscriptions</h4>}
        <div className="direction">
          {props.isMinimised === false && (
            <img src="sidemen.jpeg" alt="sidemen" className="channels" />
          )}
          {props.isMinimised === false && <p>Sidemen</p>}
        </div>
        <div className="direction">
          {props.isMinimised === false && (
            <img
              src="moresidemen.jpeg"
              alt="moresidemen"
              className="channels"
            />
          )}
          {props.isMinimised === false && <p>More Sidemen</p>}
        </div>
        <div className="direction">
          {props.isMinimised === false && (
            <img src="ryantrahan.jpeg" alt="ryantrahan" className="channels" />
          )}
          {props.isMinimised === false && <p>Ryan Trahan</p>}
        </div>
        <div className="direction">
          {props.isMinimised === false && (
            <img src="nickfry.jpeg" alt="nickfry" className="channels" />
          )}
          {props.isMinimised === false && <p>Nick Fry</p>}
        </div>
        <div className="direction">
          {props.isMinimised === false && (
            <img src="jomezpro.jpeg" alt="jomezpro" className="channels" />
          )}
          {props.isMinimised === false && <p>Jomez Pro</p>}
        </div>
        <div className="direction">
          {props.isMinimised === false && (
            <img
              src="vlogcreations.jpeg"
              alt="vlogcreations"
              className="channels"
            />
          )}
          {props.isMinimised === false && <p>Vlog Creations</p>}
        </div>
        <div className="direction">
          {props.isMinimised === false && (
            <img src="goodgood.jpeg" alt="goodgoodgolf" className="channels" />
          )}
          {props.isMinimised === false && <p>Good Good</p>}
        </div>
      </div>
      <div className={props.isMinimised === false && "sideBorder"}>
        {props.isMinimised === false && <h4>Explore</h4>}
        <div className="direction">
          {props.isMinimised === false && <Trending />}{" "}
          {props.isMinimised === false && <p>Trending</p>}
        </div>
        <div className="direction">
          {props.isMinimised === false && <Music />}{" "}
          {props.isMinimised === false && <p>Music</p>}
        </div>
        <div className="direction">
          {props.isMinimised === false && <Movies />}{" "}
          {props.isMinimised === false && <p>Movies</p>}
        </div>
        <div className="direction">
          {props.isMinimised === false && <Gaming />}{" "}
          {props.isMinimised === false && <p>Gaming</p>}
        </div>
        <div className="direction">
          {props.isMinimised === false && <Sports />}{" "}
          {props.isMinimised === false && <p>Sports</p>}
        </div>
        <div className="direction">
          {props.isMinimised === false && <Learning />}{" "}
          {props.isMinimised === false && <p>Learning</p>}
        </div>
        <div className="direction">
          {props.isMinimised === false && <Fashion />}{" "}
          {props.isMinimised === false && <p>Fashion & Beauty</p>}
        </div>
      </div>
      <div className={props.isMinimised === false && "sideBorder"}>
        {props.isMinimised === false && <h4>More from YouTube</h4>}
        <div className="direction">
          {props.isMinimised === false && <Ytpremium />}{" "}
          {props.isMinimised === false && <p>YouTube Premium</p>}
        </div>
        <div className="direction">
          {props.isMinimised === false && <Ytstudio />}{" "}
          {props.isMinimised === false && <p>YouTube Studio</p>}
        </div>
        <div className="direction">
          {props.isMinimised === false && <Ytmusic />}{" "}
          {props.isMinimised === false && <p>YouTube Music</p>}
        </div>
        <div className="direction">
          {props.isMinimised === false && <Ytkids />}{" "}
          {props.isMinimised === false && <p>YouTube Kids</p>}
        </div>
      </div>
      <div className={props.isMinimised === false && "sideBorder"}>
        <div className="direction">
          {props.isMinimised === false && <Settings />}{" "}
          {props.isMinimised === false && <p>Settings</p>}
        </div>
        <div className="direction">
          {props.isMinimised === false && <Report />}{" "}
          {props.isMinimised === false && <p>Report</p>}
        </div>
        <div className="direction">
          {props.isMinimised === false && <Help />}{" "}
          {props.isMinimised === false && <p>Help</p>}
        </div>
        <div className="direction">
          {props.isMinimised === false && <Feedback />}{" "}
          {props.isMinimised === false && <p>Send Feedback</p>}
        </div>
      </div>
    </div>
  );
}
