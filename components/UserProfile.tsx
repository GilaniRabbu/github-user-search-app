import { GitHubUser } from "@/types/github";
import {
  LinkIcon,
  MapPinIcon,
  XMarkIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
import StatItem from "./StatItem";
import ContactItem from "./ContactItem";
import Link from "next/link";

export default function UserProfile({ user }: { user: GitHubUser }) {
  const formattedDate = new Date(user.created_at).toLocaleDateString(
    undefined,
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="bg-white dark:bg-blue-900 rounded-xl p-8 shadow-sm mt-8">
      <div className="flex gap-8">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-48 h-48 rounded-full border-4 border-gray-100 dark:border-blue-800"
        />

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                {user.name || "Not Available"}
              </h1>
              <Link href={user.html_url} target="_blank">
                <p className="text-blue-500 text-xl mt-2">@{user.login}</p>
              </Link>
            </div>
            <span className="text-gray-400 dark:text-gray-300 text-sm">
              Joined {formattedDate}
            </span>
          </div>

          {user.bio ? (
            <p className="mt-8 text-gray-600 dark:text-gray-300 text-lg">
              {user.bio}
            </p>
          ) : (
            <p className="mt-8 text-gray-400 dark:text-gray-500 text-lg">
              This profile has no bio
            </p>
          )}

          <div className="bg-gray-50 dark:bg-blue-800 rounded-xl p-6 mt-8">
            <div className="flex justify-around">
              <StatItem label="Repos" value={user.public_repos} />
              <StatItem label="Followers" value={user.followers} />
              <StatItem label="Following" value={user.following} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <ContactItem
              icon={<MapPinIcon className="w-6 h-6" />}
              text={user.location || "Not Available"}
            />
            <ContactItem
              icon={<LinkIcon className="w-6 h-6" />}
              text={user.blog ? `@${user.login}` : "Not Available"}
              isLink={!!user.blog}
              link={user.blog}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <ContactItem
              icon={<BuildingOffice2Icon className="w-6 h-6" />}
              text={user.company || "Not Available"}
            />
            <ContactItem
              icon={<XMarkIcon className="w-6 h-6" />}
              text={
                user.twitter_username
                  ? `@${user.twitter_username}`
                  : "Not Available"
              }
              isLink={!!user.twitter_username}
              link={
                user.twitter_username
                  ? `https://twitter.com/${user.twitter_username}`
                  : undefined
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
