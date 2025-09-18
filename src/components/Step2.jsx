import { useState } from "react";

export default function Step2({ formData, setFormData, nextStep, prevStep }) {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const handleRating = (day, value) => {
    setFormData({ ...formData, ratings: { ...formData.ratings, [day]: value } });
  };

return (
    <div className="bg-white shadow p-6 rounded-lg space-y-4 w-1/2">
        <h2 className="text-xl font-semibold">Stage 2: Menu Rating</h2>
        {days.map((day) => (
            <div key={day} className="flex items-center justify-between">
                <span>{day}</span>
                <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((num) => (
                        <label key={num} className="flex items-center space-x-1">
                            <input
                                type="checkbox"
                                checked={formData.ratings[day] === num}
                                onChange={() => handleRating(day, num)}
                                className="form-checkbox"
                            />
                            <span>{num} ⭐</span>
                        </label>
                    ))}
                </div>
            </div>
        ))}
        <div className="flex justify-between mt-4">
            <button className="bg-gray-400 text-white px-4 py-2 rounded" onClick={prevStep}>Back</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={nextStep}>Next</button>
        </div>
    </div>
);
}