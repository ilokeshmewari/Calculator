    function evalu(){
      const result = eval(forma.screen.value);
      if(result== undefined){
        document.getElementById('calc').value = '';
      }
      else {
        document.getElementById('calc').value = result;
      }
    }
