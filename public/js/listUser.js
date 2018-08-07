const req = new XMLHttpRequest();
      req.onreadystatechange= function(event){
        if(this.status === 200){
          console.log(this.responseText);
          document.getElementById("title").textContent = this.responseText;
        }
      }
      req.open("GET", "https://httpbin.org/ip", true);
      req.send();