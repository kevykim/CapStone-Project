import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import { useState } from "react";

import { thunkEditUser } from "../../store/session";

import "./ProfilePage.css";

function ProfileEdit() {
const user = useSelector((state) => state.session.user);

const actualUser = user?.id;

const history = useHistory();
const dispatch = useDispatch();

// const [showProfileForm, setShowProfileForm] = useState(false);
const [submitted, setSubmitted] = useState(false);
const [firstName, setFirstName] = useState(user?.firstName);
const [lastName, setLastName] = useState(user?.lastName);
const [profileImg, setProfileImg] = useState(user?.profileImg);
const [errors, setErrors] = useState([]);
const [imageLoading, setImageLoading] = useState(false)

// const saveClick = (event) => {
//   event.preventDefault();

//   history.push(`/profile/${user?.firstName}%7D`);
  // setShowProfileForm(!showProfileForm)
// };

const onSubmit = async (event) => {
  event.preventDefault();
  setImageLoading(!imageLoading)
  setSubmitted(!submitted);
  const payload = {
    id: user?.id,
    firstName,
    lastName,
    profileImg,
  };

  let updatedUserData = await dispatch(thunkEditUser(payload)).catch(async (res) => {
    const data = await res.json()
    if (data && data.errors) setErrors(data.errors)
  })
  history.push(`/profile/${user?.firstName}%7D`);
  return updatedUserData
     

//   if (updatedUserData) {
//     // setShowProfileForm(!showProfileForm);
//   }
};



if (!user) {
  history.push("/");
}

if (actualUser !== user?.id) {
  history.push("/");
}

const onClick = (event) => {
    history.push(`/profile/${user?.firstName}%7D`);

};

const addImage = (event) => {
  if (event.target.files.length === 1) {
    let file = event.target.files[0];
    const src = String(URL.createObjectURL(file));
    const previewImage = document.getElementById("profile_image");
    previewImage.src = src;
    document.getElementById("profiled").style["display"] = "none";
    setProfileImg(file);
  }
};

let defaultImg =
  "https://www.pngkit.com/png/full/128-1280585_user-icon-fa-fa-user-circle.png";



  return (
    <div className="profile_main">
      <div className="profile_inner">
        <div className="profile_detail_top_main">
          <div className="profile_detail_top_text">
            <div className="profile_detail_navlink">Members</div>
            <div>&nbsp;›&nbsp;</div>
            <div className="profile_detail_navlink">
              {`${user?.firstName} ${user?.lastName}`}
            </div>
          </div>
          <button className="profile_edit_button" onClick={onClick}>
            {" "}
            Edit Profile
          </button>
        </div>
        <div className="profile_inner_divs">
          <div className="profile_left_div">
            <div className="profile_header">Profile</div>
            <form className="profile_top_main" onSubmit={onSubmit}>
              <div className="profile_inputs_div">
                <div className="profile_inputs_label_div">
                  {submitted === true && !profileImg && (
                    <div className="profile_error">&nbsp;*</div>
                  )}
                </div>
                <div className="profile_image_div">
                  <label className="profile_image_input">
                    <input
                      type="file"
                      accept="image/*"
                      placeholder="Trail Image"
                      // value={previewImg}
                      onChange={addImage}
                    />
                    <div className="profile_imageselect_text">
                      Select Image File
                    </div>
                    <img
                      id="profile_image"
                      // onError="this.style.display='none'"
                      onError={(event) => {
                        event.currentTarget.src =
                          "https://www.solidbackgrounds.com/images/950x350/950x350-white-solid-color-background.jpg";
                      }}
                      alt="actual"
                      src=""
                    />
                    <img
                      id="profiled"
                      // onError="this.style.display='none'"
                      onError={(event) => {
                        event.currentTarget.src =
                          "https://www.solidbackgrounds.com/images/950x350/950x350-white-solid-color-background.jpg";
                      }}
                      alt="previous"
                      src={!user?.profileImg ? defaultImg : user?.profileImg}
                    />
                  </label>
                </div>
                {submitted === true && !profileImg && (
                  <div className="profile_error">Please add an image file</div>
                )}
                <div className="profile_image_member_text">
                  <div>Member Since</div>
                  <div>Date</div>
                </div>
              </div>
              <div className="profile_inputs_main_div">
                <div className="sign_up_inputs_div">
                  <div className="profile_inputs_label_div">
                    <div>First name</div>
                    {errors.includes("Please enter a first name.") ? (
                      <div className="log_in_error">&nbsp;*</div>
                    ) : errors.includes(
                        "First name must be less than 15 characters"
                      ) ? (
                      <div className="log_in_error">&nbsp;*</div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                  <input
                    type="text"
                    name="firstName"
                    onChange={(event) => setFirstName(event.target.value)}
                    value={firstName}
                    placeholder="First name"
                    className="sign_up_inputs"
                  ></input>
                  {errors.includes("Please enter a first name.") && (
                    <div className="sign_up_error">
                      Please enter a first name
                    </div>
                  )}
                  {errors.includes(
                    "First name must be less than 15 characters"
                  ) && (
                    <div className="sign_up_error">
                      First name must be less than 15 characters
                    </div>
                  )}
                </div>
                <div className="sign_up_inputs_div">
                  <div className="sign_up_label_div">
                    <div>Last name</div>
                    {errors.includes("Please enter a last name") ? (
                      <div className="log_in_error">&nbsp;*</div>
                    ) : errors.includes(
                        "Last name must be less than 15 characters"
                      ) ? (
                      <div className="log_in_error">&nbsp;*</div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    onChange={(event) => setLastName(event.target.value)}
                    value={lastName}
                    placeholder="Last name"
                    className="sign_up_inputs"
                  ></input>
                  {errors.includes("Please enter a last name") && (
                    <div className="sign_up_error">
                      Please enter a last name
                    </div>
                  )}
                  {errors.includes(
                    "Last name must be less than 15 characters"
                  ) && (
                    <div className="sign_up_error">
                      Last name must be less than 15 characters
                    </div>
                  )}
                </div>
                <div className="profile_buttons_div">
                  <div>
                    <button disabled={errors.length > 0 && submitted} className="profile_buttons_save" type="submit">
                      Save
                    </button>
                  </div>
                  <div>
                    <button
                      className="profile_buttons_cancel"
                      onClick={onClick}
                      type="button"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
                {imageLoading && <p style={{textAlign:'center', marginTop:'5px'}}>loading...</p>}
              </div>
            </form>
          </div>
          <div className="profile_right_div">
            <div className="profile_right_inners">
              <div className="profile_right_text">Contribute</div>
              <div className="profile_right_navlink_div">
                <i className="fa-solid fa-circle-plus"></i> &nbsp;
                <NavLink
                  className="profile_right_navlink"
                  exact
                  to="/trails/new"
                >
                  Add new trail
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ProfileEdit;