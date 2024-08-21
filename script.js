let gameState = {
    currentScene: 'welcome',
    inventory: [],
    language: 'en',
    levelsCompleted: 0
};

const scenes = {
    welcome: {
        en: {
            text: "Welcome to the Language Learning RPG(Role-Playing Games)! Choose your starting language.",
            actions: [
                { text: "Start in English", action: () => setLanguage('en') },
                { text: "Start in Spanish", action: () => setLanguage('es') },
                { text: "Start in French", action: () => setLanguage('fr') }
            ]
        }
    },
    level1: {
        en: {
            text: "You arrive at a small village. The villagers speak a language you don't understand. What do you do?",
            actions: [
                { text: "Talk to the elder", nextScene: 'talkToElder' },
                { text: "Explore the village", nextScene: 'exploreVillage' }
            ]
        },
        es: {
            text: "Llegas a un pequeño pueblo. Los aldeanos hablan un idioma que no entiendes. ¿Qué haces?",
            actions: [
                { text: "Hablar con el anciano", nextScene: 'talkToElder' },
                { text: "Explorar el pueblo", nextScene: 'exploreVillage' }
            ]
        },
        fr: {
            text: "Vous arrivez dans un petit village. Les villageois parlent une langue que vous ne comprenez pas. Que faites-vous?",
            actions: [
                { text: "Parler avec l'ancien", nextScene: 'talkToElder' },
                { text: "Explorer le village", nextScene: 'exploreVillage' }
            ]
        }
    },
    talkToElder: {
        en: {
            text: "The elder greets you and teaches you a new word: 'Hello' (Hola in Spanish, Bonjour in French).",
            actions: [
                { text: "Learn the word 'Hello'", action: () => addItem('Word: Hello') },
                { text: "Continue", nextScene: 'level2' }
            ]
        },
        es: {
            text: "El anciano te saluda y te enseña una nueva palabra: 'Hola' (Hello en inglés, Bonjour en francés).",
            actions: [
                { text: "Aprender la palabra 'Hola'", action: () => addItem('Palabra: Hola') },
                { text: "Continuar", nextScene: 'level2' }
            ]
        },
        fr: {
            text: "L'ancien vous salue et vous apprend un nouveau mot : 'Bonjour' (Hello en anglais, Hola en espagnol).",
            actions: [
                { text: "Apprendre le mot 'Bonjour'", action: () => addItem('Mot: Bonjour') },
                { text: "Continuer", nextScene: 'level2' }
            ]
        }
    },
    exploreVillage: {
        en: {
            text: "While exploring the village, you find a strange object. It's a magical artifact.",
            actions: [
                { text: "Pick up the artifact", action: () => addItem('Magical Artifact') },
                { text: "Leave it", nextScene: 'level2' }
            ]
        },
        es: {
            text: "Mientras exploras el pueblo, encuentras un objeto extraño. Es un artefacto mágico.",
            actions: [
                { text: "Recoger el artefacto", action: () => addItem('Artefacto Mágico') },
                { text: "Dejarlo", nextScene: 'level2' }
            ]
        },
        fr: {
            text: "En explorant le village, vous trouvez un objet étrange. C'est un artefact magique.",
            actions: [
                { text: "Ramasser l'artefact", action: () => addItem('Artefact Magique') },
                { text: "Le laisser", nextScene: 'level2' }
            ]
        }
    },
    level2: {
        en: {
            text: "You continue your journey and reach a dense forest. What do you do?",
            actions: [
                { text: "Enter the forest", nextScene: 'enterForest' },
                { text: "Set up camp", nextScene: 'setUpCamp' }
            ]
        },
        es: {
            text: "Continúas tu viaje y llegas a un bosque denso. ¿Qué haces?",
            actions: [
                { text: "Entrar en el bosque", nextScene: 'enterForest' },
                { text: "Montar el campamento", nextScene: 'setUpCamp' }
            ]
        },
        fr: {
            text: "Vous poursuivez votre voyage et atteignez une forêt dense. Que faites-vous?",
            actions: [
                { text: "Entrer dans la forêt", nextScene: 'enterForest' },
                { text: "Installer le camp", nextScene: 'setUpCamp' }
            ]
        }
    },
    enterForest: {
        en: {
            text: "Inside the forest, you find a mystical creature that only responds to a certain word in your target language.",
            actions: [
                { text: "Try to communicate", nextScene: 'communicateCreature' },
                { text: "Leave the forest", nextScene: 'level3' }
            ]
        },
        es: {
            text: "Dentro del bosque, encuentras una criatura mística que solo responde a una cierta palabra en tu idioma objetivo.",
            actions: [
                { text: "Intentar comunicarte", nextScene: 'communicateCreature' },
                { text: "Salir del bosque", nextScene: 'level3' }
            ]
        },
        fr: {
            text: "Dans la forêt, vous trouvez une créature mystique qui ne répond qu'à un certain mot dans votre langue cible.",
            actions: [
                { text: "Essayer de communiquer", nextScene: 'communicateCreature' },
                { text: "Quitter la forêt", nextScene: 'level3' }
            ]
        }
    },
    setUpCamp: {
        en: {
            text: "You set up camp and rest for the night. In your sleep, you dream about a word you learned earlier.",
            actions: [
                { text: "Recall the word 'Hello'", nextScene: 'level3', action: () => addItem('Word: Hello') },
                { text: "Continue", nextScene: 'level3' }
            ]
        },
        es: {
            text: "Montas el campamento y descansas por la noche. En tu sueño, recuerdas una palabra que aprendiste antes.",
            actions: [
                { text: "Recordar la palabra 'Hola'", nextScene: 'level3', action: () => addItem('Palabra: Hola') },
                { text: "Continuar", nextScene: 'level3' }
            ]
        },
        fr: {
            text: "Vous installez le camp et vous reposez pour la nuit. Dans votre sommeil, vous rêvez d'un mot que vous avez appris plus tôt.",
            actions: [
                { text: "Rappeler le mot 'Bonjour'", nextScene: 'level3', action: () => addItem('Mot: Bonjour') },
                { text: "Continuer", nextScene: 'level3' }
            ]
        }
    },
    communicateCreature: {
        en: {
            text: "You speak the word and the creature smiles. It teaches you another word in your target language.",
            actions: [
                { text: "Learn the new word", nextScene: 'level3', action: () => addItem('New Word') },
                { text: "Continue", nextScene: 'level3' }
            ]
        },
        es: {
            text: "Dices la palabra y la criatura sonríe. Te enseña otra palabra en tu idioma objetivo.",
            actions: [
                { text: "Aprender la nueva palabra", nextScene: 'level3', action: () => addItem('Nueva Palabra') },
                { text: "Continuar", nextScene: 'level3' }
            ]
        },
        fr: {
            text: "Vous prononcez le mot et la créature sourit. Elle vous apprend un autre mot dans votre langue cible.",
            actions: [
                { text: "Apprendre le nouveau mot", nextScene: 'level3', action: () => addItem('Nouveau Mot') },
                { text: "Continuer", nextScene: 'level3' }
            ]
        }
    },
    level3: {
        en: {
            text: "You've completed this part of the journey. More adventures await!",
            actions: [
                { text: "Start Over", nextScene: 'welcome' }
            ]
        },
        es: {
            text: "Has completado esta parte del viaje. ¡Más aventuras te esperan!",
            actions: [
                { text: "Empezar de nuevo", nextScene: 'welcome' }
            ]
        },
        fr: {
            text: "Vous avez terminé cette partie du voyage. D'autres aventures vous attendent!",
            actions: [
                { text: "Recommencer", nextScene: 'welcome' }
            ]
        }
    }
};

function setLanguage(lang) {
    gameState.language = lang;
    gameState.currentScene = 'level1';
    displayScene();
}

function addItem(item) {
    gameState.inventory.push(item);
    updateInventory();
    displayScene();
}

function updateInventory() {
    const inventoryList = document.getElementById('inventory-list');
    inventoryList.innerHTML = '';
    gameState.inventory.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        inventoryList.appendChild(li);
    });
}

function displayScene() {
    const scene = scenes[gameState.currentScene][gameState.language];
    document.getElementById('scene').innerText = scene.text;

    const actionsDiv = document.getElementById('actions');
    actionsDiv.innerHTML = '';
    scene.actions.forEach(action => {
        const button = document.createElement('button');
        button.textContent = action.text;
        button.onclick = () => {
            if (action.action) action.action();
            if (action.nextScene) {
                gameState.currentScene = action.nextScene;
                displayScene();
            }
        };
        actionsDiv.appendChild(button);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayScene();
});
