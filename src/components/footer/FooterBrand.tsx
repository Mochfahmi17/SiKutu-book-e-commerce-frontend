import { Link } from "react-router";

const FooterBrand = () => {
  return (
    <div className="space-y-4 lg:col-span-2">
      <Link to="/" className="inline-block text-2xl font-bold text-white">
        IlmuGaleri
      </Link>
      <p className="text-sm">
        Toko buku online yang menghadirkan pilihan buku terbaik untuk mendukung
        perjalanan belajarmu. Jelajahi koleksi kami dan temukan inspirasi dalam
        setiap halaman—mulai dari ilmu pengetahuan, pengembangan diri, hingga
        karya kreatif yang memperluas wawasan.
      </p>
    </div>
  );
};

export default FooterBrand;
