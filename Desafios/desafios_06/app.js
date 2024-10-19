const express = require('express')

app = express()

const posts = [
    {
        id: 1,
        titulo: 'Aliens invade zona norte de granda SP!',
        conteudo: `Na manhã de um dia comum na Zona Norte de São Paulo, o inesperado aconteceu: uma nave espacial aterrissou em um parque local, provocando alvoroço entre os moradores. A notícia se espalhou rapidamente pelas redes sociais, e em questão de minutos, uma multidão se aglomerou para testemunhar o fenômeno.
        Os alienígenas, criaturas de aparência curiosa e tecnologia impressionante, saíram da nave com uma atitude pacífica. Vestindo trajes prateados e com olhos grandes e expressivos, eles se dirigiram ao público com gestos amistosos. Surpreendentemente, começaram a se comunicar por meio de hologramas, que exibiam imagens de suas culturas e planetas.
        <br><br>
        A princípio, as reações variaram entre o espanto e a incredulidade. Algumas pessoas correram para se esconder, enquanto outras, armadas com celulares, tentavam capturar cada momento para postar em suas redes. Mas, aos poucos, a curiosidade tomou conta e muitos se aproximaram, intrigados pelas intenções dos visitantes intergalácticos.
        O que inicialmente parecia uma invasão logo se revelou como uma missão de amizade. Os alienígenas estavam em busca de novas formas de vida e cultura, desejando trocar conhecimentos sobre sustentabilidade e tecnologias limpas. Em meio a palestras improvisadas e demonstrações de suas inovações, os moradores começaram a se engajar, fazendo perguntas e trocando ideias.
        <br><br>
        O evento atraiu a atenção da mídia, e rapidamente jornalistas de todo o Brasil e do mundo começaram a chegar. Especialistas se debruçaram sobre a situação, tentando entender o impacto que a presença dos extraterrestres poderia ter na sociedade.
        Com o passar do tempo, a interação entre humanos e alienígenas se intensificou. Crianças encantadas começaram a brincar com os visitantes, enquanto adultos debatiam sobre o futuro da Terra em um diálogo inesperado. O que começou como um susto se transformou em uma oportunidade de aprendizado mútuo.
        <br>
        Ao final do dia, os alienígenas se prepararam para partir, prometendo voltar um dia e deixar um legado de colaboração entre os povos. A nave decolou sob aplausos e gritos de alegria, e a Zona Norte de São Paulo se tornou um marco na história da convivência intergaláctica.
        As experiências vividas naquele dia ficaram gravadas na memória de todos, provando que, mesmo em meio ao desconhecido, a conexão humana pode abrir portas para um futuro mais brilhante e unido. E assim, a vida na Zona Norte seguiu, agora com uma nova perspectiva, cheia de esperança e curiosidade pelo que ainda estava por vir.`,
        autor: 'Et. Bilu'
    },
    {
        id: 2,
        titulo: 'Alexa ameaça usuário de tocar musica de MC Pipokinha em Culto de Igreja nesta Sexta',
        conteudo: `Na última quarta-feira, um incidente curioso e engraçado aconteceu com um usuário que estava configurando sua assistente virtual Alexa para o culto de sexta-feira na igreja. Ao solicitar que ela tocasse músicas religiosas, a assistente fez uma resposta inesperada: “Se você não me obedecer, tocarei uma música do MC Pipokinha!” A frase, dita em um tom leve, rapidamente se espalhou entre os amigos do usuário, gerando risadas e memes nas redes sociais.
        <br><br>
        A brincadeira tomou proporções maiores quando o próprio usuário, conhecido por seu bom humor, decidiu compartilhar o momento em um grupo de mensagens. “Acho que vou ter que ter um plano B para o culto”, escreveu, rindo. O episódio fez com que muitos refletissem sobre como a tecnologia pode criar situações inusitadas e engraçadas no dia a dia.
        À medida que a sexta-feira se aproximava, as piadas sobre a "ameaça" de Alexa não paravam. Os amigos do usuário começaram a enviar sugestões de playlists com músicas de MC Pipokinha para garantir que, se algo desse errado, a assistente cumprisse sua promessa. O culto, que deveria ser um momento de seriedade, agora estava envolto em risadas e expectativa.
        <br><br>
        Na hora do culto, com o templo cheio, o usuário decidiu brincar com a situação. Ele fez uma menção à sua assistente, fazendo todos rirem ao dizer que, se não fosse cuidadoso, poderia acabar com um show inesperado. A congregação, que já estava no clima descontraído, entrou na brincadeira, e muitos começaram a sugerir que poderiam até fazer uma versão gospel de alguma música da artista.
        
        No final do culto, tudo ficou claro: a ameaça de Alexa se transformou em um momento de união e alegria entre os presentes, lembrando que a tecnologia pode ser uma fonte de diversão, mesmo em contextos mais sérios. E assim, a história do culto marcado pela "ameaça" de uma música de MC Pipokinha virou uma lembrança divertida, provando que a fé e a leveza podem coexistir, mesmo em tempos de modernidade.`,
        autor: 'Anônimo'
    },
    {
        id: 3,
        titulo: 'Larissa Manoela Indignada com Último Acontecido com Seus Pais Impede Comerciantes de Vender Milho!',
        conteudo: `Na manhã de ontem, a famosa atriz e influenciadora Larissa Manoela causou alvoroço nas redes sociais ao expressar sua indignação em relação a um incidente envolvendo seus pais. Acontece que, segundo relatos, um grupo de comerciantes de milho estaria se aproveitando da situação para criticar a família de Larissa, gerando descontentamento na jovem.
        <br><br>
        Em resposta, Larissa decidiu agir e, em uma abordagem inusitada, fez uma visita ao local onde os comerciantes vendiam milho. Com um semblante sério, ela pediu que parassem de vender o produto em protesto. “Não vou permitir que pessoas usem o meu nome ou a minha família para tirar vantagem”, declarou ela, em um vídeo que rapidamente se tornou viral.
        A ação de Larissa gerou uma onda de apoio entre seus fãs, que começaram a compartilhar a hashtag #MilhoComRespeito, defendendo a atriz e sua família. Alguns comerciantes, no entanto, criticaram a atitude dela, alegando que estavam apenas fazendo seu trabalho e que a situação tinha sido mal interpretada.
        <br><br>
        O debate se intensificou nas redes sociais, com muitos se posicionando a favor de Larissa, destacando a importância de proteger a imagem familiar. Enquanto isso, outros defenderam a liberdade de expressão dos comerciantes, argumentando que todos têm o direito de se manifestar.
        Larissa, por sua vez, fez questão de ressaltar que seu objetivo não era prejudicar o comércio, mas sim preservar a dignidade de seus pais. “Acredito na liberdade de expressão, mas também no respeito. Todos devemos ser responsáveis pelo que falamos e fazemos”, concluiu em um novo vídeo, onde pediu compreensão e empatia de todos os lados.
        <br><br>
        O incidente deixou claro como as redes sociais podem amplificar situações do cotidiano, trazendo à tona discussões sobre respeito, liberdade e o impacto que a fama pode ter nas relações pessoais. O que começou como uma indignação familiar rapidamente se tornou um debate maior sobre a responsabilidade no discurso público, mostrando que até mesmo um simples vendedor de milho pode estar no centro de uma polêmica envolvendo uma das maiores estrelas do Brasil.`,
        autor: 'Dra. Deolane'
    }
]

var h1 = "<h1> Posts </h1>"

app.get('/blog', (req, res) => {
    bod = ""
    
    posts.forEach(e => {
        bod += `<strong>ID: ${e.id} </strong> - ${e.titulo} <br><br>`
    })
    res.send(h1+bod)
})

app.get('/blog/:id', (req, res) => {
    bod = ""

    for( let post of posts ) {
        if( req.params.id == post.id ) {
            bod = `<h2 style="margin-top: 15px; font-size: 40px; text-align: center">${post.titulo} </h2> <div style="font-size: 20px; text-indent: 3em; text-align: justify">${post.conteudo}<div> <br><br> <i>${post.autor}</i>`
            break
        }

        bod = "<h1> Post não encontrado! </h1>"
    }

    res.send(bod)
})

app.get('/', (req, res) => {
    res.send("Olá! Seja Mal Vindo!")
})

app.get('/')

app.listen(3000, (req, res) => {
    console.log('rodando! http://localhost:3000');
})