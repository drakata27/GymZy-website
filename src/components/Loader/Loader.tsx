import { Skeleton } from "../ui/skeleton";

const Loader = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[900px] rounded-xl" />
      <div className="space-y-2">
        <div>
          {Array.from({ length: 20 }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-[900px]  mt-5" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
