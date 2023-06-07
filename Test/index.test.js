//npm init -y
//npm install jest axios

const axios = require('axios');


//Testando o adicionar tarefa

test('POST -> Cria um post com o título "Hoje em dia"?', async () => {
    let task = {
        title: "Hoje em dia",
        texto: "Hoje em dia ..."
    }

    const response = await axios.post('http://localhost:5000/post', task);

    expect(response.status).toBe(200);
    

})


test('POST -> Tenta criar um Post sem título', async () => {
    let task = {
        
        texto: "Vmeu nome eh alex"
    }

    const response = await axios.post('http://localhost:5000/post', task).catch(function (error) {
        if (error.response) {
          expect(error.response.status).toBe(200);
         
        }
      });
});


test('GET -> verifica se o server esta on', async () => {
    
    const response = await axios('http://localhost:5000/');

    expect(response.status).toBe(200);
})

test('GET -> verifica a rota posts', async () => {
    
    const response = await axios('http://localhost:5000/posts');
    expect(response.data).toBeTruthy();

})

test('GET -> verifica a rota post passando id 32? ', async () => {
    let task = {
        
        id:32
    }
    
    const response = await axios('http://localhost:5000/post',task);
   

    expect(response.status).toBe(200);
})




// //Testando PUT update

test('PUT -> Altera a tarefa com id 32?', async () => {
    let task = {
        id: 32,
        title: "dwdw",
        texto: "hoje em dia dwdwdwdwd"
    }

    const response = await axios.put('http://localhost:5000/post', task);

    expect(response.status).toBe(200);
   

})

test('PUT -> Tenta alterar a tarefa id:32 sem enviar o título', async () => {
    let task = {
        id:2,
        
        texto: "Vou sair "
    }

    const response = await axios.put('http://localhost:5000/post', task).catch(function (error) {
        if (error.response) {
          expect(error.response.status).toBe(422);
          
        }
      });
});

test('PUT -> Tenta alterar a tarefa sem passar o id ', async () => {
    let task = {
        
        title: 'Tenta alterar a tarefa sem passar',
        texto: "Vou sair "
    }

    const response = await axios.put('http://localhost:5000/post', task).catch(function (error) {
        if (error.response) {
          expect(error.response.status).toBe(422);
          
        }
      });
});

test('DELETE -> Tenta excluir a tarefa 20', async () => {
    

    response = await axios.delete('http://localhost:5000/post/40');

    expect(response.status).toBe(200);
   

});

test('DELETE -> Tenta usar o metodo delete sem passar o parametro', async () => {
    

    response = await axios.delete('http://localhost:5000/post').catch(function (error) {
        if (error.response) {
          expect(error.response.status).toBe(404);
          
        }
      });;   
});










