import React from "react";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

describe("Course List Row component test", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);

    expect(wrapper.exists()).toBe(true);
  });

  it("should render one cell with colspan = 2 when textSecondCell null", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell={null} />);

    expect(wrapper.find("tr").children()).toHaveLength(1);
    expect(wrapper.find("tr").childAt(0).html()).toEqual('<th style="background-color:#deb5b545" colSpan="2">test</th>');
  });

  it("should render one cell with colspan = 2 when textSecondCell is null", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell={null} />);
  
    expect(wrapper.find("th").props()).toEqual({
      style: { backgroundColor: "#deb5b545" },
      colSpan: 2,
      children: "test",
    });
  });
  
});
