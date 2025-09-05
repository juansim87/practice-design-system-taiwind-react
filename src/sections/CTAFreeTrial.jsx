import { Button } from "../components/Button";

export const CTAFreeTrial = () => {

  return (
    <section className="flex flex-col items-center justify-center gap-4.5">
      <h2 className="text-[36px] leading-10 font-bold text-center">Create Your First Personalized</h2>
      <p className="text-[16px] md:text-[20px] text-secondary">No credit card required 7 days free trial</p>
      <div className="flex gap-2.25 md:gap-5">
        <Button text="Get Started" className="bg-primary text-white" />
        <Button text="Watch demo" className="text-secondary" />
      </div>
    </section>
  );
};