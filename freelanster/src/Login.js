import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Images from './Img/imgindex.js'
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "", email: "", phone: "", password: "", cpassword: ""
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

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
            window.alert('Registration Successful');
            console.log('Registration successful');
        }
    }

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
                position: "bottom-left",
                theme: "colored"
            });
        } else {
            toast.success("Login Successful", {
                position: "bottom-left",
                theme: "colored"
            });
            navigate('/FindJobs')
        }
    }

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

    return (
        <>
            <div className="section">
                <div className="shape-img1"><img src={Images.shape1} alt="s" /></div>
                <div className="shape-img2"><img src={Images.shape2} alt="s" /></div>
                <div className="shape-img3"><img src={Images.shape3} alt="s" /></div>
                <div className="shape-img4"><img src={Images.shape4} alt="s" /></div>
                <div className="shape-img5"><img src={Images.shape5} alt="s" /></div>
                <div className="shape-img6"><img src={Images.shape6} alt="s" /></div>
                <div className="shape-img7"><img src={Images.shape7} alt="s" /></div>
                <div className="shape-img8"><img src={Images.shape8} alt="s" /></div>
                <div className="shape-img9"><img src={Images.shape9} alt="s" /></div>
                <div className="shape-img10"><img src={Images.shape10} alt="s" /></div>
                <div className="shape-img11"><img src={Images.shape11} alt="s" /></div>
                <div className="Glass"></div>

                <div className="right">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <div className="section pb-5 pt-5 text-center">
                                    <h6 className="mb-0 pb-3"><span id='l' onClick={rotateL}>Log In </span><span id='r' onClick={rotateR}>Sign Up</span></h6>
                                    <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                    <label htmlFor="reg-log"></label>


                                    <div className="card-3d-wrap mx-auto">
                                        <div className="card-3d-wrapper" id="wrep">
                                            <div className="card-front">
                                                <div className="center-wrap">
                                                    <div className="section text-center">
                                                        <h4 className="mb-4 pb-3">Log In</h4>
                                                        <form method='POST'>
                                                            <div className="form-group">
                                                                <input type="email" name="logemail" className="form-style"
                                                                    placeholder="Your Email" id="logemail" value={logemail} onChange={(e) => { setlogEmail(e.target.value) }} autoComplete="off" />
                                                                <i className="input-icon uil uil-at"></i>
                                                            </div>
                                                            <div className="form-group mt-2">
                                                                <input type="password" name="logpass" className="form-style"
                                                                    placeholder="Your Password" id="logpass" value={logpass} onChange={(e) => { setlogPass(e.target.value) }} autoComplete="off" />
                                                                <i className="input-icon uil uil-lock-alt"></i>
                                                            </div>
                                                            <div className='btnLog'>
                                                                <a href="/" className="btn mt-4" onClick={loginUser}>submit</a>
                                                            </div>
                                                        </form>
                                                    </div>

                                                    <span className='forgot'>
                                                        <p className="mb-0 mt-4 py-3 text-center"><a href="/" className="link">Forgot your
                                                            password?</a></p></span>
                                                </div>
                                            </div>
                                            <div className="card-back">
                                                <div className="center-wrap">
                                                    <div className="section text-center">
                                                        <h4 className="mb-3 pb-6" id="signup">Sign Up</h4>
                                                        <form method='POST'>
                                                            <div className="form-group my-2">
                                                                <input type="text" name="name" className="form-style"
                                                                    placeholder="Your Full Name" id="logname" autoComplete="off" value={user.name} onChange={handleInputs} />
                                                                <i className="input-icon uil uil-user"></i>
                                                            </div>
                                                            <div className="form-group mt-2">
                                                                <input type="email" name="email" className="form-style"
                                                                    placeholder="Your Email" id="logemail" autoComplete="off" value={user.email} onChange={handleInputs} />
                                                                <i className="input-icon uil uil-at"></i>
                                                            </div>
                                                            <div className="form-group mt-2">
                                                                <input type="number" name="phone" className="form-style"
                                                                    placeholder="Your Number" id="lognumber" autoComplete="off" value={user.phone} onChange={handleInputs} />
                                                                <i className="input-icon uil uil-phone"></i>
                                                            </div>
                                                            <div className="form-group mt-2">
                                                                <input type="password" name="password" className="form-style"
                                                                    placeholder="Your Password" id="logpass" autoComplete="off" value={user.password} onChange={handleInputs} />
                                                                <i className="input-icon uil uil-lock-alt"></i>
                                                            </div>
                                                            <div className="form-group mt-2">
                                                                <input type="password" name="cpassword" className="form-style"
                                                                    placeholder="Confirm Password" id="logpass" autoComplete="off" value={user.cpassword} onChange={handleInputs} />
                                                                <i className="input-icon uil uil-lock-access"></i>
                                                                <div className='btnSig'>
                                                                    <input type="submit" value='Submit' className="btn mt-4" onClick={PostData} id="sbtn"></input>
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
            <ToastContainer />
        </>
    )
}

export default Login