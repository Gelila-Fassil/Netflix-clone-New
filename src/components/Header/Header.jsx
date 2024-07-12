import "./header.css";
import logo from "./netflix_PNG12.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <div className="header-outer-container container-fluid mt-3">
  <div className="headerContainer row align-items-center d-flex justify-content-between">
    <div className="header-left col-auto">
      <ul className="d-flex align-items-center">
        <li>
          <img src={logo} alt="Netflix-Logo" width="140px" />
        </li>
        <li className="ms-4">Home</li>
        <li className="ms-4">TvShow</li>
        <li className="ms-4">Movies</li>
        <li className="ms-4">Latest</li>
        <li className="ms-4">MyList</li>
        <li className="ms-4">Browser by Language</li>
      </ul>
    </div>
    <div className="header-right col-auto">
      <ul className="d-flex align-items-center">
        <li>
          <SearchIcon />
        </li>
        <li className="ms-4">
          <NotificationsNoneIcon />
        </li>
        <li className="ms-4">
          <AccountBoxIcon />
        </li>
        <li className="ms-4">
          <ArrowDropDownIcon />
        </li>
      </ul>
    </div>
  </div>
</div>





   
  );
};

export default Header;





























// import "./header.css";
// import logo from "./netflix_PNG12.png";
// import SearchIcon from "@mui/icons-material/Search";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// const Header = () => {
//   return (
//     <div className="header-outer-container container-fluid mt-3">
//       <div className="headerContainer">
//         <div className="header-left">
//           <ul>
//             <li>
//               <img src={logo} alt="Netflix-Logo" />
//             </li>
//             <li className="ms-4">Home</li>
//             <li className="ms-4">Tv Show</li>
//             <li className="ms-4">Movies</li>
//             <li className="ms-4">Latest</li>
//             <li className="ms-4">My List</li>
//             <li className="ms-4">Browse by Language</li>
//           </ul>
//         </div>
//         <div className="header-right">
//           <ul>
//             <li>
//               <SearchIcon />
//             </li>
//             <li className="ms-4">
//               <NotificationsNoneIcon />
//             </li>
//             <li className="ms-4">
//               <AccountBoxIcon />
//             </li>
//             <li className="ms-4">
//               <ArrowDropDownIcon />
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
