const StatItem = ({ label, value }: { label: string; value: number }) => (
  <div className="text-center">
    <div className="text-lg text-gray-600 dark:text-gray-300">{label}</div>
    <div className="text-3xl font-bold text-gray-800 dark:text-white mt-2">
      {value}
    </div>
  </div>
);

export default StatItem;
