import { useNavigate } from 'react-router-dom';
import AddJobFormCss from './addJobForm.module.scss';

function AddJobForm() {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate('/jobs')
  }
  return (
    <div className={AddJobFormCss['form-wrapper']}>
        <h1>Add Job </h1>
        <hr />
        <form>
            <div className={AddJobFormCss['input-group']}>
                <div>
                    <label htmlFor="roleName" >RoleName</label>
                    <input type="text" id="roleName" name="roleName" />

                    <label htmlFor='workMode' >Work Mode</label>
                    <select name="workMode" id="workMode">
                        <option value="Remote">Remote</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="OnSite">On Site</option>
                    </select>

                    <label htmlFor='location' >Location</label>
                    <input type="text" id="location" name="location" />

                    <label htmlFor='appliedResume' >Applied Resume</label> 
                    <input type="file" id="appliedResume" name="appliedResume" />
                </div>
                <div>
                    <label htmlFor="company">Company</label>
                    <input type="text" id="company" name="company" />

                    <label htmlFor='jobStatus' >Job Status</label>
                    <select name="jobStatus" id="jobStatus">
                        <option value="Applied">Applied</option>
                        <option value="Shortlisted">Shortlisted</option>
                        <option value="Rejected">Rejected</option>
                        <option value="InterviewScheduled">Interview Scheduled</option>
                        <option value="Offered">Offered</option>
                        <option value="Joined">Joined</option>
                        <option value="Declined">Declined</option>
                    </select>

                    <label htmlFor='appliedDate' >Applied Date</label>
                    <input type="date" id="appliedDate" name="appliedDate" />

                    <label htmlFor='source' >Source</label>
                    <select name="source" id="source">
                        <option value="CarrierSite">CarrierSite</option>
                        <option value="Naukari">Naukari</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Indeed">Indeed</option>
                        <option value="Glassdoor">Glassdoor</option>
                        <option value="TimesJob">TimesJob</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>
           
            <div  className={AddJobFormCss['button-group']}>                    
                <button type="button" className={AddJobFormCss['cancel']} onClick={handleCancel}>Cancel</button>
                <button type="submit" className={AddJobFormCss['add']}>Add</button>
            </div>
        </form>
    </div>
  )
}

export default AddJobForm