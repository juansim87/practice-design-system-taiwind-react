import { Button } from "../Button";

export const Hero = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center py-16 px-5 gap-8">
            <h1 className="text-[36px] md:text-[48px] text-center font-bold">
                Make Your First <span className="text-primary">Impression</span> Count
            </h1>
            <p className="w-full md:w-[55%] text-[18px] md:text-[20px]  text-secondary text-center">powerful seal-serve product analytics to help you convert engage and retain more users </p>
            <div className="flex gap-3">
                <Button text="Get start" className="text-white bg-primary"/>
                <Button text="Watch demo" className="text-secondary"/>
            </div>
        </div>
    );
};
