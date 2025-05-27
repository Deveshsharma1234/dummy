
import { useEffect } from 'react';
import './App.css'
import bgMusic from './assets/bg-music.mp3';
import starrySky from './assets/starry-night.png';

function App() {
  useEffect(() => {
    const audio = new Audio(bgMusic);
    audio.loop = true;
    audio.volume = 0.3;
    audio.play().catch(() => {}); // Prevent autoplay error silently
  }, []);

  const scrollToLetter = () => {
    const letterSection = document.getElementById('letter');
    if (letterSection) {
      letterSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="min-h-screen text-white font-sans bg-fixed bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${starrySky})` }}
    >
      {/* Sparkles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none sparkle-layer"></div>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center backdrop-blur-sm bg-black/60 animate-fade-in">
        <h1 className="text-4xl md:text-6xl text-pink-400 font-cursive px-4 animate-fade-in-slow">
          “To the Moon of my life, this is just a small piece of my love...”
        </h1>
        <button
          onClick={scrollToLetter}
          className="mt-10 px-6 py-3 bg-pink-600 hover:bg-pink-500 text-white rounded-full text-lg transition-all animate-fade-in-delay"
        >
          Scroll Down
        </button>
      </section>

      <section id="letter" className="px-6 md:px-20 text-center py-20 backdrop-blur-md bg-black/50 animate-fade-in">
        <h2 className="text-3xl font-semibold text-purple-300">💌 A Letter</h2>
        <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
       I know things went wrong, but I want to remind you of the love we once shared — the smiles, the late-night talks, and every precious moment in between.  
  It was just a short time ago, yet the moonlight still shines — and I’m desperate to have this moonlight over my life, always glowing bright.
        </p>
        <p className="mt-4 text-lg text-gray-400 italic">
          “You’re the moon to my night, even when it’s dark, you shine so bright.”
        </p>
      </section>

      <section className="mt-20 px-6 md:px-20 text-center backdrop-blur-md bg-black/40 animate-fade-in">
        <h2 className="text-3xl font-semibold text-pink-300">📸 Memories (In My Heart)</h2>
        <div className="mt-6 max-w-3xl mx-auto">
          <p className="text-gray-300">
            I remember your smile, the way you said anything, and how everything felt right even when nothing was. These memories are still mine, and they’re still beautiful.
          </p>
        </div>
      </section>

      <section className="mt-20 px-6 md:px-20 text-center backdrop-blur-md bg-black/40 animate-fade-in">
        <h2 className="text-3xl font-semibold text-purple-300">📝 Final Words</h2>
        <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
          I’m not expecting anything. I just wanted to say: I still care. I still smile remembering you.
        </p>
        <p className="mt-4 text-lg text-pink-400">– Anesthesia 💜</p>
      </section>

      <footer className="mt-20 text-center py-10 text-gray-500 text-sm animate-fade-in">
        Made with 💖  for – The only Moon
      </footer>
    </div>
  );
}

export default App;

