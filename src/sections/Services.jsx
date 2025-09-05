import { ServiceItem } from "../components/ServiceItem";
import chatLines from "../assets/images/icons/chat-lines.png";
import stats from "../assets/images/icons/stats.png";
import code from "../assets/images/icons/code.png";

export const Services = () => {
    return (
        <section className="w-full flex flex-col items-center justify-center px-6 gap-y-10 md:gap-y-15">
            <div className="w-full flex flex-col items-center gap-3.75">
                <span className="text-primary">Features</span>
                <h2 className="text-[36px] text-center tracking-[-4%] leading-[117%] font-bold">You will never missed a deadline</h2>
                <p className="text-[18px] text-secondary text-center">
                    Connect expose and visualize and over 150 Sass tools without engineering mehthod
                </p>
            </div>
            <div className="w-full flex flex-col items-center justify-center md:hidden gap-y-10">
                <ServiceItem src={code} />
                <ServiceItem src={code} />
                <ServiceItem src={code} />
                <ServiceItem src={code} />
            </div>
            <div className="w-[90%] hidden md:grid grid-cols-3 gap-x-8.25 gap-y-15">
                <ServiceItem src={stats} />
                <ServiceItem src={chatLines} />
                <ServiceItem src={code} />
                <ServiceItem src={stats} />
                <ServiceItem src={chatLines} />
                <ServiceItem src={code} />
            </div>
        </section>
    );
};
