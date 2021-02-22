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
export const signupUser = (credentials, history, setloading, setSubmitting) => {
  return (dispatch) => {
    setloading(true);

    axios
      .post("/signup", credentials, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((response) => {
        setloading(true);
        console.log(response);
        if (response.status === 406) {
          console.log(response.error);
        } else if (response.status === 200) {
          sessionStorage.setItem("data", response.data.token);
          history.push("/BasicInfo");
          setloading(false);
        }
        const { data } = response;
        const userData = data;
        const token = userData.token;
        sessionService
          .saveSession(token)
          .then(() => {
            sessionService
              .saveUser(userData)
              .then(() => {
                setloading(true);
              })
              .catch((error) => {
                console.log(error);
                setloading(false);
              });
          })
          .catch((error) => {
            if (error.status === 406) {
              console.log(error);
              setloading(false);
            }
          });
      })
      .catch((error) => {
        if (error.status === 406) {
          console.log(error);
          setloading(false);
        }
      });
    setSubmitting(false);
    setloading(true);
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
  setSubmitting,
  error
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
        if (response.status === 406) {
          console.log(response);
        } else if (response.status === 201) {
          let data = JSON.parse(response.config.data);
          sessionStorage.setItem("phone", data.phone_no);

          console.log(response.data);
          console.log(response.config.data);
          console.log(data.phone_no);
          history.push("/OtpVerification");
        }
        const { data } = response;
        const userData = data;
        const token = userData.token;
        sessionService
          .saveSession(token)
          .then(() => {
            sessionService
              .saveUser(userData)
              .then(() => {})
              .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
    setSubmitting(false);
  };
};
export const mobileOtp = (credentials, history, setloading, setSubmitting) => {
  return (dispatch) => {
    axios
      .post("/verify", credentials, {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("data"),
        },
      })

      .then((response) => {
        console.log(response);
        if (response.status === 200) {
        } else if (response.status === 202) {
          history.push("/ScheduleInterview");
        }
        const { data } = response;
        const userData = data;
        const token = userData.token;
        sessionService
          .saveSession(token)
          .then(() => {
            sessionService
              .saveUser(userData)
              .then(() => {})
              .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
    setSubmitting(false);
  };
};
