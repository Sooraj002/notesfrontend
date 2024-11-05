const navContent = {
  navLinks: [
    { name: "Home", path: "/home" },
    { name: "Kquiz", path: "/kquiz" },
    { name: "Society", path: "https://kaizentechsociety.xyz" },
  ],
  navBtns: [
    { name: "logout", classes: "bg-red-500", Icon: () => <></> },
    // {
    //     name: "",
    //     classes: "bg-gray-500 hover:bg-gray-600",
    //     // Icon: () => <RiSystemSettings2Fill />,
    // },
  ],
};

const Navbar = () => {
  return (
    <div className="grid grid-cols-[3fr,2fr] text-white w-full backdrop-blur-lg bg-none gap-4 p-4 justify-between text-xl transition duration-500 ease-in-out fixed z-20 bg-[#21204F] ">
      <div className="flex items-center pl-10">logo</div>
      <div className="flex justify-between gap-10">
        <div className="flex gap-8 text-center items-center justify-center">
          {navContent.navLinks.map((link) => (
            <a key={link.name} href={link.path} className="hover:underline">
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex gap-8">
          {navContent.navBtns.map((btn) => (
            <button
              key={btn.name}
              className={`hover:bg-[#853232] rounded-md px-4 py-2 transition duration-200 ease-in-out ${btn.classes}`}
              // onClick={() => btn.action()}
            >
              {btn.name}
              {btn.Icon && typeof btn.Icon === "function" && btn.Icon()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
