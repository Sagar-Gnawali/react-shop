type PolicyProps = {
  warranty: string | undefined;
  returnPolicy: string | undefined;
};
export const Policy = ({ warranty, returnPolicy }: PolicyProps) => {
  return (
    <ul className="policy-list">
      <li>
        <span className="policy-icon">&#10004;</span>
        <span className="policy-text">{returnPolicy ?? "N/A"}</span>
      </li>
      <li>
        <span className="policy-icon">&#10004;</span>
        <span className="policy-text">{warranty ?? "N/A"}</span>
      </li>
    </ul>
  );
};
