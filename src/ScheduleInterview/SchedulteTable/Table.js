import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  AppointmentTooltip,
  AppointmentForm,
  Appointments,
  TodayButton,
  DragDropProvider,
  EditRecurrenceMenu,
  ConfirmationDialog,
} from "@devexpress/dx-react-scheduler-material-ui";
import { Link } from "react-router-dom";
import "./Table.css";
import {
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import { Mockdata } from "./Mockdata";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: Mockdata,
      book: false,
      currentDate: new Date(),
      addedAppointment: {},
      appointmentChanges: {},
      editingAppointment: undefined,
    };
    this.commitChanges = this.commitChanges.bind(this);
    this.changeAddedAppointment = this.changeAddedAppointment.bind(this);
    this.changeAppointmentChanges = this.changeAppointmentChanges.bind(this);
    this.changeEditingAppointment = this.changeEditingAppointment.bind(this);
    this.currentDateChange = (currentDate) => {
      this.setState({ currentDate });
    };
  }

  changeAddedAppointment(addedAppointment) {
    let add = addedAppointment.startDate;
    sessionStorage.setItem("startDate", add);
    this.setState({
      addedAppointment: addedAppointment,
      book: true,
    });
    console.log("add >>>>>>>>", add);
  }

  changeAppointmentChanges(appointmentChanges) {
    const diffInMilliseconds = Math.abs(
      new Date(appointmentChanges.startDate) -
        new Date(appointmentChanges.endDate)
    );
    if (diffInMilliseconds <= 30 * 60 * 1000) {
      this.setState({ appointmentChanges });
    } else {
      this.setState((previousValue) => previousValue);
    }
  }

  changeEditingAppointment(editingAppointment) {
    this.setState({ editingAppointment });
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
        data = data.map((appointment) =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        );
      }
      if (deleted !== undefined) {
        data = data.filter((appointment) => appointment.id !== deleted);
      }
      console.log(data);
      return { data };
    });
  }
  render() {
    const {
      book,
      currentDate,
      data,
      addedAppointment,
      appointmentChanges,
      editingAppointment,
    } = this.state;
    console.log(this.state);
    return (
      <div>
        <Paper>
          <Scheduler data={data} height={560}>
            <ViewState
              currentDate={currentDate}
              onCurrentDateChange={this.currentDateChange}
            />

            <EditingState
              onCommitChanges={this.commitChanges}
              addedAppointment={addedAppointment}
              onAddedAppointmentChange={this.changeAddedAppointment}
              appointmentChanges={appointmentChanges}
              onAppointmentChangesChange={this.changeAppointmentChanges}
              editingAppointment={editingAppointment}
              onEditingAppointmentChange={this.changeEditingAppointment}
            />

            <IntegratedEditing />
            <WeekView startDayHour={9} endDayHour={15} />
            <Toolbar />
            <DateNavigator />
            <TodayButton />
            <Appointments />
            <AppointmentTooltip showDeleteButton showOpenButton />
            <DragDropProvider />
            <AppointmentForm />
          </Scheduler>
        </Paper>
        <p className="scheduleInterview__para">
          Still worried about what your first Interview with NURSD team would
          look like?
        </p>
        <div className="scheduleInterview__video">
          <PlayCircleOutlineIcon />
          <h4>Watch a demo Interview</h4>
        </div>
        <Link to="/InterviewSchedule">
          {book ? (
            <button className="scheduleInterview__button">Book</button>
          ) : (
            <button disabled className="scheduleInterview__button">
              Book
            </button>
          )}
        </Link>
      </div>
    );
  }
}
{
  /* <EditingState
              onCommitChanges={
                this.state.data.length < 1 ? this.commitChanges : () => {}
              }
              addedAppointment={
                this.state.data.length < 1 ? addedAppointment : () => {}
              }
              onAddedAppointmentChange={
                this.state.data.length < 1
                  ? this.changeAddedAppointment
                  : () => {}
              }
              appointmentChanges={appointmentChanges}
              onAppointmentChangesChange={this.changeAppointmentChanges}
              editingAppointment={editingAppointment}
              onEditingAppointmentChange={this.changeEditingAppointment}
            /> */
}
