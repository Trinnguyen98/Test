var arr=
[
	{
		image: "Final/BoHoa0.jpg",
		Code: "BH001",
		Name: "MẪU BÓ B04 - BÓ HOA LAVENDER KHÔ",
		Price: "Giá: 500k",
		Color: "Tím & Vàng",

	},
	{
		image: "Final/BoHoa1.jpg",
		Code: "BH002",
		Name: "BÓ HOA LAVENDER KHÔ MIX 9 HOA HỒNG VĨNH CỬU TRẮNG",
		Price: "Giá: 650k",
		Color: "Trắng",
	},
	{
		image: "Final/BoHoa2.jpg",
		Code: "BH003",
		Name: "BÓ HOA LAVENDER MIX 9 HOA HỒNG VĨNH CỬU HỒNG",
		Price: "Giá: 2300k",
		Color: "Trắng & Hồng",
	},
	{
		image: "Final/BoHoa3.jpg",
		Code: "BH004",
		Name: "BÓ HOA LAVENDER MIX 9 HOA HỒNG VĨNH CỬU TÍM",
		Price: "Giá: 1100k",
		Color: "Tím & Trắng",
	},
	{
		image: "Final/BoHoa4.jpg",
		Code: "BH005",
		Name: "BÓ HOA LAVENDER KHÔ MIX 9 HOA HỒNG VĨNH CỬU XANH",
		Price: "Giá: 1050k",
		Color: "Xanh & Trắng",
	},
	{
		image: "Final/BoHoa5.jpg",
		Code: "BH006",
		Name: "BÓ HOA LAVENDER MIX 9 HOA HỒNG VĨNH CỬU",
		Price: "Giá: 1100k",
		Color: "Đỏ & Trắng",
	},
	{
		image: "Final/BoHoa6.jpg",
		Code: "BH007",
		Name: "MẪU BÓ B01 - BÓ HOA LAVENDER KHÔ",
		Price: "Giá: 550k",
		Color: "Tím",
	},
	{
		image: "Final/BoHoa7.jpg",
		Code: "BH008",
		Name: "MẪU BÓ B02 - BÓ HOA LAVENDER KHÔ",
		Price: "Giá: 550k",
		Color: "Tím & Trắng",
	},
	{
		image: "Final/BoHoa8.jpg",
		Code: "BH009",
		Name: "BÓ HOA LAVENDER KHÔ PHÁP",
		Price: "Giá: 400k",
		Color: "Tím & Trắng",
	},
	{
		image: "Final/BoHoa15.jpg",
		Code: "BH0010",
		Name: "BÓ HOA LAVENDER MIX SNOWY",
		Price: "Giá: 1100k",
		Color: "Tím",
	},
	{
		image: "Final/BoHoa10.jpg",
		Code: "BH0011",
		Name: "BÓ HOA LAVENDER KHÔ BIGSIZE",
		Price: "Giá: 1050k",
		Color: "Tím & Trắng",
	},
	{
		image: "Final/BoHoa11.jpg",
		Code: "BH0012",
		Name: "HOA PHALARIS KHÔ",
		Price: "Giá: 400k",
		Color: "Xanh, Vàng, Hồng & Đỏ",
	},
	{
		image: "Final/BoHoa12.jpg",
		Code: "BH0013",
		Name: "BÓ HOA LAVENDER MIX BIGSIZE",
		Price: "Giá: 500k",
		Color: "Tím & Trắng",
	},
	{
		image: "Final/BoHoa13.jpg",
		Code: "BH0014",
		Name: "BÓ HOA LAVENDER KHÔ PHÁP MIX",
		Price: "Giá: 650k",
		Color: "Tím & Trắng",
	},
	{
		image: "Final/BoHoa14.jpg",
		Code: "BH0015",
		Name: "MẪU BÓ B03 - BÓ HOA LAVENDER KHÔ",
		Price: "Giá: 550k",
		Color: "Tím & Trắng",
	},
];

function findProduct(tenanh)
	{
		for(var i = 0; i<arr.length; i++)
		{
			if(arr[i].image==tenanh)
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
		hinh.src=arr[kq].image;
		hinh.setAttribute("alt", arr[kq].Code);/**********/

		var div = document.getElementById("infor");
		div.innerHTML ="<br>Mã SP: "+arr[kq].Code;
		div.innerHTML +="<br>Tên: "+arr[kq].Name;
		div.innerHTML +="<br>"+arr[kq].Price;
		div.innerHTML +="<br>Màu sắc: "+arr[kq].Color;
		
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


	for(var i= 0; i<arr.length; i++)
	{
		var div_con= document.createElement("div");
		var anh = document.createElement("img");
		anh.src=arr[i].image;
		//anh.addEventListener("click", show);
		anh.addEventListener("click", show);
		div_con.classList.add("sub");

		var h2 =document.createElement("h2");
		h2.innerHTML=arr[i].Name;
		var p = document.createElement("p");
		p.innerHTML=arr[i].Price;
		
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