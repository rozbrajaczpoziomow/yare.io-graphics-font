var pos = [ 500, 500 ]

var mapping = { A: A, B: B, C: C, D: D, E: E, F: F, G: G, H: H, I: I, J: J, K: K, L: L, M: M, N: N, O: O, P: P, Q: Q, R: R, S: S, T: T, U: U, V: V, W: W, X: X, Y: Y, Z: Z }

graphics.style = 'red';
// graphics.circle(pos, 1)

graphics.style = 'green';

function A(pos, height, width) {
    graphics.line([ pos[0]-width/2, pos[1]-height ], [ pos[0], pos[1] ]);
    graphics.line([ pos[0]-width/2, pos[1]-height ], [ pos[0]-width, pos[1] ]);
    graphics.line([ pos[0]-width+width/4, pos[1]-height/2 ], [ pos[0]-width/4, pos[1]-height/2 ])
}

function B(pos, height, width) {
    graphics.line([ pos[0]-width, pos[1]-height ], [ pos[0]-width, pos[1] ])
    
    graphics.line([ pos[0]-width, pos[1]-height ], [ pos[0]-width/2, pos[1]-height ])
    graphics.line([ pos[0]-width/2, pos[1]-height ], [ pos[0], pos[1]-height+height/8 ])
    graphics.line([ pos[0], pos[1]-height+height/8 ], [ pos[0], pos[1]-height+height/3 ])
    graphics.line([ pos[0], pos[1]-height+height/3 ], [ pos[0]-width/2, pos[1]-height/2 ])
    graphics.line([ pos[0]-width/2, pos[1]-height/2 ], [ pos[0]-width, pos[1]-height/2 ])
    
    graphics.line([ pos[0]-width/2, pos[1]-height/2 ], [ pos[0], pos[1]-height/3 ])
    graphics.line([ pos[0], pos[1]-height/3 ], [ pos[0], pos[1]-height/8 ])
    graphics.line([ pos[0], pos[1]-height/8 ], [ pos[0]-width/2, pos[1] ])
    graphics.line([ pos[0]-width/2, pos[1] ], [ pos[0]-width, pos[1] ])
}

function C(pos, height, width) {
    graphics.line([ pos[0]-width, pos[1] ], [ pos[0], pos[1] ])
    graphics.line([ pos[0]-width, pos[1] ], [ pos[0]-width, pos[1]-height ])
    graphics.line([ pos[0], pos[1]-height ], [ pos[0]-width, pos[1]-height ])
}

function D(pos, height, width) {
    graphics.line([ pos[0]-width, pos[1] ], [ pos[0]-width, pos[1]-height ])
    
    graphics.line([ pos[0]-width, pos[1]-height ], [ pos[0]-width/2, pos[1]-height ])
    graphics.line([ pos[0]-width/2, pos[1]-height ], [ pos[0], pos[1]-height+height/4 ])
    graphics.line([ pos[0], pos[1]-height+height/4 ], [ pos[0], pos[1]-height/4 ])
    graphics.line([ pos[0], pos[1]-height/4 ], [ pos[0]-width/2, pos[1] ])
    graphics.line([ pos[0]-width/2, pos[1] ], [ pos[0]-width, pos[1] ])
}

function E(pos, height, width) {
    C(pos, height, width)
    graphics.line([ pos[0]-width, pos[1]-height/2 ], [ pos[0], pos[1]-height/2 ])
}

function F(pos, height, width) {
    graphics.line([ pos[0]-width, pos[1] ], [ pos[0]-width, pos[1]-height ])
    graphics.line([ pos[0], pos[1]-height ], [ pos[0]-width, pos[1]-height ])
    graphics.line([ pos[0]-width, pos[1]-height/2 ], [ pos[0], pos[1]-height/2 ])
}

