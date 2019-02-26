
    function  createTable() {
        var JSONData = [
        {
            "firstName": "Ritika",
            "lastName": "Garg",
            "email": "ritikarg22@gmail.com",
            "id": 6181,
            "phoneNumber": 9569505450 ,
            "designation": "Sw Trainee",
            "DOB": "22-3-98",
        },
        {
            "firstName": "Shivani",
            "lastName": "Singh",
            "email": "shivani.singh@gmail.com",
            "id": 7823,
            "phoneNumber": 7827888728,
            "designation": "Sw Trainee",
            "DOB": "4-3-97",
        },
        {
            "firstName": "Teena",
            "lastName": "Khandelwal",
            "email": "teena.khandelwal@gmail.com",
            "id": 2311,
            "phoneNumber":7827378203 ,
            "designation": "Sw Trainee",
            "DOB": "5-8-96",
        },
        {
            "firstName": "Lakshay",
            "lastName": "Kapoor",
            "email": "lakshay.kapoor@gmail.com",
            "id": 6543,
            "phoneNumber": 9182938389,
            "designation": "Sw Trainee",
            "DOB": "21-11-95",
        },
        {
            "firstName": "Naman",
            "lastName": "Khetawat",
            "email": "naman.khetawat@gmail.com",
            "id": 6567,
            "phoneNumber": 7343554509,
            "designation": "Sw Trainee",
            "DOB": "21-10-96",
        },
        {
            "firstName": "Abhishek",
            "lastName": "Malik",
            "email": "abhi.malik@gmail.com",
            "id": 2320,
            "phoneNumber": 7855442689,
            "designation": "Sw Trainee" ,
            "DOB": "26-3-97",
        },
        {
            "firstName": "Sumang",
            "lastName": "Garg",
            "email": "sumang.garg@gmail.com",
            "id": 9080,
            "phoneNumber":9328335281 ,
            "designation":"Sw Trainee" ,
            "DOB": "16-6-98",
        },
        {
            "firstName": "Arushi",
            "lastName": "Chaudhry",
            "email": "arushi.chaudhry@gmail.com",
            "id": 1290,
            "phoneNumber": 9392735387 ,
            "designation": "Sw Trainee",
            "DOB": "12-8-97",
        }
    ]

    var headerData=[];
    for(var index = 0; index < JSONData.length; index++){
        for (var key in JSONData[index]){
            if (headerData.indexOf(key) === -1){
                headerData.push(key);
            }
        }
    }

    var table = document.createElement("table");

    var tr = document.createElement("tr");
    table.appendChild(tr)

    for(var index = 0; index < headerData.length; index++ ){
        var th = document.createElement("th");
        th.innerHTML = headerData[index];
        tr.appendChild(th);
    }

    for (var index = 0; index < JSONData.length; index++) {

        tr = document.createElement("tr");
        table.appendChild(tr);

        for (var index1 = 0; index1 < headerData.length; index1++) {
            var tableData = document.createElement("td");
            tr.appendChild(tableData)
            tableData.innerHTML = JSONData[index][headerData[index1]];
        }
    }

    var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);

    }
