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
import Image from "next/image";

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
    <div className="p-8 rounded-xl shadow bg-white dark:bg-blue-800">
      <div className="lg:flex lg:gap-8">
        <Image
          src={user.avatar_url}
          alt={user.login}
          width={192}
          height={192}
          className="w-48 h-48 rounded-full"
        />

        <div className="mt-5 lg:mt-0">
          <div>
            <h1 className="text-3xl font-space-bold mb-2 uppercase text-blue-900 dark:text-white">
              {user.name || "Not Available"}
            </h1>
            <Link
              href={user.html_url}
              target="_blank"
              className="text-xl text-blue-500 dark:text-blue-300"
            >
              @{user.login}
            </Link>
            <p className="text-sm mt-2 text-blue-400 dark:text-blue-200">
              Joined {formattedDate}
            </p>
          </div>

          {user.bio ? (
            <p className="mt-8 text-lg text-blue-500 dark:text-blue-200">
              {user.bio}
            </p>
          ) : (
            <p className="mt-8 text-lg text-blue-600 dark:text-blue-300">
              This profile has no bio
            </p>
          )}

          <div className="p-5 mt-8 rounded-xl bg-blue-100 dark:bg-blue-900">
            <div className="flex gap-5 justify-around flex-wrap">
              <StatItem label="Repos" value={user.public_repos} />
              <StatItem label="Followers" value={user.followers} />
              <StatItem label="Following" value={user.following} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
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
