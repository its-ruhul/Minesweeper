import {useState} from 'react';

export function InnerGrid8by8() {

  const [clickedNum, setClickedNum] = useState(0);

  //Creating a set containing 16 random numbers <= 64.
  const [random16] = useState<Set<number>>(() => {
    const random16Set = new Set<number>();

    while(random16Set.size < 16) {
      if (!clickedNum) {
        const randomNo = Math.floor(Math.random() * 64);
        random16Set.add(randomNo);
      }
    }
    return random16Set;
  });

  return (<>
    {console.log(random16)}
  </>);

}