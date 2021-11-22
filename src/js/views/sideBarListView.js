class SideBarListView {
  _parentElement = document.querySelector(".Sidebar-list");
  _data;

  render(data) {
    this._data = data;
    this._clear();
    this._data.forEach((el) => {
      const markup = this._generateMarkup(el);
      this._parentElement.insertAdjacentHTML("beforeend", markup);
    });
  }

  addHandler(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn-plus");
      if (!btn) return;
      handler(btn.dataset.id);
    });
  }

  minusHandler(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn-minus");
      if (!btn) return;
      handler(btn.dataset.id);
    });
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  _generateMarkup(data) {
    return `
        <div class="Sidebar-list-item " data-id="${data.id}">
                <div class="Sidebar-list-item-name">${data.name}</div>
                <div class="Sidebar-list-item-control">
                  <div class="btn btn-minus" data-id="${data.id}">-</div>
                  <div class="Sidebar-list-item-number" data-id="${data.id}">${data.taken}</div>
                  <div class="btn btn-plus" data-id="${data.id}">+</div>
                </div>
              </div>
        `;
  }
}

export default new SideBarListView();
