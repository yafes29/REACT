import "../../scss/_card.scss";

const Card = (props) => {
    const { title, img, desc, id } = props;

    return (



        
            
            <div className="card-container">


            <h1 className="title">{title}</h1>
            <img className="img" src={img} alt="img" />
            <p className="p"> {desc}</p>

        </div>
        
        
       










    )
}

export default Card