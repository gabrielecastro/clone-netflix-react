import alertavermelho from '../img/movies/alertavermelho.jpg';
import ecritoresdaliberdade from '../img/movies/ecritoresdaliberdade.jpg';
import enolaholmes from '../img/movies/enolaholmes.jpg';
import exercitodeladroes from '../img/movies/exercitodeladroes.jpg'
import homemaranha from '../img/movies/homemaranha.jpg';
import imperdoavel from '../img/movies/imperdoavel.jpg';
import naoolheparacima from '../img/movies/naoolheparacima.jpg';
import opreçodoamanha from '../img/movies/opreçodoamanha.jpg';
import atravesdaminhajanela from '../img/movies/atravesdaminhajanela.jpg';
import nolimitedaguerra from '../img/movies/nolimitedaguerra.jpg';
import thehouse from '../img/movies/thehouse.jpg';
import justiçaemfamilia from '../img/movies/justiçaemfamilia.jpg';

import alertavermelhocapa from '../img/capamovie.jpg';
import naoolheparacimacapa from '../img/movies/naoolheparacimacapa.jpg';
import imperdoavelcapa from '../img/movies/imperdoavelcapa.jpg';
import homemaranhacapa from '../img/movies/homemaranhacapa.jpg';
import atravesdaminhajanelacapa from '../img/movies/atravesdaminhajanelacapa.jpg';
import nolimitedaguerracapa from '../img/movies/nolimitedaguerracapa.jpg';
import enolaholmescapa from '../img/movies/enolaholmescapa.jpg';
import escritoresdaliberdadecapa from '../img/movies/escritoesdaliberdadecapa.jpg';
import exercitodeladroescapa from '../img/movies/exercitodeladroescapa.jpg';
import justiçaemfamiliacapa from '../img/movies/justiçaemfamiliacapa.jpg';
import opreçodoamanhacapa from '../img/movies/opreçodoamanhacapa.jpg';
import thehousecapa from '../img/movies/thehousecapa.jpg';

const movies = [
  { id: 0,
    name: 'Alerta Vermelho',
    image: alertavermelho,
    sinopse: 'No mundo do crime internacional, a INTERPOL lança um Alerta Vermelho, o que inicia uma caçada para capturar a mais notória ladra de artes do globo.',
    trailer: 'https://youtu.be/5JQuYpBZarc',
    imageCapa: alertavermelhocapa,
  },
  { id: 1,
    name: 'Não Olhe para Cima',
    image: naoolheparacima,
    sinopse: 'Dois astrônomos descobrem um cometa mortal vindo em direção à Terra e partem em um tour midiático para alertar a humanidade. Só que ninguém parece dar muita bola.',
    trailer: 'https://youtu.be/c1nToClX_3w',
    imageCapa: naoolheparacimacapa,
  },
  { id: 2,
    name: 'Imperdoável',
    image: imperdoavel,
    sinopse: 'Após cumprir pena por um crime violento, Ruth volta ao convívio na sociedade, que se recusa a perdoar seu passado. Discriminada no lugar que já chamou de lar, sua única esperança é encontrar a irmã, que ela havia sido forçada a deixar para trás.',
    trailer: 'https://youtu.be/P0RO1pF4L1o',
    imageCapa: imperdoavelcapa,
 },
  { id: 3,
    name: 'Homem-Aranha: De Volta ao Lar',
    image: homemaranha,
    sinopse: 'Depois de atuar ao lado dos Vingadores, chegou a hora do pequeno Peter Parker (Tom Holland) voltar para casa e para a sua vida, já não mais tão normal. Lutando diariamente contra pequenos crimes nas redondezas, ele pensa ter encontrado a missão de sua vida quando o terrível vilão Abutre (Michael Keaton) surge amedrontando a cidade. O problema é que a tarefa não será tão fácil como ele imaginava.',
    trailer: 'https://youtu.be/LBRrh_97QZI',
    imageCapa: homemaranhacapa,
 },
  { id: 4,
    name: 'Através da Minha Janela',
    image: atravesdaminhajanela,
    sinopse: 'Raquel é louca pelo vizinho Ares há muito tempo. Ela o observa de longe, mas nunca falou com ele. Será que vai dar match?',
    trailer: 'https://youtu.be/DB9-hN0s3r8',
    imageCapa: atravesdaminhajanelacapa,
  },
  { id: 5,
    name: 'Munique: No Limite da Guerra',
    image: nolimitedaguerra,
    sinopse: 'Na tensa Conferência de Munique em 1938, amigos que agora trabalham para governos opostos se tornam espiões e correm contra o tempo para revelar um segredo nazista.',
    trailer: 'https://youtu.be/8LJeGLu_2H0',
    imageCapa: nolimitedaguerracapa,
  },
  { id: 6,
    name: 'Enola Holmes',
    image: enolaholmes,
    sinopse: 'Enola Holmes só tem 16 anos, mas vai fazer de tudo para encontrar a mãe desaparecida, inclusive despistar o irmão Sherlock e ajudar um jovem lorde fugitivo.',
    trailer: 'https://youtu.be/rcV1I-397Wg',
    imageCapa: enolaholmescapa,
  },
  { id: 7,
    name: 'Escritores da Liberdade',
    image: ecritoresdaliberdade,
    sinopse: 'Uma jovem e idealista professora chega a uma escola de um bairro pobre, que está corrompida pela agressividade e violência. Os alunos se mostram rebeldes e sem vontade de aprender, e há entre eles uma constante tensão racial. Assim, para fazer com que os alunos aprendam e também falem mais de suas complicadas vidas, a professora Gruwell aposta em métodos diferentes de ensino. Aos poucos, os alunos vão retomando a confiança em si mesmos, aceitando mais o conhecimento e reconhecendo valores.',
    trailer: 'https://www.youtube.com/watch?v=pfwzLDj0yzM',
    imageCapa: escritoresdaliberdadecapa,
  },
  { id: 8,
    name: 'Exército de Ladrões: Invasão da Europa',
    image: exercitodeladroes,
    sinopse: 'Nesta história que antecede Army of the Dead, uma mulher misteriosa convida o caixa de banco Dieter para roubar cofres superprotegidos na Europa.',
    trailer: 'https://youtu.be/37dNU_rC6Gs',
    imageCapa: exercitodeladroescapa,
  },
  { id: 9,
    name: 'Justiça em Família',
    image: justiçaemfamilia,
    sinopse: 'Ele perdeu o amor de sua vida por causa da ganância da indústria farmacêutica. Agora, sua filha está órfã e a justiça não chega... por enquanto.',
    trailer: 'https://youtu.be/6dGXwuJzyas',
    imageCapa: justiçaemfamiliacapa,
  },
  { id: 10,
    name: 'O Preço do Amanhã',
    image: opreçodoamanha,
    sinopse: 'Acusado de assassinato, um homem deve descobrir como derrubar um sistema onde tempo é dinheiro e que permite que os ricos vivam para sempre, enquanto os pobres devem implorar por cada minuto de suas vidas.',
    trailer: 'https://youtu.be/XUSt9oZUTrs',
    imageCapa: opreçodoamanhacapa,
  },
  { id: 11,
    name: 'The House',
    image: thehouse,
    sinopse: 'Nesta comédia de animação de humor ácido, uma família humilde, um arquiteto ansioso e uma senhoria cansada ficam presos à mesma casa misteriosa em épocas diferentes.',
    trailer: 'https://www.youtube.com/watch?v=wqbZlAEUb5w',
    imageCapa: thehousecapa,
  },
];

export default movies;