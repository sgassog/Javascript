function Switch () {
  for(var i=0;i<=lim;i++){
    if(i==count){
      document.getElementById(i).style.display = "block";
    }else{
      document.getElementById(i).style.display = "none";
    }
  }

  if(count==lim){
    count=0;
  }else{
    count++;
  }

}
