import { Link } from "react-router";
import type { Sale } from "../../../types";

type SalesBannerContent = {
  item: Sale;
};

const SalesBannerContent = ({ item }: SalesBannerContent) => {
  return (
    <Link
      to={`promo/${item.slug}`}
      className="block aspect-4/1 w-full overflow-hidden rounded-xl"
    >
      <img
        src={`${import.meta.env.VITE_SERVER_URL}/uploads/banner/${item.bannerImageSale}`}
        alt={`${item.name}`}
        className="h-full w-full object-cover object-center"
      />
    </Link>
  );
};

export default SalesBannerContent;
