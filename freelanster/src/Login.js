import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from './Routing';
import { ToastContainer, toast } from 'react-toastify';
import Images from './Img/imgindex.js'
import './Login.css'
import 'react-toastify/dist/ReactToastify.css';
import CustomizedBreadcrumbs from './Components/Breadcrumb.jsx';
import './Styles/Modal.scss'
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

    const otp = async (e) => {
        const res = await fetch("/otp", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }

        });
        // console.log('otp wala call ho raha hai');
    }

    useEffect(() => {
        otp();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    //* Signup Auth
    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, phone, password, cpassword } = user;
        const res = await fetch("/register", {
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
    const loginUser = async (e) => {
        e.preventDefault();
        const res = await fetch('/Login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: logemail,
                password: logpass
            })
        });
        const data = res.json();
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
                <div className="shape-img1"><img src={Images.shape1} alt="s" /></div>
                <div className="shape-img2"><img src={Images.shape2} alt="s" /></div>
                {/* <div className="shape-img3"><img src={Images.shape3} alt="s" /></div> */}
                {/* <div className="shape-img4"><img src={Images.shape4} alt="s" /></div>*/}
                <div className="shape-img5"><img src={Images.shape5} alt="s" /></div>
                {/* <div className="shape-img6"><img src={Images.shape6} alt="s" /></div> */}
                <div className="shape-img7"><img src={Images.shape7} alt="s" /></div>
                <div className="shape-img8"><img src={Images.shape8} alt="s" /></div>
                <div className="shape-img9"><img src={Images.shape9} alt="s" /></div>
                {/* <div className="shape-img10"><img src={Images.shape10} alt="s" /></div> */}
                <div className="shape-img11"><img src={Images.shape11} alt="s" /></div>
                <div className="shape-img14"><img src={Images.shape11} alt="s" /></div>
                <div className="shape-img12"><img src={Images.shape14} alt="s" /></div>
                <div className="shape-img13"><img src={Images.shape15} alt="s" /></div>
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
                                                                        <a type="text" value='Submit' className="mt-4 btn" href="#open-modal" id="sbtn">Submit</a>
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
                <div id="open-modal" class="modal-window">
                    <div>
                        <a href="/Login" title="Close" class="modal-close otp-a">
                            Close
                        </a>
                        <h1 class="otp-h1">OTP Verification</h1>
                        <div class="otp-desc">
                            Enter the verification code we just sent you on your registered
                            number
                        </div>

                        <br />
                        <div class="container1">
                            <div class="container__item">
                                <form class="form" method='POST'>
                                    <input
                                        type="email"
                                        class="form__field"
                                        placeholder="Enter OTP"
                                    />
                                    <input type="submit" value='Verify' className="uppercase otp-btn otp-btn--primary otp-btn--inside" onClick={PostData} ></input>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <ToastContainer />
        </>

    )
}

export default Login