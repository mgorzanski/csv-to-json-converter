const path = require('path');
const fs = require('fs');

const csvToJson = (file) => {
    fs.readFile(path.join(__dirname, file), (err, data) => {
        if (err) return console.error(err);
        data = data.toString();
        //get every line to an array
        data = data.split('\n');
        data = data.map((element) => {
            //get every item in line to an array
            return element.trim().split(',');
        });
        let headers = data[0];
        let json = [];
        //start after headers
        for (let i = 1; i < data.length; i++) {
            let item = {};
            for (let j = 0; j < data[i].length; j++) {
                item[headers[j]] = data[i][j];
            }
            json.push(item);
        }
        json = JSON.stringify(json);
        console.log(json);
    });
};

csvToJson(process.argv[2]);