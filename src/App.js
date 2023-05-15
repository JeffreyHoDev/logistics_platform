import './App.css';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { NavBar } from './components/navbar/navbar.component'
import { AssetsManagementPage } from './pages/assets/assets.page';
import { RequestManagementPage } from './pages/requests-management/request-management.page'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/assets",
        element: <AssetsManagementPage />
      },
      {
        path: "/request-management",
        element: <RequestManagementPage />
      },
    ]
  }
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}


export default App

