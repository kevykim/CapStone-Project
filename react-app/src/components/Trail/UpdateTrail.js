import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


import './UpdateTrail.css'
import logo from "./WinterTrailsimage.png";
import { thunkUpdateTrail } from '../../store/trail';


function UpdateTrail() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  const trail = useSelector((state) => state.trail);
  const trailArr = Object.values(trail);
  // console.log(trailArr)

  const oldTrail = trailArr.find((trails) => Number(trails.id) === Number(id));
  // console.log(oldTrail)
  const user = useSelector((state) => state.session.user);

  const [name, setName] = useState(oldTrail?.name);
  const [country, setCountry] = useState(oldTrail?.country);
  const [state, setState] = useState(oldTrail?.state);
  const [resort, setResort] = useState(oldTrail?.resort);
  const [difficulty, setDifficulty] = useState(oldTrail?.difficulty);
  const [description, setDescription] = useState(oldTrail?.description);
  const [length, setLength] = useState(oldTrail?.length);
  const [elevation, setElevation] = useState(oldTrail?.elevation);
  const [routeType, setRouteType] = useState(oldTrail?.routeType);
  const [previewImg, setPreviewImg] = useState(oldTrail?.previewImg);
  const [submitted, setSubmitted] = useState(false);
  const [validations, setValidations] = useState([]);

  useEffect(() => {
    let errors = [];
    if (name?.length < 5 || name?.length === 0)
      errors.push("Please enter a trail name longer than 5 characters");
    if (!country) errors.push("Please select a country");
    if (!state) errors.push("Please select a state");
    if (!resort) errors.push("Please select a resort");
    if (!difficulty) errors.push("Please select a difficulty");
    if (description?.length < 20 || description?.length === 0)
      errors.push("Please enter a description longer than 20 characters.");
    if (!length) errors.push("Please enter a valid length number");
    if (!elevation) errors.push("Please enter a valid elevation number");
    if (!routeType) errors.push("Please select a route type");
    if (
      (!previewImg?.includes("jpg") &&
        !previewImg?.includes("png") &&
        !previewImg?.includes("jpeg") &&
        !previewImg?.includes("svg")) ||
      (!previewImg?.includes("https") && !previewImg?.includes("http"))
    )
      errors.push("Please enter a valid url image");
    setValidations(errors);
  }, [
    dispatch,
    name,
    country,
    state,
    resort,
    difficulty,
    description,
    length,
    elevation,
    routeType,
    previewImg,
  ]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(!submitted);
    const payload = {
      id,
      name,
      country,
      state,
      resort,
      difficulty,
      description,
      length,
      elevation,
      routeType,
      previewImg,
    };

    let updatedTrailData = await dispatch(thunkUpdateTrail(payload));

    if (updatedTrailData) history.push(`/trails/${updatedTrailData.id}`);
  };

  if (!user) {
    history.push("/");
  }

  let country_choices = ["United States of America"];

  let state_choices = ["California"];

  let resort_choices = ["Boreal Mountain Resort", "Heavenly Lake Tahoe", "Mammoth Mountain", "Bear Mountain", "Mountain High"];

  let difficulty_choices = [
    "Beginner",
    "Intermediate",
    "Black Diamond",
    "Double Black Diamond",
  ];

  let routeType_choices = ["All-mountain", "Park", "Powder", "Freeride"];

  //IMAGE VALIDATION
  const imageValidate =
    (!previewImg?.includes(".jpg") &&
      !previewImg?.includes(".png") &&
      !previewImg?.includes(".jpeg") &&
      !previewImg?.includes(".svg")) ||
    (!previewImg?.includes("https") && !previewImg?.includes("http"));

  return (
    <div className="update_trail_main">
      <div className="update_trail_form">
        <form style={{ width: "1100px" }} onSubmit={onSubmit}>
          <div className="update_trail_top_text">
            <div>Member</div>
            <div>&nbsp;›&nbsp;</div>
            <div>
              {user?.firstName}
              &nbsp;
              {user?.lastName}
            </div>
            <div>&nbsp;›&nbsp;</div>
            <div>Update trail</div>
          </div>
          <div className="update_trail_top_text_div"></div>
          <div className="update_trail_header">Update trail</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "10px",
              }}
            >
              <div className="update_trail_inputs_div">
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="update_trail_inputs"
                />
                {validations.length > 0 &&
                  submitted === true &&
                  (name?.length < 5 || name?.length === 0) && (
                    <div className="update_trail_error">
                      Please enter a trail name longer than 5 characters
                    </div>
                  )}
              </div>
              <div className="update_trail_inputs_div">
                <select
                  name="country"
                  value={country}
                  onChange={(event) => setCountry(event.target.value)}
                  className="update_trail_inputs"
                >
                  <option value="" disabled>
                    Select a country
                  </option>
                  {country_choices.map((country, i) => (
                    <option key={i} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                {validations.length > 0 && submitted === true && !country && (
                  <div className="update_trail_error">
                    Please select a country
                  </div>
                )}
              </div>
              <div className="update_trail_inputs_div">
                <select
                  name="state"
                  value={state}
                  onChange={(event) => setState(event.target.value)}
                  className="update_trail_inputs"
                >
                  <option value="" disabled>
                    Select a state
                  </option>
                  {state_choices.map((state, i) => (
                    <option key={i} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                {validations.length > 0 && submitted === true && !state && (
                  <div className="update_trail_error">
                    Please select a state
                  </div>
                )}
              </div>
              <div className="update_trail_inputs_div">
                <select
                  name="resort"
                  value={resort}
                  onChange={(event) => setResort(event.target.value)}
                  className="update_trail_inputs"
                >
                  <option value="" disabled>
                    Select a resort
                  </option>
                  {resort_choices.map((resort, i) => (
                    <option key={i} value={resort}>
                      {resort}
                    </option>
                  ))}
                </select>
                {validations.length > 0 && submitted === true && !resort && (
                  <div className="update_trail_error">
                    Please select a resort
                  </div>
                )}
              </div>
              <div className="update_trail_inputs_div">
                <select
                  name="difficulty"
                  value={difficulty}
                  onChange={(event) => setDifficulty(event.target.value)}
                  className="update_trail_inputs"
                >
                  <option value="" disabled>
                    Select a difficulty
                  </option>
                  {difficulty_choices.map((difficulty, i) => (
                    <option key={i} value={difficulty}>
                      {difficulty}
                    </option>
                  ))}
                </select>
                {validations.length > 0 &&
                  submitted === true &&
                  !difficulty && (
                    <div className="update_trail_error">
                      Please select a difficulty
                    </div>
                  )}
              </div>
              <div className="update_trail_inputs_div">
                <textarea
                  name="description"
                  type="text-area"
                  placeholder="Description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  className="update_trail_textarea"
                ></textarea>
                {validations.length > 0 &&
                  submitted === true &&
                  description.length < 20 && (
                    <div className="update_trail_error">
                      Please enter a description longer than 20 characters.
                    </div>
                  )}
              </div>
              <div className="update_trail_inputs_div">
                <input
                  name="length"
                  type="number"
                  placeholder="Length"
                  value={length}
                  onChange={(event) => setLength(event.target.value)}
                  className="update_trail_inputs"
                />
                {validations.length > 0 && submitted === true && !length && (
                  <div className="update_trail_error">
                    Please enter a valid length number
                  </div>
                )}
              </div>
              <div className="update_trail_inputs_div">
                <input
                  name="elevation"
                  type="number"
                  placeholder="Elevation"
                  value={elevation}
                  onChange={(event) => setElevation(event.target.value)}
                  className="update_trail_inputs"
                />
                {validations.length > 0 && submitted === true && !elevation && (
                  <div className="update_trail_error">
                    Please enter a valid elevation number
                  </div>
                )}
              </div>
              <div className="update_trail_inputs_div">
                <select
                  name="routeType"
                  value={routeType}
                  onChange={(event) => setRouteType(event.target.value)}
                  className="update_trail_inputs"
                >
                  <option value="" disabled>
                    Select a Route Type
                  </option>
                  {routeType_choices.map((routeType, i) => (
                    <option key={i} value={routeType}>
                      {routeType}
                    </option>
                  ))}
                </select>
                {validations.length > 0 && submitted === true && !routeType && (
                  <div className="update_trail_error">
                    Please select a route type
                  </div>
                )}
              </div>
              <div className="update_trail_inputs_div">
                <input
                  name="previewImg"
                  type="text"
                  placeholder="Trail Image"
                  value={previewImg}
                  onChange={(event) => setPreviewImg(event.target.value)}
                  className="update_trail_inputs"
                />
                {validations.length > 0 &&
                  submitted === true &&
                  imageValidate && (
                    <div className="update_trail_error">
                      Please enter a valid url image
                    </div>
                  )}
              </div>
              {/* {validations.length > 0 && submitted === true && (
              <div className="update_trail_error">
                {validations.map((error, ind) => (
                  <div key={ind}>{error}</div>
                ))}
              </div>
            )} */}
              <div className="update_trail_inputs_div">
                <button
                  className="update_trail_button_form"
                  type="submit"
                  disabled={validations.length > 0 && submitted}
                >
                  Update Trail
                </button>
              </div>
            </div>
            <div className="update_trail_map_div">
              <img src={logo} alt="lego" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}



export default UpdateTrail