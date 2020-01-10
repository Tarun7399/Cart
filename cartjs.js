var cart=[];
var total=0;
var list=document.getElementById("list");
var d=JSON.parse(localStorage.getItem("cart"));
var products=JSON.parse(localStorage.getItem("shopper"));
for(var i=0;i<d.length;i++)
{
	var k=new Object();
	
	k.id=d[i].id;
	pid=d[i].id;
	k.name=d[i].name;
	k.desc=d[i].desc;
	k.price=d[i].price;
	k.quant=d[i].quant;
	var qua=d[i].quant;
	total=total+(parseInt(k.price)*parseInt(qua));
	cart.push(k);                           
	ndom(k);
	
}
console.log(total);

var bill=document.createElement("button");
bill.setAttribute("class","sbtn");
bill.innerHTML="TOTAL    ";
list.appendChild(bill);

var bill1=document.createElement("button");
bill1.setAttribute("class","sbtn");
bill1.setAttribute("id","bt");
bill1.innerHTML=total;
list.appendChild(bill1);

function ndom(k)
{
	var pr=document.createElement("div");
	pr.setAttribute("id",k.id);
	pr.setAttribute("class","item");
	// adding name
	var n=document.createElement("h4");
	var d=k.name;
	var c=document.createTextNode("ITEM NAME -> "+d);
	n.appendChild(c);
	var br1=document.createElement("br");
	n.appendChild(br1);
	
	var n1=document.createElement("h4");
	var f=k.desc;
	var c1=document.createTextNode("         Description-> "+f);
	n.appendChild(c1);
	var br2=document.createElement("br");
	n.appendChild(br2);
	//pr.appendChild(n1);
	
	var n12=document.createElement("h4");
	var t=k.price;
	var c12=document.createTextNode("             Price-> "+t);
	n.appendChild(c12);
	var br3=document.createElement("br");
	n.appendChild(br3);
	
	var n13=document.createElement("h4");
	var y=k.quant;
	var c13=document.createTextNode("             Quantity-> "+y);
	n.appendChild(c13);
	var br4=document.createElement("br");
	n.appendChild(br4);
	var delet = document.createElement("button");
	delet.setAttribute("id","delet");
	delet.setAttribute("class","vsbtn");
	delet.innerHTML = "Remove";
	
	var sp=document.createTextNode("\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0");
	
	
	
	
	n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);
	n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);
	n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);

	
	
	n.appendChild(delet);
	delet.addEventListener("click", function(event)
											{
											var tp= event.target.parentNode.parentNode;
											rmar(parseInt(tp.id));
											tp.parentNode.removeChild(tp);
											}
								 );	
	var plus = document.createElement("button");
	plus.setAttribute("id","add");
	plus.setAttribute("class","vsbtn");
	plus.innerHTML = "+";
	n.appendChild(plus);

    plus.addEventListener("click", function(event)
											{
											var tp= event.target.parentNode.parentNode;
										  console.log(tp);
											var a=inc(parseInt(tp.id));
											if(a==99)
												return;
											var parent=tp.childNodes[0];
											var child=tp.childNodes[0].childNodes[6];
											//console.log(a);
											var te=document.createTextNode("Quantity-> "+a);
											//console.log(te);
											parent.replaceChild(te,child);
											}
								 );	
	
	var minus = document.createElement("button");
	minus.setAttribute("id","minus");
	minus.setAttribute("class","vsbtn");
	minus.innerHTML = "-";
	n.appendChild(minus);

    minus.addEventListener("click", function(event)
											{
											var tp= event.target.parentNode.parentNode;
										  console.log(tp);
											var a=dec(parseInt(tp.id));
											var parent=tp.childNodes[0];
											var child=tp.childNodes[0].childNodes[6];
											console.log(a);
											var te=document.createTextNode("Quantity->"+a);
											parent.replaceChild(te,child);
										   
											}
								 );	
	
	
	pr.appendChild(n);	
	
	list.appendChild(pr);
	
}
function geti(k)
{
   var i=0;
	for(i=0;i<cart.length;i++)
	{
		if(cart[i].id==k)
			break;
	}
	return i;
}
function getp(k)
{
   var i=0;
	for(i=0;i<products.length;i++)
	{
		if(products[i].id==k)
			break;
	}
	return i;
}
function rmar(k)
{
	var i=geti(k);
	cart.splice(i,1);
	var jso=JSON.stringify(cart);
     localStorage.setItem("cart",jso);
}
function inc(k)
{
	var j=getp(k);
	if(products[j].quant==0)
   {
   	alert("You can not add more products. Out of stock.")
   	return 99;
   }
   var i=geti(k);
   var car=cart[i].quant;
   car=car+1;
   total=total+parseInt(cart[i].price);
   cart[i].quant=car;
   var jso=JSON.stringify(cart);
     localStorage.setItem("cart",jso);
   	products[j].quant=products[j].quant-1;
   var jso1=JSON.stringify(products);
     localStorage.setItem("shopper",jso1);
	 upto();
	 return car;
}
function upto()
{
	
	document.getElementById("bt").innerHTML=total;
}
function dec(k)
{
var i=geti(k);
   var car=cart[i].quant;
   if(car>0)
   	car=car-1;
   else
   {
   	alert("cart is empty");
   }
   cart[i].quant=car;
   if(total>0)
   	total=total-parseInt(cart[i].price);
   var jso=JSON.stringify(cart);
     localStorage.setItem("cart",jso);
   var j=getp(k);
   products[j].quant=products[j].quant+1;
   var jso1=JSON.stringify(products);
     localStorage.setItem("shopper",jso1);
	 upto();
	 return car;	
}
