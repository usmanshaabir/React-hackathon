import React, { useState } from 'react';
import { firestore } from '../Firebase/Config';
import { doc, setDoc } from "firebase/firestore";
import GetCourse from '../pages/GetCourse';


const Users = () => {

  const [selectedOption1, setSelectedOption1] = useState(''); // Define state for Dropdown 1
  const [selectedOption2, setSelectedOption2] = useState(''); // Define state for Dropdown 2
  const [selectedOption3, setSelectedOption3] = useState('');
  const handleSave = async () => {
    // Collect data from the dropdowns or any other form inputs
    const dataToSave = {
      webApplication: selectedOption1,
      mobileApplication: selectedOption2,
      graphicDesigner: selectedOption3,
      id: Math.random().toString(36).slice(2),
    };

    try {
      await setDoc(doc(firestore, "courses", dataToSave.id), dataToSave);
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
            <h1>Add Course</h1>
            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add Course</button>
              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Add Course
                      </h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      {/* Dropdown 1 */}
                      <div className="mb-3">
                        <label htmlFor="dropdown1" className="form-label">Web and Mobile Application</label>
                        <select
                          id="dropdown1"
                          className="form-select"
                          value={selectedOption1}
                          onChange={(e) => setSelectedOption1(e.target.value)}
                        >
                          <option value="">Web Application</option>
                          <option value="React Js">React Js</option>
                          <option value="Next Js">Next Js</option>
                          <option value="Vue Js">Vue Js</option>
                        </select>
                      </div>

                      {/* Dropdown 2 */}
                      <div className="mb-3">
                        <label htmlFor="dropdown2" className="form-label">Instructor</label>
                        <select
                          id="dropdown2"
                          className="form-select"
                          value={selectedOption2}
                          onChange={(e) => setSelectedOption2(e.target.value)}
                        >
                          <option value="">Instructor</option>
                          <option value="Sir Umair Ahmad">Sir Umair Ahmad</option>
                          <option value="Sir Naveed Sarwar">Sir Naveed Sarwar</option>
                          <option value="Nadeem Galani">Nadeem Galani</option>
                        </select>
                      </div>

                      {/* Dropdown 3 */}
                      <div className="mb-3">
                        <label htmlFor="dropdown3" className="form-label">Course Code</label>
                        <select
                          id="dropdown3"
                          className="form-select"
                          value={selectedOption3}
                          onChange={(e) => setSelectedOption3(e.target.value)}
                        >
                          <option value="">Course Code</option>
                          <option value="1432">1432</option>
                          <option value="1345">1345</option>
                          <option value="1323">1323</option>
                        </select>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                      </button>
                      <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSave}>
                        Submitt
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GetCourse />
    </>
  );
};

export default Users;
