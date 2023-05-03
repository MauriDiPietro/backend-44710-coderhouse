import { Router } from "express";
const router = Router();

router.get('/', (req, res) => {
    res.render('vista1')
});

router.get('/view2', (req, res) => {
    res.render('vista2')
});

router.get('/view3', (req, res) => {
    let user = {
        firstname: 'Juan',
        lastname: 'Perez'
    };

    res.render('vista3', user);
    // res.render('vista3', {usuario: user})

});

const users = [
    // {
    //     name: 'Juan',
    //     lastname: 'Perez',
    //     age: 30,
    //     mail: 'juan@mail.com',
    //     phone: "65458942"
    // },
    // {
    //     name: 'Carlos',
    //     lastname: 'Perez',
    //     age: 30,
    //     mail: 'car@mail.com',
    //     phone: "6767676"
    // },
    // {
    //     name: 'Juana',
    //     lastname: 'Perez',
    //     age: 30,
    //     mail: 'juani@mail.com',
    //     phone: "6577"
    // },
    // {
    //     name: 'Ernestina',
    //     lastname: 'Perez',
    //     age: 30,
    //     mail: 'ernes@mail.com',
    //     phone: "43535"
    // }
]

router.get('/act', (req, res) => {
    const random = Math.floor(Math.random() * 4);
    const user = users[random];
    res.render('act', {...user});
});

router.get('/list', (req, res) => {
    res.render('list', { users })
});


router.get('/list2', (req, res) => {
    res.render('list2', { users })
});

export default router;