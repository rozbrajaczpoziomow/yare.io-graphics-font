var mapping = {
	A: (pos, height, width) => {
		graphics.line([pos[0]-width/2, pos[1]-height], [pos[0], pos[1]]);
		graphics.line([pos[0]-width/2, pos[1]-height], [pos[0]-width, pos[1]]);
		graphics.line([pos[0]-width+width/4, pos[1]-height/2], [pos[0]-width/4, pos[1]-height/2]);
	}
	B: (pos, height, width) => {
		graphics.line([pos[0]-width, pos[1]-height], [pos[0]-width, pos[1]]);

		graphics.line([pos[0]-width, pos[1]-height], [pos[0]-width/2, pos[1]-height]);
		graphics.line([pos[0]-width/2, pos[1]-height], [pos[0], pos[1]-height+height/8]);
		graphics.line([pos[0], pos[1]-height+height/8], [pos[0], pos[1]-height+height/3]);
		graphics.line([pos[0], pos[1]-height+height/3], [pos[0]-width/2, pos[1]-height/2]);
		graphics.line([pos[0]-width/2, pos[1]-height/2], [pos[0]-width, pos[1]-height/2]);

		graphics.line([pos[0]-width/2, pos[1]-height/2], [pos[0], pos[1]-height/3]);
		graphics.line([pos[0], pos[1]-height/3], [pos[0], pos[1]-height/8]);
		graphics.line([pos[0], pos[1]-height/8], [pos[0]-width/2, pos[1]]);
		graphics.line([pos[0]-width/2, pos[1]], [pos[0]-width, pos[1]]);
	},
	C: (pos, height, width) => {
		graphics.line([pos[0]-width, pos[1]], [pos[0], pos[1]]);
		graphics.line([pos[0]-width, pos[1]], [pos[0]-width, pos[1]-height]);
		graphics.line([pos[0], pos[1]-height], [pos[0]-width, pos[1]-height]);
	},
	D: (pos, height, width) => {
		graphics.line([pos[0]-width, pos[1]], [pos[0]-width, pos[1]-height]);

		graphics.line([pos[0]-width, pos[1]-height], [pos[0]-width/2, pos[1]-height]);
		graphics.line([pos[0]-width/2, pos[1]-height], [pos[0], pos[1]-height+height/4]);
		graphics.line([pos[0], pos[1]-height+height/4], [pos[0], pos[1]-height/4]);
		graphics.line([pos[0], pos[1]-height/4], [pos[0]-width/2, pos[1]]);
		graphics.line([pos[0]-width/2, pos[1]], [pos[0]-width, pos[1]]);
	},
	E: (pos, height, width) => {
		C(pos, height, width);
		graphics.line([pos[0]-width, pos[1]-height/2], [pos[0], pos[1]-height/2]);
	},
	F: (pos, height, width) => {
		graphics.line([pos[0]-width, pos[1]], [pos[0]-width, pos[1]-height]);
		graphics.line([pos[0], pos[1]-height], [pos[0]-width, pos[1]-height]);
		graphics.line([pos[0]-width, pos[1]-height/2], [pos[0], pos[1]-height/2]);
	},
	G: (pos, height, width) => {
		graphics.line([pos[0], pos[1]-height], [pos[0]-width, pos[1]-height]);
		graphics.line([pos[0]-width, pos[1]-height], [pos[0]-width, pos[1]]);
		graphics.line([pos[0], pos[1]], [pos[0]-width, pos[1]]);
		graphics.line([pos[0], pos[1]-height/2], [pos[0], pos[1]]);
		graphics.line([pos[0], pos[1]-height/2], [pos[0]-width/2, pos[1]-height/2]);
	},
	H: (pos, height, width) => {
		graphics.line([pos[0], pos[1]-height/2], [pos[0]-width, pos[1]-height/2]);
		graphics.line([pos[0]-width, pos[1]-height], [pos[0]-width, pos[1]]);
		graphics.line([pos[0], pos[1]-height], [pos[0], pos[1]]);
	},
	I: (pos, height, width) => {
		graphics.line([pos[0]-width/2, pos[1]-height], [pos[0]-width/2, pos[1]]);
		graphics.line([pos[0]-width/2-width/4, pos[1]-height], [pos[0]-width/2+width/4, pos[1]-height]);
		graphics.line([pos[0]-width/2-width/4, pos[1]], [pos[0]-width/2+width/4, pos[1]]);
	},
	J: (pos, height, width) => {
		graphics.line([pos[0], pos[1]-height], [pos[0], pos[1]]);
		graphics.line([pos[0]-width, pos[1]], [pos[0], pos[1]]);
		graphics.line([pos[0]-width, pos[1]], [pos[0]-width, pos[1]-height/2]);
	},
	K: (pos, height, width) => {
		graphics.line([pos[0]-width, pos[1]-height], [pos[0]-width, pos[1]]);
		graphics.line([pos[0]-width, pos[1]-height/2], [pos[0], pos[1]]);
		graphics.line([pos[0]-width, pos[1]-height/2], [pos[0], pos[1]-height]);
	},
	L: (pos, height, width) => {
		graphics.line([pos[0]-width, pos[1]-height], [pos[0]-width, pos[1]]);
		graphics.line([pos[0]-width, pos[1]], [pos[0], pos[1]]);
	},
	M: (pos, height, width) => {
		graphics.line([pos[0]-width, pos[1]-height], [pos[0]-width, pos[1]]);
		graphics.line([pos[0]-width, pos[1]-height], [pos[0]-width/2, pos[1]-height/2]);
		graphics.line([pos[0], pos[1]-height], [pos[0]-width/2, pos[1]-height/2]);
		graphics.line([pos[0], pos[1]-height], [pos[0], pos[1]]);
	},
	N: (pos, height, width) => {
		graphics.line([pos[0]-width, pos[1]-height], [pos[0]-width, pos[1]]);
		graphics.line([pos[0]-width, pos[1]-height], [pos[0], pos[1]]);
		graphics.line([pos[0], pos[1]], [pos[0], pos[1]-height]);
	},
	O: (pos, height, width) => {
		graphics.line([pos[0]-width, pos[1]], [pos[0], pos[1]]);
		graphics.line([pos[0], pos[1]-height], [pos[0], pos[1]]);
		graphics.line([pos[0]-width, pos[1]], [pos[0]-width, pos[1]-height]);
		graphics.line([pos[0], pos[1]-height], [pos[0]-width, pos[1]-height]);
	},
	P: (pos, height, width) => {
		graphics.line([pos[0]-width, pos[1]-height], [pos[0]-width, pos[1]]);

		graphics.line([pos[0]-width, pos[1]-height], [pos[0]-width/2, pos[1]-height]);
		graphics.line([pos[0]-width/2, pos[1]-height], [pos[0], pos[1]-height+height/8]);
		graphics.line([pos[0], pos[1]-height+height/8], [pos[0], pos[1]-height+height/3]);
		graphics.line([pos[0], pos[1]-height+height/3], [pos[0]-width/2, pos[1]-height/2]);
		graphics.line([pos[0]-width/2, pos[1]-height/2], [pos[0]-width, pos[1]-height/2]);
	},
	Q: (pos, height, width) => {
		console.log('Q is too qomplicated')
	},
	R: (pos, height, width) => {
		P(pos, height, width);
		graphics.line([pos[0]-width, pos[1]-height/2], [pos[0], pos[1]]);
	},
	S: (pos, height, width) => {
		graphics.line([pos[0]-width, pos[1]], [pos[0], pos[1]]);
		graphics.line([pos[0], pos[1]], [pos[0], pos[1]-height/2]);

		graphics.line([pos[0], pos[1]-height/2], [pos[0]-width, pos[1]-height/2]);
		graphics.line([pos[0]-width, pos[1]-height/2], [pos[0]-width, pos[1]-height]);

		graphics.line([pos[0]-width, pos[1]-height], [pos[0], pos[1]-height]);
	},
	T: (pos, height, width) => {
		graphics.line([pos[0]-width/2, pos[1]], [pos[0]-width/2, pos[1]-height]);
		graphics.line([pos[0]-width, pos[1]-height], [pos[0], pos[1]-height]);
	},
	U: (pos, height, width) => {
		graphics.line([pos[0]-width, pos[1]-height], [pos[0]-width, pos[1]]);
		graphics.line([pos[0]-width, pos[1]], [pos[0], pos[1]]);
		graphics.line([pos[0], pos[1]], [pos[0], pos[1]-height]);
	},
	V: (pos, height, width) => {
		graphics.line([pos[0]-width, pos[1]-height], [pos[0]-width/2, pos[1]]);
		graphics.line([pos[0]-width/2, pos[1]], [pos[0], pos[1]-height]);
	},
	W: (pos, height, width) => {
		graphics.line([pos[0]-width, pos[1]-height], [pos[0]-width, pos[1]]);
		graphics.line([pos[0]-width, pos[1]], [pos[0]-width/2, pos[1]-height/2]);
		graphics.line([pos[0], pos[1]], [pos[0]-width/2, pos[1]-height/2]);
		graphics.line([pos[0], pos[1]-height], [pos[0], pos[1]]);
	},
	X: (pos, height, width) => {
		graphics.line([pos[0]-width, pos[1]-height], [pos[0], pos[1]]);
		graphics.line([pos[0]-width, pos[1]], [pos[0], pos[1]-height]);
	},
	Y: (pos, height, width) => {
		graphics.line([pos[0]-width/2, pos[1]], [pos[0]-width/2, pos[1]-height/2]);
		graphics.line([pos[0]-width/2, pos[1]-height/2], [pos[0]-width, pos[1]-height]);
		graphics.line([pos[0]-width/2, pos[1]-height/2], [pos[0], pos[1]-height]);
	},
	Z: (pos, height, width) => {
		graphics.line([pos[0]-width, pos[1]], [pos[0], pos[1]]);
		graphics.line([pos[0]-width, pos[1]], [pos[0], pos[1]-height]);
		graphics.line([pos[0]-width, pos[1]-height], [pos[0], pos[1]-height]);
	},
	_: (pos, height, width) => {
		graphics.line([pos[0]-width, pos[1]], [pos[0], pos[1]]);
	},
	' ': (pos, height, width) => {}
}

function text(pos, height, width, delimiter, content) {
	content = content.toUpperCase()
	for(char in content) {
		var letter_pos = [pos[0]+width*char+delimiter*char, pos[1]];
		mapping[content[char]](letter_pos, height, width);
	}
}

function text_all(pos, height, width, delimiter) {
	text(pos, height, width, delimiter, Object.keys(mapping).join``);
}

text_all([250, 250], 60, 30, 5);
// text([250, 250], 40, 20, 10, 'hi')