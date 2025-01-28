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
    <div className="bg-gray-100 dark:bg-blue-900 rounded-xl p-4 shadow-sm">
      <form onSubmit={handleSubmit} className="flex items-center gap-4">
        <MagnifyingGlassIcon className="w-8 h-8 text-blue-500 dark:text-white" />
        <input
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Enter GitHub username..."
          className="flex-1 bg-transparent text-xl placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-8 py-3 rounded-xl hover:bg-blue-600 transition-colors text-lg font-bold"
        >
          Search
        </button>
      </form>
    </div>
  );
}
