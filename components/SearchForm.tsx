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
    <div className="p-4 shadow rounded-xl bg-white dark:bg-blue-800">
      <form onSubmit={handleSubmit} className="flex items-center gap-4">
        <MagnifyingGlassIcon className="w-8 h-8 text-blue-500 dark:text-white" />
        <input
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Enter GitHub username..."
          className="flex-1 text-xl bg-transparent text-blue-900 dark:text-white focus:outline-none placeholder-blue-400 dark:placeholder-blue-200"
        />
        <button
          type="submit"
          className="px-8 py-3 rounded-xl text-lg font-space-bold transition-colors bg-blue-500 text-white hover:bg-blue-600"
        >
          Search
        </button>
      </form>
    </div>
  );
}
