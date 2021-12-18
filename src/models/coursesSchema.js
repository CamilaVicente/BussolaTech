const mongoose = require('mongoose'); // para conectar com o banco de dados

const coursesSchema = new mongoose.Schema({

    id: mongoose.Schema.Types.ObjectId,

    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    stack: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        select: false //pra quando buscar no bd essa informação não vir na consulta
    },

}, {
    timestamps: true,
    select: false
})


const Courses = mongoose.model("Courses", coursesSchema);

module.exports = Courses;



/* Sites com cursos gratuitos:
Backend:
https://www.codecademy.com/
Descrição:
Com mais de 24 milhões de pessoas que já fizeram um curso no site, o Code Academy
aborda estudos de introdução, pratica e atividades para desenvolver. Além de aulas
específicas sobre cada uma das principais linguagens de programação. Entre elas: HTML,
JavaScript, CSS, PHP, jQuery, Python, Ruby.
Se você pretende ser backend, vale a pena dar uma olhada nesse site!
Fullstack:
https://www.coursera.org/courses?query=free
Descrição:
Coursera é uma das maiores plataformas de ensino à distância pela internet no mundo. As
aulas vão desde cursos mais introdutórios, a até algo mais complexo, como um
Bacharelado em Ciência da Computação, administrado pela Universidade de Londres. O
site possui suas vertentes gratuitas mas caso opte por conteúdos mais completos, existes
os cursos e graduações em versão paga.
As principais linguagens ensinadas no Coursera são: Python, Java, HTML e CSS,
Programação IoT (Internet das Coisas), C e Introdução à programação.
Se você pretende entender de ambas as áreas e se tornar fulkstack, confere só esse site!
https://www.bitdegree.org/learn/
Descrição:
O BitDegree oferece cursos gratuitos que vão desde programação a desenvolvimento de
games. As linguagens mais populares são: HTML, CSS, PHP, JavaScript, SQL, jQuery.
O site perfeito para quem quer aprender tanto frontend quanto backend. Vai fundo
Frontend:
https://www.udemy.com/pt/courses/free/
A Udemy é uma plataforma de cursos pagos e gratuitos muito conhecida por estudantes do
Brasil. Famosa pela grande variedade de cursos, a Udemy também oferece conteúdos
sobre programação, tecnologia, design e marketing.
Com certeza é um portal onde você achará de tudo um pouco. Caso opte por seguir como
frontend, a gama de cursos e conceitos da área você encontrará facilmente aqui.Canais no YouTube
AfroPhyton
https://youtube.com/c/AfroPythonBR
Descrição:
O AfroPython existe para aumentar a representatividade de pessoas negras dentro da área
de tecnologia. Com muito conteúdo e lives no YouTube, apostamos que você vai adorar
aprender muito com a galera AfroPhyton!
Curso em Vídeo: https://youtube.com/c/CursoemV%C3%ADdeo
Descrição:
Lançado em 2013, o professor carioca Gustavo Guanabara, lançou o projeto de ensinar
tecnologia à distância que foi ganhando forma e hoje já conta com milhares de alunos
inscritos e uma grande quantidade de material gratuito.
Universo programado:
https://youtube.com/c/UniversoProgramado
Descrição:
No canal Universo Programado, são compartilhadas muitas dicas, conteúdos e novidades
na área da programação e Inteligência Artificial.*/