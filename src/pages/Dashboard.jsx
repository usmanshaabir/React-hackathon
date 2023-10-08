import React, { useState } from 'react';
import { firestore } from '../Firebase/Config';
import { doc, setDoc } from "firebase/firestore";
import GetAData from './GetAData';


const initState = { name: '', roolNumber: '', course: '', batch: '' }

const Dashboard = () => {
  const [state, setState] = useState(initState);

  const handleChange = (event) => {
    setState((prevState) => ({ ...prevState, [event.target.name]: event.target.value }))
  }

  const handleSave = async () => {
    const { name, roolNumber, course, batch } = state;
    const studentData = { name, roolNumber, course, batch, id: Math.random().toString(36).slice(2) };

    try {
      await setDoc(doc(firestore, "students", studentData.id), studentData);
      console.log('Data saved successfully');
    } catch (error) {
      console.error('Data not saved', error);
    }
  };



  return (
    <>
      <div className="container">
        <div className="row">
          <div className="text-center">
            <h1>Add Student</h1>
            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add Student</button>
              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Add Student
                      </h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <div className="form-group">
                        <label htmlFor="studentName">Student Name</label>
                        <input type="text" name='name' className="form-control" onChange={handleChange} placeholder='Enter Your Name'
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="studentID">Student ID</label>
                        <input type="number" name='roolNumber' className="form-control" placeholder='Enter Your Id' onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="course">Course</label>
                        <input type="text" name='course' className="form-control" placeholder='Enter Your Course' onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="batch">Batch</label>
                        <input type="text" name='batch' className="form-control" onChange={handleChange}
                          placeholder='Enter Your Batch Number'
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSave}>
                        Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GetAData />
    </>
  );
};

export default Dashboard;
