const lists = document.querySelector('#list-items')

const formatCurrency = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',

  }).format(number)
}

async function fetchItems() {
  try {
    const res = await fetch("../../dummy-item.json")
    const item = await res.json()
    const a = item.map((i, key) => {
      return `
      <div class="col-6" id="${i.id}">
        <a href="">
          <figure class="card">
            <img
              src="./assets/dummy/${i.img}.avif"
              class="card-img-top"
              alt="${i.title}"
            />
            <figcaption class="card-body small">
              <p class="card-title">${i.title}</p>
              <div class="text-end">${formatCurrency(i.price)}</div>
            </figcaption>
          </figure>
        </a>
      </div>
    `
    }).join('')

    lists.innerHTML += a
  } catch (err) { console.error("Error: ", err) }
}

fetchItems()