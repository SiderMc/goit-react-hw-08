import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import RestrictedRoute from '../../RestrictedRoute';
import PrivateRoute from '../../PrivateRoute';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/RegisterPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage')
);

export default function RoutesApp() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RestrictedRoute component={<RegisterPage />} redirectTo="/" />} />
        <Route path="/login" element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />} />
        <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} redirectTo="/login" />} />
      </Routes>
    </Suspense>
  );
}
