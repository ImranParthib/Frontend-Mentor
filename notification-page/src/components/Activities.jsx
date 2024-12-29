import Activity from "./Activity";
import PropTypes from "prop-types";

import MarkWebber from "../assets/images/avatar-mark-webber.webp";
import AngelaGray from "../assets/images/avatar-angela-gray.webp";
import JacobThompson from "../assets/images/avatar-jacob-thompson.webp";
import RizkyHasanuddin from "../assets/images/avatar-rizky-hasanuddin.webp";
import KimberlySmith from "../assets/images/avatar-kimberly-smith.webp";
import NathanPeterson from "../assets/images/avatar-nathan-peterson.webp";
import AnnaKim from "../assets/images/avatar-anna-kim.webp";

const details = [
  {
    user: "Mark Webber",
    action: "reacted to your recent post",
    post: "My first tournament today!",
    time: "1m ago",
    url: MarkWebber,
    read: false,
  },
  {
    user: "Angela Gray",
    action: "followed you",
    time: "5m ago",
    url: AngelaGray,
    read: false,
  },
  {
    user: "Jacob Thompson",
    action: "has joined your group",
    group: "Chess Club",
    time: "1 day ago",
    url: JacobThompson,
    read: false,
  },
  {
    user: "Rizky Hasanuddin",
    action: "sent you a private message",
    message:
      "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.",
    time: "5 days ago",
    url: RizkyHasanuddin,
    read: true,
  },
  {
    user: "Kimberly Smith",
    action: "commented on your picture",
    time: "1 week ago",
    url: KimberlySmith,
    read: true,
  },
  {
    user: "Nathan Peterson",
    action: "reacted to your recent post",
    post: "5 end-game strategies to increase your win rate",
    time: "2 weeks ago",
    url: NathanPeterson,
    read: true,
  },
  {
    user: "Anna Kim",
    action: "left the group",
    group: "Chess Club",
    time: "2 weeks ago",
    url: AnnaKim,
    read: true,
  },
];

function Activities({ notifications }) {
  return (
    <div className="flex flex-col space-y-2">
      {details.map((detail, index) => (
        <Activity
          key={index}
          user={detail.user}
          action={detail.action}
          post={detail.post}
          group={detail.group}
          message={detail.message}
          time={detail.time}
          url={detail.url}
          read={detail.read}
          notifications={notifications}
        />
      ))}
    </div>
  );
}

export default Activities;

Activities.propTypes = {
  notifications: PropTypes.number.isRequired,
};
