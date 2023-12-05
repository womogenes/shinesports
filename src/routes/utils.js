class Utils {
  constructor() {}
  zipCheck() {
    let form = document.forms['search'];
    let newValue = form.elements['zip'].value.replace(/\D/g, '');
    form.elements['zip'].value = newValue;
  }
  sportsCheck(id) {
    let form = document.forms['search'];
    for (let i = 1; i < 3; i++) {
      if (i == id) {
        form.elements['id' + i].checked = true;
        document.getElementById('sport' + i).style.backgroundColor = 'blue';
      } else {
        form.elements['id' + i].checked = false;
        document.getElementById('sport' + i).style.backgroundColor = 'white';
      }
    }
  }

  dropdown(contentId, signId) {
    let open = document.getElementById(signId).innerHTML == '-';
    console.log(open);
    if (open) {
      document.getElementById(contentId).style.display = 'none';
      document.getElementById(signId).innerHTML = '+';
    } else {
      document.getElementById(contentId).style.display = 'inline';
      document.getElementById(signId).innerHTML = '-';
    }
  }

  countChar() {
    const textArea = document.getElementById("comment").value
    document.getElementById("current").value = textArea.length
    console.log("is this working?")
    return true
  }
}

export default Utils;
