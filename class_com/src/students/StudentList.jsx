import React, { Component } from 'react';

class Student extends Component {
  render() {
    const { students } = this.props;

    return (
      <>
        <div className="container">
          <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', margin: '20px auto', textAlign: 'center' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>GRADE</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Student;
