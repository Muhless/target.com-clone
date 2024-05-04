import Image from "next/image";
import logo from "/public/images/target-logo-transparent.png"
import Link from "next/link";


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
            </div>
            <div className="font-bold text-black">
                <a className="pr-11">Categories</a>
                <a className="pr-12">Deals</a>
                <a className="pr-12">New & Featured</a>
                <a className="pr-12">Pickup & Delivery</a>
            </div>
            <div className="">
                <input className="active:border-none bg-gray-100 rounded-md text-gray-700 w-search h-11 items-center flex px-3 text-sm" type="text" placeholder="What can we help you find?" />

            </div>
        </div>
    )
}

export default StickyNavbar;