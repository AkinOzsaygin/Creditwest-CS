import Container from "./components/layout-components/Container";
import Header from "./components/layout-components/Header";
import Layout from "./components/layout-components/Layout";
import { Route, Routes } from "react-router-dom";
import CheckScanPage from "./components/checkscan-page/CheckScanPage";
import LoginPage from "./components/login-page/LoginPage";
import AddUserPage from "./components/adduser-page/AddUserPage";
import Count from "./components/Count";

import './css/check-scan-page.css'
import './css/header.css';
import './css/sidebar.css'
import './css/forbiden-page.css'

import DataManagementPage from "./components/datamanagement-page/DataManagementPage";
import UserListPage from "./components/userlist-page/UserListPage";
import LogsPage from "./components/logs-page/LogsPage";
import NotFoundedPage from "./components/error-page/NotFoundPage";
import RequireAuth from "./middleware/RequireAuth";
import ForbidenPage from "./components/error-page/ForbidenPage";

const ROLES = {
  user: 2001,
  manager: 1984,
  admin: 5150
}

function App() {

  return (
    <div className="App">

      <Container >

        <Header title={"CWSCANNER"} />

        <Routes>

          <Route index path="/" element={<LoginPage />} />

          <Route element={<RequireAuth allowedRoles={[ROLES.admin, ROLES.manager, ROLES.user]} />}>

            <Route path="/layout" element={<Layout />}>

              <Route element={<RequireAuth allowedRoles={[ROLES.admin, ROLES.manager, ROLES.user]} />}>
                <Route index element={<CheckScanPage />}></Route>
              </Route>

              <Route element={<RequireAuth allowedRoles={[ROLES.admin, ROLES.manager, ROLES.user]} />}>
                <Route index path="checkscan" element={<CheckScanPage />}></Route>
              </Route>

              <Route element={<RequireAuth allowedRoles={[ROLES.admin]} />}>
                <Route path="add-user" element={<AddUserPage />}></Route>
              </Route>

              <Route element={<RequireAuth allowedRoles={[ROLES.admin, ROLES.manager]} />}>
                <Route path="user-list" element={<UserListPage />}></Route>
              </Route>

              <Route element={<RequireAuth allowedRoles={[ROLES.admin, ROLES.manager, ROLES.user]} />}>
                <Route path="data-management" element={<DataManagementPage />}></Route>
              </Route>

              <Route element={<RequireAuth allowedRoles={[ROLES.admin, ROLES.manager]} />}>
                <Route path="logs" element={<LogsPage />}></Route>
              </Route>

            </Route>

          </Route>

          <Route path="forbiden" element={<ForbidenPage />}></Route>

          <Route path="*" element={<NotFoundedPage />}></Route>



        </Routes>

      </Container>

    </div>
  );
}

export default App;
