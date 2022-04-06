module.exports = () =>{
  //Adicionar itens
  const itens = [
    {name: "Peluche Sleepy Bot",   pct: 10},
    {name: "STK albúm", pct: 10},
    {name: "Autográfo do Psk",  pct: 10},
    {name: "Mugiwara wanted poster",  pct: 10},
  ];
  
  const expanded = itens.flatMap(itens => Array(itens.pct).fill(itens));
  const itenresult = expanded[Math.floor(Math.random() * expanded.length)];
  console.log(itenresult.name)
  
  return itenresult.name; 
}