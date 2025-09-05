import { Services } from "./Services";
import { Hero } from "./Hero";
import { Preview } from "./Preview";
import { Container } from "../components/Container.jsx";
import { CTAFreeTrial } from "./CTAFreeTrial.jsx";
import { Presentation } from "./Presentation.jsx";

export const BodyMain = () => {
    return (
        <main className="w-full flex flex-col items-center">
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
            <Container>
                <Presentation/>
            </Container>
        </main>
    );
};
