// import placeholder from '../images/sample-image.jpg'
import { useState, useEffect } from 'react';


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
        <div  className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {countries.map((country) =>  (
        // <Link to={`/${country.name}`}>
          <div key={country.id} className="rounded-md">
            <img  key={country.id}  src={country.image} alt="" className="w-full h-48 object-cover rounded-md drop-shadow" />
            <p className='py-3 text-xs'>{country.title == null ? country.name: country.title}</p>
          </div>
        // </Link>
        ))}
        </div>
       </div>
     );
}
 
export default Recommended;