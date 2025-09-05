import { Services } from "./Services";
import { Hero } from "./Hero";
import { Preview } from "./Preview";
import { Container } from "../components/Container.jsx";
import { CTAFreeTrial } from "./CTAFreeTrial.jsx";

export const BodyMain = () => {
    return (
        <main className="w-full flex flex-col items-center">
            <Container>
                <Hero />
                <Preview />
                <Services />
                <CTAFreeTrial/>
            </Container>
        </main>
    );
};
