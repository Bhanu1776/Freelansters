import React from 'react'
import './FFlancer.css'
import ProfileCards from './ProfileCards'
import ProfileData from './ProfileData'

const FFlancer = () => {
    return (
        <>
        {/* Heroku Section */}
            <section className="FFstatic">
                <div className="FFtextArea">
                    <h1>Find FreeLancer</h1>
                    <br />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati qui ducimus aliquid? Iste, impedit
                        nemo.
                    </p>
                </div>
            </section>
            {/* Filter Section */}

            {/* Cards Display Section */}
            
            <div class="cards-holder">
            {ProfileData.map((val) => {
                    return (
            <ProfileCards
                key = {val.id}  
                proSpecial = {val.proSpecial}   
                proTime = {val.proTime}
                proPrice = {val.proPrice}
                proImg = {val.proImg}
                proName = {val.proName}
                proStars = {val.proStars}
                proReviews={val.proReviews}
                 />
            )
                })}
                </div>
            
        </>
    )
}

export default FFlancer