// servicos.html 

const cardsContainer = document.querySelector(`.cardsContainer`)
let imagem = ["DraAnaSouza.jpeg","DraMarianaCosta.jpeg", "DrLucasMendes.jpeg"]
let nome = ["Dra. Ana Souza",
    "Dra. Mariana Costa",
    "Dr. Lucas Mendes"
]
let descricao = ["Responsável pelos atendimentos clínicos gerais e acompanhamento de cães e gatos. Dedica-se a criar um ambiente de consulta acolhedor e sem estresse, focando na prevenção e no bem-estar continuado dos pets.",
    "Especialista na realização de procedimentos cirúrgicos preventivos e de emergência. Garante a máxima segurança cirúrgica e o monitoramento anestésico dedicado para o conforto dos pacientes.",
    "Pequena Descrição Profissional: Focado no atendimento do Pronto-Socorro 24h e suporte intensivo a casos críticos. Com rápida tomada de decisão, cuida da estabilização e recuperação de pets em situações de emergência."
]
let especialidade = ["Médica Veterinária — Cirurgia Geral e Anestesiologia", "Médica Veterinária (CRMV-SP 45.678) — Clínica Geral e Medicina Integrativa","Função / Especialidade: Médico Veterinário — Intensivista e Atendimento de Urgência"]

cardsContainer.innerHTML = ""
for(let i=0; i<nome.length; i++){
    
    cardsContainer.innerHTML += `<div class="card">
                <div class="imagem">
                    <img src="../img/${imagem[i]}" alt="">
                </div>
                <div class="texto">
                    <h3>${nome[i]}</h3>
                    <p>${especialidade[i]}</p>
                    <p>${descricao[i]}</p>
                </div>
            </div>
        </div>`
}
