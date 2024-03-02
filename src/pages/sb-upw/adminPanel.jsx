import React, { useEffect, useState } from 'react';
import './adminPanel.scss';
import axios from 'axios'
import Delete from '/src/images/delete.png'

const AdminPanel = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://newpro-4ft2.onrender.com/nika/contact')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);
  //DELETE data
  // const deleteHandler = async (id) => {
  //   const response = await axios.delete(`https://newpro-4ft2.onrender.com/nika/${id}/delete`)
  //     .catch((error) => console.log("Error: ", error));
  //   if (response && response.data) {
  //     console.log(response);
  //     console.log(response.data);
  //   }
  // };
  const deleteHandler = (id) => {
    const response = axios.delete(`https://newpro-4ft2.onrender.com/nika/${id}/delete`)
      .then((res) => {
        window.location.reload(false)
      })
      .catch((error) => console.log("Error: ", error));
    if (response && response.data) {
      console.log(response);
      console.log(response.data);
    }
  };
  return (
    <div className='panel'>
      <div className='table-container'>
        <div className="table-head">
          <h1>ID</h1>
          <h1>ISIM</h1>
          <h1 className='last-child'>RAQAM</h1>
        </div>
        <table className='table'>
          <tbody>
            {
              data.map((user, index) => {
                return <tr key={index}>
                  <td className='id'><p>{user.id}</p></td>
                  <td className='name'><p>{user.name}</p></td>
                  <td className='number'><p>{user.phone_number}</p></td>
                  <td><button onClick={() => deleteHandler(user.id)}>delete</button></td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPanel
