import Card from "./components/card/Card";
import data from "./util/data"


function App() {

  return (
    <>
      {data.map((item) => {
        const {id, img, dil, btnName} = item;
        return (
          <Card key={id} img={img} btnName={btnName} dil={dil} />
        )


      })}

    </>
  );
}

export default App;
