fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((DataOfObject) => {
        console.log(DataOfObject[0].id);
        let tableData = "";
        DataOfObject.map((values) => {
            tableData += `<tr>
        <td> ${values.id} </td>
        <td> ${values.name} </td>
        <td> ${values.username} </td>
        <td> ${values.email} </td>
        <td> ${values.phone} </td>
        <td>  ${values.website} </td>
        <td>  ${values.company.name} </td>
        <td>  ${values.company.catchPhrase} </td>
        <td>  ${values.company.bs} </td>
        </tr>`;
        });
        document.getElementById("table_body").innerHTML = tableData;
    });
