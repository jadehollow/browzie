import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <div className="body-404">
                <section class="notFound">
                    <div class="img">
                        <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the search page" />
                        <img src="https://assets.codepen.io/5647096/Delorean.png" alt="Delorean and Marti McFly" />
                    </div>
                    <div class="text">
                        <h1>404</h1>
                        <h2>PAGE NOT FOUND</h2>
                        <h3>BACK TO SEARCH?</h3>
                        <a href="/search" class="yes">YES</a>
                        <a href="https://www.youtube.com/watch?v=G3AfIvJBcGo">NO</a>
                    </div>
                </section>
            </div>
        </>
    )
}

export default NotFound;