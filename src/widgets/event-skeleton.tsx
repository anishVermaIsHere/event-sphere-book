import { Skeleton } from "@/components/ui/skeleton";

const EventSkeleton = () => {
  return (
    <div className="space-y-2 w-full rounded-lg bg-white py-4 px-6">
      <Skeleton className="h-4 w-full bg-gray-300" />
      <Skeleton className="h-2 w-full bg-gray-200 mb-5" />
      <div className="space-y-2">
        <Skeleton className="h-12 w-full bg-gray-100" />
        <Skeleton className="h-12 w-full bg-gray-100" />
      </div>
      <div className="mt-5">
        <Skeleton className="h-8 w-full bg-gray-300" />
      </div>
    </div>
  );
};

export default EventSkeleton;
