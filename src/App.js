import React, { useState, useEffect } from 'react';


export default function App() {
  const Person = {
    fullName: 'name',
    bio: 'bio',
    imgSrc:
      'https://assets-fr.imgfoot.com/media/cache/1200x1200/cristiano-ronaldo-enerve.jpg',
    profession: 'prof',
  };
  const [show, setShow] = useState(false);
  const [counter, setCounter] = useState(0);
  const clickHandler = () => {
    setShow(!show);
  };
  useEffect(() => {
    let T = undefined;
    if (show) {
      T = setInterval(() => setCounter((prev) => prev + 0.5), 500);
    } else {
      setCounter(0);
    }
    return () => {
      clearInterval(T);
    };
  }, [show]);
  return (
    <>
      <button onClick={clickHandler}>show</button>
      <p>{counter}</p>
      {show && (
        <div style={{ border: '1px solid red' }}>
          <p>{Person.fullName}</p>
          <p>{Person.bio}</p>
          <img style={{ height: 200, width: 200 }} src={Person.imgSrc} />
          <p>{Person.profession}</p>
        </div>
      )}
    </>
  );
}
