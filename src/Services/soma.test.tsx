import { expect, test } from 'vitest'
import { soma } from "./soma"

test('deve somar 1 ao número informado', () => {
    
    const value = soma(1)
    expect(value).toBe(2)


})