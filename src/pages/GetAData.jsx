import React, { useEffect, useState } from 'react';
import { collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { firestore } from '../Firebase/Config';


export default function GetAData() {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleEdit = (item) => {
    console.log('Edit button clicked'); // Add this line
    setEditData(item);
    setShowModal(true);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'students'));
        const newData = querySnapshot.docs.map((doc) => doc.data());
        setData(newData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(firestore, 'students', id));
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
      console.log('Document successfully deleted!');
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      await updateDoc(doc(firestore, 'students', editData.id), editData);
      setShowModal(false);
      setData((prevData) =>
        prevData.map((item) =>
          item.id === editData.id ? { ...item, ...editData } : item
        )
      );
      console.log('Document successfully updated!');
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  return (
    <div className="container">
      <h1>Data Table</h1>
      <div className="table-responsive">
        <table className="table  table-bordered ">
          <thead>
            <tr>
              <th>Name</th>
              <th>Course</th>
              <th>Batch</th>
              <th>Rool Number</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.course}</td>
                <td>{item.batch}</td>
                <td>{item.roolNumber}</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}>Delete</button></td>
                <td>
                  <button className="btn btn-warning btn-sm" onClick={() => handleEdit(item)} data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={`modal fade ${showModal ? 'show' : ''}`} id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden={!showModal}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editModalLabel">Edit Data</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label >Name</label>
                  <input type="text" className="form-control"
                    name="name" value={editData.name || ''} onChange={(e) => setEditData({ ...editData, [e.target.name]: e.target.value })} />
                </div>
                <div className="form-group">
                  <label >Rool Number</label>
                  <input type="number" className="form-control"
                    name="roolNumber" value={editData.roolNumber || ''} onChange={(e) => setEditData({ ...editData, [e.target.name]: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label >Course</label>
                  <input type="text" className="form-control"
                    name="course" value={editData.course || ''} onChange={(e) => setEditData({ ...editData, [e.target.name]: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label >Batch</label>
                  <input type="text" className="form-control"
                    name="batch" value={editData.batch || ''} onChange={(e) => setEditData({ ...editData, [e.target.name]: e.target.value })}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setShowModal(false)}>Close</button>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleUpdate}>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
