
function Item() {
    return (
            <div> 
              <style dangerouslySetInnerHTML={{__html: " \ntable, td { \n  border: 1px solid white; \n} \n" }} />  
              <table id="myTable">  
                <tbody><tr>  
                    <td>List of events</td>  
                  </tr>  
                  <tr>  
                    <td>Birthday Party</td>  
                    <td><input type="button" defaultValue="Delete" onclick="deleteRow(this)" /></td>  
                  </tr>  
                  <tr>  
                    <td>Engagement</td>  
                    <td><input type="button" defaultValue="Delete" onclick="deleteRow(this)" /></td>  
                  </tr>  
                  <tr>  
                    <td>Mehendi</td>  
                    <td><input type="button" defaultValue="Delete" onclick="deleteRow(this)" /></td>  
                  </tr>  
                  <tr>  
                    <td>Sangeet</td>  
                    <td><input type="button" defaultValue="Delete" onclick="deleteRow(this)" /></td>  
                  </tr>  
                  <tr>  
                    <td>Haldi</td>  
                    <td><input type="button" defaultValue="Delete" onclick="deleteRow(this)" /></td>  
                  </tr>  
                  <tr>  
                    <td>Marriage</td>  
                    <td><input type="button" defaultValue="Delete" onclick="deleteRow(this)" /></td>  
                  </tr>  
                </tbody></table>  
            </div> 
          ); 
        } 
  export default Item;