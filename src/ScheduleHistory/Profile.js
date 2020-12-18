import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import "./Profile.css";

function Profile() {
  const [image, setimage] = useState(null);
  const [error, seterror] = useState(false);

  const changeHandler = (e) => {
    const selected = e.target.files[0];
    console.log(e.target.files[0].size);
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
      console.log(error);
    }
  };

  return (
    <div className="profile">
      <Avatar src={image} />
      <label htmlFor="fileupload">Choose Image</label>
      {error && <p>Image size be less than 5mb</p>}
      <input id="fileupload" type="file" onChange={changeHandler} />
      {image ? <button onClick={() => setimage(null)}>Remove</button> : null}
    </div>
  );
}

export default Profile;
