
type PricingCardProps ={
    type:string,
    storage:string,
    storagepm:string,
    active:boolean,
    onChange: (id:string) => void
}

const PricingCard = ({type, storage,storagepm, active, onChange} : PricingCardProps) => {
    const activeClass : string = active ? "bg-violet-600": "bg-slate-700"
    const handleChange =(type:string) => {
        onChange(type);
    }

    return (       
        <div className={`rounded-xl text-white rounded-xl duration-500 ${activeClass}`}  onClick={() => handleChange(type)}>           
            <div className="bg-slate-800 mt-2 mx-2 p-8 rounded-t-xl">
                <div className="uppercase text-center">{type}</div>
                <h2 className="text-center mt-10 font-serif text-4xl md:text-5xl">{storage}</h2>
                <h3 className="mt-2 text-center">{storagepm}</h3>
                <div className="flex justify-center">
                    <a href="#" className={`py-3 my-6 text-center inline-block border border-violet-600
                    rounded-lg hover:bg-violet-800 hover:border-violet-800 px-10 duration-500 ${activeClass}`}>Purchase</a>
                </div>       
            </div>
            <div className="border-t border-slate-700"></div>

            <div className="flex flex-col justify-center bg-slate-800 mb-2 mx-2 rounded-b-xl py-6 space-y-1">
                <div className="flex justify-center space-x-1">
                    <svg 
                        xmlns = "http://www.w3.org/2000/svg"
                        className = "w-5 h-5"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-xs font-serif">{storage}</span>

                </div>
                <div className="flex justify-center space-x-1">
                    <svg 
                        xmlns = "http://www.w3.org/2000/svg"
                        className = "w-5 h-5"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-xs font-serif">Option to add members</span>

                </div>
                <div className="flex justify-center space-x-1">
                    <svg 
                        xmlns = "http://www.w3.org/2000/svg"
                        className = "w-5 h-5"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    <span className="text-xs font-serif">Extra Member benefits</span>

                </div>
             

            </div>




        </div>
    );
}

export default PricingCard