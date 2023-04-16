


export function Hero() {

    return(
    <>
    <section className=
    {`bg-[url('./assets/hero.webp')] bg-no-repeat  
    bg-cover bg-left-top xl:bg-center 
    h-[690px] md:h-[768px] xl:h-[750px] 
    selection:text-black selection:bg-white
    `}>
    
        <div className=
        {`container mx-auto flex flex-col items-center 
        pt-[290px] xl:pt-[230px] text-white 
        h-[690px] md:h-[750px]
        `}>
    
            <h1 className="font-dinbold text-6xl md:text-[100px]">MISSIONS</h1>
    
            <h2 className=
            {`font-dinm text-sm md:text-lg font-semibold 
            mb-60 md:mb-72 lg:mb-[290px] xl:mb-[300px] 
            2xl:mb-[325px]`}
            >ALL OUR MISSIONS SO FAR
            </h2>
    
            <a href="#missions" className="arrow-scroll">
    
                <div className="arrow"></div>
                <div className="arrow"></div>            
    
            </a>
    
        </div>
    
        
    
    </section>
        
    </>
    )
    }