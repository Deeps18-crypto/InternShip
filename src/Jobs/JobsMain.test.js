import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import JobsMain from "./JobsMain";
import FilterDetail from "./Filter/FilterDetail";
import JobsHeader from "./JobsHeader/JobsHeader";
import Search from "./SearchBar/Search";
import JobFooter from "./JobFooter/JobFooter";
import Details from "./JobDetails/Details";
import DatePickers from "./DatePicker/DatePickers";
import Pagination from "./Pagination/Pagination";

configure({ adapter: new Adapter() });

describe("JobsMain", () => {
  it("should render JobsMain Componet", () => {
    const wrapper = shallow(<JobsMain />);
    expect(wrapper.find(FilterDetail).exists()).toBe(true);
    expect(wrapper.find(JobsHeader).exists()).toBe(true);
    expect(wrapper.find(JobFooter).exists()).toBe(true);
    expect(wrapper.find(Details).exists()).toBe(true);
    expect(wrapper.find(DatePickers).exists()).toBe(true);
    expect(wrapper.find(Pagination).exists()).toBe(true);
    expect(wrapper.find(Search).exists()).toBe(true);
  });
});
