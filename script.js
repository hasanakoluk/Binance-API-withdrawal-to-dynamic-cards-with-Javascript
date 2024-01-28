const wrapper = document.querySelector(".wrapper")
  
  let financeApi = "https://raw.githubusercontent.com/Real-time-finance/finance-websocket-API/master/companies_list.json"
  fetch(financeApi)
    .then(responce => responce.json())
    .then(data => get(data))

    function get(items){
    
     items.forEach(item =>{
      let symbol = item.symbol
      let exchange = item.exchange
      let name = item.name
      let price = item.price
      
      let div = document.createElement("div")
      
      div.innerHTML = 
      `
      <div class="card">
        <h2 class="card-yazi">${symbol}</h2>
      <div class="icerik">
        <img src="./binance.png" alt="">
        <p>${exchange}</p>
        <p>${name}</p>
        <p>${price}</p>
      </div>
      </div>
     
      ` 
       wrapper.append(div) 
     })
    }