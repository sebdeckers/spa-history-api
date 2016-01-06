export default function createCustomElement (elementName) {
  return function () {
    Array.from(document.querySelectorAll('section'))
      .forEach(function (section) {
        section.style.display = 'none'
      })
    const element = document.createElement(elementName)
    document.body.appendChild(element)
  }
}
