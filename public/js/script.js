document.addEventListener('DOMContentLoaded', function () {
    const output = document.getElementById('output');
    const pauseButton = document.getElementById('pauseButton');
    const resumeButton = document.getElementById('resumeButton');
    const userInputForm = document.getElementById('userInputForm');
    const audioElement = document.getElementById('audio'); // 音声要素を取得

    let index = 0;
    let interval;
    let outputData = outputDataBlade; // ブレードからのデータを取得

    function displayValue() {
        if (index < outputData.length) {
            let li = document.createElement('li');
    
            // typeof を使ってデータの型を確認し、文字列でない場合は変換する
            let value = typeof outputData[index] === 'string' ? outputData[index] : String(outputData[index]);
    
            li.innerHTML = value;
            output.appendChild(li);
    
            // 特定の条件で音声を再生
            playAudio(value);
    
            index++;
        } else {
            clearInterval(interval);
        }
    }

    function pauseDisplay() {
        clearInterval(interval);
    }

    function resumeDisplay() {
        interval = setInterval(displayValue, 2000);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const userInput = document.getElementById('userInput').value;
    
        // インデックスと表示をクリア
        index = 0;
        output.innerHTML = '';
    
        // フォームが送信されたらFizzBuzzを生成
        generateFizzBuzz(userInput);
    }
    
    function generateFizzBuzz(userInput) {
        outputData = []; // データをリセット
        for (let i = 1; i <= 100; i++) {
            let value;
            if (i % userInput === 0 || String(i).includes(userInput)) {
                value = '<span class="red-text">' + i + 'アオッ！</span>';
            } else {
                value = i;
            }
            outputData.push(value);
        }
        resumeDisplay(); // 表示再開
    }

    function playAudio(value) {
        if (value.includes('アオッ！')) { // 特定の条件で音声を再生
            audioElement.play();
        }
    }

    userInputForm.addEventListener('submit', handleSubmit);
    pauseButton.addEventListener('click', pauseDisplay);
    resumeButton.addEventListener('click', resumeDisplay);

    resumeDisplay(); // 最初に実行
});