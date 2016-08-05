import $ from 'jquery'

$('.checkbox').click(evt => {
  $(evt.delegateTarget).toggleClass('active')
})
