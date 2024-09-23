import { useState, useEffect } from "react";

export function useDogImage() {
  const [imageUrl, setImageUrl] = useState("");

  const fetchImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.message); 
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
      });
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return { imageUrl, fetchImage };
}
