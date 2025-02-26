const Avatar = ({ name }: { name: string | undefined }) => {
  const getInitial = (name: string) =>
    name ? name.charAt(0).toUpperCase() : "?";

  return <div className="avatar">{getInitial(name ?? "")}</div>;
};

export default Avatar;
