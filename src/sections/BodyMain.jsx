import { Services } from "./Services";
import { Hero } from "./Hero";
import { Preview } from "./Preview";
import { Container } from "../components/Container.jsx";
import { CTAFreeTrial } from "./CTAFreeTrial.jsx";
import { Presentation } from "./Presentation.jsx";
import { FAQ } from "./FAQ.jsx";

export const BodyMain = () => {
    return (
        <main className="w-full flex flex-col items-center border-b border-b-secondary/30">
            <Container className="mb-15 md:mb-24">
                <Hero />
            </Container>
            <Container className="mb-15 md:mb-24">
                <Preview />
            </Container>
            <Container className="mb-15 md:mb-24">
                <Services />
            </Container>
            <Container className="mb-15 md:mb-24">
                <CTAFreeTrial />
            </Container>
            <Container className="mb-15 md:mb-24">
                <Presentation/>
            </Container>
            <Container className="mb-15 md:mb-24">
                <FAQ/>
            </Container>
        </main>
    );
};
