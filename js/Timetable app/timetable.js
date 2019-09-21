// let cls = [
//     {
//         day: 'Mon',
//         time: 10,
//         subject: 'math',
//         teacher: 'bob',
//         classNo: 'class1'
//     },
//     {
//         day: 'Mon',
//         time: 10,
//         subject: 'sci',
//         teacher: 'sam',
//         classNo: 'class2'
//     },
//     {
//         day: 'Mon',
//         time: 11,
//         subject: 'math',
//         teacher: 'bob',
//         classNo: 'class1'
//     }
// ];
let teachers = ["sam","bob","hari","john"];

const timetable = () =>{
    let cls = JSON.parse(localStorage.getItem('cls'));
    if(localStorage.getItem('cls')!=null){
        renderTable(cls);
    }
    else{
        formPopUp();
    }
}

const renderTable = (cls) =>{
    const rows = renderRows(cls);
    document.getElementById('timetable').innerHTML = `<table class="table">
                                                        <tr>
                                                            <th><a href="#" onclick='formPopUp();'>Timetable Details</a></th>
                                                        </tr>
                                                        <tr>
                                                            <th>Mon</th>
                                                            <th>Tue</th>
                                                            <th>Wed</th>
                                                            <th>Thu</th>
                                                            <th>Fri</th>
                                                        </tr>
                                                        ${rows}
                                                    </table>`;
}

const renderRows = (cls) =>{
    let rows = '';
    cls.forEach(c=>{
        if(document.getElementById('class').value === c.classNo){
            if(c.day == "mon"){
                rows += `<tr>
                            <td><i> TIME :<b>${c.time} -- ${c.time+1}</b>, SUBJECT : <b>${c.subject}</b>, TEACHER : <b>${c.teacher}</b> </i></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>`;
            }
            if(c.day == "tue"){
                rows += `<tr>
                            <td></td>
                            <td><i> TIME :<b>${c.time} -- ${c.time+1}</b>, SUBJECT : <b>${c.subject}</b>, TEACHER : <b>${c.teacher}</b> </i></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>`;
            }
            if(c.day == "wed"){
                rows += `<tr>
                            <td></td>
                            <td></td>
                            <td><i> TIME :<b>${c.time} -- ${c.time+1}</b>, SUBJECT : <b>${c.subject}</b>, TEACHER : <b>${c.teacher}</b> </i></td>
                            <td></td>
                            <td></td>
                        </tr>`;
            }
            if(c.day == "thu"){
                rows += `<tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><i> TIME :<b>${c.time} -- ${c.time+1}</b>, SUBJECT : <b>${c.subject}</b>, TEACHER : <b>${c.teacher}</b> </i></td>
                            <td></td>
                        </tr>`;
            }
            if(c.day == "fri"){
                rows += `<tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>    
                            <td><i> TIME :<b>${c.time} -- ${c.time+1}</b>, SUBJECT : <b>${c.subject}</b>, TEACHER : <b>${c.teacher}</b> </i>
                            </td>
                        </tr>`;
            }
        }
    });
    return rows;
}

const generateOptions = (day,time) =>{
    console.log("into generate options"+ day  +time)
    cls = JSON.parse(localStorage.getItem('cls'));
    let options = '';
    let availableTeachers = []
    availableTeachers = teachers;
    if(localStorage.getItem('cls')!=null){
            cls.forEach(c=>{
                let _index= -1;
                availableTeachers.find((t,index)=>{
                    if(t == c.teacher && day == c.day && time == c.time){
                        _index = index;
                        return c;
                    }
                });
                if(index!= -1)
                    availableTeachers.splice(_index,1)
            });
    }
    availableTeachers.forEach(at=>{
        options+=`<option>${at}</option>`;
    });
    return options;
}
const formPopUp = () =>{
    document.getElementById('form').innerHTML = `<form id="info">
                    <label>day:</label><input type="text" id="day"/><br>
                    <label>time:</label><input type="text" id="time" onchange="readDay()"/><br>
                    <label>subject:</label><input type="text" id="subject"/><br>
                    <label>teacher:</label><div id="t"></div><br>
                    <label>classNo:</label><input type="text" id="classno"/><br>
                    <input type="button" onclick='validInput();' value="save"/>
                </form>`
}

const readDay = () =>{
    let day = document.getElementById('day').value
    let time = document.getElementById('time').value
    console.log(day);
    setoptions = generateOptions(day,time)
    console.log(setoptions)
    document.getElementById('t').innerHTML=`<select id="teacher">${setoptions}</select>`
}

const validInput = () =>{
    console.log("validate");
    let cls = [];
    if(localStorage.getItem('cls')!= null){
        cls = JSON.parse(localStorage.getItem('cls'));
        const clsObj = {
            day: document.getElementById('day').value,
            time: parseInt(document.getElementById('time').value),
            subject: document.getElementById('subject').value,
            teacher: document.getElementById('teacher').value,
            classNo: document.getElementById('classno').value
        };
        cls.push(clsObj);
        localStorage.setItem('cls',JSON.stringify(cls));
    }
    else{
        const clsObj = {
            day: document.getElementById('day').value,
            time: parseInt(document.getElementById('time').value),
            subject: document.getElementById('subject').value,
            teacher: document.getElementById('teacher').value,
            classNo: document.getElementById('classno').value
        };
        cls.push(clsObj); 
        localStorage.setItem('cls',JSON.stringify(cls));
    }
}