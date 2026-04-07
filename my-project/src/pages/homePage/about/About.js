import './About.css';
import useTexts from '../../../hooks/useTexts';

import imageAbout from '../../../assets/img/profile-about.jpeg';
import iconAchievement from '../../../assets/icon/achievement.svg';

const About = () => {
    const texts = useTexts();

    return (
        <section id="about">
            <div className="section-about">
                <div className="header-about">
                    <h1 className="header-title-about">{texts.Section_About}</h1>
                    <div className="header-divider-about"/>
                </div>
                <div className="panel-about">
                    <div className="left-panel-about">
                        <img className="image-about" src={imageAbout} alt="Imagem de perfil"/>
                    </div>
                    <div className="right-panel-about">
                        <div className="text-about">
                            <p>
                                {texts.TextProfile_01_About}
                            </p>
                            <p className="text-extra-about">
                                {texts.TextProfile_extra_About}
                            </p>
                        </div>
                        <div className="divider-about"/>
                        <div className="achievement-about">
                            <div>
                                <img src={iconAchievement} className="achievement-icon-about" alt="icone de conquista"/>
                                <p>{texts.Achievement_01_About}</p>
                            </div>
                        </div>
                        <div className="skills-about">
                            <span className="skill-tag">C#</span>
                            <span className="skill-tag">Unity</span>
                            <span className="skill-tag">Game Developer</span>
                            <span className="skill-tag">Mobile</span>
                            <span className="skill-tag">XR - AR</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;