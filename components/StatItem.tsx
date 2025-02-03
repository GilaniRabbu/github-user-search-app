const StatItem = ({ label, value }: { label: string; value: number }) => (
  <div className="text-center">
    <div className="text-lg">{label}</div>
    <div className="text-3xl font-space-bold mt-2">{value}</div>
  </div>
);

export default StatItem;
