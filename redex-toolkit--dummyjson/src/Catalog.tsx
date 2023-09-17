import {productAPI} from "./store/services/ProductService";
import {Link} from "react-router-dom";

const Catalog = () => {

    const {data, error, isLoading, refetch} = productAPI.useFetchAllProductsQuery()

    return <div className={"m-auto max-w-screen-lg px-6 lg:px-0 flex flex-wrap justify-between gap-4 "}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data?.products.map(p =>
                <Link to={`/product/${p.id}`} key={p.id}>
                    <img className="h-auto max-w-full rounded-lg" src={p.thumbnail}/>
                </Link>
            )}
        </div>
    </div>
};

export default Catalog;
