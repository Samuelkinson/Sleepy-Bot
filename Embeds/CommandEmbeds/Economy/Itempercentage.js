const itens = require('../../../Resources/EconomyItems') 

module.exports = (Client) =>{

  const expanded = itens.flatMap(itens => Array(itens.pct).fill(itens));
  const itenresult = expanded[Math.floor(Math.random() * expanded.length)];
  function getItens(){
    return{
      itename: itenresult.item.toLowerCase(),
      itenemoji: Client.emojis.cache.get(itenresult.emoji)
    }
  }
  
  return getItens();

}