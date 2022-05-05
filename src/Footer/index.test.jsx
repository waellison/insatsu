import React from "react";
import renderer from "react-test-renderer";
import Footer from "./index";

it("renders correct footer component", () => {
  const component = renderer.create(<Footer />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
