import React,{useState} from 'react';

const [values, setValues] = useState();

 function handleRegisterText(value){
    setValues((preValue)=>({
      ...preValue,
      [value.target.name]:value.target.value,
    }))
}
  export async function handleClickButtonPost(){
    Axios.post("https://localhost:5001/post",{
      title: values.titulo,
      texto: values.texto
    }).then((response) =>{
      console.log(response);
    });
}