/* var xhr = new XMLHttpRequest();


xhr.open("GET", "https://reqres.in/api/users?page=2",true);
xhr.onload = function(){
    console.log(JSON.parse(xhr.responseText.search(10)));
};

xhr.send(3); */
let response = fetch('https://reqres.in/api/users?page=2')
.then(response => response.json())
.then(json => {for(let i =0;i<json.data.length;i++){
    if(json.data[i].id == 10){
        console.log('1 задание')
        console.log(json.data[i].first_name + ' ' + json.data[i].last_name)
        break;
    }
}})


console.log('2 задание')
let dataparse = JSON.parse(data);

let deptarray = [{"Отдел информационных систем":{"count":'',"avg_hours":'',"people":[]},"Отдел АСУ":{"count":'',"avg_hours":'',"people":[]}}]

function newobject(name,phone){
    this.name=name;
    this.phone=phone;
}
function sum(x){
    var s = 0;
    for (i = 0; i < x.length; i++){
       s += x[i]
    }
    return s
}
let avg_hours = []
let total_avg_hours=0
let count=0
for(let i=0;i<dataparse.length;i++){
    if(dataparse[i].dept == "Отдел АСУ"){
        const object = new newobject(dataparse[i].name, dataparse[i].phone)
        deptarray[0]["Отдел АСУ"].people.push(object)
        deptarray[0]["Отдел АСУ"].count = deptarray[0]["Отдел АСУ"].people.length
            if(dataparse[i].hours > 0){
                count++
                avg_hours.push(dataparse[i].hours)
            }
            total_avg_hours = sum(avg_hours)
            deptarray[0]["Отдел АСУ"].avg_hours= Math.round(total_avg_hours/count)
            if(i+2 == dataparse.length){
                avg_hours = []
                total_avg_hours=0
                count=0
            }
    }
}
for(let i=0;i<dataparse.length;i++){
    if(dataparse[i].dept =="Отдел информационных систем"){
        const object = new newobject(dataparse[i].name, dataparse[i].phone)
        deptarray[0]["Отдел информационных систем"].people.push(object)
        deptarray[0]["Отдел информационных систем"].count = deptarray[0]["Отдел информационных систем"].people.length
        if(dataparse[i].hours > 0){
            count++
            avg_hours.push(dataparse[i].hours)
        }
        total_avg_hours = sum(avg_hours)
        deptarray[0]["Отдел информационных систем"].avg_hours= Math.round(total_avg_hours/count)
        if(i+2 == dataparse.length){
            avg_hours = []
            total_avg_hours=0
            count=0
        }
    }
}


console.log(deptarray)
