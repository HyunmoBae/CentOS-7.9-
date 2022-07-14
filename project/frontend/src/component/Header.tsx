import { Link } from "react-router-dom";

export default function Header(){
    return(
    <div className="header">
    <h1>
        <Link to="/">몽고DB</Link>
    </h1>
    <div className="data">
        <Link to='breeds' className="link">데이터 보기 </Link>
        <Link to='update_data' className="link">데이터 추가</Link>
    </div>
    </div>
    )
}