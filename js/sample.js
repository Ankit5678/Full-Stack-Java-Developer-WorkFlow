let users = [
    {
        id: 1,
        name : 'Bob',
        salary: 1000,
        organization: 'IBM'
    },
    {
        id: 2,
        name : 'John',
        salary: 500,
        organization : 'IBM'
    },
    {
        id: 3,
        name : 'Steve',
        salary: 700,
        organization : 'CTS'
    },
    {
        id: 4,
        name : 'Ankit',
        salary: 10000,
        organization : 'IBM'
    }
];
const user = {
    id : 1,
    name: 'Bob',
    salary : 1000
};

const callMe = () => {
    //console.log("Call Me");
    document.getElementById('txt').value = "Call Me";
}

const findByOrganization = ()=>{
    let organization = 'IBM';
    users.filter(u =>{
        return u.organization == organization; 
    }).forEach(u=>console.log( JSON.stringify(u)));
}
// list all users
const getAllUsers = () =>{
    let rows = '';
    // create records
    users.forEach(u =>{
        rows += `<tr>
                    <td>${u.id}</td>
                    <td>${u.name}</td>
                    <td>${u.organization}</td>
                    <td>
                    <a href="#" onclick='removeUser(${u.id})'>Remove</a>
                    <a href="#" onclick='editUser(${u.id})'>Edit</a>
                    </td>
                </tr>`;
    });

    let table = `<table>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Organization</th>
                        <th></th>
                    </tr>
                        ${rows}
                </table>`;

    document.getElementById('dv-users').innerHTML = table; 
}
// add a new user
const addUser = () =>{
    let id = parseInt(document.getElementById('id').value)
    let _index = -1;
    if(id>0){
        updateInfo();
    }
    else{
        const user = {
            id: getMaxId(),
            name: document.getElementById('name').value,
            organization: document.getElementById('org').value,
            salary: parseInt(document.getElementById('salary').value)
        };
        users.push(user); // add the user to user array
        getAllUsers();
    } // reload user table
}
const compare = () =>{
    let sal = parseInt(document.getElementById('sal').value)
    console.log(sal)
    let _rows = '';
    users.filter(u=>{
        return u.salary >= sal;
    }).forEach(u =>{
            _rows += `<tr>
                        <td>${u.id}</td>
                        <td>${u.name}</td>
                        <td>${u.organization}</td>
                        <td>
                        <a href="#" onclick='removeUser(${u.id})'>Remove</a>
                        <a href="#" onclick='editUser(${u.id})'>Edit</a>
                        </td>
                    </tr>`;
        });

    let _table = `<table>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Organization</th>
                        <th></th>
                    </tr>
                        ${_rows}
                </table>`;

    document.getElementById('dv-users').innerHTML = _table;

    //document.getElementById('dv-users').innerHTML = usersfound.name
}
const updateInfo = () =>{
    //console.log(user1);
    //users.splice(index,1,user1); // add the user to user array
    //users[index] = user1;
    let id = document.getElementById('id').value
    const user = {
        id: id,
        name: document.getElementById('name').value,
        organization: document.getElementById('org').value,
        salary: parseInt(document.getElementById('salary').value)
    };
    users.splice(id-1,1,user);
    getAllUsers(); // reload user table
}

// remove a user
const removeUser = (uId)=>{
    let _index= -1;

    users.find((u,index)=>{
        if(u.id == uId){
            _index = index;
            return u;
        }
    });
    users.splice(_index,1);

    getAllUsers();
}

//edit a user
const editUser = (uId) =>{
    let _index=-1;

    let userFound =users.find((u,index)=>{
        if(u.id==uId){
            _index = index;
            return u;
        }
    });
    document.getElementById('name').value=users[_index].name
    document.getElementById('org').value=users[_index].organization
    document.getElementById('salary').value=users[_index].salary
    document.getElementById('id').value=users[_index].id
    //console.log(users[_index].name)
    //console.log(upUser);
    //updateInfo(upUser,_index)
    //getAllUsers();
}

const sortByName = () =>{
    users.sort((u1,u2) =>{
        if(u1.name > u2.name){
            return 1;
        }else if(u1.name < u2.name){
            return -1;
        }else{
            return 0;
        }
    });
    getAllUsers();
}

const sortByOrganization = () =>{
    users.sort((u1,u2) =>{
        if(u1.organization > u2.organization){
            return 1;
        }
        else if(u1.organization < u2.organization){
            return -1;
        }else{
            return 0;
        }
    });
    getAllUsers();
}
const getMaxId = () =>{
    const uIds = users.sort((a,b)=>{
        return a.id > b.id;
    }).map(u=> {return u.id});
    console.log(uIds);
    const maxId = 3;
    return maxId + 1;
}

const convert = () =>{
    if(document.getElementById('cur').value == "inr"){
        let r = parseInt(document.getElementById('inconv').value)/60;
        document.getElementById('outconv').value = r;
    }

    if(document.getElementById('cur').value == "usd"){
        let r = parseInt(document.getElementById('inconv').value)*60;
        document.getElementById('outconv').value = r;
    }
}