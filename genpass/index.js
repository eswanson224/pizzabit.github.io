<head>
<title>Password Generator</title>
</head>
<body>
<script>
var a = ""
var b = ""
var output = ""

let alphabet = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"

for(i = 0; i < 18; i++) {
	a += alphabet[Math.floor(Math.random() * alphabet.length)]
	b += alphabet[Math.floor(Math.random() * alphabet.length)]
}

for (i in a) {
	output += String.fromCharCode(a.charCodeAt(i) ^ b.charCodeAt(i))
}
	
output = btoa(output)

document.body.innerText = output
</script>
</body>
