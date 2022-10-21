import React, {useState} from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  let calcBmi = (event) => {
      event.preventDefault();

      if (weight === 0 || height === 0){
          alert('Please enter a valid weight and height')
      }else{
          let bmi = (weight / (height * height) *10000)
          setBmi(bmi.toFixed(1))

          if(bmi < 18.4){
              setMessage("You are under weight")
          }else if(bmi >= 18.5 && bmi<=27){
              setMessage("You are a helthy weight");
          }else if(bmi >27 && bmi<39){
              setMessage("You are overweight")
          }else if(bmi >=40){
              setMessage("Obese")
          }else{
              setMessage("Enter valid data before you submit")
          }
      }
  }
  
  const f1=()=>setWeight('');
  const f2=()=>setHeight('');
  const f3=()=>setBmi('');
  const f4=()=>setMessage('');

  return (
    <div className='app'>
        
        <div className='container'>
            <h2 className='center'>BMI Calculator</h2>
            <form onSubmit={calcBmi}>
                <div>
                    <label> Enter Weight (kg)</label>
                    <input type="number" value={weight} onChange = {(e) => setWeight(e.target.value)}/>
                </div>
                <div>
                    <label>Enter Height (cm)</label>
                    <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>
                <div>
                    <button className='btn' type='submit'>Submit</button>
                </div>
            </form>
            <button className='btn btn-outline' onClick={()=>{f1();f2();f3();f4()}} >Reload</button>
            <div className='center'>
                <h5>Your BMI is :</h5>
                <div className='result'>{bmi}</div>
                <p>{message}</p>
            </div>
        </div>
    </div>
  )  
}

export default App;
