const BookDetailSkeleton = () => {
  return (
    <section className="animate-pulse pt-20 pb-16 md:pt-24 lg:pt-28">
      <div className="container mx-auto px-[5%] md:px-[3%]">
        <div className="flex flex-wrap gap-12">
          <div className="mx-auto h-[425px] w-80 rounded-xl bg-gray-200" />

          <div className="flex-1 space-y-6">
            <div className="h-6 w-2/3 rounded bg-gray-200"></div>
            <div className="mb-8 h-5 w-1/12 rounded bg-gray-200"></div>

            <div className="space-y-3">
              <div className="h-4 w-1/5 rounded bg-gray-200"></div>
              <div className="h-3 w-full rounded bg-gray-200"></div>
              <div className="h-3 w-full rounded bg-gray-200"></div>
              <div className="h-3 w-3/4 rounded bg-gray-200"></div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="h-4 w-1/6 rounded bg-gray-200"></div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="space-y-2">
                    <div className="h-3 w-1/6 rounded bg-gray-200"></div>
                    <div className="h-3 w-1/3 rounded bg-gray-200"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14 flex gap-4">
              <div className="h-8 w-36 rounded-md bg-gray-200"></div>
              <div className="h-8 w-40 rounded-md bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetailSkeleton;
