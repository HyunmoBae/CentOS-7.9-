import { useRef, useState } from "react";
import { useNavigate } from "react-router";

export default function CreateBreed(){
    const history = useNavigate();
    const [isLoading, setIsLoading] = useState(false);


    function onSubmit(e: React.FormEvent){
        e.preventDefault();

        if(!isLoading && nameRef.current && typeRef.current ) {
        setIsLoading(true);

        const name = nameRef.current.value
        const type = typeRef.current.value

        fetch(`http://localhost:3001/breeds`,{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                name,
                type
            }),
        })
        .then(res => {
            if(res.ok){
                alert('생성이 완료 되었습니다.')
                history(`/breeds/`)
                setIsLoading(false);
            }
        })
    }}
    
    const nameRef = useRef<HTMLInputElement>(null);
    const typeRef = useRef<HTMLInputElement>(null);

    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <br></br>
                <label>이름 </label>
                <input type="text" ref={nameRef} />
            </div>
            <div className="input_area">
                <label>타입</label>
                <input type="text" ref={typeRef}/>
            </div>
        <button>{isLoading ? "Saving..." : "저장"}</button>
        </form>
    );
}

