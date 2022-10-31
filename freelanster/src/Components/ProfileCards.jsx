import React from 'react'
// import Images from '../Img/imgindex'
import './ProfileCards.css'

const ProfileCards = (props) => {
    return (
        <>
                <div class="profile-cards">
                    <div class="profile-content">

                        <div class="profile-speciality">{props.proSpecial}</div>
                        
                        <div class="time-price">
                            <div class="profile-time">{props.proTime}</div>
                            <div class="profile-price">{props.proPrice}</div>
                        </div>

                        <div class="profile-img-name">
                            <div class="profile-img"><img src={props.proImg} alt="" /></div>
                            <div>

                                <div class="profile-name-stars">
                                    <div class="profile-name">{props.proName}</div>
                                    <div class="profile-stars">{props.proStars}</div>
                                </div>

                                <div class="profile-connection">
                                    &nbsp;<button>See Profile</button>
                                    <button>Message Icon</button>&nbsp;
                                </div>
                            </div>
                        </div>

                        <div class="card-break"></div>
                        <button class="profile-book">BOOK NOW</button>
                    </div>
                </div>
        </>
    )
}


export default ProfileCards