const Student={
    name:"Ram",
    class:8,
    age:12,
    city:"Noida",
    id:109,
    addrress:"Street-11,Parklane"
};

const studentdetails= function(stu){
    const newarticle=document.createElement("article");
    newarticle.innerHTML=`
          <h1>${Student.name}</h1>
          <p>Bleow are the student details listed</p>
            <ul>
               <li>Class:${Student.class}</li>
               <li>Age:${Student.age}</li>
               <li>City:${Student.city}</li>
               <li>Id:${Student.id}</li>
               <li>Address:${Student.addrress}</li>
            </ul>
    `;
    return newarticle;

};

const thearticle= studentdetails(Student);
console.log(thearticle);

const main=document.querySelector("main");
main.append(studentdetails(Student));