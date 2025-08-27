loadConfig()

function loadConfig() {
    fetch('../../config.json')
    .then(res => res.json())
    .then(config => {

        const musicianshipLinks = config.musicianship.links

        setLinks(musicianshipLinks)

    })
    .catch(error => {
        console.error('Error fetching config:', error)
    })
}

function setLinks(linksOfTopics) {

    const isPersonalMode = detectPersonalMode()

    for (key in linksOfTopics) {

        const tile = document.getElementById(`${key}-tile`)
        
        const linkChoices = linksOfTopics[key]
        const link = isPersonalMode ? linkChoices.personal : linkChoices.public

        tile.addEventListener('click', () => {
            window.open(link)
        })
    }

}

function detectPersonalMode() {
    return window.location.hash === '#me'
}