import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import '../../variables/Colors.css';
import './ProjectsPage.css';

import useTexts from '../../hooks/useTexts';
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";
import PixelArtScene from '../../components/wallpaper/PixelArtScene';
import iconShare from '../../assets/icon/shared.svg'
import TransitandoLegalProject1 from '../../assets/img/project/transitandoLegal/page1.webp';
import TransitandoLegalProject2 from '../../assets/img/project/transitandoLegal/page2.webp';
import ScafomProject1 from '../../assets/img/project/scafom/page1.jpeg';


// Imagens dos projetos
import imageBroccolis from '../../assets/img/project/BroccolisAscension.png';
import imageMonsterDelivery from '../../assets/img/project/MonsterDelivery.png';
import imagePotioning from '../../assets/img/project/Potioning.png';
import imageSolis from '../../assets/img/project/Solis.png';
import imageTooMuchWork from '../../assets/img/project/TooMuchWork.png';
import imageBetweenDeath from '../../assets/img/project/BetweenDeath.png';
import imageOrgulhoNerd from '../../assets/img/project/diaOrgulho.webp';
import imageTransitandoLegal from '../../assets/img/project/transitandolegal.webp';
import imageBernoulli from '../../assets/img/project/bernoulli.png';
import imageRunnerBelga from '../../assets/img/project/runnerBelga.webp';
import imageMicheleAR from '../../assets/img/project/micheleAR.png';
import imageAtlasCNT from '../../assets/img/project/atlasCNT.png';
import imageScafom from '../../assets/img/project/scafom.png';
import imageNr35 from '../../assets/img/project/nr35.png';

