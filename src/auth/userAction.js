import axios from "axios";
import { sessionService } from "redux-react-session";

export const loginUser = (
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {
  return (dispatch) => {
    axios
      .post("/login", credentials, {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer" + jwtToken,
        },
      })
      .then((response) => {
        const { data } = response;
        const userData = data;
        const token = userData.token;
        console.log(response);
        debugger;
        sessionService
          .saveSession(token)
          .then(() => {
            sessionService.saveUser(userData).then(() => {
              history.push("/jobs");
            });
          })

          .catch((error) => console.log(error));
      });
    setSubmitting(false);
    setloading(false);
  };
};
export const signupUser = (
  credentials,
  history,
  setFieldError,
  setloading,
  setOtp,
  setSubmitting
) => {
  return (dispatch) => {
    axios
      .post("/signup", credentials, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
        } else if (response.status === 200) {
          sessionStorage.setItem("data", response.data.token);
          history.push("/BasicInfo");
        }

        sessionService
          .saveSession(token)
          .then(() => {
            sessionService
              .saveUser(userData)
              .then(() => {
                //history.push("/BasicInfo");
              })
              .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
    setSubmitting(false);
  };
};

export const logoutUser = (history) => {
  return () => {
    sessionService.deleteSession();
    sessionService.deleteUser();
    history.push("/");
  };
};
export const BasicInfo = (
  credentials,
  history,
  setloading,
  setOtp,
  setSubmitting
) => {
  return (dispatch) => {
    axios
      .post("/basicinfo", credentials, {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("data"),
        },
      })

      .then((response) => {
        console.log(response);
        if (response.status === 200) {
        } else if (response.status === 201) {
          history.push("/OtpVerification");
        }

        sessionService
          .saveSession(token)
          .then(() => {
            sessionService
              .saveUser(userData)
              .then(() => {
                //history.push("/BasicInfo");
              })
              .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
    setSubmitting(false);
  };
};
export const mobileOtp = (
  credentials,
  history,
  setloading,
  setOtp,
  setSubmitting
) => {
  return (dispatch) => {
    axios
      .post("/basicinfo", credentials, {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("data"),
        },
      })

      .then((response) => {
        console.log(response);
        if (response.status === 200) {
        } else if (response.status === 201) {
          history.push("/OtpVerification");
        }

        sessionService
          .saveSession(token)
          .then(() => {
            sessionService
              .saveUser(userData)
              .then(() => {
                //history.push("/BasicInfo");
              })
              .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
    setSubmitting(false);
  };
};
