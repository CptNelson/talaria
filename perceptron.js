// Vectors
var inputs = [0, 0, 0, 1];
var weights = [0, 0, 0, 0];

var goal = 1;
var learningRate = 0.25;
var loops = 4;

// check if output is activated, 1 is activation.
function predict(input, weight) {
    var sum = input * weight;
    if (sum >= 1) {
        return 1;
    }
    else return 0;
}

// change weight
function learn(weights, node) {
    weights[node] += learningRate;
}

// activate neurons
function activate(input, weight) {
    for (var i = 0; i < input.length; i++) {
        var result = predict(input[i], weight[i])
        // if result is less than input, increase weight for that connection
        if (result < input[i]) {
            learn(weights, i)
        }
    }
}

function train() {
    for (var i = 0; i < loops; i++) {
        activate(inputs, weights);
        console.log(weights);
    }
    
}

train();
