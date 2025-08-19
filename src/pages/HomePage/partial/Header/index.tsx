import headerLogo from "@/assets/header-logo.svg";

const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-primary h-1" />
      <div className="flex justify-center lg:justify-between items-center pt-6 pb-3 px-[120px]">
        <img
          src={headerLogo}
          alt="Sun Life"
          className="w-[127px] h-[31px] hidden lg:block"
        />
        <p className="text-2xl font-bold text-center">
          Sunny (Advisor Assistant)
        </p>
        <div className="w-[127px] hidden lg:block" />
      </div>
      <div className="bg-background-grey h-8" />
    </div>
  );
};

export default Header;
