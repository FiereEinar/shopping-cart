import { Skeleton } from '@/components/ui/skeleton';

export default function LoadingPage() {
  const cardAmount = new Array(20).fill(0);

  return (
    <div className="flex flex-col gap-2">
      <nav className="flex justify-between items-center p-2 mt-5">
        <Skeleton className="bg-gray-300 h-8 w-[100px]" />
        <Skeleton className="bg-gray-300 h-8 w-[200px]" />
      </nav>
      <div className="pl-2">
        <Skeleton className="bg-gray-300 h-8 w-[200px]" />
      </div>
      <div className="p-2">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-3 gap-y-5">
          {cardAmount.map((card, i) => (
            <Skeleton key={i} className="bg-gray-300 h-52" />
          ))}
        </div>
      </div>
    </div>
  );
}
