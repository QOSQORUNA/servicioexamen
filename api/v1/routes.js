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
        rubro: 1
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
        rubro: 2
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
        rubro: 3
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
        rubro: 4
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
        rubro: 5
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
        rubro: 1
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
        rubro: 3
    },
]

const rubrosArray = [
    {
        id: 1,
        name: 'abarrotes',
     
    },
    {
        id: 2,
        name: 'software',
       
    },
    {
        id: 3,
        name: 'construccion',
       
    },
    {
        id: 4,
        name: 'libreria',
    },
    {
        id: 5,
        name: 'restaurant',
    },
    {
        id: 6,
        name: 'cerveceria',
    }
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

router.get('/rubro', function(req, res) {
    res.status(200).json({
        content: rubrosArray
    })
});

router.get('/prov/:provId/rubro', function(req, res) {

    const prov = proveedorArray.find(item => item.id == req.params.provId)

    if (!prov) return res.status(404).json({
        errors: [
            'Recurso no encontrado'
        ]
    })

    const rubro = rubrosArray.filter(item => item.id == prov.rubro)

    res.status(200).json({
        content:  rubro
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