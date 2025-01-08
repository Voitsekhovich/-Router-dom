import { ReactNode } from "react"
import { Navigate } from "react-router"


type Props ={
    children: ReactNode
}



export const ProtectedRoute=({children}:Props)=>{


    const logged =false
    return (<div>{logged?children:<Navigate to ={'/login'}/>}</div>)
}