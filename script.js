<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>NULLSECTOR - Flag Test</title>

<style>
body{
    background:#050505;
    color:#00ff99;
    font-family:Consolas,monospace;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    margin:0;
}

.box{
    width:600px;
    background:#111;
    border:2px solid #00ff99;
    border-radius:15px;
    padding:30px;
    text-align:center;
    box-shadow:0 0 20px #00ff99;
}

h1{
    color:#00ffff;
    text-shadow:0 0 10px cyan;
}

input{
    width:90%;
    padding:12px;
    margin:20px 0;
    font-size:18px;
    background:#000;
    color:#00ff99;
    border:2px solid #00ff99;
}

button{
    padding:12px 30px;
    font-size:18px;
    background:#00ff99;
    color:#000;
    border:none;
    border-radius:8px;
    cursor:pointer;
    font-weight:bold;
}

button:hover{
    background:#00ffff;
}

#message{
    margin-top:20px;
    font-size:20px;
    font-weight:bold;
}

#score{
    color:yellow;
    font-size:28px;
    margin-top:20px;
}
</style>

</head>
<body>

<div class="box">

<h1>⚡ NULLSECTOR FLAG TEST ⚡</h1>

<p>Enter your flag:</p>

<input
type="text"
id="flagInput"
placeholder="NULLSECTOR{...}">

<br>

<button onclick="checkFlag()">Submit Flag</button>

<div id="message"></div>

<div id="score">
Score: 0
</div>

</div>

<script>

let score = 0;

const correctFlag = "NULLSECTOR{scoreboard_test_001}";

function checkFlag(){

    const flag =
    document.getElementById("flagInput").value.trim();

    if(flag === correctFlag){

        score = 100;

        document.getElementById("message").innerHTML =
        "✅ Correct Flag!";

        document.getElementById("message").style.color="lime";

        document.getElementById("score").innerHTML =
        "Score: " + score;

    }

    else{

        document.getElementById("message").innerHTML =
        "❌ Incorrect Flag";

        document.getElementById("message").style.color="red";

    }

}

</script>

</body>
</html>
