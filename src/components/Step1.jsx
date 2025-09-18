export default function Step1({ formData, setFormData, nextStep }) {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (!formData.name || !formData.rollNo) {
      alert("Name & Roll No required!");
      return;
    }
    nextStep();
  };
  console.log("Page-1", formData);
return (
    <div className="bg-white shadow p-6 rounded-lg space-y-4 flex flex-col w-1/2">
        <h2 className="text-xl font-semibold">Stage 1: Personal Details</h2>
        <input className="input" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
        <input className="input" placeholder="Roll No" name="rollNo" value={formData.rollNo} onChange={handleChange} />
        <input className="input" placeholder="Semester" name="semester" value={formData.semester} onChange={handleChange} />
        <input className="input" placeholder="Department" name="department" value={formData.department} onChange={handleChange} />
        <input className="input" placeholder="Hostel" name="hostel" value={formData.hostel} onChange={handleChange} />
        <div>
            <p className="font-medium">Food Preference:</p>
            <label className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    name="foodPref"
                    value="veg"
                    checked={formData.foodPref === "veg"}
                    onChange={() => setFormData({ ...formData, foodPref: "veg" })}
                />
                <span>Vegetarian</span>
            </label>
            <label className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    name="foodPref"
                    value="non-veg"
                    checked={formData.foodPref === "non-veg"}
                    onChange={() => setFormData({ ...formData, foodPref: "non-veg" })}
                />
                <span>Non-Vegetarian</span>
            </label>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={handleNext}>Next</button>
    </div>
);
}