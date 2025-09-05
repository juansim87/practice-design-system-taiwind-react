export const FooterMenuCol = ({menuSection}) => {

    const footerMenuItems = ["Changelog", "Customer Stories", "Security", "Pricing", "Solution"]

  return (
    <div className="flex flex-col px-4 py-5 gap-3">
      <h4 className="text-[20px] font-medium">{menuSection}</h4>
      <ul className="flex flex-col gap-2.5">
        {footerMenuItems.map((item, index) => (
            <li key={index} className="text-secondary">{item}</li>
        ))}
      </ul>
    </div>
  );
};