import { ReactNode } from "react"
import { Navigate } from "react-router"


type Props ={
    children: ReactNode
}



export const ProtectedRoute=({children}:Props)=>{


    const logged =true
    return (<div>{logged?children:<Navigate to ={'/error'}/>}</div>)
}