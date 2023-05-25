import React, { useState } from "react";
import { Dna } from  'react-loader-spinner'
function Create() {
  const [showSpinner, setShowSpinner] = useState("");

  const handleLogin = () => {
    setShowSpinner(true);
    setTimeout(() => {
      setShowSpinner(false);
      
    }, 3000);
  };

  return (
    <div>
        <h1>Hello {showSpinner && (
       <Dna
       visible={true}
       height="80"
       width="80"
       ariaLabel="dna-loading"
       wrapperStyle={{}}
       wrapperClass="dna-wrapper"
     />
      )}</h1>
      <button onClick={handleLogin}>Login</button>
      
    </div>
  );
}
export default Create ;