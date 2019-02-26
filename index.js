// Code your solution in this file!

const drivers = [
    { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
    { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
    { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
    { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
    { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
  ];

const totalRevenue = function(drivers){
  let totalPrice = 0;

  drivers.forEach(function(driver){
    totalPrice += driver.revenue;
  })
    return totalPrice
}




const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};

  averageRevenue(drivers)
