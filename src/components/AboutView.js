import Hero from './Hero';

const AboutView = () => {
    return (
      <>
        <Hero text="About Us" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
              <p className="lead">Browzie is an app built with ReactJS for searching movie titles. Originally it was Movie Browser, the React 201 project from Kalob Taulien's developer course, which you can <a href="https://www.udemy.com/course/the-ultimate-fullstack-web-development-bootcamp/">find on Udemy</a>.</p>
            </div>
          </div>
        </div>
      </>
    )
  }

  export default AboutView;