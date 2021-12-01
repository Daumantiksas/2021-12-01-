const form = () => {
    return(`
    <div class="input-group" style="padding: 50px">
        <input type="text" aria-label="First name" placeholder="vardas" class="name form-control">
        <input type="text" aria-label="Last name" placeholder="Pavarde" class="lname form-control">
        <input type="text" aria-label="Email" placeholder="email" class="email form-control">
        <button type="button" class="btn btn-primary">Save</button>
    </div>
        <div>
        <ul class="storage" style="padding-left: 100px;">
        </ul>
</div>`)
}

export default form;