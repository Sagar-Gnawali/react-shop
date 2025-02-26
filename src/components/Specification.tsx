type PolicyProps = {
  weight: number | undefined;
};
export const Specifications = ({ weight }: PolicyProps) => {
  return (
    <ul className="specification-list">
      <li>
        <span className="specification-icon">&#9734;</span>
        <span className="specification-text">{weight ?? 0} kg weight</span>
      </li>
    </ul>
  );
};
