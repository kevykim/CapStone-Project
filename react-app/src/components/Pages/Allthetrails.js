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

       const MtHoodFilter = trailArr.filter(
         (trail) => trail.resort === "Mount Hood Meadows"
       );

       const TimberlineFilter = trailArr.filter(
         (trail) => trail.resort === "Timberline Summit Pass"
       );

       const BachelorFilter = trailArr.filter(
         (trail) => trail.resort === "Mount Bachelor"
       );

       const GoreFilter = trailArr.filter(
         (trail) => trail.resort === "Gore Mountain"
       );

       const WindhamFilter = trailArr.filter(
         (trail) => trail.resort === "Windham Mountain"
       );

       const HunterFilter = trailArr.filter(
         (trail) => trail.resort === "Hunter Mountain"
       );

       const CrystalFilter = trailArr.filter(
         (trail) => trail.resort === "Crystal Mountain"
       );

       const StevensFilter = trailArr.filter(
         (trail) => trail.resort === "Stevens Pass"
       );

       const BakerFilter = trailArr.filter(
         (trail) => trail.resort === "Mount Baker"
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
          <div className="pages_navlink_divy">
            <div className="pages_resort_header">Mount Hood Meadows</div>
            {MtHoodFilter.map((trail, i) => (
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
            <div className="pages_resort_header">Timberline Summit Pass</div>
            {TimberlineFilter.map((trail, i) => (
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
            <div className="pages_resort_header">Mount Bachelor</div>
            {BachelorFilter.map((trail, i) => (
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
            <div className="pages_resort_header">Gore Mountain</div>
            {GoreFilter.map((trail, i) => (
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
            <div className="pages_resort_header">Windham Mountain</div>
            {WindhamFilter.map((trail, i) => (
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
            <div className="pages_resort_header">Hunter Mountain</div>
            {HunterFilter.map((trail, i) => (
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
            <div className="pages_resort_header">Crystal Mountain</div>
            {CrystalFilter.map((trail, i) => (
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
            <div className="pages_resort_header">Stevens Pass</div>
            {StevensFilter.map((trail, i) => (
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
            <div className="pages_resort_header">Mount Baker</div>
            {BakerFilter.map((trail, i) => (
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