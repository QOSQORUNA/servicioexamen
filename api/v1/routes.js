var express = require('express');
var router = express.Router();

const proveedorArray = [
    {
        id: 1,
        dni: '71002152',
        name: 'Fernando',
        lastName: 'Lovaton Lopez',
        sancion: true,
        famMuni: true,
        famCongreso: true,
        estadoProv: false,
        rubro: 'abarrotes'
    },
    {
        id: 2,
        dni: '71002153',
        name: 'Jose',
        lastName: 'Lovaton Lopez',
        sancion: true,
        famMuni: false,
        famCongreso: false,
        estadoProv: false,
        rubro: 'software'
    },
    {
        id: 3,
        dni: '71002154',
        name: 'lourdes',
        lastName: 'Lopez Castillo',
        sancion: false,
        famMuni: false,
        famCongreso: false,
        estadoProv: true,
        rubro: 'construccion'
    },
    {
        id: 4,
        dni: '71002155',
        name: 'David',
        lastName: 'Lovaton Lopez',
        sancion: false,
        famMuni: false,
        famCongreso: false,
        estadoProv: true,
        rubro: 'libreria'
    },
    {
        id: 5,
        dni: '71002156',
        name: 'Jhon',
        lastName: 'Rupay Eugenio',
        sancion: true,
        famMuni: true,
        famCongreso: true,
        estadoProv: false,
        rubro: 'abarrotes'
    },
    {
        id: 6,
        dni: '71002157',
        name: 'Alejandro',
        lastName: 'Rupay Fasabi',
        sancion: false,
        famMuni: false,
        famCongreso: false,
        estadoProv: true,
        rubro: 'abarrotes'
    },
    {
        id: 7,
        dni: '71002158',
        name: 'Brian',
        lastName: 'Pando',
        sancion: true,
        famMuni: true,
        famCongreso: true,
        estadoProv: true,
        rubro: 'abarrotes'
    },
]



router.get('/prov', function(req, res) {
    res.status(200).json({
        content: proveedorArray
    })
});

router.get('/prov/:provId', function(req, res) {

    const provId = proveedorArray.find(item => item.id == req.params.provId)
    
    if (!provId) return res.status(404).json({
        errors: [
            'Recurso no encontrado'
        ]
    })

    res.status(200).json({
        content: provId
    })

});
router.get('/prov/dni/:provDni', function(req, res) {

    const provDni = proveedorArray.find(item => item.dni == req.params.provDni)
    
    if (!provDni) return res.status(404).json({
        errors: [
            'Recurso no encontrado'
        ]
    })

    res.status(200).json({
        content: provDni
    })

});

// router.get('/course/:courseId/student', function(req, res) {

//     const course = coursesArray.find(item => item.id == req.params.courseId)

//     if (!course) return res.status(404).json({
//         errors: [
//             'Recurso no encontrado'
//         ]
//     })

//     const students = studentsArray.filter(item => item.courseId == req.params.courseId)

//     res.status(200).json({
//         content: {course, students}
//     })
    
// });

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