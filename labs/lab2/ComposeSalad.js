import { useState } from 'react';

function ComposeSalad(props) {
  const extras = Object.keys(props.inventory).filter(name => props.inventory[name].foundation);
  const [foundation, setFoundation] = useState('Pasta');
  const [extra, setExtra] = useState({ Bacon: true, Fetaost: true });

  return (
    <div className="continer col-12">
      <div className="row h-200 p-5 bg-light border rounded-3">
        <h2>Välj bas</h2>
        {extras.map(name => <div key={name} className="col-4">{name}</div>)}
      </div>
    </div>
  );
}
export default ComposeSalad;