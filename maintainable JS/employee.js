function Employee(info) {
  this.firstName = info.firstName;
  this.sales = info.sales;
}

Employee.prototype.totalSales = function() {
  return this.sales.reduce(function(a, b) {
    return a+b;
  })
}

Employee.prototype.averageSales = function() {
  return this.totalSales()/this.sales.length
}
