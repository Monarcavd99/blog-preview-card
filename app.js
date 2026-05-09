function processFormData() {
    let form = document.getElementById('myForm');

    let cardNumber = form.elements.number.value;
    let holder = form.elements.holder.value;
    let method = form.elements.pay.value;

    insertdata(cardNumber, holder, method);
    clearFormData();
}

function insertdata(cardNumber, holder, method) {
    let table = document.getElementById('dataTable');
    let row = table.insertRow();
    row.insertCell(0).innerText = cardNumber;
    row.insertCell(1).innerText = holder;
    row.insertCell(2).innerText = method;
}

function clearFormData() {
    document.getElementById('myForm').reset();
}