function G(pos, height, width) {
    graphics.line([ pos[0], pos[1]-height ], [ pos[0]-width, pos[1]-height ])
    graphics.line([ pos[0]-width, pos[1]-height ], [ pos[0]-width, pos[1] ])
    graphics.line([ pos[0], pos[1] ], [ pos[0]-width, pos[1] ])
    graphics.line([ pos[0], pos[1]-height/2 ], [ pos[0], pos[1] ])
    graphics.line([ pos[0], pos[1]-height/2 ], [ pos[0]-width/2, pos[1]-height/2 ])
}

function H(pos, height, width) {
    graphics.line([ pos[0], pos[1]-height/2 ], [ pos[0]-width, pos[1]-height/2 ])
    graphics.line([ pos[0]-width, pos[1]-height ], [ pos[0]-width, pos[1] ])
    graphics.line([ pos[0], pos[1]-height ], [ pos[0], pos[1] ])
}

function I(pos, height, width) {
    graphics.line([ pos[0]-width/2, pos[1]-height ], [ pos[0]-width/2, pos[1] ])
    graphics.line([ pos[0]-width/2-width/4, pos[1]-height ], [ pos[0]-width/2+width/4, pos[1]-height ])
    graphics.line([ pos[0]-width/2-width/4, pos[1] ], [ pos[0]-width/2+width/4, pos[1] ])
}

function J(pos, height, width) {
    graphics.line([ pos[0], pos[1]-height ], [ pos[0], pos[1] ])
    graphics.line([ pos[0]-width, pos[1] ], [ pos[0], pos[1] ])
    graphics.line([ pos[0]-width, pos[1] ], [ pos[0]-width, pos[1]-height/2 ])
}

function K(pos, height, width) {
    graphics.line([ pos[0]-width, pos[1]-height ], [ pos[0]-width, pos[1] ])
    graphics.line([ pos[0]-width, pos[1]-height/2 ], [ pos[0], pos[1] ])
    graphics.line([ pos[0]-width, pos[1]-height/2 ], [ pos[0], pos[1]-height ])
}

function L(pos, height, width) {
    graphics.line([ pos[0]-width, pos[1]-height ], [ pos[0]-width, pos[1] ])
    graphics.line([ pos[0]-width, pos[1] ], [ pos[0], pos[1] ])
}

function M(pos, height, width) {
    graphics.line([ pos[0]-width, pos[1]-height ], [ pos[0]-width, pos[1] ])
    graphics.line([ pos[0]-width, pos[1]-height ], [ pos[0]-width/2, pos[1]-height/2 ])
    graphics.line([ pos[0], pos[1]-height ], [ pos[0]-width/2, pos[1]-height/2 ])
    graphics.line([ pos[0], pos[1]-height ], [ pos[0], pos[1] ])
}

function N(pos, height, width) {
    graphics.line([ pos[0]-width, pos[1]-height ], [ pos[0]-width, pos[1] ])
    graphics.line([ pos[0]-width, pos[1]-height ], [ pos[0], pos[1] ])
    graphics.line([ pos[0], pos[1] ], [ pos[0], pos[1]-height ])
}

function O(pos, height, width) {
    graphics.line([ pos[0]-width, pos[1] ], [ pos[0], pos[1] ])
    graphics.line([ pos[0], pos[1]-height ], [ pos[0], pos[1] ])
    graphics.line([ pos[0]-width, pos[1] ], [ pos[0]-width, pos[1]-height ])
    graphics.line([ pos[0], pos[1]-height ], [ pos[0]-width, pos[1]-height ])
}

function P(pos, height, width) {
    graphics.line([ pos[0]-width, pos[1]-height ], [ pos[0]-width, pos[1] ])
    
    graphics.line([ pos[0]-width, pos[1]-height ], [ pos[0]-width/2, pos[1]-height ])
    graphics.line([ pos[0]-width/2, pos[1]-height ], [ pos[0], pos[1]-height+height/8 ])
    graphics.line([ pos[0], pos[1]-height+height/8 ], [ pos[0], pos[1]-height+height/3 ])
    graphics.line([ pos[0], pos[1]-height+height/3 ], [ pos[0]-width/2, pos[1]-height/2 ])
    graphics.line([ pos[0]-width/2, pos[1]-height/2 ], [ pos[0]-width, pos[1]-height/2 ])
}

