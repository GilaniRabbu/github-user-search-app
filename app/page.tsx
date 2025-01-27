"use client";

import { useState } from "react";
import axios from "axios";
import SearchForm from "@/components/SearchForm";
import UserProfile from "@/components/UserProfile";
import LoadingSpinner from "@/components/LoadingSpinner";
import { GitHubUser } from "@/types/github";

export default function HomePage() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (login: string) => {
    if (!login.trim()) return;

    try {
      setIsLoading(true);
      setError(null);
      setUser(null);

      const response = await axios.get(
        `/api/search?login=${encodeURIComponent(login)}`
      );

      if (response.data.error) {
        setError(response.data.error);
      } else {
        setUser(response.data.user);
      }
    } catch (err) {
      console.log(err);
      setUser(null);
      setError(`User '${login}' not found`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
        Search GitHub User
      </h1>

      <SearchForm onSearch={handleSearch} />

      {isLoading && <LoadingSpinner />}

      {error && (
        <div className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 p-4 rounded-lg text-center">
          {error}
        </div>
      )}

      {user && <UserProfile user={user} />}
    </div>
  );
}
