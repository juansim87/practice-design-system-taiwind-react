import arrowDown from "../assets/images/icons/arrow-down.png";

export const QuestionBox = () => {
    return (
        <div className="w-full md:w-[50%] flex justify-between items-center py-4 px-6 md:p-5.25 bg-secondary/5 rounded-lg">
            <p className="md:text-[20px]">Is there a free trial available?</p>
            <div className="w-[24px]">
                <img className="w-full" src={arrowDown} />
            </div>
        </div>
    );
};
