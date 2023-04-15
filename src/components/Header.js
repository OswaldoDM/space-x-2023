import logo from './../assets/logo.png'

export function Header() {

return(

<>
<section className="absolute w-full">

    <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-0 pt-5 flex justify-between items-center">       
        
        
        <div>
            <img 
            src={logo} 
            alt='space x logo'
            loading="lazy"
            className="w-[200px] lg:w-[250px] h-auto"/>
        </div>
        

        <a 
        href="#contact" 
        className="text-white text-[14px] font-dinbold border-effect">
            CONTACT
        </a>
        

    </div>

</section>

        
</>
)
}