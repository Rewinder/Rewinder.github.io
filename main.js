function testLogin(){
	var usrName = document.getElementById("usr").value;
	var usrPsd = document.getElementById("psd").value;
	if(usrName == "123" && usrPsd == "123"){
		window.alert("登录成功");
	} else {
		window.alert("登录失败");
	}
}