import React from 'react'
var llave = 1;
const ListaDoc = [
    {
      codigo: '111',
      nombre: 'Documento 1',
    },
    {
      codigo: '222',
      nombre: 'Documento 2',
    },
  ];
    

export default function ListaDocumentos() {
    const doc = ListaDoc.map((ListaDoc) =>
    <li key={ListaDoc.codigo}>{ListaDoc.nombre}, codigo:"{ListaDoc.codigo}"</li>
    );
    const [list, setList] = React.useState(ListaDoc);
    const [nombre, setnombre] = React.useState('');
    
    function handleChange(event :any) {
        setnombre(event.target.value);
        
      }
     
      function handleAgregar() {
          alert(nombre);
          llave = llave +1;
        ListaDoc.push({
            codigo : llave.toString(),
            nombre : nombre        
        });
      }
        
        return (
        <div>
        <div>
            <input type="text" value={nombre} id='nombre' onChange={handleChange} />
            <button type="button" name="Agregar" title="agregar"  onClick={handleAgregar} >
          Add
        </button>
      </div>
            <ul>{doc}</ul>
        </div>
    )
}