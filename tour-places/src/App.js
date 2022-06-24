
import Card from "./component/cards/Card";
import Header from "./component/header/Header";
import data from "./helper/data";
import "./scss/App.scss";


const App = () => {
    return (

        <>

            <Header />
            {data.map((item) => {
                const { title, image, desc, id } = item;

                return (
                    <Card
                        title={title}
                        img={image}
                        desc={desc}
                        key={id} />
                )
            })}

        </>


    )
}

export default App