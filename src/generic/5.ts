/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

type MixedType = {
  [key: string]: any;
};

interface KeyValuePair<K extends keyof MixedType, U> {
  key: K;
  value: U;
}

export {};
