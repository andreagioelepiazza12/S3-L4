        
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
        
        
            
        

            
            

         

    
