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
        
    })
    .catch(error => {
        console.error('Error fetching config:', error)
    })