webiopi().ready(function() { 
webiopi().setFunction(23,"out");
				

				var content1, button; 
 				content1= $("#content1"); 
  
 				button_1 = webiopi().createGPIOButton(23,"Room1");
				content1.append(button_1);

 				webiopi().setFunction(24,"out");
 				var content2, button; 
 				content2= $("#content2"); 
  
 				button_2 = webiopi().createGPIOButton(24,"Room2");
				content2.append(button_2);

 				webiopi().setFunction(25,"out");
 				var content3, button; 
 				content3= $("#content3"); 
  
 				button_3 = webiopi().createGPIOButton(25,"Room3");
				content3.append(button_3);

 				webiopi().setFunction(26,"out");
 				var content4, button; 
 				content4= $("#content4"); 
  
 				button_4 = webiopi().createGPIOButton(26,"Room4");
				content4.append(button_4);

   
 				

			
}); 

