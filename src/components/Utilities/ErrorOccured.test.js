import ErrorOccurred from "./ErrorOccured";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

test("renders ErrorOccurred", () => {
    render(<ErrorOccurred />);
    expect(
        screen.getByText(
            /An error while searching for books, please try again later/i
        )
    ).toBeInTheDocument();
});