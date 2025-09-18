export default function Step3({ formData, setFormData, nextStep, prevStep }) {
  const meals = ["breakfast", "lunch", "snacks", "dinner"];
  const options = Array.from({ length: 14 }, (_, i) => `Veg Item ${i+1}`);
  const handleSelect = (meal, item) => {
    const current = formData.vegChoices[meal];
    let updated = [];
    if (current.includes(item)) updated = current.filter(i => i !== item);
    else if (current.length < 7) updated = [...current, item];
    else updated = current;
    setFormData({ ...formData, vegChoices: { ...formData.vegChoices, [meal]: updated } });
  };

  const handleNext = () => {
    for (let meal of meals) {
      if (formData.vegChoices[meal].length !== 7) {
        alert(`Select 7 items for ${meal}`);
        return;
      }
    }
    nextStep();
  };

  return (
    <div className="bg-white shadow p-6 rounded-lg space-y-6 overflow-y-auto max-h-[80vh] w-1/2">
      <h2 className="text-xl font-semibold">Stage 3: Vegetarian Menu</h2>
      {meals.map((meal) => (
        <div key={meal}>
          <h3 className="font-bold capitalize">{meal}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
            {options.map((item) => (
              <button
                key={item}
                onClick={() => handleSelect(meal, item)}
                className={`px-2 py-1 border rounded ${formData.vegChoices[meal].includes(item) ? "bg-green-500 text-white" : "bg-gray-100"}`}
              >
                {item}
              </button>
            ))}
          </div>
          <p className="text-sm mt-1 text-red-500">{7 - formData.vegChoices[meal].length} items remaining</p>
        </div>
      ))}
      <div className="flex justify-between mt-4">
        <button className="bg-gray-400 text-white px-4 py-2 rounded" onClick={prevStep}>Back</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}