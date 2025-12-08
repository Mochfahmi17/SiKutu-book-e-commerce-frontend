import formatMoney from "../../../utils/formatMoney";

type BookTitlePriceProps = {
  title: string;
  price: number;
};

const BookTitlePrice = ({ title, price }: BookTitlePriceProps) => {
  return (
    <div className="mb-8 space-y-2">
      <h1 className="text-xl font-bold lg:text-2xl">{title}</h1>
      <h2 className="text-lg font-bold lg:text-xl">{formatMoney(price)}</h2>
    </div>
  );
};

export default BookTitlePrice;
