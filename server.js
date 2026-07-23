import express from 'express';
const app = express();
app.use(express.json());
const port = 5000;

let students = [
    { id: 1, name: "ebaa", age: 24 },
    { id: 2, name: "ebaa1", age: 241 }
];

// جلب جميع الطلاب (GET)
app.get('/api/students', (req, res) => {
    res.status(200).json({
        success: true,
        count: students.length,
        data: students
    });
});

// إضافة طالب جديد (POST)
app.post('/api/students', (req, res) => {
    const newstudent = req.body;
    if (!newstudent.name || !newstudent.age) {
        return res.status(400).json({
            success: false,
            message: "please provide name and age"
        });
    }
    newstudent.id = students.length + 1;
    students.push(newstudent);
    res.status(201).json({
        success: true,
        message: "student added successfully",
        data: newstudent
    });
});

// ----------------------------------------------------
// نقطة النهاية الجديدة للتعديل (PUT)
// ----------------------------------------------------
app.put('/api/students/:id' , (req , res)=>{
    const studentId = parseInt(req.params.id);
    const {name , age} = req.body;
    const student = students.find(s => s.id === studentId);
    if(!student){
        return res.status(404).json({
            success:false,
            message:"student not found"
        });
    }
    if(name){
        student.name = name;
    }
    if(age){
        student.age=age;
    }
    res.status(200).json({
        success:true,
        message:"student update successfult",
        data:student
    });

});


// تشغيل الخادم
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});