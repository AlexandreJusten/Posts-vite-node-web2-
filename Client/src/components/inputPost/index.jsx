import './style.css';
import React,{useState} from 'react';
import Axios from 'axios';

function InputPost(){

  const [titulo, setTitulo] = React.useState('');
  const [texto, setTexto] = React.useState('');

  function postInput(){
    
    var tituloInput=titulo;
    var textoInput=texto;
    Axios.post("https://localhost:5001/post",{
      title: tituloInput,
      texto: textoInput
    }).then((response) =>{
      console.log(response);
      document.getElementById('exampleFormControlInput1').value='';
      document.getElementById('exampleFormControlTextarea1').value='';
      location.reload();
    });
}

  return(
    <div className="main">
      <form action="">
   <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Titulo</label>
    <input type="title" class="form-control" id="exampleFormControlInput1" onChange={e => setTitulo(e.target.value)} placeholder="Mysql e Java"/>
      </div>
      <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Texto</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="9" onChange={e => setTexto(e.target.value)} placeholder="texto sobre..."></textarea>
</div>
<div class="d-grid gap-2 col-6 mx-auto bt">
 
<button type="button" class="btn btn-outline-secondary waves-effect" onClick={postInput} >Enviar</button>
</div>
</form>
    </div>
  
  )
}
export default InputPost