
        function logar() {
            var entradaNome = document.querySelector("input[name='login']")
            var entradaNome = document.querySelector("input[name='Senha']")

            var textoNome = entradaNome.value
            var textoSenha = entradaSenha.value

            if (textoNome == "Batata_Frita" && textoSenha == "123") {
                alert("Senha correta!")
                localStorage.setItem("username", textoNome)
            }
            else {
                alert("Senha incorreta, tente novamente")
            }
        }