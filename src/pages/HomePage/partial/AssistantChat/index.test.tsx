import type { TMessage } from "@/types";
import { fireEvent, render, screen } from "@testing-library/react";
import AssistantChat from ".";

describe("AssistantChat", () => {
  const setup = (conversation: TMessage[] = []) => {
    const setConversation = jest.fn();
    render(
      <AssistantChat
        conversation={conversation}
        setConversation={setConversation}
      />
    );
    return { setConversation };
  };

  it("renders conversation messages", () => {
    const messages: TMessage[] = [
      { id: 1, content: "Hello", owner: "assistant" },
      { id: 2, content: "Hi there", owner: "user" },
    ];
    setup(messages);

    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByText("Hi there")).toBeInTheDocument();
  });

  it("updates input value when typing", () => {
    setup();

    const input = screen.getByPlaceholderText(
      /Type your question here/
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: "Test message" } });

    expect(input.value).toBe("Test message");
  });

  it("calls setConversation when clicking send button", () => {
    const { setConversation } = setup([
      { id: 1, content: "Hello", owner: "assistant" },
    ]);

    const input = screen.getByPlaceholderText(/Type your question here/);
    fireEvent.change(input, { target: { value: "New message" } });

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(setConversation).toHaveBeenCalled();
  });

  it("calls setConversation when pressing Enter key", () => {
    const { setConversation } = setup([
      { id: 1, content: "Hello", owner: "assistant" },
    ]);

    const input = screen.getByPlaceholderText(/Type your question here/);
    fireEvent.change(input, { target: { value: "Enter message" } });
    fireEvent.keyUp(input, { key: "Enter", code: "Enter" });

    expect(setConversation).toHaveBeenCalled();
  });
});
