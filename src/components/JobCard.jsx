import { assets } from "../assets/assets";


export default function JobCard({job}) {
  return (
    <div className="border p-6 shadow rounded">
        <div className="flex justify-between items-center">
            <img  className='h-8' src={assets.company_icon} alt=''/>
        </div>
        <h4 className="font-medium text-xl mt-2">{job.title}</h4>
        <div className="flex items-center gap-3 mt-2  text-xs"> 
            <span className="bg-blue-50 border border-blue-200 px-4 py-1.5 rounded  ">{job.location}</span>
            <span className="bg-red-50 border border-red-200 px-4 py-1.5 rounded  ">{job.level}</span>
        </div>
        <p className="text-gray-500 text-sm mt-4" dangerouslySetInnerHTML={{__html:job.description.slice(0,150)}}></p>
        <div className="mt-4 flex gap-4  text-sm">
            <button  className=" bg-blue-600 px-4 py-2 text-white rounded cursor-pointer ">Apply now</button>
            <button className="  text-gray-500 px-4 py-2 border border-gray-500 rounded cursor-pointer">Learn more</button>
        </div>
    </div>
  )
}
