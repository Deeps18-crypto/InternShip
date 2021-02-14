import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import "./Profile.css";
import CancelIcon from "@material-ui/icons/Cancel";
import { Grid } from "@material-ui/core";

function Profile({ facility }) {
  const [image, setimage] = useState(null);
  const [error, seterror] = useState(false);

  const changeHandler = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.size <= "5000000") {
      console.log(selected);
      let reader = new FileReader();
      reader.onloadend = () => {
        setimage(reader.result);
        seterror(false);
      };
      reader.readAsDataURL(selected);
    } else {
      seterror(true);
    }
  };
  return (
    <>
      {!facility ? (
        <div className="profile">
          {error && <p>Image size should be less than 5mb</p>}
          <Grid container xs={12} xl={12} md={12} lg={12}>
            <Grid item xs={4} xl={4} md={1} lg={4} />
            <Grid item xs={8} xl={8} md={1} lg={8}>
              <div className="profile__head">
                <Avatar src={image} className="profile__avatar" />
              </div>
            </Grid>
          </Grid>
          <Grid container xs={12} xl={12} md={12} lg={12}>
            <Grid item xs={12} xl={1} md={1} lg={1} />
            <Grid item xs={12} xl={8} md={12} lg={12}>
              <div className="profile__icon">
                <label htmlFor="fileupload" className="profile__label">
                  Choose Image
                </label>
                <CancelIcon onClick={() => setimage(null)} />
              </div>
            </Grid>
          </Grid>

          <input
            className="profile__input"
            id="fileupload"
            type="file"
            onChange={changeHandler}
            accept="image/*"
          />
        </div>
      ) : (
        <div className="profile">
          {error && <p>Image size should be less than 5mb</p>}
          <div>
            <img src={image} className="profile__avatarFacility" />
            <br />
            <label htmlFor="fileupload" className="profile__labelFacility">
              Choose Image
            </label>
            <label
              onClick={() => setimage(null)}
              className="profile__labelFacilityBack"
            >
              Remove image
            </label>
            <input
              className="profile__input"
              id="fileupload"
              type="file"
              onChange={changeHandler}
              accept="image/*"
            />
          </div>
        </div>
      )}
    </>
  );
}
export default Profile;
