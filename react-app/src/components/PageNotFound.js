
import { NavLink } from 'react-router-dom';
import './PageNotFound.css'


function PageNotFound() {

    return (
      <div className="pagenotfound_main">
        <div className="pagenotfound_inner">
          <div>
            <div className="pagenotfound_image">
              <img
                style={{
                  width: "1098px",
                  height: "898px",
                  objectFit: "cover",
                  position: "relative",
                }}
                src="https://images.pexels.com/photos/10843099/pexels-photo-10843099.jpeg"
                alt="notfound"
                onError={(event) => {
                  event.currentTarget.src =
                    "https://images.pexels.com/photos/10843099/pexels-photo-10843099.jpeg";
                }}
              />
            </div>
            <div>
              <div className="pagenotfound_firsttext">404</div>
              <div className="pagenotfound_text">Page not found...</div>
              <div className="pagenotfound_othertext">
                The page you were looking for does not exist...
              </div>
              <NavLink className="pagenotfound_navlink" exact to="/">
                Return Home
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
}


export default PageNotFound