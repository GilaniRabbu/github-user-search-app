import axios from "axios";
import { NextResponse } from "next/server";
import { GitHubUser } from "@/types/github";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const login = searchParams.get("login");

  if (!login) {
    return NextResponse.json(
      { error: "GitHub login is required" },
      { status: 400 }
    );
  }

  try {
    const response = await axios.get(`https://api.github.com/users/${login}`);
    const userData: GitHubUser = {
      login: response.data.login,
      id: response.data.id,
      avatar_url: response.data.avatar_url,
      html_url: response.data.html_url,
      name: response.data.name,
      bio: response.data.bio,
      public_repos: response.data.public_repos,
      followers: response.data.followers,
      following: response.data.following,
      created_at: response.data.created_at,
      location: response.data.location,
      blog: response.data.blog,
      twitter_username: response.data.twitter_username,
      company: response.data.company,
    };

    return NextResponse.json({ user: userData });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        return NextResponse.json(
          { error: `User with login '${login}' not found` },
          { status: 404 }
        );
      }
      return NextResponse.json(
        { error: error.response?.data?.message || "GitHub API error" },
        { status: error.response?.status || 500 }
      );
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
