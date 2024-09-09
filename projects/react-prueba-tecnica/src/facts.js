const gato_random_fact = 'https://catfact.ninja/fact';

export const getRandomFact = async () => {
    const res = await fetch(gato_random_fact);
    const data = await res.json();
    const { fact } = data;
    return fact;
}