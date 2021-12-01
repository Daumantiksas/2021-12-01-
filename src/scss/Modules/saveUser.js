
const saveData= (user) =>{
    let arr = [];
    if
    (JSON.parse(localStorage.getItem('userArr')) != null)
    arr = JSON.parse(localStorage.getItem('userArr'));
    arr.push(user);

    localStorage.setItem('userArr', JSON.stringify(arr));
}
export default saveData