import { useState } from "react";
import "./App.css";
import Activities from "./components/Activities";

function App() {
  const [notifications, setNotifications] = useState(4);

  const markAllAsRead = () => {
    setNotifications(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md md:max-w-2xl md:my-8 md:p-4 md:shadow-xl md:rounded-xl bg-white items-center p-4   justify-center">
        <div className="flex justify-between">
          <span className="font-bold">
            Notifications{" "}
            <strong className="bg-blue-700 rounded-sm px-2 text-white">
              {notifications}
            </strong>
          </span>
          <button
            onClick={markAllAsRead}
            className="text-gray-600 hover:text-blue-600"
          >
            Mark all as read
          </button>
        </div>
        <Activities notifications={notifications} />
      </div>
    </div>
  );
}

export default App;
