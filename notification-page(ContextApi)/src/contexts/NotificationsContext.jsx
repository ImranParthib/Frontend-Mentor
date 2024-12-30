// NotificationsContext.js
import React, { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

import MarkWebber from "../assets/images/avatar-mark-webber.webp";
import AngelaGray from "../assets/images/avatar-angela-gray.webp";
import JacobThompson from "../assets/images/avatar-jacob-thompson.webp";
import RizkyHasanuddin from "../assets/images/avatar-rizky-hasanuddin.webp";
import KimberlySmith from "../assets/images/avatar-kimberly-smith.webp";
import NathanPeterson from "../assets/images/avatar-nathan-peterson.webp";
import AnnaKim from "../assets/images/avatar-anna-kim.webp";
import pic from "../assets/images/image-chess.webp";

// Create a Context for notifications
const NotificationsContext = createContext();

// Create a provider component
export const NotificationsProvider = ({ children }) => {
  const [notifications, setNotifications] = useState(4); // Starting with 4 unread notifications
  const [activities, setActivities] = useState([
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
      pic: pic,
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
  ]);

  const markAllAsRead = () => {
    setActivities((prevActivities) =>
      prevActivities.map((activity) => ({
        ...activity,
        read: true,
      }))
    );
    setNotifications(0); // Reset notifications to 0
  };

  return (
    <NotificationsContext.Provider
      value={{ notifications, setNotifications, activities, markAllAsRead }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};

// Custom hook to use the NotificationsContext
export const useNotifications = () => {
  return useContext(NotificationsContext);
};

NotificationsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
