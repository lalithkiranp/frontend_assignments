import React, { useState } from "react";
import CourseCard from "./CourseCard";
import EnrolledCourses from "./EnrolledCourses";

const CourseList = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: "React Basics", author: "John Doe", duration: "5h", progress: 0, favorite: false },
    { id: 2, title: "JavaScript Advanced", author: "Jane Smith", duration: "8h", progress: 0, favorite: false },
    { id: 3, title: "Python for Data Science", author: "Mike Ross", duration: "10h", progress: 0, favorite: false },
  ]);

  const [enrolled, setEnrolled] = useState([]);

  // Enroll in a course
  const handleEnroll = (course) => {
    if (!enrolled.find((c) => c.id === course.id)) {
      setEnrolled([...enrolled, { ...course, progress: 0 }]);
    }
  };

  // Toggle favorite
  const toggleFavorite = (id) => {
    setCourses((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, favorite: !c.favorite } : c
      )
    );
  };

  // Update progress
  const updateProgress = (id, progress) => {
    setEnrolled((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, progress: progress } : c
      )
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🎓 E-Learning Platform</h1>

      {/* Available Courses */}
      <div className="grid grid-cols-2 gap-4">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            enrolled={!!enrolled.find((c) => c.id === course.id)}
            onEnroll={handleEnroll}
            onFavorite={toggleFavorite}
          />
        ))}
      </div>

      {/* Enrolled Courses */}
      <EnrolledCourses
        enrolled={enrolled}
        onUpdateProgress={updateProgress}
      />
    </div>
  );
};

export default CourseList;
