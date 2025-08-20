const isPersonalModeOn = detectPersonalMode()
setLinks(isPersonalModeOn)

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