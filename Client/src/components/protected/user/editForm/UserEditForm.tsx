import UserEditFormCss from './userEditForm.module.scss';
import user from '../../../../assets/user.jpg';

function UserEditForm() {
  return (
    <div className={UserEditFormCss['form-wrapper']}>
        <h1>Edit Profile</h1>
        <hr />
        <form>
            <div className={UserEditFormCss['file-upload']}>
                <label htmlFor="file">
                    <img src={user} className={UserEditFormCss.profile} alt="profile" />
                </label>
                <input type="file" id="file" name="file" />
            </div>
            <div className={UserEditFormCss['input-group']}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                    <button type="button" className={UserEditFormCss['change-password']}>Change Password</button>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" disabled value="sanju@example.com"/>
                    <button type="button" className={UserEditFormCss['deactivate-account']}>Deactivate Account</button>
                </div>
            </div>
           
            <div  className={UserEditFormCss['button-group']}>                    
                <button type="button" className={UserEditFormCss['cancel']}>Cancel</button>
                <button type="submit" className={UserEditFormCss['update']}>Update</button>
            </div>
        </form>
    </div>
  );
}

export default UserEditForm;
