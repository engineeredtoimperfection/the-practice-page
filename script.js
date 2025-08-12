loadConfig()

detectPersonalMode()

showWelcomeMessage()

function loadConfig() {
    fetch('./config.json')
    .then(res => res.json())
    .then(config => {

        const play = document.getElementById('play-activity')
        const practice = document.getElementById('practice-activity')
        const totalHours = document.getElementById('total-hours')
        const lastUpdated = document.getElementById('last-updated')

        const log = config.log

        play.textContent = log.play_activity
        practice.textContent = log.practice_activity
        totalHours.textContent = log.total_hours
        lastUpdated.textContent = `Last updated: ${log.last_updated}`

        if (detectPersonalMode()) {
            enablePersonalMode(config.links)
        }

    })
    .catch(error => {
        console.error('Error fetching config:', error)
    })
}

function detectPersonalMode() {
    return window.location.hash === '#me'
}

function enablePersonalMode(links) {
    
    // Use personal links instead of public ones
    console.log('Personal Mode')

    for (let key in links) {
        document.getElementById(`${key}-link`).href = links[key]
    }
}

function showWelcomeMessage() {
    alert(`1. Pick 🎯 whatever feels good to you.\n\n2. Time ⏱️ your practice so you can track it.\n\n3. Have fun! 🔥`);
}

function toggleLevelIndicator() {

    let levelIndicatorClasses = document.getElementById("level-indicator").classList

    let isVisible = levelIndicatorClasses.contains("faintly-visible")

    if (isVisible) {
        levelIndicatorClasses.remove("faintly-visible")
    } else {
        levelIndicatorClasses.add("faintly-visible")
    }
}

function openGuitarLogs() {
    window.open('https://advitiay-anand.notion.site/Logs-22251c1d0d9c806e9b04ec41c2d7ee2e')
}