export const Container = ({ children, className }) => {
    return <div className={`w-[90%] md:w-[85%] lg:w-[80%] min-w-[375px] mx-[0-auto] ${className}`}>{children}</div>;
};
