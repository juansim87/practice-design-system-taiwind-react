export const ServiceItem = ({src}) => {
    
    return (
        <div className="flex flex-col items-center justify-center gap-y-5.5">
            <div>
                <img src={src}/>
            </div>
            <h4 className="text-[20px] md:text-[18px] font-medium">Rich Analytics</h4>
            <p className="text-secondary text-center">
                Easy data management with a dedicated admin panel and a developer platform to extend what
                Polio CRM can do.
            </p>
        </div>
    );
};
