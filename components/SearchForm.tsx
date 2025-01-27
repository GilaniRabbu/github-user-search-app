import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchForm({
  onSearch,
}: {
  onSearch: (login: string) => void;
}) {
  const [login, setLogin] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(login);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto group relative transition-all duration-300"
    >
      <div className="relative">
        <input
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Enter GitHub username..."
          className="w-full pl-12 pr-6 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800/50 transition-all shadow-sm hover:shadow-md"
        />
        <MagnifyingGlassIcon className="w-6 h-6 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md"
        >
          Search
        </button>
      </div>
    </form>
  );
}
