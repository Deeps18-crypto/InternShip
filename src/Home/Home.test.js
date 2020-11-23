import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Facilites from "../Facilites/Facilites";
import Header from "../Header/Header";
import Nurse from "../Nurse/Nurse";
import Home from "./Home";

configure({ adapter: new Adapter() });

describe("Home page", () => {
  it(" should render all comp", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(Facilites).exists()).toBe(true);
    expect(wrapper.find(Nurse).exists()).toBe(true);
    expect(wrapper.find(Header).exists()).toBe(true);
  });
});
