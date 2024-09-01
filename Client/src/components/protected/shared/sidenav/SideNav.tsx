// import SideNavCss from './sidenav.module.scss';
// import dashboardIcon from '../../../../assets/dashboard.svg';
// import jobsIcon from '../../../../assets/jobs.svg';
// import { NavLink } from 'react-router-dom';

// function SideNav() {
//   return (
//     <aside >
//       <div className={SideNavCss.logo}>
//         <NavLink to={'/dashboard'}>
//           <h1>JMS</h1>
//         </NavLink>
//       </div>
//       <div>
//         <ul>
//           <NavLink to={'/dashboard'}>
//             <li>
//               <img src={dashboardIcon} alt="Dashboard"/>
//               <p>Dashboard</p>
//             </li>
//           </NavLink>
//           <NavLink to={'/jobs'}>
//             <li>
//               <img src={jobsIcon} alt="Jobs"/>
//               <p>Jobs</p>
//             </li>
//           </NavLink>
//         </ul>
//       </div>
//     </aside>
//   )
// } 

// export default SideNav


import SideNavCss from './sidenav.module.scss';
import dashboardIcon from '../../../../assets/dashboard.svg';
import jobsIcon from '../../../../assets/jobs.svg';
import { NavLink } from 'react-router-dom';

function SideNav() {
  return (
    <aside>
      <div className={SideNavCss.logo}>
        <NavLink to={'/dashboard'}>
          <h1>JMP</h1>
        </NavLink>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? SideNavCss.active : ''}>
              <img src={dashboardIcon} alt="Dashboard"/>
              <p>Dashboard</p>
            </NavLink>
          </li>
          <li>
            <NavLink to={'/jobs'} className={({ isActive }) => isActive ? SideNavCss.active : ''}>
              <img src={jobsIcon} alt="Jobs"/>
              <p>Jobs</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default SideNav;
