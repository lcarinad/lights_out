import React from "react";
import { render } from "@testing-library/react";
import Board from "./App";

it("should render", () => {
  render(<Board nrows={3} ncols={3} />);
});
