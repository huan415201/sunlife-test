import { render, screen } from "@testing-library/react";
import AssistantMessage from ".";

describe("AssistantMessage", () => {
  it("should render the message content correctly", () => {
    render(<AssistantMessage>Hello, how can I help you?</AssistantMessage>);
    expect(screen.getByText("Hello, how can I help you?")).toBeInTheDocument();
  });

  it("should render complex children content correctly", () => {
    render(
      <AssistantMessage>
        <div data-testid="complex-content">
          <p>First line</p>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </div>
      </AssistantMessage>
    );

    expect(screen.getByTestId("complex-content")).toBeInTheDocument();
    expect(screen.getByText("First line")).toBeInTheDocument();
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("should have correct layout structure", () => {
    const { container } = render(
      <AssistantMessage>Test message</AssistantMessage>
    );

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toHaveClass("flex", "items-start", "gap-2");
  });
});
