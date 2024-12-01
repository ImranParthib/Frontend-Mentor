import "./App.css";
import Activity from "./components/Activity";

function App() {
  return (
    <div className="h-screen w-2/3 m-auto  bg-slate-100 my-10 p-6">
      <div className="flex justify-between">
        <span className="font-bold">
          Notifications{" "}
          <strong className="bg-blue-700 rounded-sm px-2 text-white">
            {4}
          </strong>
        </span>
        <span className="text-gray-600">Mark all as read</span>
      </div>
      <Activity />
    </div>
  );
}

export default App;
