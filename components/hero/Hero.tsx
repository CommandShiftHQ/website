import Link from "next/link";

type HeroProps = {
  heading: string;
  description: string;
};

function Hero({ heading, description }: HeroProps) {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="max-w-[740px] text-center">
        <h1 className="text-[54px] lg:text-[96px] leading-none font-heading mb-5">{heading}</h1>
        <p className="text-[18px] lg:text-[24px] text-gray-800 dark:text-gray leading-snug mb-16">{description}</p>
        <Link className="inline-flex items-center justify-center px-4 h-[44px] rounded-full border border-transparent bg-green whitespace-nowrap text-base font-medium text-black hover:bg-green-500" href="/docs">View the curriculum</Link>
      </div>
    </div>
  );
}

export default Hero;
