import mark from "../assets/images/avatar-mark-webber.webp";

const activity = {
  user: {
    name: "Mark Webber",
    avatar: mark,
  },
  action: "reacted to your recent post",
  post: "My first tournament today!",
  time: "1 min ago",
};

function Activity() {
  return (
    <article className="flex items-start space-x-4 p-4 bg-gray-200 rounded-lg   mt-4">
      <img className="w-12 h-12 rounded-full" src={mark} alt="Mark Webber" />
      <div className="flex flex-col space-y-1 ">
        <p className="text-sm">
          <span className="font-bold">Mark Webber </span>
          <span>reacted to your recent post </span>
          <span className="font-semibold">My first tournament today!</span>
          <span className="text-red-500 "> ● </span>
        </p>
        <time className="text-xs text-gray-500">1 min ago</time>
      </div>
    </article>
  );
}

export default Activity;
