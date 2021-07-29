import Hero from './Hero';

const HomeView = () => {
    return (
      <>
        <Hero text="Welcome to Browzie" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
              <p className="lead">Browzie is an easy to use web app for searching movie titles! Start typing in the name of a movie and Browzie will do the rest. Click on a title for additional information, such as release status, release date, and average rating.</p>
            </div>
          </div>
        </div>
      </>
    )
  }

  export default HomeView;