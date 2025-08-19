import type { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type TMessageBodyProps = {
  className?: string;
};

const MessageBody: FC<PropsWithChildren<TMessageBodyProps>> = ({
  children,
  className,
}) => (
  <div
    className={twMerge(
      "bg-white py-3 px-3 border border-gray-200 rounded-md text-sm w-full",
      className
    )}
  >
    {children}
  </div>
);

export default MessageBody;
