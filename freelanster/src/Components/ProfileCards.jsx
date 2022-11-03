import React from 'react'
import styled from 'styled-components'
// import Images from '../Img/imgindex'
import ProStars from './ProStars'
import './ProfileCards.css';
import { AiFillMessage, AiOutlineClockCircle } from 'react-icons/ai';
import FormatPrice from '../Helpers/FormatPrice';
const ProfileCards = (props) => {
    const Wrapper = styled.section`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* font-family: "Courier New"; */
}

/* body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(45deg, #fbda61, #ff5acd)
} */

/* .cards-holder {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 20px;
} */

.profile-cards {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #FFFAFA;
  padding: 5px;
  border-radius: 20px 20px;
}

.profile-cards:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    /* transform: scale(1.1); */
    transition-timing-function: ease-in-out;
}

.profile-speciality {
  margin: 20px 0px;
  padding: 0px 10px;
  font-family: "Roboto", "Sans Serif";
  font-weight: bold;
}

.time-price {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row;
  flex-flow: row;
  padding: 0px 10px;
  margin: 18px 0px;
}

/* .profile-time{
    padding: 0px 10px;
} */

.profile-img-name {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
}

.profile-img img {
  width: 70px;
  height: 70px;
  border: 1px solid black;
  border-radius: 100%;
  object-fit: fill;
  margin-left: 10px;
}

.profile-name-stars {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-flow: row;
  margin-bottom: 10px;
}

.profile-name {
  margin: 0px 15px;
}

.profile-time,
.profile-price,
.profile-name {
  font-family: 'Roboto', 'Sans Serif';
  font-size: 16px;
}

.profile-time .icon {
    width: 2em;
    height: 1.5em;
}

.profile-price {
  font-weight: bold;
}

.profile-connection {
  display: flex;
  justify-content: flex-start;
  align-content: space-between;
  flex-direction: row;
}

.profile-connection {
  margin-top: 10px;
}

.profile-connection button {
    margin-left: 1em;
    padding: 2px 5px;
    background-color: transparent;
    border-radius: 20px;
    font-family: 'Roboto', 'Sans Serif';
}

.profile-connection .icon {
    width: 3em;
    height: 1.6em;
}

.card-break {
  width: inherit;
  height: 1px;
  background-color: grey;
  margin-top: 15px;
  margin-bottom: 30px;
}

.profile-reviews {
    margin: 5px;
    padding-left: 10px;
    margin-bottom: 20px;
}

.profile-book {
  width: inherit;
  height: 30px;
  display: flex;
  justify-items: center;
  align-items: center;
  border: 1px solid black;
  padding: 1px 160px;
  margin: 10px;
  border-radius: 20px 20px;
  color: white;
  background-color: green;
  font-family: "Roboto", "Sans Serif";
}

.icon {
    size: 10%;
}

    `
    return (
        <>
        <Wrapper>
                <div className="profile-cards">
                    <div className="profile-content">

                        <div className="profile-speciality">{props.proSpecial}</div>
                        
                        <div class="time-price">
                        <div class="profile-time"><AiOutlineClockCircle className='icon'/>{props.proTime}</div>
                        <div class="profile-price"><FormatPrice price= {parseInt(props.proPrice)}/></div>
                        </div>

                        <div className="profile-img-name">
                            <div className="profile-img"><img src={props.proImg} alt="" /></div>
                            <div>

                                <div class="profile-name-stars">
                                    <div class="profile-name">{props.proName}</div>
                                <div class="profile-stars"><ProStars stars={props.proStars}/></div>
                                </div>

                                <div class="profile-connection">
                                    <button>See Profile</button>
                                <button><AiFillMessage className='icon'/></button>
                                </div>
                            </div>
                        </div>

                        <div class="card-break"></div>
                    <div class='profile-reviews'>{props.proReviews} Customer Reviews</div>
                        <button class="profile-book">BOOK NOW</button>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}


export default ProfileCards