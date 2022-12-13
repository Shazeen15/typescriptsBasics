"use strict";
// primitive data type: string, number, boolean, null, underfined
let myName = 'Shazeen';
myName = 'jamile';
//string
let myName2 = '';
myName2 = 'leslie';
//any - does not know what data type to use - exclusive to typescript
let myName3;
myName3 = 'damien';
//union types
let myName4 = null;
myName4 = 'home';
//arrays
let items = ['home', 'food'] || [1, 2];
//union types automatically
let items2 = ['home', 2];
//objects
const account = {
    name: 'savings',
    balance: 10
};
//array of objects
let accounts;
;
const account1 = {
    name: 'savings',
    balance: 10
};
let accounts1;
class InvestmentAccounts {
    // name: string;
    // balance: number;
    // status?: string | undefined;
    // deposit?: (() => void) | undefined;
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    withdraw() { }
}
// generics
