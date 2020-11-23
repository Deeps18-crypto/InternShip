import React from "react"
import {configure,shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16";
import ContactProg from "./ContactProgress/ContactProg";
import LogoHeader from "../Header/LogoHeader/LogoHeader";
import ContactInfo from "./ContactInfo-Header/ContactInfo";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import OtpPage from "./OtpPage/OtpPage";
import Otp from "./Otp"

configure({ adapter: new Adapter})

describe("Otp",()=>{
    it("should render all the Otp Components",()=>{
        const wrapper = shallow(<Otp/>)
        expect(wrapper.find(ContactProg).exists()).toBe(true)
        expect(wrapper.find(LogoHeader).exists()).toBe(true)
        expect(wrapper.find(ArrowBackIcon).exists()).toBe(true)
        expect(wrapper.find(OtpPage).exists()).toBe(true)
        expect(wrapper.find(ContactInfo).exists()).toBe(true)
    })
})