$(document).ready(function(){
	console.log('ok!');
	


	$('#button_range1').bind('click',function(){
		var data_get=$('#textarea1').val();
		var num_each=$('#input_num').val();
		if(data_get==''){
			alert('请输出数据，并以英文逗号隔开！');
		}else if(num_each==''){
			alert('请输入你要取出多少个数！');
		}else{
			console.log('读取数据：'+data_get);
			var element=data_get.split(',');
			console.log('数据长度：'+element.length);
			console.log('设置元素个数：'+num_each);
			var result= new Array;
			var leng=element.length;
			getAllComb(element);
			$('#out_put').empty();
			$('#out_put').append('组合数：'+result.length+'<br/>');
			$('#out_put').append(result.join('　'));
			function getAllComb(myarr)    
			{    
			 var len=num_each;    
			 getComb(myarr,leng,len);    
			 // document.write("数组("+myarr.join(",")+")的所有的组合(共"+ result.length+"种)如下：<hr>"+result.join("\t"));    
			console.log(result);
			}    
			    
			//从数组myarr(n)中任选m个元素的所有组合(m>=1 && m<=n)。    
			function getComb(myarr,n,m,rs)    
			{    
			 if(rs==null)    
			  rs = new Array();    
			 for(var i=n;i>=m;i--)    
			 {    
			  rs[m-1]=myarr[i-1];      //取出第n个元素作为组合的第一个元素    
			  if(m>1)    
			   getComb(myarr,i-1,m-1,rs);  //递归，在n-1个元素中取m-1个元素,直到取出最后一个元素    
			  var comb = rs.join(",");     //获得一个组合    
			  if(!checkExist(result,comb))    
			   result.push(comb);    
			 }    
			}    
			    
			//查找某元素是否存在数组中,存在返回true,不存在返回false    
			function checkExist(myarr,e)    
			{    
			 for(var i=0;i<myarr.length;i++)    
			  if(e==myarr[i]) return true;    
			 return false;    
			}  
		
			}
		
	});
	

});
