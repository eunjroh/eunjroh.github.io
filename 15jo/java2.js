document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // 입력 값 가져오기
    const username = document.getElementById('username').value;

    // 사용자 인증
    if (username.includes('@gachon.ac.kr')) {
        alert('로그인 성공');
        // 로그인 성공 시 추가 로직을 여기에 작성
    } else {
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = '아이디가 올바르지 않습니다. 가천대학교 이메일을 사용해주세요.';
        errorMessage.style.display = 'block';
    }
});