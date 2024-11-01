const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = 3000;


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.set('view options', { layout: 'layouts/main' });
hbs.registerPartials(path.join(__dirname, 'views/partials'));

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    name: 'Alex Pablo',
    role: 'Desarrollador web',
    description: 'Mejorando el mundo con la tecnologia'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    skills: ['JavaScript', 'C#', 'Visual Basic', 'TypeScript', '.NET', 'Angular', 'Next.js', 'SQL Server', 'Tailwind CSS'],
    experience: [
    ]
  });
});

app.get('/projects', (req, res) => {
  res.render('projects', { projects });
});

app.get('/project/:id', (req, res) => {
  const project = projects.find(p => p.id === req.params.id);
  if (!project) {
    return res.redirect('/projects');
  }
  res.render('project', { project });
});


app.get('/contact', (req, res) => {
  res.render('contact', {
    email: 'alex24pablodev@gmail.com',
    github: 'https://github.com/Alex-Pablo',
  });
});



const projects = [
  {
    id: 'miCompu',
    title: 'MiCompu',
    description: 'Una aplicación de escritorio que monitorea las actividades del pc',
    longDescription: 'myCompu es una aplicación desarrollada con .NET MAUI que permite visualizar información detallada sobre tu computadora. La app ofrece un análisis completo del software instalado, el hardware, los procesos en ejecución y el consumo de recursos, proporcionando una herramienta integral para el monitoreo y la gestión del sistema.',
    tech: ['C#', '.NET', '.NET MAUI', 'Blazor'],
    images: [
      '/images/miCompu1.png',
      '/images/miCompu2.png',
      '/images/miCompu3.png',
    ],
    github: 'https://drive.google.com/drive/u/4/folders/1AYEOq2InOzCBQ_HS675tDuBEPr3KPztF',
    features: [
      'Aplicación multiplataforma',
      'Reportes generados',
      'Consumo de recursos',
      'Procesos en ejecución',
      'Información basica del dispositivo',
      'Iniciar o matar procesos',
    ]
  },
  {
    id: 'sisFacturacion',
    title: 'Sistema de Facturacion',
    description: 'Sistema para generar y visualizar facturaciones',
    longDescription: 'Sistema para la generacion y visualizacion de diferentes tipos de facturas, se utilizaron diferentes tipos de tecnologias tales como Angular, .NET Web Api, y SQL Server',
    tech: ['Angular', '.NET', 'SQl Server'],
    images: [
      '/images/facturacion1.png',
      '/images/facturacion2.png',
      '/images/facturacion3.png'
    ],
    github: 'https://github.com/Alex-Pablo/FSistemaFacturacion',
    link: '#',
    features: [
      'Generación de facturas',
      'Visualización de diferentes tipos facturas',
    ]
  },
  {
    id: 'fRobot',
    title: 'Aplicacion control robot',
    description: 'Aplicacion nativa para el control de robot',
    longDescription: 'Aplicacion nativa contruida para el control de acciones de un robot como control de direcciones, activacion de luces leds, activacion de sierra, entre otros',
    tech: ['Python', 'React Native', 'Expo'],
    images: [
      '/images/robot1.jpeg',
      '/images/robot2.jpeg',
      '/images/robot3.jpeg'
    ],
    github: 'https://github.com/Alex-Pablo/fRobot',
    link: '#',
    features: [
      'Control de direcciones izquierda, derecha, atras, adelante',
      'Manipulacion de sierra',
      'Manipulacion de luces leds'
    ]
  },
  {
    id: 'webEtica',
    title: 'Web Etica Profesional',
    description: 'Pagina web en base a temas desarrollados en curos de etica Profesional',
    longDescription: 'Pagina web desarrollada con el fin de presentar los temas desarrollados en clase de etica, utilizando tecnologias como Next.js',
    tech: ['Next.js', 'CSS', 'HTML'],
    images: [
      '/images/etica1.png',
      '/images/etica2.png',
      '/images/etica3.png'
    ],
    github: 'https://github.com/Alex-Pablo/etica-web',
    link: 'https://etica-web.vercel.app/integridad',
    features: [
      'Informacion de los integrantes',
      'Resumen de los temas',
      'Videos y recursos'
    ]
  },
  {
    id: 'aquavet',
    title: 'Pagina web de aquavet',
    description: 'Pagina web para empresa de Aquavet',
    longDescription: 'Pagina web desarrollada para la empresa Aquavet, con el fin de controlar todos sus servicios y administracion de la empresa, usando tecnologias como Angular, .NET y SQL SERVER',
    tech: ['SQl Server', 'Angular', '.NET'],
    images: [
      '/images/aquavet1.png',
      '/images/aquavet2.png',
      '/images/aquavet3.png'
    ],
    github: 'https://github.com/Alex-Pablo/FrontAquavet',
    link: 'https://front-aquavet.vercel.app/#/auth/login',
    features: [
      'Modulo de autorizacion y autorizacion',
      'Modulo de administracion de usuarios',
      'Modulo de reportes'
    ]
  }
];



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
