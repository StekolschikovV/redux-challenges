import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IProductList} from "../../type";

export const productAPI = createApi({
    reducerPath: 'productAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/products'}),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IProductList, void>({
            query: () => ({
                url: `/`,
            }),
        })
    })
})
