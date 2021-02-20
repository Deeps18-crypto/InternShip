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
export const signupUser = (credentials, history, setFieldError, setloading) => {
  return (dispatch) => {
    axios
      .post("/signup", credentials, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((response) => {
        const { data } = response;

        // if(data.status === "FAILED"){
        //     const {message} = data
        //     if(message.includes("email")){

        //     }
        // }
        const userData = data;
        const token = userData.token;
        console.log(response);

        sessionService
          .saveSession(token)
          .then(() => {
            sessionService
              .saveUser(userData)
              .then(() => {
                history.push("/BasicInfo");
              })
              .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
        
      });
    setSubmitting(false);
    setloading(false);
  };
};
export const userOtp = (credentials, history, setFieldError, setSubmitting) => {
  axios
    .post("/signup", credentials, {
      headers: {
        "Content-type": "application/json",
      },
    })
    .then((response) => {
      const { data } = response;
      const userData = data;
      const token = userData.token;
      console.log(response);

      sessionService
        .saveSession(token)
        .then(() => {
          sessionService
            .saveUser(userData)
            .then(() => {
              history.push("/jobs");
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    });
  setSubmitting(false);
};
export const logoutUser = (history) => {
  return () => {
    sessionService.deleteSession();
    sessionService.deleteUser();
    history.push("/");
  };
};