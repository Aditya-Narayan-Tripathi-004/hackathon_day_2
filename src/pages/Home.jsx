function Home() {
  return (
    <section id="home" className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h1 className="text-5xl font-bold animate-fade-in">Welcome to Hackathon 🚀</h1>
      <p className="mt-4 text-lg max-w-xl">This is a universal template you can adapt to any project during hackathons.</p>
      <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:scale-105 transition">
        Get Started
      </button>
    </section>
  );
}

export default Home;
