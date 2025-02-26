import { Navigate, Route, Routes } from "react-router-dom";
import { Product } from "pages/Product";
import { Details } from "pages/Details";

const AppRoutes: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/product" replace />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/:id" element={<Details />} />
    </Routes>
  );
};
export default AppRoutes;
