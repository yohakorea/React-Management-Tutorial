const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '황용하',
            'birthday': '701111',
            'gender': '남자',
            'job': '사장'
          },
          {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '황길동',
            'birthday': '843245',
            'gender': '남자',
            'job': '대학생'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '고둘리',
            'birthday': '943245',
            'gender': '남자',
            'job': '알바'
          }        
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));