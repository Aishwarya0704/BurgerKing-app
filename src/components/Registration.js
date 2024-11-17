import { Header } from './Header';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {RegistrationAction} from '../redux/Actions/RegistrationAction';

function Registration() {
    const [user, setUser] = useState({
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleOnChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    async function handleRegistrationFormSubmit(e) {
        e.preventDefault();
        dispatch(
            RegistrationAction(user),
        );
        navigate('/login')
    };

  return (
    <>
      <Header/>
      <div className='main-container'>
        <div className='sub-container'>
            <div className='back-button'>
                <img onClick={()=> navigate('/')} alt='back-button' src='https://www.burgerking.in/static/media/left-arrow.e2f47880.svg' />
            </div>
            <div className='registration-login-page-logo'>
                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACiCAYAAADC8hYbAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTAzLTI3VDExOjExOjI4KzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0wMy0yN1QxMToxNTozMCswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wMy0yN1QxMToxNTozMCswNTozMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmZjY4NDUyNi0xZjYxLTY3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' alt='burger-logo'/>
            </div>
            <h2>Registration</h2>
            <p>Enter your details to proceed</p>
            <form onSubmit={handleRegistrationFormSubmit}>
                            <div className="input-box">
                                <input name="username" type="text" value={user.username} onChange={handleOnChange} required />
                                <label>Username</label>
                            </div>
                            <div className="input-box">
                                <input name="firstName" type="text" value={user.firstName} onChange={handleOnChange} required />
                                <label>First Name</label>
                            </div>
                            <div className="input-box">
                                <input name="lastName" type="text" value={user.lastName} onChange={handleOnChange} required />
                                <label>Last Name</label>
                            </div>
                            <div className="input-box">
                                <input name="email" type="email" value={user.email} onChange={handleOnChange} required />
                                <label>Email</label>
                            </div>
                            <div className="input-box">
                                <input name="phoneNumber" type="number" value={user.phoneNumber} onChange={handleOnChange} required />
                                <label>Phone number</label>
                            </div>
                            <div className="input-box">
                                <input name="password" type="password" value={user.password} onChange={handleOnChange} required />
                                <label>Password</label>
                            </div>
                            <button type="submit" className="button-register">Register</button>
                        </form>
            <div className='registrationpage-TC'>
            <p> <u>Terms &amp; Conditions,</u> By continuing, you agree for our<u>Privacy Policy,</u> and <u>Promotional T&amp;C</u></p>
            </div>
        </div> 
      </div>

    </>
  );
}

export default Registration;
