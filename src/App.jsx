import { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    semester: "",
    department: "",
    hostel: "",
    foodPref: "veg",
    ratings: {},

    // Initialize all meals with empty arrays
    vegChoices: {
      breakfast: [],
      lunch: [],
      snacks: [],
      dinner: [],
    },
    nonVegChoices: {
      breakfast: [],
      lunch: [],
      snacks: [],
      dinner: [],
    },
  });

  // Pre-defined meal options
  const vegOptions = {
    breakfast: ["Poha", "Upma", "Idli", "Dosa", "Bread", "Pancake", "Muffin", "Cornflakes", "Oats", "Paratha", "Samosa", "Vada", "Puri", "Chilla"],
    lunch: ["Rice", "Dal", "Paneer Curry", "Mixed Veg", "Roti", "Rajma", "Chole", "Aloo Gobi", "Vegetable Biryani", "Curd", "Salad", "Soup", "Veg Sandwich", "Pasta"],
    snacks: ["Samosa", "Pakora", "Burger", "Pasta", "Sandwich", "Vada Pav", "Momos", "French Fries", "Chips", "Spring Roll", "Cheese Balls", "Paneer Tikka", "Veg Cutlet", "Dhokla"],
    dinner: ["Rice", "Dal", "Paneer Butter Masala", "Veg Curry", "Roti", "Kadhi", "Aloo Matar", "Vegetable Pulao", "Soup", "Salad", "Chole", "Rajma", "Paneer Tikka", "Dhokla"]
  };

  const nonVegOptions = {
    breakfast: ["Egg Bhurji", "Omelette", "Chicken Sandwich", "Bacon", "Egg Muffin", "Sausage", "Scrambled Eggs", "Egg Paratha", "Chicken Roll", "Egg Curry", "Fish Cutlet", "Chicken Nuggets", "Egg Toast", "Chicken Pakora"],
    lunch: ["Chicken Curry", "Mutton Curry", "Fish Fry", "Egg Curry", "Prawn Masala", "Chicken Biryani", "Keema", "Tandoori Chicken", "Chicken Tikka", "Mutton Biryani", "Prawn Fry", "Egg Biryani", "Fish Curry", "Chicken Korma"],
    snacks: ["Chicken Pakora", "Fish Fingers", "Chicken Nuggets", "Egg Roll", "Chicken Sandwich", "Tandoori Wings", "Mutton Seekh Kebab", "Prawn Balls", "Egg Puff", "Chicken Roll", "Chicken Momos", "Bacon Roll", "Egg Cutlet", "Fish Fry"],
    dinner: ["Chicken Curry", "Mutton Curry", "Fish Fry", "Prawn Masala", "Egg Curry", "Chicken Biryani", "Keema", "Tandoori Chicken", "Chicken Tikka", "Mutton Biryani", "Prawn Fry", "Egg Biryani", "Fish Curry", "Chicken Korma"]
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  return (
    <>
    <div className="overflow-hidden h-screen">

    <img src="back2.jpg" alt="" className="absolute w-screen -z-10 h-screen object-cover "/>
    <img src="Logo.png" alt="" className="w-28 h-28 object-cover rounded-full mx-auto ml-4 mt-3 absolute" />
    <div className="w-full mx-auto p-4 z-10 flex flex-col justify-center items-center h-screen overflow-y-scroll gap-9 box-content">
    <h1 className="text-3xl font-bold font-serif">NIT Delhi Mess Form</h1>
      {currentStep === 1 && <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />}
      {currentStep === 2 && <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
      {currentStep === 3 && <Step3 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} vegOptions={vegOptions} />}
      {currentStep === 4 && formData.foodPref === "non-veg" && (
        <Step4 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} nonVegOptions={nonVegOptions} />
      )}
      {(currentStep === 5|| (currentStep === 4 && formData.foodPref === "veg")) && <Step5 formData={formData} />}
    </div>
      </div>
      </>
  );
}

export default App;
