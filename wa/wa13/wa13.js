// Problem 1

let HR = {
    "employees": [
        { "name":"Sam", "department": "Tech", "designation": "Manager", "salary": 40000, "raiseEligible": true},
        {"name":"Mary", "department": "Finance", "designation": "Trainee", "salary": 18500, "raiseEligible": true},
        {"name":"Bill", "department": "HR", "designation": "Executive", "salary": 21200, "raiseEligible": false}

    ]
}
console.log(HR["employees"]);


//Problem 2

let company = {
    "companyInfo": [
        {
            "companyName": "Tech Stars",
            "website": "www.techstars.site",
            "employees": HR["employees"]
        }
    ]
}
console.log(company["companyInfo"]);

//Problem 3

HR["employees"].push(
    {"name":"Anna", 
    "department": "Tech", 
    "designation": "Executive", 
    "salary": 25600, 
    "raiseEligible": false}
);

console.log(HR["employees"][3]);

//Problem 4

let totalSalary = 0
for (let i = 0; i < HR["employees"].length; i++) {
    console.log(i);
    totalSalary += HR["employees"][i].salary;
}

console.log(totalSalary);

// Problem 5

function giveRaise() {
    for (let i = 0; i < HR["employees"].length; i++) { 
        if(HR["employees"][i]["raiseEligible"] == true) {
           HR["employees"][i]["salary"] = HR["employees"][i]["salary"] * 1.1;
           HR["employees"][i]["raiseEligible"] == false;
        
    }
  }
  console.log(HR["employees"]);
}
giveRaise();  


//Problem 6

const wfh = ["Anna", "Sam"];
for (let i = 0; i < HR["employees"].length; i++) {
    if (wfh.includes(HR["employees"][i]["name"])) {
        HR["employees"][i]["wfh"] = true;
    } else {
        HR["employees"][i]["wfh"] = false;
    }
    
}
console.log(HR["employees"]);

