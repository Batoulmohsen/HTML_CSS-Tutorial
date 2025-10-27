<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Character Counter</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background: #f5f5f5;
        }
        h1 {
            text-align: center;
            color: #333;
        }
        textarea {
            width: 100%;
            height: 150px;
            padding: 10px;
            font-size: 16px;
            border: 2px solid #ddd;
            border-radius: 5px;
            resize: vertical;
        }
        .counter {
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            color: #007bff;
            margin-top: 15px;
        }
    </style>
</head>
<body>
    <h1>Character Counter</h1>
    <textarea id="txt" placeholder="Start typing..."></textarea>
    <div class="counter">Characters: <span id="count">0</span></div>

    <script>
        const txt = document.getElementById('txt');
        const count = document.getElementById('count');
        
        txt.addEventListener('input', () => {
            count.textContent = txt.value.length;
        });
    </script>
</body>
</html>