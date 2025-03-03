document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('space-video');
  const audio = document.getElementById('space-audio');
  const playAudioButton = document.getElementById('playAudioButton');

  // 자동으로 비디오는 재생
  video.play();

  // 오디오 재생 버튼 클릭 시 오디오 재생
  playAudioButton.addEventListener('click', () => {
    audio.play().then(() => {
      console.log('오디오 재생 시작');
    }).catch(error => {
      console.error('오디오 재생 실패:', error);
    });
  });

  // 비디오가 끝나면 오디오도 멈춤
  video.addEventListener('ended', () => {
    audio.pause();
  });

  // 오디오가 끝나면 비디오도 멈춤
  audio.addEventListener('ended', () => {
    video.pause();
  });
});
