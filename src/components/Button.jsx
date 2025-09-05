export const Button = ({ text, className }) => {
    return (
        <div role="button" className={`py-3 px-6 border rounded-md w-fit ${className}`}>
            <p className="text-4.5 font-bold">{text}</p>
        </div>
    );
};
