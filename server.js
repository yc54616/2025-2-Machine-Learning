// 필요한 express 모듈을 불러옵니다.
const express = require('express');
const path = require('path');

// express 앱을 생성합니다.
const app = express();
// 클라우드 플랫폼에서 제공하는 PORT 환경 변수를 사용하고, 없을 경우 3000번을 사용합니다.
const PORT = 80;

// 'public' 폴더에 있는 정적 파일들(html, css, js)을 사용하도록 설정합니다.
app.use(express.static(path.join(__dirname, 'public')));

// 서버를 지정된 포트와 모든 IP 주소에서 실행합니다.
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 서버가 포트 ${PORT} 에서 실행 중입니다.`);
});
