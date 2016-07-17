function SalesTeam(teamMembers) {
  this.employees = teamMembers;
}

SalesTeam.prototype.find = function(memberName) {
  var found;
  this.employees.forEach(function(member) {
    if (member.firstName === memberName) {
      found = member;
    }
  })
  return found;
}

SalesTeam.prototype.topPerformer = function(memberName) {
  var found = this.employees[0]
  this.employees.forEach(function(member) {
    if (member.totalSales() > found.totalSales()) {
      found = member;
    }
  })
  return found;
}
