// * =======================================================
// *                     EVENTS
// * =======================================================

//? ReactJS, Tarayicilar arasi uyumluluk ve performans artisi gibi
//? sebeplerden oturu Sentetik Event olarak adilandirilan Olaylari
//? kullanir. Sentetik Event, aslinda tarayicinin dogal event'larinin
//? bir sarmalayici (Wrapper) arabirimle ortulmesi ile olusur. Bu sayede,
//? React ortaminda kullanilan event'larin bilindik tarayicilarda
//? sorunsuz calismasini saglanir.
//? Ayrinti icin : https://reactjs.org/docs/events.html

const Events = () => {

  const handleClick = ()=>{
    alert("Buton Clicked")
  }

  const handleClear = (text)=>{
    alert(text);
  }
  const handleChange =()=>{

  }
  return (
    <div className="container text-center mt-4">
      <button onClick={handleClick} className="btn btn-warning">Click</button>
       
       {/* Eger bir event fonksiyonunun paremetresi olmasi gerkiyorsa
      bu fonksiyon bir arrow fonks. tarafindan  cagrilmalidir. Aksi
      takdirde event fonksiyonu event gerceklesmeden cagirilir */}


      <button onClick={()=>handleClear("Btn pressed")} className="btn btn-dark ms-4">Clear</button>

      <button onClick={handleChange} className="btn btn-danger ms-4">Change</button>
    </div>
  )
}

export default Events
