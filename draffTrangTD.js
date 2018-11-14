var arrTD=
[
	{
		image: "Final/TinhDau1.jpg",
		code: "TD001",
		name: "SET 1: Tinh dầu Lavender tăng cường sức khỏe và làm đẹp",
		price: "Giá: 300k",
		color: "Tím",
	},
	{
		image: "Final/TinhDau2.jpg",
		code: "TD002",
		name: "SET 2: Tinh dầu hoa Lavender tăng cường sức khỏe và làm đẹp",
		price: "Giá: 280k",
		color: "Tím",
	},
	{
		image: "Final/TinhDau3.jpg",
		code: "TD003",
		name: "SET 1: Tinh dầu Lavender Trị mụn ",
		price: "Giá: 200k",
		color: "Vàng",
	},
	{
		image: "Final/TinhDau4.jpg",
		code: "TD004",
		name: "SET 8: Tinh dầu hoa Lavender tăng cường sức khỏe và làm đẹp",
		price: "Giá: 240k",
		color: "Tím",
	},
	{
		image: "Final/TinhDau5.jpg",
		code: "TD005",
		name: "SET 1: Tinh dầu Lavender xông phòng thư giãn",
		price: "Giá: 180k",
		color: "Tím",
	},
	{
		image: "Final/TinhDau6.jpg",
		code: "TD006",
		name: "SET 3: Tinh dầu Lavender Trị mụn ",
		price: "Giá: 200k",
		color: "Tím",
	},
	{
		image: "Final/TinhDau7.jpg",
		code: "TD007",
		name: "Tinh dầu Lavender Trị mụn ",
		price: "Giá: 200k",
		color: "Vàng",
	},
	{
		image: "Final/TinhDau8.jpg",
		code: "TD008",
		name: "SET 8: Tinh dầu Lavender Trị mụn ",
		price: "Giá: 220k",
		color: "Tím",
	},
	{
		image: "Final/TinhDau9.jpg",
		code: "TD009",
		name: "SET 2: Tinh dầu Lavender xông phòng thư giãn",
		price: "Giá: 250k",
		color: "Vàng",
	},
	{
		image: "Final/TinhDau10.jpg",
		code: "TD0010",
		name: "SET 4: Tinh dầu Lavender xông phòng thư giãn",
		price: "Giá: 200k",
		color: "Vàng",
	},
	{
		image: "Final/TinhDau11.jpg",
		code: "TD0011",
		name: "SET 5: Tinh dầu Lavender Trị mụn",
		price: "Giá: 220k",
		color: "Tím & Vàng",
	},
	{
		image: "Final/TinhDau12.jpg",
		code: "TD0012",
		name: "SET 8: Tinh dầu Lavender xông phòng thư giãn",
		price: "Giá: 220k",
		color: "Tím",
	},
];

function findProduct(tenanh)
	{
		for(var i = 0; i<arrTD.length; i++)
		{
			if(arrTD[i].image==tenanh)
				return i;
		}
		return -1;
	}

function show()
{
	var obj = window.event.target;
	var tenanh=obj.src;
	
	tenanh = tenanh.substring(tenanh.lastIndexOf("/")+1);
	var kq= findProduct("Final/" +tenanh);
	if(kq>=0)
	{
		var hinh = document.getElementById("hinh");
		hinh.src=arrTD[kq].image;
		hinh.setAttribute("alt", arrTD[kq].code);/**********/

		var div = document.getElementById("infor");
		div.innerHTML ="<br>Mã SP: "+arrTD[kq].code;
		div.innerHTML +="<br>Tên: "+arrTD[kq].name;
		div.innerHTML +="<br>"+arrTD[kq].price;
		div.innerHTML +="<br>Màu sắc: "+arrTD[kq].color;
		
		var div_detail=document.getElementById("detail");
		div_detail.style.display="block";/****************/
	}
}

function display()
{
	var div_chinh=document.getElementById("dssp");
	var div_subto= document.createElement("div");
		div_chinh.classList.add("dssp");
		div_subto.classList.add("subto");
		div_chinh.appendChild(div_subto);


	for(var i= 0; i<arrTD.length; i++)
	{
		var div_con= document.createElement("div");
		var anh = document.createElement("img");
		anh.src=arrTD[i].image;
		//anh.addEventListener("click", show);
		anh.addEventListener("click", show);
		div_con.classList.add("sub");

		var h2 =document.createElement("h2");
		h2.innerHTML=arrTD[i].name;
		var p = document.createElement("p");
		p.innerHTML=arrTD[i].price;
		
		div_con.appendChild(anh);//đưa ảnh vào div_con
		div_con.appendChild(h2);
		div_con.appendChild(p);
		
		div_subto.appendChild(div_con);
		
	}
	
}

function closeDetail()
{
	var div_detail=document.getElementById("detail");
	div_detail.style.display="none";
}
function closeGH()
{
	var div_giaohang=document.getElementById("giaohang");
	div_giaohang.style.display="none";
}
