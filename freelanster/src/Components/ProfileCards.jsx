import React from 'react'
// import Images from '../Img/imgindex'
import ProStars from './ProStars'
import './ProfileCards.css';
import { AiFillMessage, AiOutlineClockCircle } from 'react-icons/ai';
import FormatPrice from '../Helpers/FormatPrice';
const ProfileCards = (props) => {
    return (
        <>
                <div class="profile-cards">
                    <div class="profile-content">

                        <div class="profile-speciality">{props.proSpecial}</div>
                        
                        <div class="time-price">
                        <div class="profile-time"><AiOutlineClockCircle className='icon'/>{props.proTime}</div>
                        <div class="profile-price"><FormatPrice price= {parseInt(props.proPrice)}/></div>
                        </div>

                        <div class="profile-img-name">
                            <div class="profile-img"><img src={props.proImg} alt="" /></div>
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
        </>
    )
}


export default ProfileCards