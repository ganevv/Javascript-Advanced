window.addEventListener("load", solve);

function solve() {
  let input = {
    make: document.getElementById('make'),
    model: document.getElementById('model'),
    year: document.getElementById('year'),
    fuel: document.getElementById('fuel'),
    originalCost: document.getElementById('original-cost'),
    sellingPrice: document.getElementById('selling-price'),
  }
  let lists = {
    table: document.getElementById('table-body'),
    carList: document.getElementById('cars-list'),
  }
  document.getElementById('publish').addEventListener('click', publish)

  function publish(e) {
    e.preventDefault()

    const make = input.make.value
    const model = input.model.value
    const year = input.year.value
    const fuel = input.fuel.value
    const originalCost = input.originalCost.value
    const sellingPrice = input.sellingPrice.value

    if (make == '' || model == '' || year == '' || fuel == '' || originalCost == '' || sellingPrice == '') {
      return
    } else if (originalCost > sellingPrice) {
      return
    }

    const tr = document.createElement('tr')
    tr.className = 'row'
    tr.innerHTML =
      `<td>${make}</td>
    <td>${model}</td>
    <td>${year}</td>
    <td>${fuel}</td>
    <td>${originalCost}</td>
    <td>${sellingPrice}</td>
    <td>
    <button class="action-btn edit">Edit</button>
    <button class="action-btn sell">Sell</button>
    </td>`

    input.make.value = ''
    input.model.value = ''
    input.year.value = ''
    input.fuel.value = ''
    input.originalCost.value = ''
    input.sellingPrice.value = ''

    lists.table.appendChild(tr)

    tr.querySelector('.edit').addEventListener('click', edit)
    tr.querySelector('.sell').addEventListener('click', sell)

    function edit() {
      input.make.value = make
      input.model.value = model
      input.year.value = year
      input.fuel.value = fuel
      input.originalCost.value = originalCost
      input.sellingPrice.value = sellingPrice
      tr.remove()
    }

    function sell() {
      lists.carList.appendChild(tr)
      tr.className = 'each-list'
      tr.innerHTML =
        `<span>${make} ${model}</span>
        <span>${year}</span>
        <span>${sellingPrice - originalCost}</span>`


      let totalProfit = 0
     

      document.getElementById('profit').textContent = `${2500.00}`
    }
  }
}