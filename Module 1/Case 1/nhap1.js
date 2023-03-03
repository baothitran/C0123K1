function Employee(name,image,id,organization,position,email) {
    this.name = name;
    this.image = image;
    this.employeeid = id;
    this.organization = organization;
    this.position = position;
    this.email = email;

    this.getName = function() {
        return this.name;
    }
    this.setName = function(name) {
        this.name = name;
    }
    this.getImage = function() {
        return this.image;
    }
    this.setImage = function(image) {
        this.image = image;
    }
    this.getEmployeeID = function() {
        return this.employeeid;
    }
    this.setEmployeeID = function(id) {
        this.employeeid = id;
    }
    this.getOrganization = function() {
        return this.organization;
    }
    this.setOrganization = function(organization) {
        this.organization = organization;
    }
    this.getPosition = function() {
        return this.position;
    }
    this.setPosition = function(position) {
        this.position = position;
    }
    this.getEmail = function() {
        return this.email;
    }
    this.setEmail = function(email) {
        this.email = email;
    }
}

var checked_list = [];
var employees = [];
var selectedEmployees = [];

var organization = [
    "Product","Social Media", "Marketing", "Engineer"
]
var position = [
    "Product Design", "Sosmed", "Market Place","Web Developer"
]

const employee_db = "employee_db";
function init() {
    if(localStorage.getItem(employee_db) == null) {
        employees = [
            new Employee("Hà Thi Phượng", "", 012301, "Marketing","Market Place", "cheypi@gmail.com"),
            new Employee("Hà Công Bằng", "", 012302, "Product","Product Design", "habang@gmail.com"),
            new Employee("Nguyễn Phước Đạt", "", 012303, "Social Media","Sosmed", "phuocdat@gmail.com"),
            new Employee("Phan Ngọc Hiếu", "", 012304, "Engineer","Web Developer", "hieuphan@gmail.com"),
        ]
        localStorage.setItem(employee_db,JSON.stringify(employees))
    }
    else {
        employees = JSON.parse(localStorage.getItem(employee_db));
    }
}
function renderEmployee(checked) {
    let htmls = employees.map(function (employee) {
        return `
                <tr>
                    <td>
                        <input onchange="selectEmployee(${employee.id})" type="checkbox" ${checked ? "checked" : ""}>
                    </td>
                    <td>
                        <div class="img-name">
                            <img class="imgava" src="${employee.image}" alt="">
                            <span>${employee.name}</span>
                        </div>
                    </td>
                    <td>${employee.id}</td>
                    <td>${employee.organization}</td>
                    <td>${employee.position}</td>
                    <td>${employee.email}</td>
                    <td>
                        <i class="fa-solid fa-user-pen" onclick="editEmployee(${employee.id})"></i>
                    </td>
                </tr>`
    })

    document.querySelector('.table>tbody').innerHTML = htmls.join("");
}

function renderOrganization() {
    let htmls = organizations.map(function (org) {
        return `<option value="${org}">${org}</option>`
    })

    document.querySelector('#organization').innerHTML = htmls.join("")
}
function renderPosition() {
    let htmls = positions.map(function (pos) {
        return `<option value="${pos}">${pos}</option>`
    })
    document.querySelector('#position').innerHTML = htmls.join('')
}

function isEmpty(value) {
    return value == null || value.trim() == '';
}

function add() {
    let name = document.getElementById('name').value;
    if (isEmpty(name)) {
        alert('Please enter information');
        return;
    }
    let id = getMaxId() + 1;
    let image = document.getElementById('image').value;
    if (isEmpty(image)) {
        alert('Please enter information');
        return;
    }
    let organization = document.getElementById('organization').value;
    if (isEmpty(organization)) {
        alert('Please enter information');
        return;
    }
    let position = document.getElementById('position').value;
    if (isEmpty(position)) {
        alert('Please enter information');
        return;
    }
    let email = document.getElementById('email').value;
    if (isEmpty(email)) {
        alert('Please enter information');
        return;
    }
    employees.push(new Employee(name,image,id,organization,position,email));

    renderEmployee();
    localStorage.setItem(employees_db, JSON.stringify(employees))
    resetAddForm();
}
function resetAddForm() {
    document.getElementById('name').value = '';
    document.getElementById('image').value = '';
    document.getElementById('id').value = '';
    document.getElementById('organization').value = '';
    document.getElementById('position').value = '';
    document.getElementById('email').value = '';
    renderOrganization();
    renderPosition();
}

function selectAllEmployees() {
    if (document.querySelector('#selectAllEmployees').checked) {
        checked_list = [];
        for (let i = 0; i < employees.length; i++) {
            checked_list.push(employees[i].id);
            document.getElementById(`checkbox_${employees[i].id}`).checked = true;
        }
    }
    else {
        for (let i = 0; i < employees.length; i++) {
            checked_list = [];
            document.getElementById(`checkbox_${employees[i].id}`).checked = false;
        }
    }
    console.log(checked_list);
}

function searchByName() {
    let searchWord = document.getElementById('search').value;
    searchWord = searchWord.trim().toLowerCase();
    let resultSearch = [];
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].name.toLowerCase().includes(searchWord)) {
            resultSearch.push(employees[i].id);
        }
    }
    if (searchWord == null || searchWord == '') {
        renderEmployee();
        return;
    } else {
        renderSearchList(resultSearch);
        document.getElementById('search').value = '';
    }

}

function start() {
    init();
    renderPosition();
    renderOrganization();
    renderTable();
}


start();