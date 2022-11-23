// primitive data type: string, number, boolean, null, underfined
let myName: string = 'Shazeen';
myName = 'jamile'

//string
let myName2 = '';
myName2 = 'leslie';

//any - does not know what data type to use - exclusive to typescript
let myName3;
myName3 = 'damien';

//union types
let myName4 : string | null = null;
myName4 = 'home';

//arrays
let items: string[] | number[] = ['home', 'food'] || [1,2];

//union types automatically
let items2 = ['home', 2]

//objects
const account: {
    name:string,
    balance:number,
    status?:string
} = {
    name: 'savings',
    balance: 10
};