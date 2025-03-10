import { Navigate, Route, Routes } from "react-router-dom";
import { Details } from "pages/Details";
import { NotFoundPage } from "pages/NotFound";
import { ProductPage } from "pages/Product";

const AppRoutes: React.FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/product" replace />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/product/:id" element={<Details />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
export default AppRoutes;
