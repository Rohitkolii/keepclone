
import { useState } from 'react';
import './App.css';
import DataInput from './Components/DataInput';
import DataListContainer from './Components/DataListContainer';
import Navbar from './Components/Navbar';

function App() {

 const dummydata = [
  {
    title: 'This is Example1 of a note how it will look like',
  },
  {
    title: 'This is Example2 of a note how it will look like',
  },
  {
    title: 'This is Example3 of a note how it will look like',
  },
  {
    title: 'This is Example4 of a note how it will look like',
  },
  {
    title: 'This is Example5 of a note how it will look like',
  },
  {
    title: 'This is Example6 of a note how it will look like',
  },
  ]

  const [newNotes, setnewNotes] = useState(dummydata)

  const GetDATA = (data) =>{
    setnewNotes([data, ...newNotes])
    // console.log(data)
  }

  const[menu, setmenu] = useState(false)
  const setMenuValue = ( menu )=> {

  }


  return (
    <div className="App">
      <Navbar menu={menu} setmenu={setmenu} setMenuValue={setMenuValue} />
      <DataInput GetDATA={GetDATA} />
      <DataListContainer menu={menu} data={newNotes} />
    </div>
  );
}

export default App;
