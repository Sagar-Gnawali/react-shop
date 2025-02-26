export const StockIndicator = ({
  status,
  stock,
}: {
  status: string | undefined;
  stock: number | undefined;
}) => {
  if (!status) return null;
  const stockStatus = status.toLowerCase().split(" ").join("-");
  return (
    <div className={`stock-indicator ${stockStatus}`}>
      ({stock ?? 0}) {status}
    </div>
  );
};
