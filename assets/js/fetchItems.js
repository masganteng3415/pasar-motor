const lists = document.querySelector('#list-items')

// format number to rupiah
const formatCurrency = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0

  }).format(number)
}

// fetching motor lists
async function fetchItems() {
  try {
    const res = await fetch("dummy-item.json")
    const item = await res.json()
    const a = item.map((i, key) => {
      return `
      <div class="col" id="${i.id}">
        <a href="/pages/detail.html">
          <figure class="card mb-0">
            <img
              src="/assets/dummy/${i.img}.avif"
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