import { useState } from 'react';
import Child from './Child';
import Title from './Title';
import Button from './Button';

export default function Parent() {
  const [shown, setShown] = useState(false);
  const [shown2, setShown2] = useState(false);
  // const [{ shown, toggle }, setShown] = useState({
  //   shown: false,
  //   toggle: () => setShown(prev => ({
  //     ...prev,
  //     shown: !prev.shown,
  //   })),
  // });
  // const [{ shown2, toggle2 }, setShown2] = useState({
  //   shown2: false,
  //   toggle2: () => setShown2(prev => ({
  //     ...prev,
  //     shown2: !prev.shown2,
  //   })),
  // });

  // const handleToggle = useCallback(() => setShown(prev => !prev), []);
  // const handleToggle2 = useCallback(() => setShown2(prev => !prev), []);

  return (
    <div>
        <Title/>
        <Child order={1} shown={shown} />
        <Child order={2} shown={shown2} />
        {/* <Child order={3} shown={true} /> */}
        <Button order={1} onClick={() => setShown(prev => !prev)}/>
        <Button order={2} onClick={() => setShown2(prev => !prev)}/>
    </div>
  );
}