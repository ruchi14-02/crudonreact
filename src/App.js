import React, { useState } from 'react'

function App() {
  //creating variable state
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [active, setActive] = useState(null)

  //to change button from add to edit
  const [edit, setEdit] = useState(false)
  //ek array jisme sara data add karengy empty data
  const [users, setUsers] = useState([])


  const addUser = (e) => {
    e.preventDefault();
    //object banae hai jo data ko dd karta hai array mein
    const user = {
      name,
      email,
      address
    }

    if (edit) {
      //update user
      const copy = users;
      Object.assign(copy[active], user)
      setUsers([...copy])
      setEdit(false)
    }
    else {

      // data  ko array mein store karta hai 
      // previous data ko spread operator se aur 
      // new data usi me add karta hai
      //add user
      setUsers([...users, user])
    }
    //if we want any update on any value like name email and address
    setName("")
    setEmail("")
    setAddress("")



  }


  //edit fn
  const oncUpdateHandler = (index) => {

    //users k array se user ka index k=nikalna hai
    const user = users[index]
    //user ki value input field me set karnu h
    setName(user.name)
    setEmail(user.email)
    setAddress(user.address)
    setActive(index)
    setEdit(true)

  }

  const onDeleteHandler = (user) => {
    if (alert("Are you sure you want to delete?")) {
      const copy = users.filter((item) => item !== user)
      setUsers([...copy])
    }
  }
  const updateUser = () => { }
  return (
    <div>
      <h1 className='text-align:center'>React crud app without Database</h1>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xs-12 col-sm-10 col-md-8 col-lg-5'>
            <form onSubmit={addUser}>
              <div className='form-group'>
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='form-control' />
              </div>


              <div className='form-group'>
                <label htmlFor="">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' />
              </div>


              <div className='form-group'>
                <label htmlFor="">Address</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className='form-control' />
              </div>
              <button className='btn btn-success form-control'>
                {edit ? "update" : "Add"}
              </button>

            </form>
          </div>
        </div>
      </div>



      <table className='table table-bordered mt-5'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((users, index) => {
              return (
                <tr>
                  <td>{users.name}</td>
                  <td>{users.email}</td>
                  <td>{users.address}</td>
                  <td>
                    <button className='btn btn-info' onClick={() => oncUpdateHandler(index)}>Edit</button>
                  </td>
                  <td>
                    <button className='btn btn-danger' onClick={() => onDeleteHandler(user)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App