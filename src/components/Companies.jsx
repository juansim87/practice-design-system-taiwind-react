import { CompanyLogo } from "./CompanyLogo";
import amazonLogo from "../assets/images/logos/amazon-logo.png";
import cocaColaLogo from "../assets/images/logos/cocacola-logo.png";
import ibmLogo from "../assets/images/logos/ibm-logo.png";
import fedexLogo from "../assets/images/logos/fedex-logo.png";
import walmartLogo from "../assets/images/logos/walmart-logo.png";

export const Companies = () => {
    return (
        <section className="w-full flex flex-col items-center py-6 md:py-24 gap-4">
            <p className="w-[70%] text-center text-[16px] md:text-[18px] text-secondary ">
                Already loved and trusted by product team
            </p>
            <div className="w-full grid grid-cols-3 md:hidden gap-y-5">
                <CompanyLogo src={cocaColaLogo} alt="Logo de Coca-Cola" />
                <CompanyLogo src={amazonLogo} alt="Logo de Amazon" />
                <CompanyLogo src={fedexLogo} alt="Logo de FedEx" />
                <CompanyLogo src={cocaColaLogo} alt="Logo de Coca-Cola" />
                <CompanyLogo src={amazonLogo} alt="Logo de Amazon" />
                <CompanyLogo src={fedexLogo} alt="Logo de FedEx" />
            </div>
            <div className="w-full hidden md:grid md:grid-cols-5 gap-y-10 ">
                <CompanyLogo src={ibmLogo} alt="Logo de IBM" />
                <CompanyLogo src={cocaColaLogo} alt="Logo de Coca-Cola" />
                <CompanyLogo src={amazonLogo} alt="Logo de Amazon" />
                <CompanyLogo src={fedexLogo} alt="Logo de FedEx" />
                <CompanyLogo src={walmartLogo} alt="Logo de Walmart" />
                <CompanyLogo src={cocaColaLogo} alt="Logo de Coca-Cola" />
                <CompanyLogo src={amazonLogo} alt="Logo de Amazon" />
                <CompanyLogo src={walmartLogo} alt="Logo de Walmart" />
                <CompanyLogo src={ibmLogo} alt="Logo de IBM" />
                <CompanyLogo src={fedexLogo} alt="Logo de FedEx" />
            </div>
        </section>
    );
};
