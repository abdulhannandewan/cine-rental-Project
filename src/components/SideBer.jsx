import TrendingSvg from "../assets/icons/trending.svg";
import NewRealeseSvg from "../assets/icons/newRelease.svg";
import ComingSoonSvg from "../assets/icons/commingSoon.svg";
import WatchLaterSvg from "../assets/icons/watchLater.svg";
import FavoriteSvg from "../assets/icons/favourite.svg";

const Sideber = () => {
  return (
    <>
      <aside>
        <ul className="space-y-2">
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
              href="#"
            >
              <img src={TrendingSvg} height="24" alt="" />
              <span>Trending</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img
                src={NewRealeseSvg}
                width="24"
                height="24"
                alt="newRealease"
              />
              <span>New Releases</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img
                src={ComingSoonSvg}
                width="24"
                height="24"
                alt="comingSoon"
              />
              <span>Coming Soon</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={FavoriteSvg} width="24" height="24" alt="favorite" />
              <span>Favourites</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img
                src={WatchLaterSvg}
                width="24"
                height="24"
                alt="watchLater"
              />
              <span>Watch Later</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sideber;
