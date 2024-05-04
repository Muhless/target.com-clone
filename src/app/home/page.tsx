import Image from "next/image";
import bannerHomepage from "/public/images/GUEST_ab983e9d-85c6-4c4c-a892-57041a0adbbb.jpg"
import Categories from "@/app/_layouts/categories/Categories";

const homePage = () => {
    return (
        <div className="bg-white px-content z-0">
            <div className="flex justify-center">
                <Image
                    src={bannerHomepage}
                    alt="homepage banner"
                    style={{
                        position: 'relative',
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