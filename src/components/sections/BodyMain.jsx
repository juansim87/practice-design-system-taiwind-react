import { Container } from "../Container";
import { Hero } from "./Hero";
import { Preview } from "./Preview";

export const BodyMain = () => {
    return (
        <main className="w-full flex flex-col items-center">
            <Container>
                <Hero />
                <Preview/>
            </Container>
        </main>
    );
};
