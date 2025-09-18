import React from "react";

function Step5({ formData }) {
  const { name, rollNo, semester, department, hostel, foodPref, vegChoices, nonVegChoices, ratings } = formData;

  // Determine which meal choices to show
  const mealChoices = foodPref === "veg" ? vegChoices : nonVegChoices;
  console.log("Page-5", formData);
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Review & Summary</h2>

      {/* Personal Details */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Personal Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <p><span className="font-semibold">Name:</span> {name}</p>
          <p><span className="font-semibold">Roll No:</span> {rollNo}</p>
          <p><span className="font-semibold">Semester:</span> {semester}</p>
          <p><span className="font-semibold">Department:</span> {department}</p>
          <p><span className="font-semibold">Hostel:</span> {hostel}</p>
          <p><span className="font-semibold">Food Preference:</span> {foodPref}</p>
        </div>
      </div>

      {/* Meal Choices */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Selected Meals</h3>
        {Object.keys(mealChoices).map((meal) => (
          <div key={meal} className="mb-3">
            <h4 className="font-semibold capitalize">{meal}</h4>
            <div className="flex flex-wrap gap-2">
              {mealChoices[meal].length > 0 ? (
                mealChoices[meal].map((item, idx) => (
                  <span key={idx} className="px-2 py-1 bg-green-200 rounded-full text-sm">{item}</span>
                ))
              ) : (
                <span className="text-gray-500 text-sm">No selection</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Ratings */}
      {ratings && Object.keys(ratings).length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Menu Ratings</h3>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(ratings).map(([day, rating]) => (
              <p key={day}><span className="font-semibold">{day}:</span> {rating} ⭐</p>
            ))}
          </div>
        </div>
      )}

      <p className="text-center text-gray-600 mt-4">Thank you for submitting your feedback!</p>
    </div>
  );
}

export default Step5;

