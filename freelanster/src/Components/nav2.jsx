import React from 'react'

export const nav2 = () => {
    return (
        <>
            <div className="container position-sticky z-index-sticky top-0"><div className="row"><div className="col-12">
                <nav className="navbar navbar-expand-lg  blur border-radius-xl top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
                    <div className="container-fluid">
                        <a className="navbar-brand font-weight-bolder ms-sm-3" href="https://demos.creative-tim.com/material-kit/presentation" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom" target="_blank">
                            Material Kit 2
                        </a>
                        <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon mt-2">
                                <span className="navbar-toggler-bar bar1"></span>
                                <span className="navbar-toggler-bar bar2"></span>
                                <span className="navbar-toggler-bar bar3"></span>
                            </span>
                        </button>
                        <div className="collapse navbar-collapse pt-3 pb-2 py-lg-0" id="navigation">
                            <ul className="navbar-nav navbar-nav-hover ms-lg-12 ps-lg-5 w-100">
                                <li className="nav-item dropdown dropdown-hover mx-2">
                                    <a className="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuPages" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="material-icons opacity-6 me-2 text-md">dashboard</i>
                                        Pages
                                        <img src="./assets/img/down-arrow-dark.svg" alt="down-arrow" className="arrow ms-auto" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-lg mt-0 mt-lg-3" aria-labelledby="dropdownMenuPages">
                                        <div className="d-none d-lg-block">
                                            <a href="javascript:;" className="dropdown-item border-radius-md">
                                                About Us
                                            </a>
                                            <a href="javascript:;" className="dropdown-item border-radius-md">
                                                Contact Us
                                            </a>
                                            <a href="javascript:;" className="dropdown-item border-radius-md">
                                                Author
                                            </a>
                                            <a href="javascript:;" className="dropdown-item border-radius-md">
                                                Sign In
                                            </a>
                                        </div>

                                        <div className="d-lg-none">
                                            <a href="javascript:;" className="dropdown-item border-radius-md">
                                                About Us
                                            </a>
                                            <a href="javascript:;" className="dropdown-item border-radius-md">
                                                Contact Us
                                            </a>
                                            <a href="javascript:;" className="dropdown-item border-radius-md">
                                                Author
                                            </a>
                                            <a href="javascript:;" className="dropdown-item border-radius-md">
                                                Sign In
                                            </a>
                                        </div>

                                    </div>
                                </li>

                                <li className="nav-item dropdown dropdown-hover mx-2">
                                    <a className="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuBlocks" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="material-icons opacity-6 me-2 text-md">view_day</i>
                                        Sections
                                        <img src="./assets/img/down-arrow-dark.svg" alt="down-arrow" className="arrow ms-auto" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-animation dropdown-lg dropdown-lg-responsive p-3 border-radius-lg mt-0 mt-lg-3" aria-labelledby="dropdownMenuBlocks">
                                        <div className="d-none d-lg-block">
                                            <li className="nav-item dropdown dropdown-hover dropdown-subitem">
                                                <a className="dropdown-item py-2 ps-3 border-radius-md" href="./presentation.html">
                                                    <div className="d-flex">
                                                        <div className="icon h-10 me-3 d-flex mt-1">
                                                            <i className="ni ni-single-copy-04 text-gradient text-primary"></i>
                                                        </div>
                                                        <div className="w-100 d-flex align-items-center justify-content-between">
                                                            <div>
                                                                <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Page Sections</h6>
                                                                <span className="text-sm">See all 109 sections</span>
                                                            </div>

                                                            <img src="./assets/img/down-arrow.svg" alt="down-arrow" className="arrow" />
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="dropdown-menu mt-0 py-3 px-2 mt-3" aria-labelledby="pageSections">
                                                    <a className="dropdown-item ps-3 border-radius-md mb-1" href="javascript:;">
                                                        Page Headers
                                                    </a>
                                                    <a className="dropdown-item ps-3 border-radius-md mb-1" href="javascript:;">
                                                        Features
                                                    </a>
                                                    <a className="dropdown-item ps-3 border-radius-md mb-1" href="javascript:;">
                                                        Pricing
                                                    </a>
                                                    <a className="dropdown-item ps-3 border-radius-md mb-1" href="javascript:;">
                                                        FAQ
                                                    </a>
                                                    <a className="dropdown-item ps-3 border-radius-md mb-1" href="javascript:;">
                                                        Blog Posts
                                                    </a>
                                                    <a className="dropdown-item ps-3 border-radius-md mb-1" href="javascript:;">
                                                        Testimonials
                                                    </a>
                                                    <a className="dropdown-item ps-3 border-radius-md mb-1" href="javascript:;">
                                                        Teams
                                                    </a>
                                                    <a className="dropdown-item ps-3 border-radius-md mb-1" href="javascript:;">
                                                        Stats
                                                    </a>
                                                    <a className="dropdown-item ps-3 border-radius-md mb-1" href="javascript:;">
                                                        Call to Actions
                                                    </a>
                                                    <a className="dropdown-item ps-3 border-radius-md mb-1" href="javascript:;">
                                                        Logo Areas
                                                    </a>
                                                </div>
                                            </li>
                                        </div>

                                        <div className="row d-lg-none">
                                            <div className="col-md-12">
                                                <div className="d-flex mb-2">
                                                    <div className="icon h-10 me-3 d-flex mt-1">
                                                        <i className="ni ni-single-copy-04 text-gradient text-primary"></i>
                                                    </div>
                                                    <div className="w-100 d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Page Sections</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a className="dropdown-item ps-3 border-radius-md mb-1" href="javascript:;">
                                                    Page Headers
                                                </a>
                                                <a className="dropdown-item ps-3 border-radius-md mb-1" href="javascript:;">
                                                    Features
                                                </a>
                                                <a className="dropdown-item ps-3 border-radius-md mb-1" href="javascript:;">
                                                    Pricing
                                                </a>
                                                <a className="dropdown-item ps-3 border-radius-md mb-1" href="javascript:;">
                                                    FAQ
                                                </a>
                                                <a className="dropdown-item ps-3 border-radius-md mb-1" href="javascript:;">
                                                    Blog Posts
                                                </a>
                                                <a className="dropdown-item ps-3 border-radius-md mb-1" href="javascript:;">
                                                    Testimonials
                                                </a>
                                                <a className="dropdown-item ps-3 border-radius-md mb-1" href="javascript:;">
                                                    Teams
                                                </a>
                                                <a className="dropdown-item ps-3 border-radius-md mb-1" href="javascript:;">
                                                    Stats
                                                </a>
                                                <a className="dropdown-item ps-3 border-radius-md mb-1" href="javascript:;">
                                                    Call to Actions
                                                </a>
                                                <a className="dropdown-item ps-3 border-radius-md mb-1" href="javascript:;">
                                                    Applications
                                                </a>
                                            </div>
                                        </div>

                                    </ul>
                                </li>

                                <li className="nav-item dropdown dropdown-hover mx-2">
                                    <a className="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuDocs" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="material-icons opacity-6 me-2 text-md">article</i>

                                        <img src="./assets/img/down-arrow-dark.svg" alt="down-arrow" className="arrow ms-auto" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-animation dropdown-lg mt-0 mt-lg-3 p-3 border-radius-lg" aria-labelledby="dropdownMenuDocs">
                                        <div className="d-none d-lg-block">
                                            <li className="nav-item ">
                                                <a className="dropdown-item py-2 ps-3 border-radius-md" href="javascript:;">
                                                    <div className="d-flex">
                                                        <div className="icon h-10 me-3 d-flex mt-1">
                                                            <svg className="text-secondary" width="16px" height="16px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                                <title>spaceship</title>
                                                                <g stroke="none" strokeWidth="1" fill="none" fullrule="evenodd">
                                                                    <g transform="translate(-1720.000000, -592.000000)" fill="#FFFFFF" fullrule="nonzero">
                                                                        <g transform="translate(1716.000000, 291.000000)">
                                                                            <g transform="translate(4.000000, 301.000000)">
                                                                                <path className="color-background" d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z"></path>
                                                                                <path className="color-background" d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z"></path>
                                                                                <path className="color-background" d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z" opacity="0.598539807"></path>
                                                                                <path className="color-background" d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z" opacity="0.598539807"></path>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Getting Started</h6>
                                                            <span className="text-sm">All about overview, quick start, license and contents</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a className="dropdown-item py-2 ps-3 border-radius-md" href="javascript:;">
                                                    <div className="d-flex">
                                                        <div className="icon h-10 me-3 d-flex mt-1">
                                                            <svg className="text-secondary" width="16px" height="16px" viewBox="0 0 40 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                                <title>document</title>
                                                                <g stroke="none" strokeWidth="1" fill="none" fullrule="evenodd">
                                                                    <g transform="translate(-1870.000000, -591.000000)" fill="#FFFFFF" fullrule="nonzero">
                                                                        <g transform="translate(1716.000000, 291.000000)">
                                                                            <g id="document" transform="translate(154.000000, 300.000000)">
                                                                                <path className="color-background" d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z" opacity="0.603585379"></path>
                                                                                <path className="color-background" d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"></path>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Foundation</h6>
                                                            <span className="text-sm">See our colors, icons and typography</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a className="dropdown-item py-2 ps-3 border-radius-md" href="javascript:;">
                                                    <div className="d-flex">
                                                        <div className="icon h-10 me-3 d-flex mt-1">
                                                            <svg className="text-secondary" width="16px" height="16px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                                <title>box-3d-50</title>
                                                                <g stroke="none" strokeWidth="1" fill="none" fullrule="evenodd">
                                                                    <g transform="translate(-2319.000000, -291.000000)" fill="#FFFFFF" fullrule="nonzero">
                                                                        <g transform="translate(1716.000000, 291.000000)">
                                                                            <g id="box-3d-50" transform="translate(603.000000, 0.000000)">
                                                                                <path className="color-background" d="M22.7597136,19.3090182 L38.8987031,11.2395234 C39.3926816,10.9925342 39.592906,10.3918611 39.3459167,9.89788265 C39.249157,9.70436312 39.0922432,9.5474453 38.8987261,9.45068056 L20.2741875,0.1378125 L20.2741875,0.1378125 C19.905375,-0.04725 19.469625,-0.04725 19.0995,0.1378125 L3.1011696,8.13815822 C2.60720568,8.38517662 2.40701679,8.98586148 2.6540352,9.4798254 C2.75080129,9.67332903 2.90771305,9.83023153 3.10122239,9.9269862 L21.8652864,19.3090182 C22.1468139,19.4497819 22.4781861,19.4497819 22.7597136,19.3090182 Z"></path>
                                                                                <path className="color-background" d="M23.625,22.429159 L23.625,39.8805372 C23.625,40.4328219 24.0727153,40.8805372 24.625,40.8805372 C24.7802551,40.8805372 24.9333778,40.8443874 25.0722402,40.7749511 L41.2741875,32.673375 L41.2741875,32.673375 C41.719125,32.4515625 42,31.9974375 42,31.5 L42,14.241659 C42,13.6893742 41.5522847,13.241659 41,13.241659 C40.8447549,13.241659 40.6916418,13.2778041 40.5527864,13.3472318 L24.1777864,21.5347318 C23.8390024,21.7041238 23.625,22.0503869 23.625,22.429159 Z" opacity="0.7"></path>
                                                                                <path className="color-background" d="M20.4472136,21.5347318 L1.4472136,12.0347318 C0.953235098,11.7877425 0.352562058,11.9879669 0.105572809,12.4819454 C0.0361450918,12.6208008 6.47121774e-16,12.7739139 0,12.929159 L0,30.1875 L0,30.1875 C0,30.6849375 0.280875,31.1390625 0.7258125,31.3621875 L19.5528096,40.7750766 C20.0467945,41.0220531 20.6474623,40.8218132 20.8944388,40.3278283 C20.963859,40.1889789 21,40.0358742 21,39.8806379 L21,22.429159 C21,22.0503869 20.7859976,21.7041238 20.4472136,21.5347318 Z" opacity="0.7"></path>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Components</h6>
                                                            <span className="text-sm">Explore our collection of fully designed components</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a className="dropdown-item py-2 ps-3 border-radius-md" href="javascript:;">
                                                    <div className="d-flex">
                                                        <div className="icon h-10 me-3 d-flex mt-1">
                                                            <svg className="text-secondary" width="16px" height="16px" viewBox="0 0 40 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                                <title>switches</title>
                                                                <g stroke="none" strokeWidth="1" fill="none" fullrule="evenodd">
                                                                    <g transform="translate(-1870.000000, -440.000000)" fill="#FFFFFF" fullrule="nonzero">
                                                                        <g transform="translate(1716.000000, 291.000000)">
                                                                            <g transform="translate(154.000000, 149.000000)">
                                                                                <path className="color-background" d="M10,20 L30,20 C35.4545455,20 40,15.4545455 40,10 C40,4.54545455 35.4545455,0 30,0 L10,0 C4.54545455,0 0,4.54545455 0,10 C0,15.4545455 4.54545455,20 10,20 Z M10,3.63636364 C13.4545455,3.63636364 16.3636364,6.54545455 16.3636364,10 C16.3636364,13.4545455 13.4545455,16.3636364 10,16.3636364 C6.54545455,16.3636364 3.63636364,13.4545455 3.63636364,10 C3.63636364,6.54545455 6.54545455,3.63636364 10,3.63636364 Z" opacity="0.6"></path>
                                                                                <path className="color-background" d="M30,23.6363636 L10,23.6363636 C4.54545455,23.6363636 0,28.1818182 0,33.6363636 C0,39.0909091 4.54545455,43.6363636 10,43.6363636 L30,43.6363636 C35.4545455,43.6363636 40,39.0909091 40,33.6363636 C40,28.1818182 35.4545455,23.6363636 30,23.6363636 Z M30,40 C26.5454545,40 23.6363636,37.0909091 23.6363636,33.6363636 C23.6363636,30.1818182 26.5454545,27.2727273 30,27.2727273 C33.4545455,27.2727273 36.3636364,30.1818182 36.3636364,33.6363636 C36.3636364,37.0909091 33.4545455,40 30,40 Z"></path>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Plugins</h6>
                                                            <span className="text-sm">Check how you can integrate our plugins</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="nav-item ">
                                                <a className="dropdown-item py-2 ps-3 border-radius-md" href="javascript:;">
                                                    <div className="d-flex">
                                                        <div className="icon h-10 me-3 d-flex mt-1">
                                                            <svg className="text-secondary" width="16px" height="16px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                                <title>settings</title>
                                                                <g stroke="none" strokeWidth="1" fill="none" fullrule="evenodd">
                                                                    <g transform="translate(-2020.000000, -442.000000)" fill="#FFFFFF" fullrule="nonzero">
                                                                        <g transform="translate(1716.000000, 291.000000)">
                                                                            <g transform="translate(304.000000, 151.000000)">
                                                                                <polygon className="color-background" opacity="0.596981957" points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"></polygon>
                                                                                <path className="color-background" d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z" opacity="0.596981957"></path>
                                                                                <path className="color-background" d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"></path>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Utility Classes</h6>
                                                            <span className="text-sm">For those who want flexibility, use our utility classes</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </div>

                                        <div className="row d-lg-none">
                                            <div className="col-md-12 g-0">
                                                <a className="dropdown-item py-2 ps-3 border-radius-md" href="javascript:;">
                                                    <div className="d-flex">
                                                        <div className="icon h-10 me-3 d-flex mt-1">
                                                            <svg className="text-secondary" width="16px" height="16px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                                <title>spaceship</title>
                                                                <g stroke="none" strokeWidth="1" fill="none" fullrule="evenodd">
                                                                    <g transform="translate(-1720.000000, -592.000000)" fill="#FFFFFF" fullrule="nonzero">
                                                                        <g transform="translate(1716.000000, 291.000000)">
                                                                            <g transform="translate(4.000000, 301.000000)">
                                                                                <path className="color-background" d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z"></path>
                                                                                <path className="color-background" d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z"></path>
                                                                                <path className="color-background" d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z" opacity="0.598539807"></path>
                                                                                <path className="color-background" d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z" opacity="0.598539807"></path>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Getting Started</h6>
                                                            <span className="text-sm">All about overview, quick start, license and contents</span>
                                                        </div>
                                                    </div>
                                                </a>

                                                <a className="dropdown-item py-2 ps-3 border-radius-md" href="javascript:;">
                                                    <div className="d-flex">
                                                        <div className="icon h-10 me-3 d-flex mt-1">
                                                            <svg className="text-secondary" width="16px" height="16px" viewBox="0 0 40 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                                <title>document</title>
                                                                <g stroke="none" strokeWidth="1" fill="none" fullrule="evenodd">
                                                                    <g transform="translate(-1870.000000, -591.000000)" fill="#FFFFFF" fullrule="nonzero">
                                                                        <g transform="translate(1716.000000, 291.000000)">
                                                                            <g transform="translate(154.000000, 300.000000)">
                                                                                <path className="color-background" d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z" opacity="0.603585379"></path>
                                                                                <path className="color-background" d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"></path>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Foundation</h6>
                                                            <span className="text-sm">See our colors, icons and typography</span>
                                                        </div>
                                                    </div>
                                                </a>

                                                <a className="dropdown-item py-2 ps-3 border-radius-md" href="javascript:;">
                                                    <div className="d-flex">
                                                        <div className="icon h-10 me-3 d-flex mt-1">
                                                            <svg className="text-secondary" width="16px" height="16px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                                <title>box-3d-50</title>
                                                                <g stroke="none" strokeWidth="1" fill="none" fullrule="evenodd">
                                                                    <g transform="translate(-2319.000000, -291.000000)" fill="#FFFFFF" fullrule="nonzero">
                                                                        <g transform="translate(1716.000000, 291.000000)">
                                                                            <g transform="translate(603.000000, 0.000000)">
                                                                                <path className="color-background" d="M22.7597136,19.3090182 L38.8987031,11.2395234 C39.3926816,10.9925342 39.592906,10.3918611 39.3459167,9.89788265 C39.249157,9.70436312 39.0922432,9.5474453 38.8987261,9.45068056 L20.2741875,0.1378125 L20.2741875,0.1378125 C19.905375,-0.04725 19.469625,-0.04725 19.0995,0.1378125 L3.1011696,8.13815822 C2.60720568,8.38517662 2.40701679,8.98586148 2.6540352,9.4798254 C2.75080129,9.67332903 2.90771305,9.83023153 3.10122239,9.9269862 L21.8652864,19.3090182 C22.1468139,19.4497819 22.4781861,19.4497819 22.7597136,19.3090182 Z"></path>
                                                                                <path className="color-background" d="M23.625,22.429159 L23.625,39.8805372 C23.625,40.4328219 24.0727153,40.8805372 24.625,40.8805372 C24.7802551,40.8805372 24.9333778,40.8443874 25.0722402,40.7749511 L41.2741875,32.673375 L41.2741875,32.673375 C41.719125,32.4515625 42,31.9974375 42,31.5 L42,14.241659 C42,13.6893742 41.5522847,13.241659 41,13.241659 C40.8447549,13.241659 40.6916418,13.2778041 40.5527864,13.3472318 L24.1777864,21.5347318 C23.8390024,21.7041238 23.625,22.0503869 23.625,22.429159 Z" opacity="0.7"></path>
                                                                                <path className="color-background" d="M20.4472136,21.5347318 L1.4472136,12.0347318 C0.953235098,11.7877425 0.352562058,11.9879669 0.105572809,12.4819454 C0.0361450918,12.6208008 6.47121774e-16,12.7739139 0,12.929159 L0,30.1875 L0,30.1875 C0,30.6849375 0.280875,31.1390625 0.7258125,31.3621875 L19.5528096,40.7750766 C20.0467945,41.0220531 20.6474623,40.8218132 20.8944388,40.3278283 C20.963859,40.1889789 21,40.0358742 21,39.8806379 L21,22.429159 C21,22.0503869 20.7859976,21.7041238 20.4472136,21.5347318 Z" opacity="0.7"></path>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Components</h6>
                                                            <span className="text-sm">Explore our collection of fully designed components</span>
                                                        </div>
                                                    </div>
                                                </a>

                                                <a className="dropdown-item py-2 ps-3 border-radius-md" href="javascript:;">
                                                    <div className="d-flex">
                                                        <div className="icon h-10 me-3 d-flex mt-1">
                                                            <svg className="text-secondary" width="16px" height="16px" viewBox="0 0 40 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                                <title>switches</title>
                                                                <g stroke="none" strokeWidth="1" fill="none" fullrule="evenodd">
                                                                    <g transform="translate(-1870.000000, -440.000000)" fill="#FFFFFF" fullrule="nonzero">
                                                                        <g transform="translate(1716.000000, 291.000000)">
                                                                            <g transform="translate(154.000000, 149.000000)">
                                                                                <path className="color-background" d="M10,20 L30,20 C35.4545455,20 40,15.4545455 40,10 C40,4.54545455 35.4545455,0 30,0 L10,0 C4.54545455,0 0,4.54545455 0,10 C0,15.4545455 4.54545455,20 10,20 Z M10,3.63636364 C13.4545455,3.63636364 16.3636364,6.54545455 16.3636364,10 C16.3636364,13.4545455 13.4545455,16.3636364 10,16.3636364 C6.54545455,16.3636364 3.63636364,13.4545455 3.63636364,10 C3.63636364,6.54545455 6.54545455,3.63636364 10,3.63636364 Z" opacity="0.6"></path>
                                                                                <path className="color-background" d="M30,23.6363636 L10,23.6363636 C4.54545455,23.6363636 0,28.1818182 0,33.6363636 C0,39.0909091 4.54545455,43.6363636 10,43.6363636 L30,43.6363636 C35.4545455,43.6363636 40,39.0909091 40,33.6363636 C40,28.1818182 35.4545455,23.6363636 30,23.6363636 Z M30,40 C26.5454545,40 23.6363636,37.0909091 23.6363636,33.6363636 C23.6363636,30.1818182 26.5454545,27.2727273 30,27.2727273 C33.4545455,27.2727273 36.3636364,30.1818182 36.3636364,33.6363636 C36.3636364,37.0909091 33.4545455,40 30,40 Z"></path>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Plugins</h6>
                                                            <span className="text-sm">Check how you can integrate our plugins</span>
                                                        </div>
                                                    </div>
                                                </a>

                                                <a className="dropdown-item py-2 ps-3 border-radius-md" href="javascript:;">
                                                    <div className="d-flex">
                                                        <div className="icon h-10 me-3 d-flex mt-1">
                                                            <svg className="text-secondary" width="16px" height="16px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                                <title>settings</title>
                                                                <g stroke="none" strokeWidth="1" fill="none" fullrule="evenodd">
                                                                    <g transform="translate(-2020.000000, -442.000000)" fill="#FFFFFF" fullrule="nonzero">
                                                                        <g transform="translate(1716.000000, 291.000000)">
                                                                            <g transform="translate(304.000000, 151.000000)">
                                                                                <polygon className="color-background" opacity="0.596981957" points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"></polygon>
                                                                                <path className="color-background" d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z" opacity="0.596981957"></path>
                                                                                <path className="color-background" d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"></path>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h6 className="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0">Utility Classes</h6>
                                                            <span className="text-sm">All about overview, quick start, license and contents</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                    </ul>
                                </li>
                                <li className="nav-item ms-lg-auto my-auto ms-3 ms-lg-0">

                                    <a href="https://www.creative-tim.com/product/material-kit" className="btn btn-sm  bg-gradient-primary  mb-0 me-1 mt-2 mt-md-0">Free Download</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div></div></div>
        </>
    )
}
