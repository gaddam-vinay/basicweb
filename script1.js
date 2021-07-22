var dict = {};

function fillcheak() {
    var x = document.forms["feedback"]["email"].value;
    if (x == "") {
        alert("fill email");
        return false;
    }
    x = document.forms["feedback"]["name"].value;
    if (x == "") {
        alert("fill name");
        return false;
    }
    x = document.forms["feedback"]["skill"].value;
    if (x == "") {
        alert("fill skill");
        return false;
    }
    pushdata();
    reset();
    alert("feedback recorded");
    return false;
}

function pushdata() {
    var name = document.forms["feedback"]["name"].value;
    var skill = document.forms["feedback"]["skill"].value;
    var email = document.forms["feedback"]["email"].value;
    var l = document.getElementById("rating");
    var level = l.options[l.selectedIndex].text;
    var check = "ThisIsFormData";
    dict[name] = { email, skill, level, check };
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem(name, JSON.stringify(dict[name]));
    }
    document.getElementById('push').innerHTML += '<tr><td>' + skill + '</td><td>' + level +
        '</td><td>' + email + '</td><td>' + name + '</td></tr>';
}

function reset() {
    document.getElementById("name").value = "";
    document.getElementById("skill").value = "";
    document.getElementById("email").value = "";
}