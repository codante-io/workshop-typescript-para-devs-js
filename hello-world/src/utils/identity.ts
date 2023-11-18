function identity<T>(value: T): T {
  return value;
}

const nome = identity('Lucas');
const age = identity(23);

function identityBoolean<T extends boolean | string = string>(value: T): T {
  return value;
}

identityBoolean(true);
