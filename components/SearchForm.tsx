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
          className="text-xl px-6 py-4 shadow rounded-xl w-full bg-[#B1D496] dark:bg-[#46692B] focus:outline-none placeholder-[#46692B] dark:placeholder-[#B1D496]"
        />
        <button
          type="submit"
          className="absolute right-2 top-2 px-4 py-2 rounded-xl text-lg font-space-bold transition-colors bg-[#82B15D] dark:bg-[#72A24E] text-[#11160E]"
        >
          Search
        </button>
      </div>
    </form>
  );
}
