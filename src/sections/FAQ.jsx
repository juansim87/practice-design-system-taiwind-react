import { QuestionBox } from "../components/QuestionBox";

export const FAQ = () => {
    return (
        <div className="w-full flex flex-col gap-8 md:gap-16 px-4">
            <div className="flex flex-col items-center gap-3 md:gap-5">
                <h2 className="text-[36px] text-center font-bold leading-10">Frequently asked question</h2>
                <p className="text-[16px] md:text-[20px] text-secondary">Everything you need to know about jahedin</p>
            </div>
            <div className="flex flex-col gap-3 md:gap-8 items-center">
                <QuestionBox/>
                <QuestionBox/>
                <QuestionBox/>
                <QuestionBox/>
            </div>
        </div>
    );
};
