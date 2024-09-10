import { useState } from 'react';

function ComposeSalad(props) {
  const foundationList = Object.keys(props.inventory).filter(name => props.inventory[name].foundation);
  const [foundation, setFoundation] = useState('Pasta');
  const [extras, setExtra] = useState({ Bacon: true, Fetaost: true });

  return (
    <div className="continer col-12">
      <div className="row h-200 p-5 bg-light border rounded-3">
        <h2>Välj innehållet i din sallad</h2>
        <fieldset className="col-md-12">
          <label htmlFor="foundation" className="form-label">Välj bas</label>
          <select value="Sallad" className="form-select" id="foundation">
            <option key="Sallad" value="Sallad">Salad</option>
            <option key="Pasta" value="Pasta">Pasta</option>
          </select>
        </fieldset>

      </div>
    </div>
  );
}
export default ComposeSalad;