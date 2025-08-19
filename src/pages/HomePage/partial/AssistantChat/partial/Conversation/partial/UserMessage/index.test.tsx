import { render, screen } from "@testing-library/react";
import UserMessage from ".";

describe("UserMessage", () => {
  it("should render children content correctly", () => {
    render(<UserMessage>Hello from user</UserMessage>);
    expect(screen.getByText("Hello from user")).toBeInTheDocument();
  });

  it("should apply custom UserMessage classes", () => {
    const { container } = render(<UserMessage>Test message</UserMessage>);
    const wrapper = container.firstChild as HTMLElement;

    // Check classes from UserMessage
    expect(wrapper).toHaveClass("w-9/10");
    expect(wrapper).toHaveClass("self-end");

    // Check default classes from MessageBody
    expect(wrapper).toHaveClass("bg-white");
    expect(wrapper).toHaveClass("py-3");
    expect(wrapper).toHaveClass("px-3");
    expect(wrapper).toHaveClass("border");
    expect(wrapper).toHaveClass("border-gray-200");
    expect(wrapper).toHaveClass("rounded-md");
    expect(wrapper).toHaveClass("text-sm");
  });

  it("should render complex children content", () => {
    render(
      <UserMessage>
        <div data-testid="nested-content">
          <span>Nested text</span>
          <button>Click</button>
        </div>
      </UserMessage>
    );

    expect(screen.getByTestId("nested-content")).toBeInTheDocument();
    expect(screen.getByText("Nested text")).toBeInTheDocument();
    expect(screen.getByText("Click")).toBeInTheDocument();
  });
});
