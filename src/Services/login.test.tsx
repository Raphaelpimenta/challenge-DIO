import { describe, it, expect, vi } from "vitest";
import { Login } from "./login";


describe('Loginn', () => {
    
    const mockAlert = vi.fn()
    global.alert = mockAlert

    it('Deve exibir um alert', () => {
        Login()
        expect(mockAlert).toHaveBeenCalledWith('Teste teste')
    })
})