import React from "react"
import {configure,shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16";
import Progressbar from "./Progressbar/Progressbar";
import InfoHeader from "./Basicinfo-Header/InfoHeader";
import LogoHeader from "../Header/LogoHeader/LogoHeader";
import Info from "./Info/Info";
import BasicInfo from "./BasicInfo"

configure({ adapter : new Adapter()})

describe("BasicInfo",()=>{
    it("should render the BasicInfo Component",()=>{
        const wrapper = shallow(<BasicInfo/>)
        expect(wrapper.find(Progressbar).exists()).toBe(true)
        expect(wrapper.find(InfoHeader).exists()).toBe(true)
        expect(wrapper.find(LogoHeader).exists()).toBe(true)
        expect(wrapper.find(Info).exists()).toBe(true)
    })
})
