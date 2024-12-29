import PropTypes from "prop-types";

function Activity({
  user,
  action,
  post,
  group,
  message,
  time,
  url,
  read,
  notifications,
}) {
  return (
    <article
      className={`flex items-start space-x-4 p-4 rounded-lg mt-4 ${
        notifications > 0 && !read ? "bg-blue-100" : ""
      }`}
    >
      <img className="w-12 h-12 rounded-full" src={url} alt={user} />
      <div className="flex flex-col space-y-1">
        <p className="text-sm">
          <span className="font-bold">{user} </span>
          <span>{action} </span>
          {post && <span className="font-semibold">{post}</span>}
          {group && <span className="font-semibold">{group}</span>}

          {notifications > 0 && !read && (
            <span className="text-red-500"> ●</span>
          )}
        </p>
        {message && (
          <div className="border-2 border-gray-300 bg-gray-100 p-2 rounded hover:bg-gray-200">
            <p className="text-md text-gray-800">{message}</p>
          </div>
        )}
        <time className="text-xs text-gray-500">{time}</time>
      </div>
    </article>
  );
}

Activity.propTypes = {
  user: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  post: PropTypes.string,
  group: PropTypes.string,
  message: PropTypes.string,
  time: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  read: PropTypes.bool.isRequired,
  notifications: PropTypes.number.isRequired,
};

Activity.defaultProps = {
  post: "",
  group: "",
  message: "",
};

export default Activity;
