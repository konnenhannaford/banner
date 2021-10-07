
// var addHere = document.getElementsByClassName("stockbanner");
var addHere = document.getElementById("stockbannerinfo");
var stockbanner = document.createElement('nav');
stockbanner.classList.add('stockbanner');
var stockbannerinfo = document.createElement('div');
stockbannerinfo.classList.add('stockbannerinfo');
var cryptoprices = document.createElement('div');
cryptoprices.classList.add('cryptoprices');

fetch('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api_key=392a6d28d1f929c7a2e3db3d676655f975b2750caac92c06341c1239ade1fbc3')
.then(response => response.json())
.then((loco)=>{
        
        for( var i=0; i < 10; i++){
                var Cryptoname = document.createElement('p');
                Cryptoname.classList.add('Cryptoname');

                var Price = document.createElement('p');
                Price.classList.add('Price');

                var ChangePct = document.createElement('p');
                ChangePct.classList.add('ChangePct');

                addHere.appendChild(stockbanner)
                Cryptoname.textContent = "Currency: " + loco.Data[i].CoinInfo.FullName
                // console.log(loco.Data[i].CoinInfo.FullName);
                Price.textContent = "Price: " + loco.Data[i].DISPLAY.USD.PRICE
                // console.log(loco.Data[i].DISPLAY.USD.PRICE);
                ChangePct.textContent = "Change in Past 24: " + loco.Data[i].DISPLAY.USD.CHANGEPCT24HOUR
                // console.log(loco.Data[i].DISPLAY.USD.CHANGEPCT24HOUR);
                stockbanner.appendChild(stockbannerinfo)
                stockbannerinfo.appendChild(cryptoprices)
                stockbanner.appendChild(Cryptoname)
                stockbanner.appendChild(Price)
                stockbanner.appendChild(ChangePct)

            }
            return
        })

    

  
