import { Route, Routes } from "react-router-dom";
import SideNav from "../shared/sidenav/SideNav";
import TopNav from "../shared/topnav/TopNav";
import Dashboard from "../dashboard/Dashboard";
import Jobs from "../jobs/Jobs";
import LayoutCss from './layout.module.scss';
import UserEditForm from "../user/editForm/UserEditForm";
import AddJobForm from "../addJobForm/AddJobForm";

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
          <Route path="/jobs/add-job" element={<AddJobForm/>} />
        </Routes> 
      </main>
    </div>
  );
}

export default Layout;
