import { GitHubUser } from "@/types/github";

export default function UserProfile({ user }: { user: GitHubUser }) {
  return (
    <div className="mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 w-full max-w-2xl">
      <div className="flex items-center gap-6">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-24 h-24 rounded-full border-4 border-blue-500"
        />
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {user.name || user.login}
          </h1>
          {user.bio && (
            <p className="text-gray-600 dark:text-gray-300">{user.bio}</p>
          )}
          <p className="text-sm text-gray-500">GitHub ID: {user.id}</p>
          <div className="flex gap-4 text-gray-600 dark:text-gray-400">
            <span>Repos: {user.public_repos}</span>
            <span>Followers: {user.followers}</span>
            <span>Following: {user.following}</span>
          </div>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}
