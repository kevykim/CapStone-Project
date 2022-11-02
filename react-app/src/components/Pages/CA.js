import { NavLink } from 'react-router-dom';
import './Pages.css'




function California() {

    return (
      <div className="pages_main">
        <div className="page_inner">
          <div className="pages_header">California</div>
          <div className="pages_inner_div">
            <div className="pages_navlink_div">
              <NavLink className="pages_navlink" exact to="/Boreal Mountain Resort">
                <img
                  className="pages_image"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Boreal_Mountain_Resort_-_panoramio.jpg/1200px-Boreal_Mountain_Resort_-_panoramio.jpg"
                  alt="boreal"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Boreal_Mountain_Resort_-_panoramio.jpg/1200px-Boreal_Mountain_Resort_-_panoramio.jpg";
                  }}
                ></img>
                Boreal Mountain Resort
              </NavLink>
            </div>
            <div className="pages_navlink_div">
              <NavLink className="pages_navlink" exact to="/Heavenly Lake Tahoe">
                <img
                  className="pages_image"
                  src="https://wanderjobs.com/wp-content/uploads/2019/08/Heavenly-2.jpg"
                  alt="heavenly"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://wanderjobs.com/wp-content/uploads/2019/08/Heavenly-2.jpg";
                  }}
                ></img>
                Heavenly Lake Tahoe
              </NavLink>
            </div>
            {/* <div>Mammoth</div>
            <div>Big Bear</div>
            <div>Mountain High</div> */}
          </div>
        </div>
      </div>
    );
}


export default California