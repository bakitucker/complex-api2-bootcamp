document.querySelector('button').addEventListener('click', salesTax)

function salesTax (){
  let zipcode = document.querySelector('input').value
  let urlForZipcode = `https://api.zippopotam.us/us/${zipcode}`
  
  fetch(urlForZipcode) 
    .then(res => res.json())
    .then(zipcodeData => {
      console.log(zipcodeData)
	//   innertext state,country,cityname
     let city = zipcodeData.places[0]["place name"]
     let postCode = zipcodeData["post code"]
     let state = zipcodeData.places[0].state

	  
	  fetch(`https://api.api-ninjas.com/v1/salestax?zip_code=${zipcode}`, {
        method: 'GET',
        headers: { 'X-Api-Key': 'z+kP/dQ1FLHyJ/EwaC6oBg==0NTw6jxccdMQUNgj' },
        contentType: 'application/json'
      })
      .then(res => res.json())
      .then(dataTax => {
        console.log(dataTax)
        let tax = dataTax[0].state_rate
      document.querySelector('h2').innerText = `(${postCode})${city}, ${state} state tax is ${tax}`

		// sale tax insert right here
      }) 
      .catch(err => {
        console.log(`error ${err}`) 
      })
    }) 
    .catch(err => { 
      console.log(`error ${err}`) 
    }); 
}
