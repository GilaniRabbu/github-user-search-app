const StatItem = ({ label, value }: { label: string; value: number }) => (
  <div className="text-center">
    <div className="text-lg text-blue-900 dark:text-white">{label}</div>
    <div className="text-3xl font-space-bold mt-2 text-blue-900 dark:text-white">
      {value}
    </div>
  </div>
);

export default StatItem;
