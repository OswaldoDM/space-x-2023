



export function Pagination({setCurrentPage}) {
      
    const pages = [1,2,3,4,5,6,7,8,9,10,11,12]
    

return(
<>

<div className="flex flex-wrap justify-center gap-3 
                pb-5 pt-5 px-10 opacity-90                
                lg:px-0 lg:pt-0">

    {pages.map((page,index) =>

    <div key={index} 
         onClick = {() => setCurrentPage(page)}
         className=
         {`cursor-pointer px-[5px] 
         border border-white
         transition duration-200 
         hover:bg-[#ffffff21]
         active:bg-white active:text-black
         `}>

        {page}

    </div>
        
    )}
        
</div>         
        
</>
)
}

