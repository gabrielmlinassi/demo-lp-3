import MyImage from "@/shared/MyImage";

const Result = () => {
  return (
    <div className="space-y-8 py-12">
      <div className="w-3/4 mx-auto pb-8">
        <div className="text-4xl font-medium text-left text-[#2263A3]">
          Thank You!
        </div>
      </div>
      <MyImage
        className="w-3/4 mx-auto"
        src="/assets/finished-1.svg"
        alt="welcome message"
      />
      <MyImage
        className="w-3/4 mx-auto"
        src="/assets/finished-2.svg"
        alt="welcome message"
      />
    </div>
  );
};

export default Result;
