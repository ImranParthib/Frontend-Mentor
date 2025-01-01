// App.js
import React from "react";

import { NotificationsProvider } from "./contexts/NotificationsContext";
import Activities from "./components/Activities";

function App() {
  return (
    <NotificationsProvider>
      <div className="App w-11/12 md:w-6/12 items-center mx-auto bg-white p-4 rounded-lg shadow-md mt-4 mb-4">
        <Activities />
      </div>
    </NotificationsProvider>
  );
}

export default App;