export const getAllProjectsData = (texts) => [
    // PROJETOS PESSOAIS
    { id: 1, path: 'https://giovana-melo.itch.io/brocolli', title: "Broccoli's Ascension", category: 'GAMinG Jam 2021', image: imageBroccolis, tags: ['Construct', 'Play in Browser', 'Pixel Art', 'Retro'], type: 'personal'},
    { id: 2, path: 'https://solis.buffbuffstudios.com/', title: "Solis", category: 'Buff Buff Studios', image: imageSolis, tags: ['Unity', 'Windows', 'Puzzle', 'Platformer'], type: 'personal'},
    { id: 3, path: 'https://buff-buff-studios.itch.io/between-death', title: "BetweenDeath", category: 'Buff Buff Studios', image: imageBetweenDeath, tags: ['Unity', 'Windows', 'RPG'], type: 'personal' },
    { id: 4, path: 'https://giovana-melo.itch.io/potioning', title: "Potioning", category: 'Indie', image: imagePotioning, tags: ['Unity', 'Windows', 'Build', 'Nature'], type: 'personal'},
    { id: 5, path: 'https://giovana-melo.itch.io/monster-delivery', title: "Monster Delivery", category: 'Indie', image: imageMonsterDelivery, tags: ['Unity', 'Android', 'Runner Game', 'Action'], type: 'personal'},
    { id: 6, path: 'https://giovana-melo.itch.io/too-much-work-for-only-one-godess', title: "Too Much Work for Only One Goddess", category: 'Indie', image: imageTooMuchWork, tags: ['Construct', 'Play in Browser', 'Pixel Art', 'Simulator'], type: 'personal' },
    // PROJETOS PROFISSIONAIS
    { id: 7, title: "Transitando Legal Digital", category: 'Aioros Studios', image: imageTransitandoLegal, 
        gallery: [
            { type: 'video', url: 'https://www.youtube.com/watch?v=paD3c_Oa-Yg'},
            { type: 'image', url: TransitandoLegalProject1 },
            { type: 'image', url: TransitandoLegalProject2 },
        ],
        description: texts.Description_TransitandoLegal_Projects, tags: ['Unity', 'Andoid/IOS', 'Educational'], nameEnterprise: 'Aioros Studios', linkEnterprise: 'https://play.google.com/store/apps/details?id=com.Aioros.TLDigital&hl=pt_BR', type: 'professional'
    },
    { id: 8, title: "TIM Dia do Orgulho Nerd", category: 'Aioros Studios', image: imageOrgulhoNerd, 
        gallery: [
            { type: 'video', url: 'https://drive.google.com/file/d/1bdJkud8-iZHSIhJ93q2FBxRi-6ZScyud/view'},
            { type: 'image', url: imageOrgulhoNerd },
        ],
        description: texts.Description_TimOrgulho_Projects, tags: ['Unity', 'Phygital'], nameEnterprise: 'Aioros Studios', linkEnterprise: 'https://www.aioros.com.br/#Cases', type: 'professional'
    },
    { id: 9, title: "Jogos Educativos Bernoulli", category: 'Aioros Studios', image: imageBernoulli, 
        gallery: [
            { type: 'video', url: 'https://drive.google.com/file/d/1hZLAMKMcvmLr7XEQFE2NqvefhXRpH4c9/view'},
        ],
        description: texts.Description_Bernoulli_Projects, tags: ['Unity', 'PC', 'Educational'], nameEnterprise: 'Aioros Studios', linkEnterprise: 'https://www.aioros.com.br/#Cases', type: 'professional'
    },
    { id: 10, title: "Runner Belgo", category: 'Aioros Studios', image: imageRunnerBelga, 
        gallery: [
            { type: 'video', url: 'https://drive.google.com/file/d/1CYQdO_3Yv0olGZF4Ym5YmLV3diOfYsqk/view'},
        ],
        description: texts.Description_Belgo_Projects, tags: ['Unity', 'Phygital'], nameEnterprise: 'Aioros Studios', linkEnterprise: 'https://www.aioros.com.br/#Cases', type: 'professional'
    },
    { id: 11, title: "Michele AR", category: 'Aioros Studios', image: imageMicheleAR, 
        gallery: [
            { type: 'video', url: 'https://drive.google.com/file/d/1wsdlUZPECxPCBlittkvNYs9paawAA3cq/view'},
        ],
        description: texts.Description_MicheleAR_Projects, tags: ['AR', 'Unity', 'Phygital'], nameEnterprise: 'Aioros Studios', linkEnterprise: 'https://www.aioros.com.br/#Cases', type: 'professional'
    },
    { id: 12, title: "Atlas CNT", category: 'RD3 Digital', image: imageAtlasCNT, 
        gallery: [
            { type: 'video', url: 'https://drive.google.com/file/d/1FnZvzpkiSfUBc5A73RCPHHIFy2Gx4zP_/view'},
        ],
        description: texts.Description_AtlasCNT_Projects, tags: ['AR',  'VR','3D', 'Educational'], nameEnterprise: 'RD3 Digital', linkEnterprise: 'https://rd3.digital/realidade-aumentada/', type: 'professional'
    },
    { id: 13, title: "Scafom-rux", category: 'RD3 Digital', image: imageScafom, 
        gallery: [
            { type: 'video', url: 'https://drive.google.com/file/d/1Z6pFiXeMVlohOvQ4GYQybx4Pc2RFVMFl/view'},
            { type: 'image', url: ScafomProject1},
        ],
        description: texts.Description_Scafom_Projects, tags: ['VR', 'AR','3D', 'Educational'], nameEnterprise: 'RD3 Digital', linkEnterprise: 'https://rd3.digital/realidade-virtual/', type: 'professional'
    },
    { id: 14, title: "Nr35", category: 'RD3 Digital', image: imageNr35, 
        gallery: [
            { type: 'image', url: ScafomProject1},
        ],
        description: texts.Description_Nr35_Projects, tags: ['VR', 'AR','3D', 'Educational'], nameEnterprise: 'RD3 Digital', linkEnterprise: 'https://rd3.digital/realidade-virtual/', type: 'professional'
    },
];

