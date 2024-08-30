import React, { useEffect, useRef } from "react";
import {mount} from "angularEmbedded/angularModule";
import "./AngularEmbedded.css";

const AngularEmbeddedModule = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount();  
  }, []);   
  return <div className="ng-exported-module"><app-root></app-root></div>;
};

export default AngularEmbeddedModule;