/* eslint-disable no-unused-vars */
import React from "react";
import ProfileCards from "./ProfileCards";
import ProfileData from "./ProfileData";
import styled from "styled-components";
import Hero from "./Hero";
import { useFreelancerContext } from "../context/freelancercontext";

const FFHeroImg =
  'url("https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")';

const FFlancer = (curElem) => {
  const { isLoading, freelancer } = useFreelancerContext();
  if (isLoading) {
    return <div>..........LOADING</div>;
  }

  return (
    <>
      <Hero
        title="Find Freelancer"
        desc="Want Your work done, We got your back!!"
        img={FFHeroImg}
        placeholder="Find FindFreelancer"
      />

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
            />
          );
        })}
      </CardsHolder>
    </>
  );
};
const CardsHolder = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  row-gap: 20px;
  column-gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export default FFlancer;
