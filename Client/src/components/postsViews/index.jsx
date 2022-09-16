import './style.css';
import React,{useState,useEffect} from 'react';
import Axios from 'axios';

function PostsViews(){
  const [titulo, setTitulo] = React.useState('');
  const [texto, setTexto] = React.useState('');

  const [posts,setPosts] = useState([]);
useEffect(()=>{
    Axios.get("https://localhost:5001/posts")
    .then((response)=>{
        setPosts(response.data);
    })
    .catch(()=>{
      alert("Deu Merda!! vai olhar se a API ta ligada")
    });
},[]) 


  function deleteInput(id){
    Axios.delete(`https://localhost:5001/post/${id}`)
    location.reload();
}


function updateInput(id){
  var tituloInput=titulo;
  var textoInput=texto;
  Axios.put("https://localhost:5001/post",{
    id: id,
    title: tituloInput,
    texto: textoInput
  }).then((response) =>{
    console.log(response);
    location.reload();
  });
}

  
  return(
    <div className='cont'>
    <div class="container cont" >
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb brea">
                <li class="breadcrumb-item active" aria-current="page">Posts</li>
            </ol>
        </nav>
        {posts.map((post,key)=>{
          return (
            <div class="card shadow-sm bg-white rounded ca" >
            <div class="card-body">
                <p class="card-subtitle mb-2 text-muted te">
                  <h3>{post.title}</h3>
                    <p>{post.texto}</p>
                </p>
                <p class="card-text sp"><span>{post.data}<br />{post.tempoLeitura}</span></p>
                <details>
                  <summary>Config</summary>  
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Titulo</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" onChange={e => setTitulo(e.target.value)} placeholder="Novo Titulo"/>
                 </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Texto</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="9" onChange={e => setTexto(e.target.value)} placeholder="Novo Texto..."></textarea>
                </div>
                <button type="button" class="btn btn-outline-secondary waves-effect" onClick={()=>deleteInput(post.id)}>Deletar</button>
                <button type="button" class="btn btn-outline-secondary waves-effect" onClick={()=>updateInput(post.id)}>Alterar</button>
                  </details>
               
            </div>
        </div>
          )
        })}
      
        
    </div>
    </div>
  
  )
}
export default PostsViews