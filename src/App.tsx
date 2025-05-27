import { Routes, Route } from "react-router";
import { Profile, NotFound } from "@/pages";
import { ProtectedRoutes } from "@/providers/ProtectedRoutes";
import { AuthRoutes } from "@/providers/AuthRoutes";
import { LoginForm, RegisterForm } from "@/forms";

function App() {
    return (
        <Routes>
            {/* Public */}
            <Route path="/" element={<AuthRoutes />}>
                <Route index element={<LoginForm />} />
                <Route path="login" element={<LoginForm />} />
                <Route path="register" element={<RegisterForm />} />
                <Route path="*" element={<NotFound />} />
            </Route>

            {/* Protected */}
            <Route element={<ProtectedRoutes />}>
                <Route path="profile" element={<Profile />} />
            </Route>
        </Routes>
    );
}

export default App;
