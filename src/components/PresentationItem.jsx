export const PresentationItem = ({ src, className}) => {
    return (
        <div className={`flex flex-col items-center ${className} px-3 gap-y-7 md:gap-y-10`}>
            <div className="w-full flex flex-col gap-4.5 md:gap-5.75 items-center md:items-start">
                <h4 className="w-[50%] md:w-full text-[18px] leading-[24px] md:text-[25px] font-bold text-center md:text-start">Make the best hire in half the time</h4>
                <p className="md:w-[75%] text-[16px] text-center text-secondary leading-[24px] md:leading-[32px] md:text-start">
                    Move faster on a recruting platform that automated and manual tasks like scheduling
                    interviews and getting approvals
                </p>
            </div>
            <div className="w-[252px] md:w-[360px]">
                <img src={src} className="w-full"/>
            </div>
        </div>
    );
};
