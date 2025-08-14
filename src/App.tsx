import { Routes, Route } from "react-router";
import { Profile, NotFound, Events, Contact } from "@/pages";
import { Home as HomePage } from "@/pages/Home/Home";
import { ProtectedRoutes } from "@/providers/ProtectedRoutes";
import { AuthRoutes } from "@/providers/AuthRoutes";
import { LoginForm, RegisterForm } from "@/forms";
import { Box } from "@chakra-ui/react";
import { StarsBackground } from "./assets/Stars";

function App() {
    return (
        <Box bg="#0C001A">
            <StarsBackground />
            <Routes>
                {/* Public */}

                <Route path="/" element={<AuthRoutes />}>
                    <Route index element={<HomePage />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/*" element={<NotFound />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/signup" element={<RegisterForm />} />
                </Route>

                {/* Protected */}
                <Route element={<ProtectedRoutes />}>
                    <Route path="profile" element={<Profile />} />
                </Route>
            </Routes>
        </Box>
    );
}

export default App;
