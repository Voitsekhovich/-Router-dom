import { useParams } from "react-router"
import { adidasArr } from "./Adidas"

 

export const  Model =()=>{
    const params = useParams() 
    console.log(params )
    return (
        <div style={{textAlign:'center'}}>
            <h2>{adidasArr[Number(params.id)-1].model}</h2>
            <h4>{adidasArr[Number(params.id)-1].collection}</h4>
            <h3>{adidasArr[Number(params.id)-1].price}</h3>
            <img 
                src={adidasArr[Number(params.id)-1].picture}
                alt={adidasArr[Number(params.id)-1].model}
                style={{width:'600px',height:'auto',marginRight:'10px'}}
            />


        </div>
    )
}