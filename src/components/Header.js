import logo from './../assets/logo.png'

export function Header() {

return(

<>
<section className="absolute w-full">

    <div className="container mx-auto px-5 sm:px-6 lg:px-8 xl:px-0 pt-5 flex justify-between items-center">       
        
        
        <a  href='#' target='_blank' 
            className="font-blanka text-[42px] sm:text-5xl text-white opacity-[0.95]">
                ODM
        </a>
        

        <a 
        href="#contact" 
        className="text-white text-[14px] font-dinbold border-effect pt-4 sm:pt-5">
            CONTACT
        </a>
        

    </div>

</section>

        
</>
)
}