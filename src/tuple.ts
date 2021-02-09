type Address = {
  street: string;
  number: number;
}

const tupla: [number, string, Address] = [
  123,
  'guilherme',
  {
    street: 'brigadeiro luis antonio',
    number: 1884
  }
];

// tupla[0] = ''
// tupla[1] = 123
// tupla[2] = {
//   street: '',
//   number: 1
// }

// tupla[3] = 123