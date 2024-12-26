

const DarkMode = ({darkmode,setDarkMode})=>{

//  ThemeMode = "light" | "dark" | "auto";

//  const useThemeMode= () => {
//   mode: ThemeMode;
//   computedMode: ThemeMode; // "light" | "dark"
//   setMode: ( ThemeMode) ;
//   toggleMode: (); 
//   clearMode: ();
// }; 

const handleMode = ()=>{
    console.log(!darkmode)
    setDarkMode(!darkmode)
   
}
return(
    <div className="toggle-theme-wrapper">
        
        <button className="DarkToggle" style={{}} onClick={handleMode}>{darkmode===false?"Dark Mode":"Light Mode"}</button>
     
      
    </div>
);
}

export default DarkMode;
