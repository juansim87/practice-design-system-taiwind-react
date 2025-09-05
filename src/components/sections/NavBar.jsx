import menu from "../../assets/images/icons/menu-actions.png";
import { Button } from "../Button";
import logo from "../../assets/images/logos/logo-vector.svg";

export const NavBar = () => {
    const navLinks = ["Home", "Products", "Features", "Pricing"];

    return (
        <div className="flex justify-between items-center px-4 py-2.5 md:py-5">
            <div className="flex gap-2 items-center justify-center">
                <div className="w-4 md:w-6">
                    <img src={logo} />
                </div>
                <span className="text-[14px] md:text-[22px] font-bold">LOGO</span>
            </div>
            <div className="w-6 md:hidden">
                <img src={menu} className="w-full" />
            </div>
            <div className="gap-7 hidden md:flex">
                {navLinks.map((item, index) => (
                    <p key={index} className="text-secondary">
                        {item}
                    </p>
                ))}
            </div>
            <div className="gap-3 hidden md:flex">
                <Button text={"Sign in"} className="text-secondary" />
                <Button text={"Sign up free"} className="text-white bg-primary" />
            </div>
        </div>
    );
};
