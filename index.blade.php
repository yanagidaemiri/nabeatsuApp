<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>好きな倍数でアホになれるアプリ</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <audio id="audio" src="https://soundeffect-lab.info/sound/anime/mp3/stupid4.mp3"></audio>
</head>

<body>
    <div class="row">
        <ul id="output" class="horizontal"></ul>
    </div>
    <div class="fixed-controls">
        <button id="pauseButton">一時停止</button>
        <button id="resumeButton">再開</button>
        <form id="userInputForm">
            <input type="text" id="userInput" name="userInput" placeholder="値を入力してください">
            <input type="submit" value="送信">
        </form>
    </div>


    <script>
        const outputDataBlade = @json($output);
    </script>

    <script src="{{ asset('js/script.js') }}"></script>
</body>
