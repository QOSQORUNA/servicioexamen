var express = require('express');
var router = express.Router();

const cursos = [{
        id: 1,
        code: '1111',
        name: 'matematica I',
        miembros: [1, 2, 3]
    },
    {
        id: 2,
        code: '2222',
        name: 'integracion',
        miembros: [2]
    },
    {
        id: 3,
        code: '3333',
        name: 'ms I',
        miembros: [1, 3]
    },
]

const alumno = [{
        id: 1,
        name: 'jose',
        apellido: 'lovaton',

    },
    {
        id: 2,
        name: 'fernando',
        apellido: 'lopez',

    },
    {
        id: 3,
        name: 'alejandro',
        apellido: 'rupay',

    },
    {
        id: 4,
        name: 'jhon',
        apellido: 'rupay',

    },
]

const pagos = [{
        id: 1,
        idAl: 1,
        idCurso: 1,

    },
    {
        id: 2,
        idAl: 2,
        idCurso: 3,

    },
    {
        id: 3,
        idAl: 2,
        idCurso: 2,

    },
    {
        id: 4,
        idAl: 1,
        idCurso: 2,

    },
]





router.get('/cursos', function(req, res) {
    res.status(200).json({
        content: cursos
    });
});

router.get('/pagos', function(req, res) {
    res.status(200).json({
        content: pagos
    });
});
router.get('/student', function(req, res) {
    res.status(200).json({
        content: alumno
    });
});

router.get('/student/:studentId/course', function(req, res) {

    const estudiante = alumno.find(item => item.id == req.params.studentId);

    if (!estudiante) return res.status(404).json({
        errors: [
            'Recurso no encontrado'
        ]
    })

    let estudianteCursos = [];

    cursos.forEach(item => {
        if (item.miembros.includes(estudiante.id)) {
            estudianteCursos.push(item);
        }
    });

    const courses = estudianteCursos;

    res.status(200).json({
        content: { estudiante, courses }
    })

});


router.get('/course/:courseId/pagos', function(req, res) {

    const course = cursos.find(item => item.id == req.params.courseId)

    if (!course) return res.status(404).json({
        errors: [
            'Recurso no encontrado'
        ]
    })

    const pay = pagos.filter(item => item.idCurso == req.params.courseId)

    res.status(200).json({
        content: { course, pay }
    })

});


router.post('/course/:courseId/matriculas', function(req, res) {

    const course = cursos.find(item => item.id == req.params.courseId)

    if (!course) return res.status(404).json({
        errors: [
            'Recurso no encontrado'
        ]
    })

    let idEstudiante = req.body.idEstudiante; // viene de el formulario

    if (course.miembros.includes(idEstudiante)) {
        return res.json({
            message: 'El estudiante ya está en este curso'
        })
    }

    course.miembros.push(Number(idEstudiante));

    res.status(200).json({
        content: { course }
    })

});


// router.get('/course/:courseId/student/:studentId', function(req, res) {

//     const student = studentsArray.find(item => item.courseId == req.params.courseId && item.id == req.params.studentId)

//     if (!student) return res.status(404).json({
//         errors: [
//             'Recurso no encontrado'
//         ]
//     })

//     const course = coursesArray.find(item => item.id == req.params.courseId)

//     res.status(200).json({
//         content: {course, student}
//     })
// })

module.exports = router;