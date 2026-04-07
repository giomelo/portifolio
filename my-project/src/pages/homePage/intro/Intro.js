import './Intro.css';

import imageDesktop from '../../../assets/img/intro-desktop.png';

import iconGithub from '../../../assets/icon/github.svg';
import iconItchio from '../../../assets/icon/itchio.svg';
import iconLinkedin from '../../../assets/icon/linkedin.svg';

// import docCurriculum from '../../../assets/doc';

import useTexts from '../../../hooks/useTexts';
import ButtonSocial from '../../../components/buttons/redeSocial/ButtonSocial';
import ButtonSimple from '../../../components/buttons/simpleCustom/ButtonSimple';
import LanguageSelector from '../../../components/language/LanguageSelector';

const Intro = () => {
    const texts = useTexts();

    return (
        <section id="home">
            <div className="section-home">
                <div className="languageSelector-home">
                    <LanguageSelector/>
                </div>
                <div className="panel-home">
                    <div className="left-home">
                        <p className="text-profissional-home">{texts.TextProfession_Intro}</p>
                        <p className="text-name-home">{texts.TextPresentation_Intro}</p>
                        <p className="text-profile-home">{texts.TextProfile_Intro}</p>
                        <p className="text-profile-home-extra">{texts.TextProfile_Intro_Extra}</p>
                        <div className="buttons-home">
                            <ButtonSimple height="40px" text={texts.TextButtonCurriculum_Intro} width="150px" borderRadius="12px" href="https://drive.google.com/file/d/1s7orVqwT0Sw4-qH8A2ZUXHBABKM996r8/view" target="_blank" rel="noopener noreferrer" alt="Botão de Curriculo" />
                             <div className="redeSocial-home">
                                <ButtonSocial height={"38px"} width={"38px"} icon={iconLinkedin} alt="Botão Linkedin" href="https://www.linkedin.com/in/giovana-melo-a3771a200/"/>
                                <ButtonSocial height={"38px"} width={"38px"} icon={iconGithub} alt="Botão github" href="https://github.com/giomelo"/>
                                <ButtonSocial height={"42px"} width={"42px"} icon={iconItchio} alt="Botão Itchi.io" href="https://giovana-melo.itch.io"/>
                            </div>
                        </div>
                    </div>
                    <div className="right-home">
                        <div className="image-home">
                            <picture>
                                <img className="foreground-image" src={imageDesktop} alt="Descrição da imagem de introdução" />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;