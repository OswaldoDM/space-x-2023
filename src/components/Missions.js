import { useEffect, useState } from "react"
import { getAllLaunches } from "../services/FetchAPI";
import { MissionBoxes } from "./MissionBoxes";
import { Pagination } from "./Pagination";


export function Missions(){       

const [launches, setLaunches] = useState([])
const [currentPage, setCurrentPage] = useState(1)

const postPerPage = 10
const lastPost = currentPage * postPerPage
const firstPost = lastPost - postPerPage
const currentPosts = launches.slice(firstPost,lastPost)


useEffect(() => {
  getAllLaunches() .then(setLaunches) .catch(console.error)
}, [])
    

    return(
        
        <>        

        <section 
        id="missions" className=
        {`bg-black text-white 
        selection:text-black selection:bg-white        
        pt-20 pb-14
        md:px-7         
        lg:py-20 
        xl:px-0
        `}>

          <div className="container mx-auto opacity-90
          flex flex-col lg:flex-row gap-10 
          pb-10 pl-10 pr-6 
          lg:pr-0 lg:pb-16">

            <div className="flex-1">
            
              <h1 className="font-dinbold text-5xl">
                ALL THE SPACEX MISSIONS IN ONE PLACE
              </h1>

            </div>

            <div className="flex-1">

              <p>Get all the details about each SpaceX launch to date.
                Check past missions including all the info you need and even video links 
                of every launch so far.
              </p>

            </div>            

          </div>

          <div className="container mx-auto 
          grid grid-cols-2 pr-4
          md:grid-cols-3 
          lg:grid-cols-3 lg:pr-0">

          {currentPosts.map( mission => <MissionBoxes {...mission} key = {mission.name} /> )} 

          </div>   

          <Pagination setCurrentPage = {setCurrentPage} />
          
        </section>
              
        
        </>
    )
}