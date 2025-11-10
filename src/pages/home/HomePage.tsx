import Banner from "../../components/home/Banner";
import BestSellers from "../../components/home/BestSellers";
import FeatureAuthor from "../../components/home/FeatureAuthor";
import FeatureCategory from "../../components/home/FeatureCategory";
import News from "../../components/home/News";

export default function HomePage() {
  return (
    <>
      <Banner />
      <FeatureCategory />
      <BestSellers />
      <FeatureAuthor />
      <News />
    </>
  );
}
