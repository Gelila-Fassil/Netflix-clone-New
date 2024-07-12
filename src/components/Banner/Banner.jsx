import "./banner.css";
import axios from "../../Utils/axios";
import { useEffect, useState } from "react";
import requests from "../../Utils/requests";


const Banner = () => {


    const [movies, setMovies] = useState({});
    useEffect(() => {
      (async () => {
        try {
          const request = await axios.get(requests.fetchNetflixOriginals);
          console.log(request)
          setMovies(
            request.data.results[
              Math.floor(Math.random() * request.data.results.length)
            ]
          );
        } catch (error) {
          console.log("Error", error);
        }
      } ) ()
    }, []);
    function truncate(str,n){
        return str?.length>n? str.substr(0,n-1)+'...':str
    }
  return (
    <div className="banner"
      style=
      {{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movies?.backdrop_path})`,
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat'
      }}
      >
        <div className="banner_contents">
            <h1 className="banner_title">
                {movies.title || movies.name || movies?.original_name}
            </h1>
            <div className="banner_buttons">
                <button className="banner_button play">Play</button>
                <button className="banner_button">My List</button>
            </div>
           
                {<h1 className="banner-description">{truncate(movies?.overview,150)}</h1>}
          
          
        </div>
        <div className="banner__fadeBottom"/>
    </div>
  );
};

export default Banner;























// import "./banner.css";
// import axios from "../../Utils/axios";
// import { useEffect, useState } from "react";
// import requests from "../../Utils/requests";

// const Banner = () => {
//   const [movies, setMovies] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const request = await axios.get(requests.fetchNetflixOriginals);
//         const randomIndex = Math.floor(
//           Math.random() * request.data.results.length
//         );
//         setMovies(request.data.results[randomIndex]);
//       } catch (error) {
//         console.log("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   function truncate(str, maxLength) {
//     return str?.length > maxLength ? str.substr(0, maxLength - 1) + "..." : str;
//   }

//   return (
//     <div
//       className="banner"
//       style={{
//         backgroundSize: "cover",
//         backgroundImage: `url(https://image.tmdb.org/t/p/original${movies?.backdrop_path})`,
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="banner_contents">
//         <h1 className="banner_title">
//           {movies.title || movies.name || movies?.original_name}
//         </h1>
//         <div className="banner_buttons">
//           <button className="banner_button  play">Play</button>
//           <button className="banner_button">My List</button>
//         </div>
//         <div className="description-container">
//           <h1 className="banner-description">
//             {truncate(movies?.overview, 150)}
//           </h1>
//         </div>
//       </div>
//       <div className="banner__fadeBottom" />
//     </div>
//   );
// };

// export default Banner;
