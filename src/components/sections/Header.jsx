import { Container } from "../Container";
import { NavBar } from "./NavBar";

export const Header = () => {
    return (
        <header className="w-full flex sticky top-0 justify-center items-start border-b border-b-secondary/30 bg-white ">
            <Container>
                <NavBar />
            </Container>
        </header>
    );
};
