export const StockIndicator = ({ status }: { status: string | undefined }) => {
  if (!status) return null;
  const stockStatus = status.toLowerCase().split(" ").join("-");
  return <div className={`stock-indicator ${stockStatus}`}>{status}</div>;
};
