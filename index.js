function portfolio () {
  var whoMore = document.querySelector('.who-more')
  var whereMore = document.querySelector('.where-more')
  var whatMore = document.querySelector('.what-more')
  var headerText = document.querySelector('.header-text')
  var moreWho = document.querySelector('.more-who')
  var button = document.querySelector('.button')

  whoMore.addEventListener('click', showWho)

  function showWho () {
    moreWho.innerHTML = '<p>hello world</p>'
  }
}

portfolio()
