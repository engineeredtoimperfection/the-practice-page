const isPersonalModeOn = detectPersonalMode()
setLinks(isPersonalModeOn)

const itemInFocus = getInFocusToday()

showWelcomeMessage(itemInFocus)

function detectPersonalMode() {
    return window.location.hash === '#me'
}

function setLinks(isPersonalModeOn) {
    const guitarTile = document.getElementById('guitar-tile')
    const vocalsTile = document.getElementById('vocals-tile')
    const musicianshipTile = document.getElementById('musicianship-tile')

    const guitarLink = isPersonalModeOn ? './pages/guitar/guitar.html#me' : './pages/guitar/guitar.html'
    const vocalsLink = isPersonalModeOn ? './pages/vocals/vocals.html#me' : './pages/vocals/vocals.html'
    const musicianshipLink = isPersonalModeOn ? './pages/musicianship/musicianship.html#me' : './pages/musicianship/musicianship.html'
    
    guitarTile.addEventListener('click', () => {
        window.open(guitarLink)
    })

    vocalsTile.addEventListener('click', () => {
        window.open(vocalsLink)
    })

    musicianshipTile.addEventListener('click', () => {
        window.open(musicianshipLink)
    })
}

function getInFocusToday() {

    // Weekly rotation order
    const focusRotation = [
        { emoji: '🎸', label: 'Guitar' },
        { emoji: '🎤', label: 'Vocals' },
        { emoji: '🎧', label: 'Musicianship' },
        { emoji: '🎸', label: 'Guitar' },
        { emoji: '🎤', label: 'Vocals' },
        { emoji: '🎧', label: 'Musicianship' },
        { emoji: '🎸', label: 'Guitar' }
    ];

    const today = new Date().getDay()

    return focusRotation[today]
}

function showWelcomeMessage(itemInFocus) {
    alert(
        `Today is... \n\n${itemInFocus.label} ${itemInFocus.emoji} day!\n\nHave fun! ❤️`
    )
}