import React, { useState } from 'react';
import './style.css'

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);

  const calculateBMI = () => {
    if (!weight || !height) {
      alert('Please enter weight and height.');
      return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    setBmiResult(bmi.toFixed(2));
  };

  return (
    <div className="BmiCalculator">
      <h2><u>Body Mass Index  Calculator</u></h2>
      <div>
        <label>Weight(kg)</label>
        <input type="number"value={weight} onChange={(e) => setWeight(e.target.value)}/>
      </div>
      <div>
        <label>Height (cm):</label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)}/>
      </div>
      <button onClick={calculateBMI}><u>Calculate BMI</u></button>

      {/* {bmiResult && ( */}
        <div>
          <h3> BMI Is : {bmiResult} </h3>
        </div>
      {/* )} */}
    </div>
  );
};

export default BmiCalculator;
