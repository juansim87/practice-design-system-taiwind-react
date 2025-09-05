import { Container } from "../Container";
import { Hero } from "./Hero";

export const BodyMain = () => {
    return (
        <main className="w-full flex flex-col items-center">
            <Container>
                <Hero />
            </Container>
        </main>
    );
};
