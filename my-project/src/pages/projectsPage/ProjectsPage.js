import '../../variables/Colors.css';
import './ProjectsPage.css';

import useTexts from '../../hooks/useTexts';
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";

import imageIntroducion from '../../assets/img/project/introducion.png';

// import iconLink from '../../assets/icon/link.svg';

// Imagem dos projetos
import imageBroccolis from '../../assets/img/project/BroccolisAscension.png';
import imageMonsterDelivery from '../../assets/img/project/MonsterDelivery.png';
import imagePotioning from '../../assets/img/project/Potioning.png';
import imageSolis from '../../assets/img/project/Solis.png';
import imageTooMuchWork from '../../assets/img/project/TooMuchWork.png';
import imageBetweenDeath from '../../assets/img/project/BetweenDeath.png';


const allProjectsData = [
    { id: 1, path: 'https://giovana-melo.itch.io/brocolli', title: "Broccoli's Ascension", category: 'GAMinG Jam 2021', image: imageBroccolis, tags: ['Construct', 'Play in Browser', 'Pixel Art', 'Retro'], type: 'personal'},
    { id: 2, path: 'https://solis.buffbuffstudios.com/', title: "Solis", category: 'Buff Buff Studios', image: imageSolis, tags: ['Unity', 'Windows', 'Puzzle', 'Platformer'], type: 'personal'},
    { id: 3, path: 'https://buff-buff-studios.itch.io/between-death', title: "BetweenDeath", category: 'Buff Buff Studios', image: imageBetweenDeath, tags: ['Unity', 'Windows', 'RPG'], type: 'personal' },
    { id: 4, path: 'https://giovana-melo.itch.io/potioning', title: "Potioning", category: 'Indie', image: imagePotioning, tags: ['Unity', 'Windows', 'Build', 'Nature'], type: 'personal'},
    { id: 5, path: 'https://giovana-melo.itch.io/monster-delivery', title: "Monster Delivery", category: 'Indie', image: imageMonsterDelivery, tags: ['Unity', 'Android', 'Runner Game', 'Action'], type: 'personal'},
    { id: 6, path: 'https://giovana-melo.itch.io/too-much-work-for-only-one-godess', title: "Too Much Work for Only One Goddess", category: 'Indie', image: imageTooMuchWork, tags: ['Construct', 'Play in Browser', 'Pixel Art', 'Simulator'], type: 'personal' },
];

const ProjectsPage = () => {
    const texts = useTexts();
    const professionalProjects = allProjectsData.filter(p => p.type === 'professional');
    const personalProjects = allProjectsData.filter(p => p.type === 'personal');

    return (
        <>
            <Header />
            <div className="section-projectsAll">
                <div className="image-panel-projectsAll">
                    <div className="projects-bg-image">
                        <img src={imageIntroducion} alt="Background pattern" />
                    </div>
                    <div className="projects-text-content">
                        <h1 className="projects-title">{texts.Game_Projects}</h1>
                        <p className="projects-subtitle">{texts.GameText_Projects}</p>
                    </div>
                </div>

                {/* Seção Profissional */}
                <div className="header-projectsAll">
                    <h1 className="header-title-projectsAll">{texts.TitlePage_ProjectsProfessional}</h1>
                    <div className="header-divider-projectsAll"/>
                </div>
                {/* <div className="header-link-projectsAll">
                    <a  className="text-link-projectsAll" href="" target="_blank" rel="noopener noreferrer">Projetos Aioros Studios</a>
                    <img className="icon-link-projectsAll" src={iconLink} alt="icone link" />
                </div> */}
                <div className="projectsAll-grid">
                    {professionalProjects.map(project => (
                        <a 
                          href={project.path} 
                          key={project.id} 
                          className="projectsAll-card" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                            <img src={project.image} alt={project.title} className="card-image" />
                            <div className="card-content">
                                <h3 className="card-title">{project.title}</h3>
                                <p className="card-category">{project.category}</p>
                                <div className="card-tags-projectsAll">
                                    {project.tags.map(tag => <span key={tag} className="card-tag-projectsAll">{tag}</span>)}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Seção Pessoal */}
                <div className="header-projectsAll">
                    <h1 className="header-title-projectsAll">{texts.TitlePage_ProjectsPersonal}</h1>
                    <div className="header-divider-projectsAll"/>
                </div>
                <div className="projectsAll-grid">
                    {personalProjects.map(project => (
                        <a 
                          href={project.path} 
                          key={project.id} 
                          className="projectsAll-card" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                            <img src={project.image} alt={project.title} className="card-image" />
                            <div className="card-content">
                                <h3 className="card-title">{project.title}</h3>
                                <p className="card-category">{project.category}</p>
                                <div className="card-tags-projectsAll">
                                    {project.tags.map(tag => <span key={tag} className="card-tag-projectsAll">{tag}</span>)}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default ProjectsPage;