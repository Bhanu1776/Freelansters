import React, { useState } from "react";
import styled from "styled-components";

const PostJobs = () => {
  const [loading, setLoading] = useState(true);
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 0);
  }

  const [Jobs, setJobs] = useState({
    title: "",
    date: "",
    description: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setJobs({ ...Jobs, [name]: value });
    console.log(Jobs);
  };

  //* Jobs Sending to Database

  const PostData = async (e) => {
    e.preventDefault();

    const { title, date, description } = Jobs;

    const res = await fetch(process.env.BACKEND_URL+"/Jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        date,
        description,
      }),
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Unable to add your Job");
      console.log("Unable to add your Job");
    } else {
      window.alert("Jobs Posted Successfully");
      console.log("Jobs Posted Successfully");
    }
  };

  const Wrapper = styled.section`
    body {
      background: url("https://images.unsplash.com/photo-1545446968-9baea3c7a4db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
      background-size: cover;
      height: 100vh;
      background-color: #000;
      color: #c0c0c0;
      font-family: Arial, san-serif;
    }
    #PJ-h1 {
      margin: 10px 0 0 0;
    }

    #contact-form {
      box-shadow: rgba(45, 42, 42, 0.726) 0px 0px 4.8px 0px;
      backdrop-filter: blur(25px);
      background-color: rgba(69, 66, 66, 0.695);
      padding: 10px 20px 30px 20px;
      max-width: 100%;
      float: left;
      left: 50%;
      position: absolute;
      margin-top: 100px;
      margin-left: -240px;
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
      width: 100%;
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
      background-color: #e5e6e7;
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

    #contact-form #PJsubmit {
      cursor: pointer;
      width: 100%;
      border: none;
      background: #39adad;
      color: #fff;
      margin: 0 0 5px;
      padding: 10px;
      border-radius: 5px;
    }

    #contact-form #PJsubmit:hover {
      background-color: #39cece;
    }

    #contact-form #PJsubmit:active {
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
    }

    #contact-form .required {
      font-weight: bold;
      color: #e5e6e7;
    }

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
    !loading && (
      <>
        <Wrapper>
          <body>
            <div id="contact-form">
              <div>
                <h1 id="PJ-h1">Post Your Job Here!!</h1>
              </div>

              <form method="POST">
                <div>
                  <label for="title">
                    <span className="required">Title: *</span>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={Jobs.title}
                      onChange={handleInputs}
                      placeholder="Job Title"
                      required="required"
                      tabindex="1"
                    />
                  </label>
                </div>
                <div>
                  <label for="date">
                    <span className="required">Date: *</span>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={Jobs.date}
                      onChange={handleInputs}
                      placeholder="Date"
                      tabindex="2"
                      required="required"
                      autoComplete="off"
                    />
                  </label>
                </div>
                <div>
                  <label for="description">
                    <span className="required">Description: *</span>
                    <textarea
                      id="description"
                      name="description"
                      placeholder="Please write your jobs description here."
                      tabindex="4"
                      required="required"
                      autoComplete="off"
                      value={Jobs.description}
                      onChange={handleInputs}
                    ></textarea>
                  </label>
                </div>
                <div>
                  <label for="image">
                    <span className="required">Image: *</span>
                    <input
                      id="image"
                      type="file"
                      name="image"
                      autoComplete="off"
                      accept="image/*"
                    ></input>
                  </label>
                </div>
                <div>
                  <input
                    name="submit"
                    type="submit"
                    id="PJsubmit"
                    value="Submit"
                    onClick={PostData}
                  ></input>
                </div>
              </form>
            </div>
          </body>
        </Wrapper>
      </>
    )
  );
};

export default PostJobs;
