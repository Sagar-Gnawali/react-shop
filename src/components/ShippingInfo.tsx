export const ShippingInfo = ({
  shipText,
}: {
  shipText: string | undefined;
}) => {
  return <p className="ship-info">&#128666; {shipText ?? "-"}</p>;
};
