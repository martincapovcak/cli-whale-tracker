const player = require('play-sound')((opts = []))

const playSound = path => {
	player.play(path, err => {
		if (err) throw err
	})
}

module.exports = playSound
