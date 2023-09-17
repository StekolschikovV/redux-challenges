import React from 'react';
import {userLogin} from "./store/reducers/ActionCreators";
import {useAppDispatch, useAppSelector} from "./hooks/redux";


const Authentication = (props: {}) => {
    const {user, isLoading, error} = useAppSelector(state => state.userReducer)

    const dispatch = useAppDispatch()

    function formHandler(e: React.SyntheticEvent) {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            username: { value: string };
            password: { value: string };
        };
        const username = target?.username?.value || ""
        const password = target?.password?.value || ""
        dispatch(userLogin({username, password}))
    }

    return <>
        <form className={"max-w-lg m-auto"} onSubmit={formHandler}>
            <h1 className={"py-6 text-3xl"}>Login</h1>
            <div className="mb-6">
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
                    Login
                </label>
                <input type="text" id="username"
                       className="bg-primary border border-primary text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                    Your password
                </label>
                <input type="password" id="password"
                       className="bg-primary border border-primary text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
            </div>
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value=""
                           className="me-2 w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                    />
                </div>
                <label htmlFor="remember" className="block mb-2 text-sm font-medium text-gray-900">Remember
                    me</label>
            </div>
            <button type="submit"
                    className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit
            </button>

            <div className={"py-3"}>
                {error}
                {isLoading && "Loading..."}
            </div>
        </form>

        {JSON.stringify(user)}
    </>
};

export default Authentication;
