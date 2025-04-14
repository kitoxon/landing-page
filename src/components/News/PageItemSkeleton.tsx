export default function NewsCardSkeleton() {
  return (
    <div className="animate-pulse rounded-[10px] shadow-md bg-white flex flex-col h-full">
      <div className="bg-gray-200 h-[200px] w-full rounded-t-lg" />
      <div className="flex-1 px-5 pt-10 pb-[30px] flex flex-col gap-5">
        <div className="h-4 bg-gray-200 w-1/2 rounded" />
        <div className="h-5 bg-gray-200 w-full rounded" />
        <div className="h-4 bg-gray-200 w-5/6 rounded" />
      </div>
    </div>
  );
}
