let resevation = [
    {
        id: 2,
        Nroom: "5",
        name: "Sofia",
        roomType: "Matrimonial",
        price: "50.000",
    },
    {
        id: 4,
        Nroom: "15",
        name: "Mariana",
        roomType: "Suite",
        price: "120.000",
    },
    {
        id: 5,
        Nroom: "20",
        name: "Andy",
        roomType: "Individual",
        price: "40.000",
    },
    {
        id: 6,
        Nroom: "25",
        name: "Valeria",
        roomType: "Familiar",
        price: "90.000",
    },
    {
        id: 7,
        Nroom: "10",
        name: "Jhon",
        roomType: "Familiar",
        price: "90.000",
    }
];

let id = null;
let modal = new bootstrap.Modal(document.getElementById("modalIdForm"));

const showData = () => {
    let informationData = "";

    resevation.forEach((data) => {
        informationData += `<tr>
              <td scope="row">${data.Nroom}</td>
              <td scope="row">${data.name}</td>
              <td scope="row">${data.roomType}</td>
              <td scope="row">${data.price}</td>
              <td>
                <button class="btn btn-primary btn-sm" onclick="openModalById(${data.id})">Editar</button>
                <button class="btn btn-danger btn-sm" onclick="delate(${data.id})">Eliminar</button>
            </tr>`;
    });


    let table = document.getElementById("tableData");
    return table.innerHTML = informationData;
}

function openModalById(idParam = null) {
    if (idParam != null) {
        id = idParam;
        const data = resevation.find((r) => r.id == idParam);
        document.getElementById("name").value = data.name;
        document.getElementById("precio").value = data.price;
        document.getElementById("Habitacion").value = data.roomType;
        document.getElementById("NHabitaciones").value = data.Nroom;
    } else {
        id = null;
        document.getElementById("name").value = "";
        document.getElementById("precio").value = "";
        document.getElementById("Habitacion").value = "";
        document.getElementById("NHabitaciones").value = "";
    }

    modal.show();
}

function saveValues(event) {
    event.preventDefault();
    modal.hide();
}

function delate(idpara) {
    resevation = resevation.filter((r) => r.id != idpara);
    showData();
}

showData();