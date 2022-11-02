import { NavLink } from "react-router-dom";
import "./Pages.css";

function USA() {
  return (
    <div className="pages_main">
      <div className="page_inner">
        <div className="pages_header">United States of America</div>
        <div className="pages_inner_div">
          <div className="pages_navlink_div">
            <NavLink className="pages_navlink" exact to="/California">
              <img
                className="pages_image"
                src="https://www.nationsonline.org/maps/USA/California_map.jpg"
                alt="boreal"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://www.nationsonline.org/maps/USA/California_map.jpg";
                }}
              ></img>
              California
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default USA;
