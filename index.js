const { response } = require("express");

const mahasiswaNim = '20220040283'; 
const updateData = {
    nama: 'RAYHANSYAH',
    gender: 'L',
    prodi: 'Teknik Informatika',
    alamat: 'Parungkuda'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
    method: 'PUT',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(updateData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erorr:', error));