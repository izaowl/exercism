class BankAccount{
  constructor(){
    this.accountBalance=0;
    this.accountOpen=false;
  }

  open(){
    this.balance=0;
    this.accountOpen=true;
  }

  balance(){
    if(this.accountOpen){
      return this.accountBalance
    }
  }
}

module.exports = BankAccount;