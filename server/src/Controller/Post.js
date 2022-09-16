import { openDb } from "../configDb.js";

export async function createTable(){
    openDb().then(db=>{
        db.exec(`CREATE TABLE IF NOT EXISTS Posts (id INTEGER PRIMARY KEY AUTOINCREMENT,title VARCHAR(255),texto VARCHAR(255));`);
    })
}

export async function selectPosts(req,res){
    openDb().then(db=>{
        db.all(`SELECT * FROM Posts`).then(posts=>res.json(posts));
    })
}

export async function selectPost(req,res){
    let id = req.body.id;
     openDb().then(db=>{
        db.get(`SELECT * FROM Posts WHERE id = ?`,[id]).then(post=>res.json(post));
    })
}

export async function insertPost(req, res){ 
    let post = req.body;

    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    var dataAtual = dia + '/' + mes + '/' + ano;
    
    const text=post.texto;
    var tempoL=parseInt(text.split(" ").length)/256;

    openDb().then(db=>{
        db.run(`INSERT INTO Posts (title,texto,data,tempoLeitura) VALUES (?,?,?,?)`,[post.title,post.texto,dataAtual,tempoL.toFixed(2)+"min"]);
    })  
    res.json({
        "status": 200,
    });
}
export async function updatePost(req,res){
    let post = req.body;

    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    var dataAtual = dia + '/' + mes + '/' + ano;
    
    const text=post.texto;
    var tempoL=parseInt(text.split(" ").length)/256;

    openDb().then(db=>{
        db.run(`UPDATE Posts SET title = ?, texto = ?, data=?, tempoLeitura=? WHERE id = ?`,[post.title,post.texto,dataAtual,tempoL.toFixed(2)+"min",post.id]);
    })
    res.json({
        "status": 200,
    });
}

export async function deletePost(req,res){
    let id= req.params.id;
    console.log(id);
    
     openDb().then(db=>{
        db.get(`DELETE FROM Posts WHERE id = ?`,[id]).then(res=>res);
    })
    res.json({
        "status": 200,
    });
}
