import React from 'react'
// import Images from '../Img/imgindex'
import './Cards.css'

const Cards = (props) => {
  return (
    <>
      <li className='inside-jobs-li'>
          <div className="images-jobs">
              <img src={props.imgScr} alt="Video" />
          </div>
          <div className="cate-content">
              <div className="cate-title">{props.title}</div>
              <div className="cate-foot">Posted on: {props.date}</div>
        <div className="cate-body"> {props.content}</div>
          </div>
      </li>
    </>
  )
}


export default Cards