export default function toggleSection (route) {
  return function () {
    Array.from(document.querySelectorAll('section'))
      .forEach(function (section) {
        section.style.display = 'none'
      })
    document.title = route.title
    document.querySelector(route.element).style.display = 'block'
  }
}
