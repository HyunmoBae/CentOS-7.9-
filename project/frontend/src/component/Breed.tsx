import axios from "axios";
import useSWR from "swr";

export default function Container() {
  const { data: abc } = useSWR(`http://localhost:3001/breeds`, () => fetcher(`http://localhost:3001/breeds`));
  const fetcher = (url: string) => axios.get(url);
  console.log(abc?.data[1].name); //axios 응답 -> json 형태

  const getName = abc?.data[1].name;

  return <h1>{getName}</h1>;
}