function Q(pos, height, width) {
    console.log('sorry, Q is not implemented')
}

function R(pos, height, width) {
    P(pos, height, width)
    graphics.line([ pos[0]-width, pos[1]-height/2 ], [ pos[0], pos[1] ])
}

function S(pos, height, width) {
    graphics.line([ pos[0]-width, pos[1] ], [ pos[0], pos[1] ])
    graphics.line([ pos[0], pos[1] ], [ pos[0], pos[1]-height/2 ])
    
    graphics.line([ pos[0], pos[1]-height/2 ], [ pos[0]-width, pos[1]-height/2 ])
    graphics.line([ pos[0]-width, pos[1]-height/2 ], [ pos[0]-width, pos[1]-height ])
    
    graphics.line([ pos[0]-width, pos[1]-height ], [ pos[0], pos[1]-height ])
}

function T(pos, height, width) {
    graphics.line([ pos[0]-width/2, pos[1] ], [ pos[0]-width/2, pos[1]-height ])
    graphics.line([ pos[0]-width, pos[1]-height ], [ pos[0], pos[1]-height ])
}

function U(pos, height, width) {
    graphics.line([ pos[0]-width, pos[1]-height ], [ pos[0]-width, pos[1] ])
    graphics.line([ pos[0]-width, pos[1] ], [ pos[0], pos[1] ])
    graphics.line([ pos[0], pos[1] ], [ pos[0], pos[1]-height ])
}

function V(pos, height, width) {
    graphics.line([ pos[0]-width, pos[1]-height ], [ pos[0]-width/2, pos[1] ])
    graphics.line([ pos[0]-width/2, pos[1] ], [ pos[0], pos[1]-height ])
}

function W(pos, height, width) {
    graphics.line([ pos[0]-width, pos[1]-height ], [ pos[0]-width, pos[1] ])
    graphics.line([ pos[0]-width, pos[1] ], [ pos[0]-width/2, pos[1]-height/2 ])
    graphics.line([ pos[0], pos[1] ], [ pos[0]-width/2, pos[1]-height/2 ])
    graphics.line([ pos[0], pos[1]-height ], [ pos[0], pos[1] ])
}

function X(pos, height, width) {
    graphics.line([ pos[0]-width, pos[1]-height ], [ pos[0], pos[1] ])
    graphics.line([ pos[0]-width, pos[1] ], [ pos[0], pos[1]-height ])
}

function Y(pos, height, width) {
    graphics.line([ pos[0]-width/2, pos[1] ], [ pos[0]-width/2, pos[1]-height/2 ])
    graphics.line([ pos[0]-width/2, pos[1]-height/2 ], [ pos[0]-width, pos[1]-height ])
    graphics.line([ pos[0]-width/2, pos[1]-height/2 ], [ pos[0], pos[1]-height ])
}

function Z(pos, height, width) {
    graphics.line([ pos[0]-width, pos[1] ], [ pos[0], pos[1] ])
    graphics.line([ pos[0]-width, pos[1] ], [ pos[0], pos[1]-height ])
    graphics.line([ pos[0]-width, pos[1]-height ], [ pos[0], pos[1]-height ])
}

function _(pos, height, width) {
    // graphics.line([ pos[0]-width, pos[1] ], [ pos[0], pos[1] ])
}

function text(pos, height, width, delimiter, content) {
    content = content.toUpperCase()
    for(char in content) {
        var letter_pos = [ pos[0]+width*char+delimiter*char, pos[1] ];
        mapping[content[char]](letter_pos, height, width)
    }
}

function text_all(pos, height, width, delimiter) {
    text(pos, height, width, delimiter, Object.keys(mapping).join``)
}



text_all([ 250, 250 ], 60, 30, 5)
// text([ 250, 250 ], 40, 20, 10, 'hi')