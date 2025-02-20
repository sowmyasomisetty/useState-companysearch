import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const companies = [
    {name:"Google", logo:"https://logo.clearbit.com/google.com"},
    {name:"Microsoft", logo:"https://logo.clearbit.com/microsoft.com"},
    {name:"Amazon", logo:"https://logo.clearbit.com/amazon.com"},
    {name:"Visa", logo:"https://logo.clearbit.com/visa.com"},
    {name:"Oracle", logo:"https://logo.clearbit.com/oracle.com"},
    {name:"Nvidia", logo:"https://logo.clearbit.com/nvidia.com"},
    {name:"Volkswagen", logo:"https://logo.clearbit.com/volkswagen.com"},
    {name:"LTIMindtree", logo:"https://logo.clearbit.com/ltimindtree.com"},
    {name:"Facebook", logo:"https://logo.clearbit.com/facebook.com"},
    {name:"Adobe", logo:"https://logo.clearbit.com/adobe.com"},
    {name:"Apple", logo:"https://logo.clearbit.com/apple.com"},
    {name:"TCS", logo:"https://logo.clearbit.com/tcs.com"},
    {name:"Infosys", logo:"https://logo.clearbit.com/infosys.com"},
    {name:"Tesla", logo:"https://logo.clearbit.com/tesla.com"},
    {name:"Samsung", logo:"https://logo.clearbit.com/samsung.com"},
    {name:"Intel", logo:"https://logo.clearbit.com/intel.com"},
    {name:"IBM", logo:"https://logo.clearbit.com/ibm.com"},
    {name:"Cisco", logo:"https://logo.clearbit.com/cisco.com"},
    {name:"HP", logo:"https://logo.clearbit.com/hp.com"},
    {name:"Sony", logo:"https://logo.clearbit.com/sony.com"},
    {name:"Netflix", logo:"https://logo.clearbit.com/netflix.com"},
    {name:"PayPal", logo:"https://logo.clearbit.com/paypal.com"},
    {name:"Dell", logo:"https://logo.clearbit.com/dell.com"},
    {name:"Salesforce", logo:"https://logo.clearbit.com/salesforce.com"},
    {name:"eBay", logo:"https://logo.clearbit.com/ebay.com"},
    {name:"Alibaba", logo:"https://logo.clearbit.com/alibaba.com"}
  ];

  // stores user search input
  const [searchTerm,setSearchTerm]=useState("");
  // track the light and dark mode
  const [darkMode,setDarkMode]=useState(false);

  // filters the company list based on the search input
  const filterCompanies=companies.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Styles for Light & Dark Mode
  const styles={  
    // card styles
    card:{
      width:"400px",
      padding:"20px",
      borderRadius:"10px",
      boxShadow:"0px 4px 10px black",
      backgroundColor:darkMode?"black":"white",
      color:darkMode?"white":"black", 
    },

    // background and text colors based on light and sark mode
    input:{
      padding:"10px",
      width:"100%",
      border:"1px solid white",
      borderRadius:"5px",
      marginBottom:"10px",
      backgroundColor:darkMode?"black":"white",
      color: darkMode ?"white":"black",
    },

    // list container styles
    listContainer:{
      maxHeight:"250px", // Scrollable area limit
      overflowY:"auto",
      borderRadius:"5px",
      border:"1px solid white",
      backgroundColor:darkMode?"black":"white",
    },

    // styles of list items
    listItem:{
      display:"flex",
      padding:"10px",
      cursor:"pointer",
      backgroundColor:darkMode?"black":"white",
      color:darkMode?"white":"black",
    },

    // styles of light and dark button
    toggleButton: {
      padding:"6px 12px",
      border:"none",
      borderRadius:"5px",
      cursor:"pointer",
      backgroundColor:darkMode?"white":"black",
      color:darkMode?"black":"white",
      fontSize:"14px",
      marginLeft:"10px",
    },

    // header ection styles
    header:{
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
    },

    noResults:{
      padding:"10px",
      textAlign:"center",
      color:"red",
    }
  };

  return (
      <div style={styles.card}>
        {/* Header with Light/Dark Mode Toggle */}
        <div style={styles.header}>
          <h4>Company Search</h4>
          <button style={styles.toggleButton} onClick={()=>setDarkMode(!darkMode)}>
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>

        <input
          type="text"
          placeholder="Search company..."
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
          style={styles.input}
        />

      {/* list of companies */}
      <div style={styles.listContainer}>
          <ul className="list-group">
            {filterCompanies.length >0 ?(
              filterCompanies.map((company, index)=>(
                <li 
                  key={index} 
                  className="list-group-item d-flex align-items-center"
                  style={styles.listItem}
                >
                  <img src={company.logo} alt={company.name} width="30" className="me-2" />
                  {company.name}
                </li>
              ))
            ):(
              <li className="list-group-item" style={styles.noResults}>
                Company not found ❌
              </li>
            )}
          </ul>
        </div>

      </div>

  );
};

export default App;
