import { NavLink } from 'react-router-dom';
import HomeCss from './home.module.scss';

function Home() {
  return (
    <div className={HomeCss.container}>
        <header>
            <h1>JMP</h1>
            <div className={HomeCss['btn-wrapper']}>
                <NavLink to="/login" state={"login"}>
                    <button className={HomeCss['login-btn']}>Sign In</button>
                </NavLink>
                <NavLink to="/register" state={"register"}>
                    <button className={HomeCss['signup-btn']}>Sign Up</button>
                </NavLink>
            </div>
        </header>
        <hr/>
        <div className={HomeCss['bg-image-wrapper']}></div>
    </div>
  )
}

export default Home