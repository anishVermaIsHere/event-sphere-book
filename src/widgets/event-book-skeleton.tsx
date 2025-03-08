import Section from "@/components/common/section";
import { Skeleton } from "@/components/ui/skeleton";

const EventBookSkeleton = () => {
  return (
    <Section classes="flex justify-center py-5">
    <div className="space-y-2 w-[450px] rounded-lg bg-white py-4 px-6">
      <Skeleton className="h-4 w-full bg-gray-300" />
      <div className="space-y-2">
        <Skeleton className="h-40 w-full bg-gray-100" />
        <Skeleton className="h-12 w-full bg-gray-100" />
        <Skeleton className="h-12 w-full bg-gray-100" />
      </div>
      <div className="mt-5">
        <Skeleton className="h-8 w-full bg-gray-300" />
      </div>
      <div className="mt-5">
        <Skeleton className="h-8 w-full bg-gray-300" />
      </div>
    </div>
    </Section>
  );
};

export default EventBookSkeleton;
