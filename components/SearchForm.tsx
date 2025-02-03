import { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <input
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Enter GitHub username..."
          className="text-xl p-4 shadow rounded-xl w-full bg-white dark:bg-blue-800 text-blue-900 dark:text-white focus:outline-none placeholder-blue-400 dark:placeholder-blue-200"
        />
        <button
          type="submit"
          className="absolute right-2 top-2 px-4 py-2 rounded-xl text-lg font-space-bold transition-colors bg-blue-500 text-white hover:bg-blue-600"
        >
          Search
        </button>
      </div>
    </form>
  );
}
