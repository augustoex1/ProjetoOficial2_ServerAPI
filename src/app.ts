import express from "express";
import cep from 'cep-promise'
import cors from 'cors'

const app = express ();

app.use(cors())
 

app.get ('/', (req,res) => {
   res.send ('Hello World!' );
})
// app.get ('/cep', async (req, res) => {
//      const cepParam = req.query.value;  //Chama a requisiao do cep ao usar /cep?value= " "
//      console.log(cepParam);
     
//     const cepReturned = await cep ('41510315')
//     res.send (cepReturned);
// })

app.get ('/cep/:cep', async (req, res) => {
     const cepParam = req.params.cep;  //Chama a requisiao do cep ao usar /cep?value= " "
     console.log(cepParam);
     
    const cepReturned = await cep (cepParam)
    res.send (cepReturned);
})

const port = 3001;
app.listen(port, () =>{
     console.log(`running at port: ${port}`);
})