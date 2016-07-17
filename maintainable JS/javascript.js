var Employee = function({firstName: firstName, sales: numArray}){
  this.firstName = firstName;
  this.sales = numArray;
  this.totalSales = function(totalSales){
    var totalSales = 0
    for (i=0;i<this.sales.length;i++) {
      totalSales += this.sales[i]
    }
    return totalSales
  }
  this.averageSales = function(){
    return this.totalSales()/this.sales.length
  }
}

var SalesTeam = function(employees){
  this.employees = employees;
  this.find = function(employee){
    var foundEmployee = "not found";
    for (i=0;i<this.employees.length;i++) {
      if (this.employees[i].firstName == employee){
        var foundEmployee = this.employees[i];
      }
    }
    return foundEmployee
  }
  this.topPerformer = function(){
    var topEmployee = "get better employees";
    var biggestAverage = 0;
    for (var i=0;i<this.employees.length-1;i++) {
      if (this.employees[i].averageSales() > biggestAverage){
        var biggestAverage = this.employees[i].averageSales()
        var topEmployee = this.employees[i];
      }
    }
    return topEmployee;
  }
}
