import Image from "next/image";
import logo from "/public/images/Realtor-com-Symbol-768x432.png"


const StickyNavbar = () => {
    return (
        <div className="shadow-lg">
            <div className="bg-white h-logo shadow-lg">
                <Image 
                src={logo}
                alt="logo target.com"
                width={120}
                height={10}
                />
            </div>
        </div>
    )
}

export default StickyNavbar;