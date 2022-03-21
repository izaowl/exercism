class BankAccount{
  constructor(){
    this.accountBalance=0;
    this.accountOpen=false;
  }

  open(){
    this.balance=0;
    this.accountOpen=true;
  }
  deposit(deposit){
    this.balance += deposit;
  }
  withdraw(money){
    this.balance -=money;
  }
  balance(){
    if(this.accountOpen){
      return this.accountBalance
    }
  }
}

module.exports = BankAccount;