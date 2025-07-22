function toggleLevelIndicator() {

    let levelIndicatorClasses = document.getElementById("level-indicator").classList

    let isVisible = levelIndicatorClasses.contains("faintly-visible")

    if (isVisible) {
        levelIndicatorClasses.remove("faintly-visible")
    } else {
        levelIndicatorClasses.add("faintly-visible")
    }
}
