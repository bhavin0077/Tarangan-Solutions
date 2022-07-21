import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";

import * as location from "../worldLoad.json";
import * as success from "../successful.json";
 

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: location.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: success.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function PreLoader() {
 
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
         
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 1000);
        });
    }, 2000);
  }, []);

  return (
    <>
      {!completed ? (
        <>
          {!loading ? (
            <Lottie style={{margin:'150px 600px'}} options={defaultOptions1} height={400} width={400}  />
          ) : (
            <Lottie style={{margin:'300px 700px'}} options={defaultOptions2} height={200} width={200} />
          )}
        </>
      ) : (
        <>
        
          
        </>
      )}
    </>
  );
}

export default PreLoader;