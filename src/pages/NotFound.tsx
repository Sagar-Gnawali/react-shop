import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "utils/constant";
export const NotFoundPage = () => {
  const navigation = useNavigate();
  const handleClick = () => {
    navigation(ROUTE_PATHS.HOME);
  };
  return (
    <>
      <div className="not_found_wrapper">OOPS!</div>
      <div className="not_found_message">
        This page doesn’t exist Please check your URL or return to the home
        page.
      </div>
      <div className="not_found_button">
        <button type="button" onClick={handleClick}>
          Home
        </button>
      </div>
    </>
  );
};
