import {useState, useEffect} from 'react';

export function InnerGrid8by8() {

  //const gridArray = [];

  //Creating a set containing 16 random numbers <= 64.
  const [random16, setRandom16] = useState<Set<number>>(new Set());

  useEffect(() => {
    const random16Set = new Set<number>;

    while(random16Set.size <= 16) {
      const randomNo = Math.floor(Math.random() * 64);
      random16Set.add(randomNo);
    }

    setRandom16(random16Set);
  }, []); 

  

  return (<>
    {console.log(random16)}
  </>);

}