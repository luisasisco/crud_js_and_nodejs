let resevation = [
    {
        Nroom: "5",
        name: "Sofia",
        roomType: "Matrimonial",
        price: "50.000",
    },
    {
        Nroom: "15",
        name: "Mariana",
        roomType: "Suite",
        price: "120.000",
    },
    {
        Nroom: "20",
        name: "Andy",
        roomType: "Individual",
        price: "40.000",
    },
    {
        Nroom: "25",
        name: "Valeria",
        roomType: "Familiar",
        price: "90.000",
    },
    {
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
                <button class="btn btn-primary btn-sm" onclick="openModalById(${data.Nroom})">Editar</button>
                <button class="btn btn-danger btn-sm" onclick="delate(${data.Nroom})">Eliminar</button>
            </tr>`;
    });


    let table = document.getElementById("tableData");
    return table.innerHTML = informationData;
}

function openModalById(idParam = null){
    if(idParam != null){
        const resevations = resevation.find((r) => r.Nroom == idParam);
        id = idParam;
        document.getElementById("name").value = resevations.name; 
        document.getElementById("precio").value = resevations.price;
        document.getElementById("Habitacion").value = resevations.Habitacion;
        document.getElementById("NHabitaciones").value = resevations.NHabitaciones;
    }else{
        id = null;
        document.getElementById("name").value = ""; 
        document.getElementById("precio").value = ""; 
        document.getElementById("Habitacion").value =""; 
        document.getElementById("NHabitaciones").value = ""; 
    }
   
    modal.show();
}

function delate(idpara) {
    resevation=resevation.filter((r) => r.Nroom != idpara);
    showData();
}
showData();