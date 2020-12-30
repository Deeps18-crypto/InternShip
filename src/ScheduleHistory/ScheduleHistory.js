import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  AppointmentTooltip,
  Appointments,
  TodayButton,
  DragDropProvider,
} from "@devexpress/dx-react-scheduler-material-ui";
import {
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import { Mockdata } from "./Mockdata";

const SHIFT_KEY = 16;

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: Mockdata,
      currentDate: "2020-06-27",
    };
    this.commitChanges = this.commitChanges.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.currentDateChange = (currentDate) => {
      this.setState({ currentDate });
    };
  }
  componentDidMount() {
    window.addEventListener("keydown", this.onKeyDown);
    window.addEventListener("keyup", this.onKeyUp);
  }

  //   componentWillUnmount() {
  //     window.removeEventListener("keydown");
  //     window.removeEventListener("keyup");
  //   }
  onKeyDown(event) {
    if (event.keyCode === SHIFT_KEY) {
      this.setState({ isShiftPressed: true });
    }
  }
  onKeyUp(event) {
    if (event.keyCode === SHIFT_KEY) {
      this.setState({ isShiftPressed: false });
    }
  }
  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      const { isShiftPressed } = this.state;
      if (added) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        if (isShiftPressed) {
          const changedAppointment = data.find(
            (appointment) => changed[appointment.id]
          );
          const startingAddedId =
            data.length > 0 ? data[data.length - 1].id + 1 : 0;
          data = [
            ...data,
            {
              ...changedAppointment,
              id: startingAddedId,
              ...changed[changedAppointment.id],
            },
          ];
        } else {
          data = data.map((appointment) =>
            changed[appointment.id]
              ? { ...appointment, ...changed[appointment.id] }
              : appointment
          );
        }
      }
      if (deleted !== undefined) {
        data = data.filter((appointment) => appointment.id !== deleted);
      }
      return { data };
    });
  }
  render() {
    const { data, currentDate } = this.state;

    return (
      <div>
        <Paper>
          <Scheduler data={data} height={360}>
            <ViewState
              currentDate={currentDate}
              onCurrentDateChange={this.currentDateChange}
            />
            <EditingState onCommitChanges={this.commitChanges} />
            <IntegratedEditing />
            <WeekView startDayHour={6} endDayHour={19} />
            <Toolbar />
            <DateNavigator />
            <TodayButton />
            <Appointments />
            <AppointmentTooltip showDeleteButton />
            <DragDropProvider />
          </Scheduler>
        </Paper>
      </div>
    );
  }
}
