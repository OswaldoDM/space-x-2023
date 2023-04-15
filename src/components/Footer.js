

export function Footer(){

return(
<>

<section id="contact" className=
{`bg-black text-white 
selection:text-black selection:bg-white
py-10 
`}>

    <div className="container mx-auto flex flex-col items-center opacity-90">

        <div className="bg-white h-[140px] w-[1px]"></div>

        <a 
                href= '#'
                target='_blank' 
                className=
                {`text-white text-lg font-dinbold 
                border border-white
                py-3 px-16 my-10  
                hover:text-black hvr-sweep-to-top
                `}>
                    Portfolio
        </a>

        <div className="flex gap-5 pt-5">

            <p className="text-[#979797] text-xs opacity-80">ODM © 2023</p>

            <a 
            href="https://www.linkedin.com/in/oswaldo-diaz-milanes-951319146/" 
            target="_blank"  
            className="text-white text-xs font-dinbold border-effect">
                LINKEDIN
            </a>

            <a 
            href="https://github.com/OswaldoDM" target="_blank"  
            className="text-white text-xs font-dinbold border-effect">
                GITHUB
            </a>            

            <a 
            href="mailto:oswaldoe1992@gmail.com" target="_blank" 
            className="text-white text-xs font-dinbold border-effect">
                EMAIL
            </a>

        </div>
        
    </div>

</section>
        
</>
)
}