import { Container } from "../components/Container";
import { NavBar } from "../components/NavBar";

export const Header = () => {
    return (
        <header className="w-full flex sticky top-0 justify-center items-start border-b border-b-secondary/30 bg-white ">
            <Container>
                <NavBar />
            </Container>
        </header>
    );
};
