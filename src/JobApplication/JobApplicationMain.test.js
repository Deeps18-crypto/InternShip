import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import JobApplicationMain from "./JobApplicationMain";
import JobApplication from "./JobApplication";
import DetailedRows from "../DetailedJobs/DetailedRows/DetailedRows";
import JobFooter from "../Jobs/JobFooter/JobFooter";
import JobsHeader from "../Jobs/JobsHeader/JobsHeader";

configure({ adapter: new Adapter() });

describe("JobApplicationMain", () => {
  it("should render the JobApplication component", () => {
    const wrapper = shallow(<JobApplicationMain />);
    expect(wrapper.find(JobApplication).exists()).toBe(true);
    expect(wrapper.find(DetailedRows).exists()).toBe(true);
    expect(wrapper.find(JobFooter).exists()).toBe(true);
    expect(wrapper.find(JobsHeader).exists()).toBe(true);
  });
});
