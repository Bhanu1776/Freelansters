import React from 'react'
import ProfileCards from './ProfileCards'
import ProfileData from './ProfileData'
import styled from 'styled-components'
import Hero from './Hero'

const FFHeroImg = 'url("https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")';

const FFlancer = () => {

    return (
        <>

            <Hero title="Find Freelancer" desc="Want Your work done, We got your back!!" img={FFHeroImg} placeholder="Find FindFreelancer" />

            {/* Cards Display Section */}

            <CardsHolder>
                {ProfileData.map((val) => {
                    return (
                        <ProfileCards
                            key={val.id}
                            proSpecial={val.proSpecial}
                            proTime={val.proTime}
                            proPrice={val.proPrice}
                            proImg={val.proImg}
                            proName={val.proName}
                            proStars={val.proStars}
                            proReviews={val.proReviews}
                        />
                    )
                })}
            </CardsHolder>
        </>
    )
}

// const Section = styled.section`
//  position: relative;
//     width: 98.9vw;
//     height: 100vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     top: 0;

//     &::before{
//     content: " ";
//     position: absolute;
//     background-image: url('https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
//     background-repeat: no-repeat;
//     background-position: center center;
//     background-size: cover;
//     height: 100%;
//     width: 100%;
//     z-index: -2;
//     filter: brightness(50%);
// }
// `;
// const H1 = styled.h1`

//     font-family: "Noto Serif Georgian", serif;
//     font-size: 4rem;
//     text-align: center;
//     color: var(--shady-white-color);

// `;
// const P = styled.p`

//     font-family: "Cormorant Garamond", serif;
//     font-size: 1.4em;

//     text-align: center;
//     color: var(--shady-white-color);

// `

// const FFtextArea = styled.div`

//     position: absolute;
//     width: 60vw;

// `

const CardsHolder = styled.div`
display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    row-gap: 20px;
    column-gap: 20px;
    margin-top: 20px;
    flex-wrap: wrap;
`

export default FFlancer