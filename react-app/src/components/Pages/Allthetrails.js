import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { thunkGetTrail } from "../../store/trail";

import "./Pages.css";

function Allthetrails() {
    const dispatch = useDispatch()

    const trail = useSelector(state => state.trail)
    const trailArr = Object.values(trail)

    const borealFilter = trailArr.filter(
      (trail) => trail.resort === "Boreal Mountain Resort"
    );

    const heavenlyFilter = trailArr.filter(
      (trail) => trail.resort === "Heavenly Lake Tahoe"
    );

     const mammothFilter = trailArr.filter(
       (trail) => trail.resort === "Mammoth Mountain"
     );

      const bearFilter = trailArr.filter(
        (trail) => trail.resort === "Bear Mountain"
      );

       const mthighFilter = trailArr.filter(
         (trail) => trail.resort === "Mountain High"
       );

    useEffect(() => {
        dispatch(thunkGetTrail())
    }, [dispatch])
  return (
    <div className="pages_main">
      <div className="page_inner">
        <div className="pages_header">All trails listed</div>
        <div className="pages_inner_div">
          <div className="pages_navlink_divy">
            <div className="pages_resort_header">Boreal Mountain Resort</div>
            {borealFilter.map((trail, i) => (
              <div className="pages_navlink_div" key={i}>
                <NavLink
                  className="pages_navlink"
                  exact
                  to={`/trails/${trail?.id}`}
                >
                  {trail.name}
                </NavLink>
              </div>
            ))}
          </div>
          <div className="pages_navlink_divy">
            <div className="pages_resort_header">Heavenly Lake Tahoe</div>
            {heavenlyFilter.map((trail, i) => (
              <div className="pages_navlink_div" key={i}>
                <NavLink
                  className="pages_navlink"
                  exact
                  to={`/trails/${trail?.id}`}
                >
                  {trail.name}
                </NavLink>
              </div>
            ))}
          </div>
          <div className="pages_navlink_divy">
            <div className="pages_resort_header">Mammoth Mountain</div>
            {mammothFilter.map((trail, i) => (
              <div className="pages_navlink_div" key={i}>
                <NavLink
                  className="pages_navlink"
                  exact
                  to={`/trails/${trail?.id}`}
                >
                  {trail.name}
                </NavLink>
              </div>
            ))}
          </div>
          <div className="pages_navlink_divy">
            <div className="pages_resort_header">Bear Mountain</div>
            {bearFilter.map((trail, i) => (
              <div className="pages_navlink_div" key={i}>
                <NavLink
                  className="pages_navlink"
                  exact
                  to={`/trails/${trail?.id}`}
                >
                  {trail.name}
                </NavLink>
              </div>
            ))}
          </div>
          <div className="pages_navlink_divy">
            <div className="pages_resort_header">Mountain High</div>
            {mthighFilter.map((trail, i) => (
              <div className="pages_navlink_div" key={i}>
                <NavLink
                  className="pages_navlink"
                  exact
                  to={`/trails/${trail?.id}`}
                >
                  {trail.name}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Allthetrails;