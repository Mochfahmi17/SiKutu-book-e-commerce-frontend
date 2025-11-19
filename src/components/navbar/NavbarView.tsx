import Logo from "../Logo";
import CategoryMenu from "./CategoryMenu";
import SearchBar from "./SearchBar";
import IconButtons from "./IconButtons";
import AuthButtons from "./AuthButtons";

const NavbarView = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-white py-3 shadow-sm lg:py-6">
      <div className="container mx-auto px-[5%] lg:px-[3%]">
        <nav className="flex items-center gap-8">
          <div className="flex flex-1 items-center justify-between gap-6 lg:gap-12">
            <Logo />
            <CategoryMenu />
            <SearchBar />
            <IconButtons />
          </div>

          <div className="hidden h-8 w-px bg-gray-300 lg:block" />

          <AuthButtons />
        </nav>
      </div>
    </header>
  );
};

export default NavbarView;
