import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/(root)/page";

it("should have Pokemon colours text", async () => {
  render(<Home />);

  await waitFor(() => {
    const myEl = screen.getByText("Pokemon colours");
    expect(myEl).toBeInTheDocument();
  });
});

it("should ha heading", async () => {
  render(<Home />);

  await waitFor(() => {
    const myEl = screen.getByRole("heading", {
      name: "Pokemon Gender",
    });
    expect(myEl).toBeInTheDocument();
  });
});

it("should have List of all the colours text", async () => {
  render(<Home />);

  await waitFor(() => {
    const myEl = screen.getByText("List of all the colours");
    expect(myEl).toBeInTheDocument();
  });
});

it("should have Genderless count title", async () => {
  render(<Home />);

  await waitFor(() => {
    const myEl = screen.getByText("Genderless count");
    expect(myEl).toBeInTheDocument();
  });
});

it("should have Female count title", async () => {
  render(<Home />);

  await waitFor(() => {
    const myEl = screen.getByText(/Female count/i);
    expect(myEl).toBeInTheDocument();
  });
});
