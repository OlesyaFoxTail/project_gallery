
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".header__select-btn").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".header__dropdown");

    document.querySelectorAll(".header__select-btn").forEach(el => {
      if (el !== btn) {
        el.classList.remove(".active--btn");
      }
    });

    document.querySelectorAll(".header--dropdown").forEach(el => {
      if (el !== dropdown) {
        el.classList.remove("dropdown-active");
      }
    })
    dropdown.classList.toggle("dropdown-active");
    btn.classList.toggle("active--btn");
    btn.classList.toggle("header__select-btn");

  })
});

  document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".header__select-list")) {
      document.querySelectorAll(".header__dropdown").forEach(el => {
          el.classList.remove("dropdown-active");
      })
      document.querySelectorAll(".header__select-btn").forEach(el => {
          el.classList.remove("active--btn");
      })
    }
  });



  OverlayScrollbars(document.querySelectorAll(".header__dropdown"), {
    className: "os-theme-thin-dark",
    overflowBehavior : {
      x : "hide",
      y : "scroll",
  },
  });

  // const btnSearch = document.querySelector(".header__search");
  // const btnClose = document.querySelector(".header__reset");
  // const searchForm = document.querySelector(".search__form");

  // btnSearch.addEventListener('click')

});


