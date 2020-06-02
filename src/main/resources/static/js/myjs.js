function queryFre() {
    var weight = document.getElementById("weight").value;
    if(weight!=""){
    var reg=/^\d+(\.\d+)?$/; // 注意：故意限制了 0321 这种格式，如不需要，直接reg=/^\d+$/;
    if(reg.test(weight)==true){
        $.ajax({
            url: "/queryFre",
            type: "get",
            data: $("#fre").serialize(),
            success:function (freight) {
                if(freight.id!=null){

                    // $("#time").append('<p id="new1">' + freight.time+'</p>');
                    // $("#weight1").append('<p id="new2">' + weight+'</p>');
                    // $("#money").append('<p id="new3">' + freight.price+'</p>');
                    $("#time").append(freight.time);
                    $("#weight1").append(weight);
                    $("#money").append(freight.price);
                }
            }
        })
    }else{
        alert("请输入数字!");
        return;
    }
    }else{
        return;
    }

}


