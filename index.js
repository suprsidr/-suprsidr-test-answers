var answers = {
	helloWorld: function () {
		return 'Hello World!';
	},
	capitalizeEveryNthWord: function (sentence, offset, n) {
		var words = sentence.split(' '), len = words.length;
		for (var i = offset; i < len; i += n) {
			words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
		}
		return (words.join(' '));
	},
	isPrime: function (n) {
		if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) {
			return false;
		}
		if (n % 2 == 0) {
			return (n == 2);
		}
		if (n % 3 == 0) {
			return (n == 3);
		}
		var m = Math.sqrt(n);
		for (var i = 5; i <= m; i += 6) {
			if (n % i == 0) {
				return false;
			}
			if (n % (i + 2) == 0) {
				return false;
			}
		}
		return true;
	},
	goldenRatio: function (a, b) {
		var depth = 1000;
		var gr = [a, b];
		for (var i = 2; i < depth + 1; i++) {
			gr[i] = gr[i - 2] + gr[i - 1];
		}
		return gr[depth] / gr[depth - 1];
	},
	fibonacci: function (n) {
		var fibArray = [0, 1];
		for (var i = fibArray.length; i < n + 1; i++) {
			fibArray[i] = fibArray[i - 2] + fibArray[i - 1];
		}
		return fibArray[n];
	},
	squareRoot: function (n) {
		var min = 1;
		var max = n - 1;
		var guess;

		if (n === 2)
			return Math.SQRT2;

		while (min <= max) {
			guess = Math.floor((min + max) / 2);

			if (guess * guess === n) {
				return guess;
			} else {
				if (guess * guess < n) {
					min = guess + 1;
				} else {
					max = guess - 1;
				}
			}
		}

		return -1;

	},
	pascalTriangle: function (n, start = 1) {
	  const lines = [[start]];

	  for(let i=0;i<n-1;i++) {
	    lines.push(getNext(lines[i]))
	  }

	  return lines;

		function getNext(prev) {
		  const len = prev.length;
		  const next = [];
		  next[0] = next[len] = prev[0];

		  for(let i=1;i<len;i++) {
		    next[i] = prev[i-1] + prev[i];
		  }

		  return next;
		}
	}
};
module.exports = answers;
