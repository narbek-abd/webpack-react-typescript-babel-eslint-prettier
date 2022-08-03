import { render, screen } from "@testing-library/react";
import App from "./App";

test("should not display a list", () => {
	render(<App />);

	expect(screen.queryByText("1")).not.toBeInTheDocument();
	screen.debug();
});


