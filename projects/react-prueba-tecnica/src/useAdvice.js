import { useState, useEffect } from "react";

export function useAdvice() {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data.slip.advice);  
      })
      .catch((error) => {
        console.error("Error fetching advice:", error);
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return { advice, fetchAdvice };
}
