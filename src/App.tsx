import React, {useRef, useCallback, FormEvent} from 'react';
import Input from './components/Input'

const App = () => {
  const nameInputRef = useRef<HTMLInputElement>(null)
  const acceptTermsRef = useRef({ value: false })

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault()

    console.log(nameInputRef.current?.value)
    console.log(acceptTermsRef.current.value)
  }, [])

  const handleAcceptTerms = useCallback(() => {
    acceptTermsRef.current.value = !acceptTermsRef.current.value
  }, [])

  return <div className="App">
    <form action="" onSubmit={handleSubmit}>
      <Input
        name="name"
        label="Nome completo"
        placeholder="Digite seu nome"
        ref={nameInputRef}
      />

      <button type="button" onClick={handleAcceptTerms}>
        Aceitar termos
      </button>
      <button type="submit">
        Enviar
      </button>
    </form>
  </div>;
}

export default App;
