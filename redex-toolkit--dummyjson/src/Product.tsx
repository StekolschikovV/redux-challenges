import {useParams} from "react-router-dom";
import {Carousel} from 'flowbite-react';
import {productAPI} from "./store/services/ProductService";

const Product = () => {

    const {id} = useParams();
    const {data, error, isLoading, refetch} = productAPI.useFetchProductQuery(id || "0")

    return <div className={"m-auto max-w-screen-lg px-6 lg:px-0 flex flex-col justify-between gap-4"}>
        <div className={"flex h-[300px] w-[100%] relative"}>
            <Carousel>
                {data?.images.map((image, index) => <img key={index} src={image}/>)}
            </Carousel>
        </div>
        <h2 className="text-4xl font-extrabold">{data?.title}</h2>
        <p className="my-4 text-lg text-gray-500">{data?.description}</p>
    </div>
};

export default Product;