const ProjectsPage = () => {
    const texts = useTexts();
    const allProjectsData = getAllProjectsData(texts);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (selectedProject) {
            document.body.classList.add('body-no-scroll');
        } else {
            document.body.classList.remove('body-no-scroll');
        }
        return () => document.body.classList.remove('body-no-scroll');
    }, [selectedProject]);

    const professionalProjects = allProjectsData.filter(p => p.type === 'professional');
    const personalProjects = allProjectsData.filter(p => p.type === 'personal');

    const getEmbedUrl = (url) => {
        if (!url) return null;

        // Google Drive
        if (url.includes('drive.google.com')) {
            return url.replace('/view', '/preview');
        }

        // YouTube
        if (url.includes('youtube.com/watch?v=')) {
            const videoId = url.split('v=')[1].split('&')[0];
            return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
        }

        if (url.includes('youtu.be/')) {
            const videoId = url.split('youtu.be/')[1].split('?')[0];
            return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
        }

        return url;
    };

    const Modal = () => {
        const [activeMediaIndex, setActiveMediaIndex] = useState(0);

        if (!selectedProject) return null;

        const gallery = selectedProject.gallery || [
            ...(selectedProject.videoUrl ? [{ type: 'video', url: selectedProject.videoUrl }] : []),
            { type: 'image', url: selectedProject.image }
        ];
        const currentMedia = gallery[activeMediaIndex];

        return createPortal(
            <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                    <button className="modal-close" onClick={() => setSelectedProject(null)}>&times;</button>
                    
                    <div className="modal-content-wrapper">
                        {/* ESQUERDA */}
                        <div className="modal-left">
                            <h2 className="modal-project-title">{selectedProject.title}</h2>
                            <p className="modal-project-description">
                                {selectedProject.description || ""}
                            </p>
                            <div className="modal-tags">
                                {selectedProject.tags.map(tag => (
                                    <span key={tag} className="modal-tag">{tag}</span>
                                ))}
                            </div>
                            <div className="modal-enterprise">
                                <a className="modal-project-enterprise" href={selectedProject.linkEnterprise} target="_blank" rel="noopener noreferrer">
                                    {selectedProject.nameEnterprise}
                                </a>
                                <img width='18px' height='15px' src={iconShare} alt={'icone de link externo'} />
                            </div>
                        </div>

                        {/* DIREITA */}
                        <div className="modal-right">
                            <div className="steam-main-display">
                                {currentMedia.type === 'video' ? (
                                    <iframe
                                        src={getEmbedUrl(currentMedia.url)}
                                        className="modal-video"
                                        allow="autoplay"
                                        title={selectedProject.title}
                                    ></iframe>
                                ) : (
                                    <img src={currentMedia.url} alt="Screenshot" className="modal-main-image" />
                                )}
                            </div>

                            {/* MINIATURAS */}
                            <div className="steam-thumbnail-strip">
                                {gallery.map((item, index) => (
                                    <div 
                                        key={index}
                                        className={`steam-thumb-item ${activeMediaIndex === index ? 'active' : ''}`}
                                        onClick={() => setActiveMediaIndex(index)}
                                    >
                                        <div className="thumb-overlay">
                                            {item.type === 'video' && <span className="play-icon">▶</span>}
                                        </div>
                                        <img 
                                            src={item.type === 'video' ? selectedProject.image : item.url} 
                                            alt="thumb" 
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>,
            document.body
        );
    };

    return (
        <>
            <Header />
            <div className="section-projectsAll">
                <PixelArtScene/>
                
                <div className="header-projectsAll">
                    <h1 className="header-title-projectsAll">{texts.TitlePage_ProjectsProfessional}</h1>
                    <div className="header-divider-projectsAll"/>
                </div>
                
                <div className="projectsAll-grid">
                    {professionalProjects.map(project => (
                        <div 
                            key={project.id} 
                            className="projectsAll-card professional-clickable" 
                            onClick={() => setSelectedProject(project)}
                        >
                            <img src={project.image} alt={project.title} className="card-image" />
                            <div className="card-content">
                                <h3 className="card-title">{project.title}</h3>
                                <p className="card-category">{project.category}</p>
                                <div className="card-tags-projectsAll">
                                    {project.tags.map(tag => <span key={tag} className="card-tag-projectsAll">{tag}</span>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
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
            <Modal />

            <Footer/>
        </>
    );
};

export default ProjectsPage;