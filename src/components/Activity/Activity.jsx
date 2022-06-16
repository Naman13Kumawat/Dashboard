import "./Activity.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function Activity() {
  return (
    <div className="act_container">
      <span>
        <h1>Upcoming Meeting</h1>
        <MoreVertIcon className="icon" />
      </span>
      <hr />
      <span>
        <h3>Today's Meetings</h3>
        <ArrowDropDownIcon className="icon" />
      </span>
      <span>
        <p className="links">30 minute call with clients</p>
        <MoreVertIcon className="icon" />
      </span>
      <h2>Project Discovery call</h2>
      <p>
        Due soon <b>09:20 am</b>
      </p>
      <span>
        <span className="img_box">
          <img className="img1" src="/images/profile4.png" alt="profile" />
          <img className="img2" src="/images/profile3.png" alt="profile" />
          <img className="img3" src="/images/profile3.png" alt="profile" />
          <div className="more">5+</div>
        </span>
        <button>
          <AddIcon className="icon" />
          Invite
        </button>
      </span>

      <span>
        <p className="links">30 minute call with clients</p>
        <MoreVertIcon className="icon" />
      </span>
      <h2>Project Discovery call</h2>
      <p>
        Due soon <b>09:20 am</b>
      </p>
      <span>
        <span className="img_box">
          <img className="img1" src="/images/profile4.png" alt="profile" />
          <img className="img2" src="/images/profile3.png" alt="profile" />
          <img className="img3" src="/images/profile3.png" alt="profile" />
          <div className="more">5+</div>
        </span>
        <button>
          <AddIcon className="icon" />
          Invite
        </button>
      </span>

      <span>
        <h3>Schedule Meetings</h3>
        <ArrowDropUpIcon className="icon" />
      </span>

      <span>
        <h1>Recent Activity</h1>
        <MoreVertIcon className="icon" />
      </span>
      <div className="recents">
        <span className="message">
        <div className="circle"></div>
          <span className="details">
            <p>Thanks you for booking a meeting with JJ.</p>
            <p>Ashish Sharma</p>
            <p className="date">Jun 14, 2021 at 5:31 PM</p>
          </span>
          <span>
            <img src="images/profile5.png" alt="profile" />
          </span>
        </span>
        <hr />
        <span className="message">
        <div className="circle"></div>
          <span className="details">
            <p>You received a message from Ashish.</p>
            <p>Ashish Sharma</p>
            <p className="date">Jun 14, 2021 at 5:31 PM</p>
          </span>
          <span>
            <img src="images/profile5.png" alt="profile" />
          </span>
        </span>
        <hr />
        <span className="message">
        <div className="circle"></div>
          <span className="details">
            <p>You received a message from Ashish.</p>
            <p>Ashish Sharma</p>
            <p className="date">Jun 14, 2021 at 5:31 PM</p>
          </span>
          <span>
            <img src="images/profile6.png" alt="profile" />
          </span>
        </span>
        <hr />
        <span className="message">
        <div className="circle"></div>
          <span className="details">
            <p>You received a message from Ashish.</p>
            <p>Ashish Sharma</p>
            <p className="date">Jun 14, 2021 at 5:31 PM</p>
          </span>
          <span>
            <img src="images/profile6.png" alt="profile" />
          </span>
        </span>
        <hr />
        
      </div>
    </div>
  );
}
