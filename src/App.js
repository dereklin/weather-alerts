import React from "react";
import "./App.css";

// Goal: Render active weather alerts by city, in a box that is centered in the middle of the content area. I should be able to search by state and city.

// API: Gives information on active weather alerts by state
// https://api.weather.gov/alerts/active/area/{abbreviated-state}
// Abbreviated state examples: TX, AK, LA, NY

// Objectives:
// 1. Search by state and city for any weather alerts
//       Use the api above to achieve this.
//       Note: Use results above to filter the data so I only see alerts by city (this is on purpose)
// 2. Create a 400px by 400px box with a 3px green border.
// 3. Render the searched weather alert results in the box from step 2
// 4. Horizontally and veritcally align the box from step 2 in the center of the content area
//       Note: The content area should fill the space bellow the search
// 5. The content in the box should scroll and not be hidden nor rendered outside of the box

export default function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
