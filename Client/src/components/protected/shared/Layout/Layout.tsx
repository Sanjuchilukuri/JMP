import { Route, Routes } from "react-router-dom";
import SideNav from "../sidenav/SideNav";
import TopNav from "../topnav/TopNav";
import Dashboard from "../../dashboard/Dashboard";
import Jobs from "../../jobs/Jobs";
import LayoutCss from './layout.module.scss';
import UserEditForm from "../../user/editForm/UserEditForm";

function Layout() {
  return (
    <div className={LayoutCss.container}>
      <SideNav/>
      <main>
        <TopNav/>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/edit-profile" element={<UserEditForm/>}/>
        </Routes> 
      </main>
    </div>
  );
}

export default Layout;
