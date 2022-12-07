
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
            <div className="pages_navlink_div">
              <NavLink className="pages_navlink" exact to="/Mount Hood Meadows">
                <img
                  className="pages_image"
                  src="http://theatlasheart.com/wp-content/uploads/2016/01/04-IMG_5491.jpg"
                  alt="mthood"
                  onError={(e) => {
                    e.currentTarget.src =
                      "http://theatlasheart.com/wp-content/uploads/2016/01/04-IMG_5491.jpg";
                  }}
                ></img>
                Mount Hood Meadows
              </NavLink>
            </div>
            <div className="pages_navlink_div">
              <NavLink
                className="pages_navlink"
                exact
                to="/Timberline Summit Pass"
              >
                <img
                  className="pages_image"
                  src="https://pbs.twimg.com/media/FJkOKGtVIAE7AqC?format=jpg&name=large"
                  alt="timberline"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://pbs.twimg.com/media/FJkOKGtVIAE7AqC?format=jpg&name=large";
                  }}
                ></img>
                Timberline Summit Pass
              </NavLink>
            </div>
            <div className="pages_navlink_div">
              <NavLink className="pages_navlink" exact to="/Mount Bachelor">
                <img
                  className="pages_image"
                  src="https://www.powderhounds.com/site/DefaultSite/filesystem/images/USA/MtBachelor/FacilitiesServices/04.jpg"
                  alt="mtbachelor"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://www.powderhounds.com/site/DefaultSite/filesystem/images/USA/MtBachelor/FacilitiesServices/04.jpg";
                  }}
                ></img>
                Mount Bachelor
              </NavLink>
            </div>
            <div className="pages_navlink_div">
              <NavLink className="pages_navlink" exact to="/Gore Mountain">
                <img
                  className="pages_image"
                  src="http://snowjournal.com/uploads/editor/3e/5m4wvd5c6ogi.jpg"
                  alt="gore"
                  onError={(e) => {
                    e.currentTarget.src =
                      "http://snowjournal.com/uploads/editor/3e/5m4wvd5c6ogi.jpg";
                  }}
                ></img>
                Gore Mountain
              </NavLink>
            </div>
            <div className="pages_navlink_div">
              <NavLink className="pages_navlink" exact to="/Windham Mountain">
                <img
                  className="pages_image"
                  src="https://assets.simpleviewinc.com/simpleview/image/fetch/q_75/https://assets.simpleviewinc.com/simpleview/image/upload/crm/newyorkstate/Windham_0060-213a8669d775bfc_213a882d-0631-1323-3bb8913f518543a8.jpg"
                  alt="windham"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://assets.simpleviewinc.com/simpleview/image/fetch/q_75/https://assets.simpleviewinc.com/simpleview/image/upload/crm/newyorkstate/Windham_0060-213a8669d775bfc_213a882d-0631-1323-3bb8913f518543a8.jpg";
                  }}
                ></img>
                Windham Mountain
              </NavLink>
            </div>
            <div className="pages_navlink_div">
              <NavLink className="pages_navlink" exact to="/Hunter Mountain">
                <img
                  className="pages_image"
                  src="https://www.news10.com/wp-content/uploads/sites/64/2020/01/hunter-mountainnn.jpg"
                  alt="hunter"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://www.news10.com/wp-content/uploads/sites/64/2020/01/hunter-mountainnn.jpg";
                  }}
                ></img>
                Hunter Mountain
              </NavLink>
            </div>
            <div className="pages_navlink_div">
              <NavLink className="pages_navlink" exact to="/Crystal Mountain">
                <img
                  className="pages_image"
                  src="https://www.powderhounds.com/site/DefaultSite/filesystem/images/USA/CrystalMountain/Overview/13.jpg"
                  alt="crystal"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://www.powderhounds.com/site/DefaultSite/filesystem/images/USA/CrystalMountain/Overview/13.jpg";
                  }}
                ></img>
                Crystal Mountain
              </NavLink>
            </div>
            <div className="pages_navlink_div">
              <NavLink className="pages_navlink" exact to="/Stevens Pass">
                <img
                  className="pages_image"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Stevens_Pass_Signs_2700px.jpg"
                  alt="steven"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://upload.wikimedia.org/wikipedia/commons/5/5f/Stevens_Pass_Signs_2700px.jpg";
                  }}
                ></img>
                Stevens Pass
              </NavLink>
            </div>
            <div className="pages_navlink_div">
              <NavLink className="pages_navlink" exact to="/Mount Baker">
                <img
                  className="pages_image"
                  src="https://live.staticflickr.com/1492/24178680742_e28066cdaa_b.jpg"
                  alt="baker"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://live.staticflickr.com/1492/24178680742_e28066cdaa_b.jpg";
                  }}
                ></img>
                Mount Baker
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
}



export default Resort