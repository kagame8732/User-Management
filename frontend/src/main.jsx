import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LoginForm from "./components/forms/LoginForm.jsx";
import TaskForm from "./components/forms/TaskForm.jsx";
import SignupForm from "./components/forms/SignupForm.jsx";
import ViewProduct from "./components/forms/ViewProduct.jsx";
import NotFound from "./components/forms/NotFound.jsx";
import Home from "./pages/Home.jsx";
import { ForgetPassword } from "./components/forms/ForgetPassword.jsx";
import ResetPasswordForm from "./components/forms/ResetPassword.jsx";
import Dashboard from "./components/dashboard/index.jsx";
import DashboardHome from "./components/dashboard/dashboardhome/DashboardHome.jsx";
import GetAllTask from "./components/dashboard/tasks/getallTask.jsx";
import GetAllusers from "./components/dashboard/users/getAllusers.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/auth/reset-password" element={<ForgetPassword />} />
      <Route
        path="/auth/reset-password/:token"
        element={<ResetPasswordForm />}
      />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/task" element={<TaskForm />} />
      <Route path="/view_task" element={<ViewProduct />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index={true} path="" element={<DashboardHome />} />
        <Route path="task" element={<GetAllTask />} />
        <Route path="users" element={<GetAllusers />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
