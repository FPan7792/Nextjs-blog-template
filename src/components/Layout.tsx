import NavBar from "./NavBar";
import Footer from "./Footer";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col h-full ">
      <NavBar />
      <div className="flex-grow h-full my-3">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
