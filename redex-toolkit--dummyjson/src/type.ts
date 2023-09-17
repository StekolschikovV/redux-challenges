export interface IUser {
    id: number
    username: string
    email: string
    firstName: string
    lastName: string
    gender: string
    image: string
    token: string
}

export interface IUserCredentials {
    username: string
    password: string
}


export interface IProduct {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
}

export interface IProductList {
    products: IProduct[]
}