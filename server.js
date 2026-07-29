
import express from 'express'
const app = express();
const port = 5000;

app.use(express.json());
let students = [
    {id : 1 , name : "jehan" , age : 34}
];

app.get('/api/students', (req,res)=>{
    //famouse isuus 200 404 ...
    res.status(200).json({
        success : true,
        count :students.length,
        data : students

    })
})
app.listen(5000, ()=>{
    console.log("Server is running on http://localhost:" + port);
})