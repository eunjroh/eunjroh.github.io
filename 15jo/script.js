document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // 폼 입력 값 가져오기
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const category = document.getElementById('category').value;
    const message = document.getElementById('message').value;

    // 현재 날짜와 시간 가져오기
    const currentDate = new Date();
    const formattedDate = currentDate.getFullYear() + '년 ' + 
                          (currentDate.getMonth() + 1) + '월 ' + 
                          currentDate.getDate() + '일 ' +
                          currentDate.getHours() + '시 ' + 
                          currentDate.getMinutes() + '분';

    // 타임라인에 추가할 새로운 항목 생성
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';

    const timelineContent = document.createElement('div');
    timelineContent.className = 'timeline-content';

    const timelineHeader = document.createElement('h3');
    timelineHeader.textContent = formattedDate;

    const timelineMessage = document.createElement('p');
    timelineMessage.innerHTML = `<strong>이름:</strong> ${name}<br>
                                 <strong>이메일:</strong> ${email}<br>
                                 <strong>문의 유형:</strong> ${category}<br>
                                 <strong>메시지:</strong> ${message}`;

    timelineContent.appendChild(timelineHeader);
    timelineContent.appendChild(timelineMessage);
    timelineItem.appendChild(timelineContent);

    // 타임라인에 새로운 항목 추가
    document.getElementById('timeline').appendChild(timelineItem);

    // 폼 초기화
    document.getElementById('contact-form').reset();
});