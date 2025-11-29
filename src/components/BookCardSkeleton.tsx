const BookCardSkeleton = () => {
  return (
    <div className="flex h-[360px] flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm md:w-full lg:h-[380px]">
      <div className="flex aspect-6/8 animate-pulse flex-col items-center justify-center gap-2 overflow-hidden bg-gray-100"></div>

      <div className="flex flex-1 flex-col px-3 py-3">
        <div className="space-y-2">
          <div className="w-16 animate-pulse rounded-full bg-gray-100 py-1" />

          <div className="w-36 animate-pulse rounded-full bg-gray-100 py-2" />
          <div className="w-16 animate-pulse rounded-full bg-gray-100 py-2" />
        </div>

        <div className="mt-auto">
          <div className="w-20 animate-pulse rounded-full bg-gray-100 py-2.5" />
        </div>
      </div>
    </div>
  );
};

export default BookCardSkeleton;
