import React from "react";

const CourseCard = ({ course, enrolled, onEnroll, onFavorite }) => {
  return (
    <div className="border p-4 rounded-lg shadow mb-3">
      <h3 className="text-xl font-semibold">{course.title}</h3>
      <p>👨‍🏫 {course.author}</p>
      <p>⏳ {course.duration}</p>
      
      <button
        className={`px-3 py-1 mt-2 rounded ${enrolled ? "bg-gray-400" : "bg-green-500 text-white"}`}
        onClick={() => !enrolled && onEnroll(course)}
        disabled={enrolled}
      >
        {enrolled ? "Already Enrolled" : "Enroll"}
      </button>

      <button
        className={`ml-2 px-3 py-1 rounded ${course.favorite ? "bg-yellow-400" : "bg-gray-200"}`}
        onClick={() => onFavorite(course.id)}
      >
        {course.favorite ? "★ Favorite" : "☆ Mark Favorite"}
      </button>
    </div>
  );
};

export default CourseCard;
