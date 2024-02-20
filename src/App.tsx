import { useState } from 'react'
import './App.css'
import Pricingcard from './components/PricingCard'

function App() {
  const [activeType, setActiveType] = useState("");

  const handleOnGridChange = (type:string) : void => {
    setActiveType(type);
  }

  const getState = (type:string) : boolean => {
    if(activeType == "" && type.toLowerCase() == "standard")
      return true;
     return  type === activeType 
  }
  return (
    <div className='bg-slate-800 min-h-screen flex items-center justify-center'>
      <div className="flex flex-col md:flex-row space-y-6 md:space-x-6 md:space-y-0 my-6 md:my-0">

      <Pricingcard 
      type="Basic" 
      storage="100GB"
      storagepm="$1.99/month" 
      active={getState("Basic")}
      onChange= {handleOnGridChange}
        />

      <Pricingcard 
      type="Standard" 
      storage="200GB" 
      storagepm="$3.01/month"
      active={getState("Standard")}
      onChange= {handleOnGridChange}
        />

      <Pricingcard 
      type="Premium" 
      storage="2TB"
      storagepm="$7.04/month"
      active={getState("Premium")} 
      onChange= {handleOnGridChange}
      />      
      
      </div>
    </div>
  )
}



export default App
