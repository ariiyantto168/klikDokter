function balikKata(kata) {
    // you can only write your code here!
    var balik='';
    for(var i=kata.length-1; i>=0;i--){
      balik=balik+kata[i];
    }
    return balik;
  }
  
  
  // TEST CASES
  console.log(balikKata('lorem ipsum dolor sit amet')); // tema tis rolod muspi merol
  console.log(balikKata('amet sit dolor ipsum lorem')); // merol muspi rolod tis tema
  console.log(balikKata('PT. Medika Komunika Teknologi')); // igolonkeT akinumoK akideM .TP
  console.log(balikKata('frontend developer')); // repoleved dnetnorf
  console.log(balikKata('Ari Yanto')); // otnaY irA