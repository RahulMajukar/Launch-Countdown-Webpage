import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import videobg from './assets/video.mp4';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import './App.css';

const App = () => {
  const countdownTarget = new Date().getTime() + 24 * 3600 * 1000 + 5000; // 24 hours + 5 seconds

  return (
    <section className="page">
      <video className="background-video" src={videobg} autoPlay muted loop></video>

      <div className="page-content">
        <h1>Launching Soon</h1>
        <h3>Leave your email and we'll let you know once the site goes live</h3>
        
        <FlipClockCountdown 
          to={countdownTarget} 
          className="flip-clock" 
        />

        <button className="btn">Notify me</button>
      </div>
    </section>
  );
};

export default App;
