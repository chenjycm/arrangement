$(document).ready(function(){
	console.log('ok!');
	


$('#button_range1').bind('click',function(){
	var data_get=$('#textarea1').val();
	var num_each=$('#input_num').val();
	console.log('读取数据：'+data_get);
	console.log('设置元素个数：'+num_each);
});



});
