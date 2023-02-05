import { useState, useEffect } from 'react';
import ContentDetail from "../Components/contentDetail";
import Movie from '../images/film-fill.svg'
import Tv from '../images/tv-2-fill.svg'


const Recommended = () => {

    // const [recommend, setRecommend] = useState([])
    const [countries, setCountries] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [id, setIsid] = useState();
    const [details, setMovieDetails] = useState();

    useEffect(() => {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch('https://api.themoviedb.org/3/discover/movie?api_key=72a11b158b57f6cc258d85d0d425ea98&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate', requestOptions)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.results);
          setCountries(data['results']);
          // setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }, []);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=72a11b158b57f6cc258d85d0d425ea98&language=en-US`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(id);
        console.log(data);
        setMovieDetails(data);
        // setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);



    return ( 
       <div>
        
                      <div className='my-8 text-3xl'>Recommended for you</div>
        <div  className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {countries.map((country) =>  (
        // <Link to={`/${country.name}`}>
        
          <div key={country.id} className="rounded-md">
            <img  key={country.id}  onClick={() => {setIsid(country.id); setIsOpen(true);}} src={`https://image.tmdb.org/t/p/w300` + country.poster_path} alt="" className="w-full h-95 object-cover rounded-md mb-4" />
            <ContentDetail
              year = {country.release_date == null ? '2022-12-28': country.release_date}
              icon = {country.media_type === "movie" ? Movie: Tv}
              category = {country.media_type}
              rating = {country.original_language}
              title = {country.title == null ? country.name: country.title}
            />

          </div>
        // </Link>
        ))}
        {isOpen ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/content/}
              <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                {/header/}
                <img   src={`https://image.tmdb.org/t/p/w300` + details.poster_path} alt="" className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" />
    <div class="flex flex-col justify-between p-2 leading-normal">
    <button
                    className="p-1 ml-auto  border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{details.original_title }</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{details.overview}
         </p>
    </div>

                {/footer/}
                {/* <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setIsOpen(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setIsOpen(false)}
                  >
                    Save Changes
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
        </div>
       </div>

     );
}
 
export default Recommended;