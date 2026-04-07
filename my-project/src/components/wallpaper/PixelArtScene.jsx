import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import imageTree from '../../assets/img/pixelart/arvore.png';
import imageLeaf from '../../assets/img/pixelart/folha.png';
import imageCloud from '../../assets/img/pixelart/nuvem.png';

import useTexts from '../../hooks/useTexts';

const PixelArtScene = () => {
    const texts = useTexts();
    
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const leaves = Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        startX: 83 + Math.random() * 10,
        delay: Math.random() * 5,
        duration: 4 + Math.random() * 3,
    }));

    // Estilo base
    const containerStyle = {
        position: 'relative',
        width: '100%',
        height: isMobile ? '250px' : '340px',
        backgroundColor: '#87CEEB',
        overflow: 'hidden',
        imageRendering: 'pixelated',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Handjet',
    };

    const layerStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'auto 100%',
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 4,
    };

    const contentStyle = {
        position: 'relative',
        zIndex: 5,
        pointerEvents: 'none',
        padding: '0 20px',
    };

    const titleStyle = {
        fontSize: isMobile ? '3.2rem' : '6rem',
        marginBottom: '10px',
        textShadow: isMobile ? '2px 2px #000' : '4px 4px #000',
        lineHeight: '1',
    };

    const subtitleStyle = {
        fontSize: isMobile ? '1.4rem' : '1.8rem',
        textShadow: '2px 2px #000',
    };

    return (
        <div style={containerStyle}>
            {/* CAMADA 1: Nuvens */}
            <motion.div
                style={{
                    ...layerStyle,
                    backgroundImage: `url(${imageCloud})`,
                    zIndex: 1,
                }}
                animate={{ backgroundPositionX: ['0px', '-1920px'] }}
                transition={{
                    repeat: Infinity,
                    duration: 80,
                    锋ease: "linear",
                }}
            />

            {/* CAMADA 2: Árvore */}
            <div
                style={{
                    position: 'absolute',
                    right: isMobile ? '6%' : '2%', // Posição da árvore
                    marginRight: isMobile ? '-40px' : '-60px',
                    marginBottom: '-8px',
                    bottom: '0',
                    zIndex: 2,
                    width: isMobile ? '220px' : '350px',
                    height: 'auto',
                }}
            >
                <img src={imageTree} alt="Tree" style={{ width: '100%', display: 'block' }} />
            </div>

            {/* CAMADA 3: Folhas */}
            {leaves.map((leaf) => (
                <motion.img
                    key={leaf.id}
                    src={imageLeaf}
                    style={{
                        position: 'absolute',
                        width: isMobile ? '10px' : '15px',
                        zIndex: 3,
                        left: isMobile ? '80%' : `${leaf.startX}%`,
                    }}
                    initial={{ y: '70%', opacity: 0, rotate: 0 }}
                    animate={{ 
                        y: '100vh',
                        opacity: [0, 1, 1, 0],
                        x: [0, -20, 20, -10],
                        rotate: 360 
                    }}
                    transition={{
                        duration: leaf.duration,
                        repeat: Infinity,
                        delay: leaf.delay,
                        ease: "linear",
                    }}
                />
            ))}

            <div style={overlayStyle} />

            <div style={contentStyle}>
                <h1 style={titleStyle}>
                    {texts.Game_Projects}
                </h1>
                <p style={subtitleStyle}>
                    {texts.GameText_Projects}
                </p>
            </div>
        </div>
    );
};

export default PixelArtScene;