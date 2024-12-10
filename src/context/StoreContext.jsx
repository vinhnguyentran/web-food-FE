import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null)

const StoreConTextProvider = (props) => {
    const url = 'http://localhost:4000' // local api                                                                                              ' // local api
    const vnd = Intl.NumberFormat('vn', {
        style: 'currency',
        currency: 'VND',
    })

    useEffect(() => {
       
    }, [])

    const contextValue = {
        url,
        vnd,
       
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreConTextProvider;
