function portfolio () {
  var whoButton = document.querySelector('.who-more')
  var whereButton = document.querySelector('.where-more')
  var whatButton = document.querySelector('.what-more')
  var moreWho = document.querySelector('.more-who')
  var moreWhere = document.querySelector('.more-where')
  var moreWhat = document.querySelector('.more-what')

  var showWho = () => {
    if (moreWho.style.display === 'none') {
      moreWho.style.display = 'inline'
    } else {
      moreWho.style.display = 'none'
    }
    moreWhere.style.display = 'none'
    moreWhat.style.display = 'none'
  }

  var showWhere = () => {
    if (moreWhere.style.display === 'none') {
      moreWhere.style.display = 'inline'
    } else {
      moreWhere.style.display = 'none'
    }
    moreWho.style.display = 'none'
    moreWhat.style.display = 'none'
  }

  var showWhat = () => {
    if (moreWhat.style.display === 'none') {
      moreWhat.style.display = 'inline'
    } else {
      moreWhat.style.display = 'none'
    }
    moreWho.style.display = 'none'
    moreWhere.style.display = 'none'
  }

  whoButton.addEventListener('click', showWho)
  whereButton.addEventListener('click', showWhere)
  whatButton.addEventListener('click', showWhat)
}

portfolio()
