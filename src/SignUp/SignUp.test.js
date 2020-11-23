import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SignUp from "./SignUp";
import Images from "./Images";
import Header from "../Header/Header";
import Inputs from "./Inputs";

configure({ adapter: new Adapter() });

describe("SignUp page", () => {
  it("should render image components", () => {
    const wrapper = shallow(<SignUp />);
    expect(wrapper.find(Images).exists()).toBe(true);
  });
});
describe("SignUp page", () => {
  it("should render input componet", () => {
    const wrapper = shallow(<Inputs submitform />);
    expect(wrapper.find(Inputs)).toHaveLength(0);
  });
});
describe("SignUp page", () => {
  it("should render when it is true", () => {
    const wrapper = shallow(<SignUp />);
    // console.log(wrapper.debug());
    expect(wrapper.find(Header)).toHaveLength(1);
  });
});
