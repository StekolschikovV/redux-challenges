import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IProduct, IProductList} from "../../type";

export const productAPI = createApi({
    reducerPath: 'productAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/products'}),
    endpoints: (build) => ({
        fetchAllProducts: build.query<IProductList, void>({
            query: () => ({
                url: `/`,
            }),
        }),
        fetchProduct: build.query<IProduct, string>({
            query: (id) => ({
                url: `/${id}`
            }),
        })
    })
})
