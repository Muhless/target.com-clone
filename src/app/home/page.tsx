import Image from "next/image";
import bannerHomepage from "/public/images/pexels-cottonbro-3944405.jpg"
import Navbar from "@/app/_layouts/navbar/navbar";
import Categories from "@/app/_layouts/categories/Categories";

const homePage = () => {
    return (
        <div>
            <div className="mt-10 justify-center items-center text-center">
                <Image
                    src={bannerHomepage}
                    alt="homepage banner"
                    style={{
                        position: 'relative',
                        width: '80%',
                        height: '500px',
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                />
            </div>
            <div>
                <Categories />
            </div>
        </div>
    )
}

export default homePage;