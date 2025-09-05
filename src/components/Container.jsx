export const Container = ({ children, className }) => {
    return <div className={`w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] min-w-[375px] mx-[0-auto] ${className}`}>{children}</div>;
};
