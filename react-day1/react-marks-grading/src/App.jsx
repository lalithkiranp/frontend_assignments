
import React from "react";
import "./App.css";

function App() {
  const students = [
    { id: 1, name: "Alice", mark1: 85, mark2: 90 },
    { id: 2, name: "Bob", mark1: 70, mark2: 65 },
    { id: 3, name: "Charlie", mark1: 50, mark2: 55 },
    { id: 4, name: "David", mark1: 95, mark2: 92 },
  ];


  const calculateGrade = (total) => {
    if (total >= 180) return "A+";
    else if (total >= 150) return "A";
    else if (total >= 120) return "B";
    else if (total >= 100) return "C";
    else return "F";
  };

  return (
    <div className="container">
      <h1>Student Marks Table</h1>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Mark 1</th>
            <th>Mark 2</th>
            <th>Total Score</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => {
            const total = s.mark1 + s.mark2;
            const grade = calculateGrade(total);
            return (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.mark1}</td>
                <td>{s.mark2}</td>
                <td>{total}</td>
                <td className={`grade ${grade}`}>{grade}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
