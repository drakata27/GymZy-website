import { Button } from "../ui/button";

const Hero = () => {
  const joinBetaTest = () => {
    window.open("https://testflight.apple.com/join/S9Rx1XtM", "_blank");
  };
  return (
    <div className="p-3 space-x-1">
      <h1 className="font-bold text-4xl p-3 text-blue-800">GymZy</h1>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
        <img
          src="/images/hero/journal.png"
          alt="Journal Screen"
          className="w-full md:w-1/2 xl:w-1/3 2xl:w-1/4"
        />

        <div className="space-y-3 md:w-1/2 text-center md:text-left">
          <h2 className="font-bold text-2xl">Your Workout Journal</h2>
          <p className="text-gray-500">
            Your ultimate workout companion — log sets, stay consistent, and get
            stronger with GymZy.
          </p>

          <Button
            className="hover:cursor-pointer hover:bg-blue-400  bg-blue-500 rounded-3xl"
            onClick={joinBetaTest}
          >
            Get Beta
          </Button>

          {/* <img
            src="/images/hero/appstore-dark.png"
            alt="Download on the App Store"
            className="w-40 mx-auto md:mx-0"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
