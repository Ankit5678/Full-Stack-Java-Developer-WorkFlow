//let users = [];
const saveUser = ()=>{
    
    // save string object in store
    
    // available with in a tab
    // sessionStorage.setItem(user.id, JSON.stringify(user));

    // available across all the tabs in a browser till the lifecycle

    //console.log(localStorage.getItem('users'));
    let users = [];
    
    let result = `${getMessage()}`;
    console.log(result);

    if(localStorage.getItem('users') != null){
        // append to the existing array
        users = JSON.parse(localStorage.getItem('users'));
        const userObj = {
            id: getMaxId(),
            name: document.getElementById('name').value,
            age: parseInt(document.getElementById('age').value),
            salary: parseInt(document.getElementById('salary').value)
        };
        users.push(userObj);
        localStorage.setItem('users',JSON.stringify(users));
    }else{
        // create the array
        // add a new object
        const userObj = {
            id: getMaxId(),
            name: document.getElementById('name').value,
            age: parseInt(document.getElementById('age').value),
            salary: parseInt(document.getElementById('salary').value)
        };
        users.push(userObj); 
        localStorage.setItem('users',JSON.stringify(users));  
    }
}

const getAll = () =>{
    let users = [];
    if(localStorage.getItem('users') !=null){
        users = JSON.parse(localStorage.getItem('users'));
        renderTable(users);
    }else{
        document.getElementById('emps').innerHTML = '<strong>No Records Found</strong>';
    }
}

const renderTable = (users)=>{
    const rows = renderRows(users);
    document.getElementById('emps').innerHTML = `<table>
                                                    <tr>
                                                        <th>Employee Details</th>
                                                    </tr>
                                                    ${rows}
                                               </table>`;
}

const renderRows = (users) =>{
    let rows = '';
    users.forEach(e=>{
        rows += `<tr>
                    <td> =><i> NAME :${e.name}, SALARY : ${e.salary}, AGE : ${e.age} </i>
                    <a href="#" onclick='del(${e.id})'>Delete Me!</a>
                    <a href="#" onclick='findById(${e.id})'>Find Me!</a>
                    </td>
                </tr>`;
    });
    return rows;
}
const getMessage = () =>{
    return "Hello";
}

const del = (eid) =>{
    let users = []
    users=JSON.parse(localStorage.getItem('users'))
    let _index= -1;

    users.find((u,index)=>{
        if(u.id == eid){
            _index = index;
            return u;
        }
    });
    users.splice(_index,1);
    console.log(users);
    localStorage.setItem('users',JSON.stringify(users));
    renderTable(users);
}

const getMaxId = () =>{
    let users = []
    if(localStorage.getItem('users') !=null){
        users=JSON.parse(localStorage.getItem('users'))
    }
    if(users.length == 0){
        return 1;
    }
    else{
        const lastId = users.sort((a,b)=>{
            return b.id - a.id;
        }).map(u=> {return u.id})[0];
        const maxId = parseInt(lastId) + 1;
        return maxId;
    }
}

const findById = (eid) =>{
    document.getElementById('id').value = parseInt(eid);
    let _index=-1;
    users1 = JSON.parse(localStorage.getItem('users'));
    //console.log(users1)
    let userFound =users1.find((u,index)=>{
        if(u.id==eid){
            _index = index;
            return u;
        }
    });
    document.getElementById('name').value=users1[_index].name
    document.getElementById('age').value=users1[_index].age
    document.getElementById('salary').value=users1[_index].salary
}

const updateInfo = () =>{
    //console.log(user1);
    //users.splice(index,1,user1); // add the user to user array
    //users[index] = user1;
    let id = document.getElementById('id').value
    const user = {
        id: parseInt(id),
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        salary: parseInt(document.getElementById('salary').value)
    };
    users = JSON.parse(localStorage.getItem('users'));
    users.splice(id-1,1,user);
    localStorage.setItem('users',JSON.stringify(users));
    renderTable(users);
}

const editUser = () =>{
    updateInfo();
}