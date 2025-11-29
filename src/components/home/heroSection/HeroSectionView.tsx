import SalesBannerFallback from "./SalesBannerFallback";
import SalesBannerSlide from "./SalesBannerSlide";
import { useGetAllActiveSalesQuery } from "../../../store/sales/salesApi";

const HeroSectionView = () => {
  const {
    data: salesResponse,
    isLoading,
    refetch,
    isError,
  } = useGetAllActiveSalesQuery();

  const dataSales = salesResponse ? salesResponse.data : [];
  const isEmpty = !isLoading && !isError && dataSales.length === 0;
  return (
    <section className="pt-20 pb-8 md:pt-24 lg:pt-28">
      <div className="container mx-auto px-[5%] md:px-[3%]">
        <div className="">
          {isLoading || isError || isEmpty ? (
            <SalesBannerFallback
              isLoading={isLoading}
              isError={isError || isEmpty}
              refetch={refetch}
            />
          ) : (
            <SalesBannerSlide data={dataSales} />
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSectionView;
