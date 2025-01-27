import { GitHubUser } from "@/types/github";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import StatItem from "./StatItem";

export default function UserProfile({ user }: { user: GitHubUser }) {
  return (
    <div className="mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 w-full max-w-2xl border border-gray-100 dark:border-gray-800">
      <div className="flex items-start gap-6">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-28 h-28 rounded-2xl border-4 border-indigo-100 dark:border-indigo-900/50 shadow-sm"
        />
        <div className="flex-1 space-y-3">
          <div className="flex items-baseline gap-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {user.name || user.login}
            </h1>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              @{user.login}
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
            </a>
          </div>
          <p className="text-sm text-gray-500">GitHub ID: {user.id}</p>
          {user.bio && (
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-snug">
              {user.bio}
            </p>
          )}

          <div className="flex gap-6 pt-2">
            <StatItem label="Repositories" value={user.public_repos} />
            <StatItem label="Followers" value={user.followers} />
            <StatItem label="Following" value={user.following} />
          </div>
        </div>
      </div>
    </div>
  );
}
