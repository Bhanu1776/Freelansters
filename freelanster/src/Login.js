import React from 'react'
import Images from './Img/imgindex.js'
import './Login.css'


const Login = () => {
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
                                    <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                                    <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                    <label for="reg-log"></label>


                                    <div className="card-3d-wrap mx-auto">
                                        <div className="card-3d-wrapper" id="wrep">
                                            <div className="card-front">
                                                <div className="center-wrap">
                                                    <div className="section text-center">
                                                        <h4 className="mb-4 pb-3">Log In</h4>
                                                        <div className="form-group">
                                                            <input type="email" name="logebtnmail" className="form-style"
                                                                placeholder="Your Email" id="logemail" autocomplete="off" />
                                                            <i className="input-icon uil uil-at"></i>
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input type="password" name="logpass" className="form-style"
                                                                placeholder="Your Password" id="logpass" autocomplete="off" />
                                                            <i className="input-icon uil uil-lock-alt"></i>
                                                        </div>
                                                        <div className='btnLog'>
                                                        <a href="/" className="btn mt-4">submit</a>
                                                        </div>
                                                    </div>
                                                        <span className='forgot'>
                                                        <p className="mb-0 mt-4 py-3 text-center"><a href="/" className="link">Forgot your
                                                            password?</a></p></span>
                                                </div>
                                            </div>
                                            <div className="card-back">
                                                <div className="center-wrap">
                                                    <div className="section text-center">
                                                        <h4 className="mb-3 pb-6" id="signupb">Sign Up</h4>
                                                        <div className="form-group my-2">
                                                            <input type="text" name="logname" className="form-style"
                                                                placeholder="Your Full Name" id="logname" autocomplete="off" />
                                                            <i className="input-icon uil uil-user"></i>
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input type="email" name="logemail" className="form-style"
                                                                placeholder="Your Email" id="logemail" autocomplete="off" />
                                                            <i className="input-icon uil uil-at"></i>
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input type="number" name="lognumber" className="form-style"
                                                                placeholder="Your Number" id="lognumber" autocomplete="off" />
                                                            <i className="input-icon uil uil-phone"></i>
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input type="password" name="logpass" className="form-style"
                                                                placeholder="Your Password" id="logpass" autocomplete="off" />
                                                            <i className="input-icon uil uil-lock-alt"></i>
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input type="password" name="logpass" className="form-style"
                                                                placeholder="Confirm Password" id="logpass" autocomplete="off" />
                                                            <i className="input-icon uil uil-lock-access"></i>
                                                        </div>
                                                        <div className='btnSig'><a href="/" className="btn mt-4" id="sbtn">submit</a></div>
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
        </>
    )
}

export default Login