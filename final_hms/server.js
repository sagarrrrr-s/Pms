const epxr = require('express');
const parBody = require('body-parser');
const path = require('path');

const people = require('./routes/users');
const Patient = require('./routes/users/Patient/patient');
const Employee = require('./routes/users/Employee/employee');
const Doctor = require('./routes/users/Doctor/docter');
const Admin = require('./routes/users/Administrator/admin');
const midSuper = require('./routes/users/Administrator/superAdmin');
const ipa = require('./routes/api/api');


const app = epxr();

app.use(parBody.json());
app.use(parBody.urlencoded({ extended: false }));

app.use('/users', people);
app.use('/patient', Patient);
app.use('/employee', Employee);
app.use('/doctor' , Doctor);
app.use('/admin', Admin);
app.use('/super', midSuper);
app.use('/api', ipa);

app.use(epxr.static(path.join(__dirname + '/client/build')));

app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


const RT = process.env.RT || 5000;
app.listen(RT, () => console.log(`Server started at port ${RT}`));