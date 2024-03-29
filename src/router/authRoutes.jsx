import { Navigate } from "react-router-dom";
import { LoginPage, RegisterPage } from "../auth/pages";

export const authRoutes = [
    {
        path: "login",
        element: <LoginPage />,
    },
    {
        path: "register",
        element: <RegisterPage />,
    },
    {
        path: "*",
        element: <Navigate to="login" />
    },
]