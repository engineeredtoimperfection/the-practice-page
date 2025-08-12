loadConfig()

showWelcomeMessage()

function loadConfig() {
    fetch('./config.json')
    .then(res => res.json())
    .then(config => {

        const play = document.getElementById('play-activity')
        const practice = document.getElementById('practice-activity')
        const totalHours = document.getElementById('total-hours')
        const lastUpdated = document.getElementById('last-updated')

        play.textContent = config.play_activity
        practice.textContent = config.practice_activity
        totalHours.textContent = config.total_hours
        lastUpdated.textContent = `Last updated: ${config.last_updated}`

    })
    .catch(error => {
        console.error('Error fetching config:', error)
    })
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