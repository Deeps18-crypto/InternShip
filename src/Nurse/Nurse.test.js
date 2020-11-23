import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Nurse from "./Nurse";

configure({ adapter: new Adapter() });

describe("Nurse items", () => {
  it("should render the p tag", () => {
    const wrapper = shallow(<Nurse />);

    expect(wrapper.find("p").text()).toBe("Sign up as a Nurse");
  });
});

describe("Nurse items", () => {
  it("should render h2", () => {
    const wrapper = shallow(<Nurse />);
    expect(wrapper.find("h2").text()).toBe("Nurse");
  });
});
describe("Nurse items", () => {
  it("should render the button", () => {
    const wrapper = shallow(<Nurse />);
    expect(wrapper.find("button").text()).toBe("Sign Up");
  });
});
