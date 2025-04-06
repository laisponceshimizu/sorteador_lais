document.addEventListener('DOMContentLoaded', function() {
    const nomesPredefinidos = [
        "Ana", "Bruno", "Carla", "Daniel", "Eduardo", "Fernanda", 
        "Gabriel", "Helena", "Igor", "Julia", "Karina", "Lucas", 
        "Mariana", "Nelson", "Olivia", "Paulo", "Quiteria", "Rafael", 
        "Sabrina", "Thiago", "Ursula", "Victor", "Wendy", "Xavier", 
        "Yasmin", "Zeca"
    ];
    
    function preencherNomesPredefinidos() {
        document.getElementById('nomes').value = nomesPredefinidos.join('\n');
    }
    
    document.getElementById('usar-predefinidos').addEventListener('click', function(e) {
        e.preventDefault();
        preencherNomesPredefinidos();
    });
    
    document.getElementById('sortear-predefinidos').addEventListener('click', function(e) {
        e.preventDefault();
        sortearDaLista(nomesPredefinidos);
    });
    
    function sortearDaLista(lista) {
        if (lista.length === 0) {
            alert('Não há nomes disponíveis para sortear.');
            return;
        }
        
        let indiceAleatorio = Math.floor(Math.random() * lista.length);
        let nomeSorteado = lista[indiceAleatorio];
        document.getElementById('resultado-valor').innerText = nomeSorteado;
    }
    
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();
        
        let listaNomes = document.getElementById('nomes').value;
        let nomes = listaNomes.split('\n').filter(function(nome) {
            return nome.trim() !== '';
        });
        
        if (nomes.length === 0) {
            alert('Por favor, insira pelo menos um nome para sortear.');
            return;
        }
        
        sortearDaLista(nomes);
    });
});