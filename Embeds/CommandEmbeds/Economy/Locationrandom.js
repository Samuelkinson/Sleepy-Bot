module.exports = () =>{
  const sleeplocations = [
    "na cama",
    "no sofá",
    "no carro",
    "no chão",
    "na mesa da cozinha",
    "na rua",
    "num banco de um parque",
    "na prisão",
    "numa cadeira gamer",
  ];
  const locations = Math.floor(Math.random() * sleeplocations.length);
  return sleeplocations[locations];

}