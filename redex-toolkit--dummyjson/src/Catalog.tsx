import {productAPI} from "./store/services/ProductService";
import {Link} from "react-router-dom";

const Catalog = () => {

    const {data, error, isLoading, refetch} = productAPI.useFetchAllProductsQuery()

    return <div className={"m-auto max-w-screen-lg px-6 lg:px-0 flex flex-wrap justify-between gap-4 "}>
        {data?.products.map(p =>
            <Link
                to={`/product/${p.id}`}
                key={p.id}
                className={"w-[150px] bg-cover bg-center border border-gray-300 p-2"}>
                <div className={"w-100 h-[100px] flex justify-center"}>
                    <img src={p.thumbnail}/>
                </div>
                <div>
                    {p.id}
                    {p.title}
                    {p.description}
                </div>
            </Link>)}
    </div>
};

export default Catalog;
