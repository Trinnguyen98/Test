var arrQT = [
	{
		image: "Final/QuaTang2.jpg",
		code: "QT001",
		name: "HỘP HOA LAVENDER VÀ HOA HỒNG VĨNH CỬU",
		price: "Giá: 700k ",
		color: "Tím, Hồng & Trắng",
	},
	{
		image: "Final/QuaTang3.jpg",
		code: "QT002",
		name: "LỌ HOA LAVENDER VÀ HOA HỒNG VĨNH CỬU 7 MÀU",
		price: "Giá: 750k",
		color: "7 màu",
	},
	{
		image: "Final/QuaTang4.jpg",
		code: "QT003",
		name: "COMBO 2: BÓ HOA LAVENDER-THIỆP-MÓC KHÓA-TÚI THƠM",
		price: "Giá: 490k ",
		color: "Tím",
	},
	{
		image: "Final/QuaTang5.jpg",
		code: "QT004",
		name: "COMBO 4 – SET QUÀ HOA LAVENDER KHÔ",
		price: "Giá: 500k",
		color: "Tím",
	},
	{
		image: "Final/QuaTang6.jpg",
		code: "QT005",
		name: "MẪU 12 - SET LỌ HOA LAVENDER KHÔ",
		price: "Giá: 540k ",
		color: "Tím & Trắng",
	},
	{
		image: "Final/QuaTang7.jpg",
		code: "QT006",
		name: "MẪU 10 - HỘP QUÀ THỎ LEN HANDMADE",
		price: "Giá: 520k ",
		color: "Tím & Trắng",
	},
	{
		image: "Final/QuaTang8.jpg",
		code: "QT007",
		name: "MẪU 8 - SET LỌ HOA LAVENDER KHÔ",
		price: "Giá: 500k",
		color: "Tím & Trắng",
	},
	{
		image: "Final/QuaTang9.jpg",
		code: "QT008",
		name: "COMBO 4 – SET QUÀ HOA LAVENDER KHÔ",
		price: "Giá: 600k",
		color: "Tím & Vàng",
	},
	{
		image: "Final/QuaTang10.jpg",
		code: "QT009",
		name: "COMBO 5 – SET QUÀ HOA LAVENDER KHÔ + HOA HỒNG VĨNH CỬU",
		price: "Giá: 700k",
		color: "Tím & Trắng",
	},
	{
		image: "Final/QuaTang11.jpg",
		code: "QT0010",
		name: "COMBO 6 – SET QUÀ HOA LAVENDER KHÔ",
		price: "Giá: 550k",
		color: "Tím",
	},
	{
		image: "Final/QuaTang12.jpg",
		code: "QT0011",
		name: "GẤU BÔNG LAVENDER",
		price: "Giá: 320k",
		color: "Tím",
	},
	{
		image: "Final/QuaTang13.jpg",
		code: "QT0012",
		name: "HOA HỒNG 7 MÀU - HOA HỒNG ƯỚP BẤT TỬ",
		price: "Giá: 660k ",
		color: "7 màu",
	},
	{
		image: "Final/QuaTang14.jpg",
		code: "QT0013",
		name: "COMBO 8: HỘP QUÀ + TINH DẦU + LAVENDER KHÔ",
		price: "Giá: 600k",
		color: "Tím & Trắng",
	},
	{
		image: "Final/QuaTang15.jpg",
		code: "QT0014",
		name: "COMBO 2: SET QUÀ LAVENDER KHÔ + GẤU BÔNG",
		price: "Giá: 800k",
		color: "Tím & Trắng",
	},
];
function findProduct(tenanh)
	{
		for(var i = 0; i<arrQT.length; i++)
		{
			if(arrQT[i].image==tenanh)
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
		hinh.src=arrQT[kq].image;
		hinh.setAttribute("alt", arrQT[kq].code);/**********/

		var div = document.getElementById("infor");
		div.innerHTML ="<br>Mã SP: "+arrQT[kq].code;
		div.innerHTML +="<br>Tên: "+arrQT[kq].name;
		div.innerHTML +="<br>"+arrQT[kq].price;
		div.innerHTML +="<br>Màu sắc: "+arrQT[kq].color;
		
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


	for(var i= 0; i<arrQT.length; i++)
	{
		var div_con= document.createElement("div");
		var anh = document.createElement("img");
		anh.src=arrQT[i].image;
		//anh.addEventListener("click", show);
		anh.addEventListener("click", show);
		div_con.classList.add("sub");

		var h2 =document.createElement("h2");
		h2.innerHTML=arrQT[i].name;
		var p = document.createElement("p");
		p.innerHTML=arrQT[i].price;
		
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

