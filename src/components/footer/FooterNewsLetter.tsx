import { IoIosSend } from "react-icons/io";

const FooterNewsLetter = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">Ikuti Kabar Terbaru</h3>
      <div className="relative overflow-hidden rounded-md">
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-gray-400 py-2 pr-12 pl-3 text-sm text-white shadow-sm placeholder:text-gray-300 focus-visible:outline-none disabled:opacity-50"
        />
        <button className="absolute right-0 h-full bg-white px-2 text-gray-800">
          <IoIosSend className="size-6" />
        </button>
      </div>
    </div>
  );
};

export default FooterNewsLetter;
