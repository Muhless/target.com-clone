import Image from "next/image";
import logo from "/public/images/target-logo-transparent.png"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneAlt, faPeopleArrows, faPeopleGroup, faPerson, faPersonRifle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons/faMicrophone";


const StickyNavbar = () => {
    return (
        <div className="shadow-md items-center flex flex-row bg-white px-20 sticky top-0 z-10">
            <div className="flex h-logo items-center pr-8">
                <Image
                    src={logo}
                    alt="logo target.com"
                    width={45}
                    height={10}
                />
                <Link href="/home"></Link>
            </div>
            <div className="font-bold text-black">
                <Link href="/categories" className="pr-12">Categories</Link>
                <a className="pr-12">Deals</a>
                <a className="pr-12">New & Featured</a>
                <a className="pr-12">Pickup & Delivery</a>
            </div>
            <div className="bg-gray-100 rounded-md  w-search h-11 items-center flex px-3">
                <input className="bg-gray-100 w-search focus:outline-none text-gray-700 placeholder:text-gray-600  text-sm" type="text" placeholder="What can we help you find?" />
                <a href=""><FontAwesomeIcon className="text-gray-500 mr-5 text-lg" icon={faMicrophoneAlt}></FontAwesomeIcon></a>
                <a href=""><FontAwesomeIcon className="text-gray-500" icon={faSearch}></FontAwesomeIcon></a>
            </div>
            <div>
            <a href=""><FontAwesomeIcon className="text-gray-500" icon={faPeopleGroup}>Sign In</FontAwesomeIcon></a>
            </div>
        </div>
    )
}

export default StickyNavbar;