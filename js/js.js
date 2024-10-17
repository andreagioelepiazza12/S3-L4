        
        const tabellone = document.getElementById("tabellone");
        const btn = document.getElementById("btnEst");
        const numeroEstratto = document.getElementById("numScr");
        let numeriEstratti = [];


        for (let i = 1; i <= 76; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.textContent = i;
            cell.id = "cell-" + i;
            tabellone.appendChild(cell);
        }

        const tabellina = document.getElementById("tabellina");
    
        const input = document.getElementById("tabInput");
        const tabBtn = document.getElementById("invio");


        tabBtn.addEventListener("click", () => {

        for(let y = 0; y<parseInt(input.value); y++){

            for (let i = 1; i <= 24; i++) {
                let numeriTabellina = [];
                let num ;
              
                do {
                    num = Math.floor(Math.random() * 76) + 1;
                } while (numeriTabellina.includes(num));
                numeriTabellina.push(num);

                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.textContent =  num;
                cell.id = "cell-" + i;
                tabellina.appendChild(cell);
        }

        }

        });

        btn.addEventListener("click", () => {
            let numero;
            do {
                numero = Math.floor(Math.random() * 76) + 1;
            } while (numeriEstratti.includes(numero));

            numeriEstratti.push(numero);
            numeroEstratto.textContent = "Numero estratto: " + numero;

            
            const cell = document.getElementById("cell-" + numero);
            cell.classList.add("estr");
        });


        


        
        
            
        

            
            

         

    
