console.log("hello wworld");
let add_btn = document.querySelector('#add-btn');
let table = document.querySelector('.table').getElementsByTagName('tbody')[0];
add_btn.addEventListener('click', 
()    =>  {
                const newrow = table.insertRow(-1);
                const stt = newrow.insertCell(0);
                stt.textContent = table.rows.length;
                newrow.insertCell(1);
                newrow.insertCell(2);
                newrow.insertCell(3);
              
                const cell4 = newrow.insertCell(4);
                cell4.innerHTML = '<button onclick = "deletete(Number (stt.textContent))" >x</button>';

            console.log("clicked")
            }   ) ;

            function deletete(a){
                console.log(a);
                table.deleteRow(a);
                console.log("deleteeterer");
            }