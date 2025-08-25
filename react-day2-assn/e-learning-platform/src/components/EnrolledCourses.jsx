import React from "react";

const EnrolledCourses = ({ enrolled, onUpdateProgress }) => {
  return (
    <div className="mt-6 p-4 border rounded-lg bg-gray-100">
      <h2 className="text-lg font-bold">📚 Enrolled Courses</h2>
      {enrolled.length === 0 ? (
        <p>No courses enrolled yet.</p>
      ) : (
        <ul>
          {enrolled.map((course) => (
            <li key={course.id} className="mb-3">
              <h3 className="font-semibold">{course.title}</h3>
              <p>Progress: {course.progress}%</p>
              
              <input
                type="range"
                min="0"
                max="100"
                value={course.progress}
                onChange={(e) =>
                  onUpdateProgress(course.id, parseInt(e.target.value))
                }
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EnrolledCourses;
