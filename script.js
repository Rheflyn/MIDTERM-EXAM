const express = require('express');
const app = express();
const bodyparser = require('bodyparser');
const { urlencoded } = require('body-parser');




var dishes = [
    {'type':'Sisig',
     'province':'Pampanga',
     'price':'220',

    },
    {
    'type':'Salpicao',
    'province':'Quezon',
    'price':'180',
    },
    {
    'type':'Bagnet',
    'province':'Ilocos',
    'price':'370',
    }


];
if(dishes != 1) {
    app.get('/', function (req,res) {
    res.write(200, {'Content-Type':'application/JSON'});
    res.send(JSON.stringify(dishes));
    res.end();
});

}
else{
    res.write("<html><body><h1>Record not Found</h1></body></html>");
    res.end();

};

app.post('/create', urlencodedparser, (req,res) => {
    var dishes= {
        dishes.push(dishes);
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write("<html><body><h1></h1>Record not Found</body></html>");
        res.end();
    }
});
    


    


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
});

//Buan Enrico
//WD-303