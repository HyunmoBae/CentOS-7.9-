import { useRef, useState } from "react";

    interface IProps {
        breed: IBreed
    }

    export interface IBreed{
        _id? : string,
        name? : string,
        type? : string
    }

export default function ShowData(props:IProps){
    const [breed, setBreed] = useState(props.breed);
    
    function put() {
        const name = nameRef.current?.value
        const type = typeRef.current?.value

        fetch(`http://localhost:3001/breeds/${breed._id}`,{
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                ...breed,
                name : name,
                type : type
            }),
        }).then(res => {
            if(res.ok){
                setBreed({
                    ...breed,
                    name:`${name}`,
                    type:`${type}`
                });
            }
        })
        if (breed.name === "") {
            return null;
        }
    }

    const nameRef = useRef<HTMLInputElement>(null);
    const typeRef = useRef<HTMLInputElement>(null);
    
    function del() {
        if(window.confirm('삭제 하시겠습니까?')){
               fetch(`http://localhost:3001/breeds/${breed._id}`,{
                method : 'DELETE',
            }).then(res => {
                if(res.ok){
                    setBreed({
                        ...breed,
                        _id:""
                    });
                }
            })
        };
    }
    if (breed._id === "") {
        return null;
    }

    return (
        <>
            <tr>
                <td>
                    {breed.name}
                    <br/>
                    <div className="input_area2">
                     <input type="text" placeholder={breed.name} ref={nameRef}/>
                    </div>
                </td>
                <td>
                    {breed.type}
                    <br/>
                    <div className="input_area2">
                     <input type="text" placeholder={breed.type} ref={typeRef}/>
                    </div>
                    </td>
                <td>
                    <button className="button" onClick={put}>수정</button>
                    <button className="btn_del" onClick={del}>삭제</button>
                </td>
            </tr>
        </>    
        )
}