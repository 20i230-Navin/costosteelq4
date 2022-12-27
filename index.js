const nxtbtn=document.querySelector(".login-btn");
const prevbtn=document.querySelector(".prev-btn");

const employeeview=document.querySelector(".Employee");
const studentview=document.querySelector(".student");

nxtbtn.addEventListener("click",()=>
{
    studentview.classList.add("studentviewed");
    employeeview.classList.add("Employeeclose")
    employeeview.classList.remove("Employee");

    const employeename=document.getElementById("employeename").value;
    
    console.log(employeename);
})

prevbtn.addEventListener("click",()=>
{
    studentview.classList.remove("studentviewed");
    employeeview.classList.remove("Employeeclose");
    employeeview.classList.add("Employee");

})


function validtheform()
{
    const empname=document.Myform.employeename.value;
    const department=document.Myform.department.value;
    const Designation=document.Myform.Designation.value;
    const doj=document.Myform.doj.value;
    const phone =document.Myform.phone.value;
    const email=document.Myform.email.value;

    const childrenname=document.Myform.childrenname.value;
    const collegename=document.Myform.collegename.value;
    const mark=document.Myform.mark.value;


    const sem = document.getElementById('semno').value;

    const bonofied = document.Myform.fruit_1;
    const proof = document.Myform.fruit_2;

    if(empname.length == 0 || department.length==0 || Designation.length==0 || doj.length==0||phone.length==0 || email.lenght==0 || childrenname.length==0 ||collegename.length==0 ||mark.lenght==0)
    {
        alert("Fill the empty fields");
        return false;
    }
    if(phone.length<10)
    {
        alert("invalid number")
        return false;
    }

    if(!bonofied.checked || !proof.checked)
    {
        alert("attach the files")
        return false;
    }  
    alert(empname+" "+ department +" "+Designation+" "+doj+" "+phone+" "+email)  
    return true;
}