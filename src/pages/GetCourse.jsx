import { collection, getDocs } from '@firebase/firestore';
import React, { useEffect, useState } from 'react'
import { firestore } from '../Firebase/Config';

export default function GetCourse() {
    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(firestore, 'courses'));
                const newData = querySnapshot.docs.map((doc) => doc.data());
                setData(newData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])
    return (
        <>
            <div className="row">
                {data.map((course, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{course.graphicDesigner}</h5>
                                <h5 className="card-text">Course Code: <span style={{ fontSize: "16px", color: 'green' }}>{course.mobileApplication}</span></h5>
                                <h5 className="card-text">Instructor:  <span style={{ fontSize: "16px", color: 'green' }}>{course.webApplication}</span></h5>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
