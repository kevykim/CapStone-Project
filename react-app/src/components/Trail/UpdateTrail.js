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

  const oldTrail = trailArr.find((trails) => Number(trails.id) === Number(id));

  const user = useSelector((state) => state.session.user);

  const [name, setName] = useState(oldTrail?.name);
  const [city, setCity] = useState(oldTrail?.city);
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
    if (name?.length < 5 || name?.length >= 41)
      errors.push("Trail name must be between 5 to 40 characters");
    if (city?.length <= 0 || city?.length >= 76) errors.push("Please enter a city less than 75 characters");
    if (!country) errors.push("Please select a country");
    if (!state) errors.push("Please select a state");
    if (!resort) errors.push("Please select a resort");
    if (!difficulty) errors.push("Please select a difficulty");
    if (description?.length < 20 || description?.length >= 501)
      errors.push("Trail description must be between 20 to 500 characters");
    if (
      !length ||
      Number(length) >= 5.1 ||
      Number(length) < 0.3 ||
      isNaN(length)
    )
      errors.push("Please enter a number between 0.3 to 5.0");
    if (length?.length > 3)
      errors.push("Enter a whole number or a decimal in the tenths place");
    if (
      Number(elevation) % 1 !== 0 ||
      Number(elevation) >= 12001 ||
      Number(elevation) < 3000 ||
      !elevation
    )
      errors.push("Please enter a whole number between 3,000 to 12,000");
    if (!routeType) errors.push("Please select a route type");
    // if (
    //   (!previewImg.endsWith(".jpg") &&
    //     !previewImg.endsWith(".png") &&
    //     !previewImg.endsWith(".jpeg") &&
    //     !previewImg.endsWith(".svg") &&
    //     !previewImg.endsWith(".gif")) ||
    //   (!previewImg.startsWith("http://") && !previewImg.startsWith("https://"))
    // )
    //   errors.push("Please enter a valid url image");
    setValidations(errors);
  }, [
    dispatch,
    name,
    city,
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
       city,
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

  let state_choices = ["California", "Oregon", "New York", "Washington"];

  // let resort_choices = [
  //   "Boreal Mountain Resort",
  //   "Heavenly Lake Tahoe",
  //   "Mammoth Mountain",
  //   "Bear Mountain",
  //   "Mountain High",
  // ];

  let difficulty_choices = [
    "Beginner",
    "Intermediate",
    "Black Diamond",
    "Double Black Diamond",
  ];

  let routeType_choices = ["All-mountain", "Park", "Powder", "Free-ride"];

  const addImage = (event) => {
    if (event.target.files.length === 1) {
      let file = event.target.files[0];
      const src = String(URL.createObjectURL(file));
      const previewImage = document.getElementById("updated");
      previewImage.src = src
      document.getElementById('previous').style['display'] = 'none'
      setPreviewImg(file);
    }
  };

  //IMAGE VALIDATION
  // const imageValidate =
  //   (!previewImg.endsWith(".jpg") &&
  //     !previewImg.endsWith(".png") &&
  //     !previewImg.endsWith(".jpeg") &&
  //     !previewImg.endsWith(".svg") &&
  //     !previewImg.endsWith(".gif")) ||
  //   (!previewImg.startsWith("http://") && !previewImg.startsWith("https://"));

    //previous
  // const imageValidate =
  //   (!previewImg.includes(".jpg") &&
  //     !previewImg.includes(".png") &&
  //     !previewImg.includes(".jpeg") &&
  //     !previewImg.includes(".svg") &&
  //     !previewImg.includes(".gif")) ||
  //   (!previewImg.includes("https") && !previewImg.includes("http"));
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
                <div className="update_trail_label_div">
                  <div>Name</div>
                  {validations.length > 0 &&
                    submitted === true &&
                    (name?.length < 5 || name?.length >= 41) && (
                      <div className="update_trail_error">&nbsp;*</div>
                    )}
                </div>
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
                  (name?.length < 5 || name?.length >= 41) && (
                    <div className="update_trail_error">
                      Trail name must be between 5 to 40 characters
                    </div>
                  )}
              </div>
              <div className="update_trail_inputs_div">
                <div className="update_trail_label_div">
                  <div>City</div>
                  {validations.length > 0 &&
                    submitted === true &&
                    (!city || city?.length >= 75) && (
                      <div className="update_trail_error">&nbsp;*</div>
                    )}
                </div>
                <input
                  name="city"
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                  className="update_trail_inputs"
                />
                {validations.length > 0 &&
                  submitted === true &&
                  (city?.length <= 0 || city?.length >= 76) && (
                    <div className="update_trail_error">
                      Please enter a city less than 75 characters
                    </div>
                  )}
              </div>
              <div className="update_trail_inputs_div">
                <div className="update_trail_label_div">
                  <div>Country</div>
                  {validations.length > 0 && submitted === true && !country && (
                    <div className="update_trail_error">&nbsp;*</div>
                  )}
                </div>
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
                <div className="update_trail_label_div">
                  <div>State</div>
                  {validations.length > 0 && submitted === true && !state && (
                    <div className="update_trail_error">&nbsp;*</div>
                  )}
                </div>
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
                <div className="update_trail_label_div">
                  <div>Resort</div>
                  {validations.length > 0 && submitted === true && !resort && (
                    <div className="update_trail_error">&nbsp;*</div>
                  )}
                </div>
                <select
                  name="resort"
                  value={resort}
                  onChange={(event) => setResort(event.target.value)}
                  className="update_trail_inputs"
                >
                  <option value="" disabled>
                    Select a resort
                  </option>
                  {state === "California" && (
                      <>
                        <option value={'Boreal Mountain Resort'}>Boreal Mountain Resort</option>
                        <option value={'Heavenly Lake Tahoe'}>Heavenly Lake Tahoe</option>
                        <option value={'Mammoth Mountain'}>Mammoth Mountain</option>
                        <option value={'Bear Mountain'}>Bear Mountain</option>
                        <option value={'Mountain High'}>Mountain High</option>
                      </>
                    )}
                    {state === "Oregon" && (
                      <>
                        <option value={'Mount Hood Meadows'}>Mount Hood Meadows</option>
                        <option value={'Timberline Summit Pass'}> Timberline Summit Pass</option>
                        <option value={"Mount Bachelor"}>Mount Bachelor</option>
                      </>
                    )}
                    {state === "New York" && (
                      <>
                      <option value={'Gore Mountain'}>Gore Mountain</option>
                      <option value={'Windham Mountain'}>Windham Mountain</option>
                      <option value={'Hunter Mountain'}>Hunter Mountain</option>
                      </>
                    )}
                    {state === "Washington" && (
                      <>
                      <option value={'Crystal Mountain'}>Crystal Mountain</option>
                      <option value={'Stevens Pass'}>Stevens Pass</option>
                      <option value={'Mount Baker'}>Mount Baker</option>
                      </>
                    )}
                </select>
                {validations.length > 0 && submitted === true && !resort && (
                  <div className="update_trail_error">
                    Please select a resort
                  </div>
                )}
              </div>
              <div className="update_trail_inputs_div">
                <div className="update_trail_label_div">
                  <div>Difficulty</div>
                  {validations.length > 0 &&
                    submitted === true &&
                    !difficulty && (
                      <div className="update_trail_error">&nbsp;*</div>
                    )}
                </div>
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
                <div className="update_trail_label_div">
                  <div>Description</div>
                  {validations.length > 0 &&
                    submitted === true &&
                    (description?.length < 20 ||
                      description?.length >= 501) && (
                      <div className="update_trail_error">&nbsp;*</div>
                    )}
                </div>
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
                  (description?.length < 20 || description?.length >= 501) && (
                    <div className="update_trail_error">
                      Trail description must be between 20 to 500 characters
                    </div>
                  )}
              </div>
              <div className="update_trail_inputs_div">
                <div className="update_trail_label_div">
                  <div>Length</div>
                  {validations.length > 0 &&
                    submitted === true &&
                    (!length ||
                      Number(length) >= 5.1 ||
                      Number(length) < 0.3 ||
                      length?.length > 3 ||
                      isNaN(length)) && (
                      <div className="update_trail_error">&nbsp;*</div>
                    )}
                </div>
                <input
                  name="length"
                  type="text"
                  placeholder="Length"
                  value={length}
                  onChange={(event) => setLength(event.target.value)}
                  className="update_trail_inputs"
                />
                {validations.length > 0 &&
                submitted === true &&
                (!length || Number(length) >= 5.1 || Number(length) < 0.3) ? (
                  <div className="update_trail_error">
                    Please enter a number between 0.3 to 5.0
                  </div>
                ) : (
                  (length?.length > 3 || isNaN(length)) && (
                    <div className="update_trail_error">
                      Enter a whole number or a decimal in the tenths place
                    </div>
                  )
                )}
              </div>
              <div className="update_trail_inputs_div">
                <div className="update_trail_label_div">
                  <div>Elevation</div>
                  {validations.length > 0 &&
                    submitted === true &&
                    (Number(elevation) % 1 !== 0 ||
                      Number(elevation) >= 12001 ||
                      Number(elevation) < 3000 ||
                      !elevation) && (
                      <div className="update_trail_error">&nbsp;*</div>
                    )}
                </div>
                <input
                  name="elevation"
                  type="text"
                  placeholder="Elevation"
                  value={elevation}
                  onChange={(event) => setElevation(event.target.value)}
                  className="update_trail_inputs"
                />
                {validations.length > 0 &&
                  submitted === true &&
                  (Number(elevation) % 1 !== 0 ||
                    Number(elevation) >= 12001 ||
                    Number(elevation) < 3000 ||
                    !elevation) && (
                    <div className="update_trail_error">
                      Please enter a whole number between 3000 to 12000
                    </div>
                  )}
              </div>
              <div className="update_trail_inputs_div">
                <div className="update_trail_label_div">
                  <div>Route Type</div>
                  {validations.length > 0 &&
                    submitted === true &&
                    !routeType && (
                      <div className="update_trail_error">&nbsp;*</div>
                    )}
                </div>
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
                <div className="update_trail_label_div">
                  <div>Trail image</div>
                  {/* {validations.length > 0 &&
                    submitted === true &&
                    imageValidate && (
                      <div className="update_trail_error">&nbsp;*</div>
                    )} */}
                  {validations.length > 0 &&
                    submitted === true &&
                    !previewImg && (
                      <div className="create_trail_error">&nbsp;*</div>
                    )}
                </div>
                <div className="update_trail_image_div">
                  <label className="update_trail_image_input">
                    <input
                      type="file"
                      accept="image/*"
                      placeholder="Trail Image"
                      // value={previewImg}
                      onChange={addImage}
                    />
                    <div className="update_trail_imageselect_text">
                      Select Image File
                    </div>
                    <i
                      style={{
                        color: "rgb(60, 103, 148)",
                        zIndex: 1,
                        textShadow: "0.5px 1px 2.5px  white",
                      }}
                      className="fa-solid fa-camera fa-xl"
                    ></i>

                    <img
                      id="updated"
                      // onError="this.style.display='none'"
                      onError={(event) => {
                        event.currentTarget.src =
                          "https://images.pexels.com/photos/7165180/pexels-photo-7165180.jpeg";
                      }}
                      alt="actual"
                      src=""
                    />
                    <img
                      id="previous"
                      // onError="this.style.display='none'"
                      onError={(event) => {
                        event.currentTarget.src =
                          "https://images.pexels.com/photos/7165180/pexels-photo-7165180.jpeg";
                      }}
                      alt="previous"
                      src={previewImg}
                    />
                  </label>
                </div>
                {validations.length > 0 &&
                  submitted === true &&
                  !previewImg && (
                    <div className="create_trail_error">
                      Please add an image file
                    </div>
                  )}
                {/* {validations.length > 0 &&
                        submitted === true &&
                        imageValidate && (
                          <div className="update_trail_error">
                            Please enter a valid url image
                          </div>
                        )} */}
              </div>
              {/* {validations.length > 0 && submitted === true && (
              <div className="update_trail_error">
                {validations.map((error, ind) => (
                  <div key={ind}>{error}</div>
                ))}
              </div>
            )} */}
              <div className="update_trail_inputs_button_div">
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