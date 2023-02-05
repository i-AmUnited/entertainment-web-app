import { useState, useEffect } from 'react';
import ContentDetail from "../Components/contentDetail";
import Movie from '../images/film-fill.svg'
import Tv from '../images/tv-2-fill.svg'


const Recommended = () => {

    // const [recommend, setRecommend] = useState([])
    const [countries, setCountries] = useState([]);

     
    useEffect(() => {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch('https://api.themoviedb.org/3/trending/all/day?api_key=72a11b158b57f6cc258d85d0d425ea98', requestOptions)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.results);
          setCountries(data['results']);
          // setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }, []);


    return ( 
       <div>
        <p className='mb-4'>Recommended for you</p>
        <div  className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {countries.map((country) =>  (
        // <Link to={`/${country.name}`}>
          <div key={country.id} className="rounded-md">
            <img  key={country.id}  src={`https://image.tmdb.org/t/p/w300` + country.poster_path} alt="" className="w-full h-95 object-cover rounded-md mb-4" />
            <ContentDetail
              year = {country.release_date === null ? '2022-12-28': country.release_date}
              icon = {country.media_type === "movie" ? Movie: Tv}
              category = {country.media_type}
              rating = {country.original_language}
              title = {country.title == null ? country.name: country.title}
            />
            
          </div>
        // </Link>
        ))}
        </div>
       </div>
     );
}
 
export default Recommended;