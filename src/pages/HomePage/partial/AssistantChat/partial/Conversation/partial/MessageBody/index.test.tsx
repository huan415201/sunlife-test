import { render, screen } from "@testing-library/react";
import MessageBody from ".";

describe("MessageBody", () => {
  it("should render children content", () => {
    render(<MessageBody>Test Message</MessageBody>);
    expect(screen.getByText("Test Message")).toBeInTheDocument();
  });

  it("should merge custom className with default classes", () => {
    const { container } = render(
      <MessageBody className="custom-class">Test Message</MessageBody>
    );
    const messageDiv = container.firstChild as HTMLElement;

    // Check if default classes are present
    expect(messageDiv).toHaveClass("bg-white");
    expect(messageDiv).toHaveClass("py-3");
    expect(messageDiv).toHaveClass("px-3");
    expect(messageDiv).toHaveClass("border");
    expect(messageDiv).toHaveClass("border-gray-200");
    expect(messageDiv).toHaveClass("rounded-md");
    expect(messageDiv).toHaveClass("text-sm");
    expect(messageDiv).toHaveClass("w-full");

    // Check if custom class is added
    expect(messageDiv).toHaveClass("custom-class");
  });

  it("should render without className prop", () => {
    const { container } = render(<MessageBody>Test Message</MessageBody>);
    const messageDiv = container.firstChild as HTMLElement;

    // Verify default classes are present without custom class
    expect(messageDiv).toHaveClass("bg-white");
    expect(messageDiv).toHaveClass("py-3");
    expect(messageDiv).toHaveClass("px-3");
    expect(messageDiv).toHaveClass("border");
    expect(messageDiv).toHaveClass("border-gray-200");
    expect(messageDiv).toHaveClass("rounded-md");
    expect(messageDiv).toHaveClass("text-sm");
    expect(messageDiv).toHaveClass("w-full");
  });

  it("should render complex children content", () => {
    render(
      <MessageBody>
        <div data-testid="child-div">
          <span>Nested Content</span>
          <button>Click me</button>
        </div>
      </MessageBody>
    );

    expect(screen.getByTestId("child-div")).toBeInTheDocument();
    expect(screen.getByText("Nested Content")).toBeInTheDocument();
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
});
