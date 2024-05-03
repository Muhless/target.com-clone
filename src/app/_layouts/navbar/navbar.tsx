import { faBuilding } from "@fortawesome/free-solid-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Navbar = () => {
    return (
        <div className="bg-target-com py-1.5">
            <div className="text-center mx-20 flex flex-row justify-between">
                <div className="flex flex-row">
                    <a className="mr-4 text-sm p-2 hover:cursor-pointer hover:bg-red-800 hover:rounded-xl"><FontAwesomeIcon className="mr-2" icon={faLocationDot} /> Ship To 42184</a>
                    <a className="text-sm p-2 hover:cursor-pointer hover:bg-red-800 hover:rounded-xl"><FontAwesomeIcon className="mr-3" icon={faBuilding}></FontAwesomeIcon>Select your store</a>
                    {/* <a className="text-sm p-2 hover:cursor-pointer hover:underline">Target Circle</a> */}
                </div>
                <div className="flex text-sm items-center">
                    <a className="mr-8">Target Circle</a>
                    <a className="mr-8">Target Circle Card</a>
                    <a className="mr-8">Target Circle 360</a>
                    <a className="mr-8">Registry</a>
                    <a className="mr-8">Weekly Ad</a>
                    <a className="">Find Stores</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar