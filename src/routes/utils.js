class Utils {
    constructor() {
    }
    zipCheck() {
        let form = document.forms['search']
        let newValue = form.elements['zip'].value.replace(/\D/g, '');
        form.elements['zip'].value = newValue;
    }
    sportsCheck(id) {
        let form = document.forms['search']
        for(let i = 1; i < 3; i++){
            if(i == id) {
                form.elements['id' + i].checked = true;
                document.getElementById('sport' + i).style.backgroundColor = "blue";
            }
            else {
                form.elements['id' + i].checked = false;
                document.getElementById('sport' + i).style.backgroundColor = "white";
            }
        }
    }
}

export default Utils;