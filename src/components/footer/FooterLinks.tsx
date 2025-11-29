import { Link } from "react-router";

const footerMenu = [
  { href: "/about-us", label: "Tentang Kami" },
  { href: "/career", label: "Karir" },
  { href: "/contact", label: "Kontak" },
  { href: "/partners", label: "Mitra Kami" },
];

const FooterLinks = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">Tentang IlmuGaleri</h3>
      <ul className="space-y-3 text-sm">
        {footerMenu.map((item, i) => (
          <li key={i}>
            <Link
              to={item.href}
              className="transition-colors duration-300 hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
