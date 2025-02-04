import { GitHubUser } from "@/types/github";
import { BsBuildings } from "react-icons/bs";
import { FaLocationDot, FaLink, FaXTwitter } from "react-icons/fa6";
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
    <div className="p-8 rounded-xl shadow bg-[#B1D496] dark:bg-[#46692B]">
      <div className="lg:flex lg:gap-8">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-48 h-48 rounded-full"
        />

        <div className="mt-5 lg:mt-0 flex-1">
          <div>
            <h1 className="text-3xl font-space-bold mb-2 uppercase">
              {user.name || "Not Available"}
            </h1>
            <Link
              href={user.html_url}
              target="_blank"
              className="text-xl font-space-bold"
            >
              @{user.login}
            </Link>
            <p className="text-sm mt-2">Joined {formattedDate}</p>
          </div>

          {user.bio ? (
            <p className="mt-8 text-lg">{user.bio}</p>
          ) : (
            <p className="mt-8 text-lg">This profile has no bio</p>
          )}

          <div className="p-5 mt-8 rounded-xl bg-[#E9F2E2] dark:bg-[#141D0D]">
            <div className="flex gap-5 justify-around flex-wrap">
              <StatItem label="Repos" value={user.public_repos} />
              <StatItem label="Followers" value={user.followers} />
              <StatItem label="Following" value={user.following} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <ContactItem
              icon={<FaLocationDot className="w-6 h-6" />}
              text={user.location || "Not Available"}
            />
            <ContactItem
              icon={<FaLink className="w-6 h-6" />}
              text={user.blog ? `${user.login}` : "Not Available"}
              isLink={!!user.blog}
              link={user.blog}
            />
            <ContactItem
              icon={<BsBuildings className="w-6 h-6" />}
              text={user.company || "Not Available"}
            />
            <ContactItem
              icon={<FaXTwitter className="w-6 h-6" />}
              text={
                user.twitter_username
                  ? `${user.twitter_username}`
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
