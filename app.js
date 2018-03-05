var listItem = [];
var form = document.getElementById('toDOList');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    var input = document.getElementById('input-form').value;
    console.log(input);
    listItem.push(input);
    console.log(listItem);
    var ul = document.getElementById('list');
    var li = document.createElement('li');
    li.innerHTML = input;
    ul.appendChild(li);
});