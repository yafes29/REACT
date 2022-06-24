import Buton from "../buton/Buton"
import cardStyle from"./card.module.css"


const Card = ({img, btnName, dil}) => {
    return (
        <div>
            <h1 className="title">{dil}</h1>
            <img className="images" src={img} alt="img" />
            <Buton btnName={btnName} />
        </div>
    )
}

export default Card