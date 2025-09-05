import { FooterMenuCol } from "./FooterMenuCol";

export const FooterMenu = () => {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-2 md:hidden gap-1">
                <FooterMenuCol menuSection="Product" />
                <FooterMenuCol menuSection="Company" />
                <FooterMenuCol menuSection="Resource" />
                <FooterMenuCol menuSection="Features" />
            </div>
            <div className="hidden md:w-full md:flex items-start justify-between">
                <FooterMenuCol menuSection="Product" />
                <FooterMenuCol menuSection="Company" />
                <FooterMenuCol menuSection="Resource" />
                <FooterMenuCol menuSection="Features" />
                <FooterMenuCol menuSection="Solution" />
            </div>
        </div>
    );
};
