
var id = undefined;
var uname = undefined;
var email = undefined;
var contact = undefined;
var salary = undefined;
var bonus = undefined;
var join_date = undefined;
var exp = undefined;

var tbdy = undefined;
var emp = [];

function init()
{
	id = document.getElementById('eid');
	uname = document.getElementById('ename');
	email = document.getElementById('eemail');
	contact = document.getElementById('econtact');
	salary = document.getElementById('esal');
	bonus = document.getElementById('ebonus');
	exp = document.getElementById('eexp');
	join_date = document.getElementById('edate');
	
	tbdy = document.getElementById("tbdy");
	
	//Data Fetch From Local Storage
	var data = localStorage.getItem("employee");
    var data_arr = JSON.parse(data);
    //alert(data_arr+" : "+data_arr)
	
	for(var e_data of data_arr)
	{
		emp.push(e_data);
		showDataOnTable(e_data);
	}
	
}

function addEmployee()
{
  //Get Value or data from Object
  var e_id = id.value;
  var e_name = uname.value;
  var e_email = email.value;
  var e_contact = contact.value;
  var e_sal = salary.value*1;
  var e_bonus = bonus.value*1;
  var e_exp = exp.value;
  var e_date = join_date.value;
  
  //create Object : 
  var eobj = {id:e_id,name:e_name,email:e_email,contact:e_contact,salary:e_sal,bonus:e_bonus,exp:e_exp,join:e_date};
  console.log("Object is : "+eobj);  
  emp.push(eobj)
  saveData();
}
function saveData()
{
  //Convert Obejct into JSON or String format	
  var e = JSON.stringify(emp);
	
  //Data Save In LocalStorage	
  localStorage.setItem("employee",e);	
}
function showDataOnTable(obj)
{
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td"); 
  var td5 = document.createElement("td");
  var td6 = document.createElement("td");
  var td7 = document.createElement("td");
  var td8 = document.createElement("td");
  var td9 = document.createElement("td");
  var td10 = document.createElement("td");
  var td11 = document.createElement("td");
  var td12 = document.createElement("td");  
  
  var btn1 = document.createElement('button');
  var btn2 = document.createElement('button');

  btn1.innerText= 'Edit';
  btn2.innerText= 'Delete';  

  btn1.setAttribute("class","btn-success")
  btn2.setAttribute("class","btn-danger")

  btn1.onclick = editEmployee;
  btn2.onclick = deleteEmployee;

  td11.appendChild(btn1);
  td12.appendChild(btn2);

  td1.innerText = emp.length;
  td2.innerText = obj.id;
  td3.innerText = obj.name;
  td4.innerText = obj.email;
  td5.innerText = obj.contact;
  td6.innerText = obj.join;
  td7.innerText = obj.exp;
  td8.innerText = obj.salary;
  td9.innerText = obj.bonus;
  
  var sal = obj.salary;
  var bon = obj.bonus;
  var sum = 0;
  sum = sal + parseInt(sal * (bon/100));
  
  td10.innerText = sum;
  
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6);
  tr.appendChild(td7);
  tr.appendChild(td8);
  tr.appendChild(td9);
  tr.appendChild(td10);
  tr.appendChild(td11);
  tr.appendChild(td12);
  
  tbdy.appendChild(tr);
}

function deleteEmployee()
{
	alert("Hello Delete");  
} 

function editEmployee()
{
	alert("Hello Edit");  
} 
var btn2='Edit';

