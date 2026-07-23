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


// تشغيل الخادم
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});