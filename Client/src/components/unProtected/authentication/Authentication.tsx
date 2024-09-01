import AuthenticationCss from './authentication.module.scss'
import hide from '../../../assets/hide.svg';
import google from '../../../assets/Social media logo.svg'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

function Authentication() {
    const location = useLocation();
    const componentAction = location.state || 'login';
    const navigate = useNavigate();
    
    function handleSubmit(event:React.FormEvent<HTMLFormElement>): any {
        event.preventDefault();
        navigate('/dashboard');
    }

    return (
        <div className={AuthenticationCss.Container}>
            <div className={AuthenticationCss['faded-screen']}></div>
            <div className={AuthenticationCss['auth-container-wrapper']}>
                <div className={AuthenticationCss['auth-container']}>
                    <NavLink to="/">
                        <h2>JMP</h2>
                    </NavLink>
                    <p className={AuthenticationCss.action}>{componentAction == 'login' ? 'Log in' : 'Register'}</p>
                    <p className={AuthenticationCss.signup}>{componentAction === 'login' ? 
                        (
                            <>
                                <NavLink to="/register" state={"register"}>
                                    Don’t have an account? <a className={AuthenticationCss.link} href="/signup">Sign up</a>
                                </NavLink>
                            </>
                        ) 
                        :
                        (
                            <>
                                <NavLink to="/login" state={"login"}>
                                    Have an account? <a className={AuthenticationCss.link} href="/login">Log in</a>
                                </NavLink>
                            </>
                        )}
                    </p>
                    <button type='button' className={AuthenticationCss['google-login']}>
                        <img src={google} /> {componentAction == "login" ? ' Log in with Google' : ' sign up with Google'}
                    </button>
                    <div className={AuthenticationCss.division}>
                        <div>
                            <hr />
                        </div>
                        <p>OR</p>
                        <div>
                            <hr />
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        { componentAction === 'register' &&  
                            <div className={AuthenticationCss.name}>
                                <label>Your Name</label>
                                <input type="text" placeholder="Name" />
                            </div>
                        }
                        <div className={AuthenticationCss.email}>
                            <label>Your Email</label>
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className={AuthenticationCss.password}>
                            <div className={AuthenticationCss.label}>
                                <label>Your Password</label>
                                <div className={AuthenticationCss.hide}>
                                    <img src={hide} alt="hide-icon" />
                                    <p>Hide</p>
                                </div>
                            </div>
                            <input type="password" placeholder="Password" />
                        </div>
                        { componentAction == 'login' && <p className={AuthenticationCss['forgot-password']}>Forgot password?</p> }
                        <button type='submit' className={AuthenticationCss.login}>{componentAction === 'login' ? 'Log in' : 'Sign up'}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Authentication