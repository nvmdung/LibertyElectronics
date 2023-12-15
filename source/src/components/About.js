import "../css/about.css";

function About() {
  return (

    <setion>
      <div> <img className="image" src="./img/hinhanh.png" alt="" width="1500px" height="500px"></img>
        <div className="overlay-text">
          <h3 className="h33">About Our Company</h3>
          To those who are passionate about technology, our company will promote and innovate. We are always looking for the most special ideas and experiences for users. We will help users reach their dreams and succeed on your own path.

        </div>
        </div>

 

      <div class="about_content">
        <div className="container">
          <div className="about_item">
            <img
              className="img"
              src="./img/image3.png"
              alt="Your Image"
            />

            <div className="about_overlay">
              <h4 className="h4">OUR STORY</h4>
              Learn about the ideas, products and awards that shape our rich history as a leading global technology business.

            </div>
            <div className="but">
              <button>HISTORY</button>
              <br></br>
              <button>REWARDS</button>
            </div>
            <div>

            </div>

          </div>
        </div>
        <div className="container">
          <div className="about_item">
            <img
              className="img"
              src="./img/about2.png"
              alt="Your Image"
            />

            <div className="about_overlay">
              <h4 className="h4">OUR PEOPLE</h4>
              Meet the leaders, designers and entrepreneurs who guide and inspire our global business.

            </div>
            <div className="but">
              <button>LEADER CAPACITY</button>
              <br></br>
              <button>OUR DNA</button>
            </div>
            <div>

            </div>

          </div>
        </div>
        <div className="container">
          <div className="about_item">
            <img
              className="img"
              src="./img/about3.png"
              alt="Your Image"
            />

            <div className="about_overlay">
              <h4 className="h4">OUR TARGET</h4>
              Learn how we're helping us close the digital divide in communities around the world and how we're at the forefront of sustainable technology efforts.

            </div>
            <div className="but">
              <button>FOUNDATION</button>
              <br></br>
              <button>SOCIAL RESPONSIBILITY</button>
            </div>
            <div>

            </div>

          </div>
        </div>
      </div>
    </setion>
  )
}
export default About;