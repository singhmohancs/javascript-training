import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { ManageUserPage, ViewUserPage, UpdateUserPage, CreateUserPage } from './pages/ManageUser';
import ManageBrandPage from './pages/ManageBrand';
import ManageOrderPage from './pages/ManageOrder';
import AuthLayout from './layout/AuthLayout';
import ProductLayout from './layout/ProductLayout';
import { LoginPage, RegisterPage, ForgotPasswordPage } from './pages/Auth';
import { ContactUsPage } from './pages/ContactUs';
import CounterPage from './pages/Counter';
import UseEffectPage from './pages/UseEffect';
import ProtectedLayout from './layout/ProtectedLayout';
import { ProductDetailPage, ProductListPage } from './pages/ManageProduct';

const AppRoutes = () => {
  return (
    <Suspense
      fallback={<div className="text-black">Loading...</div>}
    >
      <Routes>
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/counter" element={<CounterPage />} />
       
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
        </Route>

        <Route element={<ProtectedLayout />}>
          <Route index element={<ProductListPage />} />
          <Route path="/use-effect" element={<UseEffectPage />} />

          <Route path="/users" element={<ManageUserPage />}>
            <Route path="create" element={<CreateUserPage />} />
            <Route path=":userId" element={<ViewUserPage />} />
            <Route path=":userId/update" element={<UpdateUserPage />} />
          </Route>

          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/brands" element={<ManageBrandPage />} />
          <Route path="/orders" element={<ManageOrderPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
