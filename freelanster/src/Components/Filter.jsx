import React from 'react'
// import Images from '../Img/imgindex'
import './Filter.css'
import Cards from './Cards';
import Cdata from './Cdata.jsx'




const Filter = () => {

const cateP = document.querySelectorAll(".cate-jobs-p input");

const cateT = document.querySelectorAll('.cate-time input');

const catePost = document.querySelectorAll('[name=posted-time]');

const range = document.querySelector('#num');

//* Logic to Reset all values in filter section
  function reset() {
  
    let checkbox, radio, budget = " ";

    for (checkbox of cateP) {
        checkbox.checked = false;
    }
    for (radio of cateT) {
        radio.checked = false;
    }
    for (budget of catePost) {
        // console.log(budget.value);
        budget.value = budget[0]
    }
    range.textContent = 0;
}

//* Logic to implement sticky navbar

// $(window).on('scroll', function() {
//     if ($(window).scrollTop()) {
//         $('nav').addClass('black');
        
//     }
//     else {
//         $('nav').removeClass('black');
//     }
// })


  return (
    <>
      <article>
              <div className="findjobs">
            <div className="filter">
                <h1 id="filer-title"> Filter by: </h1> <br />
                <div id="divider-h"></div>

                <div className="cate-jobs">
                    <p><b>Category:</b></p>
                    <label className="cate-jobs-p"> <input type="checkbox" /> Writing & Translation </label>
                    <label className="cate-jobs-p"> <input type="checkbox" /> Programming &
                        &nbsp;&nbsp;&nbsp;&nbsp;Development
                    </label>
                    <label className="cate-jobs-p"> <input type="checkbox" /> Administrative & Secretarial
                    </label>
                    <label className="cate-jobs-p"> <input type="checkbox" /> Design & Art </label>
                    <label className="cate-jobs-p"> <input type="checkbox" /> Business & Finance </label>
                    <label className="cate-jobs-p"> <input type="checkbox" /> Sales & Marketing </label>
                    <label className="cate-jobs-p"> <input type="checkbox" /> Others </label>
                </div>
                <hr />
                <div className="cate-time">
                    <p><b>Posted timeline:</b></p>
                    <label><input type="radio" name="posted-time" id="cate-post-new" /> Newest First</label>
                    <label><input type="radio" name="posted-time" id="cate-post-old" /> Oldest First</label>
                </div>
                <hr />
                <div className="cate-budget">
                    <p><b>Budget:</b></p>
                    <select name="posted-time" id="cate-post">
                        <option value="All Durations">All Durations</option>
                        <option value="hourly">Hourly</option>
                        <option value="Less than a week">Less than a week</option>
                        <option value="1 to 4 weeks">1 to 4 weeks</option>
                        <option value="1 to 3 months">1 to 3 months</option>
                        <option value="3 to 6 months">3 to 6 months</option>
                        <option value="Over 6 months">Over 6 months</option>
                        <option value="Unspecified">Unspecified</option>
                    </select>
                    <p style={{marginTop: "2rem" }}><b>Specify the Range:</b><input style={{marginTop: "1rem" }} type="range"
                            oninput="num.value = this.value" min="1" max="100" />&nbsp;&nbsp;&nbsp;<output
                            id="num">0</output></p>
                    <button className="cbutton" onclick={reset}>Clear Filters</button>
                </div>
            </div>

            <div className="jobs">
                <ul className="inside-jobs">
                    
                    {
                Cdata.map((val) => {
                    return (
                        <Cards
                            key={val.id}
                            imgScr={val.imgScr}
                            title={val.title}
                            date={val.date}
                            content={val.content} />
                    )
                })}
                </ul>
            </div>
        </div>
    </article>
    </>
  )
}

export default Filter