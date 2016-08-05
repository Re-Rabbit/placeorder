import $ from 'jquery'

$('.select-control').on('click', function() {
  $(this).parents('.select').find('.select-field').click()
  return false
})

var tpl = $('.goods-item').html()

$('.action-create').on('click', function() {
  console.log($(this).parents('.goods-block').find('.goods-list'), tpl)
  $(this).parents('.goods-block').find('.goods-list').append(tpl)
})


