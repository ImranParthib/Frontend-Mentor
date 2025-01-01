// Activities.js
import React from "react";
import Activity from "./Activity";
import { useNotifications } from "../contexts/NotificationsContext";

function Activities() {
  const { notifications, activities, markAllAsRead } = useNotifications();

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex justify-between items-center pb-3">
        <span className="font-bold text-xl text-gray-800">
          Notifications{" "}
          <strong className="bg-blue-700 rounded-sm px-2 text-white">
            {notifications}
          </strong>
        </span>
        {notifications > 0 && (
          <button
            onClick={markAllAsRead}
            className="text-gray-600 hover:text-blue-600"
          >
            Mark all as read
          </button>
        )}
      </div>

      {activities.map((detail, index) => (
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
          pic={detail.pic}
        />
      ))}
    </div>
  );
}

export default Activities;
