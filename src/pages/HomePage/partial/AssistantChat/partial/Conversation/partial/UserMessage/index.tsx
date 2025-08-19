import type { FC, PropsWithChildren } from "react";
import MessageBody from "../MessageBody";

const UserMessage: FC<PropsWithChildren> = ({ children }) => (
  <MessageBody className="w-9/10 self-end">{children}</MessageBody>
);

export default UserMessage;
