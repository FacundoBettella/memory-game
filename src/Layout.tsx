import React from 'react'

export const Layout = ({ children }: any) => {

    return (
        <div
            style={{ backgroundColor: "#3c74c7", minHeight: "100vh" }}
        >
            {children}  
        </div>
    )
}
