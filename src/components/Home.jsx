import React from 'react'
import axios from 'axios'
import {useEffect,useState} from 'react'


function Home () {
  const [data, setData] = useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => setData(res.data))
    .catch(err=> console.log(err));

  },[])
  return (
    <div ClassName='container'>
      <div ClassName='mt-3'>
        <h1>Blog Dashboard</h1>
        <table ClassName='table'>
          <thread>
            <tr>
                 <th>UserId</th>
                 <th>Id</th>
                 <th>Title</th>
                 <th>Body</th>
  
            </tr>
            </thread>
            <tbody>
              
              {
                data.map((user,index) => {
                return <tr key={index}>
                    <td>{user.userId}</td>
                    <td>{user.id}</td>
                    <td>{user.title}</td>
                    <td>{user.body}</td>
                  </tr>
              
                })
               }
            </tbody>
          </table>
      </div>
    </div>
  )
}

export default Home
