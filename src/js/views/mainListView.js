class MainListView {
  _parentElement = document.querySelector(".CoffeeList");
  _data;

  render(data) {
    this._data = data;
    this._clear();
    this._data.forEach((el) => {
      const markup = this._generateMarkup(el);
      this._parentElement.insertAdjacentHTML("beforeend", markup);
    });
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  _generateMarkup(data) {
    return `
          <div class="item">
          <img
          src="./src/img/${data.name}.png"
          class="item-img"
          alt="${data.name}"
          />
          <div class="item-content">
          <p class="item-title">${data.name}</p>
          <ul class="item-attributes">
              <li class="item-attribute">
              <span>Caffeine <strong>${data.caffeine}</strong> mg</span>
              </li>
              <li class="item-attribute">
              <span>Serving <strong>${data.serving}</strong></span>
              </li>
              <li class="item-attribute">
              <span>Available <strong>${data.available}</strong></span>
              </li>
          </ul>
          </div>
      </div>
      `;
  }
}

export default new MainListView();
