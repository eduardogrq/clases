const getMentors = () => {

    let xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let response = JSON.parse(xhttp.responseText);

        }
      };
      xhttp.open("GET", "ajax_info.txt", true);
      xhttp.send();
}