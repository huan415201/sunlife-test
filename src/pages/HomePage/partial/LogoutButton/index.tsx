import type { FC } from "react";
import { FaInfoCircle } from "react-icons/fa";

type TLogoutButtonProps = {
  resetConversation: () => void;
};

const LogoutButton: FC<TLogoutButtonProps> = ({ resetConversation }) => {
  return (
    <button
      onClick={resetConversation}
      className="flex items-center gap-1 bg-white rounded-full py-2 px-4 cursor-pointer hover:bg-gray-100 transition-colors self-end mb-8"
    >
      <FaInfoCircle size={20} />
      <span className="text-background-dark-blue font-medium">Log out</span>
    </button>
  );
};

export default LogoutButton;
