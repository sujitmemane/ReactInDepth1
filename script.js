/* 

 1. Hot Module Loading (Reload the page when file changes )
 2. File Watchers Algorithms (Written in C++) (This tells Hot Module Loading that their is change in file so reload the page )

 What Parcel is Doing ?
 1: Bundling
 2: MInification
 3: Cleaning our code 
 4: Dev and Production Build
 5: Super Fast Algorithm
 6: Image Optimization
 7: Caching by Development 
 8: Compression
 9: Compatable with the older version of the browzer
 10: HTTPS in dev
 11: Consistent Hashing Algorithm
 12: Zero Config

*/
import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", {}, "Heading from Parcel");
const heading2 = React.createElement("h2", {}, "Sample 2");
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
