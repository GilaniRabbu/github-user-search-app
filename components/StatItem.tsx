const StatItem = ({ label, value }: { label: string; value: number }) => (
  <div className="flex flex-col p-3 rounded bg-blue-50 dark:bg-slate-800">
    <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
      {label}
    </span>
    <span className="text-2xl font-semibold text-gray-900 dark:text-white">
      {value}
    </span>
  </div>
);

export default StatItem;
