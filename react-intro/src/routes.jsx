import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, BrowserRouter as Router, Routes } from 'react-router';
import { ManageUserPage, ViewUserPage, UpdateUserPage, CreateUserPage } from './pages/ManageUser';
import ManageProductPage from './pages/ManageProduct';
import ManageBrandPage from './pages/ManageBrand';
import ManageOrderPage from './pages/ManageOrder';
import AuthLayout from './layout/AuthLayout';
import PublicLayout from './layout/PublicLayout';
import ProductLayout from './layout/ProductLayout';
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
            <Route index element={<ManageProductPage />} />

            {/* <Route path="/users" element={<ManageUserPage />} />
            <Route path="/users/create" element={<CreateUserPage />} />
            <Route path="/users/:userId" element={<ViewUserPage />} />
            <Route path="/users/:userId/update" element={<UpdateUserPage />} /> */}

              <Route path="/users" element={<ManageUserPage />}>
                <Route path="create" element={<CreateUserPage />} />
                <Route path=":userId" element={<ViewUserPage />} />
                <Route path=":userId/update" element={<UpdateUserPage />} />
              </Route>


            <Route path="/products" element={<ManageProductPage />} />
            <Route path="/brands" element={<ManageBrandPage />} />
            <Route path="/orders" element={<ManageOrderPage />} />
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
