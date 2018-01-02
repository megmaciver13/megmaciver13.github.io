function portfolio () {
  var whoMore = document.querySelector('.who')
  var whereMore = document.querySelector('.where')
  var whatMore = document.querySelector('.what')
  var moreWho = document.querySelector('.more-who')
  var moreWhere = document.querySelector('.more-where')
  var moreWhat = document.querySelector('.more-what')

  var showWho = () => {
    console.log('more who info')
    moreWho.style.display = 'inline'
    moreWhere.style.display = 'none'
    moreWhat.style.display = 'none'
  }

  var showWhere = () => {
    console.log('more where info')
    moreWho.style.display = 'none'
    moreWhere.style.display = 'inline'
    moreWhat.style.display = 'none'
  }

  var showWhat = () => {
    console.log('more what info')
    moreWho.style.display = 'none'
    moreWhere.style.display = 'none'
    moreWhat.style.display = 'inline'
  }

  whoMore.addEventListener('click', showWho)
  whereMore.addEventListener('click', showWhere)
  whatMore.addEventListener('click', showWhat)
}

portfolio()
