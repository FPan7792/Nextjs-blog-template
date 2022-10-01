import Link from "next/link";
import list from "../utils/lists.json";

const NavBar = () => {
  // All sections for navigation appearing in navbar
  const { navigation } = list;

  return (
    <header className="h-[20%] max-h-20 flex justify-between items-center w-full border-b-solid border-b-2 ">
      <Link href={"/"}>
        <span className="cursor-pointer">Blog template</span>
      </Link>
      <nav className="flex justify-around items-center w-[70%] ">
        {navigation.map((section, index) => {
          return (
            <Link key={index} href={section.route}>
              <button className=" border-solid border-2 px-2 rounded text-base">
                {section.title}
              </button>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
export default NavBar;
