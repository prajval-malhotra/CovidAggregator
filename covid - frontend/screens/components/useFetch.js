
// import { useState, useEffect } from 'react';

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [isPending, setIsPending] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//       fetch(url)
//       .then(res => {
//         if (!res.ok) {
// 			throw Error('could not fetch the data for that resource');
//         } 
//         console.log(res.json());
//         // return res.json();
//       })
//       .then(data => {
//         setIsPending(false);
//         setData(data);
//         setError(null);
//       })
//       .catch(err => {
//         // auto catches network / connection error
//         setIsPending(false);
//         setError(err.message);
//       })
//   }, [url])

//   return { data, isPending, error };
// }
 
// export default useFetch;


import { useState, useEffect } from 'react';

const useFetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
      fetch('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=700107&date=06-05-2021')
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        } 
        //console.log(res);
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        // auto catches network / connection error
        setIsPending(false);
        setError(err.message);
      })
  }, []);

  return { data };
}
 
export default useFetch;