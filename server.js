// 필요한 express 모듈을 불러옵니다.
const express = require('express');
const path = require('path');

// express 앱을 생성합니다.
const app = express();
const PORT = 3000; // 서버를 실행할 포트 번호

// 'public' 폴더에 있는 정적 파일들(html, css, js)을 사용하도록 설정합니다.
app.use(express.static(path.join(__dirname, 'public')));

// 서버를 지정된 포트에서 실행하고, 실행되면 콘솔에 메시지를 출력합니다.
app.listen(PORT, () => {
    console.log(`🚀 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
