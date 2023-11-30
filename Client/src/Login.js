import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from './Routing';
import { ToastContainer, toast } from 'react-toastify';
import './Login.css'
import 'react-toastify/dist/ReactToastify.css';
import CustomizedBreadcrumbs from './Components/Breadcrumb.jsx';
// import './Styles/Modal.scss'
/* eslint-disable no-unused-vars */


const Login = () => {
    const { state, dispatch } = useContext(UserContext);

    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "", email: "", phone: "", password: "", cpassword: ""
    });
    let name, value;
    const handleInputs = (e) => {
        // console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    //* Signup Auth
    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, phone, password, cpassword } = user;
        const res = await fetch(process.env.BACKEND_URL+"/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, password, cpassword
            })
        });
        const data = await res.json();
        if (data.status === 422 || !data) {
            window.alert("Invalid Registration");
            console.log('Invalid Registration');
        }
        else {
            toast.success("Registration Successful", {
                position: "bottom-right",
                theme: "colored"
            });
            console.log('Registration successful');
            setTimeout(() => {
                window.location.reload();
            }, 2500);
        }
    }


    //* Login Auth
    const [logemail, setlogEmail] = useState('');
    const [logpass, setlogPass] = useState('');

    // const loginUser = async (e) => {
    //     try {
    //       e.preventDefault();
    //       const res = await newRequest.post("/Login", {
    //         email: logemail,    
    //         password: logpass
    //       });

    //     const data = res.json(  );
    //     if (res.status === 400 || !data) {
    //         toast.error("Invalid Credentials", {
    //             position: "bottom-right",
    //             theme: "colored"
    //         });
    //     } else {
    //         dispatch({ type: "USER", payload: true })
    //         toast.success("Login Successful", {
    //             position: "bottom-right",
    //             theme: "colored"
    //         });
    //         setTimeout(() => {
    //             navigate('/FindJobs')
    //         }, 2000);
    //     }
    
    //     } catch (error) {
    //       console.error("Error decoding credentialResponse:", error);
    //     }
    //   };
    

    const loginUser = async (e) => {
        e.preventDefault();
        const res = await fetch(process.env.BACKEND_URL+'/Login', { 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: logemail,    
                password: logpass
            })
        }); 
        const data = res.json(  );
        if (res.status === 400 || !data) {
            toast.error("Invalid Credentials", {
                position: "bottom-right",
                theme: "colored"
            });
        } else {
            dispatch({ type: "USER", payload: true })
            toast.success("Login Successful", {
                position: "bottom-right",
                theme: "colored"
            });
            setTimeout(() => {
                navigate('/FindJobs')
            }, 2000);
        }
    }


    //* Tackling GUI of Login/Signup Page 
    const rotateL = () => {
        var checkBox = document.getElementById("reg-log");
        if (checkBox.checked === true) {
            document.getElementById("reg-log").checked = false;
        }
    }
    const rotateR = () => {
        var checkBox = document.getElementById("reg-log");
        if (checkBox.checked === false) {
            document.getElementById("reg-log").checked = true;
        }
    }

    // Validation Form
    function ValidateForm() {
        var signname = document.forms.SignUpForm.name.value;
        var signemail = document.forms.SignUpForm.email.value;
        var signpassword = document.forms.SignUpForm.password.value;
        var signphone = document.forms.SignUpForm.phone.value;
        var signcpassword = document.forms.SignUpForm.cpassword.value;
        var regemail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/g;
        var regphone = /^\d{10}$/;
        if (signname == null || signname === "") {
            window.alert("Please enter your first name.");
            signname.focus();
            return false;
        }
        if (signemail === "" || !regemail.test(signemail)) {
            window.alert("Please enter a valid e-mail address.");
            signemail.focus();
            return false;
        }
        if (signphone === "" || !regphone.test(signphone)) {
            alert("Please enter valid phone number.");
            signphone.focus();
            return false;

        }
        if (signpassword === "") {
            alert("Please enter your password");
            signpassword.focus();
            return false;
        }
        if (signpassword.length < 8) {
            alert("Password should be atleast 8 character long");
            signpassword.focus();
            return false;
        }
        if (signcpassword === "") {
            alert("Please enter your password");
            signcpassword.focus();
            return false;
        }
        if (signcpassword.length < 8) {
            alert("Password should be atleast 8 character long");
            signcpassword.focus();
            return false;
        }
        return true;
    }

    return (
        <>
            <div className="section1">
                <CustomizedBreadcrumbs />
                <div className="shape-img1"><img loading="lazy" src="https://ik.imagekit.io/bhanu1776/Freelansters/1.png?updatedAt=1682608761055" alt="s" /></div>
                <div className="shape-img2"><img loading="lazy" src="https://ik.imagekit.io/bhanu1776/Freelansters/2.png?updatedAt=1682608761012" alt="s" /></div>
                {/* <div className="shape-img3"><img loading="lazy" src="https://ik.imagekit.io/bhanu1776/Freelansters/3.png?updatedAt=1682608761027" alt="s" /></div> */}
                {/* <div className="shape-img4"><img loading="lazy" src="https://ik.imagekit.io/bhanu1776/Freelansters/4.png?updatedAt=1682608760997" alt="s" /></div>*/}
                <div className="shape-img5"><img loading="lazy" src="https://ik.imagekit.io/bhanu1776/Freelansters/5.png?updatedAt=1682608761058" alt="s" /></div>
                {/* <div className="shape-img6"><img loading="lazy" src="https://ik.imagekit.io/bhanu1776/Freelansters/6.png?updatedAt=1682608761020" alt="s" /></div> */}
                <div className="shape-img7"><img loading="lazy" src="https://ik.imagekit.io/bhanu1776/Freelansters/7.png?updatedAt=1682608759198" alt="s" /></div>
                <div className="shape-img8"><img loading="lazy" src="https://ik.imagekit.io/bhanu1776/Freelansters/8.png?updatedAt=1682608757447" alt="s" /></div>
                <div className="shape-img9"><img loading="lazy" src="https://ik.imagekit.io/bhanu1776/Freelansters/9.png?updatedAt=1682608757207" alt="s" /></div>
                {/* <div className="shape-img10"><img loading="lazy" src="https://ik.imagekit.io/bhanu1776/Freelansters/10.png?updatedAt=1682608757182" alt="s" /></div> */}
                <div className="shape-img11"><img loading="lazy" src="https://ik.imagekit.io/bhanu1776/Freelansters/11.png?updatedAt=1682608757190" alt="s" /></div>
                <div className="shape-img14"><img loading="lazy" src="https://ik.imagekit.io/bhanu1776/Freelansters/11.png?updatedAt=1682608757190" alt="s" /></div>
                <div className="shape-img12"><img loading="lazy" src="https://ik.imagekit.io/bhanu1776/Freelansters/14.png?updatedAt=1682608757196" alt="s" /></div>
                <div className="shape-img13"><img loading="lazy" src="https://ik.imagekit.io/bhanu1776/Freelansters/15.png?updatedAt=1682608757177" alt="s" /></div>
                <div className="right">
                    <div className="row full-height justify-content-center">
                        <div className="Glass">
                            <div className="py-5 text-center col-12 align-self-center">
                                <div className="pt-5 pb-5 text-center section pt-sm-2">
                                    <div className="pt-5 pb-5 text-center section">
                                        <h6 id="H6" className="pb-3 mb-0"><span id='l' onClick={rotateL}>Log In </span><span id='r' onClick={rotateR}>Sign Up</span></h6>
                                        <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                        <label htmlFor="reg-log"></label>


                                        <div className="mx-auto card-3d-wrap">
                                            <div className="card-3d-wrapper" id="wrep">
                                                <div className="card-front">
                                                    <div className="center-wrap">
                                                        <div className="text-center section">
                                                            <h4 id="H4" className="pb-3 mb-4">Log In</h4>
                                                            <form method='POST'>
                                                                <div className="form-group">
                                                                    <input type="email" name="logemail" className="form-style"
                                                                        placeholder="Your Email" id="logemail" value={logemail} onChange={(e) => { setlogEmail(e.target.value) }} autoComplete="off" />
                                                                    <i className="input-icon uil uil-at"></i>
                                                                </div>
                                                                <div className="mt-2 form-group">
                                                                    <input type="password" name="logpass" className="form-style"
                                                                        placeholder="Your Password" id="logpass" value={logpass} onChange={(e) => { setlogPass(e.target.value) }} autoComplete="off" />
                                                                    <i className="input-icon uil uil-lock-alt"></i>
                                                                </div>
                                                                <div className='btnLog'>
                                                                    <a href="/" className="mt-4 btn" onClick={loginUser}>submit</a>
                                                                </div>
                                                            </form>
                                                        </div>

                                                        <span className='forgot'>
                                                            <p id="Para" className="py-3 mt-4 mb-0 text-center"><a href="/" className="link">Forgot your
                                                                password?</a></p></span>
                                                    </div>
                                                </div>
                                                <div className="card-back">
                                                    <div className="center-wrap">
                                                        <div className="text-center section">
                                                            <h4 id="H4" className="pb-6 mb-3" >Sign Up</h4>
                                                            <form name="SignUpForm" method='POST'>
                                                                <div className="my-2 form-group">
                                                                    <input type="text" name="name" className="form-style"
                                                                        placeholder="Your Full Name" id="logname" autoComplete="off" value={user.name} onChange={handleInputs} />
                                                                    <i className="input-icon uil uil-user"></i>
                                                                </div>
                                                                <div className="mt-2 form-group">
                                                                    <input type="email" name="email" className="form-style"
                                                                        placeholder="Your Email" id="logemail" autoComplete="off" value={user.email} onChange={handleInputs} />
                                                                    <i className="input-icon uil uil-at"></i>
                                                                </div>
                                                                <div className="mt-2 form-group">
                                                                    <input type="number" name="phone" className="form-style"
                                                                        placeholder="Your Number" id="lognumber" autoComplete="off" value={user.phone} onChange={handleInputs} />
                                                                    <i className="input-icon uil uil-phone"></i>
                                                                </div>
                                                                <div className="mt-2 form-group">
                                                                    <input type="password" name="password" className="form-style"
                                                                        placeholder="Your Password" id="logpass" autoComplete="off" value={user.password} onChange={handleInputs} />
                                                                    <i className="input-icon uil uil-lock-alt"></i>
                                                                </div>
                                                                <div className="mt-2 form-group">
                                                                    <input type="password" name="cpassword" className="form-style"
                                                                        placeholder="Confirm Password" id="logpass" autoComplete="off" value={user.cpassword} onChange={handleInputs} />
                                                                    <i className="input-icon uil uil-lock-access"></i>
                                                                    <div className='btnSig'>
                                                                        <input type="submit" value='Submit' className="mt-4 btn" onClick={PostData} id="sbtn"></input>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* onClick={() => { PostData(); temp() }} */}
            </div >
            <ToastContainer />
        </>

    )
}

export default Login