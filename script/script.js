
 const newSelect = () => {
  const elements = document.querySelectorAll('.header__select-select');
  elements.forEach(el => {
    const choices = new Choices(el, {
      searchEnabled: false,
      position: 'relative',
      searchChoices: true,
      itemSelectText: '',
      visibility: 'visible',
    });
  });
};

newSelect();


document.addEventListener("DOMContentLoaded", function() {
  //The first argument are the elements to which the plugin shall be initialized
  //The second argument has to be at least a empty object or a object with your desired options
  OverlayScrollbars(document.querySelectorAll(".choices__list--dropdown .choices__list"), {
    className: "os-theme-thin-dark limited-handles" ,
    overflowBehavior : {
      x : "hide",
      y : "scroll"
  },
  });

  OverlayScrollbars(document.querySelectorAll(".choices__list--dropdown .choices__list"), {
    className : "os-theme-thin-dark limited-handles"
});
let arialabel = element.getAttribute('aria-label');
element.closest('.choices').setAttribute('aria-label', arialabel);

});


// const linkSelect = document.getElementsByClassName('.header__select-select')
// const handleChange = (event) => {
//   const {value} = event.target
//   const redirectTo = `test.html`
//   // const redirectTo = `/path/${value}`
//   document.location.href = redirectTo
//   linkSelect.addEventListener('change', handleChange)
// };



// Redirect

// const linkSelect = document.getElementById('realism')

// const handleChange = (event) => {
//   const { value } = event.target
//   const redirectTo = `https://youtube.com`
//   // document.location.href = redirectTo
//   window.location.href = redirectTo
// select.addEventListener('change', handleChange)
// }



// let arialabel = element.getAttribute('aria-label');
// element.closest('.choices').setAttribute('aria-label', arialabel);
// };



