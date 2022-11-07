import styled from "styled-components";
import Cards from "./Cards";
import { useJobContext } from "../context/jobcontext";
import { useFilterContext } from "../context/filtercontext";


const Filter = () => {
  
  const { filter_jobs, all_jobs, title } = useFilterContext();
  
  const { filters: { searchQueryInput }, updateFilterValue } = useFilterContext();
  
  const { isLoading, jobs } = useJobContext();
  if(isLoading){
    return <div>..........LOADING</div>
  }


  const getUniqueData = (data,property)=>{
    let newVal = data.map((curElem)=>{
      return curElem[property];
    })
    console.log(newVal);
    return (newVal=["All", ...new Set(newVal)]);
  };

  const categoryData = getUniqueData(all_jobs,'title');
  const JobDurData = getUniqueData(all_jobs, 'title');

  console.log(`JOB DATA,${JobDurData}`)
  console.log(`JOB DATA,${JobDurData}`)


  
  const cateP = document.querySelectorAll(".cate-jobs-p input");
  const cateT = document.querySelectorAll(".cate-time input");
  const catePost = document.querySelectorAll("[name=posted-time]");
  const range = document.querySelector("#num");

  //* Logic to Reset all values in filter section
  function reset() {
    let checkbox,
      radio,
      budget = " ";

    for (checkbox of cateP) {
      checkbox.checked = false;
    }
    for (radio of cateT) {
      radio.checked = false;
    }
    for (budget of catePost) {
      // console.log(budget.value);
      budget.value = budget[0];
    }
    range.textContent = 0;
  }


  return (
    <>
      <Wrapper>
        <article>
          <div className="findjobs">
            <div
              data-aos="fade-right"
              data-duration="3000"
              data-aos-offset="300"
              className="filter"
            >
              {/* <form onSubmit={(e) => e.preventDefault()}>

                <input
                  id="searchQueryInput"
                  type="text"
                  name="searchQueryInput"
                  value={searchQueryInput}
                  onChange={updateFilterValue}
                  placeholder="LAMDE"
                />
              </form> */}
              <h1 id="filer-title"> Filter by: </h1> <br />
              <div id="divider-h"></div>
              <form>
              <div className="cate-jobs">
                <p>
                  <b>Category:</b>
                </p>

                <label className="cate-jobs-p">
                  {" "}
                  <input className="filter-check" type="checkbox" /> Writing & Translation{" "}
                </label>

                <label className="cate-jobs-p">
                  {" "}
                  <input type="checkbox" className="filter-check" /> Programming &
                  &nbsp;&nbsp;&nbsp;&nbsp;Development
                </label>

                <label className="cate-jobs-p">
                  {" "}
                  <input type="checkbox" className="filter-check" /> Administrative & Secretarial
                </label>

                <label className="cate-jobs-p">
                  {" "}
                  <input type="checkbox" className="filter-check" /> Design & Art{" "}
                </label>

                <label className="cate-jobs-p">
                  {" "}
                  <input type="checkbox" className="filter-check" /> Business & Finance{" "}
                </label>

                <label className="cate-jobs-p">
                  {" "}
                  <input type="checkbox" className="filter-check" /> Sales & Marketing{" "}
                </label>

                <label className="cate-jobs-p">
                  {" "}
                  <input type="checkbox" className="filter-check" /> Others{" "}
                </label>

              </div>
              <hr />
              <div className="cate-time">
                <p>
                  <b>Posted timeline:</b>
                </p>
                <label>
                  <input type="radio" name="posted-time" id="cate-post-new" />{" "}
                  Newest First
                </label>

                <label>
                  <input type="radio" name="posted-time" id="cate-post-old" />{" "}
                  Oldest First
                </label>
              </div>
              <hr />
              <div className="cate-budget">
                <p>
                  <b>Budget:</b>
                </p>
                <select
                  name="title"
                  id="cate-post-time"
                  className="sort-by-time"
                  // onClick={sortby_job_duration}
                  >
                  <option value="All Durations">All Durations</option>
                  <option value="hourly">Hourly</option>
                  <option value="Less than a week">Less than a week</option>
                  <option value="1 to 4 weeks">1 to 4 weeks</option>
                  <option value="1 to 3 months">1 to 3 months</option>
                  <option value="3 to 6 months">3 to 6 months</option>
                  <option value="Over 6 months">Over 6 months</option>
                  {/* <option value="Unspecified">Unspecified</option> */}
                </select>
                <p style={{ marginTop: "2rem" }}>
                  <b>Specify the Range:</b>
                  <input
                    style={{ marginTop: "1rem" }}
                    type="range"
                    oninput="num.value = this.value"
                    min="1"
                    max="100"
                  />
                  &nbsp;&nbsp;&nbsp;<output id="num">{oninput}</output>
                </p>
                <button className="cbutton" onclick={reset}>
                  Clear Filters
                </button>
              </div>
          </form>
            </div>
            <div
              data-aos="fade-left"
              data-duration="3000"
              data-aos-offset="300"
              className="jobs"
            >
              <ul
                data-aos="fade-up"
                data-duration="3000"
                data-aos-offset="300"
                data-aos-anchor-placement="top-bottom"
                className="inside-jobs"
              >
{/* 
              <div className='filter-category'>
                <h3>Category</h3>
                <div>
                  {categoryData.map((curElem,index) =>{
                    return <button
                    key={index} type = "button" name='title'
                      value={curElem}>
                    {curElem}
                    </button>;
                  })}
                </div>
              </div> */}

              <div className="filter-category">
                <h3>Category</h3>
                <div>
                  {categoryData.map((curElem,index)=>{
                    return <button key={index}
                      type="button"
                      name="title"
                      value={title}
                      onClick={updateFilterValue}>
                    </button>
                  })}
                </div>
              </div>

                <div className='filter-company'>
                  <h3>Company</h3>
                  <div>
                  <form action="#"> 
                  <select id='company' name='title' className="filter-company--select" onClick={updateFilterValue}>
                    {JobDurData.map((curElem, index) => {
                      return(
                        <option key={index} value={curElem} name='title'>
                          {curElem}
                        </option>
                        )
                    })}
                      </select>
                    </form>
                  </div>
                </div>

                
                {/* //* Uncomment this when an app starts */}
                {all_jobs.map((curElem) => {
                  return <Cards key={curElem._id}{...curElem}/>;
                })}
              </ul>
            </div>
          </div>
        </article>
      </Wrapper>
    </>
  );
};

