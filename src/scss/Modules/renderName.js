import User from "./User";
import saveData from "./saveUser";
import show from "./show";
const renderName = () =>
    document.querySelector('.btn').addEventListener('click', ()=>{
        const user = new User(document.querySelector('.name').value,
                              document.querySelector('.lname').value,
                              document.querySelector('.email').value)
        console.log(user)
        saveData(user)
        show()
    })



export default renderName