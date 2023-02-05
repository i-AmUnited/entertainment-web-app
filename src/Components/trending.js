import { useState, useEffect } from 'react';
import ContentDetail from "../Components/contentDetail";
import Movie from '../images/film-fill.svg'
import Tv from '../images/tv-2-fill.svg'

const Trending = () => {
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
          <div className="">
              <p className='mb-4' >Search</p>
              <div className='py-4 text-3xl'>Trending Movies</div>
              <div className="flex overflow-x-auto">
               
        {countries.map((country) =>  (
        // <Link to={`/${country.name}`}>
          <div className="flex-none py-6 px-3 first:pl-6 last:pr-6">
          <div key={country.id} className="rounded-md relative ">
            <div className="bg-black opacity-50">
            <img  key={country.id}  src={`https://image.tmdb.org/t/p/w500` + country.poster_path} alt="" className="w-full h-72 object-contain rounded-md mb-4" />
            </div>
            <div className='absolute bottom-0 p-2'><ContentDetail
              year = {country.release_date == null ? '2022-12-28': country.release_date}
              icon = {country.media_type === "movie" ? Movie: Tv}
              category = {country.media_type}
              rating = {country.original_language}
              title = {country.title == null ? country.name: country.title}
            />
             </div>

            </div>
            </div>
        
        // </Link>
        ))}
        
</div>



<div id="crypto-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-md md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="crypto-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                <span class="sr-only">Close modal</span>
            </button>
            <div class="px-6 py-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                    Connect wallet
                </h3>
            </div>
            <div class="p-6">
                <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Connect with one of our available wallet providers or create a new one.</p>
                <ul class="my-4 space-y-3">
                    <li>
                        <a href="/#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                            <span class="flex-1 ml-3 whitespace-nowrap">MetaMask</span>
                            <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
                        </a>
                    </li>
                    <li>
                        <a href="/#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                            <span class="flex-1 ml-3 whitespace-nowrap">Coinbase Wallet</span>
                        </a>
                    </li>
                    <li>
                        <a href="/#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                            <span class="flex-1 ml-3 whitespace-nowrap">Opera Wallet</span>
                        </a>
                    </li>
                    <li>
                        <a href="/#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                            <span class="flex-1 ml-3 whitespace-nowrap">WalletConnect</span>
                        </a>
                    </li>
                    <li>
                        <a href="/#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                            <span class="flex-1 ml-3 whitespace-nowrap">Fortmatic</span>
                        </a>
                    </li>
                </ul>
                <div>
                    <a href="/#" class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
                        Why do I need to connect with my wallet?</a>
                </div>
            </div>
        </div>
    </div>
</div>

        </div>
     
      
          
     );
}
 
export default Trending;