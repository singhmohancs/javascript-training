import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { ManageUserPage, ViewUserPage, UpdateUserPage, CreateUserPage } from './pages/ManageUser';
import ManageProductPage from './pages/ManageProduct';
import ManageBrandPage from './pages/ManageBrand';
import ManageOrderPage from './pages/ManageOrder';
import AuthLayout from './layout/AuthLayout';
import PublicLayout from './layout/ProtectedLayout';
import ProductLayout from './layout/ProductLayout';
import { LoginPage, RegisterPage, ForgotPasswordPage } from './pages/Auth';
import { ContactUsPage } from './pages/ContactUs';
import CounterPage from './pages/Counter';
import UseEffectPage from './pages/UseEffect';
import ProtectedLayout from './layout/ProtectedLayout';

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
          <Route index element={<ManageProductPage />} />
          <Route path="/use-effect" element={<UseEffectPage />} />

          <Route path="/users" element={<ManageUserPage />}>
            <Route path="create" element={<CreateUserPage />} />
            <Route path=":userId" element={<ViewUserPage />} />
            <Route path=":userId/update" element={<UpdateUserPage />} />
          </Route>

          <Route path="/products" element={<ManageProductPage />} />
          <Route path="/brands" element={<ManageBrandPage />} />
          <Route path="/orders" element={<ManageOrderPage />} />
        </Route>

        <Route element={<ProductLayout />}>
          <Route path="products" element={<ManageProductPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
