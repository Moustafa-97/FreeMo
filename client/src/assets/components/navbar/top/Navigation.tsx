import "./Navigation.css";
import SearchBar from "../../searchBar/SearchBar";

export default function Navigation() {
  return (
    <nav className="top-nav" style={{backgroundColor:"grey"}}>
      <div className="logo">YourLogo</div>
      {/* <div style={{backgroundColor:"black"}}> */}
        <SearchBar />
      {/* </div> */}
    </nav>
  );
}
