import React from 'react'
import styled from 'styled-components';

const PostJobs = () => {

    const Wrapper = styled.section`

body {
            background-image:url();
            background-size: cover;
            height: 100%;
            background-color: #000;
            color: #C0C0C0;
            font-family: Arial, san-serif;
        }
         h1{
            margin: 10px 0 0 0;
        }

        #contact-form {
            background-color: rgba(72, 72, 72, 0.9);
            padding: 10px 20px 30px 20px;
            max-width: 100%;
            float: left;
            left: 50%;
            position: absolute;
            margin-top: 30px;
            margin-left: -260px;
            border-radius: 7px;
            -webkit-border-radius: 7px;
            -moz-border-radius: 7px;
        }

        #contact-form input,
        #contact-form select,
        #contact-form textarea,
        #contact-form label {
            font-size: 15px;
            margin-bottom: 2px;
            font-family: Arial, san-serif;
            width:100%;
        }

        #contact-form input,
        #contact-form select,
        #contact-form textarea {
            /* width: 100%; */
            background: #fff;
            border: 0;
            -moz-border-radius: 4px;
            -webkit-border-radius: 4px;
            border-radius: 4px;
            margin-bottom: 25px;
            padding: 5px;
        }

        #contact-form input:focus,
        #contact-form select:focus,
        #contact-form textarea:focus {
            background-color: #E5E6E7;
        }

        #contact-form textarea {
            width: 100%;
            height: 150px;
        }


        input:required,
        textarea:required {
            box-shadow: none;
            -moz-box-shadow: none;
            -webkit-box-shadow: none;
            -o-box-shadow: none;
        }
        
        #contact-form #PJsubmit{
                cursor: pointer;
                width: 100%;
                border: none;
                background: #991D57;
                background-image: linear-gradient(bottom, #8C1C50 0%, #991D57 52%);
                background-image: -moz-linear-gradient(bottom, #8C1C50 0%, #991D57 52%);
                background-image: -webkit-linear-gradient(bottom, #8C1C50 0%, #991D57 52%);
                color: #FFF;
                margin: 0 0 5px;
                padding: 10px;
                border-radius: 5px;
        }
        
            #contact-form #PJsubmit:hover {
                background-image: linear-gradient(bottom, #9C215A 0%, #A82767 52%);
                background-image: -moz-linear-gradient(bottom, #9C215A 0%, #A82767 52%);
                background-image: -webkit-linear-gradient(bottom, #9C215A 0%, #A82767 52%);
                -webkit-transition: background 0.3s ease-in-out;
                -moz-transition: background 0.3s ease-in-out;
                transition: background-color 0.3s ease-in-out;
            }
        
            #contact-form #PJsubmit:active {
                box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
            }

        #contact-form .required {
            font-weight: bold;
            color: #E5E6E7;
        }


        /* Make form look nice on smaller screens */
        @media only screen and (max-width: 580px) {
            #contact-form {
                left: 3%;
                margin-right: 3%;
                width: 88%;
                margin-left: 0;
                padding-left: 3%;
                padding-right: 3%;
            }
        }


`;


    return (
        <>

            <Wrapper>
                <body>

                    <div id="contact-form">
                        <div>
                            <h1 id='PJ-h1'>Post Your Job Here!!</h1>

                        </div>

                        <form method="post" action="/">
                            <div>
                                <label for="title">
                                    <span class="required">Title: *</span>
                                    <input type="text" id="title" name="title" value="" placeholder="Job Title" required="required" tabindex="1" autofocus="autofocus" />
                                </label>
                            </div>
                            <div>
                                <label for="date">
                                    <span class="required">Date: *</span>
                                    <input type="date" id="date" name="date" value="" placeholder="Date" tabindex="2" required="required" />
                                </label>
                            </div>
                            <div>
                                <label for="description">
                                    <span class="required">Description: *</span>
                                    <textarea id="description" name="description" placeholder="Please write your jobs description here." tabindex="4" required="required"></textarea>
                                </label>
                            </div>
                            <div>
                                <label for="image">
                                    <span class="required">Image: *</span>
                                    <input id="Pjimage" type="file" name="image" required="required" accept="image/*"></input>
                                </label>
                            </div>
                            <div>
                                <input name="submit" type="submit" id="PJsubmit" value="Submit"></input>
                            </div>
                        </form>

                    </div>

                </body>
            </Wrapper>

        </>
    )
}


export default PostJobs
