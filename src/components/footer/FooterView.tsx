import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterNewsLetter from "./FooterNewsLetter";

const FooterView = () => {
  return (
    <footer className="bg-gray-900 pt-20 text-gray-300">
      <div className="container mx-auto px-[5%] md:px-[3%]">
        <div className="grid gap-8 pb-20 lg:grid-cols-4">
          <FooterBrand />
          <FooterLinks />
          <FooterNewsLetter />
        </div>
        <div className="border-t border-gray-300 py-3">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Copyright IlmuGaleri. All right
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterView;
