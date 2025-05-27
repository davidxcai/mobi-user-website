import { Layout } from "./components/Layout";
import { Routes, Route } from "react-router";
import { Home, Login, Register, Dashboard, Profile, NotFound } from "./pages";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { AuthRoutes } from "./components/AuthRoutes";

function App() {
  return (
    <Layout>
      <Routes>
        {/* Public */}
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />

        {/* Auth Pages */}
        <Route element={<AuthRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Protected */}
        <Route element={<ProtectedRoutes />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
