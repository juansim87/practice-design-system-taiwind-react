import womanWorking from "../assets/images/pictures/woman-working.png";
import meeting from "../assets/images/pictures/meeting.png";
import presentation from "../assets/images/pictures/presentation.png";
import { PresentationItem } from "../components/PresentationItem";
import { Button } from "../components/Button";

export const Presentation = () => {
    return (
        <div className="w-full flex flex-col items-center gap-16 md:gap-24 px-3">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col gap-8">
                    <PresentationItem src={presentation} />
                    <PresentationItem src={meeting} />
                </div>
                <div className="flex flex-col md_flex-col-reverse gap-8">
                    <PresentationItem src={presentation} className="flex md:flex-col-reverse" />
                    <PresentationItem src={meeting} className=" flex md:flex-col-reverse" />
                </div>
            </div>
            <div className="flex flex-col items-center gap-8 md:gap-16 ">
                <div className="flex flex-col items-center gap-7.5 md:px-47">
                    <h3 className="text-[36px] font-bold text-center">Let’s grow together</h3>
                    <p className="text-[20px] text-secondary text-center md:w-[50%]">
                        Explore out full hiring platform with a 15 days free trial no credit card required.
                        Post jobs get candidates and manage applicants all in one place.
                    </p>
                    <Button text="Try it for free" className="bg-primary text-white" />
                </div>
                <div className="w-full md:w-[720px] flex flex-col justify-center items-center px-3">
                    <img src={womanWorking} className="w-full" />
                </div>
            </div>
        </div>
    );
};

{
    /* <div className="flex flex-col md:flex-row">
                <div className="flex flex-col">
                    <PresentationItem src={presentation} />
                    <PresentationItem src={meeting} />
                </div>
                <div className="flex md:flex-col-reverse">
                    <PresentationItem src={presentation} className="flex-col md:flex-col-reverse" />
                    <PresentationItem src={meeting} className="flex-col md:flex-col-reverse" />
                </div>
            </div> */
}
