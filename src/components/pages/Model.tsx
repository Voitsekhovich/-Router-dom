import {adidasArr} from "./Adidas";
import {useParams} from "react-router-dom";


export const Model = () => {
    const params=useParams()
     const currentModel=adidasArr.find(el=>el.id===Number(params.id))

    return (
        <div style={{textAlign:'center'}}>
            {currentModel
                ?<>
                    <h2>{currentModel.model}</h2>
                    <h4>{currentModel.collection}</h4>
                    <h3>{currentModel.price}</h3>
                    <img
                        src={currentModel.picture}
                        alt={currentModel.model}
                        style={{width: '600px', height: 'auto', marginRight: '10px'}}
                    />
                </>
                :   <h2>Модель отсутствует</h2>
            }



        {/*    <h2>{adidasArr[Number(params.id)].model}</h2>*/}
        {/*    <h4>{adidasArr[Number(params.id)].collection}</h4>*/}
        {/*    <h3>{adidasArr[Number(params.id)].price}</h3>*/}
        {/*    <img*/}
        {/*        src={adidasArr[Number(params.id)].picture}*/}
        {/*        alt={adidasArr[Number(params.id)].model}*/}
        {/*        style={{width: '600px', height: 'auto', marginRight: '10px'}}*/}
        {/*    />*/}
        </div>
);
};