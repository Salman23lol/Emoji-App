// import React, { useState, useEffect } from "react";
// import jsonData from "Data/emojiList.json";

// function NavBar() {
//   const [userInput, setUserInput] = useState('');
//   const [data, setData] = useState([]);
//   const [matchingData, setMatchingData] = useState([jsonData]);

//   useEffect(() => {
//     // Function to filter data based on user input
//     const filterData = () => {
//       const userText = userInput.toLowerCase();
//       if (userText.trim() === '') {
//         setMatchingData([]);
//         return;
//       }
//       const filteredData = data.filter(item => item.toLowerCase().includes(userText));
//       setMatchingData(filteredData);
//     };

//     filterData();
//   }, [userInput, data]);
//   return (
//     <div>
//       <div className="bg-green-500 w-full h-20 flex items-center justify-between px-10">
//         <h1 className="text-2xl font-semibold">⚔️ Golden Icons ⚔️</h1>

//         <div>
//           <input
//             type="text"
//             className="bg-green-400 h-10 w-1/2 rounded-3xl text-black px-4 py-6"
//             placeholder="Enter data..."
//             value={userInput}
//             onChange={(e) => setUserInput(e.target.value)}
//           />
//           <div>
//             {matchingData.length > 0 ? (
//               matchingData.map((match, index) => <div key={index}>{match}</div>)
//             ) : (
//               <div>No matching data found.</div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import data from "../Data/emojiList.json"; // Import your emojiList.json file

function NavBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]); // Initialize with an empty array

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);

    // Filter the data based on the search query
    const filteredData = data.filter(
      (item) => item.title.toLowerCase().includes(query),
      (desc) => desc.keywords.toLowerCase().includes(query)
    );

    setSearchResults(filteredData);
  };

  return (
    <div>
      <div className="bg-green-500 w-full h-20 flex items-center justify-between px-10">
        <h1 className="text-2xl font-semibold">⚔️ Golden Icons ⚔️</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="bg-green-400 h-10 w-1/2 rounded-3xl text-black px-4 py-6"
        />
      </div>
      <ul>
        {searchResults.length > 0 ? (
          // Display search results if there are matches
          searchResults.map((item, desc) => (
            <div className="bg-green-200 pt-8">
              <div className="container mx-auto flex flex-row items-center justify-between p-8">
                <li key={item.id} className="text-4xl">
                  {item.symbol} {/* Display the symbol */}
                </li>
                <div className="w-1/2 h-1 bg-green-600 rounded"></div>
                <div
                  key={desc.keywords}
                  className="w-80 h-20 bg-green-400 p-4 rounded flex text-center items-center justify-center"
                >
                  <h1 className="text-base px-4 py-2">{item.keywords}</h1>
                </div>
              </div>
            </div>
          ))
        ) : (
          // Display an alternative message when no results are found
          <li className="text-center p-8 text-2xl">
            No matching found Search To get Results.
          </li>
        )}
      </ul>
    </div>
  );
}

export default NavBar;

//<div className="bg-green-200 pt-8">
//               <div className="container mx-auto">
//                 <div className="flex justify-evenly mx-4 p-4 items-center rounded-lg bg-green-300">
//                   <div className="w-20 h-20 bg-green-200 rounded flex items-center justify-center">
//                     <h1 className="text-4xl">{symbol}</h1>
//                   </div>
//                   <div className="w-1/2 h-0.5 bg-green-600 rounded"></div>
//                   <div className="w-80 h-20 bg-green-200 rounded flex text-center items-center justify-center">
//                     <h1 className="text-base px-4 py-2">{keywords}</h1>
//                   </div>
//                 </div>
//               </div>
//             </div>
