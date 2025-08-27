loadConfig()

function loadConfig() {
    fetch('../../config.json')
    .then(res => res.json())
    .then(config => {

        const log = config.vocals.log

        const play = document.getElementById('play-activity')
        const practice = document.getElementById('practice-activity')
        const lastUpdated = document.getElementById('last-updated')

        play.textContent = log.play_activity
        practice.textContent = log.practice_activity
        lastUpdated.textContent = `Last updated: ${log.last_updated}`

        const vocalsLinks = config.vocals.links

        setLinks(vocalsLinks)

    })
    .catch(error => {
        console.error('Error fetching config:', error)
    })
}

function setLinks(linksOfTopics) {

    const isPersonalMode = detectPersonalMode()

    for (key in linksOfTopics) {

        const element = document.getElementById(`${key}`)
        
        const linkChoices = linksOfTopics[key]
        const link = isPersonalMode ? linkChoices.personal : linkChoices.public

        element.addEventListener('click', () => {
            window.open(link)
        })

        element.classList.add('clickable')
    }

}

function detectPersonalMode() {
    return window.location.hash === '#me'
}