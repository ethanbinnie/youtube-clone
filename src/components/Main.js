import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Gallery from "./Gallery";

export default function Main(props) {
  return (
    <div className="main">
      <div className="header-2">
        <div>
          <p className="headerTopics">All</p>
        </div>
        <div>
          <p className="headerTopics">Sports Leagues</p>
        </div>
        <div>
          <p className="headerTopics">Frisbee Golf</p>
        </div>
        <div>
          <p className="headerTopics">Rugby Union</p>
        </div>
        <div>
          <p className="headerTopics">Music</p>
        </div>
        <div>
          <p className="headerTopics">KSI</p>
        </div>
        <div>
          <p className="headerTopics">World Cup</p>
        </div>
        <div>
          <p className="headerTopics">Podcasts</p>
        </div>
        <div>
          <p className="headerTopics">Combat Sports</p>
        </div>
        <div>
          <p className="headerTopics">Recently Uploaded</p>
        </div>
        <div>
          <p className="headerTopics">New To You</p>
        </div>
        <div>
          <ChevronRightIcon width={24} height={24} />
        </div>
      </div>
      <div className={props.isMinimised === false ? "videos" : "videosExpanded"}>
          <div>
            <Gallery
              thumbnail="sidemenkai.jpeg"
              profile="sidemen.jpeg"
              title="20 WOMEN VS 1 SIDEMEN: KAI CENAT EDITION"
              name="Sidemen"
              views="48M views"
              date="6 months ago"
            />
          </div>
          <div>
            <Gallery
              thumbnail="nickvid.jpeg"
              profile="nickfry.jpeg"
              title="Spearfishing for Food ISLAND CAMPING Catch n Cook"
              name="Nick Fry"
              views="380K views"
              date="11 months ago"
            />
          </div>
          <div>
            <Gallery
              thumbnail="jacobcodevid.jpeg"
              profile="jacobbinnie.jpeg"
              title="*SUPER DETAILED* code vlog 😅 A Day In The Life Of A Software Engineer"
              name="Jacob Binnie"
              views="162K views"
              date="5 months ago"
            />
          </div>
          <div>
            <Gallery
              thumbnail="ryanpenny.jpeg"
              profile="ryantrahan.jpeg"
              title="I Survived On €0.01 For 1 Week"
              name="Ryan Trahan"
              views="8.2M views"
              date="3 weeks ago"
            />
          </div>
          <div>
            <Gallery
              thumbnail="jacobsun.jpeg"
              profile="jacobcollier.jpeg"
              title="Jacob Collier - The Sun Is In Your Eyes (Voice Memo)"
              name="Jacob Collier"
              views="666K views"
              date="2 years ago"
            />
          </div>
          <div>
            <Gallery
              thumbnail="loganksi.jpeg"
              profile="loganpaul.jpeg"
              title="I Ended KSI’s Career"
              name="Logan Paul"
              views="5.9M views"
              date="2 months ago"
            />
          </div>
          <div>
            <Gallery
              thumbnail="golfamongus.jpeg"
              profile="goodgood.jpeg"
              title="Among Us Meets Golf | Good Good"
              name="Good Good"
              views="594K views"
              date="11 days ago"
            />
          </div>
          <div>
            <Gallery
              thumbnail="nickboat.jpeg"
              profile="nickfry.jpeg"
              title="EP 25 - Sand Crab Canoe Mission (Coconut Chilli Recipe) | Catch n Fry"
              name="Nick Fry"
              views="206K views"
              date="1 year ago"
            />
          </div>
          <div>
            <Gallery
              thumbnail="vlogpoker.jpeg"
              profile="vlogcreations.jpeg"
              title="Obviously Counting Cards at a Casino"
              name="Vlog Creations"
              views="1.7M views"
              date="1 year ago"
            />
          </div>
          <div>
            <Gallery
              thumbnail="snakesvid.jpeg"
              profile="norollsbarred.jpeg"
              title="Snakes & Ladders, But ONLY SNAKES | House Rules"
              name="No Rolls Barred"
              views="458K views"
              date="2 months ago"
            />
          </div>
          <div>
            <Gallery
              thumbnail="jomezace.jpeg"
              profile="jomezpro.jpeg"
              title="Will Parker Welck end the Practice Round ACE Drought?!"
              name="Jomez Pro"
              views="124K views"
              date="1 month ago"
            />
          </div>
          <div>
            <Gallery
              thumbnail="golfblind.jpeg"
              profile="goodgood.jpeg"
              title="We Play Golf But Our Caddies Are BlindFolded | Good Good"
              name="Good Good"
              views="1.1M views"
              date="1 year ago"
            />
          </div>
      </div>
    </div>
  );
}
