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

const showData = () => {
    let informationData = "";

    resevation.forEach((data) => {
        informationData += `<tr>
              <td scope="row">${data.Nroom}</th>
              <td scope="row">${data.name}</td>
              <td scope="row">${data.roomType}</td>
              <td scope="row">${data.price}</td>
            </tr>`;
    });

    let table = document.getElementById("tableData");
    return table.innerHTML = informationData;
}

showData();