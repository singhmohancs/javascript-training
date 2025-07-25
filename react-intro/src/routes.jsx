import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, BrowserRouter as Router, Routes } from 'react-router';
import PublicLayout from './layout/PublicLayout';
import ProductLayout from './layout/ProductLayout';
import ManageUserPage from './pages/ManageUser';
import ManageProductPage from './pages/ManageProduct';
import ManageBrandPage from './pages/ManageBrand';
import ManageOrderPage from './pages/ManageOrder';
import CreateUserPage from './pages/ManageUser/components/CreateUser';
import AuthLayout from './layout/AuthLayout';
import { LoginPage, RegisterPage, ForgotPasswordPage } from './pages/Auth';
import { ContactUsPage } from './pages/ContactUs';
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={<div className="text-black">Loading...</div>}
      >
        <Routes>
          <Route path="/contact-us" element={<ContactUsPage />} />
         
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="forgot-password" element={<ForgotPasswordPage />} />
            {/* <Route path="verify-user" element={<VerifyUserPage />} />
            <Route path="reset-password" element={<ResetPasswordPage />} />
            <Route
              path="reset-temp-password"
              element={<ResetTempPasswordPage />}
            /> */}
          </Route>

          
          <Route  element={<PublicLayout />}> 
            <Route index element={<ManageUserPage />} />
            <Route path="/create-user" element={<CreateUserPage />} />
            <Route path="/manage-product" element={<ManageProductPage />} />
            <Route path="/manage-brand" element={<ManageBrandPage />} />
            <Route path="/manage-order" element={<ManageOrderPage />} />
          </Route>

          <Route  element={<ProductLayout />}> 
            <Route path="products" element={<ManageProductPage />} />
          </Route>

          {/* <Route element={<AuthLayout />} path="auth">
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="forgot-password" element={<ForgotPasswordPage />} />
            <Route path="verify-user" element={<VerifyUserPage />} />
            <Route path="reset-password" element={<ResetPasswordPage />} />
            <Route
              path="reset-temp-password"
              element={<ResetTempPasswordPage />}
            />
          </Route> */}
          {/* <Route element={<ProtectedLayout />}>
            <Route path="/auth-callback" element={<AuthCallbackPage />} />
            <Route path="/" element={<DashboardPage />} />
          </Route> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
