
import Customer from './components/Customer';
import './App.css';

const customers = [
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
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer 
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })
      }
    </div>
  );
}

export default App;
