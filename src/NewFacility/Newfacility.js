// import React, { useState } from "react";
// import { useFormik } from "formik";
// import { TextField } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import Spinner from "../Spinner";
// import { Grid } from "@material-ui/core";
// import { facility } from "../auth/userAction";
// import { connect } from "react-redux";
// import "./Newfacility.css";

// const style = {
//   root: {
//     width: "50%",
//     marginBottom: "2.2em",
//     marginTop: "2em",
//   },
// };
// const useStyle = makeStyles(style);

// const validate = (values) => {
//   let errors = {};
//   let phone = /^[0-9\b]+$/;

//   if (!values.email.trim()) {
//     errors.email = " required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = "email address is invalid";
//   }

//   if (!values.name.trim()) {
//     errors.name = " required";
//   }

//   if (!values.phone_no.trim()) {
//     errors.phone_no = " required";
//   } else if (!values.phone_no.match(phone)) {
//     errors.phone_no = "should be a number";
//   }

//   if (!values.organisation.trim()) {
//     errors.organisation = " required";
//   }
//   if (!values.role.trim()) {
//     errors.role = "required";
//   }

//   return errors;
// };
// const Newfacility = ({ facility }) => {
//   const [loading, setloading] = useState(false);
//   const history = useHistory();

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       organisation: "",
//       role: "",
//       phone_no: "",
//     },
//     validate,
//     onSubmit: (values, { setSubmitting, setFieldError }) => {
//       console.log(values);
//       facility(values, history, setFieldError, setSubmitting, setloading);
//     },
//   });

//   const classes = useStyle();
//   let load = (
//     <>
//       <form onSubmit={formik.handleSubmit} autoComplete="off">
//         <TextField
//           className={classes.root}
//           variant="outlined"
//           label="Name"
//           name="name"
//           onChange={formik.handleChange}
//           value={formik.values.name}
//           onBlur={formik.handleBlur}
//         />
//         <Grid container xs={12} xl={9} md={12} lg={7}>
//           <Grid item xs={4} xl={2} md={2} lg={3} />

//           <Grid item xs={8} xl={5} md={10} lg={5}>
//             {formik.touched.name && formik.errors.name && (
//               <p className="useformsSignup__form">{formik.errors.name}</p>
//             )}
//           </Grid>
//         </Grid>

//         <TextField
//           className={classes.root}
//           variant="outlined"
//           label="Email"
//           type="email"
//           name="email"
//           onChange={formik.handleChange}
//           value={formik.values.email}
//           onBlur={formik.handleBlur}
//         />
//         <Grid container xs={12} xl={9} md={12} lg={7}>
//           <Grid item xs={4} xl={2} md={2} lg={3} />

//           <Grid item xs={8} xl={5} md={10} lg={5}>
//             {formik.touched.email && formik.errors.email && (
//               <p className="useformsSignup__form">{formik.errors.email}</p>
//             )}
//           </Grid>
//         </Grid>

//         <TextField
//           className={classes.root}
//           variant="outlined"
//           label="Phone Number"
//           type="text"
//           name="phone_no"
//           onChange={formik.handleChange}
//           value={formik.values.phone_no}
//           onBlur={formik.handleBlur}
//         />

//         <Grid container xs={12} xl={9} md={12} lg={7}>
//           <Grid item xs={4} xl={2} md={2} lg={3} />

//           <Grid item xs={8} xl={5} md={10} lg={5}>
//             {formik.touched.phone_no && formik.errors.phone_no && (
//               <p className="useformsSignup__form">{formik.errors.phone_no}</p>
//             )}
//           </Grid>
//         </Grid>
//         <TextField
//           className={classes.root}
//           variant="outlined"
//           label="Organisation"
//           type="organisation"
//           name="organisation"
//           onChange={formik.handleChange}
//           value={formik.values.organisation}
//           onBlur={formik.handleBlur}
//         />
//         <Grid container xs={12} xl={9} md={12} lg={7}>
//           <Grid item xs={4} xl={2} md={2} lg={3} />

//           <Grid item xs={8} xl={5} md={10} lg={5}>
//             {formik.touched.email && formik.errors.organisation && (
//               <p className="useformsSignup__form">
//                 {formik.errors.organisation}
//               </p>
//             )}
//           </Grid>
//         </Grid>
//         <TextField
//           className={classes.root}
//           variant="outlined"
//           label="Role"
//           type="role"
//           name="role"
//           onChange={formik.handleChange}
//           value={formik.values.role}
//           onBlur={formik.handleBlur}
//         />
//         <Grid container xs={12} xl={9} md={12} lg={7}>
//           <Grid item xs={4} xl={2} md={2} lg={3} />

//           <Grid item xs={8} xl={5} md={10} lg={5}>
//             {formik.touched.role && formik.errors.role && (
//               <p className="useformsSignup__form">{formik.errors.role}</p>
//             )}
//           </Grid>
//         </Grid>
//         <Grid container xs={12} xl={12} md={12} lg={12} justify="center">
//           <button className="newfacility__button" type="submit">
//             Submit
//           </button>
//         </Grid>
//       </form>
//     </>
//   );
//   if (loading) {
//     load = <Spinner />;
//   }

//   return (
//     <div className="newfacility">
//       <Grid container xs={12} xl={12} md={12} lg={12}>
//         <Grid item xs={12} xl={1} md={2} lg={0} />
//         <Grid item xs={12} xl={1} md={2} lg={0}>
//           <Link to="/">
//             <ArrowBackIcon />
//           </Link>
//         </Grid>
//         <Grid item xs={12} xl={4} md={4} lg={4}>
//           <h2>Contact Us</h2>
//         </Grid>
//       </Grid>
//       {load}
//     </div>
//   );
// };

// const mapStateToProps = ({ session }) => ({
//   user: session.user,
// });

// export default connect(mapStateToProps, { facility })(Newfacility);
