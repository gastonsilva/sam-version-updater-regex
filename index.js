const searchRegex = /(\s+Tags:\n\s+version: )(\d+\.\d+\.\d+)\n\n/gm

module.exports.readVersion = function (contents) {
    return searchRegex.exec(contents)[2]
}

module.exports.writeVersion = function (contents, version) {
    return contents.replace(searchRegex,"$1" + version + "\n\n")
}
