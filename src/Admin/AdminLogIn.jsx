import React from 'react'
import { useNavigate } from 'react-router-dom';
// import { useLogInAdminMutation } from '../services/userAuthApi'; 

function AdminLogIn() {
    const navigate = useNavigate()
    // const [loginAdmin] = useLogInAdminMutation();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const logInData = {
            email: formData.get('email'),
            pass: formData.get('pass'),
        }
        if(logInData.email.length > 0 && logInData.email === 'hirakmittu@gmail.com' && logInData.pass === 'mI28hir179@word%ad9076'){
            // const res = await loginAdmin(logInData);
            // console.log(res);
            navigate('/raincoat/dashboard')
            // if(res.data.status){
            //     navigate('/admin/dashboard')
            // }else{
            //     window.alert('Fail to login');
            // }
            
        }else{
            window.alert('Passwords or Email not found');
        }
    }

  return (
    <div>
        <div className="cont my-5">
        <form className='pt-5' onSubmit={handleSubmit}>
            <div class="mb-3">
                <input type="email" class="form-control" id="email" name='email' placeholder='Email' />
            </div>
            <div class="mb-3">
                <input type="password" class="form-control" id="pass" name='pass' placeholder='Password'/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
    </div>
  )
}

export default AdminLogIn