import { useEffect, useState } from "react";
import Board from "../features/tictactoe/components/Board";
import { Button } from "./components/ui/button";

function App() {
  const [visiblility, setVisibility] = useState(false);
  useEffect(()=>{
    if(visiblility){
      document.body.classList.add('dark');
    }else{
      document.body.classList.remove('dark');
    }
  },[visiblility]);

  return <div >
    <div className="flex justify-end mx-6 py-4">
    <Button  onClick={()=>setVisibility(prev=>!prev)}>Toggle</Button>
    </div>
    <Board />
    </div>
}

export default App
