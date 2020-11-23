import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DetailedMain from "./DetailedMain";
import JobsHeader from "../Jobs/JobsHeader/JobsHeader";
import DetailedJobs from "./DetailedJobs";
import DetailedRows from "./DetailedRows/DetailedRows";
import JobFooter from "../Jobs/JobFooter/JobFooter";

configure({ adapter: new Adapter() });

describe("DetailedMain", () => {
  it("should render all detailedMain component", () => {
    const wrapper = shallow(<DetailedMain />);
    expect(wrapper.find(DetailedJobs).exists()).toBe(true);
    expect(wrapper.find(JobsHeader).exists()).toBe(true);
    expect(wrapper.find(DetailedRows).exists()).toBe(true);
    expect(wrapper.find(JobFooter).exists()).toBe(true);
  });
});
