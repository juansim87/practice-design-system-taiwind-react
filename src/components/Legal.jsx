import copyright from "../assets/images/icons/copyright.png";

export const Legal = () => {
    return (
        <div className="flex justify-center gap-2">
            <div className="w-[24px]">
                <img src={copyright} />
            </div>
            <p className="text-[12px] md:text-[16px] text-secondary leading-[24px]">2024 jahedin LTD. All rights reserved.</p>
        </div>
    );
};
