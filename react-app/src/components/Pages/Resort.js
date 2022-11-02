
import { NavLink } from 'react-router-dom';
import './Pages.css'




function Resort() {

    return (
      <div className="pages_main">
        <div className="page_inner">
          <div className="pages_header">Resorts</div>
          <div className="pages_inner_div">
            <div className="pages_navlink_div">
              <NavLink
                className="pages_navlink"
                exact
                to="/Boreal Mountain Resort"
              >
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
              <NavLink
                className="pages_navlink"
                exact
                to="/Heavenly Lake Tahoe"
              >
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
            <div className="pages_navlink_div">
              <NavLink className="pages_navlink" exact to="/Mammoth Mountain">
                <img
                  className="pages_image"
                  src="https://freeskier.com/wp-content/uploads/2017/02/Mammoth1_Social.jpg"
                  alt="mammoth"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://freeskier.com/wp-content/uploads/2017/02/Mammoth1_Social.jpg";
                  }}
                ></img>
                Mammoth Mountain
              </NavLink>
            </div>
            <div className="pages_navlink_div">
              <NavLink className="pages_navlink" exact to="/Bear Mountain">
                <img
                  className="pages_image"
                  src="https://www.mtnscoop.com/media/images/2018/12/Big-Bear-Mountain-1024x478.jpg"
                  alt="bear"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://www.mtnscoop.com/media/images/2018/12/Big-Bear-Mountain-1024x478.jpg";
                  }}
                ></img>
                Bear Mountain
              </NavLink>
            </div>
            <div className="pages_navlink_div">
              <NavLink className="pages_navlink" exact to="/Mountain High">
                <img
                  className="pages_image"
                  src="https://dangerouscupcakelifestyle.com/wp-content/uploads/2019/01/skiing1.jpg"
                  alt="mthigh"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://dangerouscupcakelifestyle.com/wp-content/uploads/2019/01/skiing1.jpg";
                  }}
                ></img>
                Mountain High
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



export default Resort