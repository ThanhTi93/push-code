import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import './Home.css';
export default function Home({showModal, setShowModal}) {
  const [users, setUsers] = useState([]);
  const{id} = useParams();
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    loadUser();
  },[]);
  const loadUser= async()=>{
    const result = await axios.get("http://localhost:8080/DemoSpring/users");
    setUsers(result.data);

  };


  const deleteUser=async (id)=>{
    await axios.delete(`http://localhost:8080/DemoSpring/user/${id}`)
    loadUser()
  };
  const handleView = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };
  return (
    <div className="container">
      <div className="py-4">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user,index)=>(
                <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => handleView(user)}
                  >
                    View
                  </button>
                   <Link className="btn btn-outline-primary mx-2"
                   to={`/edituser/${user.id}`}
                   >Edit</Link>
                   <button className="btn btn-danger mx-2"
                   onClick={()=>deleteUser(user.id)}
                   >Delete</button>
                </td>
              </tr>
              )
            )}
          </tbody>
        </table>
        {selectedUser && (
          <div
            className={`modal ${showModal ? "d-block" : "d-none"}`}
            tabIndex="-1"
            role="dialog"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">View User</h5>
                    <span aria-hidden="true">&times;</span>
                    </div>
            <div className="modal-body">
              <p><strong>Name: </strong>{selectedUser.name}</p>
              <p><strong>Username: </strong>{selectedUser.username}</p>
              <p><strong>Email: </strong>{selectedUser.email}</p>
              <p><strong>Phone: </strong>{selectedUser.phone}</p>
              <p><strong>Website: </strong>{selectedUser.website}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
      </div>
    </div>
  );
}
