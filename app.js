// button1
const Button=document.getElementById('button').addEventListener('click', function(){
    document.getElementById('button').style.backgroundColor ='#606060';
    document.getElementById('button').style.color ='white';
    document.getElementById('order').style.backgroundColor ='#E0E0E0';
    document.getElementById('promotion').style.backgroundColor ='#E0E0E0';
    document.getElementById('delivery').style.backgroundColor ='#E0E0E0';

    // card one
    document.getElementById('cardbox1').style.backgroundColor ='cyan';
    document.getElementById('cardbox2').style.backgroundColor ='#E0E0E0';
    document.getElementById('cardbox3').style.backgroundColor ='#E0E0E0';
    document.getElementById('cardbox4').style.backgroundColor ='#E0E0E0';
    
    
  })
  // button2
  const order=document.getElementById('order').addEventListener('click', function(){
    document.getElementById('order').style.backgroundColor ='#606060';
    document.getElementById('order').style.color ='white';
    document.getElementById('button').style.backgroundColor ='#E0E0E0';
    document.getElementById('promotion').style.backgroundColor ='#E0E0E0';
    document.getElementById('delivery').style.backgroundColor ='#E0E0E0';

    // card one
    document.getElementById('cardbox2').style.backgroundColor ='cyan';
    document.getElementById('cardbox1').style.backgroundColor ='#E0E0E0';
    document.getElementById('cardbox3').style.backgroundColor ='#E0E0E0';
    document.getElementById('cardbox4').style.backgroundColor ='#E0E0E0';
})

  // button3
  const promotion=document.getElementById('promotion').addEventListener('click', function(){
    document.getElementById('promotion').style.backgroundColor ='#606060';
    document.getElementById('promotion').style.color ='white';
    document.getElementById('order').style.backgroundColor ='#E0E0E0';
    document.getElementById('button').style.backgroundColor ='#E0E0E0';
    document.getElementById('delivery').style.backgroundColor ='#E0E0E0';

    // card one
    document.getElementById('cardbox3').style.backgroundColor ='cyan';
    document.getElementById('cardbox2').style.backgroundColor ='#E0E0E0';
    document.getElementById('cardbox1').style.backgroundColor ='#E0E0E0';
    document.getElementById('cardbox4').style.backgroundColor ='#E0E0E0';
})

  // button4
  const delivery=document.getElementById('delivery').addEventListener('click', function(){
    document.getElementById('delivery').style.backgroundColor ='#606060';
    document.getElementById('delivery').style.color ='white';
    document.getElementById('order').style.backgroundColor ='#E0E0E0';
    document.getElementById('promotion').style.backgroundColor ='#E0E0E0';
    document.getElementById('button').style.backgroundColor ='#E0E0E0';

    // card one
    document.getElementById('cardbox4').style.backgroundColor ='cyan';
    document.getElementById('cardbox2').style.backgroundColor ='#E0E0E0';
    document.getElementById('cardbox3').style.backgroundColor ='#E0E0E0';
    document.getElementById('cardbox1').style.backgroundColor ='#E0E0E0';
})