const ProductNotFound = () => {
  return (
    <div>
      <div className="container mx-auto flex min-h-screen items-center justify-center px-[5%] md:px-[3%]">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-xl font-bold">Katalog tidak ditemukan</h2>
          <img
            src="/images/catalog-not-found.png"
            alt="Catalog Not Found"
            className="w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductNotFound;
