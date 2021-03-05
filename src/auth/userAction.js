import axios from "axios";
import { sessionService } from "redux-react-session";

export const signupUser = (
  credentials,
  history,
  setloading,
  setSubmitting,
  setError
) => {
  return (dispatch) => {
    setloading(true);

    axios
      .get("/signup", credentials, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 406) {
          console.log(response.data.error);
          console.log("Some thing went wrong");
        } else if (response.status === 200) {
          sessionStorage.setItem("data", response.data.token);
          history.push("/BasicInfo");
          setloading(false);
        } else if (response.status === 201) {
          setloading(false);
        }
        const { data } = response;
        const userData = data;
        const token = userData.token;
        sessionService
          .saveSession(token)
          .then(() => {
            sessionService.saveUser(userData).then(() => {});
          })
          .catch((error) => {
            if (error.response) {
              setError(error.response.data.error);
              setloading(false);
            }
          });
      })
      .catch((error) => {
        if (error.response) {
          setError(error.response.data.error);
          setloading(false);
        }
      });
    setSubmitting(false);
  };
};

export const BasicInfo = (credentials, history, setloading, setSubmitting) => {
  return (dispatch) => {
    setloading(true);
    axios
      .post("/basicinfo", credentials, {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("data"),
        },
      })

      .then((response) => {
        console.log(response.data);
        if (response.status === 406) {
          console.log(response);
        } else if (response.status === 201) {
          let data = JSON.parse(response.config.data);
          sessionStorage.setItem("phone", data.phone_no);
          console.log(data.phone_no);
         // history.push("/OtpVerification");
          setloading(false);
        }
        const { data } = response;
        const userData = data;
        const token = userData.data.token;
        sessionService
          .saveSession(token)
          .then(() => {
            sessionService.saveUser(userData).then(() => {});
          })
          .catch((error) => {});
      })
      .catch((error) => {});
    setSubmitting(false);
  };
};
export const mobileOtp = (
  credentials,
  history,
  setSubmitting,
  setError,
  setloading
) => {
  return (dispatch) => {
    setloading(true);
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
          setloading(false);
        }
        const { data } = response;
        const userData = data;
        const token = userData.data.token;
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
      .catch((error) => {
        if (error.response) {
          setError(error.response.data.error);
          setloading(false);
        }
      });
    setSubmitting(false);
  };
};
export const loginUser = (
  credentials,
  history,
  setSubmitting,
  setloading,
  setError
) => {
  return (dispatch) => {
    setloading(true);
    axios
      .post("/login", credentials, {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("data"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          history.push("/jobs");
          setloading(false);
        } else if (response.status === 202) {
          history.push("/jobs");
          console.log(response);
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
              .then(() => {})
              .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data.error);
          setError(error.response.data.error);
          setloading(false);
        }
      });
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
export const facility = (
  credentials,
  history,
  setSubmitting,
  setError,
  setloading
) => {
  return (dispatch) => {
    setloading(true);

    axios
      .post("/contactus", credentials, {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("data"),
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          sessionStorage.setItem("data", response.data.token);
          history.push("/Facility/Congratulation");
          setloading(false);
        }
        const { data } = response;
        const userData = data;
        const token = userData.token;
        sessionService
          .saveSession(token)
          .then(() => {
            sessionService.saveUser(userData).then(() => {});
          })
          .catch((error) => {
            if (error.response) {
              setError(error.response.data.error);
            }
          });
      })
      .catch((error) => {
        if (error.response) {
          setError(error.response.data.error);
        }
      });
    setSubmitting(false);
  };
};
