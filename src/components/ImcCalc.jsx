import Button from './Button';
import './ImcCalc.css';
import { useState } from 'react';

const ImcCalc = ({calcImc}) => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const clearForm = (e) => {
    e.preventDefault();
    setHeight('');
    setWeight('');
  };

  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, '');
  }

  const handleHeigtChange = (e) => {
    const updatedValue = validDigits(e.target.value);
    setHeight(updatedValue);
  };

  const handleWeigtChange = (e) => {
    const updatedValue = validDigits(e.target.value);
    setWeight(updatedValue);
  };

  return (
    <div id='calc-container'>
        <h2>Calculadora de IMC</h2>
        <form id='imc-form'>
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="heigt">Altura</label>
                    <input type="text" name='height' id='heigt' placeholder='Exemplo 1,75 ' onChange={(e) => handleHeigtChange(e)} value={height}/>
                </div>
                <div className="form-control">
                    <label htmlFor="weight">Peso</label>
                    <input type="text" name='weight' id='weight' placeholder='Exemplo 70,5 ' onChange={(e) => handleWeigtChange(e)} value={weight}/>
                </div>
            </div>
            <div className="action-control">
                <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e, height, weight)}/>
                <Button id="clear-btn" text="Limpar" action={clearForm}/>
            </div>
        </form>
    </div>
  )
}

export default ImcCalc