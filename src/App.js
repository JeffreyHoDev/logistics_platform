import './App.css';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { NavBar } from './components/navbar/navbar.component'
import { AssetsManagementPage } from './pages/assets/assets.page';
import { RequestManagementPage } from './pages/requests-management/request-management.page'
import { HistoryPage } from './pages/history/history.page'
import { UserManagementPage } from './pages/users-management/users-management.page'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import store from './redux/store'
import { Provider } from 'react-redux'

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
      {
        path: "/history",
        element: <HistoryPage />
      },
      {
        path: "/user-management",
        element: <UserManagementPage />
      },
    ]
  }
]);

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}


export default App

