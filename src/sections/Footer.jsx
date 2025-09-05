import { Container } from "../components/Container";
import { FooterMenu } from "../components/FooterMenu";
import { Legal } from "../components/Legal";

export const Footer = () => {

  return (
    <div className="flex flex-col justify-center items-center gap-10 md:gap-20 pt-8 md:pt-16 pb-4 md:pb-8">
      <Container>
        <FooterMenu/>
      </Container>
      <Container>
        <Legal/>
      </Container>
    </div>
  );
};