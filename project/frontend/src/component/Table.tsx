import useFetch from "../hooks/useFetch";
import Breed, { IBreed } from "./Breed";

export default function Table(){
    const breeds: IBreed[] = useFetch(`http://localhost:3001/breeds`)

    return (
        <>
    <h2>breed</h2>
    <table>
        <tbody>
            <th>이름</th>
            <th>타입</th>
            <th>편집</th>
                {breeds.map((Breeds: IBreed) => (
                <Breed breed={Breeds} key={Breeds._id}/>   
                ))}
        </tbody> 
    </table>
    </>
    )
}