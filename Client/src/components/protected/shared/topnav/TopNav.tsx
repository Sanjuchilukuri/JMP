import TopNavCss from './topnav.module.scss';
import user from '../../../../assets/user.jpg';
import logout from '../../../../assets/logout.svg';
import edit from '../../../../assets/edit.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TopNav() {
  const [displayPopUp, SetDisplayPopUp] = useState(false);
  const naviagte = useNavigate();

  function handlePopUp(): void {
    SetDisplayPopUp(!displayPopUp);
  }

  function handleEditProfileRoute(): void {
    handlePopUp();
    naviagte('/edit-profile');
  }

  function handleLogOut(): void {
    handlePopUp();
    naviagte('/login');
  }

  return (
    <header className={TopNavCss.header}>
      <h4>Hi, Sanju</h4>
      <img src={user} alt="profile" className={TopNavCss.profile} onClick={handlePopUp} />

      <div className={ displayPopUp? TopNavCss.popup : TopNavCss.hide} >
        <span onClick={handleEditProfileRoute}>
          <img src={edit} alt="Profile" />
          <p>Edit Profie</p>
        </span>
        <span onClick={handleLogOut}>
          <img src={logout} alt="Profile" />
          <p>Logout</p>
        </span>
      </div>
    </header>
  )
}

export default TopNav