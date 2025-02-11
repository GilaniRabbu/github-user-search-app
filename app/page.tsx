"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "@/components/SearchForm";
import UserProfile from "@/components/UserProfile";
import LoadingSpinner from "@/components/LoadingSpinner";
import { GitHubUser } from "@/types/github";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

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
    <section className="max-w-5xl mx-auto space-y-5 py-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-space-bold">dev.finder</h1>
        <ThemeToggle />
      </div>

      <SearchForm onSearch={handleSearch} />

      {isLoading && <LoadingSpinner />}

      {error && (
        <div className="p-4 rounded-lg text-center bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100">
          {error}
        </div>
      )}

      {user && <UserProfile user={user} />}
    </section>
  );
}

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? (
        <MdOutlineLightMode className="w-6 h-6" />
      ) : (
        <MdOutlineDarkMode className="w-6 h-6" />
      )}
    </button>
  );
}
