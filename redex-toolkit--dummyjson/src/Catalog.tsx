import {productAPI} from "./store/services/ProductService";

const Catalog = () => {

    const {data, error, isLoading, refetch} = productAPI.useFetchAllPostsQuery()

    return <div className={"m-auto max-w-screen-lg px-6 lg:px-0 flex flex-wrap gap-4 "}>
        {data?.products.map(p =>
            <div className={"w-[150px] bg-cover bg-center border border-gray-300 p-2"}
                 style={{background: `url(${p.thumbnail})`}}>
                {p.id}
                {p.title}
                {p.description}

            </div>)}
    </div>
};

export default Catalog;
