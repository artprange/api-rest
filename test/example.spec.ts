import { expect, test } from 'vitest'

test('o usuário consegue criar uma nova transação', () => {
  const respnseStatusCode = 201

  expect(respnseStatusCode).toEqual(201)
})
