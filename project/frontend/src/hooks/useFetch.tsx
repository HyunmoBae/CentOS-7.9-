import { useEffect, useState } from "react";

export default function useFetch(url: string) {
    const [data, setData] = useState([]);

useEffect(() => {
    fetch(url)
    .then(res=> {
        return res.json();
    })
    .then(data=>{
        setData(data);
    });
}, [url]);

    return data;
}

// import axios from "axios";
// import useSWR from "swr";

// export default function Container() {
//   const { data: abc } = useSWR(`http://localhost:3001/breeds`, () => fetcher(`http://localhost:3001/breeds`));
//   const fetcher = (url: string) => axios.get(url);
//   console.log(abc?.data[1].name); //axios 응답 -> json 형태

//   const getName = abc?.data[1].name;

//   return <h1>{getName}</h1>;
// }



// import { useEffect, useState } from "react";

// export default function Day() {
//     const [breeds, setbreed]:any = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:3001/breeds')
//         .then(res=> {
//             return res.json();
//         })
//         .then(data => {
//         setbreed(data);
//         });
//     }, [breeds]);

//     return (
//       <h1>{breeds[0]?.name}</h1>
//       )