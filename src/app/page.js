import Navigation from "@/components/Navigation";
import WatchOptions from "@/components/WatchOptions";
import BuyNowButton from "@/components/BuyNowButton";

import PageIndicator from "@/components/PageIndicator";

export default function Home() {
  return (
    <main className="bg-[#B6CCDA] max-w-screen-xl mx-auto ">
      <div>
        <Navigation />
        <div className="grid grid-cols-[1fr_1fr] items-center">
          <div className="grid gap-10">
            <h1 className="text-white text-6xl leading-tight">
              <strong>The Perfect Moment</strong> <br />
              Between Past And Future.
            </h1>
            <BuyNowButton />
          </div>
          <WatchOptions />
        </div>
        <div className="grid grid-cols-[1fr_1fr_0.1fr]">
          <PageIndicator />
        </div>
      </div>
    </main>
  );
}
