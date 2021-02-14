import React, { useState } from "react";
import Calendar from "../../../assests/calendar 1.png";
import Clock from "../../../assests/clock.png";
import Bookmark from "../../../assests/bookmark 1.png";
import Stethoscope from "../../../assests/uil_stethoscope.png";
import { useHistory } from "react-router-dom";
import "./ContentData.css";
import { useStateValue } from "../../../StateProvider";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Cont({
  title,
  image,
  time,
  qualification,
  amount,
  place,
  date,
  id,
  location,
}) {
  const [{ card }, dispatch] = useStateValue();

  const [values, setvalues] = useState({
    img: false,
  });
  const history = useHistory();

  console.log("this is state", card);

  const ClickHandler = (id) => {
    dispatch({
      type: "ADD_DATA",
      item: {
        title: title,
        image: image,
        time: time,
        qualification: qualification,
        amount: amount,
        place: place,
        date: date,
        id: id,
        location: location,
      },
    });
    history.push(`/JobApplicationMain/${id}`);
  };

  const ClickViewHandler = () => {
    history.push("/Detailedjobs");
  };
  const BookmarkHandler = () => {
    setvalues(true);
    console.log("bookmark clicked");
  };
  const classes = useStyles();

  return (
    <Grid container xs={12} xl={12} md={12} lg={12}>
      <Grid item xs={1} xl={1} md={1} lg={1} />
      <Grid xs={12} md={5} xl={5} lg={5} container>
        <img src={image} width="100%" height="90%" />
      </Grid>
      <Grid
        md={5}
        className="contentData"
        container
        spacing={0}
        md={5}
        xl={5}
        xs={12}
        lg={5}
      >
        <Grid container md={12} xl={12} xs={12} lg={12} alignItems="center">
          <Grid item md={1} xl={1} xs={1} lg={1} />
          <Grid item md={10} xl={10} xs={10} lg={10}>
            <h4>{title}</h4>
            <p>{place}</p>
          </Grid>
          <Grid item md={1} xl={1} xs={1} lg={1}>
            <img src={Bookmark} onClick={BookmarkHandler} value={values.img} />
          </Grid>
          <Grid container md={12} xl={12} xs={12} lg={12}>
            <Grid item md={1} xl={1} xs={1} lg={1} />
            <Grid item md={11} xl={11} xs={11} lg={11}>
              <div className="contentData__center">
                <img src={Clock} />
                {time}
              </div>
            </Grid>
          </Grid>
          <br />
          <Grid container md={12} xl={12} xs={12} lg={12} alignItems="center">
            <Grid item md={1} xl={1} xs={1} lg={1} />
            <Grid item md={11} xl={11} xs={11} lg={11} alignItems="center">
              <div className="contentData__center">
                <img src={Stethoscope} />
                {qualification}
              </div>
            </Grid>
          </Grid>
          <Grid container md={12} xl={12} xs={12} lg={12} alignItems="center">
            <Grid item md={1} xl={1} xs={1} lg={1} />
            <Grid item md={9} xl={9} xs={9} lg={9}>
              <div className="contentData__center">
                <img src={Calendar} />
                {date}
              </div>
            </Grid>
            <Grid item md={2} xl={2} xs={2} lg={2}>
              <h4 className="contentData__rate">${amount}/hr</h4>
            </Grid>
          </Grid>
          <br />
          <Grid container md={12} xl={12} xs={12} lg={12}>
            <Grid item md={1} xl={2} xs={1} lg={1} />
            <Grid item md={5} xl={5} xs={5} lg={5}>
              <button
                onClick={() => ClickHandler(id)}
                className="contentData__button1"
              >
                Easy Apply
              </button>
            </Grid>
            <Grid item md={5} xl={5} xs={5} lg={5}>
              <button
                onClick={ClickViewHandler}
                className="contentData__button2"
              >
                View Details
              </button>
            </Grid>
            <Grid item md={1} xl={1} xs={1} lg={1} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Cont;

{
  /* <div className="contentData__content">
<div className="contentData__bookmark">
  <div className="contentData__bookmarkh4">
    <h4>{title}</h4>
  </div>
  <div className="contentData__imgbookmark">
    <img
      src={Bookmark}
      onClick={BookmarkHandler}
      value={values.img}
    />
  </div>
</div>

<div className="contentData__logo">
  <div className="contentData__logo1">
   
  </div>
  <div className="contentData__logo1">
    <img src={Clock} />
    {time}
  </div>
  <div className="contentData__qualification">
    <div className="contentData__logo3">
      <img src={Stethoscope} />
      {qualification}
    </div>
    <div className="contentData__price">
    
    </div>
  </div>
  <br />
  <div className="contentData__button">
   
   
  </div>
</div>
</div> */
}
