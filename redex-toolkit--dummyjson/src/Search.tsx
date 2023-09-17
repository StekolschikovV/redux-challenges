import React, {useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {productAPI} from "./store/services/ProductService";


const Search = (props: {}) => {

    const {text} = useParams();
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState(text);
    const {data, error, isLoading, refetch} = productAPI.useFetchSearchQuery(searchText || "")

    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
    }

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
        navigate(`/search/${e.target.value}`)
    }


    return <div className={"m-auto max-w-screen-lg px-6 lg:px-0 flex flex-col justify-between gap-4"}>
        <form onSubmit={submitHandler}>
            <label htmlFor="search"
                   className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="search"
                       value={searchText}
                       onChange={inputHandler}
                       className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Search" required/>
                <button type="submit"
                        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search
                </button>
            </div>
        </form>

        <div className={"flex gap-4 flex-col"}>
            {data?.products.map((product, key) =>
                <Link to={`/product/${product.id}`}
                      className="flex flex-col items-center w-full bg-white border border-gray-200 rounded-lg shadow  hover:bg-gray-100">
                    <img
                        className="object-cover w-full max-h-96 rounded-t-lg  md:h-auto  md:rounded-none md:rounded-l-lg"
                        src={product.thumbnail}/>
                    <div className="flex w-full flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {product.title}
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">H
                            {product.description}
                        </p>
                    </div>
                </Link>)}
        </div>
    </div>
};

export default Search;
