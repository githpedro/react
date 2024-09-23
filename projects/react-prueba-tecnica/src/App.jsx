import './App.css';
import { useDogImage } from './useDogImage';
import { useAdvice } from './useAdvice';

export function App() {
  const { imageUrl, fetchImage } = useDogImage();  
  const { advice, fetchAdvice } = useAdvice();   

  const handleClick = () => {
    fetchAdvice(); 
    fetchImage();
  };

  return (
    <main>
      <button onClick={handleClick}>Clic Me to Get a New Advice</button>

      <h1>Random Dog App</h1>
      {advice && <p>{advice}</p>}
      {imageUrl ? (
        <img src={imageUrl} alt="Random Dog" style={{ maxWidth: "300px" }} />
      ) : (
        <p>Loading image...</p>
      )}
    </main>
  );
}
