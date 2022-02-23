var products = [{"id":101,"name":"Basket Ball","image":"basketball.png","price":150},{"id":102,"name":"Football","image":"football.png","price":120},{"id":103,"name":"Soccer","image":"soccer.png","price":110},{"id":104,"name":"Table Tennis","image":"table-tennis.png","price":130},{"id":105,"name":"Tennis","image":"tennis.png","price":100}];




var cart=[{"id":101,"name":"Basket Ball","quantity":0,"price":150},{"id":102,"name":"Football","quantity":0,"price":120},{"id":103,"name":"Soccer","quantity":0,"price":110},{"id":104,"name":"Table Tennis","quantity":0,"price":130},{"id":105,"name":"Tennis","quantity":0,"price":100}]
$(document).ready(function(){
    products.forEach(function(el){
        var productdiv=$('<div id="'+el.id+'" class="product" ></div>');
        var img=$('<img src="images/'+el.image+'">');
        var head=$('<h3 class="title"><a href="#"> Product '+el.id+'</a></h3>')
        var span=$(' <span>Price: '+el.price+'</span>')
        var a=$('<a class="add-to-cart" href="#">Add To Cart</a>')
        $(a).click(function (){ 
             for(i=0;i<cart.length;i++)
             {
                if(el.id==cart[i].id)
                {
                    cart[i].quantity+=1;
                    console.log(cart)
                }
             }
             display(cart);

        });
        $(productdiv).append(img);
        $(productdiv).append(head);
        $(productdiv).append(span);
        $(productdiv).append(a);
        $('#products').append(productdiv);
   
    })
    $('#Upcart').click(function () { 
        display(cart);
        
    });
    $('#Emcart').click(function () { 

        cart.forEach(function f(el,index,arr){
            el.quantity=0;
            console.log(cart);
        });
        display(cart);
        
    });

 
  });

function display(array)
{   
    
    $('#cart').empty();
    //header of table
    var table=$('<table></table>')
    var ID = $("<td></td>").text('ID'); 
    var Name = $("<td></td>").text('Name'); 
    var quantity = $("<td></td>").text('quantity'); 
    var quantityPlus = $("<td></td>").text('quantityPlus'); 
    var quantityMinus = $("<td></td>").text('quantityMinus');
  
    var head =$("<tr></tr>").append(ID,Name,quantity,quantityPlus,quantityMinus);
    $(head).addClass('head');
    $(table).append(head);
    
   
    //content of table
 array.forEach(function(el,index,array){
    if (array[index].quantity !=0)
    {
        var id = $("<td></td>").text(array[index].id);
        var name = $("<td></td>").text(array[index].name); 
        var quantity = $("<td></td>").text(array[index].quantity); 
        var plus = $("<td></td>").append('<button class="innerbutton">+1 Quantity</button>');
        
        
        $(plus).click(function () { 
             array[index].quantity=array[index].quantity +1;
            $(quantity).text(array[index].quantity);
            tprice=array[index].price*array[index].quantity; 
           

            
        });
        var minus = $("<td></td>").append('<button class="innerbutton">-1 Quantity</button>');
        $(minus).click(function () { 
            if (array[index].quantity==0)
            {
                return 
            }
            array[index].quantity=array[index].quantity -1;
            $(quantity).text(array[index].quantity); 
            tprice=array[index].price*array[index].quantity;  
            

             
            
        });
        
        var txt =$("<tr></tr>").append(id,name,quantity,plus,minus);
        $(table).append(txt);
    }
    

 
   
 })
 $('#cart').append(table);
}


