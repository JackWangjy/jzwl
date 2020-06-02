layui.use('jquery', function(){
   var $ = layui.jquery;
     $(function  () {
        $.ajax({
        	url:"./admin/getAdminSession.do",
        	type:"post", 
        	data:{str:"adminInfo"},
        	success: function(data){   
        	     layer.msg("data:"+data,function(){});
        	     if(data!="SessionIsNull"){
        	        $("#adminname").text(data.name);	
        	     }else{
        	        location.href='login.html' ;
        	     }
        	},error:function(){
        	    location.href='login.html' ;
        	}
       });
       return false;
     });
})