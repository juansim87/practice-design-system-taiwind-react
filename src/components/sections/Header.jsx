import { Container } from "../Container";
import { NavBar } from "./NavBar";

export const Header = () => {
    return (
        <header className="w-full flex sticky top-0 border-b border-b-secondary/30 justify-center items-start">
            <Container>
                <NavBar />
            </Container>
        </header>
    );
};
