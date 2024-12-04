import { useNavigate } from 'react-router-dom';
import HeaderCss from './header.module.scss';

function Header({component,description} : {component:string, description:string}){

    const navigate = useNavigate();
    const handleAddJob = () => {
        navigate('/jobs/add-job');
    };

    return( 
        <header className={HeaderCss['dashboard-header']}>
            <div>
                <h1 className={HeaderCss['dashboard-title']}>{component}</h1>
                <p className={HeaderCss['dashboard-description']}>{description}</p>
            </div>
            <div className={HeaderCss['dashboard-actions']}>
                <button type="button" onClick={handleAddJob}>Add Job</button>
            </div>
        </header>
    );
}

export default Header;