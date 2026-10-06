// servicos.html 

const cardsContainer = document.querySelector(`.cardsContainer`)
let imagem = [""]
let nomeProduto = ["Check-up Integrativo 360",
    "Protocolo de Alta Performance e Vitalidade",
    "Gestão Preventiva do Estresse e Sono",
    "Estética Avançada e Regenerativa",
    "Programa de Reabilitação e Mobilidade Ativa"
]
let descricao = ["Uma avaliação global da saúde que combina exames preventivos, análise metabólica e estilo de vida. O objetivo é mapear não apenas doenças aparentes, mas fatores de risco e otimização da longevidade com um plano de ação personalizado.",
    "Focado em pacientes que buscam mais disposição, foco mental e melhora no rendimento físico. Inclui modulação nutricional, acompanhamento metabólico e terapias injetáveis de vitaminas e minerais customizadas.",
    "Programa multidisciplinar voltado para o equilíbrio neurológico e emocional. Utiliza mapeamento do sono, técnicas de regulagem do sistema nervoso e rotinas personalizadas para combater a fadiga crônica, a ansiedade e a insônia.",
    "Tratamentos faciais e corporais focados na saúde do tecido e na estimulação natural de colágeno. Combina tecnologia de ponta a procedimentos minimamente invasivos para entregar resultados naturais e duradouros.",
    "Voltado para a prevenção de lesões, alívio de dores crônicas e recuperação funcional do corpo. Integra fisioterapia especializada, biomecânica e exercícios direcionados para devolver a liberdade de movimento no dia a dia."
]
let preco = [900, 800, 700, 600, 500]

cardsContainer.innerHTML = ""
for(let i=0; i<nomeProduto.length; i++){
    
    cardsContainer.innerHTML += `<div class="card">
                <div class="imagem">
                    <img src="../img/foto1.jpeg" alt="">
                </div>
                <div class="texto">
                    <h3>${nomeProduto[i]}</h3>
                    <p>${descricao[i]}</p>
                    <p class="preco" >R$ ${preco[i]},00</p>
                    <button class="botaoAcessar">solicitar</button>
                </div>
            </div>
        </div>`
}

cardsContainer.addEventListener('click', ()=>{
    window.location.href = "solicitar.html"
})