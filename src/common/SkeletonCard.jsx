export const SkeletonCard = () => (
  <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
    <div className="h-36 bg-gray-200 animate-pulse" />
    <div className="p-3 space-y-2">
      <div className="h-8 bg-gray-100 rounded-lg animate-pulse" />
      <div className="flex justify-end">
        <div className="h-7 w-16 bg-gray-100 rounded-lg animate-pulse" />
      </div>
    </div>
  </div>
);
