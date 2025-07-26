function toggleLevelIndicator() {

    let levelIndicatorClasses = document.getElementById("level-indicator").classList

    let isVisible = levelIndicatorClasses.contains("faintly-visible")

    if (isVisible) {
        levelIndicatorClasses.remove("faintly-visible")
    } else {
        levelIndicatorClasses.add("faintly-visible")
    }
}

fetch('./config.json')
    .then(res => res.json())
    .then(config => {

        const play = document.getElementById('play-activity')
        const practice = document.getElementById('practice-activity')
        const lastUpdated = document.getElementById('last-updated')

        play.textContent = config.play_activity
        practice.textContent = config.practice_activity
        lastUpdated.textContent = `Last updated: ${config.last_updated}`

    })
    .catch(error => {
        console.error('Error fetching config:', error)
    })
