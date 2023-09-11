let firstName: string = 'Danny';

let age: number | string;
age = 26;
age = '26';

let userName: any = 'Andrew';

userName = 23;
userName = false;

let direction: 'UP' | 'DOWN';
direction = 'UP';
direction = 'DOWN';

let person: {
    fullName: string, 
    age: number,
    isProgramer: boolean
};

person = {
    fullName: 'Bill Parker',
    age: 30,
    isProgramer: true
}

let ids: number[] = [];
ids.push(1);

let option: (string | number)[];
option = [10, 'left'];

let persons = ['Delia', 'Alex'];
persons[0] = 43;

function circle(diam: number): string {
    return 'Circle = ' + Math.PI * diam;
}

let sayHi: (name: string) => void;

sayHi = (name: string) => console.log('Hi ' + name);