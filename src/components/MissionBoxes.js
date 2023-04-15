


export function MissionBoxes({name,success,date,article,video,patch,year,details}){

return(
<>
    <div className='m-10 opacity-90'>              
        
        <h2 className='font-dinm font-semibold text-3xl'>{name}</h2> 

        <p>{year}</p>        
        
        <div className='flex gap-2 mt-5'>
    
            <a 
                href= {article}
                target='_blank' 
                className=
                {`text-white text-base font-dinbold 
                border border-white py-2 px-3 
                hover:text-black hvr-sweep-to-right
                `}>
                    Info
            </a>
    
            <a 
                href= {video}
                target='_blank' 
                className=
                {`text-white text-base font-dinbold 
                border border-white py-2 px-3 
                hover:text-black hvr-sweep-to-right
                `}>
                    Video
            </a>                
    
        </div>    
        
    </div>
        
            
</>
)
}        

    