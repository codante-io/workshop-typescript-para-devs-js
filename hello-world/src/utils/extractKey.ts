/**
 * @example ```javascript
 * const person = { name: "Jonas" }
 * extractKey(person, "name") // "Jonas"
 * ```
 */
function extractKey<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}

const person = {
  nome: 'string',
  sobrenome: 'string',
  age: 10,
  single: false,
};

const teste = extractKey(person, 'single');