/*--------------------CSS FOR FILTERS----------------------------------------------------- */
const Wrapper = styled.section`
  .findjobs {
    position: sticky;
    display: flex;
    overflow-x:hidden;
  }

  #filer-title {
    color: black;
    /* font-family: var(--section-font); */
    padding-top: 1em;
  }
  #divider-h {
    background: #1cd6ce;
    border-radius: 50px;
    height: 3.5px;
    width: 123px;
    margin-top: -33px;
    margin-bottom: 20px;
  }
  .cate-jobs {
    display: grid;
    grid-column: auto;
    font-family: "Poppins", sans-serif;
    row-gap: 0.5rem;
    font-size: 1.2em;
    margin-bottom: 2em;
  }

  .cate-jobs b::before {
    content: "| ";
    color: red;
    font-size: 1.5rem;
    margin-left: -8px;
  }

  .cate-jobs-p {
    font-family: "Poppins", sans-serif;
    font-size: 0.9rem;
    margin-top: 0.15rem;
    user-select: none;
  }

  .filter {
    border: 1px grey solid;
    border-right: 3.5px rgb(18, 197, 188) solid;
    width: 18vw;
    padding-left: 2rem;
    margin: 4rem 1.5rem;
  }

  .cate-time {
    font-family: "Poppins", sans-serif;
    display: flex;
    text-align: start;
    flex-direction: column;
    margin-top: 2em;
    font-size: 1.1rem;
  }
  .cate-time b::before {
    content: "| ";
    color: red;
    font-size: 1.5rem;
    margin-left: -8px;
  }
  .cate-time label input {
    margin-top: 1rem;
    font-size: 1.1rem;
  }
  .cate-time label {
    font-family: "Poppins", sans-serif;
    font-size: 0.9rem;
    user-select: none;
  }
  #cate-post-old {
    margin-bottom: 2em;
  }

  .cate-budget p {
    font-family: "Poppins", sans-serif;
    margin-top: 1em;
    font-size: 1.1rem;
  }

  .cate-budget select {
    font-family: "Poppins", sans-serif;
    background-color: rgba(188, 253, 254, 0.124);
    border-radius: 0.4em;
    margin-top: 1em;
    font-size: 1rem;
  }

  .cate-budget input {
    font-size: 1.1rem;
    size: 10px;
  }
  .cate-budget b::before {
    content: "| ";
    color: red;
    font-size: 1.5rem;
    margin-left: -8px;
  }

.filter-check{
  position: inherit;
  left: 57px;
}

  .cbutton {
    display: inline-block;
    position: relative;
    background: transparent;
    text-decoration: none;
    font-family: "Poppins", serif;
    font-size: 14px;
    font-weight: 500;
    border-radius: 23px;
    color: rgb(0, 0, 0);
    border: 2px solid rgb(0, 0, 0);
    overflow: hidden;
    cursor: pointer;
    user-select: none;
    width: 132px;
    height: 32px;
    transition: all 0.35s;
    margin-top: 2rem;
  }
  .cbutton:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--accent-color);
    transition: all 0.35s;
    z-index: -1;
  }
  .cbutton:hover {
    color: #fff;
    border: 0px solid var(--accent-color);
    transform: scale(1.05);
  }
  .cbutton:hover:after {
    width: 100%;
  }
  hr {
    width: 13rem;
  }

  /* DISPLAYED JOBS CARDS ON THE RIGHT OF THE PAGE  */
  .jobs {
    display: flex;
    border-top: 1px grey solid;
    border-bottom: 1px grey solid;
    border-right: 1px grey solid;
    margin: 4rem -2rem;
    width: 78vw;
  }

  .inside-jobs {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center;
    align-items: center; */
    padding: 30px 0px 30px 30px;
    row-gap: 20px;
    column-gap: 20px;
    width: 80vw;
    height: 150vh;
    overflow-y: scroll;
  }

  .inside-jobs li {
    position: relative;
    list-style-type: none;
    height: 400px;
    width: 260px;
    background-color: rgba(188, 254, 241, 0.124);
    text-align: center;
    margin: 10px 3px;
    border-radius: 10px;
    box-shadow: 0px 0px 3.6px rgba(0, 0, 0, 0.017),
      0px 0px 10px rgba(0, 0, 0, 0.025), 0px 0px 24.1px rgba(0, 0, 0, 0.033),
      0px 0px 80px rgba(0, 0, 0, 0.05);
    transition: 100ms;
  }

  .inside-jobs li:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transform: scale(1.02);
    transition-timing-function: ease-in-out;
  }

  .images-jobs {
    width: 20%;
    height: 45%;
    overflow: hidden;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .images-jobs img {
    width: 100%;
  }
.cate-title {
    display: flex;
    padding: 2px;
    color: rgb(0, 0, 0);
    background-color: #1cd6c3c0;
    border: 1px var(--cate-text) solid;
    box-shadow: inset 0 0 0 0 var(--cate-text);
    border-radius: 10px;
    /* transition: ease-out 0.3s; */
    outline: none;
    margin: 5px 10px;
    /* justify-content: center; */
    padding-left: 1rem;
  }
  .cate-title {
    text-align: center;
  }
  .cate-title:hover {
    color: rgb(0, 0, 0);
    border-color: #c3f8ff;
    box-shadow: inset 300px 0 0 0 var(--cate-text);
    transition: ease-out 0.3s;
    cursor: pointer;
  }

  .cate-foot {
    color: var(--cate-foot-text);
    font-weight: bold;
    margin-top: 0.9rem;
    margin-right: 16px;
    text-align: end;
    margin-bottom: 0.81rem;
    font-size: 0.9rem;
  }
  .cate-body {
    position: inherit;
    margin: 0px 20px 20px 20px;
    text-align: start;
    overflow: auto;
  }
  .cate-content {
    min-height: 14rem;
    position: relative;
  }
`;

export default Filter;
