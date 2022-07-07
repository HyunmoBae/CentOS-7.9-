const a = getdata();
const b = getdata() as object;
const c = a.toString();

async function getdata() {
  const data = await fetch(`http://localhost:3001/breeds/Beagle`)
    .then((res) => { return res.json()})
    .then((datas) => console.log(datas))
    .catch((error) => console.log(error));
    return data;
}

export default function Breed() {
    return ;
}