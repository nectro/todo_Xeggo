import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from './state';

function App() {
  const [number, setNumber] = useState(null)

  const state = useSelector(state => state)

  const dispatch = useDispatch()

  const { updateTask, setUser } = bindActionCreators(actionCreators, dispatch);


  useEffect(() => {
    setUser("622c2fc18668dccdbf42ade1", "same", "email")
  }, [])

  useEffect(()=>{
    console.log(state)
    setNumber(state.account)
  },[state])

  const AddTask = (userId, task)=>{


    const reqBody = {
      userId,
      task
    };

  axios.post("http://localhost:5000/task/add", reqBody)
      .then((res)=>{
          // console.log(res.data[0].task)
          const data = res.data[0].task;
          updateTask(data)
      })

  }

  return (
    <div className="App">
      <div>{number}</div>
      <button onClick={()=>AddTask("622c2fc18668dccdbf42ade1", "the best of the year")}>add</button>
    </div>
  );
}

export default App;
