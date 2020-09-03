var express = require('express');
var router = express.Router();

const coursesArray = [
    {
        id: 1,
        name: 'programación',
    },
    {
        id: 2,
        name: 'matemática'
    },
    {
        id: 3,
        name: 'inglés'
    },
    {
        id: 4,
        name: 'Integracion'
    },
    {
        id: 5,
        name: 'Tesis'
    }
]

const studentsArray = [
    {
        id: 1,
        name: 'Fernando',
        courseId: 1
    },
    {
        id: 2,
        name: 'Osso',
        courseId: 2
    },
    {
        id: 3,
        name: 'Correlon',
        courseId: 3
    },
    {
        id: 4,
        name: 'Nayhua',
        courseId: 2
    },
    {
        id: 5,
        name: 'Zurdo',
        courseId: 1
    },
    {
        id: 6,
        name: 'lopez',
        courseId: 2
    },
    {
        id: 7,
        name: 'Jose',
        courseId: 5
    },
    {
        id: 8,
        name: 'lopez Lovaton',
        courseId: 4
    }
]

router.get('/course', function(req, res) {
    res.status(200).json({
        content: coursesArray
    })
});

router.get('/course/:courseId', function(req, res) {

    const course = coursesArray.find(item => item.id == req.params.courseId)
    
    if (!course) return res.status(404).json({
        errors: [
            'Recurso no encontrado'
        ]
    })

    res.status(200).json({
        content: course
    })

});

router.get('/course/:courseId/student', function(req, res) {

    const course = coursesArray.find(item => item.id == req.params.courseId)

    if (!course) return res.status(404).json({
        errors: [
            'Recurso no encontrado'
        ]
    })

    const students = studentsArray.filter(item => item.courseId == req.params.courseId)

    res.status(200).json({
        content: {course, students}
    })
    
});

router.get('/course/:courseId/student/:studentId', function(req, res) {

    const student = studentsArray.find(item => item.courseId == req.params.courseId && item.id == req.params.studentId)

    if (!student) return res.status(404).json({
        errors: [
            'Recurso no encontrado'
        ]
    })

    const course = coursesArray.find(item => item.id == req.params.courseId)

    res.status(200).json({
        content: {course, student}
    })
})

module.exports = router;