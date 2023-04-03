const header = document.querySelector('header')

window.addEventListener('scroll', function () {
  let scroll = this.scrollY

  if (scroll === 0 && header.classList.contains('small')) {
    header.classList.remove('small')
  } else if (scroll > 5 && !header.classList.contains('small')) {
    header.classList.add('small')
  }
})

const list = document.querySelector('#list')

list.addEventListener('click', function () {
  list.classList.toggle('open')
})

const addDrug = document.querySelectorAll('button')
const drugList = document.querySelector('#list')
let count = 0

for (var i = 0; i < addDrug.length; i++) {
  addDrug[i].addEventListener('click', function () {
    let copyDrug = this.parentElement.cloneNode('true')
    copyDrug.querySelector('button').remove()
    drugList.querySelector('div ul').appendChild(copyDrug)

    count++
    drugList.querySelector('#count').innerHTML = count
    drugList.querySelector('#count').style.visibility = 'visible'
  })
}
