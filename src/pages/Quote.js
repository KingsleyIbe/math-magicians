import { useEffect, useState } from 'react';

const Quote = () => {
  const defaultQuote = 'Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers. - Shakuntala Devi';
  const [quote, setQuote] = useState(`${defaultQuote}`);

  useEffect(() => {
    async function getQuotes() {
      const res = await fetch('https://random-math-quote-api.herokuapp.com/');
      const data = await res.json();
      const quotes = `${data.quote} - ${data.author}`;
      const timer = setTimeout(() => setQuote(quotes), 5000);
      return () => {
        clearTimeout(timer);
      };
    }
    getQuotes();
  }, [quote]);

  return (
    <div className="home">
      <div>
        <h2 className="quote-h2">Random Mathematics Quotes</h2>
      </div>
      <p>{quote}</p>
    </div>
  );
};

export default Quote;
