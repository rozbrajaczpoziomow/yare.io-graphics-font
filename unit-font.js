var mapping = {
	A: (pos, height, width) => {
		mapping.mv([pos[0]-width/2, pos[1]-height], [pos[0], pos[1]]);
		mapping.mv([pos[0]-width/2, pos[1]-height], [pos[0]-width, pos[1]]);
		mapping.mv([pos[0]-width+width/4, pos[1]-height/2], [pos[0]-width/4, pos[1]-height/2]);
	},
	B: (pos, height, width) => {
		mapping.mv([pos[0]-width, pos[1]-height], [pos[0]-width, pos[1]]);

		mapping.mv([pos[0]-width, pos[1]-height], [pos[0]-width/2, pos[1]-height]);
		mapping.mv([pos[0]-width/2, pos[1]-height], [pos[0], pos[1]-height+height/8]);
		mapping.mv([pos[0], pos[1]-height+height/8], [pos[0], pos[1]-height+height/3]);
		mapping.mv([pos[0], pos[1]-height+height/3], [pos[0]-width/2, pos[1]-height/2]);
		mapping.mv([pos[0]-width/2, pos[1]-height/2], [pos[0]-width, pos[1]-height/2]);

		mapping.mv([pos[0]-width/2, pos[1]-height/2], [pos[0], pos[1]-height/3]);
		mapping.mv([pos[0], pos[1]-height/3], [pos[0], pos[1]-height/8]);
		mapping.mv([pos[0], pos[1]-height/8], [pos[0]-width/2, pos[1]]);
		mapping.mv([pos[0]-width/2, pos[1]], [pos[0]-width, pos[1]]);
	},
	C: (pos, height, width) => {
		mapping.mv([pos[0]-width, pos[1]], [pos[0], pos[1]]);
		mapping.mv([pos[0]-width, pos[1]], [pos[0]-width, pos[1]-height]);
		mapping.mv([pos[0], pos[1]-height], [pos[0]-width, pos[1]-height]);
	},
	D: (pos, height, width) => {
		mapping.mv([pos[0]-width, pos[1]], [pos[0]-width, pos[1]-height]);

		mapping.mv([pos[0]-width, pos[1]-height], [pos[0]-width/2, pos[1]-height]);
		mapping.mv([pos[0]-width/2, pos[1]-height], [pos[0], pos[1]-height+height/4]);
		mapping.mv([pos[0], pos[1]-height+height/4], [pos[0], pos[1]-height/4]);
		mapping.mv([pos[0], pos[1]-height/4], [pos[0]-width/2, pos[1]]);
		mapping.mv([pos[0]-width/2, pos[1]], [pos[0]-width, pos[1]]);
	},
	E: (pos, height, width) => {
		mapping.C(pos, height, width);
		mapping.mv([pos[0]-width, pos[1]-height/2], [pos[0], pos[1]-height/2]);
	},
	F: (pos, height, width) => {
		mapping.mv([pos[0]-width, pos[1]], [pos[0]-width, pos[1]-height]);
		mapping.mv([pos[0], pos[1]-height], [pos[0]-width, pos[1]-height]);
		mapping.mv([pos[0]-width, pos[1]-height/2], [pos[0], pos[1]-height/2]);
	},
	G: (pos, height, width) => {
		mapping.mv([pos[0], pos[1]-height], [pos[0]-width, pos[1]-height]);
		mapping.mv([pos[0]-width, pos[1]-height], [pos[0]-width, pos[1]]);
		mapping.mv([pos[0], pos[1]], [pos[0]-width, pos[1]]);
		mapping.mv([pos[0], pos[1]-height/2], [pos[0], pos[1]]);
		mapping.mv([pos[0], pos[1]-height/2], [pos[0]-width/2, pos[1]-height/2]);
	},
	H: (pos, height, width) => {
		mapping.mv([pos[0], pos[1]-height/2], [pos[0]-width, pos[1]-height/2]);
		mapping.mv([pos[0]-width, pos[1]-height], [pos[0]-width, pos[1]]);
		mapping.mv([pos[0], pos[1]-height], [pos[0], pos[1]]);
	},
	I: (pos, height, width) => {
		mapping.mv([pos[0]-width/2, pos[1]-height], [pos[0]-width/2, pos[1]]);
		mapping.mv([pos[0]-width/2-width/4, pos[1]-height], [pos[0]-width/2+width/4, pos[1]-height]);
		mapping.mv([pos[0]-width/2-width/4, pos[1]], [pos[0]-width/2+width/4, pos[1]]);
	},
	J: (pos, height, width) => {
		mapping.mv([pos[0], pos[1]-height], [pos[0], pos[1]]);
		mapping.mv([pos[0]-width, pos[1]], [pos[0], pos[1]]);
		mapping.mv([pos[0]-width, pos[1]], [pos[0]-width, pos[1]-height/2]);
	},
	K: (pos, height, width) => {
		mapping.mv([pos[0]-width, pos[1]-height], [pos[0]-width, pos[1]]);
		mapping.mv([pos[0]-width, pos[1]-height/2], [pos[0], pos[1]]);
		mapping.mv([pos[0]-width, pos[1]-height/2], [pos[0], pos[1]-height]);
	},
	L: (pos, height, width) => {
		mapping.mv([pos[0]-width, pos[1]-height], [pos[0]-width, pos[1]]);
		mapping.mv([pos[0]-width, pos[1]], [pos[0], pos[1]]);
	},
	M: (pos, height, width) => {
		mapping.mv([pos[0]-width, pos[1]-height], [pos[0]-width, pos[1]]);
		mapping.mv([pos[0]-width, pos[1]-height], [pos[0]-width/2, pos[1]-height/2]);
		mapping.mv([pos[0], pos[1]-height], [pos[0]-width/2, pos[1]-height/2]);
		mapping.mv([pos[0], pos[1]-height], [pos[0], pos[1]]);
	},
	N: (pos, height, width) => {
		mapping.mv([pos[0]-width, pos[1]-height], [pos[0]-width, pos[1]]);
		mapping.mv([pos[0]-width, pos[1]-height], [pos[0], pos[1]]);
		mapping.mv([pos[0], pos[1]], [pos[0], pos[1]-height]);
	},
	O: (pos, height, width) => {
		mapping.mv([pos[0]-width, pos[1]], [pos[0], pos[1]]);
		mapping.mv([pos[0], pos[1]-height], [pos[0], pos[1]]);
		mapping.mv([pos[0]-width, pos[1]], [pos[0]-width, pos[1]-height]);
		mapping.mv([pos[0], pos[1]-height], [pos[0]-width, pos[1]-height]);
	},
	P: (pos, height, width) => {
		mapping.mv([pos[0]-width, pos[1]-height], [pos[0]-width, pos[1]]);

		mapping.mv([pos[0]-width, pos[1]-height], [pos[0]-width/2, pos[1]-height]);
		mapping.mv([pos[0]-width/2, pos[1]-height], [pos[0], pos[1]-height+height/8]);
		mapping.mv([pos[0], pos[1]-height+height/8], [pos[0], pos[1]-height+height/3]);
		mapping.mv([pos[0], pos[1]-height+height/3], [pos[0]-width/2, pos[1]-height/2]);
		mapping.mv([pos[0]-width/2, pos[1]-height/2], [pos[0]-width, pos[1]-height/2]);
	},
	Q: (pos, height, width) => {
		console.log('Q is too qomplicated')
	},
	R: (pos, height, width) => {
		mapping.P(pos, height, width);
		mapping.mv([pos[0]-width, pos[1]-height/2], [pos[0], pos[1]]);
	},
	S: (pos, height, width) => {
		mapping.mv([pos[0]-width, pos[1]], [pos[0], pos[1]]);
		mapping.mv([pos[0], pos[1]], [pos[0], pos[1]-height/2]);

		mapping.mv([pos[0], pos[1]-height/2], [pos[0]-width, pos[1]-height/2]);
		mapping.mv([pos[0]-width, pos[1]-height/2], [pos[0]-width, pos[1]-height]);

		mapping.mv([pos[0]-width, pos[1]-height], [pos[0], pos[1]-height]);
	},
	T: (pos, height, width) => {
		mapping.mv([pos[0]-width/2, pos[1]], [pos[0]-width/2, pos[1]-height]);
		mapping.mv([pos[0]-width, pos[1]-height], [pos[0], pos[1]-height]);
	},
	U: (pos, height, width) => {
		mapping.mv([pos[0]-width, pos[1]-height], [pos[0]-width, pos[1]]);
		mapping.mv([pos[0]-width, pos[1]], [pos[0], pos[1]]);
		mapping.mv([pos[0], pos[1]], [pos[0], pos[1]-height]);
	},
	V: (pos, height, width) => {
		mapping.mv([pos[0]-width, pos[1]-height], [pos[0]-width/2, pos[1]]);
		mapping.mv([pos[0]-width/2, pos[1]], [pos[0], pos[1]-height]);
	},
	W: (pos, height, width) => {
		mapping.mv([pos[0]-width, pos[1]-height], [pos[0]-width, pos[1]]);
		mapping.mv([pos[0]-width, pos[1]], [pos[0]-width/2, pos[1]-height/2]);
		mapping.mv([pos[0], pos[1]], [pos[0]-width/2, pos[1]-height/2]);
		mapping.mv([pos[0], pos[1]-height], [pos[0], pos[1]]);
	},
	X: (pos, height, width) => {
		mapping.mv([pos[0]-width, pos[1]-height], [pos[0], pos[1]]);
		mapping.mv([pos[0]-width, pos[1]], [pos[0], pos[1]-height]);
	},
	Y: (pos, height, width) => {
		mapping.mv([pos[0]-width/2, pos[1]], [pos[0]-width/2, pos[1]-height/2]);
		mapping.mv([pos[0]-width/2, pos[1]-height/2], [pos[0]-width, pos[1]-height]);
		mapping.mv([pos[0]-width/2, pos[1]-height/2], [pos[0], pos[1]-height]);
	},
	Z: (pos, height, width) => {
		mapping.mv([pos[0]-width, pos[1]], [pos[0], pos[1]]);
		mapping.mv([pos[0]-width, pos[1]], [pos[0], pos[1]-height]);
		mapping.mv([pos[0]-width, pos[1]-height], [pos[0], pos[1]-height]);
	},
	_: (pos, height, width) => {
		mapping.mv([pos[0]-width, pos[1]], [pos[0], pos[1]]);
	},
	' ': (pos, height, width) => {},
	mv: (p1, p2) => {
		let delta = p2.map((v, i) => v - p1[i]);
		for(var i = 1; i <= 4; ++i)
			mapping.spirits.pop().move(p1.map((v, vi) => v + delta[vi] * (i / 4)));
	}
}

function text(pos, height, width, delimiter, content) {
	content = content.toUpperCase()
	for(cid in content) {
		var letter_pos = [pos[0] + (width + delimiter) * cid, pos[1]];
		mapping[content[cid]](letter_pos, height, width);
	}
}

function text_all(pos, height, width, delimiter) {
	text(pos, height, width, delimiter, Object.keys(mapping).join``);
}

mapping.spirits = [...my_spirits];

text_all([250, 250], 60, 30, 5);
// text([250, 250], 40, 20, 10, 'hi')

console.log(mapping.spirits.length, 'free spirits');