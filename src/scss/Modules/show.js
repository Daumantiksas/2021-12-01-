const show =() => {
if
(JSON.parse(localStorage.getItem('userArr')) != null){
    let element = document.querySelector('.storage');
    while (element.firstChild){
        element.removeChild(element.firstChild);
    }
    let arr =[]
    arr= JSON.parse(localStorage.getItem('userArr'));
    for (let i of arr){
        const p = document.createElement('p');
        p.textContent= `${i.name} ${i.last} ${i.email}`;
        document.querySelector('.storage').appendChild(p)
    }

}
}
export default show;

 