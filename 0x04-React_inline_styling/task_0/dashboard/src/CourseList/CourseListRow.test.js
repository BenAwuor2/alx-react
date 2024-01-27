import React from "react";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

describe("Course List Row component test", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);

    expect(wrapper.exists()).toBe(true);
  });

  it("should render one cell with colspan = 2 when textSecondCell is null and isHeader is true", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell={null} />);
  
    const thElement = wrapper.find("th");
    expect(thElement.exists()).toBe(true); // Check if th element exists
    expect(thElement.prop("style")).toEqual({ backgroundColor: "#deb5b545" }); // Check background color style
    expect(thElement.prop("colSpan")).toBe(2); // Check colspan value
    expect(thElement.text()).toBe("test"); // Check text content
  });
});
