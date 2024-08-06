// DOM
const typeDriverEl = document.getElementById('typeDriver')
const tanggalEl = document.getElementById('tanggal')
const jamEl = document.getElementById('jam')
const PenumpangEl = document.getElementById('Penumpang')
const cariEl = document.getElementById('cari')

const inputData = {
        typeDriver: '',
        tanggal: '',
        jam: '',
        Penumpang: ''
}

// trigger // function 
cariEl.addEventListener('click', function(e){
        inputData.typeDriver = typeDriverEl.value
        inputData.tanggal = tanggalEl.value
        inputData.jam = jamEl.value
        inputData.Penumpang = PenumpangEl.value
        console.log(inputData)
        getData(inputData)
})

async function getData (inputData){
        const getCars = await fetch('https://api-car-rental.binaracademy.org/customer/car')
        const result = await getCars.json()
        const data = Binar.populateCars(result)

        const filteredData = data.filter(function(e){
                return e.typeDriver === inputData.typeDriver
        }) 

        filteredData.forEach(element => {
                itemHtml += '
                <div class='col-4'>'                
        });
        console.log(data)     
        console.log(filteredData);
          
}