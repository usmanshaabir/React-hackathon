import React, { useState } from 'react';

const Messages = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveAttendance = () => {
    // Handle saving the data (selectedOption, input1, input2) here
    console.log('Selected Option:', selectedOption);
    console.log('Input 1:', input1);
    console.log('Input 2:', input2);

    // You can add your logic here to save the data to your backend or state
    // Remember to clear or reset the fields as needed
    setSelectedOption('');
    setInput1('');
    setInput2('');

    // Close the modal
    handleCloseModal();
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleShowModal}>
        Show Attendance Popup
      </button>
      <div className={`modal ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Attendance</h5>
              <button type="button" className="close" onClick={handleCloseModal}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="dropdown" className="form-label">
                  Select Section
                </label>
                <select
                  id="dropdown"
                  className="form-select"
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  <option value="">Select Section</option>
                  <option value="Section A">Section A</option>
                  <option value="Section B">Section B</option>
                  <option value="Section C">Section C</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Roll Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="input1"
                  placeholder='Please Enter a Roll Number'
                  value={input1}
                  onChange={(e) => setInput1(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="input2" className="form-label">
                  Current Day
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="input2"
                  value={input2}
                  placeholder='Please Enter day'
                  onChange={(e) => setInput2(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleSaveAttendance}>
                Save Attendance
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};

export default Messages;
