import { readFile } from 'fs';

/**
 * Função responsável por retornar um valor baseado em uma chave.
 *
 * @param {Record<string, any>} object
 * @param {string} key
 */
function extractKey(object, key) {
  return object[key];
}

/**
 * @typedef Person
 * @property {string} name
 * @property {string} surname
 * @property {string} [gender]
 */

// type Person = {
//     name: string | null
//     surname: string
//     age: number
//     sayHello: (message: string) => string
// }

/**
 * @typedef Person
 * @property {string | null} name
 * @property {string} surname
 * @property {number} age
 * @property {(message: string) => string} sayHello
 */

/**
 * @typedef Employee
 * @property {number} salary
 * @property {string} date
 * @property {string} company
 */

/**
 * @typedef PersonEmployed
 * @type {Omit<Person, "age" | "sayHello"> & Pick<Employee, "salary"> & {
 *   height: number
 * }}
 */

/** @type {Employee} */
const employee = {
  company: 'Codante',
  date: '18/11/2023',
  salary: 123,
};

/**
 * @typedef CreatePersonCallbackParam
 * @type {{ nome: string, sobrenome: string, idade: number }}
 */

/**
 * @callback CreatePersonCallback
 * @param value {CreatePersonCallbackParam}
 * @returns {Person}
 */

/** @type {CreatePersonCallback} */
const createPerson = (value) => ({
  name: value.nome,
  surname: value.sobrenome,
  age: value.idade,
  sayHello: () => `Olá ${value.nome}`,
});

// interface Employee {
//     salary: number
//     date: string
//     company: string
// }

// 1. Crie os tipos Person e Employee utilizando o JSDoc.
// 2. Utilizando JSDoc: Crie um novo tipo, baseado em Person e
// Employee, com o nome, sobrenome, salário, e um novo
// campo com a altura da pessoa.

const sum = (a, b) => a + b;

/**
 * Função curry para executar uma soma.
 * @param {number} a
 * @returns {(b: number) => number}
 */
const currySum = (a) => (b) => a + b;

const add = currySum(1);

console.log(add(2));
